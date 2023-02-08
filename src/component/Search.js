import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import "./search.scss"

function Search({ placeholder, type, searchButon }) {

    const [input, setInput] = useState("")

    return (
        <div className='input'>
            <input className='input-search' type={type} placeholder={placeholder} onChange={(e) =>{setInput(e.target.value)}}></input>
            <BiSearch className='input-icon' size={24} color="white" onClick={() => {searchButon(input)}} />
        </div>
    );
}

export default Search;
