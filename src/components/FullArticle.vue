<template>
    <section v-if="fullArticle" class="fullArticle" >   <!-- show 'fullArticle content based on the slug' -->
       <h2 class="fullArticle__author"> {{ fullArticle.author }} </h2>
        <h3 class="fullArticle__title"> {{ fullArticle.title }} </h3>
        
        <figure class="fullArticle__preview">
            <img class="fullArticle__image" :src="fullArticle.preview.image" />
            <figcaption class="fullArticle__image-caption"> {{ fullArticle.preview.caption }} </figcaption>
        </figure>

        <div class="fullArticle__text">
            <div class="fullArticle__paragraph" v-for="paragraph in fullArticle.body"> {{ paragraph }} </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            article_slug: {
                type: String
            },
        },

        computed: {
            articles() {
                return this.$store.getters.getArticles
            },
        },

        created() {                                                                                         /* created method tells vue to do this before creating routerlink */
            return this.fullArticle = this.articles.find(article => article.slug === this.article_slug)     /* return slug to the current article (give value to slug prop) source: https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode */
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