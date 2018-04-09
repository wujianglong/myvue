<template>
    <div class="result container">
         <div class="headerImg t_a">
         	  <img src="https://static.eudic.net/web/yinyang/test_success_bg@2x.png" alt="">
         	  <p>挑战成功 5连胜</p>
         </div>
         <div class="resultList">
         	  <div class="resultListInfo">
         	  	    <div class="resultListInfoL t_l">
         	  	    	  <div class="">
         	  	    	  	  <img src="https://static.eudic.net/web/jingtingdang/bitmap_img2.png" alt="">
         	  	    	  </div>
         	  	    	  <p class="score">100</p>
         	  	    	  <p class="name">wujainglong</p>
         	  	    </div>
         	  	    <div class="resultListInfoR t_r">
         	  	    	  <div class="">
         	  	    	  	  <img src="https://static.eudic.net/web/jingtingdang/bitmap_img2.png" alt="">
         	  	    	  </div>
         	  	    	  <p class="score">10</p>
         	  	    	  <p class="name">zhanghuanglong</p>
         	  	    </div>
         	  </div>
         	  <div class="resultListLi">
         	  	   <ul>
         	  	   	   <li class="t_a" v-for="(item,index) in wordData">
         	  	   	   	   {{item}}
         	  	   	   </li>
         	  	   </ul>
         	  </div>
         	  <div class="resultListBtn">
         	  	   <button>继续挑战</button>
         	  	   <button>炫耀成绩</button>
         	  </div>
         </div>
    </div>
</template>

<script>
export default {
   name: 'CataLog',
   created:()=>{

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
   	  	wordData:[
   	  		'woman; n.f. 女人','boy; n.m. 男孩','cock; n.f. 公鸡','vea; n.f. 胖的','go; n.f. 走','woman; n.f. 女人','boy; n.m. 男孩','cock; n.f. 公鸡','vea; n.f. 胖的','go; n.f. 走'
   	  	]
   	  }
   },
   methods : {
   	  matchingLink(){
   	      const url="../matching/main";
   	      wx.navigateTo({ url })
   	  }
   },
   mounted(){
   		wx.setNavigationBarColor({
		  frontColor: '#ffffff',
		  backgroundColor: '#e24853',
		
		})
   }
}
</script>

<style scoped lang="scss">
	.container{
		background-image:none;
		background:#e24853;
	}
	
	.headerImg{
		img{
			width:288rpx;
			height:146rpx;
		}
		p{
			color:#fff;
			font-size:28rpx;
		}
	}

	.resultList{
		background:#fff;
		border-radius: 5px;
		position:relative;
		.resultListInfo{
			display:flex;
			justify-content:space-between;
			position:absolute;
			z-index:9999;
			width:100%;	
			top:-44rpx;
			img{
				width:88rpx;
				height:88rpx;
				border-radius:88rpx;
			}
			>div{
				margin-left:40rpx;
				margin-right:40rpx;
				flex:1;
				font-size:40rpx;

			}
			.resultListInfoL{
				color:#E3495B;
				li{
					border: 1px solid #D8D8D8;
				}
			}
			
		}
		.resultListLi{
			color:#444;
			font-size:32rpx;
		}
	}

	



</style>




