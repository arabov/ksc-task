import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../routes';

Vue.use(VueRouter);

export default new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: routes.concat({ path: '/', redirect: '/addData' })
});
