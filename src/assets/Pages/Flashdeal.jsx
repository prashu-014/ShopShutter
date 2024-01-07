import React from 'react'

import Flashimg from '../Images/flash.jpg'

import Timer from '../Products/Timer'

const Flashdeal = () => {
    return (
        <div className="container-fluid py-2  bg-body-secondary">
            <h1 className='text-center fw-bold py-4 text-decoration-underline '>Upcoming Deals</h1>
            <div className="row row-cols-1 row-cols-md-2">
                    <div className="col d-flex align-items-center justify-content-center">
                        <div className='py-4 py-md-0 text-center'>
                            <h1 className='fw-bold display-3 '>Flash Deal</h1>
                            <p >Your new favorite outfit is waiting for you</p>
                           

                            <Timer duration={15 * 24 * 60 * 60 * 1000} />
                            <button className='bg-dark px-4 py-2 mt-4 rounded-2 text-white'>Buy Now</button>
                        </div>
                    </div>
                    <div className="col d-none d-md-block d-flex justify-content-center text-center">
                        <img src={Flashimg} alt="" className='img-fluid w-50' />
                    </div>
                {/* </div> */}

            </div>
        </div>
    )
}

export default Flashdeal