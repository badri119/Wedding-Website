import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CountDown from "./components/CountDown/CountDown";
import Events from "./components/Events/Events";
import Stay from "./components/Stay/Stay";
import Ending from "./components/Ending/Ending";

function App() {
  return (
    <div className="App" name="landingPage">
      <div className="background-image"></div>
      <h1 className="mainNameTitle">Janaki & Vinay</h1>
      <NavBar />
      <CountDown />
      <Events />
      <Stay />
      <Ending />
    </div>
  );
}

export default App;
