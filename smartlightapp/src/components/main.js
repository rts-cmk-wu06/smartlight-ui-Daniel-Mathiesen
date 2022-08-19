import MainBg from "./mainbg";
import BtnContainer from "./buttonsContainer";
import Controls from "./controls";

const Main = () => {
    return ( 
        <MainBg>
            <h3 className="p-6">All Rooms</h3>
            <Controls/>
            <BtnContainer/>
        </MainBg>
     );
}
 
export default Main;