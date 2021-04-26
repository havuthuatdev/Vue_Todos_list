<template>
  <div>
    <ul v-if="auth.isAuthenticated">
      <li>Done Total : {{doneTodo}}</li>
      <li>Finish: {{finish}}%</li>
      <li>List Total: {{total}} </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {
      total(){
          return this.$store.state.todos.length;
      },
      finish(){
          return Math.round((this.$store.state.todos.filter(todo => todo.completed).length)/(this.$store.state.todos.length)*100);
      },
      doneTodo(){
          return this.$store.getters.doneTodos;
      },
      ...mapState(['auth'])

  },
  //   methods:{
  //       plus(){
  //           return this.$store.state.result++;
  //       },
  //       plus(){
  //           return this.$store.state.result--;
  //       },
  //   }
};
</script>
<style scoped>
ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
}
</style>