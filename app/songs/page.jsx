import Player from "../components/Player/Player";

export default function Songs() {
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
    return<>
    <div className="container">
        <Player title={"Liste des musiques"} href={"#"} tracks={tracks}/>
    </div>
    </>
}