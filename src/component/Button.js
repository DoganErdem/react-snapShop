import React from 'react';
import "./button.scss"

function Button(props) {
    return (
        <div className='button'>
            <button className='button-select'> Mountain </button>
            <button className='button-select'> Animal </button>
            <button className='button-select'> Baech </button>
            <button className='button-select'> Flower </button>
            
        </div>
    );
}

export default Button;