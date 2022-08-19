import {FaPowerOff} from 'react-icons/fa';

const PowerBtn = ({clickevent}) => {
  return (
    <div
    onClick={(clickevent)}
    id="power_button"
      className="opacityNon bg-white w-9 h-9 rounded-full absolute flex justify-center items-center z-20 translate-x-72 -translate-y-10"
    >
        <FaPowerOff color='#ff9696'/>
    </div>
  );
};

export default PowerBtn;
