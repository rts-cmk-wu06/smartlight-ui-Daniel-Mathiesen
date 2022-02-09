const lightBox = () => {
    return (  
        <div>
        <div className="p-3 bg-white w-32 h-12 rounded-xl flex justify-evenly absolute top-52 left-7">
            <img className="" src={require("../assets/surface1.png")} alt="" />
            <p className="text-sm font-bold text" style={{color:"#002D67"}}>Main Light</p>
        </div>
        <div className="p-3 w-36 h-12 rounded-xl flex justify-evenly absolute top-52 left-44" style={{backgroundColor:"#093B7B"}}>
            <img className="" src={require("../assets/furniture-and-household.png")} alt="" />
            <p className="text-sm font-bold text" style={{color:"#FFFFFF"}}>Desk lights</p>
        </div>
        <div className="p-3 bg-white w-32 h-12 rounded-xl flex justify-evenly absolute top-52" style={{left:"340px"}}>
            <img className="w-6 h-4" src={require("../assets/bedRoombed.png")} alt="" />
            <p className="text-sm font-bold text" style={{color:"#002D67"}}>Bed Light</p>
        </div>
        <div className="bg-white w-9 h-9 rounded-full absolute flex justify-center items-center z-20" style={{top:"270px", left:"360px"}}>
                <img className="w-5 h-5" src={require("../assets/Icon awesome-power-off.png")} alt="" />
        </div>
        </div>
        
    );
}
 
export default lightBox;