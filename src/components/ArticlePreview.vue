<template>
   <div class="article-preview">
      <h3 class="article-preview__title"> {{ article.title }}</h3>
      <p class="article-preview__lead"> {{ article.lead }}</p>
      <img class="article-preview__image" :src="article.preview.image"/> 
   </div>
</template>

<script>
   export default {
      props: {
         article: {
            type: Object
         }
      }
   }
</script>

<style>
   .article-preview {
      font-family: 'JetBrainsMono';
      padding: 30px;
      text-align: center;
   }

   .article-preview__title {
      font-size: 50px;
      padding-bottom: 40px;   /* medium */
   }

   .article-preview__lead {
      font-size: 20px;
      padding-bottom: 20px; /* small */
   }


@media screen and (min-width: 768px) { /* minwidth fordi mobile first konsept */

   }
</style>