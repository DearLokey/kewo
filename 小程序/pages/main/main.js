const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arry: [
      { src: "../images/example.png", title: "2018南京市小学升初中指南指南指南指南指南", time: "2018.02.22" },
      { src: "../images/example.png", title: "2018南京市小学升初中指南指南指南指南指南", time: "2018.02.22" },
      { src: "../images/example.png", title: "2018南京市小学升初中指南指南指南指南指南", time: "2018.02.22" },
    ],
    flag: true,
    flag1: true,

  },
  /**
  * 弹出层函数
  */
  //出现
  show: function () {
    this.setData({
      flag: false,
    })
  },
  cancel: function () {
    this.setData({
      flag: true,
      flag1: true
    });
  },
  bind: function () {
    wx.navigateTo({
      url: '../regist/regist',
    })
    this.setData({
      flag: true
    })
  },
  dataDetail: function () {
    wx.navigateTo({
      url: '../dataDetail/dataDetail',
    })
  },
})