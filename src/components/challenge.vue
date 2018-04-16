<template>
    <div class="challenge container">
       <div class="matchingInfo p_r" :class="{left0:left0}">
       		<div class="grayBj">
       			
       		</div>
       		<div class="detailInfo p_a">
       			<div class="detailInfoL">
       				 <div class="portrait">
       				 	   <img class="imgBorder" src="https://static.eudic.net/web/jingtingdang/bitmap_img2.png" alt="">
       				 </div>
       				 <div class="nameAndScore">
       				 	   <p class="name">
       				 	   	   Macbeth
       				 	   </p>
       				 	   <p class="score">
       				 	   	   30<span>分</span>
       				 	   </p>
       				 </div>
       			</div>
       			<div class="detailInfoR">
       				 <div class="nameAndScore">
       				 	   <p class="name">
       				 	   	   Macbeth
       				 	   </p>
       				 	   <p class="score">
       				 	   	   30<span>分</span>
       				 	   </p>
       				 </div>
       				 <div class="portrait">
       				 	   <img class="imgBorder" src="https://static.eudic.net/web/jingtingdang/bitmap_img2.png" alt="">
       				 </div>
       			</div>
       		</div>
       </div>
       <div class="timeProgress" :class="{left0:left0}">
	       	<div class="grayBj">
	       			
	       	</div>
       		<div class="timeProgressActive" :class="[progressFlag&&(progressActive?'progress0':'progress100')]" @animationend="timeProgressEnd">
       			
       		</div>
       </div>
       <div class="optionSelect" :class="{left0:left0}">
       		<optionSelect :classNames="[progressFlag&&(optionFlag?'option1':'option2')]" :optionData="data[0]"></optionSelect>
       		<optionSelect :classNames="[progressFlag&&(optionFlag?'option2':'option1')]" :optionData="data[1]"></optionSelect>
       </div>
    </div>
</template>
<script>
import optionSelect from '@/components/option'
export default {
   name: 'challenge',
   created(){
   		 this.data[0]=this.$root.$mp.appOptions.globalData.word_info[0]
   	  	 this.data[1]=this.$root.$mp.appOptions.globalData.word_info[1]
   },
   components: {
    optionSelect
   },
   data:()=>{
   	  return {
   	  	left0:false,
   	  	progressFlag:false,
   	  	progressActive:false,
   	  	optionFlag:false,
   	  	data:['1','2']
   	  }
   },
   methods : {
   	  timeProgressEnd(){
   	  	this.progressActive=!this.progressActive;
   	  	console.log("rrrrr")
   	  },
   	  emit11(){
        
      }
   },
   mounted(){
      console.log(this.$root.$mp.appOptions.globalData.degree_difficulty)
   	 




   	  //兼容 延迟才有动画
   	  setTimeout(()=>{
   	  		this.left0=true;
   	  },100)

   	  //有开始提示后 开始倒计时条
   	  setTimeout(()=>{
   	  	this.progressFlag=true;
   	  },1800)


   	  //倒计时正反方向()
  //  	  setTimeout(()=>{
		// this.progressActive=true;
  //  	  },3500)

   	  //多少秒之后卡片切换(换成用户点击或时间已过 卡片开始切换)
  //  	  setInterval(()=>{
		// this.optionFlag=!this.optionFlag;
  //  	  },5500)
   	  
	// wx.setNavigationBarColor({
	//   frontColor: '#ffffff',
	//   backgroundColor: '#ff0000',
	//   animation: {
	//     duration: 400,
	//     timingFunc: 'easeIn'
	//   }
	// })
   }
}
</script>

<style scoped lang="scss">
	$ft_1:32rpx;
	
	.matchingInfo{
		color:#fff;
		left:110%;
		transition:all 0.8s;
		.grayBj{
			height:136rpx;
			border-radius: 5px;
		}

		.detailInfo{
			top:0;
			display:flex;
			align-items:center;
			width:100%;
			height:100%;
			z-index:999;
			font-size:$ft_1;
			
			>div{
				flex:1;
				display:flex;
				align-items:center;
			}
			.detailInfoL{
				justify-content:flex-start;
			}
			.detailInfoR{
				justify-content:flex-end;
			}
			.portrait{
				display:flex;
				align-items:center;
			}
		}

		img{
			width:80rpx;
			height:80rpx;
			border-radius:80rpx;
			margin-left:26rpx;
			margin-right:26rpx;
		}
	}

	.timeProgress{
		margin-top:40rpx;
		height:34rpx;
		position:relative;
		border-radius:6rpx;
		overflow:hidden;
		transition:all 0.8s;
		left:-110%;
		.timeProgressActive{
			position: absolute;
			top:0;
			left:0;
			z-index:999;
			background:#F6A623;
			height:100%;
			width:100%;
			border-radius:6rpx;
		}
	}

	.optionSelect{
		position:relative;
		left:110%;
		transition:all 0.8s;
	}

	.left0{	
		animation:framesleft0 0.8s;
		animation-fill-mode: forwards;
	}
	.selectCorrent{
		background:#7DBE69!important;
		color:#fff;
	}
	.selectWrong{
		background:#EB5965!important;
		color:#fff;
	}

	.progress100{
		left:-100%!important;
		transition:all 55s;
	}
	.progress0{
		left:0%!important;
		transition:all 0.8s;
	}
	
	@keyframes framesleft0{
		100%{
			left:0;
		}
	}
</style>




