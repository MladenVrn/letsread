<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<div class="homescreen_body">
    <ul class="category">
       <li class="cat_link"><RouterLink to="/romans" name="romans">Romane</RouterLink></li>
       <li class="cat_link"><RouterLink to="/thriller">Thriller</RouterLink></li>
       <li class="cat_link"><RouterLink to="/fantasy">Fantasy</RouterLink></li>
       <li class="cat_link"><RouterLink to="/fiction">Science Fiction</RouterLink></li>
       <li class="cat_link"><RouterLink to="/classic">Klassiker</RouterLink></li>
    </ul>

  </div>
</template>

<style>
.homescreen_body{
    margin:0 auto;
}
.category{
    display:flex;
    flex-direction: column;
    
}
.cat_link{
    list-style: none;
    text-align: center;
    padding-top: 5px;
    margin:10px;
    box-shadow: 1px 1px 1px 1px grey;
    width:250px;
    height: 50px;
    cursor:pointer;
}

.cat_link a{
    text-decoration: none;
    color:  rgba(235, 235, 235, 0.64);
}
.homescreen_body{
    width:20vw;
}
</style>