import Image from "next/image";
import { useState } from "react";
import style from "../../../styles/Navbar.module.scss";
import { Container, Row, Col, Input, Button } from "reactstrap";
import { BsGlobe2 } from "react-icons/bs";

import Link from "next/link";
import SearchInput from "./SearchInput";
import Menu from "./DropDownMenu";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar_wrapper">
      <Container className="navbar_container">
        <Row className="navbar_row">
          <Col className="d-none d-sm-none d-md-flex brand_col" lg="3" md="3">
            <Link href="/">
              <a>
                <div className="brand"> 
                  <Image
                    src={"/assets/images/brand.png"}
                    alt="metakhoneh"
                    layout="responsive"
                    width={161}
                    height={46}
                  />
                </div>
              </a>
            </Link>
          </Col>
          <Col className="search_col" lg="5" md="4" sm="12" xs="12">
            <SearchInput />
          </Col>
          <Col className="menu_col d-none d-sm-none d-md-flex" lg="4" md="5">
            <div className="menu">
              <Menu />
              <div className="badge">
                <span>2</span>
              </div>
              <div className="navbar_avatar">
                <Image
                  src={"/assets/images/coronokid.jpg"}
                  alt={"avatar-coronokid"}
                  layout="fill"
                />
              </div>
            </div>
            <Button className="globe">
              <span>
                <BsGlobe2 />
              </span>
            </Button>
            <Button className="hosting">
              <span> میزبانی</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navbar;
