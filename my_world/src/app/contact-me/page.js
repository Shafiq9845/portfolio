"use client";
import React from 'react';
import '../../asset/footer.css';
import { useFormik } from 'formik';
import { useState } from "react";
const page = () => {
  const [success, setSuccess] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Valid email required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Valid email required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Form submitted successfully");
      setSuccess(true);
    },
  });
  return (
    <div className="footer">
      <div className="links">
      <a href="https://www.linkedin.com/in/shafiq-undefined-a850382b7/" className="fa fa-linkedin"></a>
          <a href="https://twitter.com/ShafiqSiddiq11" className="fa fa-twitter"></a>
          <a href="https://www.instagram.com/iem_shafiq" className="fa fa-instagram"></a>
          <a href="https://github.com/Shafiq9845" className="fa fa-github"></a>   
          <a href="whatsapp://send?phone=918762495484&text=Hello" className="fa fa-whatsapp"></a>   
      </div>
      <div className="subsrcibe" >
      {success ? (
          <p className="text" style={{color:'green'}}>Form submitted successfully!</p>
        ) : (
<>
        <h4>Subscribe :</h4>
        <input id='email' className='email' type="email" placeholder='Enter Your Email................' value={formik.values.email} onChange={formik.handleChange}/>
        <input className='btn' type="button" value="subscribe" onClick={formik.handleSubmit}/>
        {formik.errors.email ? (
          <p className="text">
                      {formik.errors.email}
                    </p>
                  ) : null}
                  </>
        )}
        </div>
    </div>
  );
}

export default page