<template>
    <!-- 
        finne en måte å få tak i verdien til forrige komponent?
        prop?
        sjekke alejandro
     -->
    <div class="fullArticle" v-for="article in articles">
        <div class="fullArticle__author"> {{ article.author }} </div>
        <div class="fullArticle__title"> {{ article.title }} </div>

        <figure>
            <img class="fullArticle__image" {{ article.preview.image }}  />
            <figcaption class="fullArticle__image-caption"> {{ article.preview.caption }} </figcaption>
        </figure>
    </div>
</template>

<script>
    export default {
        computed: {
            articles() {
                return this.$store.getters.getArticles
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