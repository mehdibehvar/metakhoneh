import { Button } from "reactstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRegBuilding } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function FilterSlider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={2}
        slidesPerView={10}
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
      </Swiper>
    </>
  );
}
