<template>
	<section class="footer">
		<div class="footer__title">{{title}}</div>

		<div class="footer__adress">{{addressFromStore.address.replaceAll('.', '\n')}}</div>

		<nav class="footer__navigation">
			<RouterLink class="footer__navigation-link" :to="{ name: 'about' }">
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
			instagram: 'Instagram',
			twitter: 'Twitter',
			mail: 'in@dex.info',
		};
	},
	computed: {
        addressFromStore() {
            return this.$store.getters.getAddress;
        }
    }
}
</script>

<style>
	.footer {
		display: grid;
		grid-template-columns: var(--grid-column-12);
		grid-gap: var(--gap-big);
		padding-bottom: var(--bottom-small);
	 	margin: var(--outside-margin);
		font-size: var(--body);
		color: var(--primary);
	}

	.footer__title {
		grid-column: 1 / span 1;
	}

	.footer__adress {
		grid-column: 7 / span 3;
		display: none;
		white-space: pre-line;
	}
	
	.footer__navigation {
		grid-column: 8 / span 5;
	}

	.footer__navigation-icon {
		width: 14px;
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
        .footer__adress {
			display: block;
        }

		.footer__navigation {
			grid-column: 10 / span 2;
		}
	}
	
	@media screen and (max-width: 511px) {
		.footer * {
			font-size: var(--caption);
		}
	}
</style>