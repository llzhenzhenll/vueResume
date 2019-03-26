<template>
  <div>
    <ul>
      <li v-for="item in menuList">
        <a
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
      active: 1,
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
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
}
.activeMenu {
  color:red
}
.menu{
  width:70%;
  height:100px;
  margin: 0 auto;
}
</style>
