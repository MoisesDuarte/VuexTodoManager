import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

// Carregar Vuex
Vue.use(Vuex);

// Criar Store
export default new Vuex.Store({
    modules: {
        todos
    }
});
