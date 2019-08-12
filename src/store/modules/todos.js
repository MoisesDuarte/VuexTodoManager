import axios from 'axios';

const state = {
    todos: [
        
    ]
};

const getters = {
    allTodos: (state) => state.todos // Retorna propriedade todos de state
};

const actions = {
    async fetchTodos({ commit }) { // CarregaTodos
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        commit('setTodos', response.data); // Chamando mutation setTodos com commit
    },
    async addTodo({ commit }, title) { // AdicionaTodos
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });

        commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id) { // deletaTodo
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos), // Todos que são passados pela função são passados para o array todos em state
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id) // Filtra ids que não são iguais ao id passado e então deleta o todo com id igual
};

export default {
    state,
    getters,
    actions,
    mutations
}