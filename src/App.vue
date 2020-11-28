<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
body {
  margin: 0;
}
/* fix width for tablets & laptop*/
@media screen and (min-width: 480px){
  #app {
    width: 480px;
    margin: 0 auto;
  }
}
</style>
