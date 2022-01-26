<template>
    <section class="fullArticle" >
        <h2 class="fullArticle__author"> {{ articles[ArticleDataIndex].author }} </h2>
        <h3 class="fullArticle__title"> {{ articles[ArticleDataIndex].title }} </h3>
        
        <figure class="fullArticle__preview">
            <img class="fullArticle__image" :src="articles[ArticleDataIndex].preview.image" />
            <figcaption class="fullArticle__image-caption"> {{ articles[ArticleDataIndex].preview.caption }} </figcaption>
        </figure>

        <div class="fullArticle__text">
            <div class="fullArticle__paragraph" v-for="paragraph in articles[ArticleDataIndex].body"> {{ paragraph }} </div>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            articles() {
                return this.$store.getters.getArticles
            },

            ArticleDataIndex() {
                if (this.$route.params.article_slug === 'the-institute-of-the-cosmos') {return 0}
                if (this.$route.params.article_slug === 'jimmie-durham') {return 1}
                if (this.$route.params.article_slug === 'mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency') {return 2}            
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
        grid-column: span 12;
        font-size: var(--body);
        margin: var(--outside-margin);
    }

    .fullArticle__title {
        grid-column: span 12;
        font-size: var(--heading);
        margin: var(--outside-margin);
        margin-bottom: var(--bottom-medium);
    }

    .fullArticle__preview {
        grid-column: span 12;
        margin-bottom: var(--bottom-big);
    }

    .fullArticle__image-caption {
        font-size: var(--caption);
        padding: var(--gap-big);
    }

    .fullArticle__text {
        grid-column: span 12;
        font-size: var(--body);
        margin: var(--outside-margin);
        margin-bottom: var(--bottom-big);
    }

    .fullArticle__paragraph {
        padding-bottom: var(--bottom-medium);
    }

    @media screen and (min-width: 968px) { 
        .fullArticle__author {
            grid-column: 2 /span 4;
        }

        .fullArticle__title {
            grid-column: 2 / span 10;
        }

        .fullArticle__preview {
            grid-column: span 12;
        }

        .fullArticle__text {
            grid-column: 3 / span 8;
        }
    }
</style>