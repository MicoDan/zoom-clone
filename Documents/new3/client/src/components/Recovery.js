import React from "react";
import '../css/username.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import './Recovery.css'

function Recovery() {

  return (
      <div className="body">
        <Toaster position="top-center" reverseOrder ={false}></Toaster>
        <div className="title">
            <form>
         <h1>Recovery</h1>
         <p>Enter OTP to recover password</p>
         <p>Enter 6 digit OTP sent to your email address</p>
         <input type="text" placeholder="OTP"/><br></br>
         <button type="submit">Resend</button> <br></br> 
         <span className="span1">Can't get OTP? <a href = "/reset">Resend</a></span>
         </form>
        </div>
      </div>
  );
}
export default Recovery;
