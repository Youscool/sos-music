"use client";
import { AudioProvider } from "./components/Context/AudioContext/AudioContext"
import GlobalPlayer from "./components/GlobalPlayer/GlobalPlayer";

export default function Providers({ children }) {
  return (
    <AudioProvider>
      {children}
      <GlobalPlayer />
    </AudioProvider>
  );
}
