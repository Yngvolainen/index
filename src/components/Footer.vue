<template>
<section class="footer">

<h3 class="footer__title">{{title}}</h3>

<div class="footer__adress">{{adress}}</div>

<nav class="footer__navigation">
	<div class="footer__navigation-link">{{about}}</div> 
	<div class="footer__navigation-social">{{instagram}} <img src="/svg/arrow.svg" alt="arrow-icon" class="footer__navigation-icon"></div> 
	<div class="footer__navigation-social">{{twitter}} <img src="/svg/arrow.svg" alt="arrow-icon" class="footer__navigation-icon"></div> 
	<p class="footer__navigation-mail"> {{mail}} </p>
</nav>

</section>	
</template>


<script>
export default {
	data() {
			return {
                title: 'in(dex)',
                about: 'About Us',
					 adress: '172 Classon Avenue. Brooklyn, NY 11205. USA',
                instagram: 'Instagram',
                twitter: 'Twitter',
                mail: 'in@dex.info',
			};
		},
	
}
</script>



<style>
.footer {
	padding: 30px;
	display: flex;
	justify-content: space-between;
	font-size: 30px;
}
.footer__navigation {
	margin-right: 50px;
}
.footer__navigation-icon {
  width: 9px;
}

.footer__navigation-link {
	margin-bottom: 20px;
}
.footer__navigation-mail {
	margin-top: 20px;
}

    @media screen and (min-width: 768px) {
        .footer {
            display: flex;
        }  
		 
	 }
    @media screen and (max-width: 768px) {
	 .footer__adress {
        display: none;
		  }
	 }
</style>