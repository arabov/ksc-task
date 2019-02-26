import Vue from 'vue';
import './plugins/vuetify';
import './plugins/vuesocketio';
import router from './plugins/vuerouter';
import store from './plugins/vuex';
import App from './App.vue';

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
