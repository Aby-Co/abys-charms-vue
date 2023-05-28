<template>
  <article class="max-w-sm rounded shadow-lg overflow-hidden mx-auto">
    <img
      :src="require(`@/assets/products/${product.id}/main.png`)"
      @error="$event.target.src='https://via.placeholder.com/300x300'"
      :alt="product.title" class="w-full" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ product.title }}</div>
      <p class="text-gray-700 text-base">{{ product.subtitle }}</p>
    </div>
    <div class="px-6 pt-4 pb-2 gap-16">
      <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        <small class="font-light">INR</small>&nbsp;{{ product.priceINR }}
      </span>
      <span class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        <BuyButton :productId="product.productId"></BuyButton>
      </span>
    </div>
  </article>
</template>

<script>
import { defineComponent } from 'vue'
import BuyButton from '@/components/Buy/BuyButton.vue'

export default defineComponent({
  name: 'ProductComponent',
  components: {
    BuyButton
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    imageUrlAlt (event) {
      event.target.src = this.product.imageUrl
    }
  }
})
</script>
