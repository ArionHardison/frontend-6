import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

Vue.use( VueRouter );
Vue.use( VueMeta );

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import( './views/index/index' ),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import( './views/about/index' ),
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import( './views/contacts/index' ),
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import( './views/projects/index' ),
    },
    {
        path: '/project-inside',
        name: 'project-inside',
        component: () => import( './views/project-inside/index' ),
    },
    {
        path: '/news',
        name: 'news',
        component: () => import( './views/news/index' ),
    },
    {
        path: '/news-single-post',
        name: 'news-single-post',
        component: () => import( './views/news-single-post/index' )
    },
    {
        path: '/search-results',
        name: 'search-results',
        component: () => import( './views/search-results/index' )
    },
    {
        path: '/services',
        name: 'services',
        component: () => import( './views/services/index' )
    },
    {
        path: '/service-inside',
        name: 'service-inside',
        component: () => import( './views/service-inside/index' )
    },
    {
        path: '/ui',
        name: 'ui',
        component: () => import( './views/ui/index' )
    },
    {
        path: '/404',
        name: '404',
        component: () => import( './views/404/index' )
    },
    {
        path: '*',
        redirect: '/404'
    }
];

const router = new VueRouter( {
    routes,
    scrollBehavior( to, from, savedPosition ) {
        if ( to.hash ) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            }
        } else if ( savedPosition ) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    mode: 'history'
} );

export default router;
