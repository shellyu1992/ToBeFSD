App({
  onLaunch: function () {
    var userInfo;
    if(userInfo = wx.getStorageSync('userInfo')){
      this.globalData.userInfo = userInfo;
    }
  },
  getAppData: function(){
    wx.request({
      url: '/index.php?r=AppData/detail',
      data: {
        app_id: this.globalData.appId
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        if (res.status !== 0) { return; }
        var that = this,
            info = res.data;

        this.globalData.formData = info.form_data;
      }
    });
  },


  /**
   * 微信接口封装
   */

  sendRequest: function(param, customSiteUrl){
    var that = this,
        data = param.data || {},
        header = param.header,
        requestUrl;

    data._app_id = this.getAppId();
    data.app_id = this.getAppId();
    if(!this.globalData.notBindXcxAppId){
      data.session_key = this.getSessionKey();
    }

    if(customSiteUrl) {
      requestUrl = customSiteUrl + param.url;
    } else {
      requestUrl = this.globalData.siteBaseUrl + param.url;
    }

    if(param.method){
      if(param.method.toLowerCase() == 'post'){
        data = this.modifyPostParam(data);
        header = header || {
          'content-type': 'application/x-www-form-urlencoded;'
        }
      }
      param.method = param.method.toUpperCase();
    }

    this.showToast({
      title: '请求中...',
      icon: 'loading'
    });
    wx.request({
      url: requestUrl,
      data: data,
      method: param.method || 'GET',
      header: header || {
        'content-type': 'application/json'
      },
      success: function(res) {
        if(res.statusCode && res.statusCode != 200){
          that.showModal({
            content: ''+res.errMsg
          });
          return;
        }
        if(res.data.status){
          if(res.data.status == 401){
            that.login();
            return;
          }
          if(res.data.status != 0){
            that.showModal({
              content: ''+res.data.data
            });
            return;
          }
        }
        typeof param.success == 'function' && param.success(res.data);
      },
      fail: function(res){
        that.showModal({
          content: '请求失败 '+res.errMsg
        })
        typeof param.fail == 'function' && param.fail(res.data);
      },
      complete: function(res){
        that.hideToast();
        typeof param.complete == 'function' && param.complete(res.data);
      }
    });
  },
  turnToPage: function(url, isRedirect){
    if(!isRedirect){
      wx.navigateTo({
        url: url
      });
    } else {
      wx.redirectTo({
        url: url
      });
    }
  },
  turnBack: function(){
    wx.navigateBack();
  },
  setPageTitle: function(title){
    wx.setNavigationBarTitle({
      title: title
    });
  },
  showToast: function(param){
    wx.showToast({
      title: param.title,
      icon: param.icon,
      duration: param.duration || 1500,
      success: function(res){
        console.log('success');
        typeof param.success == 'function' && param.success(res);
      },
      fail: function(res){
        typeof param.fail == 'function' && param.fail(res);
      },
      complete: function(res){
        typeof param.complete == 'function' && param.complete(res);
      }
    })
  },
  hideToast: function(){
    wx.hideToast();
  },
  showModal: function(param){
    wx.showModal({
      title: param.title || '提示',
      content: param.content,
      showCancel: param.showCancel || false,
      cancelText: param.cancelText || '取消',
      cancelColor: param.cancelColor || '#000000',
      confirmText: param.confirmText || '确定',
      confirmColor: param.confirmColor || '#3CC51F',
      success: function(res) {
        if (res.confirm) {
          typeof param.confirm == 'function' && param.confirm(res);
        } else {
          typeof param.cancel == 'function' && param.cancel(res);
        }
      },
      fail: function(res){
        typeof param.fail == 'function' && param.fail(res);
      },
      complete: function(res){
        typeof param.complete == 'function' && param.complete(res);
      }
    })
  },
  chooseImage: function(callback, count){
    var that = this;
    wx.chooseImage({
      count: count || 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths,
            imageUrls = [];

        for (var i = 0; i < tempFilePaths.length; i++) {
          wx.uploadFile({
            url : that.globalData.siteBaseUrl+ '/index.php?r=AppData/uploadImg',
            filePath: tempFilePaths[i],
            name: 'img_data',
            success: function(res){
              var data = JSON.parse(res.data);
              if(data.status == 0){
                imageUrls.push(data.data);
                if(imageUrls.length == tempFilePaths.length){
                  typeof callback == 'function' && callback(imageUrls);
                }
              } else {
                that.showModal({
                  content: data.data
                })
              }
            },
            fail: function(res){
              console.log(res.errMsg);
            }
          })
        }

      }
    })
  },
  previewImage: function(previewUrl, previewUrlsArray){
    wx.previewImage({
      current: previewUrl,
      urls: previewUrlsArray
    })
  },
  uploadImage: function(filePath, callback){
    this.sendRequest({
      url: '/index.php?r=AppData/uploadImg',
      data: {
        filePath: filePath
      },
      method: 'POST',
      success: callback
    });
  },
  playVoice: function(filePath){
    wx.playVoice({
      filePath: filePath
    });
  },
  pauseVoice: function(){
    wx.pauseVoice();
  },
  wxPay: function(param){
    wx.requestPayment({
      'timeStamp': param.timeStamp,
      'nonceStr': param.nonceStr,
      'package': param.package,
      'signType': 'MD5',
      'paySign': param.paySign,
      success: function(res){
      },
      fail: function(res){
      }
    })
  },
  makePhoneCall: function(number, callback){
    if(number.currentTarget){
      var dataset = number.currentTarget.dataset;

      number = dataset.number;
    }
    wx.makePhoneCall({
      phoneNumber: number,
      success: callback
    })
  },
  login: function(afterLoginCallback){
    var that = this;

    wx.login({
      success: function(res){
        if (res.code) {
          that.sendCode(res.code, afterLoginCallback);
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      },
      fail: function(res){
        console.log('login fail: '+res.errMsg);
      }
    })
  },
  sendCode: function(code, afterLoginCallback){
    var that = this;
    this.sendRequest({
      url: '/index.php?r=AppUser/onLogin',
      data: {
        code: code
      },
      success: function(res){
        if(res.is_login == 2) {
          that.globalData.notBindXcxAppId = true;
        }
        that.setSessionKey(res.data);
        that.requestUserInfo(res.is_login);
        typeof afterLoginCallback == 'function' && afterLoginCallback();
      },
      fail: function(res){
        console.log('sendCode fail: '+res.errMsg);
      },
      complete: function(res){

      }
    })
  },
  sendSessionKey: function(afterLoginCallback){
    var that = this;
    try {
      var key = wx.getStorageSync('session_key');
    } catch(e) {

    }

    if (!key) {
      console.log("check login key=====");
      this.login(afterLoginCallback);

    } else {
      this.globalData.sessionKey = key;
      this.sendRequest({
        url: '/index.php?r=AppUser/onLogin',
        success: function(res){
          if(!res.is_login){
            that.login(afterLoginCallback);
            return;
          } else if(res.is_login == 2) {
            that.globalData.notBindXcxAppId = true;
          }
          that.requestUserInfo(res.is_login);
          typeof afterLoginCallback == 'function' && afterLoginCallback();
        },
        fail: function(res){
          console.log('sendSessionKey fail: '+res.errMsg);
        }
      });
    }

  },
  requestUserInfo: function(is_login){
    if(is_login==1){
      this.requestUserXcxInfo();
    } else {
      this.requestUserWxInfo();
    }
  },
  requestUserXcxInfo: function(){
    var that = this;
    this.sendRequest({
      url: '/index.php?r=AppData/getXcxUserInfo',
      success: function(res){
        if(res.status == 0){
          if(res.data){
            that.setUserInfo(res.data);
          }
        }
      },
      fail: function(res){
        cosnole.log('requestUserXcxInfo fail:'+ res.errMsg);
      }
    })
  },
  requestUserWxInfo: function(){
    var that = this;
    wx.getUserInfo({
      success: function(res){
        that.sendUserInfo(res.userInfo);
      },
      fail: function(res){
        cosnole.log('requestUserWxInfo fail:'+ res.errMsg);
      }
    })
  },
  sendUserInfo: function(userInfo){
    var that = this;
    this.sendRequest({
      url: '/index.php?r=AppUser/LoginUser',
      method: 'post',
      data: {
        nickname: userInfo['nickName'],
        gender: userInfo['gender'],
        city: userInfo['city'],
        province: userInfo['province'],
        country: userInfo['country'],
        avatarUrl: userInfo['avatarUrl']
      },
      success: function(res){
        if(res.status == 0){
          that.setUserInfo(res.data.user_info);
        }
      },
      fail: function(res){
        cosnole.log('requestUserXcxInfo fail:'+ res.errMsg);
      }
    })
  },
  checkLogin: function(success, fail, afterLoginCallback){
    var that = this;
    success(afterLoginCallback);
  },



  /**
   * app业务逻辑方法
   */
  getDynamicPageData: function(param){
    param.url = '/index.php?r=AppData/getFormData';
    this.sendRequest(param);
  },
  getDynamicListData: function(param){
    param.url = '/index.php?r=AppData/getFormDataList';
    this.sendRequest(param);
  },
  getAssessList: function(param){
    param.url = '/index.php?r=AppShop/GetAssessList';
    this.sendRequest(param);
  },
  getOrderDetail: function(param){
    param.url = '/index.php?r=AppShop/getOrder';
    this.sendRequest(param);
  },
  clickLike: function(param){
    param.url = '/index.php?r=AppData/addCount';
    this.sendRequest(param);
  },
  clickCancelLike: function(param){
    param.url = '/index.php?r=AppData/delCount';
    this.sendRequest(param);
  },
  modifyPostParam: function(obj) {
    let query = '',
        name, value, fullSubName, subName, subValue, innerObj, i;

    for(name in obj) {
      value = obj[name];

      if(value instanceof Array) {
        for(i=0; i < value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += this.modifyPostParam(innerObj) + '&';
        }
      }
      else if(value instanceof Object) {
        for(subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += this.modifyPostParam(innerObj) + '&';
        }
      }
      else if(value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  },
  getHomepageRouter: function(){
    return this.globalData.homepageRouter;
  },
  getAppId: function(){
    return this.globalData.appId;
  },
  getDefaultPhoto: function(){
    return this.globalData.defaultPhoto;
  },
  getSessionKey: function(){
    return this.globalData.sessionKey;
  },
  setSessionKey: function(session_key){
    this.globalData.sessionKey = session_key;
    wx.setStorage({
      key: 'session_key',
      data: session_key
    })
  },
  getUserInfo: function(){
    return this.globalData.userInfo;
  },
  setUserInfo: function(info){
    for(var key in info){
      this.globalData.userInfo[key] = info[key];
    }
    wx.setStorage({
      key: 'userInfo',
      data: this.globalData.userInfo
    })
  },
  globalData:{
    appId: 'kS9gOd22sR',
    homepageRouter: null,
    formData: null,
    userInfo: {},
    sessionKey: '',
    notBindXcxAppId: false,
    cdnUrl: 'http://1251027630.cdn.myqcloud.com/1251027630',
    defaultPhoto: 'http://1251027630.cdn.myqcloud.com/1251027630/zhichi_frontend/static/webapp/images/default_photo.png',
    siteBaseUrl:'https://www.jisuapp.cn'
  }
})

