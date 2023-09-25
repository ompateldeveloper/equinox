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
    this.volumeArray = []; // Array to store audio volume

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

    // Initialize filter nodes and other settings
    this.bassFilter = this.audioContext.createBiquadFilter();
    this.trebleFilter = this.audioContext.createBiquadFilter();
    this.limiterNode = this.audioContext.createDynamicsCompressor();

    // Set filter settings
    this.bassFilter.type = "lowshelf";
    this.bassFilter.frequency.value = 200;
    this.trebleFilter.type = "highshelf";
    this.trebleFilter.frequency.value = 2000;

    this.limiterNode.threshold.value = -2; // Adjust threshold as needed
    this.limiterNode.knee.value = 1;
    this.limiterNode.ratio.value = 10;
    this.limiterNode.attack.value = 0.005;
    this.limiterNode.release.value = 0.05;

    // Connect the audio nodes
    this.audioSource.connect(this.bassFilter);
    this.bassFilter.connect(this.trebleFilter);
    this.trebleFilter.connect(this.limiterNode);
    this.limiterNode.connect(this.audioContext.destination);

    // Start processing audio volume
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

      // Calculate average volume
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      const averageVolume = sum / bufferLength;

      // Add volume to the array
      this.volumeArray.push(averageVolume);

      // Call the processVolume function again
      requestAnimationFrame(processVolume);
    };

    // Connect the audio source to the analyser
    this.audioSource.connect(audioAnalyser);

    // Start processing volume
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
      console.log("resumed");
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
      console.log(existingFilter.gain.value);
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