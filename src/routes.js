import Home from './views/Home.vue';
import FullArticle from './views/FullArticle.vue';
import About from './views/About.vue';

export default [
	{ name: 'home', 		path: '/', 					component: Home },
	{ name: 'article', 		path: '/:article_slug', 	component: FullArticle, 	props: true }, 	/* set prop true to make it possible to send router as prop */
	{ name: 'about', 		path: '/about-us', 			component: About },
];

