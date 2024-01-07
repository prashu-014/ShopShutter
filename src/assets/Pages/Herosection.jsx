import React from 'react'





// background image
import Image from '../Images/backgroundnew.png'

//social media icons
import { TiSocialFacebook, TiSocialLinkedin, TiSocialPinterest, TiSocialTwitter } from 'react-icons/ti'



const Herosection = () => {
  return (
    
    <div className="container-fluid my-5  ">
      <div className="row row-cols-1 py-2 py-md-0 row-cols-md-2 gap-4 gap-md-0">
        <div className="col d-flex align-items-center justify-content-center order-1 order-md-0">

          <div className=" w-100 w-md-75  text-center p-2  ">
            <h1 className='display-2 fw-bold text-black text-decoration-underline'>ShopShutter <span className='text-danger'>.</span></h1>
           
            <p>"If you love something, wear it all the time... Find things that suit you. <br /> That's how you look extraordinary."
            </p>

            <button className='px-5 py-2 bg-black text-white'>SHOP COLLECTION</button>

            <div className="social_link pt-3">
              <a href="#" className='fs-4 px-2 text-black'><TiSocialFacebook /></a>
              <a href="#" className='fs-4 px-2 text-black'><TiSocialLinkedin /></a>
              <a href="#" className='fs-4 px-2 text-black'><TiSocialPinterest /></a>
              <a href="#" className='fs-4 px-2 text-black'><TiSocialTwitter /></a>

            </div>

          </div>
        </div>
        <div className="col order-0 order-md-1"><img src={Image} alt="" className='img-fluid' /></div>
      </div>
    </div>





  )
}

export default Herosection