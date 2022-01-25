<template>
    <section class="fullArticle" >
        <h2 class="fullArticle__author"> {{ articles[ArticleDataIndex].author }} </h2>
        <h3 class="fullArticle__title"> {{ articles[ArticleDataIndex].title }} </h3>
        
        <figure class="fullArticle__preview">
            <img class="fullArticle__image" :src="articles[ArticleDataIndex].preview.image" />
            <figcaption class="fullArticle__image-caption"> {{ articles[ArticleDataIndex].preview.caption }} </figcaption>
        </figure>

        <p class="fullArticle__text"> {{ articles[ArticleDataIndex].body }} </p>
    </section>
</template>

<script>
    export default {
        computed: {
            articles() {
                return this.$store.getters.getArticles
            },

            ArticleDataIndex() {
                return this.$route.params.article_id === 'the-institute-of-the-cosmos' ? 0 : 2 /* return articledata based the article that was clicked in home.vue */
            }
        }
    }
</script>

<style>
    .fullArticle {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: var(--column-gap);
    }

    .fullArticle__author {
        grid-column: 2 /span 4;
        font-size: var(--body);
        padding-top: var(--lineheight-medium);
        padding-left: var(--outside-margin);
        padding-right: var(--outside-margin);
    }

    .fullArticle__title {
        grid-column: 2 / span 10;
        font-size: var(--heading);
        padding-left: var(--outside-margin);
        padding-right: var(--outside-margin);
    }

    .fullArticle__preview {
        grid-column: span 13;
        padding-top: var(--lineheight-medium);
        padding-bottom: var(--lineheight-big);
    }

    .fullArticle__image-caption {
        font-size: var(--caption);
        padding: var(--lineheight-xsmall);
    }

    .fullArticle__text {
        grid-column: 3 / span 8;
        font-size: var(--body);
        padding-left: var(--outside-margin);
        padding-right: var(--outside-margin);
    }
</style>