<template class="menu">
  <div class="menu">
      <div class="my-name">
        刘珍珍
      </div>
      <ul>
        <li v-for="(item,key) in menuList" :key=key>
          <a
            v-bind:class="{ active: activeMenu===item.id }"
            @click="menuClick(item.id)"
            href="#"
          >{{item.name}}</a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'myMenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeMenu: 1,
      menuList: [
        {id: 1, name: '首页'},
        {id: 2, name: '关于我'},
        {id: 3, name: '我的足迹'},
        {id: 4, name: '联系我'}
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  height:100%;
  line-height: 200px;
  float: right;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  padding:5px 10px;
  color: #125A66;
  text-decoration: none;
}
a:hover,a.active{
  color:#8EE5ED;
}
.menu{
  width:100%;
  height:200px;
}
.my-name{
  font-size: 30px;
  float: left;
  line-height: 200px;
  background-image: -webkit-linear-gradient(left,#125A66,#C0182F,#F0BD54);
  -webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值 */
  -webkit-text-fill-color: transparent; /*text-fill-color会覆盖color所定义的字体颜色： */
}
@media screen and (max-width: 768px){
  ul{
    width: 25px;
    height:25px;
    overflow: hidden;
  }
}
</style>
