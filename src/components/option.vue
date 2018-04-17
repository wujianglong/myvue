<template>
     <div class="wordCard" :class="wordCardBindClass"  @animationend="wordEndChange" @animationstart="wordStartChange">
          <div class="canvasCircle">
              <div>4</div>
              <canvas style="width: 140rpx; height: 140rpx;" canvas-id="firstCanvas"></canvas>
          </div>
          <div>
              <div class="word t_a">
                      {{data.word}}
              </div>
              <div class="combe">
                     <em>COMBE x6</em>
              </div>
              <div class="questionProgress clear">
                     <span class="f_l">请选择该单词阴阳性</span>
                     <span>{{msg}}</span>
                     <span class="f_r">{{clickCount}}/10</span>
              </div>
              <div class="option t_a">
                     <ul>
                          <!-- 不包括当前点击的对象 -->
                          <li v-for="(item,index) in data.answers" :class="[(clickFlag&&index==select)&&(item.type==1?'selectCorrent showLi':'selectWrong showLi'),((index!=select)&&clickFlag)&&(item.type==1?'selectCorrent showLi1':'hideLi')]" @click="selectFnc($event,index)">
                              {{item.title}}
                          </li>
                     </ul>
              </div>
          </div>
     </div>
</template>

<script>
export default {
  props: ['classNames','optionData'],
  data(){
     return {
        data:this.optionData,
        correntSelect:2,
        select:-1,
        wordCardBindClass:this.classNames,
        clickFlag:false,
        clickCount:0,
        timeOut:null,
        interval:null,
        countDownFlag:false
     }
  },
  computed:{
    
  },
  created(){

  },
  methods:{
       classFnc(item,index){

       },
       selectFnc(e,i){
        if(this.clickFlag) return false;
        this.clickFlag=true;
        this.select=i;
        console.log(e.currentTarget.dataset.eventid)


        this.$parent.dataUpdate()
        clearInterval(this.interval)

        setTimeout(()=>{
            this.clickFlag=false;
        },3000)
       },
       wordEndChange(){
        this.countDownFlag=false;
       },
       wordStartChange(){
          this.countDown()
          setTimeout(()=>{
              this.countDownFlag=true
          },1000)
       },
       countDown(){
          let _self=this;
              var context = wx.createCanvasContext('firstCanvas')
              render(context, 100, 4, 100);

              var i = 0;
              _self.interval = setInterval(function() {
                  if(!_self.countDownFlag){return false;}
                  i++;
                  if (i >= 80) {
                      clearInterval(_self.interval)
                  }
                  render(context, 100, 4, i);
              }, 50)

              function render(context, length, r, i){
                  context.clearRect(0, 0, length, length);
                  context.beginPath();
                  context.setStrokeStyle("#F5A623")
                  context.setLineWidth(r)
                  context.arc(35.5, 35, 28, -0.5 * Math.PI + i * 0.02 * Math.PI,-0.5 * Math.PI, false);
                  context.stroke();
                  context.closePath();
                  context.draw()
              }


       },
       canvasShow(){
          let _self=this;
          var context = wx.createCanvasContext('firstCanvas')

          render(context, 100, 4, 100)
          function render(context, length, r, i){
              context.clearRect(0, 0, length, length);
              context.beginPath();
              context.setStrokeStyle("#F5A623")
              context.setLineWidth(r)
              context.arc(35.5, 35, 28, -0.5 * Math.PI + i * 0.02 * Math.PI,-0.5 * Math.PI, false);
              context.stroke();
              context.closePath();
              context.draw()
          }
       }

  },
  watch:{
      classNames(curVal,oldVal){
        this.wordCardBindClass=curVal;
        console.log(curVal)
     },
     optionData(curVal,oldVal){
        this.data=curVal;
        console.log("ee")
     }
  }
}
</script>
<!-- 同时用transition 与 animation  是因为元素有两个动画  我只希望监听动画结束的时候调用一次就就行了 不希望触发两次 -->
<style scoped lang="scss">
.wordCard{
       background: #FAFAFA;
       border-radius: 5px;
       margin-top:60rpx;
       padding-bottom:40rpx;
       position:absolute;
       top:0;
       width:100%;
       z-index:999;
       >div{
           padding-left:40rpx;
           padding-right:40rpx;
       }
       .canvasCircle{
          width:140rpx;
          height:140rpx;
          border-radius:120rpx;
          padding-left:0;
          padding-right:0;
          position:relative;
          left:50%;
          margin-left:-60rpx;
          margin-top:-60rpx;
          background:#fff;
          >div{
            position:absolute;
            width:100%;
            line-height:140rpx;
            text-align:center;
            color:#F5A623;
            font-size:24px;
            font-weight:bold;
          }
       }
       .word{
              font-size: 60rpx;
              color: #2A1749;
              padding-top:10rpx;
       }
       .combe{
              width:268rpx;
              height:64rpx;
              line-height:64rpx;
              text-align:center;
              color:#fff;
              margin:0 auto;
              background:url("https://static.eudic.net/web/yinyang/card_combo_img@2x.png") center center no-repeat;
              background-size:100% 100%;
              font-style:italic;
              font-size:28rpx;
              text-indent:-15%;
       }
       .questionProgress{
              font-size: 32rpx;
              color: #7E7E7E;
       }
       .option{
            ul{
                 li{
                      height:100rpx;
                      line-height:100rpx;
                      width:100%;
                      background: #EDEDED;
                      border-radius: 100px;
                      margin-top:40rpx;
                 }
            }
       }
}
.left0{
       left:0%;
}
.selectCorrent{
       background:#7DBE69!important;
       color:#fff;
}
.selectWrong{
       background:#EB5965!important;
       color:#fff;
}

.option1{
  opacity:0;

}

.option2{
  animation:option2 2s 1;
  animation-fill-mode: forwards;
}


@keyframes option1{
  0%{
      opacity:1;
      z-index:9999;
  }

  100%{
      opacity:0;
      z-index:-1;
  }
}

@keyframes option2{
  0%{
      opacity:0;
      z-index:-1;
  }
  100%{
      opacity:1;
      z-index:9999;
  }
}

@keyframes option3{
  0%{
      left:0;
      opacity:1;
  }
  60%{
      opacity:1;
  }
  100%{
      left:-110%;
      opacity:0;
  }
}

@keyframes option4{
  0%{
      opacity:0;
  }
  60%{
      opacity:0;
  }
  100%{
      opacity:1;
  }
}

.showLi{
  animation:optionShow 0.5s;
  animation-fill-mode: forwards;
}
.showLi1{
  animation:optionShow1 0.5s;
  animation-fill-mode: forwards;
}

.hideLi{
  animation:optionHide 0.5s;
  animation-fill-mode: forwards;
}

@keyframes optionShow{
  100%{
    opacity:1;
  }
}
@keyframes optionShow1{
  80%{
    
    transform:scale(1.05)
  }
  100%{
    opacity:1;
    transform:scale(1)
  }
}

@keyframes optionHide{
  100%{
    opacity:0;
  }
}

</style>
