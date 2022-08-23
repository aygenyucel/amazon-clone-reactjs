const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51LZADdIArmeFo5oFUNkoVFdR69AnGy8mPQlHrKSicExjnYjvz2x5IIsb8EB8PyQwvCUSoBZvv6Ruj8wC6OH5KMB6008vsY9Wi6')

// API

// *App config
const app = express();

// *Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// *API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved! for this amount: ', total);
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: 'usd',
    });

    // OK - created:
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// *Listen command
exports.api = functions.https.onRequest(app);

// exp endpoint: (http://localhost:5001/clone-52997/us-central1/api)