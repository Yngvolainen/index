<template>
      <div class="articlesHomepage">
         <ArticleSmall 
                        v-for="(article, index) in articles" 
                        :article="article"
                        :class="'articlesHomepage__article-' + index" 
                        @fullArticle="seeFullArticle" 
                        />
      </div>
</template>

<script>
   import ArticleSmall from './ArticleSmall.vue';

   export default {
      components: {
         ArticleSmall
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
   .articlesHomepage {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      cursor: pointer;
      gap: var(--column-gap);
      padding: var(--outside-margin);
   }

   .articlesHomepage__article-0, 
   .articlesHomepage__article-1, 
   .articlesHomepage__article-2 {
      grid-column: 1/ span 12;
   }

   @media screen and (min-width: 768px) { 
    .articlesHomepage__article-0 {
      grid-column: 3/ span 8;
   }

   .articlesHomepage__article-1 {
      grid-column: 1/ span 6;
   }

   .articlesHomepage__article-2 {
      grid-column: 7/ span 6;
   }
}
</style>