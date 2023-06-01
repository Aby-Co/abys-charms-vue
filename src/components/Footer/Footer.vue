<style>
ul>li {
  margin: 0 auto;
}
article {
  margin-bottom: 14px;
}
article>h4 {
  font-weight: bolder;
}
</style>

<template>
  <section class="container mx-auto p-12 text-accent grid grid-cols-1 md:grid-cols-3 text-left">
    <article>
      <h4 class="uppercase">Who we are</h4>
      <ul class="list-none p-0">
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/about#privacy">Privacy Policy</router-link>
        </li>
        <li>
          <router-link to="/about#return">Return & Refund Policy</router-link>
        </li>
        <li>
          <router-link to="/about#cancellation">Cancellation Policy</router-link>
        </li>
        <li>
          <router-link to="/about#data">Data Storage and Usage</router-link>
        </li>
      </ul>
    </article>
    <article>
      <h4 class="uppercase">Other marketplaces</h4>
      <ul class="list-none p-0">
        <li>
          <a class="flex items-center" href="https://www.meesho.com/mjzgn" target="_blank">
            Meesho&nbsp;
            <span class="material-icons text-sm">open_in_new</span>
          </a>
        </li>
      </ul>
    </article>
    <article>
      <h4 class="uppercase">Contact Us</h4>
      <ul class="list-none p-0">
        <li>Support:&nbsp;
          <a href="mailto:sylvester@abyscharms.com">sylvester@abyscharms.com</a>
        </li>
      </ul>
    </article>
  </section>
  <div class="container mx-auto pb-4 text-primary font-extrabold text-center">Copyright © {{ year }} ABY & CO.</div>
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
