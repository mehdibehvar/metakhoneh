import {GoSearch} from "react-icons/go"
import {BiHeart} from "react-icons/bi"
import {BsPersonCircle} from "react-icons/bs"
export default function MobileNavbar() {
  return (
    <nav className="mobile_navbar d-md-none">
  <div className="d-flex flex-column align-items-center justify-content-center" style={{width:"44px",height:"100%"}}>
  <span className="nav_icon"><BsPersonCircle/></span>
    <span className="nav_text">ورود</span>
  </div>

  <div className="d-flex flex-column align-items-center justify-content-center" style={{width:"44px",height:"100%"}}>
  <span className="nav_icon"><BiHeart/></span>
    <span className="nav_text">علاقمندی</span>
  </div>
  <div className="d-flex flex-column align-items-center justify-content-center" style={{width:"44px",height:"100%"}}>
    <span className="nav_icon active_nav"><GoSearch/></span>
    <span  className="nav_text">جستجو</span>
    </div>
    </nav>
  )
}
