
var app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    selectAddressId: '',
    orderId: '',
    addressList: [],
    afterInitial: false,
    isFromBack: false,
    from: ''
  },
  onLoad: function(options){
    var that = this,
        selectAddressId = options.id,
        orderId = options.oid,
        from = options.from;

    app.sendRequest({
      url: '/index.php?r=AppShop/addressList',
      success: function(res){
        var address = res.data,
            addressList = [];

        for(var i = 0, j = address.length-1 ; i <= j; i++){
          addressList.push(address[i]);
        }
        that.setData({
          addressList: addressList,
          selectAddressId: selectAddressId,
          orderId: orderId,
          afterInitial: true,
          from: from
        })
      }
    })
  },
  onShow: function(){
    if(this.data.isFromBack){
      var that = this;
      app.sendRequest({
        url: '/index.php?r=AppShop/addressList',
        success: function(res){
          var address = res.data,
              addressList = [];

          for(var i = 0, j = address.length-1 ; i <= j; i++){
            addressList.push(address[i]);
          }
          that.setData({
            addressList: addressList
          })
        }
      })
    } else {
      this.setData({
        isFromBack: true
      })
    }
  },
  addAddress: function(){
    app.turnToPage('../addAddress/addAddress');
  },
  deleteAddress: function(e){
    var that = this,
        deleteId = e.target.dataset.id;

    app.showModal({
      content: '确定要删除地址？',
      showCancel: true,
      confirmText: '确定',
      cancelText: '取消',
      confirm: function(){
        app.sendRequest({
          url: '/index.php?r=AppShop/delAddress',
          data: {
            address_id: deleteId
          },
          success: function(res){
            var addressList = that.data.addressList;

            for (var i = 0, j = addressList.length - 1; i <= j; i++) {
              if(addressList[i].id == deleteId){
                addressList.splice(i, 1);
              }
            }
            that.setData({
              addressList: addressList
            })
          }
        })
      }
    })
  },
  selectAddress: function(e){
    var addressId = e.currentTarget.dataset.id,
        orderId = this.data.orderId;

    this.setData({
      selectAddressId: addressId
    })
    app.sendRequest({
      url: '/index.php?r=AppShop/setAddress',
      data: {
        order_id: orderId,
        address_id: addressId
      },
      success: function(res){
        app.turnBack();
      }
    });
  },
  editAddress: function(e){
    var addressId = e.currentTarget.dataset.id;

    app.turnToPage('../addAddress/addAddress?id='+addressId);
  }
})
