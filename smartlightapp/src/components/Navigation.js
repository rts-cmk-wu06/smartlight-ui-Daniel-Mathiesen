import { Link } from "react-router-dom";

const Navigation = () => {
    return (  
            <div className="container h-16 absolute bottom-0 flex justify-evenly items-center z-20"style={{backgroundColor:"#FFFFFF", boxShadow:"0px 0px 1px 0px #888888"}}>
                <Link to="/Room"><img className="w-6 h-8" src={require("../assets/bulb.png")} alt="" /></Link>
                <Link to="/"><img className="w-8 h-8" src={require("../assets/Icon feather-home.png")} alt="" /></Link>
                <img className="w-8 h-8" src={require("../assets/Icon feather-settings.png")} alt="" />
            </div>            
    );
}
 
export default Navigation;