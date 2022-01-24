import Home from './views/Home.vue';
import FirstArticleView from './views/FirstArticleView.vue';
import ThirdArticleView from './views/ThirdArticleView.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'first article', path: '/the-institute-of-the-cosmos', component: FirstArticleView },
	{ name: 'third article', path: '/mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency', component: ThirdArticleView },	
];
