import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        logs: [],
        data: [],
        form: {
            title: '',
            text: ''
        }
    },
    getters: {
        logs: (state) => state.logs,
        data: (state) => state.data,
        title: (state) => state.form.title,
        text: (state) => state.form.text,
    },
    mutations: {
        socket_update_all(state, obj) {
            state.logs = obj.logs;
            state.data = obj.data;
        },
        update_title(state, title) {
            state.form.title = title;
        },
        update_text(state, text) {
            state.form.text = text;
        }
    }
});
