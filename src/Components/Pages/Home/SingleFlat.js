import React from 'react';
import { Link } from 'react-router-dom';

const SingleFlat = ({singleData}) => {
    const {image, location, price, type, _id} = singleData;
    return (
        <div className="card lg:w-4/5 card-side bg-base-100 shadow-xl lg:mx-auto my-6">
            <figure><img className='lg:h-52' src={image} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">Type: {type}</h2>
                <p>Location: {location}</p>
                <p>Price :{price}</p>
                <div className="card-actions justify-end">
                <Link to={`/details/${_id}`}><button className="btn btn-primary btn-sm">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFlat;