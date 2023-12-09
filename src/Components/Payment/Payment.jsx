import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_key);
const Payment = () => {
    return (
        <div className="max-w-5xl px-3 mx-auto">
            <div className='flex justify-center mt-4 mb-4'>
                <h1 className='text-4xl md:text-5xl font-bold'>Payment</h1>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;