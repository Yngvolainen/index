<template>
   <ArticlePreview v-for="(article, index) in articles" :article="article" :class="'preview-' + index" />

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
   .preview-0 {
      color:red;
   }
</style>