import { Button, Col, Container, Row } from "reactstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
export default function FiltersSkeleton() {
    const [perView,setPerView]=useState<number>(11)
useEffect(()=>{
  if(window.outerWidth<768){
    setPerView(5)
  }
},[])
  return (
    <section className="filter_section">
      <Container>
        <Row style={{ height: 80 }}>
          <Col xs="12" sm="12" md="10">
            <div className="filters_slider_skeleton w-100 h-100">
              <div className="filter_slide h-100 mx-2 mb-2">
                <span className="arrow_icon_skeleton d-block bg-secondary bg-opacity-10 rounded-circle mb-1"></span>
              </div>
              {[...Array(perView)].map((i, index) => (
                <div key={index} className="filter_slide h-100 mx-2 mb-2">
                  <span className="icon_skeleton d-block bg-secondary bg-opacity-10 rounded-circle mb-1"></span>
                  <span className="title_skeleton d-block bg-secondary bg-opacity-10 rounded-2">
                    {" "}
                  </span>
                </div>
              ))}

              <div className="filter_slide h-100 mx-2 mb-2">
                <span className="arrow_icon_skeleton d-block bg-secondary bg-opacity-10 rounded-circle mb-1"></span>
              </div>
            </div>
          </Col>
          <Col
            className="filters_button_wrapper d-none d-sm-none d-md-flex "
            xs="2"
          >
            <Button
              outline
              className="filters_button mb-2 bg-secondary bg-opacity-10"
            >
              {/* <span className="icon"><FiFilter/></span>
        <span className="title">فیلترها</span> */}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
