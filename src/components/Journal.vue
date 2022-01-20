<template>
    <div class="journal">
        <div class="journal__header">
            <h2>Journal</h2>
        </div>
        <!-- mouseover hover-function not exactly...working... -->
        <div @mouseover="hover = true" @mouseleave="hover = false" class="journal__slideshow" @click="nextJournalIndex">
            <img class="journal__slideshow-image" :src="journalInfo[journalIndex].image" alt="artsyfartsypicture">
            <!-- same goes for this v-if -->
            <div v-if="hover = true" class="journal__slideshow-text">
                <p>"{{journalInfo[journalIndex].title}}"</p>
                <p>{{journalInfo[journalIndex].location}}</p>
                <p>{{journalInfo[journalIndex].artist}}</p>
            </div>
            <div class="journal__slideshow-indicators">
                <span 
                    v-for="(item, index) in journalInfo.length" :key="item.index">
                    <button class="journal__slideshow-indicators--inactive"
                        :class=" index === journalIndex ? 'journal__slideshow-indicators--active' : ''"
                        @click="journalIndex = index-1">
                        <!-- above @click gives TypeError on first button 🤔 ,
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
            hover: false
            // https://michaelnthiessen.com/hover-in-vue/
            // https://javascript.plainenglish.io/implementing-hover-effects-with-vue-js-bacc560ca16c
        }
    },
    computed: {
        journalInfo() {
            return this.$store.getters.getJournal;
        }
    },
    methods: {
        nextJournalIndex() {
            if (this.journalIndex === this.journalInfo.length-1) {
                this.journalIndex = 0
            } else {
                this.journalIndex++
            }
            // why doesn´t the code below work? 🤔
            // this.journalIndex = (this.journalIndex === this.journalInfo.length-1) ? 0 : this.journalIndex++
        },
        setItemRef() {
            return this.journalIndex
        }
    },
    updated() {
        console.log(this.journalIndex)
    }
}
</script>

<style>
    .journal {
        text-align: center;
    }

    .journal__header {
        margin-bottom: 40px;
    }

    .journal__slideshow {
        width: 100vw;
        position: relative;
    }
/* 
    .journal__slideshow-image {
        position: relative;
    } */

    .journal__slideshow-text {
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        /* https://stackoverflow.com/questions/37721175/css-how-to-center-text-vertically-and-horizontally-over-an-image/37721341 */
        transform: translate(-50%, -50%);
    }

    .journal__slideshow-indicators {
        color: white;
        position: absolute;
        bottom: 1.5rem;
        left: 50%;
        transform: translate(-50%);
    }

    .journal__slideshow-indicators button{
        cursor: default;
        margin-right: 1rem;
    }

    /* .journal__slideshow-indicators button:last-child{
        margin-right: 0;
    } */

    .journal__slideshow-indicators--inactive {
        width: 1rem;
        height: 1rem;
        border: 1px solid white;
        border-radius: 50%;
        background: transparent;

    }

    .journal__slideshow-indicators--active {
        background: white;
    }
</style>