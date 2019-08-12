<template>
  <div>
      <h3>Todos</h3>
      <div class="legend">
        <span>Click duplo para marcar como completo</span>
        <span>
          <span class="incomplete-box"></span> = Incompleto
        </span>
        <span>
          <span class="complete-box"></span> = Completo
        </span>
      </div>
      <div class="todos">
        <div @dblclick="onDblClick(todo)" v-for="todo in allTodos" :key="todo.id" class="todo" v-bind:class="{'is-complete': todo.completed}">
          {{ todo.title }}
          <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Todos",
    methods: {
      ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']), // Mapeando actions de todo.js para o componente
      onDblClick(todo) {
        const updTodo = { // Objeto todo com dados do todo selecionado
          id: todo.id,
          title: todo.title,
          completed: !todo.completed // Retorna o oposto do valor de completed
        }

        this.updateTodo(updTodo);
      }
    },
    computed: mapGetters(['allTodos']), // Getters que seram usados no componente
    created() { // Estágio inicial da criação em lifecycle do vue
      this.fetchTodos(); // Chamando ação fetch todos
    }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>