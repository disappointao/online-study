let datas = require('../../datas/detail-datas');
Page({
  data: {
    datas:[],
    isMgz:true,
    selectedIndex:0,
    slideViews: [
      {
        imgUrl: "../../images/detail/00.jpg",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../images/detail/00.jpg",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../images/detail/00.jpg",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../images/detail/00.jpg",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      }
    ],
    magazines: [
      {
        imgUrl: "../../images/detail/00.jpg",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../images/detail/00.jpg",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../images/detail/00.jpg",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../images/detail/00.jpg",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../images/detail/00.jpg",
        date: "2019.08.08",
        publishNumber: "总第461期",
        price: "6.00"
      },
      {
        imgUrl: "../../images/detail/00.jpg",
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
