
import HomeView from '@/views/HomeView.vue'
const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue') },
    { path: '/suspence', name: 'suspence', component: () => import(/* webpackChunkName: "about" */ '@/views/Suspense.vue') },
    // { path: '/html', name:'html', component: () => import('@/html/index.html') }
];

export default routes;