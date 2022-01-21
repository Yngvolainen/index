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
      font-family: var(--main-font);
      padding: 30px;
      text-align: center;
   }

   .article-preview__title {
      font-size: var(--heading);
      padding-bottom: var(--lineheight-medium);   /* medium */
   }

   .article-preview__lead {
      font-size: var(--caption);
      padding-bottom: var(--lineheight-small); /* small */
   }

<<<<<<< HEAD
<<<<<<< HEAD

@media screen and (min-width: 768px) { /* minwidth fordi mobile first konsept */
=======
=======
   .article-preview__0 {
      
   }
   .article-preview__1 {
      
   }

   .article-preview__2 {
      
   }

>>>>>>> Add article classname
   @media screen and (min-width: 768px) {
       /* minwidth fordi mobile first konsept */
>>>>>>> Update to variables

   }
</style>