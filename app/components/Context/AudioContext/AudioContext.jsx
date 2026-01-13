"use client";
import { createContext, useContext, useRef, useState, useEffect } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  /* ------------------ CONTROLES ------------------ */

  const playTrack = (track) => {
    if (!audioRef.current) return;

    // Nouveau track → on change seulement le src
    if (track && track.audioUrl !== currentTrack?.audioUrl) {
      setCurrentTrack(track);
      return;
    }

    // Même track → play
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
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

  /* ▶️ PLAY APRÈS CHANGEMENT DE TRACK (FIX ERREUR) */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    audio.load();

    const onCanPlay = () => {
      audio.play();
      setIsPlaying(true);
    };

    audio.addEventListener("canplay", onCanPlay);

    return () => {
      audio.removeEventListener("canplay", onCanPlay);
    };
  }, [currentTrack]);

  return (
    <AudioContext.Provider
      value={{
        audioRef,

        currentTrack,
        isPlaying,

        duration,
        currentTime,
        remainingTime: Math.max(duration - currentTime, 0),

        playTrack,
        pause,
        togglePlay,
        seek,
      }}
    >
      {children}

      {/* AUDIO GLOBAL */}
      <audio ref={audioRef} preload="metadata" />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
