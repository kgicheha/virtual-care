require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.static('src'));
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const item = new Map([
  [1, {priceInCents: 5000, name: 'Appointment'}]
])

app.listen(4001)

app.post('http://localhost:3001/create-checkout-session', (req, res) => {
  res.json({url: 'Hi'})
})


// const YOUR_DOMAIN = 'http://localhost:3000/';

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: '5000',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}?success=true`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

// app.listen(4242, () => console.log('Running on port 4242'));