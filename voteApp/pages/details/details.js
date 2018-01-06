// pages/details/details.js
const app = getApp()
const { wc } = app

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 获取评论列表
   * @param {Number} count  - 分页的条数
   * @param {Number} page   - 当前页数
   * @param {Number} id     - 候选人ID
  */
  getCommentList: function ({ count = 50, page = 0, id = '' } = {}) {
    const that = this
    let getData = {
      pageSize: count,
      pageOffset: page,
      votePeopleInfoId: id
    }

    wc.get(app.sessionId, '/app/vote/get_votecomment_list.action', getData, json => {

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id || ''
    this.id = id
    this.getCommentList({ id })
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