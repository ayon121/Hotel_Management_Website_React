// import axios from "axios";
// import { useContext, useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Providers/Authproviders";


// const axiosSecure = axios.create({
//     baseURL : `http://localhost:5000`,
//     withCredentials : true,
//     samesite : "none",
// })
// const useAxiossecure = () => {

//     const navigate = useNavigate()
//     const {logout} = useContext(AuthContext)
//     useEffect( () => {
//     axiosSecure.interceptors.response.use(res => {
//         return res
//     } , error => {
//         console.log('error tracked' , error.response);
//         if(error.response.status === 401 || error.response.status === 403){
//             console.log('logout the user');
//             logout()
//             .then(() => {
//                 navigate('/login')
//             })
//             .catch(error => console.log(error))

//         }
//     })
//     }, [])
//     return axiosSecure
// };


// export default useAxiossecure;