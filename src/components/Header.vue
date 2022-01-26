<template>
    <section class="header-section">
        <!-- navigationVisible class shows only when the hamburger menu clicked -->
        <header class="header" v-bind:class="{navigationVisible: !isNavigationVisible}"> 
            <RouterLink class="header__navigation-link" :to="{ name: 'home', path: '/', component: Home}">      
                <div class="header__logo">{{ title }}</div>
            </RouterLink>

            <nav class="header__navigation">
                <ul class="header__navigation-menu">
                    <li v-for="page in navigationPages" :key="page.id">
                        <a href="">{{ page.title }}</a>
                    </li>
                </ul>
			
                <RouterLink class="header__navigation-link" :to="{ name: 'about', path: '/about-us', component: AboutView }">
                    <ul class="header__navigation-menu--desktop">
                        <li>{{ about }}</li>

                        <li>
                            <div>{{instagram}} <img src="/svg/arrow.svg" alt="arrow-icon"></div>
                            <div>{{twitter}} <img src="/svg/arrow.svg" alt="arrow-icon"></div>
                        </li>

                        <li>{{ info }}</li>
                    </ul>
                </RouterLink>
            </nav>

            <div class="header__icons">
                <button class="header__icons-search"><img src="/svg/search.svg" alt="search-icon"></button>

                <!-- toggleNavigation toggling the class name -->
                <button class="header__icons-hamburger" @click="toggleNavigation"><img src="/svg/hamburger.svg" alt="hamburger-icon"></button>
            </div>
        </header>
    </section>
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
    .header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 40;
        display: grid;
        grid-template-columns: var(--grid-column-12);
        column-gap: var(--gap-big);
        /* margin-bottom: var(--bottom-xsmall); */
        transition: all .15s cubic-bezier(.23,1,.32,1);
        overflow: hidden;
    }

    .header__logo {
        font-size: var(--body);
        font-family: var(--main-font);
        grid-column: 1/ span 2;
        margin: var(--top-xsmall) 0 0 var(--left-small);
    }

    .header__icons {
        display: flex;
        flex-direction: row;
        justify-content: right;
        align-items: flex-start;
        gap: var(--gap-big);
        grid-column: 10/ span 3;
        margin: var(--top-xsmall) var(--right-small) 0 0;
        padding-top: var(--top-xsmall);
    }

    .header__icons-search {
        width: 22px;
    }

    .header__icons-hamburger {
        width: 30px;
    }

    .header__navigation {
        /* background: var(--secondary); */
        transform: translateY(-120%);
        transition: all .3s cubic-bezier(.23,1,.32,1); 
        font-family: var(--main-font);  
        grid-column: 2/ span 8;
        margin-top: var(--top-medium);
        z-index: 15;
        overflow: hidden;
        padding: 10px 0; 
    }

    .header__navigation-menu {
        text-align: center;
    }

    .header__navigation-menu li,
    .header__navigation-menu--desktop li {
        list-style: none;     
    }

    .header__navigation-link,
    .header__navigation-menu li a,
    .header__navigation-menu--desktop a {
        text-decoration: none;
        color: var(--primary);
        font-size: var(--body);   
    }

    .header__navigation-menu--desktop {
        display: none;
           
    }

    .header__navigation-menu--desktop li div img {
        width: 14px;
    }

    .header__navigation-menu--desktop li:nth-child(2) {
        padding: var(--bottom-small) 0;
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

        .header__navigation-menu--desktop li > *,
        .header__navigation-menu--desktop li {
            font-size: var(--body);
        }

        .header__icons {
            grid-column: 12/ span 1;
        }
        
        .header__navigation{ 
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: var(--gap-big);
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