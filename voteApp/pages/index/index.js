//index.js
//获取应用实例
const app = getApp()

const { wc } = app

Page({
  data: {
    cpage: 'index',
    guideLeft: 335,
  },

  // 导航切换页面
  navTab: function (e) {
    let data = e.currentTarget.dataset
    let { cpage, index } = data
    let guideLeft = this.data.guideLeft || ''

    switch (cpage) {
      case 'grade':
        !this.data.gradeList && this.getGradeList()
        break;
      case 'ranking':
        !this.data.rankingList && this.getRankingList()
        break;
      case 'score':
        !this.data.scoreList && this.getScoreList()
        break;
    }

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
  // 查看投票详情
  golist: function (e) {
    let data = e.currentTarget.dataset
    wc.navigateTo('/pages/bigList/bigList?id=' + data.id + '&status=' + data.status)
  },
  onLoad: function () {
    const that = this
    // 登录
    let getData = {}
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        getData.thirdPartyMark = res.code
   
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              let userInfo = res.userInfo
              getData.nickname = userInfo.nickName
              getData.gender = userInfo.gender
              getData.picUrl = userInfo.avatarUrl

              // 可以将 res 发送给后台解码出 unionId
              app.globalData.userInfo = res.userInfo

              that.setData({ userInfo })

              wc.get('', '/app/vote/register.action', getData, json => {
                app.sessionId = json.sessionId
                app.globalData.userInfo.id = json.id

                that.setData({  // 更新我的信息
                  myInfo: json
                })

                that.getVoteList()
                // that.getGradeList()
                // that.getRankingList()
              })

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (app.userInfoReadyCallback) {
                app.userInfoReadyCallback(res)
              }
            }
          })
    //     }
    //   }
    // })


      }
    })
  },
  // 获取投票列表
  getVoteList: function () {
    const that = this
    let voteDesc = ['已经结束', '大名单正在进行中', '四分之一正在进行中', '半决赛进行中', '决赛进行中']
    let getData = {
      'pageSize': 0,
      'pageOffset': 10
    }

    wc.get(app.sessionId, '/app/vote/get_voteinfo_list.action', getData, json => {
      let voteList = json

      voteList.forEach((item, i) => {
        item.voteDesc = voteDesc[item.voteStatus]
      })

      that.setData({ voteList })
    })
  },
  // 获取等级列表
  getGradeList: function () {
    const that = this

    wc.get(app.sessionId, '/app/vote/get_vote_level_list.action', {}, json => {
      let gradeList = {
        leftList: [],
        rightList: []
      }

      json.forEach((item, i) => {
        item.rankNumber = item.levelName
        item.integral = `${item.levelScore}-${item.levelScoreEnd}`

        if (item.rankNumber.indexOf('斗') >= 0) {
          gradeList.leftList.push(item)
        } else {
          gradeList.rightList.push(item)
        }
      })

      that.setData({ gradeList })
    })
  },
  // 获取排名列表
  getRankingList: function () {
    const that = this
    let getData = {
      'pageSize': 0,
      'pageOffset': 10
    }

    wc.get(app.sessionId, '/app/vote/get_total_ranked_list.action', getData, json => {
      let rankingList = json

      that.setData({ rankingList })
    })
  },
  // 获取成绩列表
  getScoreList: function () {
    const that = this
    let getData = {
      'voteInfoId': '',
      'votePeopleInfoId': ''
    }

    wc.get(app.sessionId, '/app/vote/get_vote_achievement_list.action', getData, json => {
      let scoreList = json

      that.setData({ scoreList })
    })
  }
})
