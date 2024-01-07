import React from 'react'

import { CiDeliveryTruck } from "react-icons/ci";
import { RiExchangeFundsFill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";


import Slider from 'react-slick';

const FacilitySlider = () => {


    var settings = {
        dots: true,
        infinite: true,

        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 5000,
        cssEase: "linear",



        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    

                }
            },
            
        ]
    };



    return (

        <div className="row text-center py-5">

            <Slider {...settings}>

                <div className="">
                    <div>
                        <CiDeliveryTruck className='display-1' />
                        <div>
                            <h5 className='fw-bold'>FREE & FAST DELIVERY</h5>
                            <p>Shiping within 48 hours across India</p>
                        </div>
                    </div>
                </div>


                <div className="">
                    <div>
                        <RiExchangeFundsFill className='display-2 my-1 ' />
                        <div>
                            <h5 className='fw-bold'>EXCHANGE & RETURN POLICY</h5>
                            <p>Easy exchange & return with 15 days</p>
                        </div>
                    </div>
                </div>



                <div className="">
                    <div>
                        <IoMdContacts className='display-1' />
                        <div>
                            <h5 className='fw-bold'> CONTACT US</h5>
                            <p>Write us at support@shopshutter.com</p>
                        </div>
                    </div>
                </div>


             </Slider >

        </div>




    )
}

export default FacilitySlider

{/* 

<div className="">
                    <div>
                        <CiDeliveryTruck className='display-1' />
                        <div>
                            <h4 className='fw-bold'>FREE & FAST DELIVERY</h4>
                            <p>Shiping within 48 hours across India</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div>
                        <RiExchangeFundsFill className='display-2 my-1 ' />
                        <div>
                            <h4 className='fw-bold'>EXCHANGE & RETURN POLICY</h4>
                            <p>Easy exchange & return with 15 days</p>
                        </div>
                    </div>
                </div>


                <div className="">
                    <div>
                        <IoMdContacts className='display-1' />
                        <div>
                            <h4 className='fw-bold'> CONTACT US</h4>
                            <p>Write us at support@shopshutter.com</p>
                        </div>
                    </div>
                </div> */}
