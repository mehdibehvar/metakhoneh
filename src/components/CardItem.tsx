import {  Card, CardBody, CardSubtitle,CardTitle } from 'reactstrap'
import { Pagination,Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiFillStar} from "react-icons/ai"
import {BiHeart} from "react-icons/bi"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image'
export default function CardItem() {
  return (
       <Card
       className='border-0 mb-3 card'
    style={{
      width: '100%'
    }}
  >
      <div className='card_swiper_frame'>
        <span className='favorite_icon position-absolute me-1'>
          <BiHeart/>
        </span>
        <Swiper
           navigation={true}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination,Navigation]}
       
        >
          <SwiperSlide>
         <div style={{width:"100%",height:"200px"}}>
         <Image
        src={"/assets/images/home.jpg"}
        alt="coronokid"
        layout='fill'
        />
         </div>
          </SwiperSlide>
          <SwiperSlide>
         <div style={{width:"100%",height:"200px"}}>
         <Image
        src={"/assets/images/home2.webp"}
        alt="home2"
        layout='fill'
        />
         </div>
          </SwiperSlide>
        </Swiper>
      </div>
    <CardBody className='p-0'>
      <CardTitle tag="div" className='card_title mt-1'>
     <div><h6 className='adress mb-0'>شیراز-معالی اباد</h6></div>
     <div className='pb-1'>
      <span className='score'>امتیاز:</span>
      <span className='star mx-2'><AiFillStar/></span>
      <span className='score_number'>4.5</span>
     </div>
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted distance"
        tag="h6"
      >
        120 کیلومتری شما
      </CardSubtitle>
      <CardSubtitle
        className="mb-2 text-muted date"
        tag="h6"
      >
      <span>6</span> تا <span>8</span> <span>فروردین</span>
      </CardSubtitle>
      <CardSubtitle
      className="mb-0 price"
      tag="h6"
      >
      <strong>500</strong> هزار تومان هر شب
      </CardSubtitle>
    </CardBody>
       </Card>
  )
}
