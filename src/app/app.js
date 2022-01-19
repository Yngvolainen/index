import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import database from '../database.js'
import routes from '../routes.js';

const app_store = createStore(database);
const app_router = createRouter({
	routes: routes,
	history: createWebHistory()
})

createApp(App)
	.use(app_store)
	.use(app_router)
	.mount('#app');