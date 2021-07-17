<style>

@import "../public/vendor/simplebar/dist/simplebar.min.css";
@import "../public/vendor/tiny-slider/dist/tiny-slider.css";
@import "./assets/css/theme.min.css";

</style>

<template>
  <Signin />
  <Navbar :activeClassValue="activeClassValue" />
  <router-view />
  <FooterPage />
  <ToolbarForHandheldDevices @activeClassValue="receiveActiove" />
  <BackToTopButton />
</template>



<script lang="ts">
import { defineComponent } from 'vue'

import Signin from './components/Signin.vue'
import Navbar from './components/Navbar.vue'
import FooterPage from './components/FooterPage.vue'
import BackToTopButton from './components/BackToTopButton.vue'
import ToolbarForHandheldDevices from './components/ToolbarForHandheldDevices.vue'

export default defineComponent({
  name: 'App',
  components: {
    Signin,
    Navbar,
    FooterPage,
    BackToTopButton,
    ToolbarForHandheldDevices
  },
  data() {
    return {
      activeClassValue: ""
    }
  },
  methods: {
    receiveActiove(res: string) {
      this.activeClassValue = res;
    }
  },
  mounted() {
    const bootstrapBundle = document.createElement('script');
    bootstrapBundle.type = 'text/javascript';
    bootstrapBundle.src = '/vendor/bootstrap/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(bootstrapBundle);
    const simplebar = document.createElement('script');
    simplebar.type = 'text/javascript';
    simplebar.src = '/vendor/simplebar/dist/simplebar.min.js';
    document.body.appendChild(simplebar);
    const tinySlider = document.createElement('script');
    tinySlider.type = 'text/javascript';
    tinySlider.src = '/vendor/tiny-slider/dist/min/tiny-slider.js';
    document.body.appendChild(tinySlider);
    const smoothScrollPolyfills = document.createElement('script');
    smoothScrollPolyfills.type = 'text/javascript';
    smoothScrollPolyfills.src = '/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js';
    document.body.appendChild(smoothScrollPolyfills);
    const theme = document.createElement('script');
    theme.type = 'text/javascript';
    theme.src = '/js/theme.min.js';
    document.body.appendChild(theme);

  }
});



</script>


