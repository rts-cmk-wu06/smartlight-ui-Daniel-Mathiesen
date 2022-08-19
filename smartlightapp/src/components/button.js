import { click } from "../hooks/click";
import { baseURL } from "../hooks/api";

export let currGroup;

const Btn = (props) => {
  return (
    <div
      onClick={(e) => {
        click(e);
        console.log(e.target.parentElement.childNodes[2].innerText);
        currGroup = "/groups/2";
        // e.target.parentElement.childNodes[2].innerText
        console.log(currGroup);
      }}
      className="room_button h-[9.375rem] w-[9.375rem] px-[1.125rem] py-5  m-auto bg-white drop-shadow-[0_3px_11px_rgba(10,77,162,0.059)] rounded-[1.75rem] font-bold"
    >
      <div className="absolute h-full w-full -translate-x-5 -translate-y-5 z-50"></div>
      {props.children}
    </div>
  );
};

export default Btn;
