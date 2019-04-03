<template class="menu">
  <div style="position: relative">
    <nav class="navbar navbar-expand-md navbar-light bg-light row">
      <div class="container">
        <a style='paddingLeft: 0;' class="navbar-brand col-2" href="#">
          <img src="../assets/logo.jpg" alt="" style="float: left">
          LOGO
        </a>
        <div
          style="text-align: right;padding: 0 15px;"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <router-link :to="{ name:'menuPage',query:{id:activeMenu} }">
            <button class="navbar-toggler" type="button">
              <span class="navbar-toggler-icon"></span>
            </button>
          </router-link>
        </div>
          <ul
            v-show="screenWidth>767"
            class="col-6 navbar-nav mr-auto "
          >
            <div class="col-sm-12 col-md-4" v-for="(item,key) in menuList" :key="key">
              <li
                class="nav-item"
                :class="{active:activeMenu===item.id}"
                @click="menuClick(item.id)"
              >
                <router-link :to="item.link" >
                  {{item.name}}
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
            </div>
          </ul>
          <div
            v-show="screenWidth>767"
            class="col-sm-12 col-md-4 input-group"
            style="paddingRight:35px"
          >
            <input
              type="text"
              class="form-control"
              placeholder="search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              v-model="value"
            />
            <div @click="search" class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              <img src="../assets/search.png" alt="">
            </span>
            </div>
          </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { fromJS } from 'immutable'
import filter from '../utils/filter'
export default {
  name: 'myMenu',
  data () {
    return {
      activeMenu: 1,
      menuList: [
        {id: 1, name: '博客', link: '/'},
        {id: 2, name: '关于我', link: '/aboutMe'},
        {id: 3, name: '和我联系', link: '/contact'}
      ],
      value: '',
      dataList: [
        {
          id: 0,
          title: '如何添加一篇新博文啊？',
          imgUrl: '/static/img/photo.7798c26.jpg',
          date: '2019-01-01',
          classification: '心情',
          content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
          id: 1,
          title: '如何添加一篇新博文？',
          imgUrl: '/static/img/photo.7798c26.jpg',
          date: '2019-01-01',
          classification: '心情',
          content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
          id: 2,
          title: '如何添加一篇新博文？',
          imgUrl: '/static/img/photo.7798c26.jpg',
          date: '2019-01-01',
          classification: '心情',
          content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
          id: 3,
          title: '如何添加一篇新博文？',
          imgUrl: '/static/img/photo.7798c26.jpg',
          date: '2019-01-01',
          classification: '心情',
          content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
          id: 4,
          title: '如何添加一篇新博文？',
          imgUrl: '/static/img/photo.7798c26.jpg',
          date: '2019-01-01',
          classification: '心情',
          content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
          id: 5,
          title: '如何添加一篇新博文？',
          imgUrl: '/static/img/photo.7798c26.jpg',
          date: '2019-01-01',
          classification: '心情',
          content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        },
        {
          id: 6,
          title: '如何添加一篇新博文？',
          imgUrl: '/static/img/photo.7798c26.jpg',
          date: '2019-01-01',
          classification: '心情',
          content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
        }
      ],
      searchData: []
    }
  },
  props: ['screenWidth'],
  methods: {
    menuClick: function (id) {
      this.activeMenu = id
    },
    search: function () {
      this.searchData = filter(
        {
          data: fromJS(this.dataList),
          condition: this.value.split(' '),
          fields: ['title', 'classification', 'content']
        }).toJS()
      console.log(this.searchData)
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
  .nav-item>a{
    color:#666;
    text-decoration: none;
  }
.nav-item.active>a, .nav-item>a:hover{
    color:#A2C2A3 !important;
  }
  .nav-link{
    padding-right: 0 !important;
    padding-left: 0 !important;
    color:rgba(0,0,0,.5) !important;
  }
  .navbar-brand>img{
    width: 60px;
  }
  .navbar-brand{
    margin-right:0;
    line-height: 88px;
  }
  input:focus{
    border-color:#ced4da;
    box-shadow:none;
  }
  ul li{
    list-style: none;
  }
</style>
