import { FaPause, FaPlay } from "react-icons/fa";
import AudioWaveForm from "../AudioWaveForm/AudioWaveForm";
import { useAudio } from "../Context/AudioContext/AudioContext";
import DownloadBtn from "./DownloadBtn";
import Link from "next/link";
import { TbChevronsLeft } from "react-icons/tb"
export default function Player({ tracks, title, href }) {
  const { currentTrack, isPlaying, playTrack, togglePlay } = useAudio();

  const isCurrent = (track) => currentTrack?.id === track.id;

  const payantStyle = {
    color: "var(--payant)",
    background: "var(--payantBg)",
  };
  const freeStyle = {
    color: "var(--free)",
    background: "var(--freeBg)",
  };
 const downloadStyle = {
    color: "var(--downloadBtn)",
    background: "var(--downloadBtnBg)",
  };
  return (
    <section className="audio-section container py-5">
      <div className="d-flex justify-content-between">
        <h2 className="text-warning mb-4">{title}</h2>
        <Link 
        href={href} 
        className="text-decoration-none link-info">
        <TbChevronsLeft /> Voir tous
        </Link>
      </div>
      

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
              <h5 className="mb-1 text-white">{track.title}</h5>
              <small className="text-secondary">{track.artist}</small>
               <br/>
              <small>
                <span
                  className="py-1 px-2 rounded-pill me-2"
                  style={track.isFree ? freeStyle : payantStyle}
                >
                  {track.isFree ? "Gratuit" : "Payant"}{" "}
                </span>
                <DownloadBtn />
              </small>
            </div>

            {/* Waveform */}
            <div className="flex-grow-1 mx-4">
              <AudioWaveForm url={track.audioUrl} />
            </div>

            {/* Play / Pause */}
            <button
              className="btn btn-warning rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: 45, height: 45 }}
              onClick={() => (active ? togglePlay() : playTrack(track))}
            >
              {active && isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        );
      })}
    </section>
  );
}
