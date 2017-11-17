// pages/bigList/bigList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  // 导航切换
  navTab: function (e) {
    let data = e.currentTarget.dataset
    console.log(e)
    let { cpage, index } = data
    let guideLeft = this.data.guideLeft || ''

    // 位置计算
    if (index < 2) {
      guideLeft = 24 + index * 145
    } else if (index == 2) {
      guideLeft = 340
    } else if (index == 3) {
      guideLeft = 485
    } else {
      guideLeft = 500 + (index - 3) * 140
    }
    this.setData({ cpage, guideLeft })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})