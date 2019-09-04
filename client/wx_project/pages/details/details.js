// pages/details/details.js
let datas=require('../../datas/detail-datas.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[],
    infor: [
      {
        title: "INFORMATION·资讯",
        color: "#8C9441",
        key:'information',
        msg: [
          "互动",
          "告别童年",
          "时话拾说",
          "我说",
          "世界观"
        ]
      },
      {
        title: "PICTURE·图说天下",
        color: "#E9B813",
        key:'picture',
        msg: [
          "插秧去",
          "上班去",
          "访日之旅",
          "史前森林",
          "珊瑚花园"
        ]
      },
      {
        title: "COVER STORY·封面故事",
        color: "#AA801E",
        key:'coverStory',
        msg: [
          "魔幻爬藤路",
          "捐款名校也要论资排辈",
          "名校教师眼中的爬藤家庭",
          "打工子弟出国上名校，这是个奇迹吗？",
          "中国留学生为何频频被退学"
        ]
      },
      {
        title: "CURRENT AFFAIRS·时事",
        color: "#008AD2",
        key:'currentAffairs',
        msg: [
          "特蕾莎·梅，英国最无能的政客？",
          "起底中科院研究生被杀案：老同学的千里谋害",
          "印度大选：一场莫迪式的胜利",
          "白宫御用殡葬师的生死业务",
          "韩国人高选举，先比唱跳功底",
          "在西班牙，为何人人都爱午睡"
        ]
      },
      {
        title: "business·财经",
        color: "#019BA3",
        key:'business',
        msg: [
          "酒国危局",
          '乐视暂退市，26万股民还未"散场"',
          '一个煤矿工人的"双矿工"生涯',
          '中古生意太好，日本老板"慌了"'
        ]
      },
      {
        title: "vission·视觉",
        color: "#20201E",
        key:'vision',
        msg: [
          "幻梦空屋"
        ]
      },
      {
        title: "enterainment·娱乐",
        color: "#E92D78",
        key:'entertainment',
        msg: [
          "战斗吧！欧美新生代Diva们",
          '谁的故事里没有一首姚谦呢',
          'X战警19年：未来何去何从？'
        ]
      },
      {
        title: "culture·文化",
        color: "#938986",
        key:'culture',
        msg: [
          "这个时代，我们为什么要学哲学",
          '卡洛斯，为什么是20世界的歌剧女神'
        ]
      },
      {
        title: "extra·号外",
        color: "#010101",
        key:'extra',
        msg: [
          "这个时代，我们为什么要学哲学",
          '卡洛斯，为什么是20世界的歌剧女神'
        ]
      },
      {
        title: "lifestyle·生活",
        color: "#93C01C",
        key:'lifestyle',
        msg: [
          "IN生活",
          '新品',
          '老寿星吃砒霜式的恋爱',
          '你注定只会吸引到相似地人',
          '你是星星的孩子，是流落凡间的天使'
        ]
      },
      {
        title: "column·专栏",
        color: "#713C5A",
        key:'column',
        msg: [
          "骤然变老的那一年",
          '罢课女孩'
        ]
      },
      {
        title: "memory·老照片",
        color: "#9B9B9B",
        key:'memory',
        msg: [
          "同年"
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      data:datas.data[0]
    })
  }
})