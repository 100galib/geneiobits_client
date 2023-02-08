import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleFlat from './SingleFlat';

const Home = () => {
    const [allData, setAlldata] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get('http://localhost:5000/property');
                const allRepo = response.data;
                setAlldata(allRepo);
            } catch (error) {
                console.error(error)
            }
        };
        getData();
    }, [])

    return (
        <div>
            {
                allData.map(singleData => <SingleFlat key={singleData._id} singleData={singleData}></SingleFlat>)
            }
        </div>
    );
};

export default Home;