const app = getApp()

const { wc } = app
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cpage: 'index',
    guideLeft: 25,
  },

  // 导航切换
  navTab: function (e) {
    let data = e.currentTarget.dataset
    // console.log(data)
    let { cpage, index } = data
    let guideLeft = this.data.guideLeft || ''
    index = this.data.index
    // 位置计算
    if (index == 1) {
      guideLeft = 24
    } else if (index == 2) {
      guideLeft = 185
    } else if (index == 3) {
      guideLeft = 340
    } else if (index == 4) {
      guideLeft = 490
    } else if (index == 0) {
      guideLeft = 640
    }
    this.setData({ cpage, guideLeft })
  },
  //跳转详情页
  goDetail(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../details/details?id=${id}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    let id = options.id
    let status = options.status
    let index = status
    let cpage = 'index'
    let guideLeft = 0

    this.data.id = id

    if (index == 1) {
      guideLeft = 24
      cpage = 'index'
    } else if (index == 2) {
      guideLeft = 185
      cpage = 'quarter'
    } else if (index == 3) {
      guideLeft = 340
      cpage = 'final'
    } else if (index == 4) {
      guideLeft = 490
      cpage = 'navTab'
    } else if (index == 0) {
      guideLeft = 640
      cpage = 'end'
    }
    this.setData({ cpage, guideLeft })
    // this.data.index  = status
    console.log("status" + status)
    let getData = {
      pageSize: 0,
      pageOffset: 100,
      voteInfoId: id,
      voteStatus: status
    }

    wc.get(app.sessionId, '/app/vote/get_votepeopleinfo_list.action', getData, json => {
      let bigList = json
      let mineTotalVoteNumber = bigList.mineTotalVoteNumber
      let mineTotalChipNumber = bigList.mineTotalChipNumber
      console.log(bigList)
      let fourArr = []
      for (var key in bigList) {
        if (bigList[key] instanceof Array) {
          fourArr.push(bigList[key])
        }
        // console.log(key)
      }
      console.log(fourArr)
      that.setData({ bigList, mineTotalVoteNumber, mineTotalChipNumber, fourArr })

    })
  },

  // 查看排名
  navToRanking: function (e) {
    wc.navigateTo(`/pages/ranking/ranking?id=${this.data.id}`)
  },
  // 查看成绩
  navToScore: function (e) {
    wc.navigateTo(`/pages/score/score?id=${this.data.id}`)
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