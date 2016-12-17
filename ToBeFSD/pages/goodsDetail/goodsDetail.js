
var app = getApp()
var util = require('../../utils/util.js')
var WxParse = require('../../components/wxParse/wxParse.js');

Page({
  data: {
    goodsId: '',
    goodsInfo: {},
    modelStrs: {},
    selectModelInfo: {
      models: [],
      stock: '',
      price: '',
      buyCount: 1
    },
    commentNums: [],
    commentExample: '',
    defaultPhoto: '',
    allStock: '',
    addToShoppingCartHidden: true,
    ifAddToShoppingCart: true,
    toastConfig: {
      hidden: true,
      text: ''
    },
    modalConfig: {
      hidden: true,
      text: ''
    }
  },
  onLoad: function(options){
    var goodsId = options.detail,
        that = this,
        defaultPhoto = app.getDefaultPhoto();

    this.setData({
      goodsId: goodsId,
      defaultPhoto: defaultPhoto
    })
    app.setPageTitle('商品详情')
    app.sendRequest({
      url: '/index.php?r=AppShop/getGoods',
      data: {
        data_id: goodsId
      },
      success: that.modifyGoodsDetail
    })
  },
  goToMyOrder: function(){
    app.turnToPage('../myOrder/myOrder', true);
  },
  goToShoppingCart: function(){
    app.turnToPage('../shoppingCart/shoppingCart');
  },
  goToHomepage: function(){
    var router = app.getHomepageRouter();
    app.turnToPage('../'+router+'/'+router);
  },
  goToCommentPage: function(){
    app.turnToPage('../goodsComment/goodsComment?detail='+this.data.goodsId);
  },
  modifyGoodsDetail: function(res){
    var goods = res.data[0].form_data,
        description = goods.description,
        goodsModel = [],
        selectModels = [],
        modelStrs = {},
        price = 0,
        allStock = 0,
        selectStock, selectPrice, selectModelId, matchResult,
        i, j;

    matchResult = description && description.match(/<p>[\s\S]*?<\/p>/g);
    if(!matchResult){
      matchResult = [description];
    }
    goods.description = WxParse('html', description);

    // description = matchResult;
    // for( i = description.length - 1; i >= 0; i--){
    //   var templateArr = [];
    //   description[i] = description[i].replace(/(<p>[\s\S])|([\s\S]<\/p>)/g, '').trim();
    //   templateArr = description[i].replace(/(<img[\s\S]*?>)/g, function(match){ return '{separator}'+match+'{separator}'}).split('{separator}');
    //   description[i] = [];
    //   for( j = 0; j <= templateArr.length-1; j++ ){
    //     if(templateArr[j]){
    //       description[i].push(templateArr[j]);
    //     }
    //   }
    //
    //   for ( j = description[i].length - 1; j >= 0; j--) {
    //     var object = {},
    //         content = description[i][j],
    //         match = /src="(.*?)"/.exec(content);
    //
    //     if(match){
    //       object.type = 'image';
    //       object.content = match[1];
    //     } else {
    //       object.type = 'text';
    //       object.content = content;
    //     }
    //     description[i][j] = object;
    //   }
    // }
    // goods.description = description;

    if(goods.model_items.length){
      var items = goods.model_items;
      for (i = 0, j = items.length; i < j; i++) {
        price = Number(items[i].price);
        goods.highPrice = goods.highPrice > price ? goods.highPrice : price;
        goods.lowPrice = goods.lowPrice < price ? goods.lowPrice : price;
        allStock += Number(items[i].stock);
        if(i == 0){
          selectPrice = price;
          selectStock = items[0].stock;
          selectModelId = items[0].id;
        }
      }
    } else {
      selectPrice = goods.price;
      selectStock = goods.stock;
    }
    for(var key in goods.model){
      if(key){
        var model = goods.model[key];
        goodsModel.push(model);
        modelStrs[key] = model.subModelName.join('、');
        selectModels.push(model.subModelId[0]);
      }
    }
    goods.model = goodsModel;
    this.setData({
      goodsInfo: goods,
      modelStrs: modelStrs,
      'selectModelInfo.models': selectModels,
      'selectModelInfo.stock': selectStock,
      'selectModelInfo.price': selectPrice,
      'selectModelInfo.modelId': selectModelId,
      allStock: allStock
    })
    this.getAssessList();
  },
  getAssessList: function(){
    var that = this;
    app.getAssessList({
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded;'
      },
      data: {
        goods_id: that.data.goodsId,
        idx_arr: {
          idx: 'level',
          idx_value: 0
        },
        page: 1,
        page_size: 10
      },
      success: function(res){
        var commentExample = res.data[0];
        if(commentExample){
          commentExample.add_time = util.formatTime(new Date(commentExample.add_time * 1000));
        }
        that.setData({
          commentNums: res.num,
          commentExample: commentExample
        })
      }
    });
  },
  showBuyDirectly: function(){
    this.setData({
      addToShoppingCartHidden: false,
      ifAddToShoppingCart: false
    })
  },
  showAddToShoppingCart: function(){
    this.setData({
      addToShoppingCartHidden: false,
      ifAddToShoppingCart: true
    })
  },
  hiddeAddToShoppingCart: function(){
    this.setData({
      addToShoppingCartHidden: true
    })
  },
  selectSubModel: function(e){
    var dataset = e.target.dataset,
        modelIndex = dataset.modelIndex,
        submodelIndex = dataset.submodelIndex,
        data = {};

    data['selectModelInfo.models['+modelIndex+']'] = this.data.goodsInfo.model[modelIndex].subModelId[submodelIndex];
    this.setData(data);
    this.resetSelectCountPrice();
  },
  resetSelectCountPrice: function(){
    var selectModelIds = this.data.selectModelInfo.models.join(','),
        modelItems = this.data.goodsInfo.model_items,
        data = {};

    for (var i = modelItems.length - 1; i >= 0; i--) {
      if(modelItems[i].model == selectModelIds){
        data['selectModelInfo.stock'] = modelItems[i].stock;
        data['selectModelInfo.price'] = modelItems[i].price;
        data['selectModelInfo.modelId'] = modelItems[i].id;
        break;
      }
    }
    this.setData(data);
  },
  clickMinusButton: function(e){
    var count = this.data.selectModelInfo.buyCount;

    if(count <= 1){
      return;
    }
    this.setData({
      'selectModelInfo.buyCount': count - 1
    });
  },
  clickPlusButton: function(e){
    var selectModelInfo = this.data.selectModelInfo,
        count = selectModelInfo.buyCount,
        stock = selectModelInfo.stock;

    if(count >= stock) {
      return;
    }
    this.setData({
      'selectModelInfo.buyCount': count + 1
    });
  },
  sureAddToShoppingCart: function(){
    var that = this,
        param = {
                  goods_id: this.data.goodsId,
                  model_id: this.data.selectModelInfo.modelId,
                  num: this.data.selectModelInfo.buyCount
                };

    app.sendRequest({
      url: '/index.php?r=AppShop/addCart',
      data: param,
      success: function(res){
        var data = {};
        if(res.status !== 0){
          data['modalConfig.text'] = res.data;
          data['modalConfig.hidden'] = false;

        } else {
          data['toastConfig.hidden'] = false;
          data['toastConfig.text'] = '添加成功';
          that.afterToastChange = that.hiddeAddToShoppingCart;
        }

        that.setData(data);
      }
    })
  },
  buyDirectlyNextStep: function(){
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
    var that = this,
        param = {
                  goods_id: this.data.goodsId,
                  model_id: this.data.selectModelInfo.modelId,
                  num: this.data.selectModelInfo.buyCount
                };

    app.sendRequest({
      url: '/index.php?r=AppShop/addOrder',
      data: param,
      success: function(res){
        if(res.status !== 0){
          that.setData({
            'toastConfig.hidden': false,
            'toastConfig.text': res.data
          });
        } else {
          app.turnToPage('../orderDetail/orderDetail?detail='+res.data);
        }
      }
    })
  },
  toastChange: function(){
    this.setData({
      'toastConfig.hidden': true,
    })
    this.afterToastChange && this.afterToastChange();
    this.afterToastChange = null;
  },
  modalConfirm: function(){
    this.setData({
      'modalConfig.hidden': true
    })
    this.afterModalConfirm && this.afterModalConfirm();
    this.afterModalConfirm = null;
  },
  previewGoodsDetailPic: function(e){
    return;

    var el = e.target,
        tagName = el.tagName.toLowerCase(); // 官方文档里target有tagName属性，但是这里tagName为undefined

    if(tagName === 'image'){
      app.previewImage(el.dataset.src);
    }
  }
})
