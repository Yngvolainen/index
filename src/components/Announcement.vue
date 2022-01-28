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
        height: 52px;
        overflow: hidden;
        margin: var(--top-xsmall) 0 80px 0;
    }

    .marquee__announcement  {
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        white-space: nowrap;
        padding: 10px;
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
</style>