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
  /* min-height: 100vh; */
  width: 100vmin;
  height: 100%;
}
body {
  margin: 0;
}
/* fix width for tablets & laptop*/
@media screen and (min-width: 480px){
  #app {
    width: 480px; /*// 웹뷰 해, 달, 별만 위치 망가짐 ㅜㅜ!*/
    /* width: 100vmin; /*웹뷰 엄청 깨짐! */
    margin: 0 auto;
  }
}
</style>
