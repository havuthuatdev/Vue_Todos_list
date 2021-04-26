<template>
    <ul>
        <li>
            <button @click="login"  v-if="auth.isAuthenticated">Login</button>
            <button @click="Logout" v-if="!auth.isAuthenticated">Logout</button>
        </li>
    </ul>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name: "headers",
    computed:{
        ...mapState(["auth"])
    },
    methods:{
        login(){
            this.$store.commit('TOGGLE_AUTH');
        },
        Logout(){
            this.$store.commit('TOGGLE_AUTH');
        }
    }
}
</script>
<style scoped>
li {
  /* padding: 10px 0px;
  border: 2px solid yellow; */
  list-style: none;
}
</style>