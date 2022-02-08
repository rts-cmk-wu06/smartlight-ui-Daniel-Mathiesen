import FlexBoxer from "./Flexbox";
const mainOptions = (props) => {
    return (
        <FlexBoxer>
        <div className="container h-3/4 rounded-t-3xl" style={{backgroundColor:"#F6F8FB"}}>
            <strong className="relative left-8 top-4 text-lg" style={{color:"#002d67"}}>All Rooms</strong>
            {props.children}
        </div>
        </FlexBoxer>
        
    );
}
 
export default mainOptions;