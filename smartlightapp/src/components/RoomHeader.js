import { Link } from "react-router-dom";
const RoomHeader = () => {
    return ( 
        <div>
            <div className="text-white font-weight:700 text-3xl absolute top-14 left-7 pl-7"><strong>Bed</strong>Room<Link to="/"><img className="relative right-6 bottom-6" src={require("../assets/Icon ionic-md-arrow-round-back.png")} alt="" /></Link></div> 
            <img className="absolute right-10" src={require("../assets/light bulb.png")} alt="" />
            <div className="w-20 h-10 absolute top-36 left-8 font-bold text-lg" style={{color:"#FFD239"}}>4 Lights</div>
        </div>
    );
}
 
export default RoomHeader;