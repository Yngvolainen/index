<template>
    <div class="books">
        <header class="books__header">
            <h2>Books</h2>
        </header>
        <div class="books__items">
            <section v-for="book in bookStore" :key="book.index">
                <div>
                    <img :src="book.cover" :alt="book.title">
                </div>
                <div>
                    {{book.writers}}
                </div>
                <div>
                    {{book.title}}
                </div>
            </section>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
     
        }
    },

    computed: {
        bookStore() {
            return this.$store.getters.getBooks;
        }
    },
   }
</script>

<style>
    .books__header {
        font-size: 30px;
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