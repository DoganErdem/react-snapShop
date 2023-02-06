import React from 'react';
import { BiSearch } from 'react-icons/bi';
import "./search.scss"

function Search({ placeholder, type }) {
    return (
        <div className='input'>
            <input className='input-search' type={type} placeholder={placeholder}></input>
            <BiSearch className='input-icon' size={24} color="white" />
        </div>
    );
}

export default Search;
