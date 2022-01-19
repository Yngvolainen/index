<template>
<section class="footer">

<h3 class="footer__title">in(dex)</h3>

<nav class="footer__navigation">
	<p class="footer__navigation-link">About us</p> 
	<p class="footer__navigation-social">Instagram</p> 
	<p class="footer__navigation-social">Twitter</p> 
	<p class="footer__navigation-mail"> in@dex.info </p>
</nav>

</section>	
</template>


<script>
export default {
	
}
</script>



<style>
.footer {
	padding: 30px;
	display: flex;
	justify-content: space-between;
}
.footer__navigation {
	margin-right: 50px;
}

.footer__navigation-link {
	margin-bottom: 20px;
}
.footer__navigation-mail {
	margin-top: 20px;
}
</style>