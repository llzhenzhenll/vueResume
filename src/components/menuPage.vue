<template class="menu">
  <div class="menuPage row">
    <div
      style="borderRight:1px solid #ccc;width:100px;display: inline-block"
      :style="{height:pageHeight}"
    >
        <router-link to="/"
         style="display: block;
          width: 100%;
          text-decoration: none;"
        >
          <span style="display: block;
              width: 100%;
              text-align: center;
               font-size: 3em;
               color:#A2C2A3"
          >×</span>
        </router-link>
    </div>
    <div style="display: inline-block;padding:16px">
      <ul class=" navbar-nav mr-auto">
        <li
          class="nav-item"
          v-for="(item, key) in menuList"
          :key="key"
          :class="{active:activeMenu===item.id}"
        >
          <a class="nav-link" href="#">
            {{item.name}}
            <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuPage',
  data () {
    return {
      activeMenu: this.$route.query.id,
      pageHeight: document.documentElement.clientHeight - 1 + 'px',
      menuList: [
        {id: 1, name: '博客'},
        {id: 2, name: '关于我'},
        {id: 3, name: '和我联系'}
      ]
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
  .active>.nav-link{
    color:#A2C2A3 !important;
  }
  .nav-link{
    color:rgba(0,0,0,.5) !important;
  }
  .navbar-brand>img{
    width: 60px;
  }
  ul li{
    list-style: none;
  }
  .menu{
    overflow: hidden;
  }
.menuPage{
  width: 100%;
  /*padding: 16px;*/
  background: transparent;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
