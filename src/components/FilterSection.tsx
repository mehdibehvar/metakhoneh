import { Button, Col, Container, Row } from "reactstrap";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegBuilding } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FilterSlider from "./FilterSlider";

export default function FilterSection() {
  return (
    <section className="filter_section">
        <Container>
        <Row style={{height:80}}>
    <Col
      xs="10"
    >
       
      <div>
     <FilterSlider/>
      </div>
    </Col>
    <Col
      className="bg-light border"
      xs="2"
    >
      .col-2
    </Col>
  </Row>
        </Container>
    </section>
  )
}
