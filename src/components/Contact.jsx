import React, {useState} from 'react'
import { IoIosSend } from "react-icons/io";
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import {ImSpinner9} from 'react-icons/im'

const initialValues = {
  name : "",
  email : "",
  message : ""
}

const Contact = () => {
  const [loading, setLoading] = useState(false)

  const {values, errors, handleSubmit, handleBlur, handleChange, resetForm} = useFormik({
    initialValues,
    onSubmit : (data)=>{
      setLoading(true)
      emailjs.sendForm('service_7zb4n0f', 'template_oc89xxg', values, 'UrRaQcEB7fssOyFgd')
        .then((result) => {
            setLoading(false)
            e.target.reset()
            setSubmit('Submitted')
            setTimeout(() => {
              setSubmit('Submit')
            }, 2000);
            console.log(result.text);
        }, (error) => {
            setLoading(false)
            console.log(error.text);
        });
    }
  })
  
  return (
    <div className='contact w-full my-20 py-4 flex justify-center'>
      <div className='border rounded-lg p-4 w-6/12 max-sm:w-full'>
        <div className="head">
            <h1 className='text-center text-4xl'>Contact Me</h1>
        </div>
        <div className="form my-10">
            <form onSubmit={handleSubmit} action="">
                <div className='flex flex-col my-4'>
                    <label className='py-1 text-slate-500' htmlFor="">Name</label>
                    <input onChange={handleChange} onBlur={handleBlur} value={values.name} placeholder='Enter your name' className='p-2 border-2 rounded-lg' type="text" name='name' required/>
                </div>
                <div className='flex flex-col my-4'>
                    <label className='py-1 text-slate-500' htmlFor="">Email</label>
                    <input onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='Enter your email' className='p-2 border-2 rounded-lg' type="email" name='email' required/>
                </div>
                <div className='flex flex-col my-4'>
                    <label className='py-1 text-slate-500' htmlFor="">Message</label>
                    <textarea onChange={handleChange} onBlur={handleBlur} value={values.message} placeholder='Type your message here...' className='p-2 border-2 rounded-lg' name="message" rows={10}></textarea>
                </div>
                <div>
                <button type='submit' className='bg-sky-500 flex items-center text-2xl text-white hover:bg-sky-600 transition-all px-4 py-1 rounded-md'>
                  {loading?
                  <>
                  <ImSpinner9/>
                  Submitting...
                  </>
                  :
                  <>
                  <IoIosSend className=''/>
                  Submit
                  </>
                  }
                </button>
                </div>
            </form>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Contact
