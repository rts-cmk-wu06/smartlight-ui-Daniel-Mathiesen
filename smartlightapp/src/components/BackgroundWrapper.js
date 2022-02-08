const BackgroundWrapper = () => {
    return (
        <div className="container h-full bg-blue-900 absolute -z-10">
            <div id="circleContainer">
                <div id="circle" className="bg-blue-400 w-48 h-48 rounded-full opacity-10 absolute -top-24 -left-14" style={{backgroundColor:"#FFFFFF"}} ></div>
                <div id="circle" className="bg-blue-400 w-48 h-48 rounded-full opacity-30 absolute top-28 -right-20" ></div>
                <div id="circle" className="bg-blue-400 w-48 h-48 rounded-full opacity-30 absolute top-44 right-40" ></div>
            </div>
        </div>
        
    );
}
 
export default BackgroundWrapper;