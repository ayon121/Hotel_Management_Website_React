import Navbar from "../Navbar/Navbar";
import loginimg from '../../assets/login.jpg'
// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";

const Review = () => {
    const {id} = useParams()
    console.log(id);
    const handleReview = e => {
        e.preventDefault()
        
        const form = e.target
        const name = form.name.value;
        const sms = form.message.value;
        const ratings = form.number.value;
        const review = { name, sms  , id  , ratings}

        fetch('http://localhost:5000/reviews',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast("Review added Successfully")

                }
            })

    }
    return (
        <div>
        <Navbar></Navbar>
        <div className="flex  justify-center w-full h-screen items-center font-Hind px-3">
            <div className=" max-w-4xl mx-auto rounded-2xl flex h-96 py-8 px-3 mt-11" >
                {/* login form */}
                <div className="flex flex-row gap-4  py-1 px-8  border-l-4 border-[#3fb43b] h-full">
                    <form className='flex flex-col' onSubmit={handleReview}>
                        <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold mt-4 mb-2 text-[#3fb43b]">Give Review </h1>
                        <input className="py-1 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="name" name="name" placeholder="name" />
                        <input className="py-1 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="text" name="number" placeholder="give 1 to 5 review" />
                        <input className="py-3 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="text" name="message" placeholder="message" />
                        <input className="btn border-2 border-[#3fb43b] hover:bg-[#3fb43b] hover:text-white" type="submit" value="Give Review" />

                    </form>
                {/* wishes */}
                    <div className=" bg-[#3fb43b] rounded-r-2xl hidden md:flex">
                        <img className='h-full w-full rounded-r-2xl' src={loginimg} alt="hotel img" />
                    </div>
            </div>
            <ToastContainer />
        </div>
        </div>
        </div>
    );
};

export default Review;