import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { BsGlobe2 } from "react-icons/bs";
import { IoIosArrowDropup } from "react-icons/io";

export default function Footer() {
  return (
<footer className='footer_section py-2'>
<Container>
        <Row>
            <Col md="8" sm="8" xs="12">
           <div className='footer_right'>
            <span>metakhoneh.co <div className='company_icon ms-1'>c</div></span>
            <span>
                 حریم خصوصی
                 {" "}
                </span>
           {" "}
            <span>همه موارد</span>
            <span>موقعیت مکانی</span>
           </div>
            </Col>
            <Col xs="12" sm="4" md="4">
               <div className='footer_left d-flex justify-content-start justify-content-md-end'>
                <div>
                    <span>فارسی</span>
                    <span><BsGlobe2/></span>
                    </div>
                <div>
                   <span>پشتیبانی</span>
                    <span className='up_icon'><IoIosArrowDropup/></span>
                </div>
               </div>
            </Col>
        </Row>
    </Container>
</footer>
  )
}
