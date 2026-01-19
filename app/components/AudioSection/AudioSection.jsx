"use client";
import { useAudio } from "../Context/AudioContext/AudioContext";
import AudioWaveForm from "../AudioWaveForm/AudioWaveForm";
import { FaPlay, FaPause } from "react-icons/fa";
import Player from "../Player/Player";

const tracks = [
  {
    id: 1,
    title: "Musique 1",
    artist: "SOS Music Studio",
    audioUrl: "/audio/song-2.mp3",
    isFree: true,
  },
  {
    id: 2,
    title: "Musique 2",
    artist: "SOS Music Studio",
    audioUrl: "/audio/song-3.mp3",
    isFree: false,
  },
];

export default function AudioSection() {
  return <Player tracks={tracks} title={"Nos Sons Produits"} href={"#"}/>
}
