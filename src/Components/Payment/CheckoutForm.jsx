import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useBookings from "../../Hooks/useBookings";
import { AuthContext } from "../../Providers/Authproviders";



const CheckoutForm = () => {
    const { user} = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const [error , setError] = useState('')
    const [ clientSecret , setclientSecret] = useState('')
    const  axiosSecure = useAxiosSecure()
    const [boookings] = useBookings()
    const totalprice = boookings.reduce( (total , item) => total + item.price , 0)

    console.log(totalprice);
    console.log(clientSecret);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent' , {price : totalprice})
        .then(res => {
            console.log(res.data);
            setclientSecret(res.data.clientSecret)
        })
    } , [axiosSecure , totalprice])


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();


        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }

        const {error , paymentMethod } = await stripe.createPaymentMethod({
            type : 'card' ,
            card 
        })

        if(error){
            console.log('payment error' , error)
            setError(error.message)
        }
        else {
            console.log('payment method' , paymentMethod);
            setError('')
        }

        //confirm payment
        const {paymentIntent , error: confirmerror } = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card ,
                billing_details : {
                    email : user?.email  || 'anonymous',
                    name : user?.displayName || 'anonymous'

                }
            }
        })
        if(confirmerror){
            console.log('confirm error');
        }
        else{
            console.log('paymentIntent' , paymentIntent);
        }


    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary btn-sm py-2"  type="submit" disabled={!stripe  || !clientSecret}>
                Pay
            </button>
            <p className="text-2xl text-center text-red-600 font-Hind">{error}</p>
        </form>
    );
};

export default CheckoutForm;