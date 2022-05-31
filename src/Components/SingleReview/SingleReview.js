import React from 'react';
import './SingleReview.css'
const SingleReview = ({ review }) => {
    const { name, image, rating, comment } = review
    return (
        <div className='main mx-auto mt-4 '>
            <div className='outer'>
                <img src={image} alt="" />

                <h5>{name} <br /> Ratings: {rating}</h5>

            </div>

            <p className='my-4' >{comment}</p>

        </div>
    );
};

export default SingleReview;