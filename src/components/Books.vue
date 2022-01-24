<template>
    <div class="books">
        <header class="books__header">
            <h2>Books</h2>
        </header>
        <div class="books__items">
            <BookItems />
        </div>

    </div>
</template>

<script>

import BookItems from './BookItems.vue'

export default {
    data() {
        return {
     
        }
    },

    components: {
        BookItems
        },
   }
</script>

<style>
    .books__header {
        /* font-size: 30px; */
        text-align: center;
    }

    .books__items {
        font-size: 12px;
        margin: 1em;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.5em;
    }

    @media screen and (min-width: 769px) {
        .books__items {
            grid-template-columns: repeat(6, 1fr);
        }
    }
</style>