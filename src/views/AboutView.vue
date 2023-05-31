<template>
  <div id="about-view" class="bg-bg flex flex-col space-y-1 px-6 pb-10 mb-10 text-xs sm:text-sm md:text-md lg:text-lg">
    <AboutUs id="about" />
    <!-- <hr class="pt-4 mx-4 border-t-2 border-primary"> -->
    <AccordionPanel @click.prevent="selected('#privacy')" id="privacy" title="Privacy Policy">
      <PrivacyPolicy />
    </AccordionPanel>
    <AccordionPanel @click.prevent="selected('#return')" id="return" title="Return & Refund Policy">
      <ReturnPolicy />
    </AccordionPanel>
    <AccordionPanel @click.prevent="selected('#cancellation')" id="cancellation" title="Cancellation Policy">
      <CancellationPolicy/>
    </AccordionPanel>
    <AccordionPanel @click.prevent="selected('#data')" id="data" title="Data Storage and Usage">
      <DataStoragePolicy/>
    </AccordionPanel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AccordionPanel from '@/components/AccordionPanel.vue'
import PrivacyPolicy from '@/components/About/PrivacyPolicy.vue'
import ReturnPolicy from '@/components/About/ReturnPolicy.vue'
import CancellationPolicy from '@/components/About/CancellationPolicy.vue'
import DataStoragePolicy from '@/components/About/DataStoragePolicy.vue'
import AboutUs from '@/components/About/AboutUs.vue'

export default defineComponent({
  name: 'AboutView',
  components: {
    AccordionPanel,
    AboutUs,
    PrivacyPolicy,
    ReturnPolicy,
    DataStoragePolicy,
    CancellationPolicy
  },
  methods: {
    selected: function (hash) {
      return this.$router.replace({ hash })
    }
  }
})
</script>
