<template>
  <div class="contact">
    <h6>和我联系</h6>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-8">
        <form>
          <div class="form-group">
            <label for="call">称呼</label>
            <input type="text" class="form-control" id="call" placeholder="call">
          </div>
          <div class="form-group">
            <label for="email">Email 信箱</label>
            <input type="email" class="form-control" id="email" placeholder="email">
          </div>
          <div class="form-group">
            <label for="content">内容</label>
            <input type="text" class="form-control" id="content" placeholder="content">
          </div>
          <div class="form-group">
            <label for="password">验证码</label>
            <input type="text" class="form-control" id="password" placeholder="password">
          </div>
          <div style="width: 120px;
            height: 40px;
            background: rgb(240, 240, 240);
            margin-bottom: 20px;"/>
          <button type="button" class="btn">Submit</button>
        </form>
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
  .contact{
    padding: 0 35px;
    color: #666;
  }
  .contact h6{
    /*padding: 15px 0;*/
    /*border-bottom: 2px solid #A2C2A3;*/
    font-weight: 500;
    color: #000;
  }
  .contact p{
    font-size: 14px;
  }
  .contact>h6{
    padding: 15px 0;
    border-bottom: 2px solid #A2C2A3;
    font-weight: 600;
  }
  .btn{
    background-color: #A2C2A3;
    color: #666;
    margin-bottom: 60px;
    outline: none;
    box-shadow: none;
  }
  .btn:active{
    background: rgba(162, 194, 163, .5);
  }
</style>
