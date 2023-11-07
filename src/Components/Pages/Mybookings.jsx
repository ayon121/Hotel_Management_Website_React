

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Mybooking from '../Mybooking/Mybooking';

const Mybookings = () => {
    const { id } = useParams()
    const [ mybookings, setMybookings] = useState([])
    
   



    useEffect(() => {
        fetch(`http://localhost:5000/mybookings/${id}`)
            .then(res => res.json())
            .then(data => setMybookings(data))
    }, [id])

    console.log(mybookings);
    return (
        <div className='max-w-6xl px-3 mx-auto mt-5 font-Hind'>
            <div className='flex justify-center mt-4 mb-4'>
                <h1 className='text-4xl md:text-5xl font-bold'>Room Details</h1>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-3 px-4 mb-7 gap-4 items-center'>
                {
                    mybookings.map(mybooking => <Mybooking key={mybooking._id} mybooking={mybooking}></Mybooking>)
                }

            </div>
            
        </div>
    );
};

Mybookings.propTypes = {
    
};

export default Mybookings;