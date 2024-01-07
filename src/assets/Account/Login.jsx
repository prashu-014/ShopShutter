import React, { useState } from 'react'
import '../Collections/common.css'

import login from '../Images/login.png'


import { Link, useNavigate } from 'react-router-dom'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/FirebaseConfing'






const Login = () => {




  const navigate = useNavigate()

  // const [submitButtonDisable, setsubmitButtonDisable] = useState(false)

  const [error, seterror] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [disableBtn, setDisable] = useState(false);




  const handleSubmission = async () => {






    if (!email === "" || !password === "") {

      seterror("Fill all field");

    }



    try {


      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // console.log(userCredential);
      const user = userCredential.user;

      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user))

      navigate("/");
      alert("login successfully");
    }
    catch (err) {
      alert(err);


    }


  }





















  return (
    <div className="container-fluid  min-vh-100 d-flex justify-content-center align-items-center ">
      <div className="row d-flex align-items-center  p-0 ">
        <div className="col border py-4 px-3">
          <div className="content " >





            <h3 className='text-center'>Login</h3>




            <hr />
            <div className='text-danger'>{error}</div>
            <div className='p-2'>
              <label htmlFor="">Username</label>
              <input type="email" className='w-100 p-1 border' label="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='p-2'>
              <label htmlFor="">Password</label>
              <input type="password" className='w-100 p-1 border' label="password" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='d-flex justify-content-between px-2'>
              <div>
                <input type="checkbox" />
                <label htmlFor=""> Remember me</label>
              </div>
              <div>
                <a href="#">Forget password</a>
              </div>
            </div>

            <div className='text-center mt-4'>
              <button className='w-100 py-2 bg-primary text-white fw-bold' onClick={() => handleSubmission()} >Login</button>
            </div>

            <h6 className='mt-2 fw-bold'>Don't have an account? <Link className='text-danger' to="/register" >Register</Link></h6>



          </div>
        </div>



        <div className="col d-none d-md-block text-end">
          <img src={login} alt="" className='img-fluid' />

        </div>
      </div>
    </div>
  )
}

export default Login