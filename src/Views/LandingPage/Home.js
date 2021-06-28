import "./Home.scss";

import Header from "../../Components/Header/Header";
import AboutSection from "./Components/AboutSection/AboutSection";
import LandingSection from "./Components/LandingSection/LandingSection";
import SpeakerSection from "./Components/SpeakerSection/SpeakerSection";
import EventSection from "./Components/EventsSection/EventSection";
import SponsorSection from "./Components/SponsorSection/SponsorSection";
import CountdownSection from "./Components/CountdownSection/Countdown";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div className="Maincontainer">
      <Header />
      <LandingSection />
      <CountdownSection />
      <AboutSection />
      <SpeakerSection />
      <EventSection />
      <SponsorSection/>
      <Footer />
    </div>
  );
}

export default Home;
