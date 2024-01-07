import React from 'react'

import shirt from '../Images/henger.png'
import shirt1 from '../Images/clothIcon.png'

const Wishlist = () => {
  return (
    <div className='pt-5 px-3  d-flex justify-content-center flex-column  ' fluid="xxl">

      <article className=' '>
        <h1 className='text-center fw-bold py-3'>About Us</h1>
        <p >
          THE FASHION STORE caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find anywhere else. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in ShopShutter in 2023, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.</p>
      </article>

      <article className='row p-md-5 p-3  d-flex flex-column flex-md-row gap-4 '>
        <div className="col border">
          <div className='text-center p-2'>
            <img src={shirt} alt="" />
          </div>
          <p>
            Our Mission is to make a difference through our branding by staying ahead of the fashion trends, defining style and giving customers what they want.
          </p>
        </div>
        <div className="col border ">
          <div className='text-center p-2'>
            <img src={shirt1} alt="" />
          </div>
          <p>Our Vision is to change the way our society connects with the fashion industry by providing our customers with products that are ethically and responsibly sourced.</p>
        </div>

      </article>

      <article className='row  p-3 p-md-4'>
        <div className="col border  p-md-3 py-4">
          <div>
            <h1 className='fw-bold '>ShopShutter</h1>
            <hr />
          </div>
          <p >THE FASHION STORE is here to serve you and make sure you find the Perfect Look for every occasion. Our passion for fashion is the reason why we are here. We absolutely love what we do, and our goal is to help our customers by providing them with unique outfit and accessories that make them stand-out from the crowd.</p>

        </div>

      </article>


    </div>
  )
}

export default Wishlist