// pages/about/recommend/recommend.js
const app = getApp();
const API = require('../../../api/api.endpoint.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    text: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.dataStatus = true;
    let user_id = wx.getStorageSync("user_id");
    let params = {};
    params.user_id = user_id;
    API.APIUser.UserMoney(params).then(d => {
      if (d.data.code == 200) {
        console.log(d.data)
        d.data.user_erweima = 'https://iqqia.com/' + d.data.user_erweima
        this.setData({
          userInfo: d.data
        })
      }
    })
    API.APIUser.UserLoginCheck().then(d => {
      this.setData({
        text: d.data
      })
    })
  },  //复制邀请码
  copyClick: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            app.showTips(res)
          }
        })
      }
    })
  }, test: function () {
    console.log(1)
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