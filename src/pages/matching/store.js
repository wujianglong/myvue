// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    hh: {
      user_info:{    
          //头像
          user_avatar:'',
          //用户名
          user_name:'',
          //总场次
          total_count:'',
          //胜率
          win_percentage:'',
          //连胜场次
          straight_win_count:''
      },
      enemy_info:{
          //头像
          user_avatar:'',
          //用户名
          user_name:'',
          //总场次
          total_count:'',
          //胜率
          win_percentage:'',
          //连胜场次
          straight_win_count:''
      },
      word_info:[
          {    
              word: 'world',
              word_explain:'',
              answers: [
                {
                    title: 'n.m',
                    type: 1 
                },
                {
                    title: 'n.f',
                    type: -1 
                },
                {
                    title: 'n',
                    type: -1 
                },
                {
                    title: '不知道',
                    type: 0 
                }
              ], 
              enemy_selection:1
          },
          {    
              word:'',
              word_explain:'',
              answers: [
              {
                  title: 'n.m',
                  type: 1 
              },
              {
                  title: 'n.f',
                  type: -1 
              },
              {
                  title: 'n',
                  type: -1
              },
              {
                  title: '不知道',
                  type: 0 
              }
              ], 
              enemy_selection:1
          }
      ],
      degree_difficulty: '0.5'
    }
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    }
  }
})

export default store
