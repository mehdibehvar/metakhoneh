import { BiSearch } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Button, Form, Input } from "reactstrap";
import CitySelect from "./CitySelect";
import {useState} from "react"
import { useFormik } from 'formik';
interface IErrors{
  city?:string
}
interface IFormValues{
  city:string
}
export default function SearchInput() {
  const initialValues:IFormValues={
    city:""
  };
  const validate =( values:IFormValues )=> {
    const errors:IErrors = {}
    if(!values.city){
      errors.city='نام شهر را انتخاب کنید.'
    }
    return errors
  }
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values.city);
    },
  });
 
  return (
    <>
      <form className="form d-flex" onSubmit={formik.handleSubmit}>
        <CitySelect
        onChange={value=>formik.setFieldValue('city',value.label)}
         />
          {formik.errors.city ? <div className='city_error text-danger position-absolute top-100'>{formik.errors.city}</div> : null}
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


