import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      todos:[
        {id: 1, title: 'đi chợ', completed: false},
        {id: 2, title: 'code', completed: false},
        {id: 3, title: 'ngủ', completed: false},
        {id: 4, title: 'ăn', completed: false},
        {id: 5, title: 'tắm giặt', completed: false},
      ],
      auth: {
        isAuthenticated: true
      }
    },
    // nó cũng tương tự như data thôi, nhưng nó có thể biến đổi dựa trên data.
    getters:{
      todos: state => {
        return state.todos;
      },
      doneTodos: state => {
        return state.todos.filter(todo => todo.completed).length;
      }
    },
    actions:{
      deleteTodo({commit}, todoId){
        commit('DELETE_TODO', todoId)
      },
      addTodo({commit},newTodo){
        commit('ADD_TODO',newTodo)
      }
    },
    mutations:{
      TOGGLE_AUTH(state){
        state.auth.isAuthenticated = !state.auth.isAuthenticated
      },
      MARK_COMPLETE(state,todoId){
        state.todos.map(todo => {
          if (todo.id === todoId) todo.completed = !todo.completed
          return todo;
        })
      },
      DELETE_TODO(state, todoId){
        state.todos = state.todos.filter(todo => todo.id !== todoId)
      },
      ADD_TODO(state, newTodo){
        state.todos.unshift(newTodo)
      }
    },

  })