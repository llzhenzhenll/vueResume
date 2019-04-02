<template class="menu">
  <div style="position: relative">
    <nav class="navbar navbar-expand-md navbar-light bg-light row">
      <div class="container">
        <a class="navbar-brand col-2" href="#">
          <img src="../assets/logo.jpg" alt="" style="float: left">
          LOGO
        </a>
        <div
          @click="unScroll"
          style="text-align: right;padding: 0 15px;"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse col-10" id="navbarSupportedContent1">
          <!--<div class="row">-->
          <ul class="col-8 navbar-nav mr-auto ">
            <div class="col-sm-12 col-md-4">
              <li class="nav-item active">
                <a class="nav-link" href="#">博客 <span class="sr-only">(current)</span></a>
              </li>
            </div>
            <div class="col-sm-12 col-md-4">
              <li class="nav-item">
                <a class="nav-link" href="#">关于我 <span class="sr-only">(current)</span></a>
              </li>
            </div>
            <div class="col-sm-12 col-md-4">
              <li class="nav-item">
                <a class="nav-link" href="#">和我联系 <span class="sr-only">(current)</span></a>
              </li>
            </div>
            <!--<li class="nav-item dropdown">-->
            <!--<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
            <!--Dropdown-->
            <!--</a>-->
            <!--<div class="dropdown-menu" aria-labelledby="navbarDropdown">-->
            <!--<a class="dropdown-item" href="#">Action</a>-->
            <!--<a class="dropdown-item" href="#">Another action</a>-->
            <!--<div class="dropdown-divider"></div>-->
            <!--<a class="dropdown-item" href="#">Something else here</a>-->
            <!--</div>-->
            <!--</li>-->
          </ul>
          <div class="col-sm-12 col-md-4 input-group">
            <input type="text" class="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              <img src="../assets/search.png" alt="">
            </span>
            </div>
          </div>
          <!--</div>-->

        </div>
      </div>
    </nav>
    <div class="menuPage" :style="[screenHeight]">
      <button @click="removeUnScroll">返回</button>
      <ul class=" navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">博客 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">关于我 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">和我联系 <span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'myMenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeMenu: 1,
      screenHeight: {height: document.documentElement.offsetHeight + 'px'}
      // menuList: [
      //   {id: 1, name: '首页'},
      //   {id: 2, name: '关于我'},
      //   {id: 3, name: '我的足迹'},
      //   {id: 4, name: '联系我'}
      // ]
    }
  },
  methods: {
    menuClick: function (id) {
      this.activeMenu = id
    },
    unScroll: function () {
      $('.menuPage').animate({left: '-16px'}, 'slow', function (){
        $('body').css('overflow', 'hidden')
      })
    },
    removeUnScroll: function () {
      $('.menuPage').animate({left: '2000px'}, 'slow', function (){
        $('body').css('overflow-y', 'auto')
      })
    }
  },
  mounted () {
    var _this = this
    window.onresize = function () { // 定义窗口大小变更通知事件
      _this.screenHeight = {height: document.documentElement.offsetHeight + 'px'}
      // _this.scrollWidth = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
      // _this.isShow = _this.scrollWidth ? _this.screenWidth > 751 : _this.screenWidth > 767
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
  text-align: center;
}
  .navbar{
    background-color: transparent !important;
    border-bottom: 1px solid #ccc;
  }
  .active>.nav-link{
    color:#A2C2A3 !important;
  }
  .nav-link{
    color:rgba(0,0,0,.5) !important;
  }
  .navbar-brand>img{
    width: 60px;
  }
  .navbar-brand{
    margin-right:0;
    line-height: 88px;
  }
  ul li{
    list-style: none;
  }
.menuPage{
  width: 100%;
  position: absolute;
  padding: 16px;
  box-sizing: initial;
  top: 0;
  left: 2000px;
  background: #fff;
  z-index: 1000;
}
</style>
