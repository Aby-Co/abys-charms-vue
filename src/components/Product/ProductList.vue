<template>
  <p class="text-2xl text-gray-600 my-10">
    We sell a variety of earrings, including <strong>Golden Jhumkas</strong>, Golden Earrings, and Oxidised Jhumkas.
  </p>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
    <Product v-for="product in products" :key="product.productId" :product="product"></Product>
  </section>
  <button @click="more" >More</button>
</template>

<script>
import { defineComponent } from 'vue'
import Product from './Product.vue'
import { collection, getDocs, query } from 'firebase/firestore'
import db from '@/firebase/init'

/* @type {require('firebase/firestore')} */
let productsSnap

export default defineComponent({
  name: 'ProductList',
  components: { Product },
  data () {
    return {
      products: []
    }
  },
  async created () {
    productsSnap = await getDocs(query(collection(db, 'products')))
    productsSnap.forEach((snap) => {
      this.products.push({ ...snap.data(), id: snap.id })
    })
  },
  unmounted () {
    productsSnap = null
  }
})
</script>
