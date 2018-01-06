const [host, status, errmsg] = ['http://123.57.227.176:8080/', 'STATUS', 'ERRMSG']

class wc {
  constructor() {
    this.host = host
    this.status = status
  }

  get(sessionId, url, data, success) {
    wx.request({
      url: this.host + url,
      data,
      header: {
        'Cookie': 'sessionId=' + sessionId,
        'sessionId': sessionId
      },
      success: res => {
        if (res.data[status] === '0') {
          typeof success === 'function' && success(res.data.result)
        } else if (res.data[status] === '2') {
          console.log('msg: 结果为空')
        } else {
          console.log(res.data[errmsg])
        }
      }
    })
  }

  navigateTo(url) {
    wx.navigateTo({ url })
  }

}

export default wc