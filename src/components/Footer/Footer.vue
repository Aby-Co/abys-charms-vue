<template>
  <div class="container mx-auto my-4 rounded text-bg font-bold text-center bg-primary shadow-md p-4">Copyright © {{ year }} ABY & CO.</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
  data () {
    const now = new Date()
    return {
      year: now.getFullYear()
    }
  }
})
</script>
