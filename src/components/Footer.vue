<template>
	<section class="footer">

		<div class="footer__title">{{title}}</div>

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
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap:10px;
  font-family: var(--main-font);
  padding-bottom: var(--lineheight-small);
  margin-left: var(--outside-margin);
  font-size: var(--caption);
  color: var(--primary);
  margin-top: var(--lineheight-small);
  
}

 .footer__title, .footer__adress, .footer__navigation {
   grid-column: 1/ span 12;

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
		 .footer__title {
			 grid-column: 1 / span 1;
		 }
        .footer__adress {
       grid-column: 7 / span 2;
        }  

		  .footer__navigation {
		 grid-column: 10 / span 1;
		  }
		 
	 }
    @media screen and (max-width: 768px) {
		 
	   .footer__adress {
        display: none;
		  
		  }
		  .footer__navigation {
		 grid-column: 10 / span 1;
		  }



	 }
</style>