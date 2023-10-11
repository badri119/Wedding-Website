import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CountDown from "./components/CountDown/CountDown";
import Events from "./components/Events/Events";
import Stay from "./components/Stay/Stay";
import Transport from "./components/Transport/Transport";
import Ending from "./components/Ending/Ending";
import Backgroundimage from "./components/Backgroundimage/Backgroundimage";
function App() {
  return (
    <div className="App">
      <div className="background-image"></div>
      <h1>Janaki & Vinay</h1>
      <NavBar />
      <CountDown />
      {/* <Backgroundimage/> */}
      <Events />
      <Stay />
      <Transport />
      <Ending />
    </div>
  );
}

export default App;
