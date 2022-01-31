<template>
    <Articles />
    <Books />
    <Journal />	 
    <Subby />   
</template>

<script>
    import Articles from '../components/ArticlesHomepage.vue';
    import Books from '../components/Books.vue';
    import Journal from '../components/Journal.vue';
    import Subby from '../components/Subby.vue';

    export default {
        components: {
        Articles,
        Books,
        Journal,
        Subby
        },
    }
</script>
