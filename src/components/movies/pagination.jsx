import React, { Component } from 'react';
import _ from 'lodash' ;

const pagination = props => {
    const {pageSize, moviesLength, currentPage} = props;
    console.log(currentPage)
    const pageCount = Math.ceil(moviesLength / pageSize);
    const listeCount = _.range(1,pageCount+1)
    if (pageCount === 1) return null


    return (
        <nav aria-label="...">
            <ul className="pagination">
                {listeCount.map(c =>(
                    <li  key={c}  className={c === currentPage ? 'page-item active' :'page-item'}>
                        <a onClick={() => props.pageClick(c)} className="page-link">{c}</a>
                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default pagination ;