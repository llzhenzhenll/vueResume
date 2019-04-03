<template>
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <div>
      <div class="card"
           v-for="(item,index) in dataList"
           :key=index
      >
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <div class="cardImgBox"
               v-bind:style="{backgroundImage:'url(' + item.imgUrl + ')'}"
          />
          <span>
          发布日期：{{item.date}}&nbsp;&nbsp;&nbsp;分类：{{item.classification}}
        </span>
          <p class="card-text">{{item.content}}</p>
        </div>
      </div>
      <button @click="loadMore" type="button" class="btn btn-lg btn-block">
        <span v-show="noMore">没有更多动态了</span>
        <span v-show="more" >加载更多...</span>
        <span v-show="loading">加载中</span>
      </button>
    </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      data: [
        {
          id: 0,
          title: '如何添加一篇新博文？',
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
      dataList: [
        {
          id: 0,
          title: '如何添加一篇新博文？',
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
      noMore: false,
      more: true,
      loading: false
    }
  },
  methods: {
    sleep: function (time) {
      return new Promise((resolve) => setTimeout(resolve, time))
    },
    loadMore: function () {
      if (this.dataList.length < this.data.length) {
        this.loading = true
        this.more = false
        this.sleep(500).then(() => {
          // 这里写sleep之后需要去做的事情
          this.dataList = this.data.slice(0, this.dataList.length + 1)
          this.loading = false
          this.more = true
        })
      } else {
        this.loading = true
        this.more = false
        this.sleep(1000).then(() => {
          // 这里写sleep之后需要去做的事情
          this.noMore = true
          this.loading = false
        })
      }
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
  .card{
    width: 100% !important;
    border: 0 !important;
    background-color:transparent !important;
  }
  .card>.card-body>.cardImgBox{
    width:100%;
    height:300px;
    position: relative;
    overflow: hidden;
    background-position: center;
  }
  .card-title{
    color: #A2C2A3;
  }
  .card>.card-body>span{
    font-size: 12px;
    color: #666;
  }
  .card>.card-body>p{
    color: #333;
  }
  .btn{
    margin: 0 auto;
    background: rgba(162, 194, 163, .5);
    font-size: 16px;
    padding: 5px 0;
    margin-bottom: 50px;
  }
  .btn{
    box-shadow:none;
  }
</style>
