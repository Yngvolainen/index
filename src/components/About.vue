<template> 
	<Header />
	<Announcement />
	<div class="about" v-for="about in pagesDatabase">
		<div class="about__header"> {{ about.content.title }} </div>
		<div class="about__text"> 
			<p class="text__section"> {{ about.content.body[0] }} </p>
			<p class="text__section"> {{ about.content.body[1] }} </p>
			<p class="text__section"> {{ about.content.body[2] }} </p>
			<p class="text__section"> {{ about.content.body[3] }} </p>
		</div>
	</div>
	<Footer />
</template>
 
<script>
import Header from '../components/Header.vue';
import Announcement from './Announcement.vue';
import Footer from '../components/Footer.vue';

	export default {
		components: {
			Header,
			Announcement,
			Footer
		},
		
		computed: {
			pagesDatabase() {
				return this.$store.getters.getAbout; 
			}
		},
	};
</script>

<style> 
	.about {
		display: grid;
		grid-template-columns: var(--grid-column-12);
		column-gap: var(--gap-big);
		margin: var(--outside-margin);
	}
	
	.about__header {
		font-size: var(--heading);
		grid-column: 1/ span 12;
		text-align: center;
	}

	.about__text {
		font-size: var(--body);
		grid-column: 1/ span 12;
		margin-top: 60px;
		margin-bottom: 120px;
	}

	.text__section {
		margin-bottom: var(--bottom-medium);
	}

	/* tablet and desktop */
	@media screen and (min-width: 968px)  {
		.about__header {
			grid-column: 3/ span 8;
		}

		.about__text {
			grid-column: 3/ span 8;
		}
	}
</style>