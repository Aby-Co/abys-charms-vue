<template>
  <div class="bg-bg flex flex-col space-y-1 p-6">
    <AboutUs />
    <hr class="pt-4 mx-4 border-t-2 border-primary">
    <AccordionPanel aria-title="privacy-policy" title="Privacy Policy">
      <PrivacyPolicy />
    </AccordionPanel>
    <AccordionPanel aria-title="return-policy" title="Return Policy">
      <ReturnPolicy />
    </AccordionPanel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AccordionPanel from '@/components/AccordionPanel.vue'
import PrivacyPolicy from '@/components/About/PrivacyPolicy.vue'
import ReturnPolicy from '@/components/About/ReturnPolicy.vue'
import AboutUs from '@/components/About/AboutUs.vue'

export default defineComponent({
  name: 'AboutView',
  components: {
    AccordionPanel,
    AboutUs,
    PrivacyPolicy,
    ReturnPolicy
  }
})
</script>
