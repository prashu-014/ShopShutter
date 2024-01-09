import React, { useEffect, useState } from 'react'

import './common.css'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Products/ProductDisplay';

import AllProductData from '../AllProductData.json'




const ProductDetails = () => {

    const [products, setProduct] = useState([]);
    const { id } = useParams();




    useEffect(() => {
        // fetch("/src/assets/AllProductData.json").then(res => res.json()).then(data => setProduct(data))

        setProduct(AllProductData);
    }, [])


    

    const result = products.filter((p) => p.id == id);






    return (
        <div className='align_center container-xxl  py-0 py-md-5'>
            <div className="row">
                {/* left side */}
                <div className=" col-lg-6 col-12 left-side  ">
                    <div className="product-thumb">
                        <div className="swiper-container">

                            {
                                result.map((item) => (

                                    <div key={item.id} className='d-flex justify-content-center '>
                                        <img src={item.img} alt="" className='w-50' />
                                    </div>

                                ))
                            }


                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className=" col-lg-6 col-12 right-side ">

                    {
                        result.map(item => <ProductDisplay key={item.id} item={item} />)
                    }




                </div>


            </div>


            {/* review section */}

            {/* <div className='container-fluid bg-danger py-2'>
                <Review />
            </div> */}

        </div>
    )
}

export default ProductDetails
