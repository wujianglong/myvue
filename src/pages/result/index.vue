<template>
    <div class="result container">
         <div class="headerImg t_a">
         	  <img src="https://static.eudic.net/web/yinyang/test_success_bg@2x.png" alt="">
         	  <p>挑战成功 5连胜</p>
         </div>
         <!-- <result :wordData="wordData"></result> -->
         <rank :userData="userData"></rank>
    </div>
</template>

<script>
import returnBtn from '@/components/return'
import result from '@/components/result'
import rank from '@/components/rank'
export default {
   name: 'CataLog',
   created:()=>{

   },
   components: {
      returnBtn,result,rank
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
   	  	],
   	  	userData:[
   	  		{	
   	  			"name":"wjl",
   	  			"medal":"https://static.eudic.net/web/yinyang/rank_gold_img@2x.png",
   	  			"avatar":"https://static.eudic.net/web/jingtingdang/bitmap_img2.png",
   	  			"score":"94"
   	  		},
   	  		{	
   	  			"name":"wjl1",
   	  			"medal":"https://static.eudic.net/web/yinyang/rank_silver_img@2x.png",
   	  			"avatar":"https://static.eudic.net/web/jingtingdang/bitmap_img2.png",
   	  			"score":"94"
   	  		},
   	  		{	
   	  			"name":"wjl2",
   	  			"medal":"https://static.eudic.net/web/yinyang/rank_copper_img@2x.png",
   	  			"avatar":"https://static.eudic.net/web/jingtingdang/bitmap_img2.png",
   	  			"score":"94"
   	  		},
   	  		{	
   	  			"name":"wjl3",
   	  			"avatar":"https://static.eudic.net/web/jingtingdang/bitmap_img2.png",
   	  			"score":"94"
   	  		},
   	  		{	
   	  			"name":"wjl4",
   	  			"avatar":"https://static.eudic.net/web/jingtingdang/bitmap_img2.png",
   	  			"score":"94"
   	  		},
   	  		{	
   	  			"name":"wjl5",
   	  			"avatar":"https://static.eudic.net/web/jingtingdang/bitmap_img2.png",
   	  			"score":"94"
   	  		},
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

	
</style>




