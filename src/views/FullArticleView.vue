<template>
    <FirstArticle v-if="$route.params.article_id === 'the-institute-of-the-cosmos'" />
    <ThirdArticle v-if="$route.params.article_id === 'mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency'" />
</template>

<script>
    import FirstArticle from '../components/FirstArticle.vue';
    import ThirdArticle from '../components/ThirdArticle.vue';

    export default {
        components: {
            FirstArticle,
            ThirdArticle
        }
    }
</script>