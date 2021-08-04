<template>
<div id="app">vue3 template</div>
  <router-link to='/home'>Home | </router-link>
  <router-link to='/order'>Order | </router-link>
  <router-link to='/my'>My | </router-link>
  <router-view />
</template>

<script>

export default {
  name: 'App'
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
