import React, { PureComponent } from 'react';
import _ from 'lodash';

const Pagination = props => {
    const {itemCount,pageSize}=props
  
  const  pageCount=Math.ceil(itemCount/pageSize)
  if(pageCount===1) return null;
  const pages= _.range(1,pageCount+1)

    return(
        <nav>
            <ul className='pagination'>
                {pages.map(page=>(
                       <li key={page} className={page===props.currentPage?'page-item active':'page-item'}>
                       <a className='page-link' onClick={()=>props.onPageChange(page)}>{page}</a>
                   </li>

                ))}
             
            </ul>
        </nav>
    )
}
 
export default Pagination;