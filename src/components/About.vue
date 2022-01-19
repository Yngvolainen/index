<template>
  <div class="about">
     <h1 class="about__header"> {{ Database }} </h1>
     <div class="about__text">  </div>
  </div>
</template>
 
<script>
import Database from '../database.js'
 
export default {
  data() {
     return{
        Database
     }
  }
}
</script>
 
<style>
 
</style>