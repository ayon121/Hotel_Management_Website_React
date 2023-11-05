import { Link } from "react-router-dom";
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Navbanner = () => {
    return (
        <div className=" bg-yellow-400 w-full py-3 font-Hind">
            <div className="max-w-6xl mx-auto flex justify-between">
                {/* Phone */}
                <div className="flex items-center gap-2">
                    <p className="text-[#3fb43b] text-2xl border-2 border-black rounded"><FaPhoneSquareAlt></FaPhoneSquareAlt></p>
                    <h1 className="font-semibold">Phone : +0983520483</h1>
                </div>
                {/* email */}
                <div className="flex items-center gap-2">
                    <p className="text-[#3fb43b] text-2xl border-2 border-black rounded"><MdEmail></MdEmail></p>
                    <h1 className="font-semibold">Email : roomvueinfo@gmail.com </h1>
                </div>
                {/* Social Links */}
                <div className="flex justify-between gap-3 ">
                    <Link><h1 className="font-semibold hover:text-[#317530] underline">Facebook</h1></Link>
                    <Link><h1 className="font-semibold hover:text-[#317530] underline">LinkedIn</h1></Link>
                    <Link><h1 className="font-semibold hover:text-[#317530] underline">Youtube</h1></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbanner;