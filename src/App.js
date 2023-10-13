import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CountDown from "./components/CountDown/CountDown";
import Events from "./components/Events/Events";
import Stay from "./components/Stay/Stay";
import Ending from "./components/Ending/Ending";
import Backgroundimage from "./components/Backgroundimage/Backgroundimage";
import { Link, Element } from "react-scroll";

function App() {
  return (
    <div className="App" name="landingPage">
      <div className="background-image"></div>
      <h1 className="mainNameTitle">Janaki & Vinay</h1>
      <NavBar />
      <CountDown />
      {/* <Backgroundimage/> */}
      <Events />
      <Stay />
      <Ending />
    </div>
  );
}

export default App;
