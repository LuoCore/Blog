<template>
  <Signin />
  <Navbar />
  <router-view />
  <FooterPage />
  <ToolbarForHandheldDevices />
  <BackToTopButton />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Signin from './components/SigninModal.vue'
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
  }
});


</script>

