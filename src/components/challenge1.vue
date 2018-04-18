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
       				 	   	   {{userScore}}<span>分</span>
       				 	   </p>
       				 </div>
       			</div>
       			<div class="detailInfoR">
       				 <div class="nameAndScore">
       				 	   <p class="name">
       				 	   	   Macbeth
       				 	   </p>
       				 	   <p class="score">
       				 	   	   {{enemyScore}}<span>分</span>
       				 	   </p>
       				 </div>
       				 <div class="portrait">
       				 	   <img class="imgBorder" src="https://static.eudic.net/web/jingtingdang/bitmap_img2.png" alt="">
       				 </div>
       			</div>
       		</div>
       </div>
       <div class="optionSelect" :class="{left0:left0}">
       		<optionSelect :optionData="data"></optionSelect>
       </div>
    </div>
</template>
<script>
import optionSelect from '@/components/option1'
export default {
   name: 'challenge',
   created(){
   		 this.data=global.baseInfo.word_info[0]
   },
   components: {
    	optionSelect
   },
   data:()=>{
   	  return {
   	  	left0:false,
   	  	progressFlag:false,
   	  	option:"",
   	  	clickCount:0,
   	  	setTimeout:null,
   	  	userScore:0,
   	  	enemyScore:0,
   	  	userScoreList:[],
   	  	enemyScoreList:[]
   	  }
   },
   methods : {
   	  scoreUpdate(l){	
   	  		let _self=this;
   	  		this.userScoreList.push(l)

   	  		this.enemyScoreList=global.baseInfo.word_info.map((o,i)=>{
   	  			if(o.answers[o.enemy_selection].type==o.enemy_selection){
   	  				return 1;
   	  			}else{
   	  				return 0;
   	  			}
   	  		}).slice(0,this.userScoreList.length)


   	  		let userNum=0;
   	  		this.userScoreList.forEach(function(o,i){
			   if(o==1){
			   		userNum+=o;
			   }
			})

   	  		let enemyNum=0;
   	  		this.enemyScoreList.forEach(function(o,i){
			   	enemyNum+=o;
			})
   	  		
   	  		this.userScore=userNum;
   	  		this.enemyScore=enemyNum;
   	  },
   	  dataUpdate(){
   	  	this.clickCount++;

   	  		this.data=global.baseInfo.word_info[this.clickCount]
      }
   },
   mounted(){
      console.log(global.baseInfo.degree_difficulty)

   	  //兼容 延迟才有动画
   	  setTimeout(()=>{
   	  		this.left0=true;
   	  },100)

   	  //有开始提示后 开始倒计时条

   	  //倒计时正反方向()
  //  	  setTimeout(()=>{
		// this.progressActive=true;
  //  	  },3500)

   	  //多少秒之后卡片切换(换成用户点击或时间已过 卡片开始切换)
   	
   	  
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
		top:30rpx;
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




