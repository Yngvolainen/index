<template>
   <div class="articleSmall" @click="emitFullArticle">   <!-- make article component clickable for navigtaion to full articles -->
      <h3 class="articleSmall__title"> {{ article.title }}</h3>
      <p class="articleSmall__lead"> {{ article.lead }}</p>
      <img class="articleSmall__image" :src="article.preview.image"/> 
   </div>
</template>

<script>
   export default {
      props: {
         article: {
            type: Object
         },
      }, 

      methods: {
         emitFullArticle() {
            this.$emit('fullArticle', this.article);
         }
      }
   }
</script>

<style>
   .articleSmall {
      text-align: center;
      padding-bottom: var(--lineheight-big);
   }

   .articleSmall__title {
      font-size: var(--heading);
      padding-bottom: var(--lineheight-medium);
   }

   .articleSmall__lead {
      font-size: var(--caption);
      padding-bottom: var(--lineheight-small); 
   }
</style>