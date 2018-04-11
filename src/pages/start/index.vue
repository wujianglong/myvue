<template>
    <div class="ChallengeStart container">
        
        <img src="https://static.eudic.net/web/yinyang/challenge_logo@2x.png" alt="">
        <div>
            <p @click="cataLogLink">
              开始测验
            </p>
        </div>
    </div>
</template>

<script>
import returnBtn from '@/components/return'

export default {
  data () {
    return {
      msg: 'Welcome1 to Your Vue.js App'
    }
  },
  methods: {
    cataLogLink () {
      const url = '../catalog/main'
      wx.navigateTo({ url })
    }
  },
  components:{
    returnBtn
  },
  onReady(){
    wx.hideTabBar({

        fail:function(){

            setTimeout(function(){  // 做了个延时重试一次，作为保底。

                wx.hideTabBar()

            },500)       

        }

    })
  },
  onShow(){
      wx.hideTabBar()


      // wx.setNavigationBarTitle({
      //   title: '当前页面'
      // })

  }
}
</script>
<style scoped lang="scss">
    .ChallengeStart{
      overflow:hidden;
      img{
        margin:220rpx auto 160rpx;
        display:block;
        width:430rpx;
        height:400rpx;
      }
      div{
        width:90%;
        margin:0 auto;
        p{
          font-size:36rpx;
          height: 100rpx;
          line-height: 100rpx;
          background-image: linear-gradient(-137deg, #FF1C6C 0%, #EC4343 100%);
          border-radius: 100rpx;
          text-align:center;
          color:#fff;
       
        }
      }
    }
</style>
