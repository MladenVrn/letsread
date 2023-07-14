<script setup>

</script>

<template>
<div class="login_modal" id="login-Modal" ref="loginModal">
    <div class="close_modal">
        <h3>X</h3>
    </div>
    <div class="login_form">
        <form action="">
            <input class="uname" type="text" name="username" placeholder="username"><br>
            <input class="pw" type="password" name="password" placeholder="password"><br>
            <input class="sbtn" type="submit" value="submit">
        </form>
    </div>
  </div>
</template>

<style>
.close_modal{
    cursor:pointer;
}
.login_modal{
    border:1px solid white;
    position: fixed; 
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    text-align: center;
    padding:5px;
}
.uname, .pw{
    width: 250px;
    height:30px;
    padding:5px;
    margin:5px;
}
.sbtn{
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
.login_form{
   
   
}
</style>