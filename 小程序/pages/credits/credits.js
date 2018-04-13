// pages/credits/credits.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    flag1: true,
  },
  //事件处理函数
  seekdata:function(){
    wx.switchTab({
      url: '../main/main',
    })
  },
  click: function () {
    this.setData({
      flag: false,
    })
  },
  share: function () {
    this.setData({
      flag1: false,
      flag: true,
    })
  },
  cancel: function () {
    this.setData({
      flag1: true,
    });
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '星课资料积分系统',
      path: '/page/user?id=123',
      success: function (res) {
        console.log("success");
      },
      fail: function (res) {
        console.log("fail");
      }
    }
  },
})