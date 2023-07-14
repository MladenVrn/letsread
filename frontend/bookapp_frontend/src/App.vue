<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'



</script>

<template>
  <!-- FIRST PAGE THE USER SEES -->
  <header>
   <div class="navigation">
      <Navbar></Navbar>
   </div>
  </header>
<!-- DISPLAY DATA -->
  <div class="app_body">
      <RouterView></RouterView>
  </div>

 
</template>

<style scoped>


@media (min-width: 1024px) {

}
</style>
