import { BiSearch } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Button, Form, Input } from "reactstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import CitySelect from "./CitySelect";
import {useState} from "react"

enum GenderEnum {
  shiraz = "shiraz",
  tehran = "tehran",
  esfehan = "esfehan",
}

interface IFormInput {
  firstName: String;
  city: GenderEnum;
}



export default function SearchInput() {
  
 
  return (
    <>
      <form className="form d-flex">
        <CitySelect />
        <Button className="search_button" type="submit">
          <span className="search_icon">
            {" "}
            <BiSearch />
          </span>
        </Button>
      </form>
    </>
  );
}


