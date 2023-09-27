export default class AudioProcessor {
  constructor(audioSelector) {
    this.audioContext = new window.AudioContext();
    this.audioSource = null;
    this.bassFilter = null;
    this.trebleFilter = null;
    this.limiterNode = null;
    this.isDisposed = false;
    this.isSuspended = false;
    this.peakingFilters = [];
    this.volumeArray = []; 

    const audioElement = audioSelector;

    if (audioElement instanceof HTMLMediaElement) {
      this.initAudioProcessing(audioElement);
    } else {
      console.error(
        `Audio element with selector "${audioSelector}" not found or is not a valid HTMLMediaElement.`
      );
    }

    if (this.audioContext && this.audioContext.state === "suspended") {
      this.isSuspended = true;
    }
  }

  initAudioProcessing(audioElement) {
    if (this.isDisposed) return;
    
    this.audioSource = this.audioContext.createMediaElementSource(audioElement);

    this.bassFilter = this.audioContext.createBiquadFilter();
    this.trebleFilter = this.audioContext.createBiquadFilter();
    this.limiterNode = this.audioContext.createDynamicsCompressor();

    this.bassFilter.type = "lowshelf";
    this.bassFilter.frequency.value = 250;
    this.trebleFilter.type = "highshelf";
    this.trebleFilter.frequency.value = 4000;

    // this.limiterNode.threshold.value = -3; 
    // this.limiterNode.knee.value = 1;
    // this.limiterNode.ratio.value = 0;
    // this.limiterNode.attack.value = 0.005;
    // this.limiterNode.release.value = 0.05;

    this.audioSource.connect(this.bassFilter);
    this.bassFilter.connect(this.trebleFilter);
    this.trebleFilter.connect(this.limiterNode);
    this.limiterNode.connect(this.audioContext.destination);

    this.processAudioVolume();
  }

  processAudioVolume() {
    const bufferSize = 2048;
    const audioAnalyser = this.audioContext.createAnalyser();
    audioAnalyser.fftSize = bufferSize;

    const bufferLength = audioAnalyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const processVolume = () => {
      audioAnalyser.getByteFrequencyData(dataArray);
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      const averageVolume = sum / bufferLength;
      this.volumeArray.push(averageVolume);
      requestAnimationFrame(processVolume);
    };

    this.audioSource.connect(audioAnalyser);

    processVolume();
  }

  setBass(value) {
    if (this.isDisposed) return;
    if (this.bassFilter) {
      this.bassFilter.gain.value = value;
    }
  }

  resume() {
    if (this.audioContext && this.audioContext.state === "suspended") {
      this.audioContext.resume().then(() => {
        console.log("AudioContext has been resumed.");
      });
    }
  }

  setTreble(value) {
    if (this.isDisposed) return;
    if (this.trebleFilter) {
      this.trebleFilter.gain.value = value;
    }
  }

  setPeakingFrequency(freq, gain) {
    if (this.isDisposed) return;

    const existingFilter = this.peakingFilters.find(
      (filter) => filter.frequency.value === freq
    );

    if (existingFilter) {
      existingFilter.gain.value = gain;
    } else {
      const peakingFilter = this.audioContext.createBiquadFilter();
      peakingFilter.type = "peaking";
      peakingFilter.frequency.value = freq;
      peakingFilter.Q.value = 3;
      peakingFilter.gain.value = gain;
      console.log("set for first time");

      if (this.trebleFilter) {
        this.trebleFilter.disconnect();
        this.trebleFilter.connect(peakingFilter);
        peakingFilter.connect(this.limiterNode);
      }

      this.peakingFilters.push(peakingFilter);
    }
  }

  dispose() {
    this.audioContext?.close();
    this.audioContext = null;
    this.audioSource = null;
    this.bassFilter = null;
    this.trebleFilter = null;
    this.limiterNode = null;
    console.log("disposed");
    this.isDisposed = true;
  }
}