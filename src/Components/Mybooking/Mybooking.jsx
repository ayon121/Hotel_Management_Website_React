
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Mybooking = ({ mybooking, handledelete }) => {
    const { _id, title, price, room_type, bed_img, bookdate } = mybooking

   


    return (
        <div className="card card-compact w-auto h-96 bg-base-100 shadow-xl">
            <figure><img src={bed_img} alt="cover image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{room_type}</p>
                <div>
                    <h1 className='text-lg font-bold'>Price: $ {price}</h1>
                    <h1 className='text-lg font-bold'>Booked On: {bookdate}</h1>

                </div>
                <div className="card-actions justify-end">
                    <Link to={`/givereviews/${_id}`}><button className="btn btn-outline btn-success">Give Review</button></Link>
                    <button onClick={() => handledelete(_id)} className="btn btn-outline btn-success">Cancel</button>
                </div>
            </div>
        </div>
    );
};

Mybooking.propTypes = {
    mybooking: PropTypes.object,
    handledelete: PropTypes.func
};

export default Mybooking;