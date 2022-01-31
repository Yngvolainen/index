<template>
    <div class="journal" id="journal">
        <div class="journal__header">
            <h2>Journal</h2>
        </div>

        <div class="journal__slideshow" @click="nextJournalIndex">

            <img class="journal__slideshow-image" :src="journalInfo.image" alt="artsyfartsypicture">

            <caption class="journal__slideshow-text">
                <p>"{{journalInfo.title}}"</p>
                <p>{{journalInfo.location}}</p>
                <p>{{journalInfo.artist}}</p>
            </caption>

            <div class="journal__slideshow-indicators">
                <span v-for="(item, index) in fromJournalData.length" :key="item.id">
                    <button class="journal__slideshow-indicators--inactive"
                        :class="index === journalIndex ? 'journal__slideshow-indicators--active' : ''"
                        @click="shiftJournalIndex(index)">
                        <!-- above @click gives TypeError on first button 🤔,
                        but does not break page.
                        It´s probably beacause -1 is not valid at first index. 
                        OH WELLLLLL -->
                    </button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            journalIndex: 0,
            // hover: false
            // https://michaelnthiessen.com/hover-in-vue/
            // https://javascript.plainenglish.io/implementing-hover-effects-with-vue-js-bacc560ca16c
        }
    },
    computed: {
        fromJournalData() {
            return this.$store.getters.getJournal;
        },
        journalInfo() {
            return this.fromJournalData[this.journalIndex]
        }
       
    },
    methods: {
        nextJournalIndex() {
           this.journalIndex === this.fromJournalData.length-1 ? this.journalIndex = 0 : this.journalIndex++
        },

        shiftJournalIndex(index) {
            this.journalIndex = index - 1;
        },
    }
}
</script>

<style>
    .journal {
        text-align: center;
        margin-bottom: var(--bottom-big);
    }

    .journal__header {
        margin-bottom: var(--bottom-medium);
    }

    .journal__header h2 {
        font-size: var(--body);
    }

    .journal__slideshow {
        width: 100%;
        position: relative;
    }

    .journal__slideshow img {
        filter: brightness(80%);
    }

    .journal__slideshow-text {
        font-size: var(--body);
        color: #FFFFFF;
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .journal__slideshow-indicators {
        color: white;
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translate(-50%);
    }

    .journal__slideshow-indicators button{
        margin-right: 17px;
    }

    .journal__slideshow-indicators--inactive {
        width: 17px;
        height: 17px;
        border: 1px solid white;
        border-radius: 50%;
        background: transparent;
    }

    .journal__slideshow-indicators--active {
        background: white;
    }

    @media screen and (min-width: 968px) {
        .journal__slideshow-text {
            visibility: hidden;
        }

        .journal__slideshow:hover caption {
            visibility: visible;
        }

        .journal__slideshow img {
            filter: brightness(100%);
            transition: 0.225s ease;
        }

        .journal__slideshow:hover img {
            filter: brightness(80%);
            transition: 0.225s ease;
        }
    }
</style>