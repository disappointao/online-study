// pages/details/details.js
let datas=require('../../datas/detail-datas');
let template = require('../../datas/detail-template');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[],
    info:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      data:datas.data[options.id],
      info:template.info
    })
  }
})