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

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  /* ------------------ CONTROLES ------------------ */

  const playTrack = useCallback(async (track) => {
    const audio = audioRef.current;
    if (!audio || !track) return;

    // Nouveau track
    if (audio.src !== track.audioUrl) {
      audio.src = track.audioUrl;
      setCurrentTrack(track);
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Lecture bloquée :", err);
    }
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
        console.error("Lecture bloquée :", err);
      }
    }
  }, [isPlaying]);

  const seek = useCallback((time) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = time;
    setCurrentTime(time);
  }, []);
  /* ------------------ STOP AUDIO ------------------ */
const stop = useCallback(() => {
  const audio = audioRef.current;
  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;

  setIsPlaying(false);
  setCurrentTime(0);
  setDuration(0);
  setCurrentTrack(null);
}, []);

  /* ------------------ EVENTS AUDIO ------------------ */

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () =>
      setCurrentTime(audio.currentTime);

    const onLoadedMetadata = () =>
      setDuration(audio.duration || 0);

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        audioRef,

        currentTrack,
        isPlaying,

        currentTime,
        duration,
        remainingTime: Math.max(duration - currentTime, 0),

        playTrack,
        pause,
        togglePlay,
        seek,
        stop,
      }}
    >
      {children}

      {/* AUDIO GLOBAL : toujours présent */}
      <audio
        ref={audioRef}
        preload="metadata"
        playsInline
      />
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
