import React from 'react'
import {Link} from 'react-router-dom'
import { GoHeart } from "react-icons/go";

const ProductCards = ({ coinData }) => {

    return (
        <div className="row justify-content-center ">
            {
                coinData.map((item,i) => {
                    return (
                        <div key={i} className="col-lg-3 col-md-6 col-12 p-2">
                            <div className="product-item border border-2  rounded-3 overflow-hidden">
                                <div className="product-thumb position-relative">
                                    <div className="pro-thumb text-center ">
                                    <Link to={`/ProductDetails/${item.id}`}>
                                    <img src={item.img} alt="" className='img-fluid '    />
                                    </Link>
                                        
                                    </div>
                                    <span className='position-absolute top-0 px-2 py-1 bg-white rounded-circle my-2 mx-1 '><GoHeart className='fs-5'/></span>
                                    
                                </div>

                                <div className="product-content text-center d-flex py-3 px-2 align-items-center justify-content-between">
                                    <span className='fw-bold '>
                                        <Link to={`/ProductDetails/${item.id}`} className='text-dark text-decoration-none'>{item.name}</Link>
                                    </span>
                                    
                                    <span className=' fw-bold  px-2 py-1 rounded-2 ' style={{backgroundColor:"rgba(0, 0, 0, 0.150)"}}>&#8377; {item.price}</span>
                                  

                                </div>
                            </div>

                        </div>

                    )
                })
            }
        </div>
    )
}

export default ProductCards



