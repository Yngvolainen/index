<template>
   <div class="articlesHomepage">
      <h2 class="articlesHomepage__header"> {{ header }}</h2>

      <div v-for="(article, index) in articles" class="article" :class="'article__' + index">
         <router-link :to="{ name: 'article', params: {article_slug: article.slug }}" class="article__link">
            <h3 class="article__title" :class="'article__title-' + index"> {{ article.title }}</h3>
            <p class="article__lead" :class="'article__lead-' + index"> {{ article.lead }}</p>
         </router-link>

         <img class="article__image" :src="article.preview.image"/>
      </div>  
   </div>
</template>

<script>
   export default {
      data() {
         return {
            header: 'Latest'
         }
      }, 

      computed: {
         articles() {
            return this.$store.getters.getArticles
         },
      }, 
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
      margin-bottom: var(--bottom-medium);
   }

   .article {
      text-align: center;
      margin-bottom: var(--bottom-big);
      text-decoration: none;
   } 

   .article__link {
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
      padding-bottom: var(--bottom-medium); 
   }

   .article__image {
      grid-column: span 12;
   }

   @media screen and (min-width: 968px) {   
       .article__0 {
         grid-column: 3 / span 8;
      }
       
      .article__lead-0 {
         grid-column: 4 / span 6;   

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