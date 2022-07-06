import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LA8D8ADqdpBkuR8VUxdqWPIoHUPsH3SygC1Vq6AVp4ScFyxHCbzctw23ZHWHEJTZW0au3oBY2DyypH8vqKJgm6j00xOEoA0RJ');

function Stripe() {
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: `price_1LA8KyADqdpBkuR80xQEeSQY`, // Replace with the ID of your price
        quantity: 1,
      }],
      mode: 'payment',
      successUrl: 'https://example.com/success',
      cancelUrl: 'https://example.com/cancel',
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
}

export default Stripe;