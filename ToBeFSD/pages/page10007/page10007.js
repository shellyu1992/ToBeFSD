var appInstance = getApp();
var WxParse     = require('../../components/wxParse/wxParse.js');
var util        = require('../../utils/util.js');

var pageData    = {
  data: {"carousel1":{"type":"carousel","style":"height:351.5625rpx;margin-right:auto;margin-top:4.6875rpx;opacity:1;margin-left:auto;","content":[{"customFeature":{"action":"inner-link","page-link":"page10037"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5854ef0550b3e.png","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":0,"eventParams":"{\"inner-page-link\":\"\\\/pages\\\/page10037\\\/page10037\"}","eventHandler":"tapInnerLinkHandler"},{"customFeature":{"action":"inner-link","page-link":"page10036"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5854ef02c8d52.png","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":1,"eventParams":"{\"inner-page-link\":\"\\\/pages\\\/page10036\\\/page10036\"}","eventHandler":"tapInnerLinkHandler"},{"customFeature":{"action":"inner-link","page-link":"page10008"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5854ef0899cde.jpg","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":2,"eventParams":"{\"inner-page-link\":\"\\\/pages\\\/page10008\\\/page10008\"}","eventHandler":"tapInnerLinkHandler"},{"customFeature":{"action":"inner-link","page-link":"page10038"},"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5854ef0e1cc65.png","content":"","parentCompid":"carousel1","style":"","itemType":null,"itemParentType":"carousel","itemIndex":3,"eventParams":"{\"inner-page-link\":\"\\\/pages\\\/page10038\\\/page10038\"}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"autoplay":true,"interval":2},"animations":[],"page_form":"","compId":"carousel1"},"list2":{"type":"list","style":"background-color:#00FFFFFF;color:#222222;font-size:37.5rpx;margin-top:7.03125rpx;opacity:1;text-align:left;margin-left:auto;","content":[{"customFeature":{"action":"inner-link","page-link":"page10037"},"title":"Debug命令，PC的早期开山老祖","secTitle":"Debug的由来，有一则趣闻，在早期美国的一计算机房中，科学家正在紧张的工作","pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5854ef0550b3e.png","content":"","listStyle":"margin-bottom:2.34375rpx;background-color:#E8E8E8;height:147.65625rpx;margin-left:auto;","imgStyle":"width:140.625rpx;height:140.625rpx;margin-left:auto;","secTitleStyle":"color:#666666;font-size:28.125rpx;text-align:left;margin-left:auto;","titleWidth":"width:585.9375rpx;margin-left:auto;","eventParams":"{\"inner-page-link\":\"\\\/pages\\\/page10037\\\/page10037\"}","eventHandler":"tapInnerLinkHandler","parentCompid":"list2","style":"","itemType":null,"itemParentType":"list","itemIndex":0},{"customFeature":{"action":"inner-link","page-link":"page10036"},"title":"数据库的唯一索引","secTitle":"唯一索引是不允许表中任何两行具有相同索引值的索引。","pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5854ef02c8d52.png","content":"","listStyle":"margin-bottom:2.34375rpx;background-color:#E8E8E8;height:147.65625rpx;margin-left:auto;","imgStyle":"width:140.625rpx;height:140.625rpx;margin-left:auto;","secTitleStyle":"color:#666666;font-size:28.125rpx;text-align:left;margin-left:auto;","titleWidth":"width:585.9375rpx;margin-left:auto;","eventParams":"{\"inner-page-link\":\"\\\/pages\\\/page10036\\\/page10036\"}","eventHandler":"tapInnerLinkHandler","parentCompid":"list2","style":"","itemType":null,"itemParentType":"list","itemIndex":1},{"customFeature":{"action":"inner-link","page-link":"page10008"},"title":"如何解决JsonObject无序的问题","secTitle":"最近做一个项目解析json数据的时候遇到了json无序的问题","pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5854ef0899cde.jpg","content":"","listStyle":"margin-bottom:2.34375rpx;background-color:#E8E8E8;height:147.65625rpx;margin-left:auto;","imgStyle":"width:140.625rpx;height:140.625rpx;margin-left:auto;","secTitleStyle":"color:#666666;font-size:28.125rpx;text-align:left;margin-left:auto;","titleWidth":"width:585.9375rpx;margin-left:auto;","eventParams":"{\"inner-page-link\":\"\\\/pages\\\/page10008\\\/page10008\"}","eventHandler":"tapInnerLinkHandler","parentCompid":"list2","style":"","itemType":null,"itemParentType":"list","itemIndex":2},{"customFeature":{"action":"inner-link","page-link":"page10038"},"title":"VPS是什么意思？VPS详解","secTitle":"那么什么是VPS技术？它又能带给交易者怎样的好处","pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5854ef0e1cc65.png","content":"","listStyle":"margin-bottom:2.34375rpx;background-color:#E8E8E8;height:147.65625rpx;margin-left:auto;","imgStyle":"width:140.625rpx;height:140.625rpx;margin-left:auto;","secTitleStyle":"color:#666666;font-size:28.125rpx;text-align:left;margin-left:auto;","titleWidth":"width:585.9375rpx;margin-left:auto;","eventParams":"{\"inner-page-link\":\"\\\/pages\\\/page10038\\\/page10038\"}","eventHandler":"tapInnerLinkHandler","parentCompid":"list2","style":"","itemType":null,"itemParentType":"list","itemIndex":3}],"customFeature":{"imgHeight":60,"imgWidth":60,"lineBackgroundColor":"rgb(232, 232, 232)","lineBackgroundImage":"","lineHeight":"63","margin":1,"mode":0,"secColor":"rgb(102, 102, 102)","secFontSize":"12px","secFontStyle":"","secFontWeight":"","secTextAlign":"left","secTextDecoration":""},"animations":[],"page_form":"","compId":"list2","itemType":"list","itemParentType":null,"itemIndex":"list2"}},
  page_router: 'page10007',
    page_form: 'none',
      list_compids_params: [],
      goods_compids_params: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      tapInnerLinkHandler: function(event) {
    if (event.currentTarget.dataset.eventParams) {
        var url = JSON.parse(event.currentTarget.dataset.eventParams)['inner-page-link'];
        if (url) {
            appInstance.turnToPage(url);
        }
    }
},
    onLoad: function (e) {
    this.setUserInfo();
    if(e.detail){
      this.dataId = e.detail;
    }
    if(!appInstance.getSessionKey()){
      appInstance.checkLogin(appInstance.sendSessionKey, appInstance.login, this.dataInitial);
    } else {
      this.dataInitial();
    }
  },
  dataInitial: function(){
    var _this = this;
    var newdata = {};

    if (!!this.dataId && !!this.page_form) {
      var dataid = parseInt(this.dataId);
      var param = {};

      param.data_id = dataid;
      param.form = _this.page_form;
      appInstance.sendRequest({
        url: '/index.php?r=AppData/getFormData',
        data: param,
        success: function (res) {
          if (res.status == 0) {
            newdata = {};
            newdata['detail_data'] = res.data[0].form_data;

            for (let i in newdata['detail_data']) {
              if (i == 'category') {
                continue;
              }

              let description = newdata['detail_data'][i];

              if (!description) {
                continue;
              }

              let matchResult = typeof description == 'string' && description.match(/<p>[\s\S]*?<\/p>/g);
              if (matchResult) {
                newdata['detail_data'][i] = WxParse('html', newdata['detail_data'][i]);
              }
            }
            _this.setData(newdata);

            if (!!_this.dynamicVesselComps) { // 处理动态容器请求
              for (let i in _this.dynamicVesselComps) {
                let vessel_param = _this.dynamicVesselComps[i].param;
                let compid = _this.dynamicVesselComps[i].compid;
                if (!!newdata.detail_data[vessel_param.param_segment]) {
                  vessel_param.idx = vessel_param.search_segment;
                  vessel_param.idx_value = newdata.detail_data[vessel_param.param_segment];
                  appInstance.sendRequest({
                    url: '/index.php?r=AppData/getFormDataList&idx_arr[idx]=' + vessel_param.idx + "&idx_arr[idx_value]=" + vessel_param.idx_value,
                    data: {
                      app_id: vessel_param.app_id,
                      form: vessel_param.form,
                      page: 1
                    },
                    success: function(res) {
                      if (res.status == 0) {
                        let newDynamicData = {};
                        newDynamicData['dynamic_vessel_data_' + compid] = res.data[0];
                        _this.setData(newDynamicData);
                      } else {
                        // TODO 提示框
                      }
                    },
                    fail: function() {
                      console.log("[fail info]dynamic-vessel data request  failed");
                    }
                  });
                }
              }
            }
          } else {
            // TODO 提示框
          }
        },
        fail: function () {
          // TODO 错误
        },
      })
    }

    if (!!this.list_compids_params) {
      for (let i in this.list_compids_params) {
        let compid = this.list_compids_params[i].compid;
        let param = this.list_compids_params[i].param;
        let url = '/index.php?r=AppData/getFormDataList';
        if (!!param.idx_arr) {
          let idx = param.idx_arr.idx;
          let idx_value = param.idx_arr.idx_value;
          delete(param.idx_arr);
          url = '/index.php?r=AppData/getFormDataList&idx_arr[idx]=' + idx + "&idx_arr[idx_value]=" + idx_value;
        }
        appInstance.sendRequest({
          url: url,
          data: param,
          success: function (res) {
            if (!!param.idx_arr) {
              param.idx_arr = {
                idx: idx,
                idx_value: idx_value
              };
            }
            if (res.status == 0) {
              newdata = {};

              for (let j in res.data) {
                for (let k in res.data[j].form_data) {
                  if (k == 'category') {
                    continue;
                  }

                  let description = res.data[j].form_data[k];

                  if (!description) {
                    continue;
                  }

                  let matchResult = typeof description == 'string' && description.match(/<p>[\s\S]*?<\/p>/g);
                  if (matchResult) {
                    res.data[j].form_data[k] = WxParse('html', res.data[j].form_data[k]);
                  }
                }
              }

              newdata[compid + '.list_data'] = res.data;
              newdata[compid + '.is_more'] = res.is_more;
              newdata[compid + '.curpage'] = 1;

              _this.setData(newdata);
            } else {
              // TODO 提示框
            }
          },
          fail: function () {
            // TODO 错误
          },
        });
      }
    }

    if (!!this.goods_compids_params) {
      for (let i in this.goods_compids_params) {
        let compid = this.goods_compids_params[i].compid;
        let param = this.goods_compids_params[i].param;

        appInstance.sendRequest({
          url: '/index.php?r=AppShop/GetGoodsList',
          data: param,
          success: function (res) {
            if (res.status == 0) {
              newdata = {};
              newdata[compid + '.goods_data'] = res.data;
              newdata[compid + '.is_more'] = res.is_more;
              newdata[compid + '.curpage'] = 1;

              _this.setData(newdata);
            } else {
              // TODO 提示框
            }
          },
          fail: function () {
            // TODO 错误
          },
        });
      }
    }

    if (!!this.relobj_auto) {
      for (let i in this.relobj_auto) {
        let objrel = this.relobj_auto[i].obj_rel;
        let AutoAddCount = this.relobj_auto[i].auto_add_count;
        let compid = this.relobj_auto[i].compid;
        let hasCounted = this.relobj_auto[i].has_counted;   // 默认是 0，没有计算过
        let parentcompid = this.relobj_auto[i].parentcompid;

        if (parentcompid != '' && parentcompid != null) {
          if (compid.search('data.') !== -1) {
            compid = compid.substr(5);
          }
          compid = parentcompid + '.' + compid;
        }

        appInstance.sendRequest({
          url: '/index.php?r=AppData/getCount',
          data: {
            obj_rel: objrel
          },
          success: function (res) {
            if (res.status == 0) {
              if (AutoAddCount == 1) {
                if (hasCounted == 0) {
                  appInstance.sendRequest({
                    url: '/index.php?r=AppData/addCount',
                    data: {
                      obj_rel: objrel
                    },
                    success: function (newres) {
                      if (newres.status == 0) {
                        newdata = {};
                        newdata[compid + '.count_data.count_num'] = parseInt(newres.data.count_num);
                        newdata[compid + '.count_data.has_count'] = parseInt(newres.data.has_count);
                        _this.setData(newdata);
                      }
                    },
                    fail: function () {
                      // TODO 提示框
                    }
                  });
                }
              } else {
                newdata = {};
                newdata[compid + '.count_data.count_num'] = parseInt(res.data.count_num);
                newdata[compid + '.count_data.has_count'] = parseInt(res.data.has_count);
                _this.setData(newdata);
              }
            } else {
              // TODO 提示框
            }
          },
          fail: function () {
            // TODO 错误
          },
        });
      }
    }

    if(this.bbsCompIds.length){
      var bbsData = this.data[this.bbsCompIds];
      appInstance.sendRequest({
        url: '/index.php?r=AppData/getFormDataList',
        method: 'post',
        data: {
          form: 'bbs',
          is_count: bbsData.customFeature.ifLike ? 1 : 0,
          page: 1,
          idx_arr: {
            idx: 'rel_obj',
            idx_value: bbsData.customFeature.ifBindPage && bbsData.customFeature.ifBindPage !== 'false' ? this.page_router : appInstance.getAppId(),
          }
        },
        success: function(res){
          var data = {},
              array = [];

          data[_this.bbsCompIds+'.content'] = res;
          for (var i = 0; i < res.data.length; i++) {
            array.push({});
          }
          data[_this.bbsCompIds+'.replyArray'] = array;
          data[_this.bbsCompIds+'.comment'] = {};
          _this.setData(data);
        }
      })
    }
  },
  onShow: function(){
    var that = this;
    setTimeout(function(){
      that.setUserInfo();
    });
  },
  setUserInfo: function(){
    var newdata = {};

    newdata['userInfo'] = appInstance.getUserInfo();
    this.setData(newdata);
  },

  pageScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    let param   = {};

    if (this.list_compids_params) {
      for (let index in this.list_compids_params) {
        if (this.list_compids_params[index].compid === compid) {
          param = this.list_compids_params[index].param;
          break;
        }
      }
    }

    param.page = curpage;

    var newdata = {};
    var _this = this;
    if (!!this.data[compid].is_more) {
      appInstance.sendRequest({
        url: '/index.php?r=AppData/getFormDataList',
        data: param,
        success: function (res) {
          if (res != undefined && res.status == 0) {
            newdata = {};

            for (let j in res.data) {
              for (let k in res.data[j].form_data[k]) {
                if (k == 'category') {
                  continue;
                }

                let description = res.data[j].form_data[k];

                if (!description) {
                  continue;
                }

                let matchResult = typeof description == 'string' && description.match(/<p>[\s\S]*?<\/p>/g);
                if (matchResult) {
                  res.data[j].form_data[k] = WxParse('html', res.data[j].form_data[k]);
                }
              }
            }

            newdata[compid + '.list_data'] = _this.data[compid].list_data.concat(res.data);
            newdata[compid + '.is_more'] = res.is_more;
            newdata[compid + '.curpage'] = res.current_page;

            _this.setData(newdata);
          } else {
            // TODO 提示框
          }
        },
        fail: function () {
          // TODO 错误
        },
      })
    }
  },
  goodsScrollFunc: function (e) {
    let compid  = e.target.dataset.compid;
    let curpage = parseInt(e.target.dataset.curpage) + 1;
    let param   = {};

    if (this.goods_compids_params) {
      for (let index in this.goods_compids_params) {
        if (this.goods_compids_params[index].compid === compid) {
          param = this.goods_compids_params[index].param;
          break;
        }
      }
    }

    param.page = curpage;

    var newdata = {};
    var _this = this;
    if (!!this.data[compid].is_more) {
      appInstance.sendRequest({
        url: '/index.php?r=AppShop/GetGoodsList',
        data: param,
        success: function (res) {
          if (res.status == 0) {
            newdata = {};
            newdata[compid + '.goods_data'] = _this.data[compid].goods_data.concat(res.data);
            newdata[compid + '.is_more'] = res.is_more;
            newdata[compid + '.curpage'] = res.current_page;

            _this.setData(newdata);
          } else {
            // TODO 提示框
          }
        },
        fail: function () {
          // TODO 错误
        },
      })
    }
  },
  changeCount: function (e) {
    let counted = e.currentTarget.dataset.counted;
    let compid = e.currentTarget.dataset.compid;
    let objrel = e.currentTarget.dataset.objrel;
    let form = e.currentTarget.dataset.form;
    let dataIndex = e.currentTarget.dataset.index;
    let parentcompid = e.currentTarget.dataset.parentcompid;

    var newdata = {};
    var _this = this;

    if (!!form) {        // 这是一个 form
      if (counted == 1) {  // 计算过了，del
        appInstance.sendRequest({
          url: '/index.php?r=AppData/delCount',
          data: {
            obj_rel: objrel
          },
          success: function (res) {
            if (res.status == 0) {
              newdata = {};
              newdata[parentcompid + '.list_data[' + dataIndex + '].count_num'] = parseInt(_this.data[parentcompid].list_data[dataIndex].count_num) - 1;
              newdata[parentcompid + '.list_data[' + dataIndex + '].has_count'] = 0;
              _this.setData(newdata);
            }
          },
          fail: function () {
            // TODO 提示框
          }
        })

      } else {
        appInstance.sendRequest({
          url: '/index.php?r=AppData/addCount',
          data: {
            obj_rel: objrel
          },
          success: function (res) {
            if (res.status == 0) {
              newdata = {};
              newdata[parentcompid + '.list_data[' + dataIndex + '].count_num'] = parseInt(res.data.count_num);
              newdata[parentcompid + '.list_data[' + dataIndex + '].has_count'] = parseInt(res.data.has_count);
              _this.setData(newdata);
            }
          },
          fail: function () {
            // TODO 提示框
          }
        })

      }
    } else {
      if (parentcompid != '' && parentcompid != null) {
        if (compid.search('data.') !== -1) {
          compid = compid.substr(5);
        }
        compid = parentcompid + '.' + compid;
      }

      if (counted == 1) {  // 计算过了，del
        appInstance.sendRequest({
          url: '/index.php?r=AppData/delCount',
          data: {
            obj_rel: objrel
          },
          success: function (res) {
            if (res.status == 0) {
              newdata = {};
              newdata[compid + '.count_data.count_num'] = parseInt(res.data.count_num);
              newdata[compid + '.count_data.has_count'] = parseInt(res.data.has_count);
              _this.setData(newdata);
            }
          },
          fail: function () {
            // TODO 提示框
          }
        })
      } else {             // 没计算过，add
        appInstance.sendRequest({
          url: '/index.php?r=AppData/addCount',
          data: {
            obj_rel: objrel
          },
          success: function (res) {
            if (res.status == 0) {
              newdata = {};
              newdata[compid + '.count_data.count_num'] = parseInt(res.data.count_num);
              newdata[compid + '.count_data.has_count'] = parseInt(res.data.has_count);
              _this.setData(newdata);
            }
          },
          fail: function () {
            // TODO 提示框
          }
        })
      }
    }
  },
  inputChange: function (e) {
    let datakey = e.currentTarget.dataset.datakey;
    let value = e.detail.value;

    var newdata = {};

    newdata[datakey] = value;
    this.setData(newdata);
  },
  bindDateChange: function(e) {
    let datakey      = e.currentTarget.dataset.datakey;
    let parentcompid = e.currentTarget.dataset.parentcompid;
    let compid       = e.currentTarget.dataset.compid;
    let value        = e.detail.value;
    let newdata      = {};

    let datakeyArr = datakey.split('.');
    let obj = this.data;
    for (let i = 0; i < datakeyArr.length; i++) {
      if (obj[datakeyArr[i]] == undefined) {
        obj = undefined;
        break;
      } else {
        obj = obj[datakeyArr[i]];
      }
    }

    if (!!obj) {
      let date = obj.substr(0, 10);
      let time = obj.substr(11);

      if (obj.length == 16) {
        newdata[datakey] = value + ' ' + time;
      } else if (obj.length == 10) {  // 只设置了 date
        newdata[datakey] = value;
      } else if (obj.length == 5) {   // 只设置了 time
        newdata[datakey] = value + ' ' + obj;
      } else if (obj.length == 0) {
        newdata[datakey] = value;
      }
    } else {
      newdata[datakey] = value;
    }

    if (compid.substr(0, 4) == 'data') {
      compid = parentcompid + compid.substr(4);
    }
    newdata[compid + '.date'] = value;
    this.setData(newdata);
  },
  bindTimeChange: function(e) {
    let datakey      = e.currentTarget.dataset.datakey;
    let parentcompid = e.currentTarget.dataset.parentcompid;
    let compid       = e.currentTarget.dataset.compid;
    let value        = e.detail.value;
    let newdata      = {};

    let datakeyArr = datakey.split('.');
    let obj = this.data;
    for (let i = 0; i < datakeyArr.length; i++) {
      if (obj[datakeyArr[i]] == undefined) {
        obj = undefined;
        break;
      } else {
        obj = obj[datakeyArr[i]];
      }
    }

    if (!!obj) {
      let date = obj.substr(0, 10);
      let time = obj.substr(11);

      if (obj.length == 16) {
        newdata[datakey] = date + ' ' + value;
      } else if (obj.length == 10) {  // 只设置了 date
        newdata[datakey] = obj + ' ' + value;
      } else if (obj.length == 5) {   // 只设置了 time
        newdata[datakey] = value;
      } else if (obj.length == 0) {
        newdata[datakey] = value;
      }
    } else {
      newdata[datakey] = value;
    }

    if (compid.substr(0, 4) == 'data') {
      compid = parentcompid + compid.substr(4);
    }
    newdata[compid + '.time'] = value;
    this.setData(newdata);
  },
  submitForm: function (e) {
    let compid = e.currentTarget.dataset.compid;
    let form = e.currentTarget.dataset.form;

    let form_data = this.data[compid].form_data;
    let field_info = this.data[compid].field_info;

    var newdata;

    var _this = this;

    if ( !util.isPlainObject(form_data)) {
      for (let i in field_info) {
        let field = field_info[i].field;
        if (!form_data[field] && field_info[i].required == 1) { // 提示错误
          appInstance.showModal({
            content: '请输入完整信息'
          });
          return;
        }
      }
    }

    appInstance.sendRequest({
      url: '/index.php?r=AppData/addData',
      data: {
        form: form,
        form_data: form_data
      },
      header: {'content-type': 'application/x-www-form-urlencoded;'},
      method: 'POST',
      success: function (res) {
        if (res.status == 0) {
          newdata = _this.data[compid];
          newdata.form_data = {};
          _this.setData(newdata);
          appInstance.showToast({
            title: '提交成功',
            icon: 'success'
          });
        }
      },
      fail: function () {
        // TODO 提示框
      }
    })

  },
  udpateVideoSrc: function (e) {
    let compid = e.currentTarget.dataset.compid;

    var _this = this;
    var newdata = {};

    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        newdata = {};
        newdata[compid + '.src'] = res.tempFilePaths[0];
        _this.setData(newdata);
        // TODO 保存视频地址
      }
    })
  },
  tapMapDetail: function (event) { // 进入地图详情页
    console.log('handling tap map detail event====');
    appInstance.turnToPage("../mapDetail/mapDetail?eventParams=" + event.currentTarget.dataset.eventParams);
  },
  uploadFormImg: function (e) {
    let compid = e.currentTarget.dataset.compid;
    let parentcompid = e.currentTarget.dataset.parentcompid;
    let datakey = e.currentTarget.dataset.datakey;

    var newdata = {};
    var _this = this;

    appInstance.chooseImage(function (res) {
      let img_src = res[0];

      newdata = {};
      newdata[datakey] = img_src;
      newdata[parentcompid] = _this.data[parentcompid];
      newdata[parentcompid].display_upload = false;
      newdata[parentcompid].image_src = img_src;
      _this.setData(newdata);

    });
  },
  listVesselTurnToPage: function (e) {
    let data_id = e.currentTarget.dataset.dataid;
    let router = e.currentTarget.dataset.router;
    let page_form = this.page_form;

    if (router == -1 || router == '-1') {
      return;
    }
    if (page_form != '') {
      appInstance.turnToPage('../' + router + '/' + router + '?detail=' + data_id);
    }
  },
  UserCenterTurnToPage: function (e) {
    let router = e.currentTarget.dataset.router;
    appInstance.turnToPage('../' + router + '/' + router +'?from=userCenterEle');
  },
  turnToGoodsDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    appInstance.turnToPage('../goodsDetail/goodsDetail?detail=' + id);
  },
  sortListFunc: function (e) {
    let listid        = e.currentTarget.dataset.listid;
    let sortkey       = e.currentTarget.dataset.sortkey;
    let sortdirection = e.currentTarget.dataset.sortdirection;
    let idx           = e.currentTarget.dataset.idx;
    let sortcompid    = e.currentTarget.dataset.compid;

    let targetList = '';
    let index      = '';
    let is_goods   = 1;

    let willSaveSortDirection = 0;
    if (sortdirection == 0) {
      willSaveSortDirection = 1;
    }

    if (this.list_compids_params) {
      for (index in this.list_compids_params) {
        if (this.list_compids_params[index].param.id === listid) {
          if (idx != 0) {
            this.list_compids_params[index].param.sort_key       = sortkey;
            this.list_compids_params[index].param.sort_direction = sortdirection;
          } else {
            this.list_compids_params[index].param.sort_key       = '';
            this.list_compids_params[index].param.sort_direction = 0;
          }

          this.list_compids_params[index].param.page = 1;
          targetList = this.list_compids_params[index];
          is_goods = 0;
          break;
        }
      }
    }

    if (is_goods == 1 && this.goods_compids_params) {
      for (index in this.goods_compids_params) {
        if (this.goods_compids_params[index].param.id === listid) {
          if (idx != 0) {
            this.goods_compids_params[index].param.sort_key       = sortkey;
            this.goods_compids_params[index].param.sort_direction = sortdirection;
          } else {
            this.goods_compids_params[index].param.sort_key       = '';
            this.goods_compids_params[index].param.sort_direction = 0;
          }

          this.goods_compids_params[index].param.page = 1;
          targetList = this.goods_compids_params[index];
          break;
        }
      }
    }

    if (!!targetList) {
      let _this = this;

      let compid  = targetList['compid'];

      let url = '/index.php?r=AppData/getFormDataList';
      if (is_goods == 1) {
        url = '/index.php?r=AppShop/GetGoodsList';
      }

      appInstance.sendRequest({
        url: url,
        data: targetList.param,
        success: function (res) {
          if (!!targetList.param.idx_arr) {
            targetList.param.idx_arr = {
              idx: idx,
              idx_value: idx_value
            };
          }
          if (res.status == 0) {
            let newdata = {};

            for (let j in res.data) {
              for (let k in res.data[j].form_data) {
                if (k == 'category') {
                  continue;
                }

                let description = res.data[j].form_data[k];

                if (!description) {
                  continue;
                }

                let matchResult = typeof description == 'string' && description.match(/<p>[\s\S]*?<\/p>/g);
                if (matchResult) {
                  res.data[j].form_data[k] = WxParse('html', res.data[j].form_data[k]);
                }
              }
            }

            if (is_goods == 1) {
              _this.goods_compids_params[index].param.sort_direction = willSaveSortDirection;
            } else {
              _this.list_compids_params[index].param.sort_direction = willSaveSortDirection;
            }

            newdata[compid + '.selected']  = idx;

            if (is_goods == 1) {
              newdata[compid + '.goods_data'] = res.data;
            } else {
              newdata[compid + '.list_data'] = res.data;
            }

            newdata[compid + '.is_more']   = res.is_more;
            newdata[compid + '.curpage']   = 1;

            newdata[sortcompid + '.customFeature.selected'] = idx;

            if (idx != 0 && sortdirection == 1) {
              newdata[sortcompid + '.content[' + idx + '].customFeature.sort_direction'] = 0;
            } else if (idx != 0) {
              newdata[sortcompid + '.content[' + idx + '].customFeature.sort_direction'] = 1;
            } else if (idx == 0) {
              newdata[sortcompid + '.content[' + idx + '].customFeature.sort_direction'] = 0;
            }

            _this.setData(newdata);
          } else {
            // TODO 提示框
          }
        },
        fail: function () {
          // TODO 错误
        },
      });
    }
  },
  bbsInputComment: function(e){
    var comment = e.detail.value,
        compid = e.target.dataset.compid,
        data = {};

    data[compid+'.comment.text'] = comment;
    this.setData(data);
  },
  bbsInputReply: function(e){
    var comment = e.detail.value,
        compid = e.target.dataset.compid,
        index = e.target.dataset.index,
        data = {};

    data[compid+'.replyArray['+index+'].text'] = comment;
    this.setData(data);
  },
  uploadBbsCommentImage: function(e){
    var that = this,
        compid = e.currentTarget.dataset.compid,
        data = {};

    appInstance.chooseImage(function(res){
      data[compid+'.comment.img'] = res[0];
      that.setData(data);
    });
  },
  uploadBbsReplyImage: function(e){
    var that = this,
        compid = e.currentTarget.dataset.compid,
        index = e.currentTarget.dataset.index,
        data = {};

    appInstance.chooseImage(function(res){
      data[compid+'.replyArray['+index+'].img'] = res[0];
      that.setData(data);
    });
  },
  deleteCommentImage: function(e){
    var compid = e.currentTarget.dataset.compid,
        data = {};

    data[compid+'.comment.img'] = '';
    this.setData(data);
  },
  deleteReplyImage: function(e){
    var compid = e.currentTarget.dataset.compid,
        index = e.currentTarget.dataset.index,
        data = {};

    data[compid+'.replyArray['+index+'].img'] = '';
    this.setData(data);
  },
  bbsPublishComment: function(e){
    var that = this,
        compid = e.currentTarget.dataset.compid,
        bbsData = this.data[compid],
        comment = bbsData.comment,
        param;

    if(!comment.text || !comment.text.trim()){
      appInstance.showModal({
        content: '请输入评论内容'
      })
      return;
    }

    comment.addTime = util.formatTime();

    param = {};
    param.nickname = this.data.userInfo.nickname;
    param.cover_thumb = this.data.userInfo.cover_thumb;
    param.content = comment;
    param.rel_obj = bbsData.customFeature.ifBindPage && bbsData.customFeature.ifBindPage !== 'false' ? this.page_router : appInstance.getAppId();

    appInstance.sendRequest({
      url: '/index.php?r=AppData/addData',
      method: 'post',
      data: {
        form: 'bbs',
        form_data: param,
      },
      success: function(res){
        var commentList = that.data[compid].content.data || [],
            newdata = {};

        param.id = res.data;
        newdata[compid+'.content.data'] = [{
          form_data: param,
          count_num: 0
        }].concat(commentList);
        newdata[compid+'.comment'] = {};

        that.setData(newdata);
      }
    })
  },
  clickBbsReplyBtn: function(e){
    var compid = e.currentTarget.dataset.compid,
        index = e.currentTarget.dataset.index,
        data = {};

    data[compid+'.replyArray['+index+'].showReply'] = !this.data[compid].replyArray[index].showReply;
    this.setData(data);
  },
  bbsPublishReply: function(e){
    var that = this,
        compid = e.currentTarget.dataset.compid,
        index = e.currentTarget.dataset.index,
        bbsData = this.data[compid],
        comment = bbsData.replyArray[index],
        param;

    if(!comment.text || !comment.text.trim()){
      appInstance.showModal({
        content: '请输入回复内容'
      })
      return;
    }

    comment.addTime = util.formatTime();
    comment.reply = {
      nickname: bbsData.content.data[index].form_data.nickname,
      text: bbsData.content.data[index].form_data.content.text,
      img: bbsData.content.data[index].form_data.content.img,
      reply: bbsData.content.data[index].form_data.content.reply
    };

    param = {};
    param.nickname = this.data.userInfo.nickname;
    param.cover_thumb = this.data.userInfo.cover_thumb;
    param.content = comment;
    param.rel_obj = bbsData.customFeature.ifBindPage && bbsData.customFeature.ifBindPage !== 'false' ? this.page_router : appInstance.getAppId();

    appInstance.sendRequest({
      url: '/index.php?r=AppData/addData',
      method: 'post',
      data: {
        form: 'bbs',
        form_data: param,
      },
      success: function(res){
        var commentList = that.data[compid].content.data || [],
            newdata = {};

        param.id = res.data;
        newdata[compid+'.content.data'] = [{
          form_data: param,
          count_num: 0
        }].concat(commentList);
        newdata[compid+'.comment'] = {};
        newdata[compid+'.replyArray['+index+']'] = {};

        that.setData(newdata);
      }
    })
  }
};
Page(pageData);
