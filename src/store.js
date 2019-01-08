import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      {
          title: '今日游记',
          time: '2018-12-12 12:34',
          showBtn: false,
          content: 'hhhhhhhh'
      },
      {
          title: '今日游记今日游记今日游记今日游记',
          time: '2018-12-12',
          showBtn: false
      },
      {
          title: '今日游记',
          time: '2018-12-12',
          showBtn: false
      },
      {
          title: '今日游记',
          time: '2018-12-12',
          showBtn: false
      },
      {
          title: '今日游记',
          time: '2018-12-12 12:34',
          showBtn: false
      },
      {
          title: '今日游记今日游记今日游记今日游记',
          time: '2018-12-12',
          showBtn: false
      },
      {
          title: '今日游记',
          time: '2018-12-12',
          showBtn: false
      },
      {
          title: '今日游记',
          time: '2018-12-12',
          showBtn: false
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
