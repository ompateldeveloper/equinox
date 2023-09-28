export default class AudioProcessor {
    constructor(audioSelector) {
        this.audioContext = new window.AudioContext();
        this.audioSource = null;
        this.bassFilter = null;
        this.trebleFilter = null;
        this.band31 = null;
        this.band62 = null;
        this.band125 = null;
        this.band250 = null;
        this.band500 = null;
        this.band1000 = null;
        this.band2000 = null;
        this.band4000 = null;
        this.band8000 = null;
        this.band16000 = null;

        this.limiterNode = null;


        this.isDisposed = false;
        this.isSuspended = false;


        if (audioSelector instanceof HTMLMediaElement) {
            this.initAudioProcessing(audioSelector);
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

        this.band31 = this.audioContext.createBiquadFilter();
        this.band62 = this.audioContext.createBiquadFilter();
        this.band125 = this.audioContext.createBiquadFilter();
        this.band250 = this.audioContext.createBiquadFilter();
        this.band500 = this.audioContext.createBiquadFilter();
        this.band1000 = this.audioContext.createBiquadFilter();
        this.band2000 = this.audioContext.createBiquadFilter();
        this.band4000 = this.audioContext.createBiquadFilter();
        this.band8000 = this.audioContext.createBiquadFilter();
        this.band16000 = this.audioContext.createBiquadFilter();

        this.band31.type="peaking";
        this.band62.type="peaking";
        this.band125.type="peaking";
        this.band250.type="peaking";
        this.band500.type="peaking";
        this.band1000.type="peaking";
        this.band2000.type="peaking";
        this.band4000.type="peaking";
        this.band8000.type="peaking";
        this.band16000.type="peaking";

        this.band31.frequency.value=31;
        this.band62.frequency.value=62;
        this.band125.frequency.value=125;
        this.band250.frequency.value=250;
        this.band500.frequency.value=500;
        this.band1000.frequency.value=1000;
        this.band2000.frequency.value=2000;
        this.band4000.frequency.value=4000;
        this.band8000.frequency.value=8000;
        this.band16000.frequency.value=16000;
        
        this.limiterNode.threshold.value = -3;
        this.limiterNode.knee.value = 1;
        this.limiterNode.ratio.value = 20;
        this.limiterNode.attack.value = 0.005;
        this.limiterNode.release.value = 0.05;

        this.audioSource.connect(this.bassFilter);
        this.bassFilter.connect(this.trebleFilter);
        this.trebleFilter.connect(this.band31);
        this.band31.connect(this.band62)
        this.band62.connect(this.band125)
        this.band125.connect(this.band250)
        this.band250.connect(this.band500)
        this.band500.connect(this.band1000)
        this.band1000.connect(this.band2000)
        this.band2000.connect(this.band4000)
        this.band4000.connect(this.band8000)
        this.band8000.connect(this.band16000)
        this.band16000.connect(this.limiterNode)
        this.limiterNode.connect(this.audioContext.destination);

        // this.processAudioVolume();
    }
    setBass(value) {
        if (this.isDisposed) return;
        if (this.bassFilter) {
            this.bassFilter.gain.value = value;
        }
    }
    setTreble(value) {
        if (this.isDisposed) return;
        if (this.trebleFilter) {
            this.trebleFilter.gain.value = value;
        }
    }

    setPeakingFilters(values) {
        for (const band in values) {
            if (this[band] && this[band].gain) {
                this[band].gain.value = ((values[band]-values[band]/2)/100)*10;
            }
        }
    }




    
    resume() {
        if (this.audioContext && this.audioContext.state === "suspended") {
            this.audioContext.resume().then(() => {
                console.log("AudioContext has been resumed.");
            });
        }
    }

    dispose() {
        this.audioContext?.close();
        // this.audioSource.dis
        this.audioContext = null;
        this.audioSource = null;
        this.bassFilter = null;
        this.trebleFilter = null;
        this.limiterNode = null;
        console.log("disposed");
        this.isDisposed = true;
    }
}






// setPeakingFrequency(freq, gain) {
//     if (this.isDisposed) return;

//     const existingFilter = this.peakingFilters.find(
//         (filter) => filter.frequency.value === freq
//     );

//     if (existingFilter) {
//         existingFilter.gain.value = gain;
//     } else {
//         const peakingFilter = this.audioContext.createBiquadFilter();
//         peakingFilter.type = "peaking";
//         peakingFilter.frequency.value = freq;
//         peakingFilter.Q.value = 3;
//         peakingFilter.gain.value = gain;
//         console.log("set for first time");

//         if (this.trebleFilter) {
//             this.trebleFilter.disconnect();
//             this.trebleFilter.connect(peakingFilter);
//             peakingFilter.connect(this.limiterNode);
//         }

//         this.peakingFilters.push(peakingFilter);
//     }
// }



// Experimental

// processAudioVolume() {
//     const bufferSize = 2048;
//     const audioAnalyser = this.audioContext.createAnalyser();
//     audioAnalyser.fftSize = bufferSize;

//     const bufferLength = audioAnalyser.frequencyBinCount;
//     const dataArray = new Uint8Array(bufferLength);

//     const processVolume = () => {
//         audioAnalyser.getByteFrequencyData(dataArray);
//         let sum = 0;
//         for (let i = 0; i < bufferLength; i++) {
//             sum += dataArray[i];
//         }
//         const averageVolume = sum / bufferLength;
//         this.volumeArray.push(averageVolume);
//         requestAnimationFrame(processVolume);
//     };

//     this.audioSource.connect(audioAnalyser);

//     processVolume();
// }