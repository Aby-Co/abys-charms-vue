/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
// const { initializeApp } = require("firebase-admin");

// initializeApp();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const Razorpay = require('razorpay');

exports.orderCreate = onRequest({ region: 'asia-south1', maxInstances: 10 }, async (request, response) => {
  const amount = request.body.amount;
  const currency = request.body.currency;
  const method = request.method;

  if (method !== 'POST') {
    return response.status(404).end();
  }

  if (!amount || !currency) {
    return response.status(400).send({ error: true, message: 'Input is missing' });
  }

  // Test id
  const instance = new Razorpay({
    key_id: 'rzp_test_4yoApRIfF9nSCZ',
    key_secret: '1yJ3CPq3UwTtLa22MJVVYHxo',
  });

  const res = await instance.orders.create({ amount, currency })
  logger.info(res);
  logger.info('Order created', res);

  return response.send({ res })
})
