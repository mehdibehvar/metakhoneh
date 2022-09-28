import Image from "next/image";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { BiEdit } from "react-icons/bi";
import { HiOutlineLogin } from "react-icons/hi";
import Link from "next/link";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/loginSlice";
import dynamic from "next/dynamic";
function Menu() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const {userInfo}=useAppSelector(selectUser);
 
  return (
    <div className="dropdown_menu">
      <span onClick={toggle} className="hambergur_menu">
        {dropdownOpen ? <GrClose /> : <CgMenu />}
      </span>
      <div className={`${dropdownOpen ? "dropdown show" : "dropdown"}`}>
      <div className="m-1 border p-1">
        <div className="header_dropdown d-flex justify-content-center border-bottom">
            <div className="profile_info w-75">
                <ul className="h-100 d-flex flex-column justify-content-around">
                    <li>{userInfo?userInfo.name:"ثبت نام گنید."} </li>
                    <li>اعتبار حساب:<strong className="mx-2">0</strong>تومان </li>
                </ul>
            </div>
            <div className="profile_avatar w-25 d-flex flex-column align-items-center">
              <div className="avatar_image mt-1">
                <Image
                  src={"/assets/images/coronokid.jpg"}
                  alt={"avatar-coronokid"}
                  width={50}
                  height={50}
                  layout="responsive"
                />
              </div>
              <div>
                <a className="change_image">
                <BiEdit/> <span>تغییر عکس</span>  
                </a>
                </div>
            </div>
        </div>
        <div className="body_dropdown w-100">
            <ul className="h-100 w-100 d-flex flex-column justify-content-around">
              <Link href={"/login"}>
              <a>
              <li><span><HiOutlineLogin/></span>ورود</li>
              </a>
              </Link>
                <li><span><HiOutlineLogin/></span>پروفایل</li>
                <li><span><HiOutlineLogin/></span>علاقمندی ها</li>
                <li><span><HiOutlineLogin/></span>میزبان شوید</li>
                <li><span><HiOutlineLogin/></span>درباره ما</li>
                <li><span><HiOutlineLogin/></span>خروج</li>
            </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
export default dynamic(Promise.resolve(Menu),{ssr:false})
// export default Menu;
