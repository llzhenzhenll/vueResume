<template>
  <div class="homeBox" style="position: relative;left:-5%;width:100%;height:0;padding:30%;">
    <div class="introductionBox" />
    <div class="phoneBox" />
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .introductionBox{
    width:28%;
    height:50%;
    background: #CEF2F5;
    position: absolute;
    left:0%;
    top:7%;
    z-index: 100;
  }
  .phoneBox{
    width:38%;
    height:65%;
    position: absolute;
    left:25%;
    top:0;
    z-index: 10;
    background: -webkit-radial-gradient(#DEB4B5,#f0f0f0 ); /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient(#DEB4B5,#f0f0f0 ); /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient(#DEB4B5,#f0f0f0 ); /* Firefox 3.6 - 15 */
    background: radial-gradient(#DEB4B5,#f0f0f0 ); /* 标准的语法 */
  }
  @media screen and (max-width: 1200px){
    .introductionBox{
      width:375px;
      height:251px;
      left:0%;
      top:39px;
    }
    .phoneBox{
      width:510px;
      height:328px;
      left:25%;
      top:0;
    }
  }
  @media screen and (max-width: 1090px){
    .introductionBox{
      width:350px;
      height:250px;
      left:0%;
      top:25px;
    }
    .phoneBox{
      width:450px;
      height:300px;
      left:25%;
      top:0;
    }
  }
  @media screen and (max-width: 960px){
    .homeBox{
      left:-6%;
    }
    .introductionBox{
      width:70%;
      height:100px;
      left:0%;
      top:200px;
    }
    .phoneBox{
      width:70%;
      height:200px;
      left:0;
      top:0px;
    }
  }
  /*@media screen and (max-width: 320px){*/
    /*body{*/
      /*background-color:#FFFF00;*/
    /*}*/
  /*}*/
</style>
