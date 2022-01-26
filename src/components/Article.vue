<template>
   <section class="article">   <!-- make article component clickable for navigtaion to full articles -->
         <h3 class="article__title" > {{ article.title }}</h3>
         <p class="article__lead" > {{ article.lead }}</p>
         <img class="article__image" :src="article.preview.image"/>
   </section>
</template>

<script>
   export default {
      props: {
         article: {
            type: Object
         },

         index: { 
            type: Number
         }
      }, 
   }
</script>

<style>
/*    .article {
      text-align: center;
      margin-bottom: var(--lineheight-big);  
      grid-column: span 12;
   } 

   .article__title {
      grid-column: span 12;
      font-size: var(--heading);
      padding-bottom: var(--lineheight-small);
   }

   .article__lead {
      grid-column: span 12;   
      font-size: var(--caption);
      padding-bottom: var(--lineheight-small); 
   } 

   .article__image {
      grid-column: span 12;
   } */


   @media screen and (min-width: 968px) {    /* desktop */

   }
</style>