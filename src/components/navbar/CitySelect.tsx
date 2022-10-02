import AsyncSelect from 'react-select/async';
import {ICityOption,cityOptions} from "../../../utils/data"
import {useId, useState} from 'react'
interface State {
  readonly inputValue: string;
}
const filterCitys = (inputValue: string) => {
    return cityOptions.filter((i) =>
      i.label.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    );
  };
const loadOptions = (
    inputValue:string,
    callback:(options:ICityOption[])=>void
  ) => {
    setTimeout(()=>{
      callback(filterCitys(inputValue));
    },1000);
  };

  
interface IProps{
    onChange:(value:any)=>void,
}
export default function CitySelect({onChange}:IProps) {
    const [inputValue, setInputValue] = useState<string>('تهران')
    const handleInputChange = (newValue: string) => {
        const inputValue = newValue;
        setInputValue(inputValue);
        return inputValue;
      };

  return (
    <div className='destination'>
    <label>مقصد:</label>
    <AsyncSelect
      className='react-select-container'
      classNamePrefix="react-select"
     placeholder="انتخاب نام شهر..."
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions={true}
      onInputChange={handleInputChange}
      onChange={(value)=>onChange(value)}
      instanceId={useId()}
    />
    </div>
  )
}
