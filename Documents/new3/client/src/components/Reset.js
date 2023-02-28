import React from "react";
import '../css/username.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { resetPasswordValidation } from "../helper/validate";

function Reset() {

    const formik = useFormik({
        initialValues : {
          password: '',
          confirm_pwd:''
        },
        validate : resetPasswordValidation,
        validateOnBlur : false,
        validateOnChange : false,
        onSubmit : async values => {
         console.log(values)
        }
    }
      )

  return (
      <div className="body">
        <Toaster position="top-center" reverseOrder ={false}></Toaster>
        <div className="title">
            <form onSubmit={formik.handleSubmit}>
         <h1>Reset</h1>
         <p>Enter new password</p>
         <input {...formik.getFieldProps('password')} type="password" placeholder="password"/><br></br>
         <input {...formik.getFieldProps('confirm_pwd')} type="password" placeholder="confirm_password"/><br></br>
         <button type="submit">sign up</button>  
         </form>
        </div>
      </div>
  );
}
export default Reset;
