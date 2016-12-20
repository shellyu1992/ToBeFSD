
var HtmlToJson = require('html2json.js');
var wxDiscode = require('wxDiscode.js');

function wxParse(type,data){
  var wxParseData = [];
  if(type == 'html'){
    data = wxDiscode.strDiscode(data);
    var json = HtmlToJson(data);
    wxParseData = json.child;
  }

  return wxParseData;
}
module.exports = wxParse;


