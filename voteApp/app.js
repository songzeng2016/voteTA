//app.js
import wc from './utils/util.js'

App({
  onLaunch: function () {
    // // 登录
    // let getData = {}
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     getData.thirdPartyMark = res.code
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           let userInfo = res.userInfo
    //           getData.nickname = userInfo.nickName
    //           getData.gender = userInfo.gender
    //           getData.picUrl = userInfo.avatarUrl

    //           console.log(getData)

    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           this.globalData.loginData = getData

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null
  },
  sessionId: '',
  wc: new wc()
})