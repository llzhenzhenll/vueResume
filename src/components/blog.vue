<template>
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
      <div class="col-xs-12" >
        blog
      </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row>div{
    padding: 0;
    position: relative;
    min-height: 500px;
  }
  /*.introductionBox{*/
    /*width:450px;*/
    /*height:300px;*/
    /*background: #CEF2F5;*/
    /*position: absolute;*/
    /*left:15%;*/
    /*top:40px;*/
    /*z-index: 100;*/
  /*}*/
  /*.phoneBox{*/
    /*width:600px;*/
    /*height:400px;*/
    /*position: absolute;*/
    /*left:10%;*/
    /*top:0;*/
    /*z-index: 10;*/
    /*background: -webkit-radial-gradient(#DEB4B5,#f0f0f0 ); !* Safari 5.1 - 6.0 *!*/
    /*background: -o-radial-gradient(#DEB4B5,#f0f0f0 ); !* Opera 11.6 - 12.0 *!*/
    /*background: -moz-radial-gradient(#DEB4B5,#f0f0f0 ); !* Firefox 3.6 - 15 *!*/
    /*background: radial-gradient(#DEB4B5,#f0f0f0 ); !* 标准的语法 *!*/
  /*}*/
  /*@media screen and (max-width: 1200px){*/
    /*.introductionBox{*/
      /*width:375px;*/
      /*height:251px;*/
      /*left:20%;*/
      /*top:39px;*/
    /*}*/
    /*.phoneBox{*/
      /*width:510px;*/
      /*height:328px;*/
      /*left:10%;*/
      /*top:0;*/
    /*}*/
  /*}*/
  /*@media screen and (max-width: 1090px){*/
    /*.introductionBox{*/
      /*width:350px;*/
      /*height:250px;*/
      /*left:20%;*/
      /*top:25px;*/
    /*}*/
    /*.phoneBox{*/
      /*width:450px;*/
      /*height:300px;*/
      /*left:10%;*/
      /*top:0;*/
    /*}*/
  /*}*/
  /*@media screen and (max-width: 960px){*/
    /*!*.homeBox{*!*/
      /*!*left:-6%;*!*/
    /*!*}*!*/
    /*.introductionBox{*/
      /*width:70%;*/
      /*height:100px;*/
      /*left:20%;*/
      /*top:200px;*/
    /*}*/
    /*.phoneBox{*/
      /*width:70%;*/
      /*height:200px;*/
      /*left:10%;*/
      /*top:50px;*/
    /*}*/
  /*}*/
  /*@media screen and (max-width: 992px){*/
    /*.row>div{*/
      /*min-height: 100px;*/
    /*}*/
    /*.introductionBox{*/
      /*width:350px;*/
      /*height:250px;*/
      /*left:-10%;*/
      /*top:25px;*/
    /*}*/
    /*.phoneBox{*/
      /*width:450px;*/
      /*height:300px;*/
      /*left:8%;*/
      /*top:0px;*/
    /*}*/
  /*}*/
</style>
