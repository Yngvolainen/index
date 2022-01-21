<template>
  <div class="about" v-for="about in pagesStore">
     <h1 class="about__header"> {{ about.content.title }} </h1>
     <div class="about__text"> {{ about.content.body }} </div>
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
		font-family: 'JetBrains Mono', monospace;
	}
	
	.about__header {
		position: absolute;
		width: 928px;
		height: 198px;
		left: 20px;
		top: 166px;

		font-style: normal;
		font-weight: normal;
		font-size: 50px;
		line-height: 66px;
		text-align: center;
	}

	.about__text {
		position: absolute;
		width: 928px;
		height: 1240px;
		left: 20px;
		top: 423px;
		
		font-style: normal;
		font-weight: normal;
		font-size: 30px;
		line-height: 40px;
	}

	/* medium screen and larger */
	@media screen and (min-width: 769px)  {
		.about {

		}

		.about__header {
		position: absolute;
		width: 1260px;
		height: 132px;
		}

		.about__text {
		position: absolute;
		width: 1260px;
		height: 1000px;
		}
	}
 
</style>