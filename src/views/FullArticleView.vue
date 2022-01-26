<template>
    <Header />
    <Announcement />
    <FullArticle />
    <Footer />
</template>

<script>
    import Header from '../components/Header.vue';
    import Announcement from '../components/Announcement.vue';
    import FullArticle from '../components/FullArticle.vue';
    import Footer from '../components/Footer.vue';
    
    export default {
        components: {
            Header,
            Announcement,
            FullArticle,
            Footer,
            
        }
    }
</script>