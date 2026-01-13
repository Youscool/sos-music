"use client";
import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import { useAudio } from "../Context/AudioContext/AudioContext";

export default function AudioWaveForm({ url }) {
  const waveformRef = useRef(null);
  const waveRef = useRef(null);

  const { currentTrack, currentTime, duration, seek } = useAudio();

  /* INIT WAVESURFER */
  useEffect(() => {
    waveRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#333",
      progressColor: "#f5c400",
      cursorColor: "#f5c400",
      barWidth: 3,
      height: 70,
      responsive: true,
    });

    waveRef.current.load(url);

    // Seek au clic sur waveform
    waveRef.current.on("seek", (progress) => {
      if (!duration) return;
      seek(progress * duration);
    });

    return () => waveRef.current.destroy();
  }, [url]);

  /* SYNC PLAYER → WAVEFORM */
  useEffect(() => {
    if (
      !waveRef.current ||
      !currentTrack ||
      currentTrack.audioUrl !== url ||
      !duration
    )
      return;

    const progress = currentTime / duration;
    waveRef.current.seekTo(progress);
  }, [currentTime, duration, currentTrack, url]);

  return <div ref={waveformRef} style={{ cursor: "pointer" }} />;
}
