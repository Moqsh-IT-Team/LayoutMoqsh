import "./Home.scss";

import Header from "../../Components/Header/Header";
import AboutSection from "./Components/AboutSection/AboutSection";
import LandingSection from "./Components/LandingSection/LandingSection";
import SpeakerSection from "./Components/SpeakerSection/SpeakerSection";
import EventSection from "./Components/EventsSection/EventSection";
import CountdownSection from "./Components/CountdownSection/Countdown";
import Footer from "../../Components/Footer/Footer";
function Home() {
  return (
    <>
      <Header />
      <LandingSection />
      <CountdownSection />
      <AboutSection />
      <SpeakerSection />
      <EventSection />
      <Footer />
    </>
  );
}

export default Home;
