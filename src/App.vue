<template>
  <div class="container mx-auto bg-bg pt-6 shadow-gray-400 min-h-screen">
    <NavBar />
    <div class="shadow-md">
      <router-view/>
      </div>
    <div class="container pt-4">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Footer from '@/components/Footer/Footer.vue'
import NavBar from './components/Header/NavBar.vue'

export default defineComponent({
  name: 'AppView',
  components: {
    NavBar,
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
</style>
