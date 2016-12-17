
var app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    editing: false,
    goodsCount: 0,
    goodsCountToPay: 0,
    priceToPay: 0.00,
    goodsList: [],
    selectAll: false,
    editSelectAll: false,
    modalConfig: {
      hidden: true,
      text: ''
    },
    timeout: null,
    isFromBack: false
  },
  onLoad: function(options){
    this.getShoppingCartData();
  },
  onShow: function(){
    if(this.data.isFromBack){
      // var data = {},
      //     index = this.data.currentTabIndex;

      // data['pages['+index+']'] = 1;
      // data['orderLists['+index+']'] = [];
      // this.setData(data);
      this.getShoppingCartData();

    } else {
      this.setData({
        isFromBack: true
      })
    }
  },
  getShoppingCartData: function(){
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppShop/cartList',
      data: {
        page: 1,
        page_size: 1000
      },
      success: function(res){
        that.setData({
          goodsCount: res.data.length,
          goodsList: res.data
        })
      }
    })
  },
  switchToEdit: function(){
    this.setData({
      editing: true
    })
  },
  editComplete: function(){
    var list = this.data.goodsList;

    for (var i = list.length - 1; i >= 0; i--) {
      list[i].editSelected = false;
    }

    this.setData({
      editing: false,
      goodsList: list
    })
  },
  clickSelectAll: function(){
    var alreadySelect = this.data.selectAll,
        list = this.data.goodsList;

    if(alreadySelect){
      for (var i = list.length - 1; i >= 0; i--) {
        list[i].selected = false;
      }
    } else {
      for (var i = list.length - 1; i >= 0; i--) {
        list[i].selected = true;
      }
    }
    this.setData({
      selectAll: !alreadySelect,
      goodsList: list
    })
    this.recalculateCountPrice();
  },
  clickEditSelectAll: function(){
    var alreadySelect = this.data.editSelectAll,
        list = this.data.goodsList;

    if(alreadySelect){
      for (var i = list.length - 1; i >= 0; i--) {
        list[i].editSelected = false;
      };
    } else {
      for (var i = list.length - 1; i >= 0; i--) {
        list[i].editSelected = true;
      };
    }

    this.setData({
      editSelectAll: !alreadySelect,
      goodsList: list
    })
  },
  clickSelectGoods: function(e){
    var index = e.currentTarget.dataset.index,
        list = this.data.goodsList,
        selectAll = true;

    list[index].selected = !list[index].selected;
    for (var i = list.length - 1; i >= 0; i--) {
      if(!list[i].selected){
        selectAll = false;
        break;
      }
    }
    this.setData({
      goodsList: list,
      selectAll: selectAll
    })
    this.recalculateCountPrice();
  },
  clickEditSelectGoods: function(e){
    var index = e.currentTarget.dataset.index,
        list = this.data.goodsList,
        editSelectAll = true;

    list[index].editSelected = !list[index].editSelected;
    for (var i = list.length - 1; i >= 0; i--) {
      if(!list[i].editSelected){
        editSelectAll = false;
        break;
      }
    }
    this.setData({
      goodsList: list,
      editSelectAll: editSelectAll
    })
  },
  recalculateCountPrice: function(){
    var list = this.data.goodsList,
        totalCount = 0,
        price = 0;

    for (var i = list.length - 1; i >= 0; i--) {
      var goods = list[i];
      if(goods.selected){
        totalCount += +goods.num;
        price += +goods.price * +goods.num;
      }
    }

    this.setData({
      goodsCountToPay: totalCount,
      priceToPay: price
    })
  },
  deleteGoods: function(){
    var deleteIdArr = [],
        list = this.data.goodsList,
        listExcludeDelete = [],
        that = this;

    for (var i = list.length - 1; i >= 0; i--) {
      if(list[i].editSelected){
        deleteIdArr.push(+list[i].id);
      } else {
        listExcludeDelete.push(list[i]);
      }
    }
    if(!deleteIdArr.length) { return; }

    this.setData({
      'modalConfig.hidden': false,
      'modalConfig.text': '确定删除选中商品？'
    })

    this.afterModalConfirm = function(){
      app.sendRequest({
        url : '/index.php?r=AppShop/deleteCart',
        method: 'post',
        data: {
          // ck_id: GetCookiePara(),
          cart_id_arr: deleteIdArr
        },
        success: function(res){
          that.setData({
            goodsList: listExcludeDelete,
            goodsCount: listExcludeDelete.length
          })
        }
      });
    };

  },
  goToPay: function(){
    var payIdArr = [],
        list = this.data.goodsList;

    for (var i = list.length - 1; i >= 0; i--) {
      if(list[i].selected){
        payIdArr.push({
          cart_id: list[i].id,
          goods_id: list[i].goods_id,
          model_id: list[i].model_id,
          num: list[i].num
        });
      }
    }
    if(!payIdArr.length) {
      app.showModal({
        content: '请选择结算的商品'
      })
      return;
    }
    if(!app.getUserInfo().phone){
      app.showModal({
        content: '请先绑定手机号码',
        showCancel: true,
        confirm: function(){
          app.turnToPage('../bindCellphone/bindCellphone');
        }
      })
      return;
    }

    app.sendRequest({
      url : '/index.php?r=AppShop/addCartOrder',
      method: 'post',
      data: {
        // ck_id: GetCookiePara(),
        cart_arr: payIdArr
      },
      success: function(res){
        app.turnToPage('../orderDetail/orderDetail?detail='+res.data);
      }
    });
  },
  clickMinusButton: function(e){
    var index = e.currentTarget.dataset.index,
        num = this.data.goodsList[index].num,
        data = {};

    if(num-1 < 1){
      return;
    }
    data['goodsList['+index+'].num'] = +num - 1;
    this.setData(data);
    this.recalculateCountPrice();
  },
  clickPlusButton: function(e){
    var index = e.currentTarget.dataset.index,
        num = this.data.goodsList[index].num,
        data = {};

    data['goodsList['+index+'].num'] = +num + 1;
    this.setData(data);
    this.recalculateCountPrice();
  },
  modalConfirm: function(){
    this.setData({
      'modalConfig.hidden': true
    })
    this.afterModalConfirm && this.afterModalConfirm();
    this.afterModalConfirm = null;
  },
  modalCancel: function(){
    this.setData({
      'modalConfig.hidden': true
    })
  }

})
