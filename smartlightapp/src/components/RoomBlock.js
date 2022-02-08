const RoomBlock = () => {
    return ( 
        <div>
        <div className="container m-7 grid grid-rows-3 gap-5">
            <div className="h-36 w-36 rounded-3xl bg-white"></div>
            <div className="h-36 w-36 rounded-3xl bg-white"></div>
            <div className="h-36 w-36 rounded-3xl bg-white"></div>
        </div>
        <div className="container absolute top-56 left-44 m-8 grid grid-rows-3 gap-5">
            <div className="h-36 w-36 rounded-3xl bg-white"></div>
            <div className="h-36 w-36 rounded-3xl bg-white"></div>
            <div className="h-36 w-36 rounded-3xl bg-white"></div>
        </div>
        </div>
        
    );
}
 
export default RoomBlock;