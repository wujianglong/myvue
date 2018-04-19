<template>
  <div id="matching" class="container">
    <challenge  v-if="challengeShow"></challenge>
    <div id="matching" v-else>
      <div>
        <div class="matchSpeed" :class="{matchSpeedActive:active.matchSpeedActive}">
          <img src="https://static.frdic.com/web/yinyang/match_img@2x.png" alt="">
          <div class="matchTime">
           <div v-if="matchIngAchieve">
             <p>匹配</p>
             <p>成功</p>
           </div>
           <div v-else>
             <p>匹配中</p>
             <p>{{matchIng}}</p>
           </div>
         </div>
       </div>
       <div class="matchIngInfo">
        <section class="grayBj" :class="{grayActive:active.grayActive}" @animationend="grayEnd"></section>
        <div class="matchUserInfo challengeInfo" :class="{infoActiveL:active.infoActive}" @animationend="challengeInfoEnd">
          <img class="imgBorder" :src=allInfo.user_info.user_avatar alt="">
          <p class="infoName">
            {{allInfo.user_info.user_name}}
          </p>
          <p class="infoTotalCount">
            <span>总场次:</span><span>{{allInfo.user_info.total_count}}</span>
          </p>
        </div>
        <div class="matchOpponentInfo challengeInfo" :class="{infoActiveR:active.infoActive}">
         <img class="imgBorder" :src=allInfo.enemy_info.user_avatar alt="">
         <p class="infoName">
          {{allInfo.enemy_info.user_name}}
        </p>
        <p class="infoTotalCount">
          <span>总场次:</span><span>{{allInfo.enemy_info.total_count}}</span>
        </p>
      </div>
    </div>
  </div>
</div>
<div>{{count}}</div>
</div>
</template>
<script>

import challenge from '@/components/challenge'

export default {
  data(){
    return {
      random:8,
      matchIngAchieve:false,
      matchIng:"00:00",
      active:{
        matchSpeedActive:false,
        grayActive:false,
        infoActive:false,
      },
      interval:null,
      challengeShow:false,
      unload:false,
      allInfo:{}
    }
  },
  components:{
    challenge
  },
  computed: {
   
  },
  methods:{
    matchSpeedAfterAppear(){
      let n=Math.floor(Math.random()*this.random),i=0;
        this.active.matchSpeedActive=true;
        this.unload=false;
        let format=(f)=>{
          let f1="00",f2="00",f3=f%60,f4=f/60;
          if(f4>1){
            f1=f4.length>1?f4:"0"+f4;
            f2=f3;
          }else{
            f1="00"
            f2=f3.length>1?f3:"0"+f3;
          }
          return f1+":"+f2;
        }
        this.interval=setInterval(()=>{
          var _self=this;
          if(i>n){
            clearInterval(this.interval)
              //灰色背景显示
              this.active.grayActive=true
              //匹配成功显示
              // setTimeout(()=>{
              //    _self.challengeShow=true;
              // },1400)
            }else{
              //匹配时间显示
              i++;
              this.matchIng=format(i)
            } 
          },1000)
      },
      clearDefault(){
        this.matchIngAchieve=false; 
        this.challengeShow=false;
        this.matchIng="00:00";
        clearInterval(this.interval)
        this.active={
          matchSpeedActive:false,
          grayActive:false,
          infoActive:false
        }
      },
      //灰色背景出来之后用户信息出来动画
      grayEnd(){
        this.active.infoActive=true;
      },
      //用户信息出来动画跳转
      challengeInfoEnd(){
        let _self=this;
        this.matchIngAchieve=true
        setTimeout(()=>{
          //倒计时完后 开始答题
          if(_self.unload){clearInterval(_self.interval);return false;}
         _self.challengeShow=true;
       },500)
      }
    },
    mounted(){

    },
    onLoad(){
      this.unload=false;
      this.allInfo=global.baseInfo
    },
    onShow(){
     this.matchSpeedAfterAppear()
     // this.challengeShow=true;

     this.unload=false
   },
   onUnload(){
     let _self=this;
     this.clearDefault()
     this.unload=true;

     if(_self.challengeShow){
      wx.showModal({
        title: '你已退出比赛',
        content: '下次退出将要收到惩罚',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
     
     wx.request({
      method: 'get',
      url: global.app.baseURI+"/api/v2/recite/GetReciteChallengeRound?bookId=346&userid="+global.app.userId+"&lang="+global.app.lang+"&count=10",
      success: function (res) {
        global.baseInfo=res.data
      },
      fail: function (res) {
        console.log('请求错误')
      }
    })
    
    

   },
   onReady(){
    
  }
}

</script>
<style scoped lang="scss">
#matching{
  .matchSpeed{
    width:500rpx;
    height:500rpx;
    margin-left:-250rpx;
    left:140%;
    position:relative;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    >img{
      width:500rpx;
      height:500rpx;
      top:0;
    }
    .matchTime{
      color:#02f2f3;
      top:0;
      font-size:0.4rem;
      position:absolute;
      width:100%;
      height:100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      letter-spacing: 0.5px;
      p{
        margin-bottom:0.15rem;
      }
    }
  }
  .matchSpeedActive{
    animation: bounce-in .3s;
    animation-fill-mode: forwards;
  }

  .matchIngInfo{
    border-radius: 5px;
    height:3.07rem;
    position:relative;
    color:#fff;
    .grayBj{
      background: #000000;
      width:100%;
      height:100%;
      opacity:0;
      
    }
    >div{
      width:50%;
      height:100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position:absolute;
      top:0;
      z-index:999;
      .infoName{
        font-size:0.307rem;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        width:90%;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
      }
      .infoTotalCount{
        font-size:0.239rem;
      }
      img{
       width:100rpx;
       height:100rpx;
       border-radius:1rem;
     }
   }
   .matchUserInfo {
    left:-60%;
  }
  .matchOpponentInfo{ 
    right:-60%;
  }
}
}

.grayActive{
 animation: gray  .8s;
 animation-fill-mode: forwards;
}
.infoActiveL{
  animation: fadeInLeft  .3s;
  animation-fill-mode: forwards;
}
.infoActiveR{
  animation: fadeInRight .3s;
  animation-fill-mode: forwards;
}


@mixin keyframes($a) {
  @keyframes #{$a} {
    @content;
  }
}

@include keyframes(bounce-in) {
  from {
    left:100%;
  }
  to {
    left:50%;
  }
}   

@include keyframes(gray) {
  0% {
    opacity:0;
  }
  100% {
    opacity:0.4;
  }
}  

@include keyframes(fadeInLeft){
  0% {
    left:-60%;
  }
  100% {
    left:0%;
  }
}

@include keyframes(fadeInRight){
  0% {
    right:-60%;
  }
  100% {
    right:0%;
  }
}
</style>
