
const MainBg = (props) => {
    return ( 
            <div id="mainBg" className=" rounded-t-3xl cotainer unselected" style={{backgroundColor:"#F6F8FB"}}>
                {props.children}
            </div>
     );
}
 
export default MainBg;