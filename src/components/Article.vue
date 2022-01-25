<template>
   <section class="article" :class="classNames.articleLayouts[index]" @click="emitFullArticle">   <!-- make article component clickable for navigtaion to full articles -->
         <h3 class="article__title" :class="classNames.titles[this.index]"> {{ article.title }}</h3>
         <p class="article__lead" :class="classNames.leads[this.index]"> {{ article.lead }}</p>
         <img class="article__image" :class="classNames.images[this.index]" :src="article.preview.image"/>
   </section>
</template>

<script>
   export default {
      data() {
         return {
            classNames: {
               titles: ['article__title--first', 'article__title--second', 'article__title--third'],
               leads: ['article__lead--first', 'article__lead--second', 'article__lead--third'],
               images: ['article__image--first', 'article__image--second', 'article__image--third'],
               articleLayouts: ['article__layout--first', 'article__layout--second', 'article__layout--third']
            }
         }
      },

      props: {
         article: {
            type: Object
         },

         index: { 
            type: Number
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
   .article {
      
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      text-align: center;
      gap: var(--column-gap);
      margin-bottom: var(--lineheight-big);
      grid-column: span 13;   /* for grid in ArticlesHomepage.vue */
   } 

   .article__title {
      grid-column: span 13;
      font-size: var(--heading);
      padding-bottom: var(--lineheight-medium);
   }

   .article__lead {
      grid-column: span 13;   
      font-size: var(--caption);
      padding-bottom: var(--lineheight-small); 
   } 

   .article__image {
      grid-column: span 13;
   }

   .article__layout--first {
      cursor: pointer;
   }

   @media screen and (min-width: 968px) {    /* desktop */
     .article__layout--second {
         grid-column: 1 / span 6;
      }
      .article__layout--third {
         cursor: pointer;
         grid-column: 7/ span 6;
      }

      .article__title--second {
        grid-column: 2 / span 8;
      }

      .article__title--third, 
      .article__lead--third {
        grid-column: 4 / span 8;
      }

      .article__lead--first {
        grid-column: 4 / span 6;
      }

      .article__lead--second {
        grid-column: 2 / span 8;
      }

     .article__image--first {
        grid-column: 3 / span 8;
     }

      .article__image--second {
        grid-column: 1 / span 12;
      }

      .article__image--third {
        grid-column: 1 / span 12;
      }
   }
</style>