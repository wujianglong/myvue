e<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

  },
  onLaunch(){
    let _self=this;
   


    global.baseInfo={
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
          straight_win_count:""
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
                  title: 'n.m0',
                  type: -1 //correct
              },
              {
                  title: 'n.f',
                  type: 1 //incorrect
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
                  title: 'n.m1',
                  type: -1 //correct
              },
              {
                  title: 'n.f',
                  type: 1 //incorrect
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
                  title: 'n.m2',
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
                  title: 'n.m3',
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
                  title: 'n.m4',
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
                  title: 'n.m5',
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
                  title: 'n.m6',
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
              word:"father",
              //单词解释
              word_explain:"父亲",
              //单词题目列表
              //服务器用AnswerContent 和 AnswerType对象
              answers: [
              {
                  title: 'n.m0',
                  type: -1 //correct
              },
              {
                  title: 'n.f',
                  type: 1 //incorrect
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
                  title: 'n.m1',
                  type: -1 //correct
              },
              {
                  title: 'n.f',
                  type: 1 //incorrect
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
                  title: 'n.m2',
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
                  title: 'n.m3',
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
                  title: 'n.m4',
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
                  title: 'n.m5',
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
                  title: 'n.m6',
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
              word:"father",
              //单词解释
              word_explain:"父亲",
              //单词题目列表
              //服务器用AnswerContent 和 AnswerType对象
              answers: [
              {
                  title: 'n.m0',
                  type: -1 //correct
              },
              {
                  title: 'n.f',
                  type: 1 //incorrect
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
                  title: 'n.m1',
                  type: -1 //correct
              },
              {
                  title: 'n.f',
                  type: 1 //incorrect
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
                  title: 'n.m2',
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
                  title: 'n.m3',
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
                  title: 'n.m4',
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
                  title: 'n.m5',
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
                  title: 'n.m6',
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

    global.app={
      lang:"fr",
        baseURI:"https://beta.frdic.com",
        userId:'',
        bookId:'',
        token:''
    }



    //获取用户登录
    wx.login({
      success: function (res) {
        _self.opencode = res.code
        if (res.code) {
          wx.request({
            method: 'post',
            url: global.app.baseURI+'/api/v2/appsupport/WeixinMpLogin?code=' + res.code,
            header: {
              EudicUserAgent: "/eusoft_ting_"+global.app.lang+"_android/7.0.0/e8d7838c7a358f00/"
            },
            success: function (res) {
              console.log('wxlogin')
              console.log(res)
              if (res.statusCode != 200) {
                //不存在用户信息就在获取用户的详细信息发给后台
                getUserInfo();
                console.log("不存在")
              } else {
                 console.log("存在")
                global.app.userId = res.data.userid
                global.app.token = res.data.token
                requestData()
              }
            },
            fail: function (res) {
              console.log('请求错误2')
            }
          })
        } else {
          console.log('请求错误3')
        }
      },
      fail:function(){
          console.log("welogin  失败")
      },
      complete:function(){
          console.log("授权完成")
      }
    });

    //创建新用户
    function getUserInfo(){
        wx.getSetting({
          success(res) {
              if (!res.authSetting['scope.userInfo']) {
                wx.authorize({
                  scope: 'scope.userInfo',
                  success() {
                    // 用户已经同意授权
                    userInfo()
                  },
                  fail: function () {
                    console.log('授权失败')
                  }
                })
              } else {
                userInfo()
              }
            }
        })
    }
    function userInfo() {
      wx.getUserInfo({
        withCredentials: true,
        success: function (res) {
          //调用成功就把用户第一次登陆我们平台信息发给后台
          wx.request({
            method: 'post',
            url: global.app.baseURI + '/api/v2/appsupport/WeixinMpRegister',
            header: {
              // EudicUserAgent: "/eusoft_ting_fr_" + _self.globalData.system +"/7.0.0/e8d7838c7a358f00/"
              EudicUserAgent: "/eusoft_ting_"+global.app.lang+"_android/7.0.0/e8d7838c7a358f00/"
            },
            data: {
              rawData: res.rawData,
              signature: res.signature,
              encryptedDataStr: res.encryptedData,
              iv: res.iv,
              code: _self.opencode
            },
            success: function (res) {
              global.app.userid = res.data.userid
              global.app.token = res.data.token


            },
            fail: function (res) {
              console.log('用户数据请求错误')
            }
          })
        },
        fail: function () {
          console.log('用户数据请求错误')
        }
      })
    }

    //用户登录/创建用户完毕  请求题目数据
    function requestData(){
         wx.request({
            method: 'get',
            url: global.app.baseURI+"/api/v2/recite/GetReciteChallengeRound?bookId=346&userid=19c01979-30a9-11e7-aa21-000c29ffef9b&lang=fr&count=10",
            success: function (res) {
              console.log(res)
            },
            fail: function (res) {
              console.log('请求错误2')
            }
          })
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
