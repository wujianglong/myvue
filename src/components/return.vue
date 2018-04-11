<template>
  <div class="return">
   		<div class="returnDiv">
   			<img src="https://static.eudic.net/web/yinyang/wordcard_back_icon@2x(1).png" alt="">
   		</div>
   		<div class="return_gray_bj">
   			
   		</div>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped lang="scss">
.return {
  width: 100rpx;
  height: 58rpx;
  margin-top:48rpx;
  border:0.5rpx solid #8c8d91;
  border-radius:50rpx;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  overflow:hidden;
  .returnDiv{
  	position:relative;
  	z-index:9;
  	display:flex;
  	justify-content:center;
    align-items:center;
  	img{
  		width:18rpx;
  		height:32rpx;
  	}
  }
  .return_gray_bj{
  	position:absolute;
  	width:100%;
  	height:100%;
  	left:0;
  	z-index:8;
  	background:rgba(0,0,0,.15);
  }
}
</style>
