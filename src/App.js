import Header from "./Components/Layout/Header";
import "./App.css";
import NavDrawer from "./Components/Layout/NavDrawer";
const App = (props) => {
  return (
    <div className="app">
      <Header />
      <NavDrawer></NavDrawer>
    </div>
  );
};
export default App;
