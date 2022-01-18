<template>
   articleS
    <!-- loop med previews som igjen inneholder articler
                     - loop med articlene  -->
   <div> test henting av tittel: {{ Database.articles[0].title }}</div>
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