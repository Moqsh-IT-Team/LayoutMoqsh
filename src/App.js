import Header from "./Components/Layout/Header";
import Slider from "./Components/Event_Carousel/Slider";
import Footer from "./Components/Layout/Footer";
import Sponsors from "./Components/Layout/Sponsors";
const App = (props) => {
  return (
    <>
      <Header />
      <div className="carousel">
        <Slider />
      </div>
      <Sponsors />
      <Footer />
    </>
  );
};
export default App;
