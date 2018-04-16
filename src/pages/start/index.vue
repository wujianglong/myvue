<template>
    <div class="ChallengeStart container">
        <img src="https://static.eudic.net/web/yinyang/challenge_logo@2x.png" alt="">
        <div>
            <p @click="cataLogLink" :class="{scaleAnimation:smallFlag}" @touchstart="touchFnc">
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
      msg: 'Welcome1 to Your Vue.js App',
      smallFlag:false
    }
  },
  methods: {
    cataLogLink () {
      
      
      const url = '../catalog/main'
      wx.navigateTo({ url })
    },
    touchFnc(){
      this.smallFlag=true;

      setTimeout(()=>{this.smallFlag=false;},100)
    }
  },
  components:{
    returnBtn
  },
  onReady(){

  },
  onShow(){
      wx.hideTabBar()

      console.log("1222")
      // wx.setNavigationBarTitle({
      //   title: '当前页面'
      // })

  },
  onHide(){
    console.log("hide")
  }
}
</script>
<style scoped lang="scss">
    .ChallengeStart{
      overflow:hidden;
      img{
        margin:300rpx auto 160rpx;
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

    .scaleAnimation{
        animation:scale 0.8s;
    }

    @keyframes scale{
      0%{
        transform:scale(1)
      }
      50%{
        transform:scale(0.8)
      }
      100%{
        transform:scale(1)
      }
    }
</style>
