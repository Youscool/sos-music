
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import AudioSection from "./components/AudioSection/AudioSection"
import Pricing from "./components/Pricing/Pricing";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import BeatSection from "./components/BeatSection/BeatSection";

export default function Home() {
  return <>
  <Header/>
  <About/>
  <Services/>
  <AudioSection/>
  <BeatSection/>
  <Pricing/>
  <Contacts/>
  <Footer/>
  </>
}
