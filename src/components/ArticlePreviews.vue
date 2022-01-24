<template>
   <div class="article-previews">
      <div class="article-previews__preview">
         <ArticlePreview 
                        v-for="(article, index) in articles" 
                        :article="article" 
                        :class="'article-previews__preview-' + index" 
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

         firstArticle() {
            return this.$store.getters.getFirstArticle
         },

         thirdArticle() {
            return this.$store.getters.getThirdArticle
         }
      }, 

      methods: {
         seeFullArticle(article) {
            if (article.title === this.firstArticle.title) {
               this.$router.push('/' + this.firstArticle.slug)

            } else if (article.title === this.thirdArticle.title) {
               this.$router.push('/' + this.thirdArticle.slug);
            }
         }
      }
   }

</script>

<style>
   .article-previews__preview {
      display: grid;
      grid-template-columns: repeat(12, 1fr) ;
      cursor: pointer;
   }

   .article-previews__preview-0, 
   .article-previews__preview-1, 
   .article-previews__preview-2 {
      grid-column: 1/ span 12;
   }

   @media screen and (min-width: 768px) { /* minwidth fordi mobile first konsept */
    .article-previews__preview-0 {
      grid-column: 3/ span 8;
   }

   .article-previews__preview-1 {
      grid-column: 1/ span 6;
   }

   .article-previews__preview-2 {
      grid-column: 7/ span 6;
   }
}

</style>