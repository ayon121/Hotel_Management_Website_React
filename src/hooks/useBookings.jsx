
import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/Authproviders';

const useBookings = () => {
    //tan stack
    const axiosSecure = useAxiosSecure()
    const { user} = useContext(AuthContext)
    const {refetch , data: bookings = [] } = useQuery({
        queryKey: [ 'bookings' , user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/mybookings/${user.email}`)
            return res.data
        }
    })

    return [bookings , refetch]
};

export default useBookings;