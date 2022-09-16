import { ReactNode } from "react";
import MYNavbar from "../Navbar";
import { Container } from "reactstrap";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ backgroundColor:"rgba(255, 255, 255, 0.65)" }}>
          <MYNavbar color={"info"} expand={"md"} />
          <Container style={{border:"1px solid black" }}> 
            <main>{children}</main>
         </Container>
    </div>
  );
}
