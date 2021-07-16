<style>

@import "./assets/vendor/simplebar/dist/simplebar.min.css";
@import "./assets/vendor/tiny-slider/dist/tiny-slider.css";
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
  data()
  {
    return{
      activeClassValue:""
    }
  },
  methods:{
    receiveActiove (res:string){
      this.activeClassValue=res;
    }
  }
});


import './assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/vendor/simplebar/dist/simplebar.min.js'
import './assets/vendor/tiny-slider/dist/min/tiny-slider.js'
import './assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js'
import './assets/js/theme.min.js'
</script>


