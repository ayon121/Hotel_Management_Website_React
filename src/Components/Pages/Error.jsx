import { Helmet } from "react-helmet";
import Navbanner from "../Navbar/Navbanner";
import Navbar from "../Navbar/Navbar";


const Error = () => {
    return (
        <div className=" h-screen">
            <Helmet>
            <title>RoomVue | Error</title>
        </Helmet>
            <Navbanner></Navbanner>
            <Navbar></Navbar>
            <div className='flex justify-center items-center  mt-24 text-center'>
                <div>
                    <h1 className="text-6xl font-mono font-bold text-red-600">404</h1>
                    <p className="font-bold">Page Not Found</p>
                </div>
            </div>
        </div>
    );
};

export default Error;