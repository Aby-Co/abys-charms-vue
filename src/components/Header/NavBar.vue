<style>
nav .exact-active {
  color: theme('colors.primary');
}
</style>

<template>
  <nav class="h-14 rounded mb-4 text-black font-extrabold mx-8">
    <img class="h-full p-2 align-middle float-left" src="@/assets/logo.svg" alt="logo" />
    <div class="links text-right space-x-5 px-6 py-4">
      <router-link to="/" class="text-inherit">Home</router-link>
      <router-link to="/about" class="text-inherit">About</router-link>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar'
})
</script>
