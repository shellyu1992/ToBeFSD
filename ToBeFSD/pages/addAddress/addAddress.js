
var app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    addressId: '',
    provinces: [],
    provinceIds: [],
    provinceIndex: 0,
    cities: [],
    cityIds: [],
    cityIndex: 0,
    districts: [],
    districtIds: [],
    districtIndex: 0,
    name: '',
    contact: '',
    detail: '',
    isDefault: 0,
    provincePara: {
      text: '',
      id: ''
    },
    cityPara: {
      text: '',
      id: ''
    },
    districtPara: {
      text: '',
      id: ''
    }
  },
  onLoad: function(options){
    var id = options.id;
    if(id){
      this.getAddressDetail(id);
      this.setData({
        addressId: id
      })
    }
    this.getArea('province', 0);
  },
  getAddressDetail: function(id){
    var that = this;

    app.sendRequest({
      url: '/index.php?r=AppShop/GetAddressById',
      data: { address_id: id },
      success: function(res){
        var data = res.data;
        that.setData({
          name: data.address_info.name,
          contact: data.address_info.contact,
          detail: data.address_info.detailAddress,
          isDefault: +data.is_default,
          provincePara: data.address_info.province,
          cityPara: data.address_info.city,
          districtPara: data.address_info.district
        })
      }
    });
  },
  getArea: function(category, pid){
    var that = this;

    app.sendRequest({
      url: '/index.php?r=Region/getRegionList',
      data: { pid: pid },
      success: function(res){
        var list = res.data,
            ids = [];

        for (var i = 0, j = list.length - 1; i <= j; i++) {
          ids.push(list[i].id);
          list[i] = list[i].name;
        }
        switch(category){
          case 'province':  that.setData({ provinces:list, provinceIds:ids, cities:[], districts:[] })
                            break;
              case 'city':  that.setData({ cities:list, cityIds:ids, districts:[] })
                            break;
          case 'district':  that.setData({ districts:list, districtIds:ids })
                            break;
        }
      }
    });
  },
  bindProvinceChange: function(e){
    var index = e.detail.value,
        id = this.data.provinceIds[index];

    this.getArea('city', id);
    this.setData({
      provincePara: {
        text: this.data.provinces[index],
        id: id
      },
      cityPara: {
        text: '',
        id: ''
      },
      districtPara: {
        text: '',
        id: ''
      }
    })
  },
  bindCityChange: function(e){
    var index = e.detail.value,
        id = this.data.cityIds[index];

    this.getArea('district', id);
    this.setData({
      cityPara: {
        text: this.data.cities[index],
        id: id
      },
      districtPara: {
        text: '',
        id: ''
      }
    })
  },
  bindDistrictChange: function(e){
    var index = e.detail.value,
        id = this.data.districtIds[index];

    this.setData({
      districtPara: {
        text: this.data.districts[index],
        id: id
      }
    })
  },
  nameInput: function(e){
    this.setData({
      name: e.detail.value
    })
  },
  contactInput: function(e){
    this.setData({
      contact: e.detail.value
    })
  },
  detailInput: function(e){
    this.setData({
      detail: e.detail.value
    })
  },
  addAddress: function(){
    var para = {};

    para.province = this.data.provincePara;
    para.city = this.data.cityPara;
    para.district = this.data.districtPara;

    para.name = this.data.name;
    para.contact = this.data.contact;
    para.detailAddress = this.data.detail;

    app.sendRequest({
      method: 'post',
      url: '/index.php?r=AppShop/addAddress',
      data: {
        address_id: this.data.addressId,
        address_info: para,
        is_default: this.data.isDefault
        // ck_id: GetCookiePara()
      },
      success: function(res){
        app.turnBack();
      }
    })
  },
  setDefaultAddress: function(e){
    var checked = e.detail.value;
    if(checked){
      this.setData({
        isDefault: 1
      })
    } else {
      this.setData({
        isDefault: 0
      })
    }
  }
})
