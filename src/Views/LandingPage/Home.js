import "./Home.scss";

import Header from "../../Components/Header/Header";
import AboutSection from "./Components/AboutSection/AboutSection";
import LandingSection from "./Components/LandingSection/LandingSection";
import SpeakerSection from "./Components/SpeakerSection/SpeakerSection";
import EventSection from "./Components/EventsSection/EventSection";
function Home() {
  return (
    <div className="Maincontainer">
      <Header />
      <LandingSection />
      <AboutSection />
      <SpeakerSection />
      <EventSection />
    </div>
  );
}

export default Home;
