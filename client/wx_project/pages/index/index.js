//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    height: 500,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    isMgz:true,
    selectedIndex:0,
    slideViews: [
      {
        imgUrl: "../../imgs/detail/00.png",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../imgs/detail/00.png",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../imgs/detail/00.png",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../imgs/detail/00.png",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      }
    ],
    magazines: [
      {
        imgUrl: "../../imgs/detail/00.png",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../imgs/detail/00.png",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../imgs/detail/00.png",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../imgs/detail/00.png",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../imgs/detail/00.png",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../imgs/detail/00.png",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      }
    ]
  },

  selectMgz:function(res){
    if(!this.data.isMgz){
      let isMgz = true;
      this.setData({isMgz});
    }
  },

  selectExtra:function(res){
    if(this.data.isMgz){
      let isMgz = false;
      this.setData({isMgz});
    }
  },

  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        let height = (750 / res.windowWidth) * res.windowHeight - 100;
        that.setData({ height });
        console.log(that.data.height);
      },
    })
  }
})
