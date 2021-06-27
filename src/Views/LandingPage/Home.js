import "./Home.scss";

import Header from "../../Components/Header/Header";
import AboutSection from "./Components/AboutSection/AboutSection";
import LandingSection from "./Components/LandingSection/LandingSection";
import SpeakerSection from "./Components/SpeakerSection/SpeakerSection";
import EventSection from "./Components/EventsSection/EventSection";
import CountdownSection from "./Components/CountdownSection/Countdown";
import FooterSection from "./Components/FooterSection/FooterSection";

function Home() {
  return (
    <div className="Maincontainer">
      <Header />
      <LandingSection />
      <CountdownSection />
      <AboutSection />
      <SpeakerSection />
      <EventSection />
      <FooterSection />
    </div>
  );
}

export default Home;
