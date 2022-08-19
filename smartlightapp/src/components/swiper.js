import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";


const LightsSwiper = () => {
  return (
    <Swiper
      slidesPerView={2.5}
      spaceBetween={0}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper -translate-y-40 w-[375px] z-20 absolute !overflow-auto"
    >
      <SwiperSlide>
        <div className="p-3 bg-white w-32 h-12 rounded-xl flex justify-evenly">
          <p className="text-sm font-bold text" style={{ color: "#002D67" }}>
            Main Light
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="p-3 w-36 h-12 rounded-xl flex justify-evenly"
          style={{ backgroundColor: "#093B7B" }}
        >
          <p className="text-sm font-bold text" style={{ color: "#FFFFFF" }}>
            Desk lights
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="p-3 bg-white w-32 h-12 rounded-xl flex justify-evenly"
          style={{ left: "340px" }}
        >
          <p className="text-sm font-bold text" style={{ color: "#002D67" }}>
            Bed Light
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default LightsSwiper;
