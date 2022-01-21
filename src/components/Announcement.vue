<template>
    <div class="marquee">
        <ul class="marquee__message">
            <li class="marquee__message-list">{{getAnnouncement.message}}</li>
        </ul>
    </div>
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
        width: 100vw;
        height: 40px;
    }

    .marquee__message {
        height: 100%;
        animation: scrolling 14s linear infinite;
        list-style: none;
        display: flex;
        align-items: center;
    }

    @keyframes scrolling {
        0% { transform: translateX(100vw); }
        100% { transform: translateX(-10vw); }
    }

    .marquee__message li {
        display: flex;
        justify-content: center;
        align-items: center; 
        font-size: 30px;   
    }

    .marquee__message li:hover {
        animation-play-state: paused;
    }
</style>