<template>
    <div class="result container">
         <div class="headerImg t_a">
         	  <img src="https://static.eudic.net/web/yinyang/test_success_bg@2x.png" alt="">
         	  <p>挑战成功 5连胜</p>
         </div>
         <result :wordData="wordData" v-if="componentChange" ></result>
         <rank :userData="allUserData" v-else></rank>
    </div>
</template>

<script>
import result from '@/components/result'
import rank from '@/components/rank'
export default {
   name: 'CataLog',
   created:()=>{

   },
   components: {
      result,rank
   },
   data:()=>{
   	  return {
   	  	wordData:[
   	  		'woman; n.f. 女人','boy; n.m. 男孩','cock; n.f. 公鸡','vea; n.f. 胖的','go; n.f. 走','woman; n.f. 女人','boy; n.m. 男孩','cock; n.f. 公鸡','vea; n.f. 胖的','go; n.f. 走'
   	  	],
   	  	allUserData:[
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
   	  	],
        componentChange:false
   	  }
   },
   methods : {
   	  matchingLink(){
   	      const url="../matching/main";
   	      wx.navigateTo({ url })
   	  },
      rUpdate(){
        this.$on('resultUpdate',function(e){
            console.log("1")
        })
      }
   },
   mounted(){
   		wx.setNavigationBarColor({
		  frontColor: '#ffffff',
		  backgroundColor: '#e24853',
		
		})
   },
   onLoad(options){
      console.log(options)
      if(options.type=="rank"){
        this.componentChange=false;
      }else{
        this.componentChange=true;
      }
   },
   onShow(){
      console.log("22")
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




