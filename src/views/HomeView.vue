<template>
  <Welcome></Welcome>
  <div class="container mx-auto">
    <!-- <h1 class="text-3xl font-sans font-bold text-gray-900">Aby's Charms</h1> -->
    <p class="text-xl text-gray-600">
      We sell a variety of earrings, including golden jhumkas, golden earrings, and oxidised jhumkas.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div class="card">
        <img src="https://via.placeholder.com/300x300" alt="Golden Jhumka">
        <h2 class="text-xl font-sans font-bold text-gray-900">Golden Jhumka</h2>
        <p class="text-base text-gray-600">
          A classic piece that never goes out of style.
        </p>
        <button class="btn btn-primary">Buy Now</button>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/300x300" alt="Golden Earrings">
        <h2 class="text-xl font-sans font-bold text-gray-900">Golden Earrings</h2>
        <p class="text-base text-gray-600">
          A delicate pair of earrings that will add a touch of glamour to any outfit.
        </p>
        <button class="btn btn-primary">Buy Now</button>
      </div>
      <div class="card">
        <img src="https://via.placeholder.com/300x300" alt="Oxidised Jhumka">
        <h2 class="text-xl font-sans font-bold text-gray-900">Oxidised Jhumka</h2>
        <p class="text-base text-gray-600">
          A unique and stylish pair of earrings that will make a statement.
        </p>
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome/WelcomeComponent.vue'

// @ is an alias to /src
export default {

  name: 'HomeView',
  components: {
    Welcome
  }
}
</script>
