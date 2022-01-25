<template>
   <div class="articlesHomepage">
      <Article v-for="(article, index) in articles" 
                     :article="article"
                     :index="index"
                     @fullArticle="seeFullArticle" 
                     />
   </div>
</template>

<script>
   import Article from './Article.vue';

   export default {
      components: {
         Article
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
      gap: var(--column-gap);
      padding: var(--outside-margin);
   }
</style>