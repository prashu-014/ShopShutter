import React from 'react'

const Footer = () => {
  return (
    <div className=' container-fluid  border-top border-2  border-dark '>
      
      <div className="row gap-4 gap-md-0 px-2 px-md-4  my-2 py-3">

        <div className="col-12 col-md-6 col-lg-6 p-md-4 p-lg-0">
          <h1 className='fw-bold'>SHOPSHUTTER</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, incidunt.</p>
          <div className='d-flex gap-2'>
          <input type="text" className='rounded-4 py-1 border border-dark border-1' />
          <button className='py-1 px-4 rounded-4 bg-black text-white'>Submit</button>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-2  p-md-4 p-lg-0">
          <ul className='m-0 p-0'>
            <h5 className='fw-bold'>Product</h5>
            <li>Tshirt</li>
            <li>Jacket</li>
            <li>Pants</li>
            <li>Shoes</li>
            <li>Sunglasses</li>
        
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-2 p-md-4 p-lg-0">
        <ul className='m-0 p-0'>
            <h5 className='fw-bold'>Categories</h5>
            <li>Mens</li>
            <li>Gift</li>
            <li>New Arrival</li>
            <li>Flash deals</li>
          
            
        
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-2 p-md-4 p-lg-0">
        <ul className='m-0 p-0'>
            <h5 className='fw-bold'>Social Media</h5>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Twitter</li>
          
            
        
          </ul>
        </div>

      </div>
      <div className="row row-cols-1 row-cols-md-2 bg-black text-white py-3 px-2 align-items-center">
        <div className="col">
          @ 2023 Shopshutter Production
        </div>
        <div className="col">
          <ul className='d-flex py-3 py-md-0 flex-column flex-md-row  gap-3 gap-lg-5 justify-content-md-end m-0 p-0'>
            <li>Terms & condiation</li>
            <li>Privacy Policy</li>
            <li> Cookie Policy</li>
          </ul>
        </div>
      </div>
      
      
      </div>
  )
}

export default Footer