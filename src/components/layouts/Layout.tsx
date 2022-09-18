import { ReactNode } from "react";
import Navbar from "../Navbar";
import { Container } from "reactstrap";
import Meta from "../Meta";
import MobileNavbar from "../MobileNavbar";
import FilterSection from "../FilterSection";

export default function Layout({ children }: { children: ReactNode }) {
  return (
  <>
  <Meta/>
  <div className="layout">
          <Navbar/>
          <FilterSection/>
          <Container> 
            <main>{children}</main>
         </Container>
       <MobileNavbar/>
    </div>
  </>
  );
}
