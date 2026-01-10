"use client"
import { useAudio } from "../Context/AudioContext/AudioContext";


export default function GlobalPlayer() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    currentTime,
    duration,
    remainingTime,
    seek,
  } = useAudio();

  if (!currentTrack) return null;

  return (
    <div className="global-player">
      <h5>{currentTrack.title}</h5>

      <button onClick={togglePlay}>
        {isPlaying ? "⏸ Pause" : "▶️ Play"}
      </button>

      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={(e) => seek(Number(e.target.value))}
      />

      <div>
        {Math.floor(currentTime)}s / {Math.floor(duration)}s
        {" • "}
        -{Math.floor(remainingTime)}s
      </div>
    </div>
  );
}


