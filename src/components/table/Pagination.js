import React from 'react'
import './Pagination.css'

function Pagination({postsPerPage,totalPosts,paginate}) {
    const pageNumber=[];
    for(let i=1;i <= Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i)
    }
    return (
        <nav className='navbar'>
        <ul className='pagination'>
          {pageNumber.map(number => (
            <li key={number} className='page-item'>
              <a id='pages' onClick={() => paginate(number)}  href='!#' className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
}

export default Pagination
