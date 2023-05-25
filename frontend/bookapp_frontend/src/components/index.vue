<script setup>
import {ref} from 'vue'
let categories = ref(null);

fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => categories.value = data.categoryModel)
    .catch(error => {
      console.error(error);
    });

    console.log(categories)
</script>

<template>
<div class="homescreen_body">
    <ul class="category">
      <li class="cat_link" v-for="cat in categories" :key="cat._id"><a href=""> {{cat.category}}</a> </li>
    </ul>
  </div>
</template>

<style>
.category{
    display:flex;
    flex-direction: column;
    
}
.cat_link{
    list-style: none;
    text-align: center;
    padding-top: 5px;
    margin:10px;
    border: 1px solid hsla(160, 100%, 37%, 1);
    width:250px;
    height: 50px;
    border-radius: 2%;
}
.cat_link a{
    text-decoration: none;
    color:  rgba(235, 235, 235, 0.64);
}
.homescreen_body{
    width:20vw;
}
</style>