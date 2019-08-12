import axios from 'axios';

const state = {
    todos: [
        
    ]
};

const getters = {
    allTodos: (state) => state.todos // Retorna propriedade todos de state
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        commit('setTodos', response.data); // Chamando mutation setTodos com commit
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });

        commit('newTodo', response.data)
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos), // Todos que são passados pela função são passados para o array todos em state
    newTodo: (state, todo) => state.todos.unshift(todo)
};

export default {
    state,
    getters,
    actions,
    mutations
}