import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import database from '../database.js'
import routes from '../routes.js';

const app_store = createStore(database);
const app_router = createRouter({
	routes: routes,
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {		/* to scroll to top of page when article in homepage clicked. Source: https://router.vuejs.org/guide/advanced/scroll-behavior.html#async-scrolling (and https://levelup.gitconnected.com/changing-scroll-behavior-with-vue-router-c543fb39144a for using 'left' & 'top' instead of 'x' & 'y'. 	*/
		return { left: 0, top: 0 };
	  }
})

createApp(App)
	.use(app_store)
	.use(app_router)
	.mount('#app');