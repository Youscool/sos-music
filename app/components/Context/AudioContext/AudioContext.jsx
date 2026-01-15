"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  /* ------------------ CONTROLES ------------------ */

  const playTrack = useCallback((track) => {
    if (!track) return;

    setCurrentTrack((prev) => {
      if (prev?.audioUrl === track.audioUrl) {
        return prev;
      }
      return track;
    });
  }, []);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Lecture bloquée par le navigateur :", err);
      }
    }
  }, [isPlaying]);

  const seek = useCallback((time) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = time;
    setCurrentTime(time);
  }, []);

  /* ------------------ EVENTS AUDIO ------------------ */

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () =>
      setCurrentTime(audio.currentTime);

    const handleLoadedMetadata = () =>
      setDuration(audio.duration || 0);

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  /* ▶️ AUTO PLAY APRÈS CHANGEMENT DE TRACK */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    const playNewTrack = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Autoplay bloqué :", err);
        setIsPlaying(false);
      }
    };

    playNewTrack();
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
{currentTrack && (
  <audio
    ref={audioRef}
    src={currentTrack.audioUrl}
    preload="metadata"
    playsInline
  />
)}
    </AudioContext.Provider>
  );
}

/* ------------------ HOOK ------------------ */

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error(
      "useAudio doit être utilisé à l'intérieur de AudioProvider"
    );
  }
  return context;
}
