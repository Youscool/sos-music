"use client";
import { FaPause, FaPlay } from "react-icons/fa";
import { useAudio } from "../Context/AudioContext/AudioContext";

export default function GlobalPlayer() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    currentTime,
    duration,
    seek,
    stop,
  } = useAudio();

  if (!currentTrack) return null;

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="global-player shadow-lg">
      {/* EXIT */}
      <button
        className="exit-btn"
        onClick={stop}
        aria-label="Fermer le player"
      >
        ✕
      </button>

      <div className="player-info">
        <h6 className="track-title">
          {currentTrack.title}
        </h6>
      </div>

      <div className="player-controls">
        <button
          className="play-btn"
          onClick={togglePlay}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <div className="progress-wrapper">
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={(e) =>
              seek(Number(e.target.value))
            }
          />

          <div className="time">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
