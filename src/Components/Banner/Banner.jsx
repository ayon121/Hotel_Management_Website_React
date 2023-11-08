
import { Link } from "react-router-dom";
import banner from "../../assets/banner.jpg"
const Banner = () => {
    return (
        <div>
            <div className="w-full h-screen"> 
                <img className="w-full h-5/6" src={banner} alt="" />
            </div>
            <div className="max-w-xl h-32 text-center mx-auto px-4 relative -top-32 ">
                <h1 className="font-Hind font-bold text-2xl mb-3 mt-3">Escape to Luxury and Comfort</h1>
                <Link to='/Rooms'><button className="font-Hind font-bold  btn text-white bg-[#3fb43b] hover:bg-white hover:text-black">Book Now</button></Link>
            </div>
        </div>
    );
};

export default Banner;