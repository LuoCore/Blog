<template>
  <Signin  />
 <Navbar />> 
  <HeroSection />
  <DemosSection  />
  <CartzillaPagesSection  />
  <CartzillHandheldToolbar  />
  <FooterPage  />
  <ToolbarForHandheldDevices />
  <BackToTopButton />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import  Signin  from './components/SigninModal.vue'
import  Navbar  from './components/Navbar.vue'
import  HeroSection  from './components/HeroSection.vue'
import  DemosSection  from './components/DemosSection.vue'
import  CartzillaPagesSection  from './components/CartzillaPagesSection.vue'
import  CartzillHandheldToolbar  from './components/CartzillHandheldToolbar.vue'
import  FooterPage  from './components/FooterPage.vue'
import  ToolbarForHandheldDevices  from './components/ToolbarForHandheldDevices.vue'
import  BackToTopButton  from './components/BackToTopButton.vue'

export default defineComponent({
  name: 'App',
  components: {
    Signin,
    Navbar,
    HeroSection,
    DemosSection,
    CartzillaPagesSection,
    CartzillHandheldToolbar,
    FooterPage,
    ToolbarForHandheldDevices,
    BackToTopButton
  }
})
</script>

