var appInstance = getApp();
var WxParse     = require('../../components/wxParse/wxParse.js');
var util        = require('../../utils/util.js');

var pageData    = {
  data: {"picture1":{"type":"picture","style":"opacity:1;line-height:58.59375rpx;background-color:transparent;border-color:#222222;border-style:none;height:384.375rpx;width:682.03125rpx;margin-left:auto;margin-right:auto;margin-top:46.875rpx;animation-name:appear_lightSpeed_right;-webkit-animation-name:appear_lightSpeed_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5854ef114748a.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","segment":"FET_picture","ifMust":false,"action":"inner-link","inner-page-link":"prePage"},"animations":[{"name":"appear_lightSpeed","direction":"_right","duration":1,"delay":0.2,"count":1}],"page_form":"","compId":"picture1","itemType":"picture","itemParentType":null,"itemIndex":"picture1"},"text2":{"type":"text","style":"background-color:#00FFFFFF;border-color:#222222;border-style:none;border-width:4.6875rpx;color:#444444;font-size:46.875rpx;height:44.53125rpx;line-height:46.875rpx;margin-left:auto;margin-top:46.875rpx;opacity:1;text-align:center;margin-right:auto;","content":"网页框架的网页属性优化","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"FET_title","ifMust":false},"animations":[],"page_form":"","compId":"text2","markColor":"","mode":0},"count_ele3":{"type":"count-ele","style":"margin-left:82.03125rpx;margin-top:0;margin-right:auto;color:#079AF6;font-size:28.125rpx;opacity:1;height:53.90625rpx;width:750rpx;","content":"浏览","customFeature":{"ifAutoCount":true,"ifBindPage":false,"icon":"view-icon","size":"25px"},"animations":[],"page_form":"","compId":"count_ele3","icon":"view-icon","icon_size":"25px","ifAutoCount":true,"objrel":"kS9gOd22sR_view"},"text4":{"type":"text","style":"background-color:#00FFFFFF;border-color:#222222;border-style:none;border-width:4.6875rpx;color:#666666;font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;","content":"  我们都知道使用框架的网页无法被使用网络蜘蛛（spiders）或网络爬虫（crawlers） 的搜索引擎（如Google）正确索引。那是否就以为着使用了框架型网页就完全无法对其网页进行优化。其实是可以优化的，下面跟随唯一网络小编一起来看看。\n 实际上在HTML标记中，有一个叫做NOFRAME的标记，如果使用得当的话我们就可以有效地对页面进行优化了，从而使得搜索引擎能够正确索引你框架网页上的内容信息。也有网站这样使用NOFRAMES标记：他们在NOFRAMES标记里放上这么一段话：“本网页使用了框架，但您的浏览器不支持框架。请下载新的浏览器观看。”\n　　让我们看看那些专业的搜索引擎优化公司是怎么做的吧。他们在使用了框架的网页中，有效的提供含有丰富关键字和关键短语的重要文字和内容，从而有效帮助网站在SERP（搜索引擎搜索结果页）中取得较高的排名（页面等级）。\n　　这样优化的结果，其实就是让主要搜索引擎不但读取了你的网页后台代码中的标题和其它原标记，而且对那些不支持框架的浏览器所无法显示的页面内容信息，也进行了索引。如果你出于某种原因非要使用框架结构，那么请紧记：在你的后台代码中一定要正确的使用NOFRAMES标记，这一点非常重要。\n　　很显然，我们所说的这些优化措施，只有对那些网页内容经过精心撰写，并且在内容中充分使用了重要关键字和关键短语的网站才起作用。\n　　综上所述，不管是使用框架技术的网站还是非框架技术的网站，只要你采用的是恰当的技术和正确的技巧，都可以进行完美的优化从而取得理想的页面等级。\n　　改变框架网页属性\n　　在设置好框架的整体布局后，我们还可以对每一框架的具体属性进行设置，操作如下：\n　　一、单击需设置属性的框架，选择“框架”菜单中的“框架属性”，则弹出“框架属性”对活框。\n　　二、在对话框的“名称”文本框中可输入框架名，这样便于识别不同的框架；在“选项”区域中，若选中“在浏览器中可以调大小”复选框，则客户在浏览站点时，可重新定义框架尺寸，通过在“显示滚动条”下拉列表框中选择不同的描述项，可设置让滚动条是否出现。\n　　三、在“框架大小”区域中，可设置框架大小，可以定义一个绝对像素值或相对于浏览器窗口的百分比，若要用浏览器来设置相对于该页面中框架的尺寸，可选“相对”；在“边距”区域中，可设置内容页面与框架边框分隔的像素数值。\n　　四、要改变开始页面，可以在“初始网页”文本框中输入一个新的页面名字或URL。\n　　五、单击“框架网页”按钮，则弹出“网页属性”对话框。\n　　六、在该对话框的“框架”选项卡中，在“框架间距”文本框中，可输入以像素为单位的边框宽度；若要使框架边框消失，则不要选中“显示边框”复选框。\n　　七、单击“确定”按钮，关闭“网页属性”对话框，再单击“确定”按钮，关闭“框架属件”对话框，完成框架属性设置。\n　　以上就是网页框架的网页熟悉优化内容，希望能帮到你。","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"FET_content","ifMust":false},"animations":[],"page_form":"","compId":"text4","markColor":"","mode":0}},
  page_router: 'page10024',
    page_form: 'none',
      list_compids_params: [],
      goods_compids_params: [],
      relobj_auto: [{"obj_rel":"kS9gOd22sR_view","auto_add_count":true,"compid":"count_ele3","parentcompid":null,"has_counted":0}],
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
