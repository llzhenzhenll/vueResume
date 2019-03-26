<template>
  <div id="app">
    <img src="./assets/bg.jpg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body,#app{
    height:100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
  img{
    width: 100%;
    height:100%;
    position:absolute;
    left: 0;
    top:0;
    z-index: -100;
    opacity:0.3;
  }
</style>
