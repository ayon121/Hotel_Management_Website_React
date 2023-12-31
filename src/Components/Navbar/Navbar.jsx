
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FaHotel } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authproviders';
import useBookings from '../../Hooks/useBookings';
const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const useremail = user?.email
    const handlelogOut = () => {
        logout()
            .then()
            .catch()
    }
    
    const [bookings] = useBookings()
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Rooms">Rooms</NavLink></li>
       {
         user && <li><NavLink to={`/mybookings/${useremail}`}>Bookings ({bookings.length})</NavLink></li>
       }
        
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>

    </>

    return (
        <div className="navbar max-w-7xl mx-auto font-Hind px-1 md:px-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                {/* logo */}
                <div className="font-Hind font-bold ">
                    <h1 className=" flex items-center gap-1">
                        <span className='text-xl md:text-3xl lg:text-4xl'>Room</span>
                        <span className='text-lg  md:text-2xl lg:text-3xl text-[#3fb43b]'><FaHotel></FaHotel></span>
                        <span className="text-sm md:text-lg lg:text-xl">Vue</span>
                    </h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 font-bold">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handlelogOut} className="btn bg-[#403F3F] text-white hover:text-black">Logout</button>
                        :
                        <Link to="/login">
                            <button className="btn btn-outline btn-success">Login</button>
                        </Link>
                }

        
            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;