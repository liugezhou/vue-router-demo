<template>
<div id="app">vue3 template</div>
  <router-link to='/home'>Home | </router-link>
  <router-link to='/order'>Order | </router-link>
  <router-link to='/my'>My | </router-link>
  <test-component/>
  <button @click="jump">Jump</button>
  <router-view />
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  setup(){
    const router = useRouter();
    return{
      jump(){
        // eslint-disable-next-line no-debugger
        debugger
        router.push('/order')
      }
    }
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
