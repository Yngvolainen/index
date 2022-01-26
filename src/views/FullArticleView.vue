<template>
    <Header />
    <FullArticle />
<!--     <FullArtice v-if="$route.params.article_slug = 'the-institute-of-the-cosmos'" />
    <FullArticle v-if="$route.params.article_slug = 'jimmie-durham'" />
    <FullArticle v-if="$route.params.article_slug = 'mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency'"/> -->
    <Footer />
</template>

<script>
    import FullArticle from '../components/FullArticle.vue';

    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';

    export default {
        components: {
            FullArticle,
    
            Header,
            Footer
        }
    }
</script>