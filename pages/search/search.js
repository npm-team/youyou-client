Page({
  data: {
    searchWords: '',
    placeholder: '输入线路名、出发城市'
  },
  onLoad: function () {
  },
  onShow: function () {
  },
  // 文本输入框
  inputSearch: function (e) {
    this.setData({
      searchWords: e.detail.value
    });
  },
  doSearch: function () {
    this.setData({
      showResult: true
    });
  }
});
