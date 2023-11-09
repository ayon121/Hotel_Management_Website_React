
import { useEffect, useState } from 'react';
import Room from '../Room/Room';

import Navbanner from '../Navbar/Navbanner';
import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet';

const Rooms = ()=> {
    const [rooms , setRooms] = useState([])
    
    useEffect( () => {
        fetch('http://localhost:5000/rooms')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])

    
    return (
        <div className='font-Hind'>
            <Helmet>
            <title>RoomVue | Rooms</title>
        </Helmet>
            <Navbanner></Navbanner>
            <Navbar></Navbar>
            <div className='flex justify-center mt-6 mb-5'>
                <h1 className='font-bold text-4xl md:text-5xl'>Our Rooms</h1>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-3 px-4 mb-7 gap-4 items-center'>
                {
                    rooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

Rooms.propTypes = {
    
};

export default Rooms;