<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
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
