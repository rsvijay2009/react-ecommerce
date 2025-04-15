import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const StripeCheckoutForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    // Create PaymentIntent on the backend
    const response = await fetch('http://localhost:3000/api/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: totalAmount, currency: 'usd' }), // Amount in paise for INR
    });
    console.log(response)
    const { clientSecret } = await response.json();

    // Confirm the payment on the frontend
    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Customer Name', // Replace with actual customer data
        },
      },
    });

    if (error) {
      console.error('Payment failed:', error.message);
    } else if (paymentIntent) {
      console.log('Payment successful:', paymentIntent);
      alert('Payment successful!');
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default StripeCheckoutForm;
