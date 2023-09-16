import { Link } from "react-router-dom";
import { useState } from "react";
import StripePaymentForm from './StripePaymentForm'
import {  Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Nlsv8LWijV0yeY4paZ3IObPp81VmpBoxZl0DbXfe7WFfJPVPdQ6jDie0ozimxykalyY4nWscmj33AqRRlQypNfX008QLOCMtn');
function CheckOut({totalPrice}) {

    const [isShowPaymentFormOpen, setIsShowShowPaymentFormOpen] = useState(false);
    const deliveryPrice=3.99
    const priceeithDelivery=totalPrice+deliveryPrice;
    const formattedTotalPrice = parseFloat(priceeithDelivery.toFixed(2));

    const handleCheckoutClick = () => {
        setIsShowShowPaymentFormOpen((isShowPaymentFormOpen)=>(!isShowPaymentFormOpen));
      };
    
  return (
    <div className='bg-white flex flex-col p-4  text-[12px] gap-2 '>
         {!isShowPaymentFormOpen? (
        <>
        <div className='flex flex-row justify-between w-full text-gray-700'>
            <p>Discount</p>
            <p className='underline'>Apply Discount</p>
        </div>
        <p>Log in to use your personal offers!</p>
        <Link to='/login'> <button className='text-sm w-full border-[1px] border-black py-2 font-bold'>Login</button></Link>
        <hr className='bg-gray-700 mt-4' />
        <div className='flex flex-row justify-between w-full text-gray-700'>
            <p>Order Value</p>
            <p>{totalPrice}</p>
        </div>
        <div className='flex flex-row justify-between w-full text-gray-700'>
            <p>Delivery Value</p>
            <p>{deliveryPrice}</p>
        </div>
        <hr className='bg-black mt-4' />
        <div className='flex flex-row justify-between w-full text-gray-700'>
            <p>Total</p>
            <p>{formattedTotalPrice}</p>
        </div>
         </>
        ) : (
        <Elements stripe={stripePromise}>
          <StripePaymentForm amount={formattedTotalPrice} />
        </Elements>
      )}

        <button 
         onClick={handleCheckoutClick}
        className='text-sm w-full border-[1px] text-white hover:text-black bg-black hover:bg-white hover:border-black py-2 font-bold'>
     {!isShowPaymentFormOpen? <p>Go to Checkout</p>:<p>Back</p>}</button>
        <p className='text-gray-700 text-[11px]'>Prices and shipping costs are confirmed at checkout.30 days on sight. Read more about Return and Refund.</p>
       
    </div>
  )
}

export default CheckOut