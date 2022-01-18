<template>
   <div class="article-preview">preview
      <div class="article-preview__title">preview title</div>
      <div class="article-preview__lead">preview lead</div>
      <div class="article-preview__image">preview image</div>
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