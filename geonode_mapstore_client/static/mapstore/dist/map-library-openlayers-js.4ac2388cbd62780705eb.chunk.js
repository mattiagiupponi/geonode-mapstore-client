(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6037,3595,9878,7654,4351],{21914:(t,e,n)=>{"use strict";n.d(e,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>u,Pn:()=>s,DZ:()=>c,e8:()=>f,E0:()=>l,F9:()=>p,X_:()=>d,pb:()=>m,qb:()=>v,Re:()=>E,ih:()=>y,xy:()=>h,jL:()=>g,oz:()=>O,ph:()=>_,lF:()=>I,gG:()=>T,cb:()=>q,GI:()=>b,B1:()=>N,fv:()=>F,gc:()=>R,zX:()=>P,ZF:()=>A,Zb:()=>w,Fm:()=>S,sV:()=>M,Mn:()=>C,LU:()=>D,XP:()=>G,WU:()=>j,JB:()=>L,g:()=>x,ws:()=>U,HP:()=>k,aN:()=>Z,Pg:()=>H,u0:()=>B,TM:()=>W,PM:()=>K,lK:()=>X,sv:()=>V,MO:()=>z,oO:()=>Q,Mc:()=>J,Zw:()=>$,RA:()=>tt,am:()=>et,ZM:()=>nt,wm:()=>rt,Y$:()=>ot});var r=n(47310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",u="CHANGE_MAPINFO_STATE",s="NEW_MAPINFO_REQUEST",c="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",d="SHOW_REVERSE_GEOCODE",m="HIDE_REVERSE_GEOCODE",v="GET_VECTOR_INFO",E="NO_QUERYABLE_LAYERS",y="CLEAR_WARNING",h="FEATURE_INFO_CLICK",g="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",O="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",_="TOGGLE_MAPINFO_STATE",I="UPDATE_CENTER_TO_MARKER",T="IDENTIFY:CHANGE_PAGE",q="IDENTIFY:CLOSE_IDENTIFY",b="IDENTIFY:CHANGE_FORMAT",N="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",F="IDENTIFY:EDIT_LAYER_FEATURES",R="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",P="IDENTIFY:SET_MAP_TRIGGER",A="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",w="IDENTIFY:SET_SHOW_IN_MAP_POPUP";function S(t,e,n,r,i){return{type:o,data:e,reqId:t,requestParams:n,layerMetadata:r,layer:i}}function M(t,e,n,r){return{type:i,error:e,reqId:t,requestParams:n,layerMetadata:r}}function C(t,e,n,r){return{type:a,reqId:t,exceptions:e,requestParams:n,layerMetadata:r}}function D(){return{type:E}}function G(){return{type:y}}function j(t,e){return{type:s,reqId:t,request:e}}function L(t,e,n,r){return{type:v,layer:t,request:e,metadata:n,queryableLayers:r}}function x(){return{type:c}}function U(t){return{type:f,infoFormat:t}}function k(){return{type:l}}function Z(){return{type:p}}function Y(t){return{type:d,reverseGeocodeData:t.data}}function H(t){return function(e){r.Z.reverseGeocode(t).then((function(t){e(Y(t))})).catch((function(t){e(Y(t))}))}}function B(){return{type:m}}function W(){return{type:_}}function K(t){return{type:I,status:t}}function X(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:h,point:t,layer:e,filterNameList:n,overrideParams:r,itemId:o}}function V(t){return{type:g,point:t}}function z(t){return{type:O,enabled:t}}function Q(t){return{type:T,index:t}}var J=function(){return{type:q}},$=function(t){return{type:b,format:t}},tt=function(t){return{type:N,showCoordinateEditor:t}},et=function(t){return{type:F,layer:t}},nt=function(t){return{type:R,query:t}},rt=function(t){return{type:P,trigger:t}},ot=function(t){return{type:w,value:t}}},47310:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var r=n(75875),o=n.n(r),i=n(72500),a=n.n(i),u=n(27418),s=n.n(u),c={format:"json",bounded:0,polygon_geojson:1,priority:5};const f={geocode:function(t,e){var n=s()({q:t},c,e||{}),r=a().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(t,e){var n=s()({lat:t.lat,lon:t.lng},e||{},c),r=a().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},34637:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r=function(){return n(3498).default,{Map:n(90596).Z,Layer:n(44054).Z,Feature:n(30072).Z,MeasurementSupport:n(5904).Z,Overview:n(22404).Z,ScaleBar:n(9056).Z,DrawSupport:n(6909).Z,PopupSupport:n(26105).Z,BoxSelectionSupport:n(89912).Z}}},8797:(t,e,n)=>{"use strict";n.d(e,{rp:()=>s,Ov:()=>f,wd:()=>l,L0:()=>p}),n(1469);var r=n(91175),o=n.n(r),i=n(7654),a=n.n(i);function u(t){var e=Math.floor(t),n=60*(t-e),r=Math.floor(n),o=60*(n-r);return e+"° "+r+"' "+Math.floor(o)+"'' "}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.measureTrueBearing,r=void 0!==n&&n,o=e.fractionDigits,i=void 0===o?0:o,a="";if(r){var s="";t>=0&&t<10?s="00":t>10&&t<100&&(s="0");var c=i>0?t.toFixed(i):Math.floor(t);a=s+c+"°"}else t>=0&&t<90?a="N "+u(t)+"E":t>90&&t<=180?a="S "+u(180-t)+"E":t>180&&t<270?a="S "+u(t-180)+"W":t>=270&&t<=360&&(a="N "+u(360-t)+"W");return a}var c={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return c[e]&&c[e][n]?t*c[e][n]:t}var l=function(t){return!a()(parseFloat(t[0]))&&!a()(parseFloat(t[1]))},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.coordinates,n=t.type,r=e;if("LineString"===n){if((r=e.filter(l)).length<2)return[]}else if("Polygon"===n){if((r=o()(e).filter(l)).length<3)return[[]];r=[r.concat([o()(r)])]}return r}},23502:(t,e,n)=>{"use strict";n.d(e,{$:()=>s,b:()=>c});var r=n(63202),o=n(1469),i=n.n(o),a=n(13218),u=n.n(a),s=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i()(e))return e.reduce((function(e,n){return t(n)&&e}),!0);var o=!1,a=!(0===e.indexOf("http")),s=!a&&e.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(s){var c=window.location;a=s[1]===c.protocol&&s[3]===c.hostname;var f=s[4],l=c.port;(80!==f&&""!==f||"80"!==l&&""!==l)&&(a=a&&f===l)}if(!a){var p=r.ZP.getProxyUrl(n);if(p){var d=[];u()(p)&&(d=p.useCORS||[],p=p.url);var m=d.reduce((function(t,n){return t||0===e.indexOf(n)}),!1);m||(o=!0)}}return o},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=r.ZP.getProxyUrl(t);return e&&u()(e)&&(e=e.url),e}},45992:(t,e,n)=>{"use strict";n.d(e,{h:()=>f,Z:()=>l});var r=n(35937),o=n.n(r),i=n(36882),a=n(63202);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(t,e){var n,r,u,c,f=i.Z;if("custom"===t)n=e;else if(u=(c=t.split("."))[0],r=c[1],!(n=f[u]))throw new Error("No such provider ("+u+")");var l={url:n.url,options:n.options||{}};if(r&&"variants"in n){if(!(r in n.variants))throw new Error("No such variant of "+(u||n.url)+" ("+r+")");var p,d=n.variants[r];p="string"==typeof d?{variant:d}:d.options,l={url:d.url||l.url,options:s(s({},l.options||{}),p)}}else"function"==typeof l.url&&(l.url=l.url(c.splice(1,c.length-1).join(".")));var m="file:"===window.location.protocol||l.options.forceHTTP;0===l.url.indexOf("//")&&m&&(l.url="http:"+l.url),l.options.retina&&(e.detectRetina&&a.ZP.getBrowserProperties().retina?e.detectRetina=!1:l.options.retina=""),l.options.attribution&&(l.options.attribution=function t(e){return-1===e.indexOf("{attribution.")?e:e.replace(/\{attribution.(\w*)\}/,(function(e,n){return t(f[n].options.attribution)}))}(l.options.attribution));var v=s(s({},l.options),o()(e,(function(t){return void 0!==t})));return[l.url,v]};const l={getLayerConfig:f}},33358:(t,e,n)=>{"use strict";n.d(e,{z:()=>o});var r=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],o=function(t){return-1!==r.indexOf(t)}},23645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<t.length;u++){var s=[].concat(t[u]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},7654:(t,e,n)=>{var r=n(81763);t.exports=function(t){return r(t)&&t!=+t}},31351:t=>{var e=Array.prototype.reverse;t.exports=function(t){return null==t?t:e.call(t)}},10240:(t,e,n)=>{var r=n(29750),o=n(80531),i=n(40554),a=n(79833);t.exports=function(t,e,n){return t=a(t),n=null==n?0:r(i(n),0,t.length),e=o(e),t.slice(n,n+e.length)==e}},23493:(t,e,n)=>{var r=n(23279),o=n(13218);t.exports=function(t,e,n){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:i,maxWait:e,trailing:a})}},93379:(t,e,n)=>{"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},r=[],o=0;o<t.length;o++){var u=t[o],s=e.base?u[0]+e.base:u[0],c=n[s]||0,f="".concat(s," ").concat(c);n[s]=c+1;var l=a(f),p={css:u[1],media:u[2],sourceMap:u[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:v(p,e),references:1}),r.push(f)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,f=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function l(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,m=0;function v(t,e){var n,r,o;if(e.singleton){var i=m++;n=d||(d=s(e)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=s(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=u(t,e),c=0;c<n.length;c++){var f=a(n[c]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}n=s}}}}}]);