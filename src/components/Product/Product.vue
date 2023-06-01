<style>
/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 98; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.close {
  z-index: 99;
}
</style>

<template>
  <article class="max-w-sm rounded-md shadow hover:shadow-lg overflow-hidden mx-auto bg-bg text-black">
    <img
      :src="require(`@/assets/products/${product.id}/00.webp`)"
      @error="$event.target.src='https://via.placeholder.com/300x300'"
      @click="() => { showModal = true }"
      :alt="product.title" class="w-full h-fit cursor-pointer" />
    <div class="font-bold line-clamp-1 text-xs sm:text-sm md:text-md lg:text-lg pt-4 capitalize">{{ product.title }}</div>
    <div class="px-6 h-16 center">
      <span class="text-xs sm:text-sm md:text-md lg:text-lg mx-1 line-clamp-2 text-align-bottom">{{ product.subtitle }}</span>
    </div>
    <div class="text-2xl font-semibold text-accent my-4 flex items-center justify-center">
      <span class="line-through font-normal text-sm text-primary">MRP&nbsp;{{ product.mrp }}</span>&nbsp;&#8377;{{ product.priceINR }}
    </div>
    <button @click="order" class="bg-accent hover:bg-cyan-400 w-full text-bg uppercase font-extrabold flex justify-center items-center py-4 space-x-2">
      <img src="@/assets/img/WhatsApp.svg" alt="send whatsapp message" class="h-5">
      <span class="text-xs sm:text-sm md:text-md lg:text-lg">Order now</span>
    </button>
    <div v-if="showModal" class="modal">
      <span class="close float-right font-bold text-3xl p-4 text-primary hover:text-accent focus:text-accent" @click="() => { showModal = false }">&times;</span>
      <div :id="`modal-content-${product.id}`" class="modal-content rounded w-11/12 lg:w-2/3 mx-auto bg-bg shadow-lg">
        <div class="my-2 mx-auto text-accent font-bold">
          <h4>{{ product.title }}&nbsp;<span class="text-xs">({{ product.id }})</span></h4>
        </div>
        <div class="mx-4 mb-4">
          <img class="mx-auto" :src="require(`@/assets/products/${product.id}/creative1.webp`)" :alt="product.title + ' creative image'">
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ProductComponent',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showModal: ref(false)
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
