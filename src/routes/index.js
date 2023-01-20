import express from 'express';
import Stripe from 'stripe';

const indexRouter = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

indexRouter.post('/create-customer', async (req, res) => {
  const email = req.query.email;
  
  if(!email) {
    return res.sendStatus(400).json({ message: 'email address missing!' });
  }
  try {
    const customer = await stripe.customers.create({
        email: email
    })
    if (customer) {
        // save the customer.id as stripeCustomerId
        // in your database.
        return res.json({ customer: customer.id });
      }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
});

indexRouter.get('/', (req, res) =>
    res.status(200).json({ message: 'Hikari API Running!' })
);

export default indexRouter;
