<template>
  <div class="container">
    <div class="bookListContent">
      <div class="bookListContentHeader">可选择的课本</div>
      <scroll-view scroll-y>
        <ul>
          <li v-for="(item,index) in bookData" @click="bookIdFnc(item.book_id,item.book_name)">
            {{item.book_name}}
          </li>
          
        </ul>
      </scroll-view>
    </div>
    
  </div>
</template>
<script>


export default {
  data () {
    return {
      bookData:""
    }
  },
  methods: {
    bookIdFnc(i,n){
      global.app.bookId=i;
      global.app.bookName=n;
      
      
      wx.navigateBack({
        delta: 1
      })
    }
  },

  created () {
    let _self=this;
    wx.request({
      url:"https://beta.frdic.com/api/v2/recite/GetBookInfo?lang=fr",
      method: 'get',
      success: function (res) {
       _self.bookData=res.data

     },
     fail: function (res) {
      console.log('请求错误2')
    },
    complete:function(){
      wx.hideLoading()
    }
  })
  },

}
</script>

<style scoped lang="scss">
.bookListContent{
  margin-top:30rpx;

  position:relative;
  font-size: 32rpx;
  background:rgba(0,0,0,.3);
  border-radius:5px;
  .bookListContentHeader{
    color:#fff;
    line-height:2;
    padding-left:28rpx;
    padding-right:28rpx;
  }
  scroll-view{
    max-height:1088rpx;
    color:#fff;
    line-height:2;
    padding-left:28rpx;
    padding-right:28rpx;
  }
}
</style>
