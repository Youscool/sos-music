import Player from "../components/Player/Player";

export default function Beats(params) {
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
    return<>
    <div className="container">
        <Player title={"Liste des beats"} href={"#"} tracks={tracks}/>
    </div>
    </>
}