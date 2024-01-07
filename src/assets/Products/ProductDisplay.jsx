import React, { useState } from 'react'

import { IoMdStar } from "react-icons/io"
import { FaMinus, FaPlus } from "react-icons/fa6"

import { Link } from 'react-router-dom'

import {toast} from "react-toastify"

export const ProductDisplay = ({ item }) => {

    const { name, id, price, ratingCount, quantity,img } = (item)

    const [prequantity, setQuantity] = useState(quantity);

    const [size, setSize] = useState("Select Size");

    const handleSizeChange = (e) => {
        setSize(e.target.value)

        
    }

    const handleInc = () => {
        setQuantity(prequantity + 1)
       

    }

    const handleDec = () => {

        if(prequantity > 1) {
            setQuantity(prequantity - 1)
            
        }

    }
    const handleSubmit =(e)=>
    {
        e.preventDefault();
        const product = 
        {
            id :id,
            img:img,
            name:name,
            price:price,
            quantity:prequantity,
            size:size
        }
        // console.log(product);

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = existingCart.findIndex((item)=> item.id == id);

        if(size === "Select Size")
        {
            toast.error("select size",{
                position:"bottom-left",
            });

        }
        else if(existingProductIndex !== -1)
        {
            existingCart[existingProductIndex].quantity += prequantity;
            toast.info("Increase The Product quality",{
                position:"bottom-left",
            });
        }
        else{
            existingCart.push(product);
            toast.success("Add The New Product To Cart",{
                position:"bottom-left",
            });
        }

        //update local storage

        localStorage.setItem("cart",JSON.stringify(existingCart));


        //reset from fildes

        setQuantity(1);
        setSize("Select Size");


    }



    return (
        <div className=' py-2  py-md-4'>
            <h1>{name}</h1>
            <p className=''>

                <i ><IoMdStar className='fs-5' /></i>
                <i ><IoMdStar className='fs-5' /></i>
                <i ><IoMdStar className='fs-5' /></i>
                <i ><IoMdStar className='fs-5' /></i>
                <span>({ratingCount})</span>




            </p>
            <h3 className='fw-bold'>&#8377;{price}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, harum? <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nam quos placeat.</p>

            <div className=''>
                <form action="" className='d-flex flex-column gap-2' onSubmit={handleSubmit}>
                    <div className="select-product">
                        <select value={size} className='px-4 py-1' onChange={handleSizeChange}>
                            <option value="">Select Size</option>
                            <option >S</option>
                            <option >M</option>
                            <option >L</option>
                            <option >XL</option>
                        </select>
                    </div>

                    <div className='   py-2 w-25 d-flex'>
                        <span className='p-1 border border-dark' onClick={handleDec}><FaMinus /></span>
                        <input type="text" name='qtybutton' id='qtybutton' className='py-1 w-25 text-center bg-dark text-white' value={prequantity} onChange={(e) => setQuantity(pasrseInt(e.target.value))} />
                        <span className='p-1 border border-dark' onClick={handleInc}><FaPlus /></span>
                    </div>


                    <div className='d-flex gap-4'>
                    <button className='w-50 py-2 bg-dark text-white' type='submit'>
                        Add to card
                    </button>
                    <Link to='/cart-page'>
                        <button className='py-2 px-4 bg-dark text-white'>Check Out</button>
                    </Link>
                    </div>
                </form>
            </div>





        </div>
    )
}

export default ProductDisplay