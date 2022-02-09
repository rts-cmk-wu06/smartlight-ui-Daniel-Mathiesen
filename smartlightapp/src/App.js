import BackgroundWrapper from "./components/BackgroundWrapper"
import MainOptions from "./components/MainOptions";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import RoomBlocks from "./components/RoomBlock";
import FlexBoxer from "./components/Flexbox";
import { Route, Routes} from "react-router-dom";
import Home from "./Pages/Home"
import Room from "./Pages/Room";

function App() {
  return (
      <div className="App">
        <BackgroundWrapper/>
        <Navigation/>
    <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Room" element={<Room/>}/>
    </Routes>
    </div>
  );
}

export default App;
