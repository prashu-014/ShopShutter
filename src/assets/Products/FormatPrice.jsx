
import React from 'react'

const FormatPrice = ({productPrice}) => {
  return (
    <div>
       
       {
        productPrice.map((item)=>console.log(item))
       }
    </div>
  )
}

export default FormatPrice