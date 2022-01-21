<template>
   <ArticlePreview v-for="article in articles" :article="article"/>

   <!-- article clickable -> route article.vue --> 
</template>

<script>
   import ArticlePreview from '../components/ArticlePreview.vue';

   export default {
      components: {
         ArticlePreview
      },

      computed: {
         articles() {
            return this.$store.getters.getArticles
         }
      }
   }


</script>

<style>

</style>