import Home from './views/Home.vue';
/* import FirstArticleView from './views/FirstArticleView.vue';
import ThirdArticleView from './views/ThirdArticleView.vue'; */
import FullArticleView from './views/FullArticleView.vue';
import AboutView from './views/AboutView.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'article', path: '/:article_id', component: FullArticleView },
	/* { name: 'first article', path: '/the-institute-of-the-cosmos', component: FirstArticleView },
	{ name: 'third article', path: '/mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency', component: ThirdArticleView },	 */
	{ name: 'about', 		path: '/about-us', 		component: AboutView },
];

