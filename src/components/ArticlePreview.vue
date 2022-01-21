<template>
   <div class="article-preview" @click="emitFullArticle">
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
      }, 

      methods: {
         emitFullArticle() {
            this.$emit('fullArticle', this.article);
         }
      }
   }
</script>

<style>
   .article-preview {
      font-family: var(--main-font);
      padding: 40px;
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

</style>