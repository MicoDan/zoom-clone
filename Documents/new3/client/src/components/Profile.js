import React, { useState } from "react";
import '../css/username.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { registerValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import Avatar from '../images/avatar2.png'

function Profile() {

    const formik = useFormik({
        initialValues : {
          firstName : '',
          lastName: '',
          email: '',
          username: '',
          address: '',
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
         <h1>Profile</h1>
         <p>You cna update the details!</p>

         <label htmlFor="profile">
            <img src={file || Avatar} alt="profile picture" />
         </label>

        <input onChange={onUpload} type="file" id="profile" name="profile" /><br></br>
            <div>
            <input  className="input1" {...formik.getFieldProps('firstName')} type="text" placeholder="firstname"/>
            <input className="input1" {...formik.getFieldProps('lastName')} type="text" placeholder="lastname"/><br></br>
            </div>

            <div>
            <input className="input1" {...formik.getFieldProps('mobile')} type="text" placeholder="Mobile No."/>
            <input className="input1" {...formik.getFieldProps('email')} type="text" placeholder="email"/><br></br>
            </div>

            <div>
            <input className="input1" id="input1" {...formik.getFieldProps('address')} type="text" placeholder="address"/><br></br>
            <button className="btn2" type="submit">Register</button> 
            </div>

        
         <p>come back later? <a href="/">Log out</a> </p>
         </form>
        </div>
      </div>
  );
}
export default Profile;

