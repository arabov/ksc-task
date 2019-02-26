import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        { path: '/', redirect: '/addData' },
        { path: '/addData', component: () => import('./../components/AddData.vue') },
        { path: '/data', component: () => import('./../components/Data.vue') },
        { path: '/logs', component: () => import('./../components/Logs.vue') }
    ]
});
