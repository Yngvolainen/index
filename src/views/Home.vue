<template>
  <Header />
  <!--Announcement /-->
	<Journal />	
  <About /> 
  <Footer />
</template>

<script>
// import Announcement from '../components/Announcement.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Journal from '../components/Journal.vue';
import About from "../components/About.vue";

export default {
	components: {
  Header,
  // Announcement,
  Journal,
  About,
  Footer
	},
}

</script>
