
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
const OnPageReview = ({ post }) => {

    const {name , sms, ratings} = post
    return (
        <div className="card w-auto border-4 border-[#3fb43b] bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{sms}</p>
                 <p className='flex items-center '> 
                    <span>Ratings :  {ratings}</span>
                 <span className='text-yellow-500'><AiFillStar></AiFillStar></span>
                 </p>
            </div>
        </div>
    );
};

OnPageReview.propTypes = {
    post: PropTypes.object
};

export default OnPageReview;