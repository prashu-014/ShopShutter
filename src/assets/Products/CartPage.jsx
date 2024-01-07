import React, { useEffect, useState } from 'react'
import '../Collections/common.css'

import { Link } from 'react-router-dom';

import { MdDeleteOutline } from "react-icons/md"

import {toast} from "react-toastify"

const CartPage = () => {

    const [cartItems, setcartItems] = useState([]);

    useEffect(() => {
        //loacl storage 

        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || []
        setcartItems(storedCartItems);

    }, [])

    //calculate price

    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;

    }

    //handle quantity increase
    const handleIncrease = (item) => {
        item.quantity += 1;
        setcartItems([...cartItems]);

        toast.info("Increase The Product quality",{
            position:"bottom-left",
        });

        //update local storage with new
        localStorage.setItem("cart", JSON.stringify(cartItems));

    }


    //handle quantity increase

    const handleDecre = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1
            setcartItems([...cartItems])
            localStorage.setItem("cart", JSON.stringify(cartItems));

            toast.info("Decrease The Product quality",{
                position:"bottom-left",
            });
        }
    }


    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItems) => cartItems.id !== item.id);

        //updatenew cart
        setcartItems(updatedCart)

        updateLocalStorage(updatedCart)
        toast.error("Product Deleted",{
            position:"bottom-left",
        });
    }

    const updateLocalStorage = (cart) => {

        localStorage.setItem("cart", JSON.stringify(cart));

    }

    const cartSubTotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item)
    }, 0)

    //order total
    const orderTotal = cartSubTotal;





    return (
        <div className='align_center container-fluid  p-md-4 shadow '>
            <div className="row ">
                <div className=" col-12 col-md-8 section-wrapper ">
                    <div className="  py-4  table-responsive ">

                        <table className="table ">
                            <thead >
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    cartItems.map((item, i) => (
                                        <tr key={i}>
                                            <td className='d-flex flex-column flex-md-row gap-md-2 '>
                                                <div className='p-thumb ' style={{ width: "100px" }}>
                                                    <Link to='/shop'><img src={item.img} alt="" className='img-fluid ' /></Link>

                                                </div>
                                                <div>
                                                    <Link to='/shop' className='text-dark text-decoration-none fw-bold'>{item.name}</Link>
                                                </div>
                                            </td>

                                            <td className='p-1 py-2'>
                                                <span> &#8377; {item.price}</span>
                                            </td>

                                            <td>
                                                <div className="cart-quantity">
                                                    <div className="cart-plus-minus d-flex " style={{width:"100px"}} >
                                                        <button className="dec qtybutton border px-2" onClick={() => handleDecre(item)}>-</button>

                                                        <input type="text" name='qtybutton' value={item.quantity} className=' w-25  text-center  bg-dark text-white ' readOnly />

                                                        <button className="dec border px-2" onClick={() => handleIncrease(item)}>+</button>
                                                    </div>

                                                </div>
                                            </td>

                                            <td className='fw-bold'>
                                            &#8377;{calculateTotalPrice(item)}
                                            </td>
                                            <td>
                                                <a href="#" onClick={() => handleRemoveItem(item)}>
                                                    <MdDeleteOutline className='fs-4 text-dark' />
                                                </a>
                                            </td>

                                        </tr>
                                    ))
                                }

                            </tbody>

                        </table>


                    </div>

                </div>


                {/* price details */}
                <div className="col-12 col-md-4  py-4 shadow">
                    <div className='bg-white p-2'>
                        <h3 className='fw-bold'>Price Details</h3>

                        <hr />
                        <div className='d-flex justify-content-between py-2'>
                            <span>Cart Total</span>
                            <span>${cartSubTotal}</span>
                        </div>
                        <div className='d-flex justify-content-between py-2'>
                            <span>Delivery Charges</span>
                            <span>Free</span>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between py-2'>
                            <span>Total Amount</span>
                            <span className='text-success fw-bold fs-4'>&#8377;{orderTotal.toFixed(2)}</span>
                        </div>

                        <div className='text-end my-4'>
                            <button className='btn bg-success text-white'>Procced To Payment</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartPage






