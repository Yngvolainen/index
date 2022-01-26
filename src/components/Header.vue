<template>
    <!-- navigationVisible class shows only when the hamburger menu clicked -->
    <header class="header" v-bind:class="{navigationVisible: !isNavigationVisible}">       
        <div class="header__logo">{{ title }}</div>

        <nav class="header__navigation">
            <ul class="header__navigation-menu">
                <li v-for="page in navigationPages" :key="page.id">
                    <a href="">{{ page.title }}</a>
                </li>
            </ul>

            <ul class="header__navigation-menu--desktop">
                <li>{{ about }}</li>

                <li>
                    <div>{{instagram}} <img src="/svg/arrow.svg" alt="arrow-icon"></div>
                    <div>{{twitter}} <img src="/svg/arrow.svg" alt="arrow-icon"></div>
                </li>

                <li>{{ info }}</li>
            </ul>
        </nav>

        <div class="header__icons">
            <button class="header__icons-search"><img src="/svg/search.svg" alt="search-icon"></button>

            <!-- toggleNavigation toggling the class name -->
            <button class="header__icons-hamburger" @click="toggleNavigation"><img src="/svg/hamburger.svg" alt="hamburger-icon"></button>
        </div>
    </header>
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
				isNavigationVisible: true,
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
			}
		},
	};
</script>


<style>
    .header-section {
        margin-bottom: var(--heading);
    }

    .header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 40;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: var(--column-gap);
        margin: var(--lineheight-xsmall) 0;
        transition: all .15s cubic-bezier(.23,1,.32,1);
    }

    .header__logo {
        font-size: var(--body);
        font-family: var(--main-font);
        grid-column: 1/ span 2;
        margin-left: var(--lineheight-xsmall);
    }

    .header__icons {
        display: flex;
        flex-direction: row;
        justify-content: right;
        align-items: flex-start;
        gap: 5px;
        grid-column: 11/ span 2;
        margin-right: var(--lineheight-small);
        padding-top: var(--lineheight-xsmall);
    }

    .header__icons button img {
        width: 22px;
    }

    .header__navigation {
        /* background: var(--secondary); */
        transform: translateY(-120%);
        transition: all .3s cubic-bezier(.23,1,.32,1);
        font-size: var(--body);
        font-family: var(--main-font);  
        grid-column: 4/ span 7;
        margin-top: var(--lineheight-medium);
        z-index: 15;
        overflow: hidden; 
    }

    .header__navigation-menu {
        text-align: center;   
    }

    .header__navigation-menu li,
    .header__navigation-menu--desktop li {
        list-style: none;   
    }

    .header__navigation-menu li a,
    .header__navigation-menu--desktop a {
        text-decoration: none;
        color: var(--primary);
    }

    .header__navigation-menu--desktop {
        display: none;
    }

    .header__navigation-menu--desktop li div img {
        width: 9px;
    }

    .header__navigation-menu--desktop li:nth-child(2) {
        padding: var(--lineheight-small) 0;
    }

    /* When navigation is visible navigationVisible class applies */
    .navigationVisible{
        background: var(--secondary);
    }
 
    .navigationVisible .header__navigation{
        transform: translateY(0);
    }

    /* Medium screen devices (968px and above) */
    @media screen and (min-width: 968px) {
        .header__navigation-menu--desktop {
            display: block;
        }  

        .header__icons {
            grid-column: 12/ span 1;
        }
        
        .header__navigation{ 
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: var(--column-gap);
            grid-column: 6/ span 6;
            transform: translateY(-110%);
            transition: all .3s cubic-bezier(.23,1,.32,1);
            margin-top: 0; 
        }

        .header__navigation .header__navigation-menu {
            text-align: left; 
        }
    }
</style>