import React from 'react'

import AllProductData from '../AllProductData.json'

const FilterProducts = ({menuItems,filterItem,setCoinsData}) => {
    return (
        <>
            <ul className='d-flex p-0 flex-wrap px-md-4  flex-md-column gap-2'>
                <li>
                    <button onClick={()=>setCoinsData(AllProductData)} className='px-2 py-1 bg-transparent'> ALL</button>
                </li>
                {
                    menuItems.map((val,i) =>(
                        <li key={i}>
                            <button className='px-2 py-1 bg-transparent 'onClick={()=> filterItem(val)}  >
                           {val}

                        </button>
                        </li>
                    ))

                } 



            </ul>


        </>

    )
}

export default FilterProducts