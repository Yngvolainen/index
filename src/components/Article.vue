<template>
   <div class="article">
      article component
      <div class="article__title">title</div>
      <div class="article__img">img</div>
      <div class="article__text">text</div>
   </div>

</template>

<script>
   import Database from '../database.js';

   export default {
      data() {
         return {
            Database
         }
      }
   }
</script>

<style>
</style>