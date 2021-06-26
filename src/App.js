import Header from "./Components/Layout/Header";
import Slider from "./Components/Event_Carousel/Slider";
import Footer from "./Components/Layout/Footer";
const App = (props) => {
  return (
    <>
      <Header />
      <div className="carousel">
        <Slider />
      </div>
      <Footer />
    </>
  );
};
export default App;
