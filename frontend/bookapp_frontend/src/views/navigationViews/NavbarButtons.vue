<script setup>
import LoginModal from './LoginModal.vue';
import { ref } from 'vue'

//boolean values
const showModal = ref(false);

</script>

<template>
<div class="navbar">
    <!-- login form starts here -->
    <LoginModal v-if="showModal"></LoginModal>
    <!-- navbar starts here -->
        <div class="nav_content">
            <div class="logo">
                <h1>
                    Welcome
                </h1>
            </div>
            <div class="auth_btn">
                <button class="login" @click="showModal = !showModal">Login</button>
                <button class="register">register</button>
            </div>
        </div>
  </div>
  
</template>

<style>


button{
    margin:5px;
}
.nav_content{
    width: 50vw;
    display:flex;
    justify-content: space-around;
}
.navbar{
    display:flex;
    justify-content: space-around;
    margin-bottom:10vh;
    padding:25px;
}
.login{
    border-color:#28a745;
    background-color: #28a745;
    color: #fff;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    cursor: pointer;
    
}
.register{
    border-color:#17a2b8;
    background-color: #17a2b8;
    color: #fff;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    cursor: pointer;
   
}

</style>