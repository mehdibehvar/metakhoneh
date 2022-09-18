import Image from "next/image";
import { useState } from "react";
import style from "../../styles/Navbar.module.scss";
import { Container, Row, Col, Input, Button } from "reactstrap";
import { BiSearch } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import Link from "next/link";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={style.navbar_wrapper}>
      <Container className={style.navbar_container}>
        <Row className={style.navbar_row}>
          <Col className={`d-none d-sm-none d-md-flex ${style.brand_col}`} lg="4" md="3" >
         <Link href="/">
         <a>
         <div className={style.brand}>
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
          <Col className={style.search_col} lg="4" md="4"  sm="12" xs="12">
            <Input bsSize="lg" className={style.search_input} />
        
            <Button className={style.search_button}>
              <span className={style.search_icon}>
                {" "}
                <BiSearch />
              </span>
            </Button>
          </Col>
          <Col className={`${style.menu_col} d-none d-sm-none d-md-flex`} lg="4" md="5">
            <div className={style.menu}>
            <div className={style.badge}>
                <span>2</span>
              </div>
            <span className={style.hambergur_menu}><CgMenu/></span>
            <div className={style.avatar_wrapper}>
            
              <Image
              src={"/assets/images/coronokid.jpg"}
              alt={"avatar-coronokid"}
              layout="fill"
              />
             
            </div>
            </div>
            <Button className={style.globe}>
              <span><BsGlobe2/></span>
            </Button>
            <Button>
              <span> میزبانی</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navbar;
