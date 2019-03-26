<template>
  <div class="content" >
    <my-menu />
    <my-home />
  </div>
</template>

<script>
import myMenu from '@/components/menu'
import myHome from '@/components/home/home'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    myMenu,
    myHome
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    width:70%;margin:0 auto;max-width:1330px
  }
  @media screen and (max-width: 768px){
    .content{
      width: 90%;
    }
  }
</style>
