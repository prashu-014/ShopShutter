import React from 'react'

import './Pagination.css'

const pagination = ({totalPosts, postPerPage,setCurrentPage,currentPage}) => {
    const pagenumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pagenumber.push(i)
    }

    return (
        <div className='pagination my-4'>
            {
                pagenumber.map((number, index)=>{
                    return <button key={index} onClick={()=> setCurrentPage(number)} className={number == currentPage ? 'active' : ''}>{number}</button>
                })
            }
        </div>
    );
}

export default pagination



// <li key={index} className={`page-item${number === activePage ? "bg-warning" : ""}`}>
//                         <button onClick={()=> paginate(number)} className='bg-transparent'>{number}</button>

//                     </li>