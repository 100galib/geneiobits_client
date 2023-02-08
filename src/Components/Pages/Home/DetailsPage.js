import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const allData = useLoaderData();
    console.log(allData)
    const {image, location, price, type, _id, description} = allData[0];
    return (
            <div className="card mx-auto card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default DetailsPage;