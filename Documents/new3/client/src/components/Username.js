import React from "react";
import '../css/username.css'
import Avatar from '../images/avatar2.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { usernameValidate } from "../helper/validate";

function Username() {

    const formik = useFormik({
        initialValues : {
          username: ''
        },
        validate : usernameValidate,
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
         <input {...formik.getFieldProps('username')} placeholder="username"/><br></br>
         <button className="btn2" type="submit">Let's Go</button> 
         <p>Not a Member? <a href="/register">Register Now</a></p>
         </form>
        </div>
      </div>
  );
}
export default Username;
