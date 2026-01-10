"use client";
import { createContext, useContext, useRef, useState, useEffect } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [duration, setDuration] = useState(0);     // durée totale
  const [currentTime, setCurrentTime] = useState(0); // temps actuel

  /* ------------------ CONTROLES ------------------ */

  const playTrack = (track) => {
    if (track) {
      setCurrentTrack(track);
    }
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? pause() : playTrack();
  };

  const seek = (time) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  /* ------------------ EVENTS AUDIO ------------------ */

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        audioRef,

        currentTrack,
        isPlaying,

        duration,
        currentTime,
        remainingTime: duration - currentTime,

        playTrack,
        pause,
        togglePlay,
        seek,
      }}
    >
      {children}

      {/* AUDIO GLOBAL */}
      <audio
        ref={audioRef}
        src={currentTrack?.audioUrl}
        preload="metadata"
      />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
