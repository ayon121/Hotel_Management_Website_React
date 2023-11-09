

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Mybooking from '../Mybooking/Mybooking';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

const Mybookings = () => {
    const { id } = useParams()
    const [ mybookings, setMybookings] = useState([])
    const url = `http://localhost:5000/mybookings/${id}`
   



    useEffect(() => {
        
        axios.get( url ,  {withCredentials : true})
        .then(res => {
            setMybookings(res.data)
        })

        // fetch(`http://localhost:5000/mybookings/${id}`)
        //     .then(res => res.json())
        //     .then(data => setMybookings(data))
    }, [url])

    const handledelete = _id => {
        console.log('delete' , _id);
        fetch(`http://localhost:5000/mybookings/${ _id}` , {
            method: 'DELETE'

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted ')
                // const remaining = mybookings.filter(book => book._id !== _id)
                // setMybookings(remaining)
            }
        } )
    }
    return (
       <div >
        <Navbar></Navbar>
         <div className='max-w-6xl px-3 mx-auto mt-5 font-Hind'>
            <Helmet>
            <title>RoomVue | Mybookings</title>
        </Helmet>
            <div className='flex justify-center mt-4 mb-4'>
                <h1 className='text-4xl md:text-5xl font-bold'>My Bookings</h1>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-3 px-4 mb-7 gap-4 items-center'>
                {
                    mybookings?.map(mybooking => <Mybooking key={mybooking._id} mybooking={mybooking} handledelete={handledelete}></Mybooking>)
                }

            </div>
            
        </div>
       </div>
    );
};

Mybookings.propTypes = {
    
};

export default Mybookings;