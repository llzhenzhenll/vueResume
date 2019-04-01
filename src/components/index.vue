<template>
  <div class="content" >
    <div class="row">
      <div class="col-12">
        <my-menu />
      </div>
      <div class="col-md-4">
        <my-sidebar />
      </div>
      <div class="col-md-8">
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
      msg: 'Welcome to Your Vue.js App'
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
  /*.content{*/
    /*width:70%;margin:0 auto;max-width:1330px*/
  /*}*/
  /*@media screen and (max-width: 768px){*/
    /*.content{*/
      /*width: 90%;*/
    /*}*/
  /*}*/
</style>
