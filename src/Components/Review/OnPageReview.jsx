
import PropTypes from 'prop-types';

const OnPageReview = ({ post }) => {

    const {name , sms} = post
    return (
        <div className="card w-auto border-4 border-[#3fb43b] bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{sms}</p>
            </div>
        </div>
    );
};

OnPageReview.propTypes = {
    post: PropTypes.object
};

export default OnPageReview;