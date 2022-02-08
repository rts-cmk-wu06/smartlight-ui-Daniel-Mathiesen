const Header = () => {
    return ( 
        <div>
            <div className="text-white font-weight:700 text-3xl absolute top-14 left-5"><strong>Control</strong>Panel</div> 
            <img className="absolute top-16 right-10" src={require("../assets/Ellipse 20.png")} alt="" />
            <div className="rounded w-2 h-2 absolute top-16 right-12" style={{backgroundColor:"#FF9898"}}></div>
        </div>
    );
}
 
export default Header;