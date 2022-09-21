import AsyncSelect from 'react-select/async';
import {IColourOption,colourOptions} from "../../../utils/data"
interface State {
  readonly inputValue: string;
}
const filterColors = (inputValue: string) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
const loadOptions = (
    inputValue: string,
    callback: (options: IColourOption[]) => void
  ) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  
interface IProps{
    onChange:(value:any)=>void
}
export default function CitySelect() {

  return (
    <div className='destination'>
    <label>مقصد:</label>
    <AsyncSelect
      className='react-select-container'
      classNamePrefix="react-select"
     placeholder="انتخاب نام شهر..."
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
    //   onInputChange={handleInputChange}
    />
  </div>
  )
}
