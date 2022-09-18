import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegBuilding } from "react-icons/fa";
import {useState,useEffect} from "react"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "reactstrap";
export default function FilterSlider() {
const [perView,setPerView]=useState<number>(10)
  useEffect(() => {
    if(window.outerWidth<768){
      console.log(window.outerWidth)
      setPerView(6)
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
              <FaRegBuilding />
            </span>
            <span className="title"> اپارتمان</span>
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
              <FaRegBuilding />
            </span>
            <span className="title"> اپارتمان</span>
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
              <FaRegBuilding />
            </span>
            <span className="title"> اپارتمان</span>
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
              <FaRegBuilding />
            </span>
            <span className="title"> اپارتمان</span>
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
              <FaRegBuilding />
            </span>
            <span className="title"> اپارتمان</span>
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
              <FaRegBuilding />
            </span>
            <span className="title"> اپارتمان</span>
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
              <FaRegBuilding />
            </span>
            <span className="title"> اپارتمان</span>
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
              <FaRegBuilding />
            </span>
            <span className="title"> اپارتمان</span>
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
              <FaRegBuilding />
            </span>
            <span className="title"> اپارتمان</span>
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
      </Swiper>
    </>
  );
}
