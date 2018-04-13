//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    flag:true,
  },
  //事件处理函数
  click: function () {
    this.setData({
      flag: false,
    })
  },
  cancel: function () {
    this.setData({
      flag: true,
    });
    wx.navigateBack({
    })
  },
  forgetPass:function(){
    wx.navigateTo({
      url: '../changePass/changePass',
    })
  },
})
