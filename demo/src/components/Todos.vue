<template>
  <div id="todo" v-if="auth.isAuthenticated">
    <h1>Todos list</h1>
    <ul>
      <Todoform />
      <li  v-for="todo in todos" :key="todo.id" :class="todo.completed ? 'completed' : ''">{{ todo.title }}
        <input type="checkbox" :checked="todo.completed" @change="markTodoCompleted(todo.id)">
        <button @click ="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import Todoform from './TodoForm.vue'
export default {
  name: "Todos",
  components:{Todoform},
  // mapGetters,
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['todos']),
    ...mapState(['completed','auth']),
    // todos() {
    //   return this.$store.state.todos;
    // },
    // completed() {
    //   return this.$store.state.todos.completed;
    // },
    // ...mapState(['auth'])
    // displayName(){
    //   return this.$store.getters.addName;
    // }
  },
  methods: {
      markTodoCompleted(todoId){
        this.$store.commit('MARK_COMPLETE', todoId);
      },
      deleteTodo(todoId){
        this.$store.dispatch('deleteTodo', todoId)
      }
    }
  // Mỗi lần chúng ta khai báo nhiều getters. Nó sẽ phải gọi lại nhiều lần trong Computed.
  // Nó sẽ rất rối. Ta sử dụng mapGetters(['','',''....])
  // Để có thể sử dụng nó chúng ta phải import nó vào component.
  // computed: mapGetters([
  //   'tenResult',
  //   'addName'
  // ]),
  // Vậy là đã xong. Chỉ việc thêm tên hàm của getters vào là xong.
  // Nhưng có trường hợp xảy ra, bây h tôi muốn thêm 1 hàm trong computed thì phải làm sao ?
  // Vì vậy SE6 đã hỗ trợ trường hợp này. Chúng ta vẫn viết hàm computed: {} bình thường, sau đó ta thêm ...mapGetters(['','',''....])
  // vào trong thế là xong | dấu ... ở phía trước thể hiện chức năng có thể push 1 hàm nào đó vào computed.
  // vd dưới đây:
  // computed: {
  //   ...mapGetters([
  //     'tenResult',
  //     'addName',]),
  //     getAPI: function(){}
};
</script>
<style scoped>
#todo {
  background-color: bisque;
}
ul {
  background-color: teal;
  color: white;
  padding: 0;
}
li {
  padding: 10px 0px;
  border: 2px solid yellow;
  list-style: none;
}
.completed{
  background-color: red;
}
</style>