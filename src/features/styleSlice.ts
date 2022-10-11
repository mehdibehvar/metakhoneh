import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
interface IStyleState{
    skeleton:boolean,
    loader:boolean,
    map:boolean
}
const initialState:IStyleState={
    skeleton:true,
    loader:false,
    map:false
}

 const styleSlice=createSlice({
    name:"style",
    initialState,
reducers:{
    hideSkeleton:(state)=>{
        state.skeleton=false;
    },
    showLoader:(state)=>{
        state.loader=true
    },
    hideLoader:(state)=>{
        state.loader=false
    },
    showMap:(state)=>{
        state.map=!state.map
    }
}

}

)
export const {hideSkeleton,showLoader,hideLoader,showMap}=styleSlice.actions;
export const selectStyles=(state:RootState)=>state.styles
export default styleSlice.reducer;