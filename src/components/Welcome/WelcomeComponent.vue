<template>
  <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" src="https://files-accl.zohopublic.in/public/workdrive-public/download/qrw264a1666fd047449e18d4855f2c3abce68" type="video/mp4" autoplay muted loop></video>
    </div>
    <div class="video-content space-y-2">
        <h1 class="font-light text-7xl drop-shadow-lg shadow-black">Aby's Charms</h1>
        <h3 class="font-light text-2xl">Where you can find the perfect earrings to match any outfit</h3>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WelcomeComponent'
})
</script>

<style>
.video-docker video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video-docker::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 1;
}

.video-content {
  z-index: 2;
}
</style>
