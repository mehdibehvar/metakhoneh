import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { fetchQoute, selectQuote } from "../features/qoutes/qoutesSlice"
import Loading from "./Loading";


export default function Qoute() {
    const dispatch=useAppDispatch();
    const {quote,status}=useAppSelector(selectQuote);
   useEffect(() => {
    dispatch(fetchQoute())
   }, [dispatch])
   
    
  return (
    <div>
      <div style={{width:"100%",height:"100px"}}>
      <p><span>qoute :  </span>{status==="pending"?<Loading/>:quote}</p>
      </div>
        <button onClick={()=>dispatch(fetchQoute())}>create kanye qoute</button>
    </div>
  )
}
