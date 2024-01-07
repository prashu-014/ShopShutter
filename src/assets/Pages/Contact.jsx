import React, { useState } from 'react'

import Swal from 'sweetalert2'

import '../Collections/common.css'
const Contact = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMsg] = useState("");

  const [error, setError] = useState("");

  const handleSubmission = (event) => {
    event.preventDefault()

     
    //  console.log(email);
    //  console.log(message);
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    
      Swal.fire({
        title: 'Error!',
        text: 'fill all the fields',
        icon: 'error',
        confirmButtonText: 'ok'
      })
    }
    else {
      Swal.fire({
        title: "Success",
        text: "Form Submmited!",
        icon: "success"
      });
      setError("");

      setEmail("")
      setMsg("")
      setName("")
      
    }
    
   


  }

  

  return (
    <div className="container-fluid  mt-5 d-flex justify-content-center align-items-center ">
      <div className="row d-flex align-items-center mt-4  p-0 ">
        <div className="col border py-4 px-3">
          <div className="content" style={{"max-width":"300px"}}>
            <form action="#" onSubmit={() => handleSubmission(event)}>



              <h3 className='text-center'>Contact Us</h3>

              <hr />
              <span className='text-danger'>{error}</span>

              <div className='p-2'>
                <label htmlFor="" >Name</label>
                <input type="text" label="name" className='w-100 p-1 border ' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='p-2'>
                <label htmlFor="" >Gmail</label>
                <input type="email" label="gmail" className='w-100 p-1 border ' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className='p-2 d-flex flex-column'>
                <label htmlFor="" >Message</label>
                <textarea name="" id="" cols="40" rows="5" className='border' value={message} style={{ resize: "none" }} onChange={(e) => setMsg(e.target.value)}></textarea>
              </div>



              <div className='text-center mt-4'>
                <button className='w-100 py-2 bg-primary text-white fw-bold' type='submit' >Submit</button>
              </div>



            </form>
          </div>
        </div>




      </div>
    </div>
  )
}

export default Contact