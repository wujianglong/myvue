<template>
	<div class="rankList">
     	  <div class="rankListLi">
     	  	   <scroll-view scroll-y>
	         	  	<ul>
         	  	   	    <li v-for="(item,index) in userData">
         	  	   	   	    <div class="rankLiL">
         	  	   	   	    	<img v-if="index<3" :src=item.medal alt="">
         	  	   	   	    	<span v-else>
         	  	   	   	    		{{index+1}}
         	  	   	   	    	</span>
         	  	   	   	    </div>
         	  	   	   	    <div class="rankLiR">
         	  	   	   	    	<img :src=item.avatar alt="">
         	  	   	   	    	<span class="name">
         	  	   	   	    		{{item.name}}	
         	  	   	   	    	</span>
         	  	   	   	    	<span class="score">
         	  	   	   	    		{{item.score}}分
         	  	   	   	    	</span>
         	  	   	   	    </div>
         	  	   	    </li>
         	  	   </ul>
     	  	   </scroll-view>
     	  </div>
     </div>
</template>
<script>
export default{
	props:['userData'],
	data(){
		return {
			userData:this.userData
		}
	}
}
</script>
<style lang="scss" scoped>	
	.rankList{
		background:#fff;
		border-radius: 5px;
		position:relative;
		padding-bottom:20rpx;
		.rankListLi{
			li{
				display:flex;
			}
			img{
				width:60rpx;
				height:60rpx;
			}
			color:#444;
			font-size:32rpx;
			.rankLiL{
				display:flex;
				justify-content:center;
				flex:1;
				display:flex;
				align-items:center;
			}
			.rankLiR{
				flex:4;
				display:flex;
				align-items:center;
				border-bottom: 0.5px solid #D8D8D8;
				padding-top:36rpx;
				padding-bottom:36rpx;
				.name{
					flex:1;
					margin-left:28rpx;
				}
				.score{
					margin-right:36rpx;
				}
			}
			scroll-view{
				height:660rpx;
			}
		}
	}
</style>