import Header from "./Components/Layout/Header";
import "./App.css";
import NavDrawer from "./Components/Layout/NavDrawer";
import Slider from "./Components/Event_Carousel/Slider";

const App = (props) => {
  return (
    <>
      <div className="app">
        <Header />
      </div>
      <NavDrawer />
      <div className="carousel">
        <Slider/>
      </div>
    </>
  );
};
export default App;
