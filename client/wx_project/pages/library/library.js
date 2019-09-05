// pages/library/library.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectNum:0,
    selected:true,

    types: [{
        name: "杂志",
        id: 0
      },
      {
        name: "号外",
        id: 1
      }
    ]
  },

  changeType(item) {
   /*console.log(this.data.selectNum);
    console.log(item.index);*/
    console.log(item);
    this.setData({
      selectNum: item.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this.data.selected)
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