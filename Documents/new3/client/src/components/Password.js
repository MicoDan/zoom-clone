import React, { useState } from "react";
import '../css/username.css'
import Avatar from '../images/avatar2.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from "../helper/validate";

function Password() {

    const formik = useFormik({
        initialValues : {
          password: ''
        },
        validate : passwordValidate,
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
         <h1>Hello again</h1>
         <p>Explore More by <br></br> connecting with us</p>
         <img src={Avatar} alt="user's profile" />
         <input {...formik.getFieldProps('password')} type="password" placeholder="password"/><br></br>
         <button className="btn2" type="submit">sign up</button> 
         <p>Forgot Password? <a href="/recovery">Recover Now</a></p>
         </form>
        </div>
      </div>
  );
}
export default Password;
