import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
interface IStyleState{
    skeleton:boolean
}
const initialState:IStyleState={
    skeleton:true,
}

 const styleSlice=createSlice({
    name:"style",
    initialState,
reducers:{
    hideSkeleton:(state)=>{
        state.skeleton=false;
    }
}

}

)
export const {hideSkeleton}=styleSlice.actions;
export const selectStyles=(state:RootState)=>state.styles
export default styleSlice.reducer;