import { BiSearch } from "react-icons/bi";
import { Button } from "reactstrap";
import CitySelect from "./CitySelect";
import { useFormik } from 'formik';
import { useRouter } from "next/router";
import { StartDate } from "./StartDate";
interface IErrors{
  city?:string,
}
interface IFormValues{
  city:string,
  startDate:any;
}
export default function SearchInput() {
  const router=useRouter();
 
  
  const initialValues:IFormValues={
    city:"",
    startDate:null,
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
 main
        router.push(`/search/city/${values.city}&date=${values.startDate.unix}`)
        console.log(values.startDate);
        

    },
  });
 
  return (
    <>
      <form className="form d-flex" onSubmit={formik.handleSubmit}>
        <CitySelect
        onChange={value=>formik.setFieldValue('city',value.value)}
         />
          {formik.errors.city ? <div className='city_error text-danger position-absolute top-100'>{formik.errors.city}</div> : null}
          <StartDate handlePickStartDate={value=>formik.setFieldValue('startDate',value)}/>
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

///setFieldValue:Set the value of a field imperatively. field should match the key of values you wish to update. Useful for creating custom input change handlers
