<template>
    <section class="fullArticle" >
        <h2 class="fullArticle__author"> {{ articles[articleDataIndex].author }} </h2>
        <h3 class="fullArticle__title"> {{ articles[articleDataIndex].title }} </h3>
        
        <figure class="fullArticle__preview">
            <img class="fullArticle__image" :src="articles[articleDataIndex].preview.image" />
            <figcaption class="fullArticle__image-caption"> {{ articles[articleDataIndex].preview.caption }} </figcaption>
        </figure>

        <div class="fullArticle__text">
            <div class="fullArticle__paragraph" v-for="paragraph in articles[articleDataIndex].body"> {{ paragraph }} </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                articleDataIndex:  0
            }
        },

        computed: {
            articles() {
                return this.$store.getters.getArticles
            },
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
        grid-column: span 12;
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
        margin-bottom: var(--lineheight-big);
        padding-left: var(--outside-margin);
        padding-right: var(--outside-margin);
    }

    .fullArticle__paragraph {
        padding-bottom: var(--lineheight-medium);
    }
</style>