import React, { useState } from "react";
import '../css/username.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { registerValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import Avatar from '../images/avatar2.png'

function Register() {

    const formik = useFormik({
        initialValues : {
          email: '',
          username: '',
          password: '',
        },
        validate : registerValidation,
        validateOnBlur : false,
        validateOnChange : false,
        onSubmit : async values => {
            values = await Object.assign(values, { profile : file || ''}) //on submit we add a new value to the object
         console.log(values)
        }
    }
      )

      const [ file, setFile ] = useState()

  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0])
    setFile(base64)
  }

  return (
      <div className="body">
        <Toaster position="top-center" reverseOrder ={false}></Toaster>
        <div className="title">
            <form onSubmit={formik.handleSubmit}>
         <h1>Register</h1>
         <p>Happy to join you!</p>

         <label htmlFor="profile">
            <img src={file || Avatar} alt="profile picture" />
         </label>

        <input onChange={onUpload} type="file" id="profile" name="profile" /><br></br>

         <input {...formik.getFieldProps('email')} type="password" placeholder="Email"/><br></br>
         <input {...formik.getFieldProps('username')} type="password" placeholder="username"/><br></br>
         <input {...formik.getFieldProps('password')} type="password" placeholder="password"/><br></br>
         <button className="btn2" type="submit">Register</button> 
         <p>Already Registered? <a href="/login">Login now</a> </p>
         </form>
        </div>
      </div>
  );
}
export default Register;