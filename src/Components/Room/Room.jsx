
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
    const { _id,title, price, room_type, available_rooms, bed_img } = room
    console.log(_id)
    return (
        <div className="card card-compact w-auto h-96 bg-base-100 shadow-xl">
            <figure><img src={bed_img} alt="cover image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{room_type}</p>
                <div>
                    <h1 className='text-lg font-bold'>Price: $ {price}</h1>
                    <h1 className='text-sm font-bold'>
                        {available_rooms > 0 ? `${available_rooms} Available Rooms` : 'Unavailable'}
                    </h1>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/roomdetails/${_id}`}><button className="btn btn-outline btn-success">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Room.propTypes = {
    room: PropTypes.object
};

export default Room;