<template>
    <section v-for="book in bookStore" :key="book.index">
        <div class="books__images">
            <img :src="book.cover" :alt="book.title">
        </div>
        <div class="books__text">
            {{book.writers}}
        </div>
        <div class="books__text">
            {{book.title}}
        </div>
    </section>
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
    .books__images {
        margin-bottom: 10px;
    }

    .books__text {
        /* font-size: var(--caption); */
        font-size: 19px;
    }

    @media screen and (min-width: 968px) {
        .books__text {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 500px) {
        .books__text {
            font-size: 12px;
        }
    }

</style>