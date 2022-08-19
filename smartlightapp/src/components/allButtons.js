import Btn from "./button";


const Buttons = (props) => {
    const n = 6;

    return ( 
        [...Array(n)].map((e, i) => <Btn key={i} id={props.id} />)
     );
}
 
export default Buttons;