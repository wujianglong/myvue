<template>
       <div class="wordCard" :class="{left0:leftf}">
              <div class="word t_a">
                       bad
              </div>
              <div class="combe">
                     <em>COMBE x6</em>
              </div>
              <div class="questionProgress clear">
                     <span class="f_l">请选择该单词阴阳性</span>
                     <span class="f_r">4/10</span>
              </div>
              <div class="option t_a">
                     <ul>
                           <li v-for="(item,index) in data" :class="[index==select&&(index==correntSelect?'selectCorrent':'selectWrong')]" @click="selectFnc($event,index)">{{item}}</li>
                     </ul>
              </div>
       </div>
</template>

<script>
export default {
  props: ['leftf'],
  data(){
       return {
              data:[
                 "n.m.","n.f.","n.m.","n.f."
              ],
              correntSelect:2,
              select:-1
       }
  },
  methods:{
       selectFnc(e,i){
              this.select=i;
              console.log(e.currentTarget.dataset.eventid)

       },

  }
}
</script>

<style scoped lang="scss">
.wordCard{
       transition:all 0.5s;
       left:110%;
       background: #FAFAFA;
       border-radius: 5px;
       padding-left:40rpx;
       padding-right:40rpx;
       margin-top:60rpx;
       padding-bottom:40rpx;
       position:relative;
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
</style>
