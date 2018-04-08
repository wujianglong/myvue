# myvue

> yinyang

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


2.数据接口
{
	userInfo:{	
		//头像
		userAvatar:"",
		//用户名
		userName:"",
		//总场次
		totalCount:"",
		//胜率
		WinPercentage:"",
		.....
	},
	enemyInfo:{
		//头像
		userAvatar:"",
		//用户名
		userName:"",
		//总场次
		totalCount:"",
		//胜率
		WinPercentage:"",
		.....
	},
	wordInfo:[
		{	
			//单词
			word:"",
			//单词解释
			wordExplain:"",
			//单词词性列表
			wordTypeList:[
				'n.m.',
				'n.f',
				'n.m.',
				'n.f',
			],
			//单词词性
			wordType:1,
		},
		{	
			//单词
			word:"",
			//单词解释
			wordExplain:"",
			//单词词性列表
			wordTypeList:[
				'n.m.',
				'n.f',
				'n.m.',
				'n.f',
			],
			//单词词性
			wordType:1,
		},
		{	
			//单词
			word:"",
			//单词解释
			wordExplain:"",
			//单词词性列表
			wordTypeList:[
				'n.m.',
				'n.f',
				'n.m.',
				'n.f',
			],
			//单词词性
			wordType:1,
		},
		...
	],
	degreeDifficulty:"0.5"
}