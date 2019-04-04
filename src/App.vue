<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <my-menu :screenWidth="screenWidth"/>
        </div>
      </div>
      <transition  :name="transitionName">
        <router-view :screenWidth="screenWidth" />
      </transition>
    </div>
  </div>
</template>

<script>
import myMenu from '@/components/menu'
export default {
  name: 'App',
  data: function () {
    return {
      transitionName: 'slide-left',
      screenWidth: document.documentElement.clientWidth
    }
  },
  mounted () {
    var _this = this
    window.onresize = function () { // 定义窗口大小变更通知事件
      _this.screenWidth = document.documentElement.clientWidth
    }
  },
  components: {
    myMenu
  },
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
