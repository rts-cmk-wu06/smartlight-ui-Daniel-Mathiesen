
const Bg = () => {
    return ( 
        <div id="background" className="absolute -z-10" style={{backgroundColor:"#0A4DA2", width:"375px", height:"812px"}}>
            <div id="circleContainer" className="w-full h-1/2">
                <div id="circle_top_left" className="absolute w-48 h-48 rounded-full -top-24 -left-14" style={{backgroundColor:"#FFFFFF", opacity:"4.3%"}}/>
                <div id="circle_bottom_left" className="absolute w-48 h-48 rounded-full top-36" style={{backgroundColor:"#FFFFFF", opacity:"4.3%"}}/>
                <div id="circle_right" className="absolute w-48 h-48 rounded-full top-16 -right-20" style={{backgroundColor:"#FFFFFF", opacity:"4.3%"}}/>
            </div>
        </div>
     );
}
 
export default Bg;