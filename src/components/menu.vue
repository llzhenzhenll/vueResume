<template class="menu">
  <nav class="navbar navbar-expand-md navbar-light bg-light row">
    <div class="container">
    <a class="navbar-brand col-2" href="#">
      <img src="../assets/logo.png" alt="">
      LOGO
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse col-10" id="navbarSupportedContent">
      <!--<div class="row">-->
        <ul class=" col-8 navbar-nav mr-auto ">
          <div class="col-4">
            <li class="nav-item active">
              <a class="nav-link" href="#">博客 <span class="sr-only">(current)</span></a>
            </li>
          </div>
          <div class="col-4">
            <li class="nav-item">
              <a class="nav-link" href="#">关于我 <span class="sr-only">(current)</span></a>
            </li>
          </div>
          <div class="col-4">
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
        <div class=" col-4 input-group">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">@</span>
          </div>
        </div>
      <!--</div>-->

    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'myMenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeMenu: 1
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
  img{
    width: 60px;
  }
</style>
