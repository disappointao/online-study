let datas = require('../../datas/list-data.js');
Page({
  data: {
    datas:[],
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
    this.setData({
      datas: datas.data
    })
  }
})
