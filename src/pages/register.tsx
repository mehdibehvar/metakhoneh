import Cookies from "js-cookie";
import {  useFormik } from "formik"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { IErrors, IFormikValues } from "../../types"
import { axiosAuthPost } from "../../utils/LoginHttpClient"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { loginRejected, loginRequest, loginSuccess, selectUser } from "../features/loginSlice"
import { useSnackbar } from 'notistack';
import { NextPageWithLayout } from "./_app"
const SignLayoutWithNoSSR = dynamic(() => import("../components/layouts/SignLayout"), {
  ssr: false
});


const Register:NextPageWithLayout = () => {
  const {loading}=useAppSelector(selectUser);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router=useRouter();
  const redirect=router.query.redirect;
    const dispatch=useAppDispatch();
    const errors:IErrors={};
    const initialValues:IFormikValues={
        name:"",
        email:"",
        password:""
    }
    const validate=(values:IFormikValues)=>{
        if(!values.name){
            errors.nameError="kkkkk"
        }
        if(!values.email){
            errors.emailError="kkcccccccckkk"
        }
        if(!values.password){
            errors.passwordError="kkkkk22222222"
        }
        return errors
    }
    const formik=useFormik({
        initialValues,
        validate,
       onSubmit:async(values) =>{
        closeSnackbar()
       dispatch(loginRequest())
       try {
        ///onsubmit should be async//////
          const resp=await axiosAuthPost("register",values)
         dispatch(loginSuccess(resp.user));
         enqueueSnackbar("ثبت نام با موفقیت انجام شد",{variant:"success",autoHideDuration: 1000})
          router.push("/")
       } catch (error:any) {  
        dispatch(loginRejected(error.response.data))
         if(error.message){
              enqueueSnackbar(`${error.message}`,{variant:"error",autoHideDuration: 1000})
        }
        
       }
       }
    })
  return (
<>
{loading?<div>loading</div>:    <div>
     <Form onSubmit={formik.handleSubmit}>
  <FormGroup>
    <Label for="fullName">
      نام و نام خانوادگی
    </Label>
    <Input
      id="fullName"
      name="name"
      placeholder="نام و نام خانوادگی"
      type="text"
      autoComplete="on"
      onChange={formik.handleChange}
      value={formik.values.name}
    />
  </FormGroup>
  <FormGroup>
    <Label for="email">
      ایمیل
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="ایمیل خود را وارد کنید..."
      type="email"
      autoComplete="on"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
  </FormGroup>
  <FormGroup>
    <Label for="password">
      پسورد
    </Label>
    <Input
      id="password"
      name="password"
      placeholder="رمز خود را وارد کنید..."
      type="password"
      autoComplete="off"
      onChange={formik.handleChange}
      value={formik.values.password}
    />
  </FormGroup>
  <Button type="submit">
    Submit
  </Button>
</Form>
    </div>}
</>
  )
}
Register.getLayout=function getLayout(page:ReactElement) {
    return (
        <SignLayoutWithNoSSR title="ثبت نام در متاخونه">
            {page}
        </SignLayoutWithNoSSR>
    )
}
export default Register;
