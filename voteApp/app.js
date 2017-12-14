//app.js
App({
  onLaunch: function () {
    // 登录
    let getData = {}
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        getData["thirdPartyMark"] = res.code
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              let userInfo = res.userInfo
              getData["nickname"] = userInfo.nickName
              getData["gender"] = userInfo.gender
              getData["picUrl"] = userInfo.avatarUrl

              console.log(getData)

              // https://api.weixin.qq.com/sns/jscode2session?appid=wxc3c8db0e2f7d073c&secret=9fba457a42a1c8abefbd3e8ac165333a&js_code=071qt4vZ0prxJY14WSuZ0hg0vZ0qt4vw&grant_type=authorization_code

              // wx.request({
              //   url: 'http://123.57.227.176:8080/app/vote/login.action',
              //   data: {
              //     'thirdPartyMark': getData.thirdPartyMark
              //   },
              //   success: res => {
              //     if (res.data.ERRCODE == 106) {
              //       wx.request({
              //         url: 'http://123.57.227.176:8080/app/vote/register.action',
              //         data: getData,
              //         method: 'POST',
              //         header: {
              //           'content-type': 'application/x-www-form-urlencoded' // 默认值
              //         },
              //         success: res => {

              //         }
              //       })
              //     }
              //   }
              // })

              wx.request({
                url: 'http://123.57.227.176:8080/app/vote/register.action',
                data: getData,
                method: 'POST',
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                success: res => {
                  wx.request({
                    url: 'http://123.57.227.176:8080//app/vote/get_voteinfo_list.action',
                    data: {
                      'pageSize': 0,
                      'pageOffset': 10
                    },
                    header: {
                      'cookie': 'sessionId=' + res.data.result.sessionId,
                      // 'sessionId': res.data.result.sessionId
                    },
                    success: res => {

                    }
                  })

                }
              })

              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})