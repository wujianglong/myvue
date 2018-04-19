<template>
	<div class="cataLog container">
		<ul>
			<li v-for="(item, index) in cataData" :style="{background:item.bj}" @click="matchingLink(index)">
				<div class="userInfoLi" v-if="index==0">
					<div class="userInfoLiT">
						<img :src=item.userAvatar alt="">
						<div>
							<p>{{item.userName}}</p>
							<p>尚未选择任何课本</p>
						</div>
					</div>
					<div class="userInfoLiB clear">
						<div>
							<div class="f_l">
								<span>总场次:</span><span>{{item.totalCount}}</span>
							</div>
							<div class="f_r">
								<span>当前胜率:</span><span>{{item.WinPercentage}}</span>
							</div>
						</div>
						<div class="grayBj"></div>
					</div>
				</div>
				<div class="linkLi" v-else>
					<img :src=item.url alt="">
					<div>
						<p>{{item.title}}</p>
						<p>{{item.des}}</p>
					</div>
				</div>
			</li>
		</ul>
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
				userAvatar:"",
				//用户名
				userName:"",
				//总场次
				totalCount:"",
				//胜率
				WinPercentage:"",
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
			]
		}
	},
	methods : {
		matchingLink(index){
			switch(index){
				case 0:
				return false;
				break;
				case 1:
				wx.navigateTo({ 
					url:"../bookList/main"
				})
				break;
				case 2:
				wx.navigateTo({ 
					url:"../matching/main"
				})
				break;
				case 3:
				wx.navigateTo({ 
					url:"../result/main?type=rank"
				})
				break;
			}
			
		}
	},
	onLoad(){


		
		this.cataData[0].userAvatar=global.baseInfo.user_info.user_avatar
		//用户名
		this.cataData[0].userName=global.app.userName
		//总场次
		this.cataData[0].totalCount=global.baseInfo.user_info.total_count
		//胜率
		this.cataData[0].WinPercentage=global.baseInfo.user_info.win_percentage*100+"%"



	},
	onShow(){


	},
	onReady(){
   		  // var i=this.number;
	      // setInterval(function(){
	      // 	i++;
	      // 	console.log(i)
	      // },1000)
	  }
	}
	</script>
	<style scoped lang="scss">
	$ft_1:0.239rem;
	$ft_2:0.307rem;
	$ft_3:0.341rem;

	.cataLog{
		color:#fff;
		overflow:hidden;
		li:first-child{
			margin-top:0.5rem;
		}
		li{
			border-radius: 5px;
			margin-bottom:0.341rem;
		}
		.userInfoLiT{
			display:flex;
			padding-top:0.495rem;
			padding-left:6%;
			padding-right:6%;
			margin-bottom: 0.495rem;
			img{
				width:0.853rem;
				height:0.853rem;
				border-radius:0.853rem;
				border:2px solid #fff;
				margin-right:0.341rem;
			}
			div{
				p:first-child{
					font-size:$ft_2;
				}
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				font-size:$ft_1;
			}
		}

		.userInfoLiB{
			font-size:$ft_1;
			height:0.717rem;
			line-height:0.717rem;
			>div{
				position: relative;
				z-index:9;
				padding-left:6%;
				padding-right:6%;
			}

		}

		.linkLi{
			padding-bottom: 0.1rem;
			padding-top: 0.1rem;
			display:flex;
			div{
				padding-right:0.3rem;
				p:first-child{
					font-size:$ft_3;
					margin-top:0.5rem;
					margin-bottom:0.2rem;
				}
				p:last-child{
					line-height:1.3;
				}
				font-size:$ft_1;
			}
			img{
				width:2rem;
				height:2rem;
				margin-left: 0.1rem;
			}
		}
	}



	</style>




