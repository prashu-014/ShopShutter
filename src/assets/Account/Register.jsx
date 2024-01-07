import React, { useState } from 'react'

import login from '../Images/login.png'

import { Link ,useNavigate} from 'react-router-dom'

// import {getDoc,addDoc,collection,where,query} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/FirebaseConfing'




const Register = () => {

    const [name ,setName] = useState("");
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");

    const navigate = useNavigate()

    const [error,seterror] = useState("")



    const handleSubmission = async () => {

        
       
   
      try{
     
        const userCredential = await createUserWithEmailAndPassword(auth,email,password,name);
        // console.log(userCredential);
        const user = userCredential.user;
        

       

        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('userName',JSON.stringify(name))

        navigate("/login");

      alert("Sign in successfully");
      }
      catch(err){
        alert(err);


      }


    }


    return (
        <div className="container-fluid  min-vh-100 d-flex justify-content-center align-items-center ">
            <div className="row d-flex align-items-center  p-0 ">
                <div className="col border py-4 px-3">
                    <div className="content " >
                        {/* <form action="#" className=''> */}

                        

                            <h3 className='text-center'>Register</h3>

                            <hr />
                            <span className='text-danger'>{error}</span>
                       
                        <div className='p-2'>
                            <label htmlFor="" >Name</label>
                            <input type="text" label="name" className='w-100 p-1 border ' onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className='p-2'>
                            <label htmlFor="" >Gmail</label>
                            <input type="email" label="gmail" className='w-100 p-1 border 'onChange={(e)=>setEmail(e.target.value)}  />
                        </div>

                        <div className='p-2'>
                            <label htmlFor="" >Password</label>
                            <input type="password" label="password" className='w-100 p-1 border ' onChange={(e)=>setPassword(e.target.value)} />
                        </div>

                        <div className='d-flex justify-content-between px-2'>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor=""> Remember me</label>
                            </div>

                        </div>

                        <div className='text-center mt-4'>
                            <button className='w-100 py-2 bg-primary text-white fw-bold' onClick={()=>handleSubmission()} >Register</button>
                        </div>

                        <h6 className='mt-2 fw-bold'>Back to <Link className='text-danger' to="/login">Login Page</Link></h6>

                        {/* </form> */}
                    </div>
                </div>



                <div className="col d-none d-md-block text-end">
                    <img src={login} alt="" className='img-fluid' />

                </div>
            </div>
        </div>
    )
}

export default Register