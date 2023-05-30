<template>
  <div class="container mx-auto bg-bg pt-6 pb-14 shadow-gray-400 min-h-screen relative">
    <div class="">
      <nav class="h-14 rounded text-right space-x-5 px-6 py-4 mb-4 bg-primary text-bg shadow-md">
        <router-link to="/" class="text-inherit">Home</router-link>
        <router-link to="/about" class="text-inherit">About</router-link>
      </nav>
      <div class="shadow-md">
        <router-view/>
      </div>
    </div>
    <div class="container absolute bottom-0 pt-4">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Footer from '@/components/Footer/Footer.vue'

export default defineComponent({
  name: 'AppView',
  components: {
    Footer
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
