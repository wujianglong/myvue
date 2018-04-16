e<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
  onLaunch(){
    this.$root.$mp.appOptions.globalData={
      user_info:{    
          //头像
          user_avatar:"",
          //用户名
          user_name:"wujianglong",
          //总场次
          total_count:"2000",
          //胜率
          win_percentage:"50%",
          //连胜场次
          straight_win_count:"20"
      },
      enemy_info:{
          //头像
          user_avatar:"",
          //用户名
          user_name:"zhanghuanglong",
          //总场次
          total_count:"50",
          //胜率
          win_percentage:"1%",
          //连胜场次
          straight_win_count:"0"
      },
      word_info:[
          {    
              //单词
              word:"father",
              //单词解释
              word_explain:"父亲",
              //单词题目列表
              //服务器用AnswerContent 和 AnswerType对象
              answers: [
              {
                  title: 'n.m',
                  type: 1 //correct
              },
              {
                  title: 'n.f',
                  type: -1 //incorrect
              },
              {
                  title: 'n',
                  type: -1 //incorrect
              },
              {
                  title: '不知道',
                  type: 0 //unknwon
              },
              ], 
              enemy_selection:1
          },
          {    
              //单词
              word:"mother",
              //单词解释
              word_explain:"母亲",
              //单词题目列表
              //服务器用AnswerContent 和 AnswerType对象
              answers: [
              {
                  title: 'n.m',
                  type: 1 //correct
              },
              {
                  title: 'n.f',
                  type: -1 //incorrect
              },
              {
                  title: 'n',
                  type: -1 //incorrect
              },
              {
                  title: '不知道',
                  type: 0 //unknwon
              },
              ], 
              enemy_selection:1
          },
          {    
              //单词
              word:"other",
              //单词解释
              word_explain:"其他的",
              //单词题目列表
              //服务器用AnswerContent 和 AnswerType对象
              answers: [
              {
                  title: 'n.m',
                  type: 1 //correct
              },
              {
                  title: 'n.f',
                  type: -1 //incorrect
              },
              {
                  title: 'n',
                  type: -1 //incorrect
              },
              {
                  title: '不知道',
                  type: 0 //unknwon
              },
              ], 
              enemy_selection:1
          },
          {    
              //单词
              word:"answer",
              //单词解释
              word_explain:"回答",
              //单词题目列表
              //服务器用AnswerContent 和 AnswerType对象
              answers: [
              {
                  title: 'n.m',
                  type: 1 //correct
              },
              {
                  title: 'n.f',
                  type: -1 //incorrect
              },
              {
                  title: 'n',
                  type: -1 //incorrect
              },
              {
                  title: '不知道',
                  type: 0 //unknwon
              },
              ], 
              enemy_selection:1
          },
          {    
              //单词
              word:"question",
              //单词解释
              word_explain:"问题",
              //单词题目列表
              //服务器用AnswerContent 和 AnswerType对象
              answers: [
              {
                  title: 'n.m',
                  type: 1 //correct
              },
              {
                  title: 'n.f',
                  type: -1 //incorrect
              },
              {
                  title: 'n',
                  type: -1 //incorrect
              },
              {
                  title: '不知道',
                  type: 0 //unknwon
              },
              ], 
              enemy_selection:1
          },
          {    
              //单词
              word:"say",
              //单词解释
              word_explain:"说",
              //单词题目列表
              //服务器用AnswerContent 和 AnswerType对象
              answers: [
              {
                  title: 'n.m',
                  type: 1 //correct
              },
              {
                  title: 'n.f',
                  type: -1 //incorrect
              },
              {
                  title: 'n',
                  type: -1 //incorrect
              },
              {
                  title: '不知道',
                  type: 0 //unknwon
              },
              ], 
              enemy_selection:1
          },
          {    
              //单词
              word:"speak",
              //单词解释
              word_explain:"讲",
              //单词题目列表
              //服务器用AnswerContent 和 AnswerType对象
              answers: [
              {
                  title: 'n.m',
                  type: 1 //correct
              },
              {
                  title: 'n.f',
                  type: -1 //incorrect
              },
              {
                  title: 'n',
                  type: -1 //incorrect
              },
              {
                  title: '不知道',
                  type: 0 //unknwon
              },
              ], 
              enemy_selection:1
          },
      ],
      //困难难度
      degree_difficulty:"0.5"
    }
  }
  
}
</script>

<style lang="scss">
page{
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0; 
   background:url("https://static.eudic.net/web/yinyang/challenge_bg@2x.png") center center no-repeat;
    background-size:100% 100% ;
}
.container{
  height:100%;
  padding-left:3.7%;
  padding-right:3.7%;
  overflow:hidden;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.f_l{
  float:left;
}
.f_r{
  float:right;
}
.p_r{
  position:relative;
}
.p_a{
  position:absolute;
}
.clear:after{
  display:table;
  content:'';
  clear:both;
}
.t_a{
  text-align:center;
}
.t_l{
  text-align:left;
}
.t_r{
  text-align:right;
}
.grayBj{
  position:relative;
  width:100%;
  height:100%;
  opacity: 0.3;
  background: #000000;
  z-index:8;
}
.imgBorder{
  border:2px solid #fff;
}
</style>
