<template>
  <Welcome />
  <p class="shadow rounded text-xs sm:text-sm md:text-md lg:text-lg text-black font-semibold mt-4 mx-4 p-6 bg-bg">
    We sell a variety of earrings, including Golden Jhumkas, Golden Earrings, and Oxidised Jhumkas.
  </p>
  <div class="p-4">
    <ProductList />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome/Welcome.vue'
import ProductList from '@/components/Product/ProductList.vue'
import { defineComponent } from 'vue'

// @ is an alias to /src
export default defineComponent({
  name: 'HomeView',
  components: {
    Welcome,
    ProductList
  },
  methods: {
    async verifySignature (response) {
      // const res = await this.axios.post(`/api/verifyPayment`, response)

      alert('payment received:\n' + JSON.stringify(response))
    }
  }
})
</script>
