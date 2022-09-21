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
import { IProduct } from '../../types';
export default function CardItem({product}:{product:IProduct}) {
  const {address,price,images,review_scores}=product;
  
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
         {images.picture_url.map((url,index)=> <SwiperSlide
         key={index}
         >
         <div style={{width:"100%",height:"200px"}}>
         <Image
        src={`${url}`}
        alt="coronokid"
        layout='fill'
        />
         </div>
          </SwiperSlide>)}
        </Swiper>
      </div>
    <CardBody className='p-0'>
      <CardTitle tag="div" className='card_title mt-1'>
     <div><h6 className='adress mb-0'>{address.street}</h6></div>
     <div className='pb-1'>
      <span className='score'>امتیاز:</span>
      <span className='star mx-1'><AiFillStar/></span>
      <span className='score_number'>{review_scores.review_scores_rating.$numberInt}</span>
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
      <strong>{price.$numberDecimal}</strong> هزار تومان هر شب
      </CardSubtitle>
    </CardBody>
       </Card>
  )
}
