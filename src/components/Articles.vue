<template>
   <div class="articles">
      <div class="articles__preview">
         <ArticlePreview v-for="(article, index) in articles" :article="article" :class="'articles__preview-' + index" />
      </div>
   </div>
   

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

   .articles__preview {
      display: grid;
      grid-template-columns: repeat(12, 1fr) ;
   }

   .articles__preview-0, 
   .articles__preview-1, 
   .articles__preview-2 {
      grid-column: 1/ span 12;
   }

   @media screen and (min-width: 768px) { /* minwidth fordi mobile first konsept */

    .articles__preview-0 {
      grid-column: 3/ span 8;
   }

   .articles__preview-1 {
      grid-column: 1/ span 6;
   }

   .articles__preview-2 {
      grid-column: 7/ span 6;
   }
}

</style>