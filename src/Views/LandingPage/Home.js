import "./Home.scss";

import Header from "../../Components/Header/Header";
import AboutSection from "./Components/AboutSection/AboutSection";
import LandingSection from "./Components/LandingSection/LandingSection";
import SpeakerSection from "./Components/SpeakerSection/SpeakerSection";
import EventSection from "./Components/EventsSection/EventSection";
import SponsorSection from "./Components/SponsorSection/SponsorSection";
import Footer from "../../Components/Footer/Footer";
function Home() {
  return (
    <>
      <Header />
      <LandingSection />
      <AboutSection />
      <SpeakerSection />
      <EventSection />
      <SponsorSection />
      <Footer />
    </>
  );
}

export default Home;
