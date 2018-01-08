// pages/ranking/ranking.js
const app = getApp()

const { wc } = app

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sType: 'all'
  },

  // 切换列表
  switchTab: function (e) {
    let sType = e.currentTarget.dataset.type
    this.setData({ sType })
  },

  // 获取排名列表
  getRankingList: function () {
    const that = this
    let getData = {
      pageSize: 0,
      pageOffset: 100
    }

    wc.get(app.sessionId, '/app/vote/get_total_ranked_list.action', getData, json => {
      that.setData({
        rankingList: json
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRankingList()
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