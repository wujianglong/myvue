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
         	  	    	  	  <img class="imgBorder" src="https://static.eudic.net/web/jingtingdang/bitmap_img2.png" alt="">
         	  	    	  </div>
         	  	    	  <p class="score">100</p>
         	  	    	  <p class="name">wujainglong</p>
         	  	    </div>
         	  	    <div class="resultListInfoR t_r">
         	  	    	  <div class="">
         	  	    	  	  <img class="imgBorder" src="https://static.eudic.net/web/jingtingdang/bitmap_img2.png" alt="">
         	  	    	  </div>
         	  	    	  <p class="score">10</p>
         	  	    	  <p class="name">zhanghuanglong</p>
         	  	    </div>
         	  </div>
         	  <div class="resultListLi">
         	  	   <scroll-view scroll-y>
   		         	  	   <ul>
		         	  	   	   <li class="t_a" v-for="(item,index) in wordData">
		         	  	   	   	   <span class="f_l">
		         	  	   	   	   		<img src="https://static.eudic.net/web/yinyang/card_fail_icon@2x.png" alt="">
		         	  	   	   	   </span>
		         	  	   	   	   {{item}}
		         	  	   	   	   <span class="f_r">
		         	  	   	   	   		<img src="https://static.eudic.net/web/yinyang/card_right_icon@2x.png" alt="">
		         	  	   	   	   </span>
		         	  	   	   </li>
		         	  	   </ul>
         	  	   </scroll-view>
         	  </div>
         	  <div class="resultListBtn">
         	  	   <button class="resultListBtnL">继续挑战</button>
         	  	   <button class="resultListBtnR">炫耀成绩</button>
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
			margin-top:10rpx;
			margin-bottom:20rpx;
		}
	}

	.resultList{
		background:#fff;
		border-radius: 5px;
		position:relative;
		padding-bottom:20rpx;
		.resultListInfo{
			display:flex;
			justify-content:space-between;
			position:absolute;
			z-index:9999;
			width:100%;	
			top:-41rpx;
			img{
				width:82rpx;
				height:82rpx;
				border-radius:82rpx;
			}
			>div{
				margin-left:40rpx;
				margin-right:40rpx;
				flex:1;
				font-size:38rpx;

			}
			.resultListInfoL{
				color:#E3495B;
			}
		}
		.resultListLi{
			color:#444;
			font-size:32rpx;
			padding-top:180rpx;
			
			li{
				margin-left:40rpx;
				margin-right:40rpx;
				border-bottom: 0.5px solid #D8D8D8;
				padding-top:8rpx;
				padding-bottom:8rpx;
				display:flex;
				justify-content:space-between;
				align-items:center;
				span{
					font-size:46rpx;
					display:inline-block;
				}
				span.f_l{
					color:#7DBE69;
				}
				span.f_r{
					color:#E3495B;
				}
				img{
					width:32rpx;
					height:32rpx;
				}
			}
			li:last-child{
				border-bottom: none;
			}
			scroll-view{
				height:660rpx;
			}
		}
		.resultListBtn{
			display:flex;
			margin-top:20rpx;
			>button{
				width:45%;
				height:72rpx;
				line-height:72rpx;
				border:none;
				color:#fff;
			}
			.resultListBtnL{
				background-image: linear-gradient(-137deg, #6586DB 0%, #6D5BD9 100%);
				border-radius: 100px;
			}
			.resultListBtnR{
				background-image: linear-gradient(-90deg, #FBDA61 0%, #F76B1C 80%);
				border-radius: 100px;
			}
		}
	}
</style>




