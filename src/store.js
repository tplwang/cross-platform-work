import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [
      {
          title: '今日游记1',
          time: '2018-12-12 12:34',
          showBtn: false,
          content: '在过去一年的文学创作中，坚守现实主义的主潮依然格外鲜明。无论是博大的现实，还是浩瀚的历史，在文学的记忆中，都有着具体的情境、动人的细节、富有光彩的人物，揭示着社会历史发展规律，有助于人们更好地认识生活、理解历史，获得重铸精神的更大动力。'
      },
      {
          title: '今日游记今日游记今日游记今日游记',
          time: '2018-12-12',
          showBtn: false,
          content: '曾为当代文坛贡献出《我们播种爱情》《西线轶事》《本色》等作品的著名作家徐怀中先生'
      },
      {
          title: '今日游记2',
          time: '2018-12-12',
          showBtn: false,
          content: '王安忆的《考工记》围绕着木器业和老宅的建筑技艺展开细腻描写，有着从太平洋战争到新世纪一个甲子的时间跨度'
      },
      {
          title: '今日游记3',
          time: '2018-12-12',
          showBtn: false,
          content: '又有上海近现代都市化进程中的喧嚣骚动，更有人与物、新与旧、过去与现在的纠结。自我精神突围是作品的重要主题'
      },
      {
          title: '今日游记4',
          time: '2018-12-12 12:34',
          showBtn: false,
          content: '我的老爷子从来不问天上的风云，/只管地上的烟火，拖儿带女，/踉踉跄跄走进新的社会和时代'
      },
      {
          title: '今日游记今日游记今日游记今日游记',
          time: '2018-12-12',
          showBtn: false,
          content: '诗人梁平在《我的老爷子》一诗里，同样颂扬了生生不息的日常生活和踏踏实实的坚守'
      },
      {
          title: '今日游记5',
          time: '2018-12-12',
          showBtn: false,
          content: '他人生的信条就是过日子，/平安是福。/以前是他说经常梦见我，/我无动于衷。现在是我梦见他'
      },
      {
          title: '今日游记7',
          time: '2018-12-12',
          showBtn: false,
          content: '从文字层面上看，既有形形色色市民生活的沧桑，又有上海近现代都市化进程中的喧嚣骚动，更有人'
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
