<template>
  <!--<div id="app">-->
    <div class="container-fluid">
      <img src="./assets/bg.jpg">
      <router-view/>
    </div>
  <!--</div>-->
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body,#app{
    height:100%;
    overflow-x: hidden;
  }
  .container-fluid>img{
    width: 100%;
    height:100%;
    position:absolute;
    left: 0;
    top:0;
    z-index: -100;
    opacity:0.1;
  }
</style>
