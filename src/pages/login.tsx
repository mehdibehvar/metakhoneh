import axios from "axios"
import { ErrorMessage, useFormik, validateYupSchema } from "formik"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSnackbar } from "notistack"
import { ReactElement } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { axiosAuthPost } from "../../utils/LoginHttpClient"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import SignLayout from "../components/layouts/SignLayout"
import Loading from "../components/Loading"
import { loginRejected, loginRequest, loginSuccess, selectUser } from "../features/loginSlice"
import { NextPageWithLayout } from "./_app"
interface IErrors{
    fullNameError?:string,
    emailError?:string,
    passwordError?:string,
}

export interface IFormikValues{
    email:string,
    password:string
}

const Login:NextPageWithLayout = () => {
  const {enqueueSnackbar,closeSnackbar}=useSnackbar()
    const dispatch=useAppDispatch();
    const {loading}=useAppSelector(selectUser)
    const router=useRouter();
    const errors:IErrors={};
    const initialValues:IFormikValues={
        email:"",
        password:""
    }
    const validate=(values:IFormikValues)=>{
        if(!values.email){
            errors.fullNameError="kkcccccccckkk"
        }
        if(!values.password){
            errors.passwordError="kkkkk22222222"
        }
        return errors
    }
    const formik=useFormik({
        initialValues,
        validate,
       onSubmit:async(values)=> {
        closeSnackbar();
         dispatch(loginRequest());
         try {
          const response=await axiosAuthPost("login",values);
          dispatch(loginSuccess(response.user));
          enqueueSnackbar(response.message,{variant:"success",autoHideDuration:1000})
          router.push("/")
         } catch (error:any) {
          dispatch(loginRejected(error.response.data));
          enqueueSnackbar(error.message,{variant:"error",autoHideDuration:2000})
         }
       },
    })
  return (
  <>
  {loading?<div><Loading/></div>:  <div>
       <Form onSubmit={formik.handleSubmit}>
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
      autoComplete="on"
      onChange={formik.handleChange}
      value={formik.values.password}
    />
  </FormGroup>
  <Button type="submit">
    Submit
  </Button>
        </Form>
    <div>
  <span>ایا حساب کاربری دارید؟</span>
  <Link href={"/register"}>
  <a>
    ثبت نام
  </a>
  </Link>
</div>
    </div>}
  </>
  )
}
Login.getLayout=function getLayout(page:ReactElement) {
    return (
        <SignLayout title="ورود در متاخونه">
            {page}
        </SignLayout>
    )
}
export default Login