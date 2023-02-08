import React from 'react';
import "./button.scss"

function Button({ selection }) {
    return (
        <div className='button'>
            <button className='button-select' onClick={() => {selection("mountain")}} > Mountain </button>
            <button className='button-select' onClick={() => {selection("animal")}} > Animal </button>
            <button className='button-select' onClick={() => {selection("beach")}} > Beach </button>
            <button className='button-select' onClick={() => {selection("flower")}} > Flower </button>
        </div>
    );
}

export default Button;