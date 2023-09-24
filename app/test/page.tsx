"use client";
import React, { useRef, useState, useEffect } from 'react';

function AudioProcessor() {
  const audioRef = useRef<HTMLMediaElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const bassFilterRef = useRef<BiquadFilterNode | null>(null);
  const trebleFilterRef = useRef<BiquadFilterNode | null>(null);

  const [bass, setBass] = useState(0);
  const [treble, setTreble] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!audioContextRef.current && play) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      audioContextRef.current = audioContext;

      const audioSource = audioContext.createMediaElementSource(audioRef.current!);
      bassFilterRef.current = audioContext.createBiquadFilter();
      trebleFilterRef.current = audioContext.createBiquadFilter();

      bassFilterRef.current.type = 'lowshelf';
      bassFilterRef.current.frequency.value = 200;
      trebleFilterRef.current.type = 'highshelf';
      trebleFilterRef.current.frequency.value = 6000;

      const limiterNode = audioContext.createDynamicsCompressor();
      limiterNode.threshold.value = -3; // Adjust threshold as needed
      limiterNode.knee.value = 0;
      limiterNode.ratio.value = 20;
      limiterNode.attack.value = 0.005;
      limiterNode.release.value = 0.05;

      audioSource.connect(bassFilterRef.current);
      bassFilterRef.current.connect(trebleFilterRef.current);
      trebleFilterRef.current.connect(limiterNode);
      limiterNode.connect(audioContextRef.current.destination);

      // Start audio playback
      audioRef.current!.play();
    }

    // Update filter settings
    if (play) {
      bassFilterRef.current!.gain.value = bass;
      trebleFilterRef.current!.gain.value = treble;
    }
  }, [bass, treble, play]);

  return (
    <div>
      <div className="play" onClick={() => setPlay(true)}>Play it damn it</div>
      <audio ref={audioRef} controls>
        <source src="orange.m4a" type="audio/x-m4a" />
        Your browser does not support the audio element.
      </audio>

      <div>
        <label>Bass</label>
        <input
          type="range"
          min="-12"
          max="12"
          value={bass}
          onChange={(e) => setBass(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Treble</label>
        <input
          type="range"
          min="-12"
          max="12"
          value={treble}
          onChange={(e) => setTreble(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default AudioProcessor;
