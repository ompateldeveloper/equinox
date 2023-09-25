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
    //   const audioElement = document.querySelector(audioSelector);
    const audioElement = audioSelector;

    if (audioElement instanceof HTMLMediaElement) {
      // Initialize audio processing chain
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

    this.audioSource.connect(this.bassFilter);
    this.bassFilter.connect(this.trebleFilter);
    this.trebleFilter.connect(this.limiterNode);
    this.limiterNode.connect(this.audioContext.destination);
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
  // setPeakingFrequency(freq, gain) {
  //   if (this.isDisposed) return;
  //   // Create a peaking filter and adjust its settings
  //   if (this.trebleFilter) {
  //     const peakingFilter = this.audioContext.createBiquadFilter();
  //     peakingFilter.type = 'peaking';
  //     peakingFilter.frequency.value = freq;
  //     peakingFilter.gain.value = gain;

  //     // Disconnect previous treble filter and connect the peaking filter
  //     this.trebleFilter.disconnect();
  //     this.trebleFilter.connect(peakingFilter);
  //     peakingFilter.connect(this.limiterNode);
  //   }
  // }
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
      peakingFilter.gain.value = gain;
      console.log(peakingFilter.gain);

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
  }
}
