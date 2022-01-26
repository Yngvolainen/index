<template>
	<section class="footer">

		<div class="footer__title">{{title}}</div>

		<div class="footer__adress">{{adress}}</div>

		<nav class="footer__navigation">
			<RouterLink class="footer__navigation-link" :to="{ name: 'about', path: '/about-us', component: AboutView }">
			<div class="footer__navigation-about">{{about}}</div> 
			<div class="footer__navigation-social">{{instagram}} <img src="/svg/arrow.svg" alt="arrow-icon" class="footer__navigation-icon"></div> 
			<div class="footer__navigation-social">{{twitter}} <img src="/svg/arrow.svg" alt="arrow-icon" class="footer__navigation-icon"></div> 
			</RouterLink>
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
					 adress: '172 Classon Avenue Brooklyn, NY 11205 USA',
                instagram: 'Instagram',
                twitter: 'Twitter',
                mail: 'in@dex.info',
			};
		},
	
}
</script>



<style>
.footer {
  display: grid;
  grid-template-columns: var(--grid-column-12);
  grid-gap: var(--gap-big);
  font-family: var(--main-font);
  padding-bottom: var(--bottom-small);
  margin-left: var(--outside-margin);
  font-size: var(--body);
  color: var(--primary);
  }


.footer__title, .footer__adress, .footer__navigation {
   grid-column: 1/ span 12;

   }
	

.footer__navigation-icon {
  width: 9px;
}

.footer__navigation-link {
	text-decoration: none;
	color: var(--primary);
}
.footer__navigation-about {
	margin-bottom: 20px;
}
.footer__navigation-mail {
	margin-top: 20px;
}
   /* Medium screen devices (968px and above) */
    @media screen and (min-width: 968px) {
		 .footer__title {
			 grid-column: 1 / span 1;
		 }
        .footer__adress {
       grid-column: 6 / span 4;
        }  

		  .footer__navigation {
		 grid-column: 10 / span 1;
		  }
		 
	 }
    @media screen and (max-width: 968px) {
		 .footer__title {
			 grid-column: 1 / span 1;
		 }
		 
	   .footer__adress {
        display: none;
		  
		  }
		  .footer__navigation {
		 grid-column: 10 / span 1;
		  }



	 }
</style>