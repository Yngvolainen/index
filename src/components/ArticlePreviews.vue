<template>
   <div class="articles">
      <div class="articles__preview">
         <ArticlePreview 
                        v-for="(article, index) in articles" 
                        :article="article" 
                        :class="'articles__preview-' + index" 
                        @fullArticle="seeFullArticle" 
                        />
      </div>
   </div>
</template>

<script>
   import ArticlePreview from './ArticlePreview.vue';

   export default {
      components: {
         ArticlePreview
      },

      computed: {
         articles() {
            return this.$store.getters.getArticles
         },

         firstArticleTitle() {
            return this.$store.getters.getFirstArticleTitle
         },

         thirdArticleTitle() {
            return this.$store.getters.getThirdArticleTitle
         }
      }, 

      methods: {
         seeFullArticle(article) {
            if (article.title === this.firstArticleTitle) {
               console.log('NAVIGERE TIL FØRSTE ARTIKKEL: ', article.title);
            } else if (article.title === this.thirdArticleTitle) {
               console.log('NAVIGERE TIL TREDJE ARTIKKEL', article.title);
            }

         }
      }
   }

</script>

<style>
   .articles__preview {
      display: grid;
      grid-template-columns: repeat(12, 1fr) ;
      cursor: pointer;
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