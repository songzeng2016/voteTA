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
   * 添加评论
   * @param {String} content  - 评论内容
   */
  addComment: function (content) {
    let getData = {
      commentContent: "马拉多纳和其他的选手不是同一个层次的。他远远胜于其他的天才，相信像他那样的足球选手应该不会再出现第二个了。",
      userId: app.globalData.userInfo.id,
      votePeopleInfoId: this.id
    }

    wc.get(app.sessionId, '/app/vote/add_vote_comment.action', getData, json => {

    })
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
      that.setData({
        commentList: json
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id || ''
    this.id = id
    this.getCommentList({ id })

    this.setData({
      userInfo: app.globalData.userInfo
    })
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