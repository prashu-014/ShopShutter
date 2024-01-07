import React, { Component } from 'react'




import { ProductData } from '../CardData';

import Slider from "react-slick";
import SliderBar from '../Products/SliderBar';




const Newproducts = () => {

    return (

        <section className='container-fluid py-md-5 bg-body-tertiary'>

            <div className='row'>

                <article className='col'>
                    <h1 className='fw-bold'>New in Store</h1>
                    <div className=' d-md-flex justify-content-between  '>
                        <p>Style is something each of us already has, all we need to do is find it.<br />I don't design clothes. I design dreams.</p>


                    </div>

                </article>



            </div>

            <div className=' '>

                <SliderBar />

            </div>
        </section>
    )
}

export default Newproducts