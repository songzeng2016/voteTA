//index.js
//获取应用实例
const app = getApp()

const { wc } = app

Page({
  data: {
    cpage: 'index',
    guideLeft: 335,
    grade: {
      leftList: [
        {
          desc: '一斗',
          num: '0000-1999',
          lbgc: '#53aadd',
        },
        {
          desc: '二斗',
          num: '0000-1999',
          lbgc: '#53aadd',
        },
        {
          desc: '三斗',
          num: '0000-1999',
          lbgc: '#53aadd',
        },
        {
          desc: '四斗',
          num: '0000-1999',
          lbgc: '#53aadd',
        },
        {
          desc: '五斗',
          num: '0000-1999',
          lbgc: '#2d71b6',
        },
        {
          desc: '六斗',
          num: '0000-1999',
        },
        {
          desc: '七斗',
          num: '0000-1999',
        },
        {
          desc: '八斗',
          num: '8000-9999',
        },
      ],
      rightList: [
        {
          desc: '一车',
          num: '0000-1999',
        },
        {
          desc: '二车',
          num: '0000-1999',
        },
        {
          desc: '三车',
          num: '0000-1999',
        },
        {
          desc: '四车',
          num: '0000-1999',
        },
        {
          desc: '五车',
          num: '0000-1999',
        },
      ]
    }
  },

  // 导航切换页面
  navTab: function (e) {
    let data = e.currentTarget.dataset
    let { cpage, index } = data
    let guideLeft = this.data.guideLeft || ''

    // 位置计算
    if (index < 2) {
      guideLeft = 24 + index * 145
    } else if (index == 2) {
      guideLeft = 335
    } else {
      guideLeft = 500 + (index - 3) * 145
    }
    this.setData({ cpage, guideLeft })
  },
  golist() {
    wx.navigateTo({
      url: '../bigList/bigList',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onLoad: function () {
    console.log(app.globalData)
    wc.get('', 'app/vote/register.action', app.globalData.loginData, json => {
      wx.setStorageSync('sessionId', json.sessionId)
      // app.sessionId = wx.getStorageSync('sessionId')
      // app.sessionId = json.sessionId
      // let getData = {
      //   'pageSize': 0,
      //   'pageOffset': 10
      // }
      // console.log(app.sessionId)
      // wc.get(app.sessionId, 'app/vote/get_voteinfo_list.action', getData, json => {

      // })
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
