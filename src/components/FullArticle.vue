<template>
  <section class="fullArticle" >
        <h2 class="fullArticle__author"> {{ articles[ArticleDataIndex].author }} </h2>
        <h3 class="fullArticle__title"> {{ articles[ArticleDataIndex].title }} </h3>
        
        <figure>
            <img class="fullArticle__image" :src="articles[ArticleDataIndex].preview.image" />
            <figcaption class="fullArticle__image-caption"> {{ articles[ArticleDataIndex].preview.caption }} </figcaption>
        </figure>
    </section>
</template>

<script>
    export default {
        computed: {
            articles() {
                return this.$store.getters.getArticles
            },

            ArticleDataIndex() {
                return this.$route.params.article_id === 'the-institute-of-the-cosmos' ? 0 : 2 /* return articledata based on which article is navigated to in home.vue */
            }
        }
    }
</script>

<style>
    .fullArticle {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: var(--column-gap);
        padding: var(--outside-margin);
    }
</style>