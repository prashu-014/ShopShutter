import { React, useState, useEffect } from 'react'

import { navLink } from '../Data'


import {Link,  useNavigate } from 'react-router-dom'

import { FiShoppingBag } from "react-icons/fi"
import { FaRegUser } from "react-icons/fa6"
import { IoCloseSharp, IoMenu } from "react-icons/io5"

import './Navbar.css'









const Navbar = () => {

  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

 
  const token = localStorage.getItem("token");


  const loginRedirect = () =>{

    if(token === "" || token === null)
    {
      navigate("/login");
      // console.log("login page");
    }
    else{
      navigate("/userDetails");

      // console.log("userDetails page");
    }
  }



 



  return (
    <>
      <header className=' container-fluid position-fixed top-0 bg-white border-bottom ' >


        <div className="row d-flex align-items-center  ">
          <div className="col-8 col-sm-10  d-flex align-items-center ">

            <div className='d-flex align-items-center' >
              <span className='fs-5 p-1 d-md-none ' onClick={showSidebar}  ><IoMenu /></span>

              <span className="logo p-2 me-5 fw-bold fs-5 ">ShopShutter</span>
            </div>

            <nav className={sidebar ? 'nav_open' : 'nav_close'} onClick={showSidebar} >



              <ul className='m-0 p-0 d-block d-md-flex  ' >
                <span className='close_icon text-danger text-end p-2  fs-4 pe-2 d-block d-md-none  '><IoCloseSharp /></span>

                {


                  navLink.map((item) => {



                    return (



                      <li key={item.id} >
                        <Link className=' text-dark p-3  nav_links text-decoration-none' to={item.path} >{item.title}</Link>


                      </li>


                    );


                  })}

              </ul>

            </nav>
          </div>
          <div className=" col-4 col-sm-2 py-2 d-flex justify-content-end align-items-center">
         <FaRegUser className=' fs-5 mt-1  text-dark ' onClick={()=> loginRedirect()} />
            <div className='  position-relative'>
              <Link className='fs-5 mx-2 text-dark' to='/cart-page'><FiShoppingBag /></Link>
              <span className=' position-absolute rounded-circle ' style={{ backgroundColor: "gray", left: "20px", top: "-4px", padding: " 0 6px" }}></span>
            </div>

          </div>
        </div>



      </header>

    </>
  )
}

export default Navbar

// 