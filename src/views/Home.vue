<template>
    <Header />
    <!--Announcement /-->
    <Articles />
    <Books />
    <Journal />	 
    <Footer /> 
</template>

<script>
    // import Announcement from '../components/Announcement.vue';
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import Books from '../components/Books.vue';
    import Journal from '../components/Journal.vue';
    import Articles from '../components/Articles.vue';

    export default {
        components: {
        Header,
        // Announcement,
        Articles,
        Books,
        Journal,
        Footer
        },
    }
</script>
