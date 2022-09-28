import { ErrorMessage, useFormik, validateYupSchema } from "formik"
import Link from "next/link"
import { ReactElement } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { useAppDispatch } from "../app/hooks"
import SignLayout from "../components/layouts/SignLayout"
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

const Register:NextPageWithLayout = () => {
    const dispatch=useAppDispatch();
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
       onSubmit(values) {
    //    axiosPost('https://api.freerealapi.com/auth/register',)
       },
    })
  return (
    <div>
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
    </div>
  )
}
Register.getLayout=function getLayout(page:ReactElement) {
    return (
        <SignLayout title="ورود در متاخونه">
            {page}
        </SignLayout>
    )
}
export default Register