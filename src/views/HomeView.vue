<template>
  <Welcome></Welcome>
  <div class="container mx-auto">
    <ProductList :products="products" />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome/WelcomeComponent.vue'
import ProductList from '@/components/Product/ProductList.vue'
import { collection, getDocs } from 'firebase/firestore'

import db from '@/firebase/init.js'

// @ is an alias to /src
export default ({
  name: 'HomeView',
  data: function () {
    return {
      products: []
    }
  },
  async created () {
    this.products = await this.getProducts()
  },
  components: {
    Welcome,
    ProductList
  },
  methods: {
    async getProducts () {
      const productRef = collection(db, 'products')

      const products = (await getDocs(productRef))
        .docs.map(docSnap => ({
          productId: docSnap.id,
          ...docSnap.data()
        }))

      return products
    },
    async verifySignature (response) {
      // const res = await this.axios.post(`/api/verifyPayment`, response)

      alert('payment received:\n' + JSON.stringify(response))
    }
  }
})
</script>
