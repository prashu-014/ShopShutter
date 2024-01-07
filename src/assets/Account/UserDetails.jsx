import React from 'react'

import { signOut } from 'firebase/auth'
import { auth } from '../Firebase/FirebaseConfing'
import { useNavigate } from 'react-router-dom'

const UserDetails = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {

    await signOut(auth);

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // localStorage.removeItem('userName');

    navigate("/");
    alert("logout");

  }

  const username = localStorage.getItem("userName");
  const user = localStorage.getItem("user");

    const name= JSON.parse(user);

   
  
  


  return (
    <div className='vh-100  d-flex justify-content-center align-items-center'>

      <div className=' border border-dark p-4  ' style={{"max-width":"400px"}}>

        <div className=' d-flex justify-content-center align-items-center'>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" className='w-50 rounded-circle'/>
        </div>
        <hr />

        <div className='text-center py-3'>
          <h6 className='fw-bold  '>Name: {username}</h6>
          <h6 className='fw-bold  '>Email: {name.email}</h6>
          <button onClick={() => handleLogout()} className='btn bg-info'>Logout</button>

        </div>



      </div>
    </div>
  )
}

export default UserDetails