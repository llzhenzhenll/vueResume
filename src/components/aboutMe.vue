<template>
  <div class="aboutMe">
    <h6>关于博主</h6>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-4">
        <img style="width: 100%" src="../assets/photo.jpg" alt="">
      </div>
      <div class="col-xs-12 col-sm-12  col-md-8"  style="border-bottom: 1px dashed #A2C2A3;">
        <div class="row">
          <div class="col-12">
            <h6>个人简介</h6>
            <p>
              这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。这里是关于我的内容模块，
              您可以双击这里或者点击编辑按钮来修改内容。
              这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。这里是关于我的内容模块，
              您可以双击这里或者点击编辑按钮来修改内容。
            </p>
            <p>
              这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。
              这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。
              这里是关于我的内容模块，您可以双击这里或者点击编辑按钮来修改内容。
            </p>
          </div>
        </div>

      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
      </div>
      <div class="col-md-8">
        <div class="row" style=" padding: 15px 0;">
          <div class="col-xs-12 col-sm-6 col-md-6">
            <h6>工作经历</h6>
            <p>
              这里是关于我的内容模块，
              <br />
              编辑按钮来修改内容。
            </p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <h6>获奖情况</h6>
            <p>
              这里是关于我的内容模块，
              <br />
              编辑按钮来修改内容。
            </p>
          </div>
        </div>
      </div>
    </div>
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
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aboutMe{
    padding: 0 35px;
    color: #666;
  }
  .aboutMe h6{
    /*padding: 15px 0;*/
    /*border-bottom: 2px solid #A2C2A3;*/
    font-weight: 500;
    color: #000;
    padding-bottom: 20px;
  }
  .aboutMe p{
    font-size: 14px;
  }
  .aboutMe>h6{
    padding: 15px 0;
    border-bottom: 2px solid #A2C2A3;
    font-weight: 600;
  }
</style>
