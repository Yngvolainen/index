<template>
   <div class="articlesHomepage">
      <h2 class="articlesHomepage__header"> {{ header }}</h2>

      <RouterLink  class="article" :class="'article__' + index" v-for="(article, index) in articles" :to="{ name: 'article', params: {article_slug: article.slug }}">
         <h3 class="article__title" :class="'article__title-' + index"> {{ article.title }} </h3>
         <p class="article__lead" :class="'article__lead-' + index"> {{ article.lead }} </p>
         <img class="article__image" :src="article.preview.image"/>
      </RouterLink>
   
      

<!--       <div v-for="(article, index) in articles" class="article" :class="'article__' + index">
         <router-link :to="{ name: 'article', params: {article_slug: article.slug }}" class="article__link">
            <h3 class="article__title" :class="'article__title-' + index"> {{ article.title }}</h3>
            <p class="article__lead" :class="'article__lead-' + index"> {{ article.lead }}</p>
         </router-link>

         <img class="article__image" :src="article.preview.image"/>
   </div> --> 
   </div>
</template>

<script>
/*    import Article from './Article.vue'; */

   export default {
      data() {
         return {
            header: 'Latest'
         }
      }, 
/* 
      components: {
         Article
      }, */

      computed: {
         articles() {
            return this.$store.getters.getArticles
         },
      }, 

/*       methods: {
         seeFullArticle(article) {
            if (article.title === this.articles[0].title) {
               this.$router.push('/' + this.articles[0].slug) /* pushes new entry into history stack 

            } else if (article.title === this.articles[2].title) {
               this.$router.push('/' + this.articles[2].slug);
            }
         }, 
      }*/
   }

</script>

<style>
   .articlesHomepage {
      display: grid;
      grid-template-columns: var(--grid-column-12);
      gap: var(--gap-big);
      padding: var(--outside-margin);
   }

   .articlesHomepage__header {
      grid-column: 6 / span 2;
      text-align: center;
      font-size: var(--body);
   }

   .article {
 /*      grid-column: span 12;
      display: grid;
      grid-template-columns: var(--grid-column-12); */

      text-align: center;
      margin-bottom: var(--bottom-big);
      text-decoration: none;
   } 

   .article__title {
      color: var(--primary);
      grid-column: span 12; 
      font-size: var(--heading);
      padding-bottom: var(--bottom-small);
      
   }

   .article__lead {
      color: var(--primary);
      grid-column: span 12;    
      font-size: var(--caption);
      padding-bottom: var(--bottom-small); 
   }

   .article__image {
      grid-column: span 12;
   }

   @media screen and (min-width: 968px) {    /* desktop */
      .article__0 {
         grid-column: 3 / span 8;
      }

      .article__lead-0 {
         color: var(--primary);
         grid-column: 4 / span 6;   
         font-size: var(--caption);
         padding-bottom: var(--bottom-small); 
      }

      .article__1 {
         grid-column: 1 / span 6;
      }   

      .article__title-1 {
         grid-column: 3 / span 8;
      }

      .article__lead-1 {
         grid-column: 3 / span 8;   
      }
         
      .article__2 {
         grid-column: 7 / span 6;
      }

      .article__title-2, .article__lead-2 {
         grid-column: 3 / span 8;
      }
   }
</style>