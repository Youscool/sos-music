"use client";
import { useAudio } from "../Context/AudioContext/AudioContext";
import AudioWaveForm from "../AudioWaveForm/AudioWaveForm";
import { FaPlay, FaPause } from "react-icons/fa";

const tracks = [
  { 
    id: 1,
    title: "Afro Beat Session 1",
    artist: "SOS Music Studio",
    audioUrl: "/audio/Track-1.mp3",
  },
  { 
    id: 2,
    title: "Afro Beat Session 2",
    artist: "SOS Music Studio",
    audioUrl: "/audio/Track-2.mp3",
  },
  { 
    id: 3,
    title: "Rap Vocal Mix",
    artist: "SOS Music Studio",
    audioUrl: "/audio/Track-3.mp3",
  },
];

export default function AudioSection() {
  const {
    currentTrack,
    isPlaying,
    playTrack,
    togglePlay,
  } = useAudio();

  const isCurrent = (track) =>
    currentTrack?.id === track.id;

  return (
    <section className="audio-section container py-5">
      <h2 className="text-warning mb-4">
        Écoutez nos productions
      </h2>

      {tracks.map((track) => {
        const active = isCurrent(track);

        return (
          <div
            key={track.id}
            className={`track-card d-flex align-items-center justify-content-between mb-4 p-3 rounded
              ${active ? "active-track" : ""}`}
          >
            {/* Infos */}
            <div className="me-3">
              <h5 className="mb-1 text-white">
                {track.title}
              </h5>
              <small className="text-muted">
                {track.artist}
              </small>
            </div>

            {/* Waveform */}
            <div className="flex-grow-1 mx-4">
              <AudioWaveForm url={track.audioUrl} />
            </div>

            {/* Play / Pause */}
            <button
              className="btn btn-outline-warning rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: 45, height: 45 }}
              onClick={() =>
                active ? togglePlay() : playTrack(track)
              }
            >
              {active && isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        );
      })}
    </section>
  );
}
