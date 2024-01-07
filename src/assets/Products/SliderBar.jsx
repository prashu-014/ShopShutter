import React from 'react'

import './SliderBar.css'

import Slider from 'react-slick';

import { ProductData } from '../CardData';

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";





function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <button className='leftbtnarrows' onClick={onClick}><FaArrowLeft /></button>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (


        <button className='rightbtnarrows' onClick={onClick}><FaArrowRight /></button>

    );
}




const SliderBar = () => {

  
    var settings = {
        dots: false,
        infinite: true,
        
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    
    
    
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
    
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

   
    return (
        <div className='carousel'>



            <Slider {...settings}>




                {
                    ProductData.map((item) => {

                        return (
                            <div className="box" key={item.id}>
                                <div className='w-100'>
                                    <img src={item.img} alt="" className='img-fluid' />
                                </div>

                            </div>
                        )
                    })
                }


            </Slider>
        </div>
    )
}

export default SliderBar