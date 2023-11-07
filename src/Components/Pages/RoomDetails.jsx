import { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'
import Navbanner from '../Navbar/Navbanner';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../../Providers/Authproviders';
import { ToastContainer } from 'react-toastify';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RoomDetails = () => {
    const { id } = useParams()
    const {user} = useContext(AuthContext)
    const [currentroom, setRooms] = useState([])
    
   



    useEffect(() => {
        fetch(`http://localhost:5000/rooms/${id}`)
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [id])

    const { room_type, price, offers, bed_img, bath_img, available_rooms, available_date, room_size } = currentroom
    const useremail = user?.email
    const Mybookings = {...currentroom, useremail}    

    const addtoMybookings = (bookings) => {
        fetch('http://localhost:5000/mybookings', 
           {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(bookings)
           } 
        )
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast("Product Added Successfully")
            
            }
        })
    }

   
    return (
        <div>
            <Navbanner></Navbanner>
            <Navbar></Navbar>
            <div className='max-w-6xl px-3 mx-auto mt-5 font-Hind'>
                <div className='flex justify-center mt-4 mb-4'>
                    <h1 className='text-4xl md:text-5xl font-bold'>Room Details</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-5/6 mb-3'>
                    <div>
                        <img className='rounded-2xl h-96 w-full' src={bed_img} alt="bed" />
                    </div>
                    <div>
                        <img className='rounded-2xl  h-96 w-full' src={bath_img} alt="bath" />
                    </div>
                </div>
                <div>
                    <div className='flex  justify-center mt-4 mb-4'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Room Type : {room_type}</h1>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between mb-4'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'><span className='text-[#3fb43b]'>Price :</span>  $ {price} </h1><span className='text-[#3fb43b]'>per night</span>
                        </div>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'><span className='text-[#3fb43b]'>Room Size :</span> {room_size}</h1>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between mb-4'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'><span className='text-[#3fb43b]'>Available Rooom :</span> {available_rooms}</h1>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'><span className='text-[#3fb43b]'>Available Date : </span>{available_date}</h1>
                    </div>
                    <div>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'><span className='text-[#3fb43b]'>Offers :</span> {offers?.join(',')}</h1>
                      
                    </div>
                    <div className='flex justify-center mt-4 mb-4'>
                        <button onClick={() => addtoMybookings(Mybookings)} className='btn btn-outline btn-success'>Book Now</button>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

RoomDetails.propTypes = {

};

export default RoomDetails;