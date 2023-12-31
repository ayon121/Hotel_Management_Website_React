

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Mybooking from '../Mybooking/Mybooking';
import { Helmet } from 'react-helmet';

import Navbar from '../Navbar/Navbar';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';



const Mybookings = () => {
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()

    
    const [mybookings, setMybookings] = useState([])
    // const url = ` https://cors-anywhere.herokuapp.com/http://localhost:5000/mybookings/${id}` console.log('vjnnbbj[bnbnbbnbnbjnbjbn');

     
    useEffect(() => {
        // axios.get(url)
        //     .then(res => {
        //         setMybookings(res.data)
        //     })
        // axiosSecure.get(`/mybookings/${id}`)
        // .then(res => {
        //     setMybookings(res.data)
        // })
        
        fetch(`http://localhost:5000/mybookings/${id}`)
            .then(res => res.json())
            .then(data => setMybookings(data))
    }, [id])

    const handledelete = _id => {
        console.log('delete', _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

            }
        });
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
                <div>
                <Link to={`/payment`}><button className="btn btn-outline btn-success">Pay Now</button></Link>
                </div>

            </div>
        </div>
    );
};

Mybookings.propTypes = {

};

export default Mybookings;