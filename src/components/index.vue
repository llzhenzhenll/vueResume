<template>
  <div class="content" >
    <div class="row">
      <div class="col-12">
        <my-menu :screenWidth="screenWidth"/>
      </div>
      <div class="col-md-4" v-if="screenWidth>767">
        <my-sidebar />
      </div>
      <div class="col-xs-12 col-md-8">
        <my-blog />
      </div>
    </div>
  </div>
</template>

<script>
import myMenu from '@/components/menu'
import mySidebar from '@/components/sidebar'
import myBlog from '@/components/blog'
export default {
  name: 'HelloWorld',
  data () {
    return {
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
    myMenu,
    mySidebar,
    myBlog
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
