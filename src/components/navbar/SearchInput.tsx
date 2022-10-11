import { BiSearch } from "react-icons/bi";
import { Button } from "reactstrap";
import CitySelect from "./CitySelect";
import { useFormik } from 'formik';
import { useRouter } from "next/router";
import { StartDate } from "./StartDate";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { hideLoader, showLoader } from "../../features/styleSlice";

interface IErrors{
  city?:string,
}
interface IFormValues{
  city:string,
  startDate: any
}
export default function SearchInput() {
  const router=useRouter();
  const dispatch=useAppDispatch();

  const date = new DateObject({ calendar: persian, locale: persian_fa }) ;
  const initialValues:IFormValues={
    city:"",
    startDate:date
  };
  const validate =( values:IFormValues )=> {
    const errors:IErrors = {};
    if(!values.city){
      errors.city='نام شهر را انتخاب کنید.'
    }
  
    return errors
  }
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values) => {
     dispatch(showLoader())
     await router.push(`/search/city/${values.city}&startDate=${values.startDate.dayOfYear}`);
    dispatch(hideLoader())
      ///use dayofYear instead unix because the unix should change in database by every milisecond;///  
    },
  });
 
  return (
    <>
   
      <form className="form d-flex" onSubmit={formik.handleSubmit}>
        <CitySelect
        onChange={value=>formik.setFieldValue('city',value.value)}
         />
          {formik.errors.city ? <div className='city_error text-danger position-absolute top-100'>{formik.errors.city}</div> : null}
          <StartDate  handlePickStartDate={date=>formik.setFieldValue('startDate',date)}/>
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
