
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Mybooking = ({ mybooking, handledelete }) => {
    const { _id, title, price, room_type, bed_img, bookdate } = mybooking
    const [ cancel , Setcancel ] = useState(false)
    useEffect(() => {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        // Parse the formattedDate back into a JavaScript Date object
        const parsedDate = new Date(`${year}-${month}-${day}`);

        // Add 1 day to the parsedDate
        parsedDate.setDate(parsedDate.getDate() + 1);

        // Format the new date as per your desired format
        const newYear = parsedDate.getFullYear();
        const newMonth = String(parsedDate.getMonth() + 1).padStart(2, '0');
        const newDay = String(parsedDate.getDate()).padStart(2, '0');

        const newFormattedDate = `${newYear}-${newDay}-${newMonth}`;

        if (newFormattedDate === bookdate) {
            Setcancel(false)
        }
        else{
            Setcancel(true)
        }

    }, [])








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
                    {/* <button onClick={() => handledelete(_id)} className="btn btn-outline btn-success">Cancel</button>
                     */}
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-outline btn-success" onClick={() => document.getElementById('my_modal_3').showModal()}>Cancel</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div>
                                <h3 className="font-bold text-lg text-red-600 mb-2">(Remember)You Can not Cancel Before One Day</h3>
                                {

                                   cancel && <button onClick={() => handledelete(_id)} className="btn btn-outline btn-success">Cancel</button>
                                }

                            </div>

                        </div>
                    </dialog>
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