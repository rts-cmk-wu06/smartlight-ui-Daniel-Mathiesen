const RoomBlock = () => {
    return ( 
        <div className="flex justify-center items-center">
        <div className="container m-7 grid grid-rows-3 gap-5">
            <div className="h-36 w-36 rounded-3xl bg-white">
                <div className="relative left-6 top-5">
                    <img className="mb-4" src={require("../assets/bed.png")} alt="bed" />
                    <strong className="text-xl" style={{color:"#393939"}}>Bed room</strong>
                    <p className="font-bold" style={{color:"#FFA939"}}>4 Lights</p>
                </div>
            </div>
            <div className="h-36 w-36 rounded-3xl bg-white">
                <div className="relative left-6 top-5">
                    <img className="mb-4" src={require("../assets/kitchen.png")} alt="bed" />
                    <strong className="text-xl" style={{color:"#393939"}}>Kitchen</strong>
                    <p className="font-bold" style={{color:"#FFA939"}}>5 Lights</p>
                </div>
            </div>
            <div className="h-36 w-36 rounded-3xl bg-white">
                <div className="relative left-6 top-5">
                    <img className="mb-4" src={require("../assets/house.png")} alt="bed" />
                    <strong className="text-xl" style={{color:"#393939"}}>Outdoor</strong>
                    <p className="font-bold" style={{color:"#FFA939"}}>5 Lights</p>
                </div>
            </div>
        </div>
        <div className="container m-8 grid grid-rows-3 gap-5" style={{top:"248px"}}>
            <div className="h-36 w-36 rounded-3xl bg-white">
            <div className="relative left-6 top-5">
                    <img className="mb-4" src={require("../assets/room.png")} alt="bed" />
                    <strong className="text-xl" style={{color:"#393939"}}>Living room</strong>
                    <p className="font-bold" style={{color:"#FFA939"}}>2 Lights</p>
                </div>
            </div>
            <div className="h-36 w-36 rounded-3xl bg-white">
            <div className="relative left-6 top-5">
                    <img className="mb-4" src={require("../assets/bathtube.png")} alt="bed" />
                    <strong className="text-xl" style={{color:"#393939"}}>Bathroom</strong>
                    <p className="font-bold" style={{color:"#FFA939"}}>1 Lights</p>
                </div>
            </div>
            <div className="h-36 w-36 rounded-3xl bg-white">
            <div className="relative left-6 top-5">
                    <img className="mb-4" src={require("../assets/balcony.png")} alt="bed" />
                    <strong className="text-xl" style={{color:"#393939"}}>Balcony</strong>
                    <p className="font-bold" style={{color:"#FFA939"}}>2 Lights</p>
                </div>
            </div>
        </div>
        </div>
        
    );
}
 
export default RoomBlock;