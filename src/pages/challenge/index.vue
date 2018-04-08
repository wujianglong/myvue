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
       		<div class="timeProgressActive" :class="[progressFlag&&(progressActive?'progress0':'progress100')]">
       			
       		</div>
       </div>
       <div>
       		<optionSelect :leftf="left0"></optionSelect>
       </div>
	   
    </div>
</template>

<script>
import optionSelect from '@/components/option'
export default {
   name: 'challenge',
   created(){
   		
   },
   components: {
    optionSelect
   },
   data:()=>{
   	  return {
   	  	cataData:[
   	  		{	
   	  			userAvatar:"https://static.eudic.net/web/jingtingdang/bitmap_img2.png",
				//用户名
				userName:"伍江龙",
				//总场次
				totalCount:"2000",
				//胜率
				WinPercentage:"81%",
				//背景色
				bj:"#4898D6"
   	  		},
   	  		{
				title:"选择课本",
				des:"选择一本喜欢的课本，开始你的阅读之旅～",
				link:"",
				bj:"#8C62DA",
				url:"https://static.eudic.net/web/yinyang/select_book_bg@2x.png",
				link:"/matching"
  			},
  			{
  				title:"开始PK",
  				des:"斗智斗勇，和你的对手展开一场智力比拼吧",
  				linl:"",
  				bj:"#A763CA",
  				url:"https://static.eudic.net/web/yinyang/pk_bg@2x.png",
  				link:"/matching"
  			},
  			{
  				title:"排名榜",
  				des:"斗智斗勇，和你的对手展开一场智力比拼吧",
  				link:"",
  				bj:"#7DBE69",
  				url:"https://static.eudic.net/web/yinyang/ranking_bg@2x.png",
  				link:"/matching"
  			},
   	  	],
   	  	left0:false,
   	  	
   	  	progressFlag:false,
   	  	progressActive:false
   	  }
   },
   methods : {
   	  
   },
   mounted(){
   	  this.left0=true;
   	  setTimeout(()=>{
   	  	this.progressFlag=true;
   	  },500)

   	  setTimeout(()=>{
		this.progressActive=true;
   	  },3000)
   	  
   }
}
</script>

<style scoped lang="scss">
	$ft_1:32rpx;
	
	.matchingInfo{
		color:#fff;
		left:110%;
		transition:all 0.5s;
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
		transition:all 0.5s;
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
			transition:all 5s;
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

	.progress100{
		left；-100%!important；
		transition:all 5s;
	}
	.progress0{
		left；0%!important；
		transition:all 1s;
	}

</style>




