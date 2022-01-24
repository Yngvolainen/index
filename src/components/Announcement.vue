<template>
     <section class="marquee">
        <div class="marquee__announcement">
            <span>{{getAnnouncement.message}}</span>
        </div>    
    </section>
</template>

<script>
export default {
	data() {
		return {
                
		};
	},

    computed: {
        getAnnouncement() {
            return this.$store.getters.announcement;
        }
    }
}
</script>

<style>
    .marquee {
        background: var(--highlight);
        position: relative; 
        top: var(--heading);
        right: 0;
        left: 0;
        width: 100%;
        height: 62px;
        overflow: hidden;
        margin: 10px 0;
    }

    .marquee__announcement  {
        width: 100%;
        position: absolute;
        top: 5px;
        right: 0;
        left: 0;
        white-space: nowrap;
        padding: 0.35em;
        animation: marquee 25s linear infinite;
    }

    .marquee__announcement span {
        font-size: var(--body);
    }

     @keyframes marquee {
        0% {
            transform: translateX(100%); 
        }
        100% { 
            transform: translateX(-62%); 
        }
    }

    .marquee__announcement-message:hover {
        animation-play-state: paused;
    }

    /* Medium screen devices (768px and above) */
    @media screen and (min-width: 768px) {

    }
</style>