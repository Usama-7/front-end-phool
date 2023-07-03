import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const CheckoutForm = () => {
  const handleToken = async(token) => {
    // Send the token to your server for processing
    try {

        const responce = await  axios({
            url: "https://newphoolbackend-e5f66bec9c2c.herokuapp.com/api/v1/client/charge", 
            method: 'post',
            data :{
                    amount: '2000',
                    token
            }
        })
        
    } catch (error) {
        
    }
  };

  return (
    <StripeCheckout
      stripeKey="pk_test_51NI78tApKD4haOvDF4VAnQJbX8qHKRwvwZD4fpRAPdLqtMmtkDz9uzwFKTSEXKtvNgqYnYlIWIci4QZV5ue3MnvT003gv1m5st"
      token={handleToken}
      amount={1000} // Amount in cents
      name="My Online Store"
      description="Purchase Description"
      currency="USD"
    />
  );
};

export default CheckoutForm;
