const Flex = (props) => {
    return ( 
        <div className="flex flex-col-reverse justify-between h-full">
            {props.children}
        </div>
     );
}
 
export default Flex;