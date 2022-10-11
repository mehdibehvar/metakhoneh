import { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import { Button, Container } from "reactstrap";
import Meta from "../Meta";
import MobileNavbar from "../MobileNavbar";
import FilterSection from "../FilterSection";
import Footer from "../Footer";
import Loading from "../Loading";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectStyles, showMap } from "../../features/styleSlice";
import { BiMap } from "react-icons/bi";
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../map/LeafletMap"), { ssr: false });

export default function Layout({ children }: { children: ReactNode }) {
  const { loader, map } = useAppSelector(selectStyles);
  const dispatch = useAppDispatch();
  const handleShowMap = () => {
    dispatch(showMap());
  };
  return (
    <>
      <Meta />
      <div className="layout">
        {loader ? <Loading /> : null}
        <Navbar />
        <FilterSection />
        {map ? (
          <div className="map_wrapper">
            <Button onClick={handleShowMap} className="close_map_button">
              {" "}
              بستن نقشه
              <span>
                <BiMap />
              </span>
            </Button>
            <MapWithNoSSR />
          </div>
        ) : (
          <Container>
            <main>{children}</main>
          </Container>
        )}

        <Footer />
        <MobileNavbar />
        
        {!map ? (
          <Button onClick={handleShowMap} className="show_map_button">
            روی نقشه
            <span>
              <BiMap />
            </span>
          </Button>
        ) : null}
      </div>
    </>
  );
}
