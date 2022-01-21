<template>
   <ArticlePreview v-for="(article, index) in articles" :article="article" :class="'article-preview__' + index" />

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