const { onRequest } = require('firebase-functions/v2/https')
const { initializeApp } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const Logger = require('firebase-functions/logger')
const Razorpay = require('razorpay')

initializeApp()

exports.orderCreate = onRequest({
  region: 'asia-south1',
  cors: [/^abys-charms.web.app$/, /^\w+-aby-charms.web.app$/, /^localhost:\d{4,5}$/]
}, async (request, response) => {
  try {
    const { productId } = request.body
    const method = request.method

    if (method !== 'POST') {
      return response.status(404).end()
    }

    if (!productId) {
      return response.status(400).send({ error: true, message: 'Input is missing' })
    }

    const db = getFirestore()

    const productSnap = await db.collection('products').doc(productId).get()

    if (!productSnap.exists) {
      return response.status(404).send({ error: true, message: 'No such product found' })
    }

    const product = productSnap.data()

    Logger.info(product)

    const options = {
      amount: product.priceINR,
      currency: 'INR'
    }

    // Test id
    const instance = new Razorpay({
      key_id: 'rzp_test_4yoApRIfF9nSCZ',
      key_secret: '1yJ3CPq3UwTtLa22MJVVYHxo'
    })

    const res = await instance.orders.create(options)
    Logger.info('Order created', res)

    return response.send(request.body)
  } catch (ex) {
    Logger.error(ex)
    return response.status(500).send(ex.message || ex)
  }
})
