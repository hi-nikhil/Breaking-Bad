import React from 'react'
import './Pagination.css'

function Pagination({currentPage,postsPerPage,totalPosts,paginate}) {
    const pageNumber=[];
    for(let i=1;i <= Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i)
    }
    return (
        <nav className='navbar'>
        <ul className='pagination'>
          {pageNumber.map(number => (
            <li key={number} className={currentPage == number ? 'active' :null} onClick={() => paginate(number)}>
              {number}
            </li>
          ))}
        </ul>
      </nav>
    )
}

export default Pagination
