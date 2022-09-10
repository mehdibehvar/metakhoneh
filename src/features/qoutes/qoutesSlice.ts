import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
export const fetchQoute=createAsyncThunk(
    "qoutes/fetchQoutes",
   async () => {
    const response=await axios.get('https://api.kanye.rest/');
    return response.data;
   }
)

interface IQoutes{
    quote:string,
    status:string
}
const initialState:IQoutes={
    quote:"",
    status:"idle",
}
 const qoutesSlice=createSlice({
    name:"qoutes",
    initialState,
    reducers:{

    },
  extraReducers:(builder)=> {
      builder
      .addCase(fetchQoute.pending,(state,action)=>{
        state.status="pending"
      })
      .addCase(fetchQoute.fulfilled,(state,action)=>{
        state.quote=action.payload.quote;
        state.status="fulfilled"
      })
      .addCase(fetchQoute.rejected,(state,action)=>{
        state.status="error"
      })
  },

})
export const selectQuote=(state:RootState)=>state.qoute
export default qoutesSlice.reducer;
