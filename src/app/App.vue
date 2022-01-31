<template>
	<Header />
	<Announcement />
	<RouterView />
	<Footer />
	
</template>
<script>
import Header from "../components/Header.vue"
import Announcement from "../components/Announcement.vue"
import Footer from "../components/Footer.vue"

export default {
	components: {
		Header,
		Announcement,
		Footer
	}
}
</script>
<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/fonts.css';
	@import '../style/style.css';
</style>
