import Header from "./Components/Layout/Header";
import NavDrawer from "./Components/Layout/NavDrawer";
import Slider from "./Components/Event_Carousel/Slider";

const App = (props) => {
  return (
    <>
      <Header />
      <NavDrawer />
      <div className="carousel">
        <Slider />
      </div>
    </>
  );
};
export default App;
