<template>
    <Header />
    <FirstArticle />
    <Footer />
</template>

<script>
    import FirstArticle from '../components/FirstArticle.vue';
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';

    export default {
        components: {
            FirstArticle,
            Header,
            Footer
        }
    }
</script>

<style>
</style>