<template>
  <div class="panel">
    <button
      @click.prevent="togglePanel" class="p-4 bg-accent text-white w-full border-b-2 rounded font-semibold flex flex-row items-center justify-between">
      {{ title }} >
      <span class="material-icons" v-if="showPanel">
        expand_more
      </span>
      <span class="material-icons" v-else>
        chevron_right
      </span>
    </button>
    <div class="b bg-bg" v-if="showPanel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AccordionPanel',
  props: {
    title: { type: String, required: true },
    ariaTitle: { type: String, required: true }
  },
  data () {
    return { showPanel: false }
  },
  methods: {
    togglePanel () {
      this.showPanel = !this.showPanel
    }
  }
})
</script>
