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
      text-align: center;
      padding-bottom: var(--lineheight-big);
   }

   .article-preview__title {
      font-size: var(--heading);
      padding-bottom: var(--lineheight-medium);  
   }

   .article-preview__lead {
      font-size: var(--caption);
      padding-bottom: var(--lineheight-small); 
   }
</style>