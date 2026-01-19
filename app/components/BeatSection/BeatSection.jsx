"use client";
import { useAudio } from "../Context/AudioContext/AudioContext";
import AudioWaveForm from "../AudioWaveForm/AudioWaveForm";
import { FaPlay, FaPause } from "react-icons/fa";
import Player from "../Player/Player";

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

export default function BeatSection() {
 return <Player title={"Nos Beats"} tracks={tracks} href={"#"}/>
}
