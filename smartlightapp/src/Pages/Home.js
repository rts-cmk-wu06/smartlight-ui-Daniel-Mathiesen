import BackgroundWrapper from "../components/BackgroundWrapper"
import MainOptions from "../components/MainOptions";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import RoomBlocks from "../components/RoomBlock";
import FlexBoxer from "../components/Flexbox";
import { Link } from "react-router-dom";
const Home = () => {
    return (  
        <>
    <BackgroundWrapper>
    </BackgroundWrapper>
      <Header></Header>
    <Navigation>
    </Navigation>
      <MainOptions>
        <RoomBlocks></RoomBlocks>
      </MainOptions>
    </>
    );
}
 
export default Home;