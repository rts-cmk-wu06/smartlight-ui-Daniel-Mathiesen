import MainOptions from "../components/MainOptions";
import Header from "../components/Header";
import RoomBlocks from "../components/RoomBlock";
import { Link } from "react-router-dom";
const Home = () => {
    return (  
        <>
      <Header></Header>
      <MainOptions>
        <RoomBlocks></RoomBlocks>
      </MainOptions>
    </>
    );
}
 
export default Home;