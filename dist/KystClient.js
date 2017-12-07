"use strict";var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_requestPromise=require("request-promise"),_requestPromise2=_interopRequireDefault(_requestPromise);Object.defineProperty(exports,"__esModule",{value:!0}),exports.KystClient=exports.CONVERSION_FACTOR=exports.EXCHANGE_URL=exports.META_STATS_URL=exports.DEFAULT_URL=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var DEFAULT_URL=exports.DEFAULT_URL="https://api.cryptokitties.co",META_STATS_URL=exports.META_STATS_URL="https://kittysales.herokuapp.com/data",EXCHANGE_URL=exports.EXCHANGE_URL="https://api.coinmarketcap.com/v1/ticker/ethereum/",CONVERSION_FACTOR=exports.CONVERSION_FACTOR=10**-18,KystClient=exports.KystClient=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"getAuctions",value:function getAuctions(a,b,c,d){return(0,_requestPromise2.default)({uri:DEFAULT_URL+"/auctions",qs:{offset:a,limit:b,type:c,status:d},headers:{"User-Agent":"Request-Promise"},json:!0})}},{key:"getKitty",value:function getKitty(a){return(0,_requestPromise2.default)({uri:DEFAULT_URL+"/kitties/"+a,headers:{"User-Agent":"Request-Promise"},json:!0})}},{key:"getUser",value:function getUser(a){return(0,_requestPromise2.default)({uri:DEFAULT_URL+"/user/"+a,headers:{"User-Agent":"Request-Promise"},json:!0})}},{key:"getMetaData",value:function getMetaData(){return(0,_requestPromise2.default)({uri:META_STATS_URL,qs:{offset:0,count:1},json:!0})}},{key:"getAveragePriceUSD",value:function getAveragePriceUSD(){return this.getMetaData().then(function(a){return a.stats}).then(function(a){return a.avgSale})}},{key:"getMedianPriceUSD",value:function getMedianPriceUSD(){return this.getMetaData().then(function(a){return a.stats}).then(function(a){return a.medianSale})}},{key:"convertUSD2ETH",value:function convertUSD2ETH(a){return(0,_requestPromise2.default)({uri:EXCHANGE_URL,qs:{convert:"USD"},json:!0}).then(function(a){return a[0].price_usd}).then(function(b){return a/b})}}]),a}();exports.default=KystClient;
