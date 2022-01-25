<template>
    <Header />
    <FullArticle />
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