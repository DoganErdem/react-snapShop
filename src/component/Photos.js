import React from 'react';
import "./photos.scss";

const Photos = ({ list }) => {
    return (
        <div className='photos'>
            {list.map((item) => (

                <div key={item.id} className='photos-item'>
                    <img src={item.urls.small_s3} className="photos-item-image"></img>         
                </div>  
            ))
            }
        </div>
        
    );
};

export default Photos;