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
        text-align: center;
        margin-bottom: var(--lineheight-medium);
    }

    .books__items {
        font-size: 12px;
        margin: 1em;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: var(--lineheight-xsmall);
    }

    .books__items:last-of-type {
        margin-bottom: var(--lineheight-big);
    }

    @media screen and (min-width: 968px) {
        .books__items {
            grid-template-columns: repeat(6, 1fr);
        }
    }
</style>