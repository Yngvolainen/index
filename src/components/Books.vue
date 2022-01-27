<template>
    <div class="books" id="books">
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
        margin-bottom: var(--bottom-medium);
    }

    .books__header h2 {
        font-size: var(--body);
    }

    .books__items {
        margin: 1em;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: var(--gap-big);
    }

    .books__items:last-of-type {
        margin-bottom: var(--bottom-big);
    }

    @media screen and (min-width: 968px) {
        .books__items {
            grid-template-columns: repeat(6, 1fr);
        }
    }
</style>