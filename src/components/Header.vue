<template>
    <header v-if="!isNavigationVisible">  <!-- When isNavigationVisible === false header will be disappear -->
        <div class="header">       
            <div class="header__logo">{{ title }}</div>

            <div class="header__icons">
                <img class="header__search-icon" src="/svg/search.svg" alt="search-icon">

                <button @click="toggleNavigation"><img src="/svg/hamburger.svg" alt="hamburger-icon"></button>
            </div>
        </div>

        <Announcement />
    </header>

    <!-- Navigation shows when hamburger icon clicked -->
    <nav v-if="isNavigationVisible === true" class="navigation">
        <div class="navigation__logo">{{ title }}</div>

        <ul class="navigation__menu">
            <li v-for="page in navigationPages" :key="page.id">
                <a href="">{{ page.title }}</a>
            </li>
        </ul>

        <ul class="navigation__menu--desktop">
            <li>{{ about }}</li>

            <li>
                <div>{{instagram}} <img src="/svg/arrow.svg" alt="arrow-icon"></div>
                <div>{{twitter}} <img src="/svg/arrow.svg" alt="arrow-icon"></div>
            </li>

            <li>{{ info }}</li>
        </ul>

        <div class="navigation__icons" >
            <img class="navigation__search-icon" src="/svg/search.svg" alt="search-icon">

            <button @click="toggleNavigation"><img src="/svg/hamburger.svg" alt="hamburger-icon"></button>          <!-- toggleNavigation is toggling the navigation section -->
        </div>
    </nav> 
</template>

<script>
import Announcement from '../components/Announcement.vue';
	export default {
        components: {
            Announcement
        }, 

		data() {
			return {
                title: 'in(dex)',
                about: 'About Us',
                instagram: 'Instagram',
                twitter: 'Twitter',
                info: 'in@dex.info',
				isNavigationVisible: false,
			};
		},

        computed: {
            navigationPages() {
                return this.$store.getters.getNavigationPages;
            }
        },

		methods: {
			toggleNavigation() {
				this.isNavigationVisible = !this.isNavigationVisible;
			},
		},
	};
</script>


<style>
    .header {
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }

    .header__logo,
    .navigation__logo {
        font-size: 1.5rem;
        font-family: var(--main-font);
    }

    .header__icons, 
    .navigation__icons {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .header__icons img,
    .navigation__icons img {
        width: 5px;
    }

    .navigation {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        background: #E3E3E3;
        padding: 10px;
        font-family: var(--main-font);
        font-size: 25px; 
        position: absolute;
    }

    .navigation__menu {
        text-align: center;
        padding-top: 30px; 
    }

    .navigation__menu li,
    .navigation__menu--desktop li {
        list-style: none;
    }

    .navigation__menu li a {
        text-decoration: none;
        color: #000000;
    }

    .navigation__menu--desktop {
        display: none;
    }

    .navigation__menu--desktop li div img {
        width: 9px;
    }

    .navigation__menu--desktop li:nth-child(2) {
        padding: 20px 0;
    }

    /* Medium screen devices (768px and above) */
    @media screen and (min-width: 768px) {
        .navigation__menu--desktop {
            display: block;
        }  

        .header__icons img,
        .navigation__icons img {
            width: 32px;
        }
        
        .navigation__menu {
            text-align: left;
            padding-top: 0;  
        }
    }
</style>