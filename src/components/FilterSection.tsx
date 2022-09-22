import { Button, Col, Container, Row } from "reactstrap";
import { FiFilter } from "react-icons/fi";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FilterSlider from "./FilterSlider";
import { useAppSelector } from "../app/hooks";
import { selectStyles } from "../features/styleSlice";
import FiltersSkeleton from "./skeletons/FiltersSkeleton";


export default function FilterSection() {
  const {skeleton}=useAppSelector(selectStyles);

  
  return (
  <>
  {skeleton?<FiltersSkeleton/>:<section className="filter_section">
        <Container>
        <Row style={{height:80}}>
    <Col
      xs="12"
      sm="12"
      md="10"

    >
       
      <div>
     <FilterSlider/>
      </div>
    </Col>
    <Col
      className="filters_button_wrapper d-none d-sm-none d-md-flex "
      xs="2"
    >
      <Button outline className="filters_button mb-2" >
        <span className="icon"><FiFilter/></span>
        <span className="title">فیلترها</span>
      </Button>
    </Col>
  </Row>
        </Container>
    </section>}
  </>
  )
}
