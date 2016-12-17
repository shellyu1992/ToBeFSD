
var app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    orderLists: [[], [], [], [], []],
    pages: [1, 1, 1, 1, 1],
    types: [undefined, 0, 1, 2, 3],
    noMore: [false, false, false, false, false],
    currentTabIndex: 0,
    isFromBack: false
    // allOrderList: [],
    // allOrderPage: 1
    // toPayOrderList: [],
    // toPayOrderPage: 1,
    // toSendOrderList: [],
    // toSendOrderPage: 1,
    // toReceiveOrderList: [],
    // toReceiveOrderPage: 1,
    // toCommentOrderList: [],
    // toCommentOrderPage: 1,
  },
  onLoad: function(options){
    this.getOrderList(0);
  },
  // onShow: function(){
  //   if(this.data.isFromBack){
  //     var data = {},
  //         index = this.data.currentTabIndex;

  //     data['pages['+index+']'] = 1;
  //     data['orderLists['+index+']'] = [];
  //     this.setData(data);
  //     this.getOrderList(index);

  //   } else {
  //     this.setData({
  //       isFromBack: true
  //     })
  //   }
  // },
  getOrderList: function(tabIndex, scrollLoad){
    var that = this,
        type = this.data.types[tabIndex],
        data = {
          page: that.data.pages[tabIndex],
          page_size: 50
        };

    if(type != undefined){
      data.idx_arr = {
        idx: 'status',
        idx_value: type
      }
    }

    app.sendRequest({
      url: '/index.php?r=AppShop/orderList',
      method: 'post',
      data: data,
      success: function(res){
        var data = {},
            orders = res.data;

        for (var i = orders.length - 1; i >= 0; i--) {
          var formData = orders[i].form_data;

          formData.totalPay = +formData.total_price + +formData.express_fee;
          orders[i] = formData;
        }
        if(scrollLoad){
          orders = that.data.orderLists[tabIndex].concat(orders);
        }
        data['orderLists['+tabIndex+']'] = orders;
        data['pages['+tabIndex+']'] = that.data.pages[tabIndex] + 1;
        data['noMore['+tabIndex+']'] = res.is_more == 0 ? true : false;
        that.setData(data);
      }
    })
  },
  clickOrderTab: function(e){
    var index = e.target.dataset.index,
        data = {};

    data.currentTabIndex = index;
    data['pages['+index+']'] = 1;
    data['orderLists['+index+']'] = [];
    data['noMore['+index+']'] = false;

    this.setData(data);
    this.getOrderList(index);
  },
  goToOrderDetail: function(e){
    var orderId = e.currentTarget.dataset.id;
    app.turnToPage('../orderDetail/orderDetail?detail='+orderId);
  },
  cancelOrder: function(e){
    var orderId = e.target.dataset.id,
        that = this;

    app.showModal({
      content: '确定要取消订单？',
      showCancel: true,
      cancelText: '否',
      confirmText: '确定',
      confirm: function(){
        app.sendRequest({
          url: '/index.php?r=AppShop/cancelOrder',
          data: {
            order_id: orderId
          },
          success: function(res){
            var index = that.data.currentTabIndex,
                data = {};

            data['pages['+index+']'] = 1;
            that.setData(data);
            that.getOrderList(index);
          }
        })
      }
    })
  },
  payOrder: function(e){
    var orderId = e.target.dataset.id;
    app.turnToPage('../orderDetail/orderDetail?detail='+orderId);
  },
  applyDrawback: function(e){
    var orderId = e.target.dataset.id,
        that = this;

    app.showModal({
      content: '确定要申请退款？',
      showCancel: true,
      cancelText: '取消',
      confirmText: '确定',
      confirm: function(){
        app.sendRequest({
          url: '/index.php?r=AppShop/applyRefund',
          data: {
            order_id: orderId
          },
          success: function(res){
            var index = that.data.currentTabIndex,
                data = {};

            data['pages['+index+']'] = 1;
            that.setData(data);
            that.getOrderList(index);
          }
        })
      }
    })
  },
  checkLogistics: function(e){
    var orderId = e.target.dataset.id;
    app.turnToPage('../logisticsPage/logisticsPage?detail='+orderId);
  },
  sureReceipt: function(e){
    var orderId = e.target.dataset.id,
        that = this;

    app.showModal({
      content: '确定已收到货物？',
      showCancel: true,
      cancelText: '取消',
      confirmText: '确定',
      confirm: function(){
        app.sendRequest({
          url: '/index.php?r=AppShop/comfirmOrder',
          data: {
            order_id: orderId
          },
          success: function(res){
            var index = that.data.currentTabIndex,
                data = {};

            data['pages['+index+']'] = 1;
            that.setData(data);
            that.getOrderList(index);
          }
        })
      }
    })
  },
  makeComment: function(e){
    var orderId = e.target.dataset.id;
    app.turnToPage('../makeComment/makeComment?detail='+orderId);
  },
  scrollToListBottom: function(){
    var currentTabIndex = this.data.currentTabIndex;
    if(this.data.noMore[currentTabIndex]){
      return;
    }
    this.getOrderList(currentTabIndex, true);
  }
})
