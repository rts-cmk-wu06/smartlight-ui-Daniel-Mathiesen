import { BsLightbulb, BsLightbulbOff } from "react-icons/bs";
import { hue, turnOnOff, handleBrightness, changeColor } from "../hooks/api";
import { currGroup } from "./button";
import PowerBtn from "./powerBtn";

const clrs = ["red", "green", "blue", "purple", "orange", "pink"];

const colors = ["FF6663", "9EC1CF", "9EE09E", "FDFD97", "FEB144", "CC99C9"];

const Controls = () => {
  return (
    <div
      id="controls"
      className={
        "controls h-0 w-full flex flex-col justify-between font-extrabold"
      }
    >
      <PowerBtn
        clickevent={() => {
          turnOnOff(currGroup);
        }}
      />
      <div id="intensity">
        <h3 className="mb-4">Intensity</h3>
        <div id="intensity_slider">
          <div id="slider_container" className="flex flex-col">
            <div
              id="slider_and_icons"
              className="flex font-extrabold items-center"
            >
              <BsLightbulbOff size={24} color={"rgb(209, 213, 219)"} />
              <div
                id="slider_and_ticks"
                onInput={(e) =>
                  handleBrightness(currGroup, parseInt(e.target.value))
                }
                className="w-full flex flex-col mx-4"
              >
                <input
                  className="w-full h-8 appearance-none"
                  type="range"
                  min="0"
                  max="254"
                  name="intensity"
                  id="slider_input"
                />
                <div
                  id="slider_ticks"
                  className="flex justify-between w-full text-gray-300 text-xs"
                >
                  <span className="h-[10px]">|</span>
                  <span className="h-[10px]">|</span>
                  <span className="h-[10px]">|</span>
                  <span className="h-[10px]">|</span>
                  <span className="h-[10px]">|</span>
                  <span className="h-[10px]">|</span>
                </div>
              </div>
              <BsLightbulb size={24} color={"gold"} />
            </div>
          </div>
        </div>
      </div>
      <div id="colors">
        <h3 className="mb-4">Colors</h3>
        <div id="colors_container" className="flex justify-between">
          {clrs.map((item, i) => {
            return (
              <div
                key={i}
                id={"clr" + i}
                className={`h-7 w-7 rounded-full`}
                style={{
                  backgroundColor: "#" + colors[i],
                  translate: i > 0 ? -28 * i + "px" : "0px",
                }}
                onClick={(e) => {
                  changeColor(e, currGroup)
                }}
              />
            );
          })}
          <div
            id="color_add"
            className={`h-7 w-7 bg-white rounded-full flex items-center font-bold text-sm`}
            style={{ translate: -28 * clrs.length + "px" }}
            onClick={() => {
              hue(currGroup);
            }}
          >
            <span className="m-auto">+</span>
          </div>
        </div>
      </div>
      <div id="scenes">
        <h3 className="mb-4">Scenes</h3>
        <div
          id="scenes_container"
          className="flex justify-between flex-wrap gap-6"
        >
          <div
            id="scn0"
            className="w-[148px] h-14 bg-gradient-to-t from-[#d9b06b] to-[#ff818a] rounded-2xl "
          ></div>
          <div
            id="scn1"
            className="w-[148px] h-14 bg-gradient-to-t from-[#d9b06b] to-[#aa8efa] rounded-2xl -translate-x-20"
          ></div>
          <div
            id="scn2"
            className="w-[148px] h-14 bg-gradient-to-t from-[#d9b06b] to-[#ff818a] rounded-2xl "
          ></div>
          <div
            id="scn3"
            className="w-[148px] h-14 bg-gradient-to-t from-[#d9b06b] to-[#aa8efa] rounded-2xl -translate-x-20"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
