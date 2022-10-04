<template>
    <div id="body-navbar" >
        <div class="flex justify-center">
            <div  class="flex justify-between w-11/12 m-1 ">
                <div class="w-24 leading-tight">
                    <p class="text-white text-center text-sm"> Your Todo Apps</p>
                </div>
                <div class="text-white text-center text-sm flex p-4" >
                    <a href="#"> Home </a>
                    <a href="#" class="ml-4">  Register </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name : 'Navbar' 
    }
</script>

<style>
    #body-navbar{
        background-color: #1F1D36;
    }
</style>