import "./Home.scss";

import Header from "../../Components/Header/Header";
import AboutSection from "./Components/AboutSection/AboutSection";
import LandingSection from "./Components/LandingSection/LandingSection";
import SpeakerSection from "./Components/SpeakerSection/SpeakerSection";
function Home() {
  return (
    <div className="Maincontainer">
      <Header />
      <LandingSection />
      <AboutSection />
      <SpeakerSection />
    </div>
  );
}

export default Home;
