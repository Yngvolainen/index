<template> 
	<div> <Header /> </div>
	<div class="about" v-for="about in pagesDatabase">
		<div class="about__header"> {{ about.content.title }} </div>
		<div class="about__text"> 
			<p class="text__section"> {{ about.content.body[0] }} </p>
			<p class="text__section"> {{ about.content.body[1] }} </p>
			<p class="text__section"> {{ about.content.body[2] }} </p>
			<p class="text__section"> {{ about.content.body[3] }} </p>

			<!--  <div class="text__section" v-for="paragraph in pagesStore"> {{ paragraph.content.body }}</div> -->
		</div>
	</div>
	<div> <Footer /> </div>
</template>
 
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

	export default {
		components: {
			Header,
			Footer
		},

		data() {
			return {
			}
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
		grid-template-columns: repeat(12, 1fr);
		column-gap: 10px;
		margin: 0 10px 0 10px;
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
	}

	.text__section {
		margin-bottom: 40px;
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