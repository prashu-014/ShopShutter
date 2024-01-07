import { useEffect, useState } from 'react'

import './App.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './assets/Home/Home'

import AllProducts from './assets/Collections/allProducts'
import Contact from './assets/Pages/Contact'




import Login from './assets/Account/Login'


import Navbar from './assets/Compoenets/Navigation/Navbar'

import ProductDetails from './assets/Collections/ProductDetails'


import 'bootstrap/dist/css/bootstrap.min.css'
import CartPage from './assets/Products/CartPage'
import { ToastContainer } from 'react-toastify'

import "react-toastify/dist/ReactToastify.css"
import Register from './assets/Account/Register'


import About from './assets/Collections/About'
import UserDetails from './assets/Account/UserDetails'
// import User from './assets/Account/User'

// import {auth} from './assets/Firebase/FirebaseConfing'







function App() {
  

  // const username=localStorage.getItem('userName');

 

  return (
    <>



      <BrowserRouter>
      <ToastContainer />
      
        <Navbar  />
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='allproducts' element={<AllProducts />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='about' element={<About />}></Route>
          
          <Route path='login' element={<Login />}></Route>
         
          <Route path='ProductDetails/:id' element={<ProductDetails />}></Route>
          <Route path='cart-page' element={<CartPage />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='userDetails' element={<UserDetails />}></Route>
          
         



        </Routes>

          

      </BrowserRouter>



    </>
  )
}

export default App
