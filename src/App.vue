<template>
  <NavBar :class="{ 'shadow-xl': pos > 10 }"/>
  <div class="container mx-auto px-2 bg-bg min-h-screen">
    <router-view></router-view>
    <div class="mx-auto my-2">
      <Footer></Footer>
    </div>
  </div>
  <div @click="scrollToTop" v-if="pos > 500" class="sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition">
    <span class="material-icons bg-accent text-bg rounded-full p-2 z-50 cursor-pointer shadow-lg shadow-black">keyboard_arrow_up</span>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Footer from '@/components/Footer/Footer.vue'
import NavBar from '@/components/Header/NavBar.vue'

let scrollListener

export default defineComponent({
  name: 'AppView',
  components: {
    NavBar,
    Footer
  },
  setup () {
    const pos = ref(window.pageYOffset)

    return { pos }
  },
  mounted () {
    const self = this
    scrollListener = addEventListener('scroll', async function () {
      const pos = window.pageYOffset
      if (self.pos !== pos) {
        self.pos = pos
      }
    })
  },
  unmounted () {
    removeEventListener('scroll', scrollListener)
    scrollListener = null
  },
  methods: {
    scrollToTop: function () {
      window.scroll({ top: 0, behavior: 'smooth' })
    }
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
