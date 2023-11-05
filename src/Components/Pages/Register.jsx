
// import PropTypes from 'prop-types';
import {FcGoogle } from 'react-icons/fc';
import loginimg from '../../assets/christian-lambert-vmIWr0NnpCQ-unsplash (1).jpg'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex flex-row-reverse  justify-center w-full h-screen items-center font-Hind px-3">
            <div className=" max-w-4xl mx-auto rounded-2xl flex h-5/6" >
                {/* login form */}
                <div className="flex flex-col  py-1 px-8  border-l-4 border-[#3fb43b] h-full">
                    <h1 className=" text-3xl md:text-2xl lg:text-3xl font-bold mt-4 mb-2 text-[#3fb43b]">Register Now</h1>
                    <input className="py-2 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="email" name="email" id="" placeholder="email" />
                    <input className="py-2 px-3  my-2 border-2 border-[#3fb43b] rounded-lg" type="password" name="password" id="" placeholder="password" />
                    <input className="btn border-2 border-[#3fb43b] hover:bg-[#3fb43b] hover:text-white" type="submit" value="Register" />
                    <div className="text-center ">
                        <p className="text-[#3fb43b] pb-1">or login using google</p>
                        <button className="btn border-2 border-[#3fb43b] w-full hover:bg-[#3fb43b] hover:text-white"><FcGoogle></FcGoogle> Google</button>
                        <p className='pt-2 '>Already have a account? <Link to="/login"> <button className='text-[#3fb43b] underline'>Login Now</button></Link></p>

                    </div>
                </div>
                {/* wishes */}
                <div className=" bg-[#3fb43b] rounded-r-2xl hidden md:flex">
                    <img className='h-full w-full rounded-r-2xl' src={loginimg} alt="hotel img" />

                </div>
            </div>
        </div>
    );
};

Register.propTypes = {

};

export default Register;