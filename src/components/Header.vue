<template>
    <header v-if="!isNavigationVisible">  <!-- When isNavigationVisible === false header will be disappear -->
        <div class="header">       
            <div class="header__logo">{{ title }}</div>

            <div class="header__icons">
                <img class="header__search-icon" src="/svg/search.svg" alt="search-icon">

                <button @click="toggleNavigation"><img src="/svg/hamburger.svg" alt="hamburger-icon"></button>
            </div>
        </div>

        <Announcement />            <!-- Announcement shows only in thwe top (not fixed) -->
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
            <button>
                <img class="navigation__search-icon" src="/svg/search.svg" alt="search-icon">
            </button>

            <button @click="toggleNavigation">                          <!-- toggleNavigation is toggling the navigation section -->
                <img src="/svg/hamburger.svg" alt="hamburger-icon">
            </button>          
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
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        padding-top: 10px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        z-index: 400;
    }

    .header__logo,
    .navigation__logo {
        font-size: var(--body);
        font-family: var(--main-font);
        grid-column: 1/ span 3;
    }

    .header__icons, 
    .navigation__icons {
        display: flex;
        flex-direction: row;
        justify-content:right;
        align-items: flex-start;
        padding: 10px 0;
        gap: 5px;
        grid-column: 11/ span 2;
    }

    .header__icons img,
    .navigation__icons img {
        width: 32px;
    }

    .navigation {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        background: var(--secondary);
        padding-top: 10px;
        font-family: var(--main-font);
        font-size: var(--body); 
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 400;

    }

    .navigation__menu {
        text-align: center;
        padding-top: 50px; 
        grid-column: 4/ span 6;

    }

    .navigation__menu li,
    .navigation__menu--desktop li {
        list-style: none;
    }

    .navigation__menu li a {
        text-decoration: none;
        color: var(--primary);
    }

    .navigation__menu--desktop {
        display: none;
    }

    .navigation__menu--desktop li div img {
        width: 9px;
    }

    .navigation__menu--desktop li:nth-child(2) {
        padding: var(--lineheight-small) 0;
    }

    /* Medium screen devices (768px and above) */
    @media screen and (min-width: 768px) {
        .navigation__menu--desktop {
            display: block;
            grid-column: 9/ span 2 ;
        }  

        .header__icons, 
        .navigation__icons {
            grid-column: 12/ span 1;
        }

        .header__icons img,
        .navigation__icons img {
            width: 32px;
        }
        
        .navigation__menu {
            /* text-align: left; */
            padding-top: 0;  
            grid-column: 6/ span 2;
        }
    }
</style>