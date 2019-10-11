// page/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.request({
      url: 'https://m.mtime.cn/Service/callback.mi/TopList/TopListDetailsByRecommend.api?t=2019101117243038826&pageIndex=1&type=1&toplistId=2065&pageSubAreaID=2065',
      header: {
        "Content-Type": "json",
      },
      success: function (res) {
        that.setData({
          movieList: res.data.movies
        })
        wx.hideNavigationBarLoading()
      }
    })
  },

  f0: function(e) {
    this.setData({
      currentIndex: this.data.movieList.length - 1
    })
  },

  f1: function(e) {
    var mid = e.currentTarget.dataset.movieId
    wx.navigateTo({
      url: '/pages/detail/detail?mid=' + mid,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return{
      title:"每周推荐"
    }
  }
})