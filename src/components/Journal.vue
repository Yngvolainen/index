<template>
    <div class="journal">
        <div class="journal__header">
            <h2>Journal</h2>
        </div>
        
        <div class="journal__slideshow" @click="nextJournalIndex">
            <img class="journal__slideshow-image" :src="journalInfo[journalIndex].image" alt="">
            <div>
                <p>"{{journalInfo[journalIndex].title}}"</p>
                <p>{{journalInfo[journalIndex].location}}</p>
                <p>{{journalInfo[journalIndex].artist}}</p>
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
        }
    },
            // https://michaelnthiessen.com/hover-in-vue/
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
        nextImage() {
				this.index = (this.index === this.slides.length - 1) ? 0 : this.index + 1;
			},
    }
}
</script>

<style>
    .journal {
        text-align: center;
    }

    .journal__header {
        /* text-align: center; */
    }

    .journal__slideshow {
        width: 100vw;

    }
</style>