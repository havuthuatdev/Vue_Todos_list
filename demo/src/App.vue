<template>
  <div id="app">
    <Header />
    <Navbar />
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import Navbar from "./components/Navbar.vue";
import Header  from "./components/Headers.vue";
// import Counters from './components/counters.vue'
export default {
  components: { Todos, Navbar, Header },
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 10px 100px;
}
</style>
