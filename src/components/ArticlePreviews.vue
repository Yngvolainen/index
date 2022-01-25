<template>
      <div class="article-previews">
         <ArticlePreview 
                        v-for="(article, index) in articles" 
                        :article="article"
                        :class="'article-previews__preview-' + index" 
                        @fullArticle="seeFullArticle" 
                        />
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
      }, 

      methods: {
         seeFullArticle(article) {
            if (article.title === this.articles[0].title) {
               this.$router.push('/' + this.articles[0].slug) /* pushes new entry into history stack */

            } else if (article.title === this.articles[2].title) {
               this.$router.push('/' + this.articles[2].slug);
            }
         },
      }
   }

</script>

<style>
   .article-previews {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      cursor: pointer;
      gap: var(--column-gap);
      padding: var(--outside-margin);
   }

   .article-previews__preview-0, 
   .article-previews__preview-1, 
   .article-previews__preview-2 {
      grid-column: 1/ span 12;
   }

   @media screen and (min-width: 768px) { 
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