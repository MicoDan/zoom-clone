import React from "react";
import './Formpractice.css'
import { useFormik } from "formik";

const Practice = () => {

    const formik = useFormik({initialValues : {firstName: "",lastname: "",email: ""}})

return(
    <form>
            <div className="App">
                <input 
                id="firstname"
                name="firstname"
                type="text"
                placeholder="First name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                />
    </div>
    </form>
)
}

export default Practice