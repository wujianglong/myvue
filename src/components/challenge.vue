<template>
	<div class="challenge">
		<div class="matchingInfo p_r" :class="{left0:left0}">
			<div class="grayBj">
				
			</div>
			<div class="detailInfo p_a">
				<div class="detailInfoL">
					<div class="portrait">
						<img class="imgBorder" :src=allInfo.user_info.user_avatar  alt="">
					</div>
					<div class="nameAndScore">
						<p class="name">
							{{allInfo.user_info.user_name}}
						</p>
						<p class="score">
							{{userScore}}<span>分</span>
						</p>
					</div>
				</div>
				<div class="detailInfoR">
					<div class="nameAndScore">
						<p class="name t_r">
							{{allInfo.enemy_info.user_name}}
						</p>
						<p class="score t_r">
							{{enemyScore}}<span>分</span>
						</p>
					</div>
					<div class="portrait">
						<img class="imgBorder" :src=allInfo.enemy_info.user_avatar alt="">
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
import optionSelect from '@/components/option'
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
			clickCount:0,
			allInfo:{},
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
			let g=global.baseInfo.word_info

			this.enemyScoreList=g.map((o,i)=>{
				if(o.answers[o.enemy_selection].type==1){
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

   	  		
	        global.app.userScore=userNum;
	        global.app.enemyScore=enemyNum;
	        global.app.userSelect=this.userScoreList;
	        global.app.enemySelect=this.enemyScoreList;
	    },
	    dataUpdate(){
	    	this.clickCount++;
	    	this.data=global.baseInfo.word_info[this.clickCount]
	    }
	},
	mounted(){
   	  //兼容 延迟才有动画
   	  setTimeout(()=>{
   	  	this.left0=true;
   	  },100)
	},
	onLoad(){
		this.allInfo=global.baseInfo;
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
			width:50%;
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
.nameAndScore{
	width:60%;

}
.name{
	overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;

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




