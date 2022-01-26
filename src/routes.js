import Home from './views/Home.vue';
import FullArticleView from './views/FullArticleView.vue';
import AboutView from './views/AboutView.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'article', path: '/:article_id', component: FullArticleView },
	{ name: 'about', 		path: '/about-us', 		component: AboutView },
];

