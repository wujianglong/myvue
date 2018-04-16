<template>
     <div class="wordCard" :class="wordCardBindClass">
          <div>
            {{count}}
          </div>
          <div>
              <div class="word t_a">
                       bad
              </div>
              <div class="combe">
                     <em>COMBE x6</em>
              </div>
              <div class="questionProgress clear">
                     <span class="f_l">请选择该单词阴阳性</span>
                     <span>{{msg}}</span>
                     <span class="f_r">4/10</span>
              </div>
              <div class="option t_a">
                     <ul>
                          <!-- 不包括当前点击的对象 -->
                          <li v-for="(item,index) in data" :class="[(clickFlag&&index==select)&&(item.type==1?'selectCorrent showLi':'selectWrong showLi'),((index!=select)&&clickFlag)&&(item.type==1?'selectCorrent showLi1':'hideLi')]" @click="selectFnc($event,index)">
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
              data:this.optionData.answers,
              correntSelect:2,
              select:-1,
              wordCardBindClass:this.classNames,
              clickFlag:false,
              clickCount:0
       }
  },
  computed:{
    
  },
  methods:{
       classFnc(item,index){

       },
       selectFnc(e,i){
        if(this.clickFlag) return false;
        this.clickFlag=true;
        this.select=i;
        console.log(e.currentTarget.dataset.eventid)

        this.$parent.emit11()

        setTimeout(()=>{
          this.clickFlag=false;
        },1000)

       }
  },
  watch:{
      classNames(curVal,oldVal){

        this.wordCardBindClass=oldVal;
        console.log(curVal)

        console.log(oldVal)
     }
  }
}
</script>
<style scoped lang="scss">
.wordCard{
       background: #FAFAFA;
       border-radius: 5px;
       margin-top:60rpx;
       padding-bottom:40rpx;
       position:absolute;
       top:0;
       width:100%;
       >div{
           padding-left:40rpx;
           padding-right:40rpx;
       }
       .word{
              font-size: 60rpx;
              color: #2A1749;
              padding-top:60rpx;
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
  animation:option1 2s 1;
  animation-fill-mode: forwards;
}

.option2{
  animation:option2 2s 1;
  animation-fill-mode: forwards;
}

@keyframes option1{
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

@keyframes option2{
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
