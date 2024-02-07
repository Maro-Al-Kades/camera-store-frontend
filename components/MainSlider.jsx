import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import "../styles/slider.css";
import Image from "next/image";

const sliderData = [
  {
    img: "/promos/4.png",
    pretitle: "Special Offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first Order",
    btnText: "Shop Now",
  },
  {
    img: "/promos/4.png",
    pretitle: "Special Offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first Order",
    btnText: "Shop Now",
  },
  {
    img: "/promos/4.png",
    pretitle: "Special Offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first Order",
    btnText: "Shop Now",
  },
];

function MainSlider() {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider h-full bg-primary max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
      style={{ backgroundImage: "url(/mainSlider_bg.png)" }}
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                {/* text */}
                <div className="w-full lg:flex-1">
                  <div className="uppercase mb-1 text-center lg:text-left text-accent">
                    {slide.pretitle}
                  </div>
                  <div
                    className="text-3xl md:text-[46px] font-semibold uppercase leading-none
                  text-center lg:text-left mb-8 xl:mb-20"
                  >
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3}
                  </div>
                  <button className="btn btn-accent tracking-wider mx-auto lg:mx-0 text-white">
                    Shop Now !
                  </button>
                </div>
                {/* img */}
                <div className="flex-1">
                  <Image
                    className="xl:absolute xl:right-8 xl:bottom-12"
                    src="/promos/1.png"
                    alt="camera"
                    width={350}
                    height={300}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
}

export default MainSlider;
