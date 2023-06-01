<template>
  <article class="max-w-sm rounded-md shadow hover:shadow-lg overflow-hidden mx-auto bg-bg text-black">
    <img
      :src="require(`@/assets/products/${product.id}/00.png`)"
      @error="$event.target.src='https://via.placeholder.com/300x300'"
      :alt="product.title" class="w-8/12 mx-auto" />
    <div class="font-bold line-clamp-1 text-xs sm:text-sm md:text-md lg:text-lg pt-4 capitalize">{{ product.title }}</div>
    <div class="px-6 h-16 center">
      <span class="text-xs sm:text-sm md:text-md lg:text-lg mx-1 line-clamp-2 text-align-bottom">{{ product.subtitle }}</span>
    </div>
    <div class="text-2xl font-semibold text-accent my-4 flex items-center justify-center">
      <span class="line-through font-normal text-sm text-primary">MRP&nbsp;{{ product.mrp }}</span>&nbsp;&#8377;{{ product.priceINR }}
    </div>
    <button @click="order" class="bg-accent hover:bg-cyan-400 w-full text-bg uppercase font-extrabold flex justify-center items-center py-4 space-x-2">
      <img src="@/assets/img/WhatsApp.svg" class="h-5">
      <span class="text-xs sm:text-sm md:text-md lg:text-lg">Order now</span>
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
