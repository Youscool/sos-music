import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

export default function AudioWaveform({ url, onPlay }) {
  const waveformRef = useRef(null);
  const waveRef = useRef(null);

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

    return () => waveRef.current.destroy();
  }, [url]);

  const handleClick = () => {
    onPlay(); // 👉 déclenche le player global
  };

  return (
    <div
      ref={waveformRef}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
}

