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

export default {
  data () {
  },
  methods: {
    cataLogLink () {
      if(global.app.haveLogin){
        const url = '../catalog/main'
        wx.navigateTo({ url })
      }else{
        wx.showModal({
          title: '',
          content: '你需要先授权才能开始',
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    },
    touchFnc(){
      this.smallFlag=true;

      setTimeout(()=>{this.smallFlag=false;},100)
    }
  },
  onReady(){

  },
  onShow(){
    wx.hideTabBar()
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
