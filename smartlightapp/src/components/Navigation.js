const Navigation = () => {
    return (  
            <div className="container h-16 absolute bottom-0 flex justify-evenly items-center"style={{backgroundColor:"#FFFFFF", boxShadow:"0px 0px 1px 0px #888888"}}>
                <img className="w-6 h-8" src={require("../assets/bulb.png")} alt="" />
                <img className="w-8 h-8" src={require("../assets/Icon feather-home.png")} alt="" />
                <img className="w-8 h-8" src={require("../assets/Icon feather-settings.png")} alt="" />
            </div>            
    );
}
 
export default Navigation;