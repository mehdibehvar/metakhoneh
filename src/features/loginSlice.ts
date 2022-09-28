import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { IUser, IUserInfo } from "../../types";
import { RootState } from "../app/store";

const userInfoCookie=Cookies.get("userInfo");
type myfun=()=>IUserInfo |null
const userInfoObj:myfun=()=>{
  if (typeof userInfoCookie!=="undefined") {
    return JSON.parse(userInfoCookie)
   }else{
    return null
   }
}

const initialState:IUser={
    userInfo:userInfoObj(),
    status:false,
    loading:false,
    message:''
}
// export const fetchToken=createAsyncThunk(
//     "token/fetchToken",
//    async (params:IFormikValues,thunkAPI) => {
//     const {email,fullName,password}=params;
//     let response:any;
//     try {
//        response=await fetch('https://api.freerealapi.com/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name:fullName,
//           email:email,
//           password:password,
//         })
//       })
//       .then((response) => response.json())
//     //   .then((json) => console.log(json))  
//     console.log(response);
//     } catch (error) {
//       console.log("eeeee"+error);
//       response=error;
//     }

    
//     return response;
//    }
 
// )
const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
      loginRequest:(state)=>{
       state.loading=true;
      },
      loginSuccess:(state,action:PayloadAction<any>)=>{
        const user=action.payload;
        state.loading=false;
        state.userInfo=user;
        state.message="حساب شما با موفقیت ثبت شد.";
        state.status=true;
      },
      loginRejected:(state,action)=>{
        const {message,status}=action.payload;
        state.message=message;
        state.loading=false;
        state.status=status;
      }
    },
   
});
export const selectUser = (state: RootState) => state.user;
export const {loginRequest,loginSuccess,loginRejected}=loginSlice.actions;
export default loginSlice.reducer;