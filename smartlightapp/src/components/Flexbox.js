const FlexBoxer = (props) => {
    return ( 
            <div className="flex flex-col-reverse h-full">{props.children}</div>
    );
}
 
export default FlexBoxer