<script setup>
import { RouterLink, RouterView } from 'vue-router'
import index from './components/index.vue'

  

</script>

<template>
  <!-- FIRST PAGE THE USER SEES -->
  <header>
  
   <div class="navigation">

   </div>
  </header>
<!-- DISPLAY DATA -->
  <div class="app_body">
      <index></index>
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 50vh;
}

.app_body{
  
}

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */
}
</style>
