import Image from "next/image";
import React, { ReactNode } from "react";
import { Col, Container, Row } from "reactstrap";
import Meta from "../Meta";
import VideoCover from "./VideoCover";
import { useEffect, useState } from "react"
interface IProps {
  children: ReactNode;
  title: string;
}
const SignLayout = ({ children, title }: IProps) => {
  const [showComponent, setShowComponent] = useState(false)
  useEffect(() => {
    setShowComponent(true)
  }, [])
  return (
    <>
      <Meta title={title} />
      <div className="signLayout">
        <Container fluid>
          <div className="signLayout_header d-flex justify-content-center align-items-center mb-1 ">
            <div className="brand_wrapper">
              <Image
                src={"/assets/images/brand.png"}
                alt="metakhoneh"
                layout="responsive"
                width={100}
                height={50}
                priority
              />
            </div>
          </div>
          <Row className='gy-3'>
            <Col xs="12" sm="6">
              <main>{children}</main>
            </Col>
            <Col xs="12" sm="6">
            {showComponent?<VideoCover/>:null}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignLayout;
