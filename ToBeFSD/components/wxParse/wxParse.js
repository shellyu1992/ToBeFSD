
var HtmlToJson = require('html2json.js');
var wxDiscode = require('wxDiscode.js');
//type 'json','html','markdown'/'md'

function wxParse(type,data){
  var wxParseData = [];
  if(type == 'html'){
    data = wxDiscode.strDiscode(data);
    var json = HtmlToJson(data);
	  // console.log(JSON.stringify(json, ' ', ' '));
    wxParseData = json.child;
  }

  return wxParseData;
}
module.exports = wxParse;


