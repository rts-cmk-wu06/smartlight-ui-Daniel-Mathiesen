
const Header = () => {
  return (
    <>
      <div className="container flex items-center justify-between px-6 text-white h-1/5">
        <div>
          <p className="inline text-3xl font-bold">Control</p>
          <p className="inline text-3xl">Panel</p>
        </div>
        <div className="relative z-0 overflow-visible border-2 rounded-full h-14 w-14 top-3æ">
          <div
            className="relative left-10 z-10 h-2.5 rounded-full w-2.5"
            style={{ backgroundColor: "#FF9898" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Header;
