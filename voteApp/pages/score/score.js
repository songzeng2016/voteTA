// pages/score/score.js
const app = getApp()

const { wc } = app

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 获取成绩列表
  getScoreList: function (id) {
    const that = this
    let getData = {
      voteInfoId: id,
      votePeopleInfoId: app.globalData.userInfo.id
    }

    wc.get(app.sessionId, '/app/vote/get_vote_achievement_list.action', getData, json => {
      that.setData({
        scoreList: json
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    this.data.id = id
    this.getScoreList(id)
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