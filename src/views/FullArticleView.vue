<template>
    <FirstArticle v-if="$route.params.article_id === 'firstArticle'" />
    <ThirdtArticle v-if="$route.params.article_id === 'thirdArticle'" />
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