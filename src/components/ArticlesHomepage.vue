<template>
   <div class="articlesHomepage">
         <div v-for="(article, index) in articles" class="article">
            <router-link :to="{ name: 'article', params: {article_slug: article.slug }}" class="'article-' + index">
               <h3 class="article__title"> {{ article.title }}</h3>
               <p class="article__lead"> {{ article.lead }}</p>
               <img class="article__image" :src="article.preview.image"/>
            </router-link>
      </div> 
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