<template class="menu">
  <div class="sidebarBox">
    <h6>博客分类</h6>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, key) in classification"
        :key=key
        :class="{ active: isActive===item.id }"
      >
        {{item.name}}
      </li>
    </ul>
    <h6>关于博主</h6>
    <img src="../assets/photo.jpg" alt="">
    <ul class="list-group information">
      <li class="list-group-item">
        姓名：sjl
      </li>
      <li class="list-group-item">
        出生日期：2019-01-01
      </li>
      <li class="list-group-item">
        星座：天枰座
      </li>
      <li class="list-group-item">
        居住城市：北京
      </li>
      <li class="list-group-item">
        职业：程序员
      </li>
      <li class="list-group-item">
        爱好：吃、喝、玩、乐
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mySidebar',
  data () {
    return {
      isActive: 0,
      classification: [
        {
          id: 0,
          name: '心情'
        },
        {
          id: 1,
          name: '教程'
        },
        {
          id: 2,
          name: '旅行'
        },
        {
          id: 3,
          name: '美食'
        }
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
  .sidebarBox{
    padding:20px;
    color: #666 !important;
    font-size: 14px;
  }
  .sidebarBox>h6{
    padding-bottom: 5px;
    border-bottom: 2px solid #A2C2A3;
  }
  .sidebarBox>img{
    width: 100%;
    max-width: 262px;
  }
  .information>li{
    padding-bottom: 0;
    font-size: 12px;
  }
  ul li{
    background-color:transparent;
    border:0;
    padding-left: 0;
  }
  li.active{
    background-color:transparent;
    color:#A2C2A3
  }
</style>
