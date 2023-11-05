import { Link } from "react-router-dom";


const Navbanner = () => {
    return (
        <div className=" bg-yellow-400 w-full py-3 font-Hind">
            <div className="max-w-6xl mx-auto flex justify-between">
                {/* Phone */}
                <div>
                    <h1 className="font-semibold">Phone : +0983520483</h1>
                </div>
                {/* email */}
                <div>
                    <h1 className="font-semibold">Email : Roomvue@gmail.com </h1>
                </div>
                {/* Social Links */}
                <div className="flex justify-between gap-3 underline">
                    <Link><h1 className="font-semibold">Facebook</h1></Link>
                    <Link><h1 className="font-semibold">LinkedIn</h1></Link>
                    <Link><h1 className="font-semibold">Youtube</h1></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbanner;