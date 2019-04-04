<template>
  <div class="row">
    <div class="col-md-4" v-if="screenWidth>767">
      <my-sidebar />
    </div>
    <div class="col-xs-12 col-md-8">
      <my-blog :screenWidth="screenWidth"/>
    </div>
  </div>
</template>

<script>
import mySidebar from '@/components/sidebar'
import myBlog from '@/components/blog'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  props: ['screenWidth'],
  components: {
    mySidebar,
    myBlog
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
