import NavBtns from "./navButtons";

const Navbar = () => {
    return ( 
        <div className="absolute h-16 w-[375px] bg-white" style={{boxShadow:"0px -7px 6px rgba(86, 139, 208, 0.051)"}}>
            <NavBtns/>
        </div>
     );
}
 
export default Navbar;