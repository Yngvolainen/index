<template>
  <div class="about" v-for="about in pagesStore">
     <h1 class="about__header"> {{ about.content.title }} </h1>
     <div class="about__text"> 
		  <p class="text__section"> {{ about.content.body[0] }} </p>
		  <p class="text__section"> {{ about.content.body[1] }} </p>
		  <p class="text__section"> {{ about.content.body[2] }} </p>
		  <p class="text__section"> {{ about.content.body[3] }} </p>
	  </div>
  </div>
</template>
 
<script>
	export default {
		data() {
			return {
			}
		},
		
		computed: {
			pagesStore() {
				return this.$store.getters.getAbout; 
			}
		},
	};
</script>
 
<style> 
	.about {
		font-family: var(--main-font);
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		column-gap: 10px;
		margin: 0 10px 0 10px;
	}
	
	.about__header {
		font-size: var(--heading);
		grid-column: 1/ span 12;
		text-align: center;
		margin-top: 40px;
		line-height: var(--lineheight-big);
	}

	.about__text {
		font-size: var(--body);
		grid-column: 1/ span 12;
		margin-top: 60px;
		line-height: var(--lineheight-small);
	}

	.text__section {
		margin-bottom: 40px;
	}

	/* medium screen and larger */
	@media screen and (min-width: 769px)  {
		.about__header {
			grid-column: 3/ span 8;
		}

		.about__text {
			grid-column: 3/ span 8;
		}
	}
 
</style>