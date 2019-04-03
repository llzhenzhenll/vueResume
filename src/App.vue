<template>
  <div id="app">
    <div class="container-fluid">
      <!--<img src="./assets/bg.jpg">-->
      <transition  :name="transitionName">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      transitionName: 'slide-left'
    }
  },
  // watch: {
  //   '$route' (to, from) {
  //     const toDepth = to.path.split('/').length
  //     const fromDepth = from.path.split('/').length
  //     this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  //   }
  // },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  }
}
</script>

<style>
  html,body,#app{
    height:100%;
    overflow-x: hidden;
    background-color: #f0f0f0;
  }
  .container-fluid{
    background-color: #fff;
    max-width: 1200px;
  }
  .container>img{
    width: 100%;
    height:100%;
    position:absolute;
    left: 0;
    top:0;
    z-index: -100;
    opacity:0.1;
  }
</style>
