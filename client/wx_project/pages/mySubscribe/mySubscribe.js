// pages/mySubscribe/mySubscribe.js
let datas = require('../../datas/VIP.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    info: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      datas: datas.VIP,
      info: datas.info
    })

  },
  //点击函数
  checked: function(res) {
    console.log(datas.VIP)
    // let data = datas;
    for (let i = 0 ; i< datas.VIP.length;i++) {
      console.log(datas.VIP.checked);
      datas.VIP[i].checked = false;
    }
    let position = res.currentTarget.dataset.index;
    datas.VIP[position].checked = true;
    this.setData({
      datas: datas.VIP
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})