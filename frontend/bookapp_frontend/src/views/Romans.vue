<script setup>
import {ref} from 'vue';

let romans = ref(null);

fetch('http://localhost:3000/categories/romane')
    .then(response => response.json())
    .then(data => romans.value = data.bookModel)
    .catch(error => {
      console.error(error);
    });

    console.log(romans)
</script>

<template>
<div id="romans">
    <div class="books_outer">
        <div class="books_inner" v-for="book in romans">
            <div class="title">{{book.name}}</div>
            <div class="description">{{ book.description }}</div>
            <input type="button" class="btn btn-info" value="Archive">
        </div>
    </div>
</div>

</template>

<style>
input{
    height:3vh;
    width:4vw;
    cursor: pointer;
}
.books_outer{
    border:1px solid grey;
    display:flex;
    flex-direction: column;
}
.books_inner{
    display:flex;
    justify-content: space-around;
    border:1px solid grey;
    height: 30vh;
    width:38vw;
    padding:15px;
}
.title{
    font-size: 20px;
}
.description{
    width: 15vw;
}
</style>