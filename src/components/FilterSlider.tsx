import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineVilla } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import {GiIsland,GiCastle,GiHomeGarage,
  GiMountainCave,GiCampingTent,GiGrapes} from "react-icons/gi";

import {useState,useEffect} from "react"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function FilterSlider() {
const [perView,setPerView]=useState<number>(10)
  useEffect(() => {
    if(window.outerWidth<768){
      setPerView(6);
    }
  },[])
  
  
  return ( 
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={2}
        slidesPerView={perView}
      >
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiHomeGarage />
            </span>
            <span className="title"> گاراژ</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <MdOutlineVilla />
            </span>
            <span className="title"> ویلا</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiIsland />
            </span>
            <span className="title"> جزیره</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiFarmer />
            </span>
            <span className="title"> روستایی</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiCampingTent />
            </span>
            <span className="title"> کمپ</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiMountainCave />
            </span>
            <span className="title"> خانه در کوه</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiCastle />
            </span>
            <span className="title"> خانه مجلل</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiGrapes />
            </span>
            <span className="title"> تاکستان</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <FaRegBuilding />
            </span>
            <span className="title"> اپارتمان</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <MdOutlineVilla />
            </span>
            <span className="title"> ویلا</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiIsland />
            </span>
            <span className="title"> جزیره</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiFarmer />
            </span>
            <span className="title"> روستایی</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiCampingTent />
            </span>
            <span className="title"> کمپ</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiMountainCave />
            </span>
            <span className="title"> خانه در کوه</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiCastle />
            </span>
            <span className="title"> خانه مجلل</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="filter_slide">
            <span className="icon">
              <GiGrapes />
            </span>
            <span className="title"> تاکستان</span>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
