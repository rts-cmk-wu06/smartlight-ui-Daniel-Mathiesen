import FlexBoxer from "./Flexbox";
const roomOptions = (props) => {
    return (
        <FlexBoxer>
        <div className="container h-2/3 rounded-t-3xl absolute top-72 z-10" style={{backgroundColor:"#F6F8FB"}}>
            <strong className="relative left-8 top-6 text-xl" style={{color:"#002d67"}}>Intensity</strong>
            {props.children}
        </div>
        </FlexBoxer>
        
    );
}
 
export default roomOptions;