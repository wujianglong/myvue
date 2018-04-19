<template>
	<div class="resultList">
		<div class="resultListInfo">
			<div class="resultListInfoL t_l">
				<div class="">
					<img class="imgBorder" :src=allInfo.user_info.user_avatar alt="">
				</div>
				<p class="score">{{allInfo.user_info.total_count}}</p>
				<p class="name">{{allInfo.user_info.user_name}}</p>
			</div>
			<div class="resultListInfoR t_r">
				<div class="">
					<img class="imgBorder" :src=allInfo.enemy_info.user_avatar alt="">
				</div>
				<p class="score">{{allInfo.enemy_info.total_count}}</p>
				<p class="name">{{allInfo.enemy_info.user_name}}</p>
			</div>
		</div>
		<div class="resultListLi">
			<scroll-view scroll-y>
				<ul>
					<li class="t_a" v-for="(item,index) in allInfo.word_info">
						<span class="f_l">
							<img :src="userSelect[index]==1?'https://static.eudic.net/web/yinyang/card_right_icon@2x.png':'https://static.eudic.net/web/yinyang/card_fail_icon@2x.png'" alt="">
						</span>
						<!-- {{item.word item.type item.explain}} -->
						<span class="f_r">
							<img :src="enemySelect[index]==1?'https://static.eudic.net/web/yinyang/card_right_icon@2x.png':'https://static.eudic.net/web/yinyang/card_fail_icon@2x.png'" alt="">
						</span>
					</li>
				</ul>
			</scroll-view>
		</div>
		<div class="resultListBtn">
			<button class="resultListBtnL" @click="continueChallenge">继续挑战</button>
			<button class="resultListBtnR" @click="showScore" open-type="share">炫耀成绩</button>
		</div>
	</div>
</template>

<!-- 
	global.app={
        lang:"fr",
        baseURI:"https://beta.frdic.com",
        userId:'',
        userName:'',
        bookId:'',
        bookName:'',
        token:'',
        haveLogin:false
    }
-->
<script>
export default{
	props:['wordData'],
	data(){
		return {
			allInfo:global.baseInfo,
			userSelect:[],
			enemySelect:[]
		}
	},
	created(){
	},
	onLoad(){
		this.allInfo=global.baseInfo;
		this.userSelect=global.app.userSelect
		this.enemySelect=global.app.enemySelect
	},
	methods:{
		//继续挑战
		continueChallenge(){
			wx.redirectTo({
				url: '../matching/main'
			})
		}
	},
	onShow(){
		//mpvue当中onshow  第二次会被调用
		console.log("onshow")
	},
	mounted(){
		console.log("mounted")
	},
	onShareAppMessage(){
		return {
			title: '一起来挑战吧!',
			path: '../matching/start',
			success: function(res) {
		        // 转发成功
		        console.log("转发成功")
		    },
		    fail: function(res) {
		        // 转发失败
		        console.log("转发失败")
		    }
		}
	}
}
</script>
<style lang="scss" scoped>	
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
			width:40%;
			font-size:38rpx;
		}
		.resultListInfoL{
			color:#E3495B;
			margin-left:40rpx;
		}
		.resultListInfoR{
			margin-right:40rpx;
		}
		.name{
			white-space:nowrap;
			text-overflow:ellipsis;
			overflow:hidden;
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