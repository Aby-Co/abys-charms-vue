<template>
  <article class="max-w-sm rounded-md shadow hover:shadow-lg overflow-hidden mx-auto bg-bg text-black">
    <img
      :src="require(`@/assets/products/${product.id}/main.png`)"
      @error="$event.target.src='https://via.placeholder.com/300x300'"
      :alt="product.title" class="w-full" />
    <div class="font-bold line-clamp-1 sm:text-sm md:text-md lg:text-xl pt-4 uppercase">{{ product.title }}</div>
    <div class="px-6 pb-4 h-10 center">
      <span class="text-sm mx-1 line-clamp-2 text-align-bottom">{{ product.subtitle }}</span>
    </div>
    <div class="text-2xl font-semibold text-yellow-500 my-2">
      &#8377;{{ product.priceINR }}
    </div>
    <button @click="order" class="bg-accent hover:bg-cyan-400 w-full text-bg uppercase font-extrabold flex justify-center py-4 space-x-2">
      <img src="@/assets/img/WhatsApp.svg" class="h-6 w-6">
      <span>Order now</span>
    </button>
  </article>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductComponent',
  components: {
    // BuyButton
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    order () {
      const url = new URL('https://wa.me')
      url.pathname = '918446600164'
      url.searchParams.set('text', `Hi, I would like to order earrings with SKU id: ${this.product.id}`)
      window.open(url, '_blank', 'noreferrer')
    }
  }
})
</script>
