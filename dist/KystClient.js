"use strict";var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_requestPromise=require("request-promise"),_requestPromise2=_interopRequireDefault(_requestPromise),_cheerio=require("cheerio"),_cheerio2=_interopRequireDefault(_cheerio);Object.defineProperty(exports,"__esModule",{value:!0}),exports.KystClient=exports.CONVERSION_FACTOR=exports.CATTRIBUTE_URL=exports.EXCHANGE_URL=exports.META_STATS_URL=exports.DEFAULT_URL=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var DEFAULT_URL=exports.DEFAULT_URL="https://api.cryptokitties.co",META_STATS_URL=exports.META_STATS_URL="https://kittysales.herokuapp.com/data",EXCHANGE_URL=exports.EXCHANGE_URL="https://api.coinmarketcap.com/v1/ticker/ethereum",CATTRIBUTE_URL=exports.CATTRIBUTE_URL="https://cryptokittydex.com/",CONVERSION_FACTOR=exports.CONVERSION_FACTOR=10**-18,KystClient=exports.KystClient=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"buildOptions",value:function buildOptions(a){return{uri:a,headers:{"User-Agent":"Request-Promise"},json:!0}}},{key:"getAuctions",value:function getAuctions(a,b,c,d){var e=this.buildOptions(DEFAULT_URL+"/auctions");return e.qs={offset:a,limit:b,type:c,status:d},(0,_requestPromise2.default)(e)}},{key:"getKitty",value:function getKitty(a){var b=this.buildOptions(DEFAULT_URL+"/kitties/"+a);return(0,_requestPromise2.default)(b)}},{key:"getUser",value:function getUser(a){var b=this.buildOptions(DEFAULT_URL+"/user/"+a);return(0,_requestPromise2.default)(b)}},{key:"getMetaData",value:function getMetaData(){var a=this.buildOptions(META_STATS_URL);return a.qs={offset:0,count:1},(0,_requestPromise2.default)(a)}},{key:"getAveragePriceUSD",value:function getAveragePriceUSD(){return this.getMetaData().then(function(a){return a.stats}).then(function(a){return a.avgSale})}},{key:"getMedianPriceUSD",value:function getMedianPriceUSD(){return this.getMetaData().then(function(a){return a.stats}).then(function(a){return a.medianSale})}},{key:"convertUSD2ETH",value:function convertUSD2ETH(a){var b=this.buildOptions(EXCHANGE_URL);return b.qs={convert:"USD"},(0,_requestPromise2.default)(b).then(function(a){return a[0].price_usd}).then(function(b){return a/b})}},{key:"getCAttributes",value:function getCAttributes(){this.buildOptions(CATTRIBUTE_URL);return(0,_requestPromise2.default)({uri:"https://cryptokittydex.com/"}).then(function(a){var b=_cheerio2.default.load(a);return Promise.resolve(b("div.col-md-8.text-center").children().map(function(a,c){return b(c).text().trim()}))}).then(function(a){return Promise.resolve(a.get().map(function(a){var b=a.split(/\s+/),c={};return c[b[0]]=parseInt(b[1].replace(",","")),c}))}).then(function(a){return Promise.resolve(Object.assign.apply(Object,[{}].concat(_toConsumableArray(a))))})}}]),a}();exports.default=KystClient;
