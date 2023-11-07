
import PropTypes from 'prop-types';

const Room = ({ room }) => {
    const { title, price, room_type, available_rooms, bed_img } = room
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
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

Room.propTypes = {
    room: PropTypes.object
};

export default Room;