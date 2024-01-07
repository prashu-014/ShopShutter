import React, { useState } from 'react'

import './common.css'

import Pagination from '../Products/Pagination'

import ProductCards from '../Products/ProductCards'

import AllProductData from '../AllProductData.json'
import FilterProducts from '../Products/FilterProducts'



const showResults = "Showing 01 - 12 of Results"

const allProducts = () => {

  const [coinData, setCoinsData] = useState(AllProductData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(8);

  // // map in product price
  // const priceArr = AllProductData.map((price) => price.price)

  // // calculate the maximum price
  // let maxPrice = Math.max(...priceArr)
  // let minPrice = Math.min(...priceArr)
  // let price = 0;


  const lastPostIndex = currentPage * postPerPage;

  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = coinData.slice(firstPostIndex, lastPostIndex);

  const menuItems = [...new Set(AllProductData.map((val) => val.category))]

  const filterItem = (cat) => {
    const newItem = AllProductData.filter((newval) => newval.category === cat)
    setCoinsData(newItem)
  }








  return (
    <div className='align_center container-fluid  py-4'>


      <div className="row">
        <div className="col-lg-4 col-12 p-md-2 "  >
          <div className='p-2 p-md-3 rounded-2 'style={{backgroundColor:"#FBF9F1"}}>
            <h3 className='fw-bold'>  Filter Products</h3>
            <hr />


            <div className='py-md-1'>
              <span className=' fw-bold d-block pb-2 fs-5'>Category</span>


              <FilterProducts menuItems={menuItems} filterItem={filterItem} setCoinsData={setCoinsData} />

            </div>

            <div className='d-none d-md-block' >
             
             <form action="">
              
             <label htmlFor="sort" className='fw-bold'></label>
             {/* <select name="sort" id="sort" onClick={sorting}>
              
              <option value="lowest">Price (Lowest)</option>
              <option value="highest">Price (Highest)</option>
              <option value="lowest">Price (Lowest)</option>
              <option value="lowest">Price (Lowest)</option>
             </select> */}
             </form>

              {/* <FormatPrice productPrice={productPrice} /> */}


              {/* <input type="range" name="" id="" min={minPrice} max={maxPrice} value={productPrice} readOnly /> */}






            </div>

            <button className=' px-2 py-1 py-md-2 px-md-4 my-md-5 bg-dark text-white fw-bold border border-2 border-white' onClick={()=>setCoinsData(AllProductData)}>CLEAR FILTER</button>
          </div>


        </div>
        <div className="col-lg-8 col-12">
          <article>
            <div className="shoptitle">
              <p>{showResults}</p>
            </div>
            <div>
              <ProductCards coinData={currentPosts} />
            </div>


            <Pagination coinData={currentPosts}
              totalPosts={coinData.length}
              postPerPage={postPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}


            />
          </article>
        </div>
      </div>



    </div>


  )
}

export default allProducts