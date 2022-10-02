import DatePicker, { DateObject } from "react-multi-date-picker"
import type{Value} from "react-multi-date-picker"
import { useState } from "react";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/colors/teal.css"
interface IProp{
    handlePickStartDate:(value:Value)=>void,

}
export const StartDate = ({handlePickStartDate}:IProp) => {
    const [value, setValue] = useState<Value>();
  return (
    <div className='start_date'>
    <label>تاریخ حرکت:</label>
    <DatePicker 
     className="teal"
     value={value || ""}
    onChange={(date)=>{
      handlePickStartDate(date ? date : "");
    }} 
    calendar={persian}
    locale={persian_fa}
    render={<CustomInput value={value} openCalendar handleValueChange={setValue}/>}
    />
    </div>
  )
}
interface IProps{
    value:any,
    openCalendar:any,
    handleValueChange:any
}
function CustomInput({ openCalendar, value, handleValueChange }:IProps) {
    return (
      <input
        className="custom_input"
        onFocus={openCalendar}
        value={value}
        onChange={handleValueChange}
        placeholder={"انتخاب از تقویم"}
      />
    )
  }
  ///this custom hook should be seperated///