import { loadStripe as loadStripeFromStripeJS } from "@stripe/stripe-js";

const stripePromise = loadStripeFromStripeJS(
  `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
);

export default stripePromise;
