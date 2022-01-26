<template>
    <div class="journal">
        <div class="journal__header">
            <h2>Journal</h2>
        </div>

        <div class="journal__slideshow" @click="nextJournalIndex">
            <img class="journal__slideshow-image" :src="journalInfo.image" alt="artsyfartsypicture">

            <!-- https://stackoverflow.com/questions/54936363/overlay-on-hover-in-vue-js -->
            <div class="journal__slideshow-overlay">
                <!-- hacke hacke -->
            </div>

            <div class="journal__slideshow-text">
                <p>"{{journalInfo.title}}"</p>
                <p>{{journalInfo.location}}</p>
                <p>{{journalInfo.artist}}</p>
            </div>

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

        // mouseOver() {
        //     this.hover = !this.hover
        // }
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

    .journal__slideshow {
        width: 100%;
        position: relative;
    }

    .journal__slideshow-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.2;
        transition: .5s ease;
    }

    .journal__slideshow:hover div {
        visibility: visible;
    }

    .journal__slideshow-text {
        font-size: var(--body);
        visibility: visible;
        color: #FFFFFF;
        position: absolute;
        /* https://stackoverflow.com/questions/37721175/css-how-to-center-text-vertically-and-horizontally-over-an-image/37721341 */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
    }

    .journal__slideshow-indicators {
        color: white;
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translate(-50%);
    }

    .journal__slideshow-indicators button{
        visibility: visible;
        cursor: default;
        margin-right: 15px;
    }

    .journal__slideshow-indicators--inactive {
        width: 15px;
        height: 15px;
        border: 1px solid white;
        border-radius: 50%;
        background: transparent;
    }

    .journal__slideshow-indicators--active {
        background: white;
    }

    @media screen and (min-width: 968px) {
        .journal__slideshow div {
            visibility: hidden;
        }

        .journal__slideshow-overlay {
            opacity: 0;
        }

        .journal__slideshow-overlay:hover {
            opacity: 0.2;
        }

        .journal__slideshow-text {
            visibility: hidden;
        }

        /* .journal__slideshow-text:hover {
            background: rgba(0, 0, 0, 0.2);
            transition: .5s ease;
        } */
    }
</style>