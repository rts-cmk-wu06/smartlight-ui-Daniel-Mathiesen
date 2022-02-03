const BackgroundWrapper = () => {
    return (
        <div className="container h-full bg-blue-900">
            <div id="circleContainer">
                <div id="circle" className="bg-blue-400 w-48 h-48 rounded-full opacity-30 absolute -top-24 -left-14" ></div>
                <div id="circle" className="bg-blue-400 w-48 h-48 rounded-full opacity-30 absolute top-28 -right-32" ></div>
                <div id="circle" className="bg-blue-400 w-48 h-48 rounded-full opacity-30 absolute top-48 right-40" ></div>
            </div>
        </div>
        
    );
}
 
export default BackgroundWrapper;