(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6160],{81808:(t,e,r)=>{"use strict";r.d(e,{eD:()=>n,AM:()=>o,ok:()=>c,Gg:()=>a,nT:()=>i,TL:()=>u,KS:()=>s,EB:()=>l,DZ:()=>p,Aw:()=>f,V_:()=>d,H0:()=>y,jW:()=>w,JZ:()=>m,fQ:()=>v,HK:()=>b,YO:()=>h,I6:()=>O});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",c="MAP_CONFIG_LOADED",a="MAP_CONFIG_LOAD_ERROR",i="MAP_LOAD_INFO",u="MAP_INFO_LOAD_START",s="MAP_INFO_LOADED",l="MAP_INFO_LOAD_ERROR",p="MAP:MAP_SAVE_ERROR",f="MAP:MAP_SAVED",d="MAP:RESET_MAP_SAVE_ERROR";function y(t,e,r){return{type:c,config:t,legacy:!!e,mapId:e,zoomToExtent:r}}function w(t,e){return{type:a,error:t,mapId:e}}function m(t,e,r,n,c){return{type:o,configName:t,mapId:e,config:r,mapInfo:n,overrideConfig:c}}function v(t,e){return{type:s,mapId:e,info:t}}function b(t,e){return{type:l,mapId:t,error:e}}function h(t){return{type:u,mapId:t}}function O(t){return{type:i,mapId:t}}},86850:(t,e,r)=>{"use strict";r.d(e,{Mc:()=>G,v$:()=>q,ED:()=>W});var n=r(72500),o=r.n(n),c=r(84596),a=r.n(c),i=r(14293),u=r.n(i),s=r(13218),l=r.n(s),p=r(49977),f=r.n(p),d=r(5055),y=r(7526),w=r(75875),m=r.n(w),v=r(47805),b=r(24262),h=r(10284),O=r(39156),g=["totalFeatures","features"],x=["sortOptions","propertyName"];function P(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(Object(r),!0).forEach((function(e){F(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function F(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var D=r.n(O)()({wfsVersion:"1.1.0"}),I=D.getFeature,_=D.query,N=D.sortBy,T=D.propertyName,M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.totalFeatures,r=t.features,n=E(t,g),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=o.startIndex,a=arguments.length>2?arguments[2]:void 0;return a>e&&a===c+r.length&&e===r.length?R(R({},n),{},{features:r,totalFeatures:a}):R(R({},n),{},{features:r,totalFeatures:e})},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.pagination||!u()(e.startIndex)&&!u()(e.maxFeatures)&&{startIndex:e.startIndex,maxFeatures:e.maxFeatures}},L=function(t){return{crs:{type:"name",properties:{name:"urn:ogc:def:crs:EPSG::4326"}},numberMatched:t.length,numberReturned:t.length,timeStamp:"2020-07-20T11:36:20.118Z",totalFeatures:t.length,type:"FeatureCollection",features:t}},B=function(t,e){if(e.filterFields&&0!==e.filterFields.length){var r=t.features.filter((0,v.createFeatureFilter)(e));t.features=r,t.numberMatched=r.length,t.numberReturned=r.length,t.totalFeatures=r.length}return e.sortOptions&&e.sortOptions.sortBy&&e.sortOptions.sortOrder&&"NONE"!==e.sortOptions.sortOrder&&t.features.sort((function(t,r){var n=t.properties[e.sortOptions.sortBy],o=r.properties[e.sortOptions.sortBy],c=n.toLowerCase().localeCompare(o.toLowerCase());return"ASC"===e.sortOptions.sortOrder?c:-1*c})),t},k=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=(0,v.getWFSFilterData)(e,r),c=o().parse(t,!0),a=l()(c.query)?c.query:{};a.service="WFS",a.outputFormat="json";var i=o().format({protocol:c.protocol,host:c.host,pathname:c.pathname,query:a});return r.layer&&"vector"===r.layer.type?f().Observable.defer((function(){return new Promise((function(t){var n=L(r.layer.features);t(B(n,e))}))})):f().Observable.defer((function(){return m().post(i,n,{timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/json"}})})).let(h.oB).map((function(t){return M(t.data,C(e,r),r.totalFeatures)}))},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.search,r=void 0===e?{}:e,n=t.url,o=t.name,c=arguments.length>1?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=i.sortOptions,s=i.propertyName,l=E(i,x);return k(r.url||n,c&&"object"===j(c)?R(R({},c),{},{typeName:o||c.typeName}):I(_(o,[].concat(P(u?[N(u.sortBy,u.sortOrder)]:[]),P(s?[T(s)]:[]),P(c?a()(c):[]))),l),l).catch((function(t){if("OGCError"===t.name&&"NoApplicableCode"===t.code&&!u&&s&&s[0])return k(r.url||n,c&&"object"===j(c)?R(R({},c),{},{typeName:o||c.typeName}):I(_(o,[N(s[0])].concat(P(s?[T(s)]:[]),P(c?a()(c):[]))),l),l);throw t}))},q=function(t){var e=t.layer;return f().Observable.defer((function(){return m().get(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,r=t.search,n=void 0===r?{}:r,c=t.url,a=t.describeFeatureTypeURL,i=o().parse(a||n.url||c,!0);return o().format(R(R({},i),{},{search:void 0,query:R(R({},i.query),{},{service:"WFS",version:"1.1.0",typeName:e,outputFormat:"application/json",request:"DescribeFeatureType"})}))}(e))})).let(h.oB)},W=function(t){var e=t.layer;return f().Observable.defer((function(){return m().get(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,r=t.search,n=void 0===r?{}:r,c=t.url,a=(0,b.Fh)({name:e,url:n&&n.url||c}),i=o().parse(a,!0);return o().format(R(R({},i),{},{search:void 0,query:R(R({},i.query),{},{service:"WFS",version:"1.1.1",request:"GetCapabilities"})}))}(e))})).let(h.oB).switchMap((function(t){return f().Observable.bindNodeCallback((function(t,e){return(0,d.parseString)(t,{tagNameProcessors:[y.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data)}))}},99767:(t,e,r)=>{"use strict";r.d(e,{qP:()=>m,XA:()=>v,fA:()=>b,gN:()=>h,p5:()=>O,Rr:()=>g,DK:()=>x,En:()=>P,Tr:()=>S,t$:()=>j,XJ:()=>E,Dx:()=>A,Jy:()=>F});var n=r(72500),o=r.n(n),c=r(66654),a=r.n(c),i=r(47037),u=r.n(i),s=r(1469),l=r.n(s),p=r(83608),f=r.n(p);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){w(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function w(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=function(t,e){return"<wps:Input>"+"<ows:Identifier>".concat(t,"</ows:Identifier>")+e+"</wps:Input>"},v=function(t){return"<wps:Data>".concat(t,"</wps:Data>")},b=function(t,e,r,n){return'<wps:Reference mimeType="'.concat(t,'" xlink:href="').concat(e,'" method="').concat(r,'"').concat("POST"===r?"":"/",">")+("POST"===r?"<wps:Body>".concat(n,"</wps:Body></wps:Reference>"):"")},h=function(t){return"<wps:LiteralData>".concat(t,"</wps:LiteralData>")},O=function(t,e,r){return"<wps:ComplexData".concat(e?' mimeType="'.concat(e,'"'):"").concat(r?' encoding="'.concat(r,'"'):"",">").concat(t,"</wps:ComplexData>")},g=function(t){return"<![CDATA[".concat(t,"]]>")},x=function(t){return"<wps:ResponseForm>".concat(t,"</wps:ResponseForm>")},P=function(t,e){return"<wps:RawDataOutput".concat(e?' mimeType="'.concat(e,'"'):"",">")+"<ows:Identifier>".concat(t,"</ows:Identifier>")+"</wps:RawDataOutput>"},S=function(t,e,r){return"<wps:ResponseDocument".concat(t?' storeExecuteResponse="true"':"").concat(e?' status="true"':"",">")+r+"</wps:ResponseDocument>"},j=function(t,e,r,n,o){return"<wps:Output".concat(t?' mimeType="'.concat(t,'"'):"").concat(e?' asReference="true"':"",">")+"<ows:Identifier>".concat(r,"</ows:Identifier>")+(n?"<ows:Title>".concat(n,"</ows:Title>"):"")+(o?"<ows:Abstract>".concat(o,"</ows:Abstract>"):"")+"</wps:Output>"},E=function(t){return m("writeParameters",v(O("<dwn:Parameters>".concat(t,"</dwn:Parameters>"))))},A=function(t,e){return'<dwn:Parameter key="'.concat(t,'">').concat(e,"</dwn:Parameter>")},R=function(t,e){var r=o().parse(t,!0),n=r.pathname;return(a()(r.pathname,"wfs")||a()(r.pathname,"wms"))&&(n=r.pathname.replace(/(wms|ows|wfs|wps)$/,"wps")),o().format(y(y({},r),{},{search:null,pathname:n,query:y(y({service:"WPS"},e),r.query)}))},F=function(t,e){if(t&&u()(t))return R(t,e);if(l()(t)){var r=f()(0,t.length-1);return R(t[r],e)}return t}},27835:(t,e,r)=>{"use strict";r.d(e,{Uh:()=>S,W5:()=>j,ai:()=>R,RW:()=>F,dr:()=>D,mG:()=>_});var n=r(6557),o=r.n(n),c=r(49977),a=r(5055),i=r(7526),u=r(75875),s=r.n(u),l=r(99767);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){var e="function"==typeof Map?new Map:void 0;return(b=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return h(t,arguments,x(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g(n,t)})(t)}function h(t,e,r){return(h=O()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&g(o,r.prototype),o}).apply(null,arguments)}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(o,t);var e,r,n=(e=o,r=O(),function(){var t,n=x(e);if(r){var o=x(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return v(this,t)});function o(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(r=n.call(this,t)).name="WPSExecuteError",r.code=e||t,r}return o}(b(Error)),S=function(t,e,r){return'<?xml version="1.0" encoding="UTF-8"?><wps:Execute version="1.0.0" service="WPS" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.opengis.net/wps/1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:wcs="http://www.opengis.net/wcs/1.1.1" xmlns:dwn="http://geoserver.org/wps/download" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">'+"<ows:Identifier>".concat(t,"</ows:Identifier>")+"<wps:DataInputs>"+(e||[]).join("")+"</wps:DataInputs>"+(r||"")+"</wps:Execute>"},j=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.Observable.defer((function(){return s().get((0,l.Jy)(t,{version:"1.0.0",REQUEST:"GetExecutionStatus",executionId:e}),w({headers:{Accept:"application/xml"}},r))}))},E=function(t,e){var r,n,c=function(t){var e,r,n,c,a,i,u,s,l,p,f,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o(),y=null==t||null===(e=t.ExecuteResponse)||void 0===e||null===(r=e.Status)||void 0===r?void 0:r[0];return null!=y&&y.ProcessAccepted?{status:"ProcessAccepted"}:null!=y&&y.ProcessStarted?{status:"ProcessStarted"}:null!=y&&y.ProcessSucceeded?{status:"ProcessSucceeded",data:d(null===(n=t.ExecuteResponse.ProcessOutputs)||void 0===n||null===(c=n[0])||void 0===c?void 0:c.Output)}:null!=y&&y.ProcessFailed?{status:"ProcessFailed",exceptionReport:null==y||null===(a=y.ProcessFailed)||void 0===a||null===(i=a[0])||void 0===i||null===(u=i.ExceptionReport)||void 0===u||null===(s=u[0])||void 0===s||null===(l=s.Exception)||void 0===l||null===(p=l[0])||void 0===p||null===(f=p.ExceptionText)||void 0===f?void 0:f[0]}:null!=y&&y.ProcessPaused?{status:"ProcessPaused"}:{status:"UnexpectedStatus"}}(t,e);if("ProcessFailed"===c.status)throw new P(c.exceptionReport,"ProcessFailed");if("UnexpectedStatus"===c.status)throw new P("UnexpectedProcessStatus");if("ProcessSucceeded"===c.status)return{succeeded:!0,data:c.data};var a=null==t||null===(r=t.ExecuteResponse)||void 0===r||null===(n=r.$)||void 0===n?void 0:n.statusLocation;if(!a)throw new P("NoStatusLocation");var i=a.indexOf("executionId=");if(-1===i)throw new P("NoExecutionId");var u=a.slice(i+12),s=u.indexOf("&");return{succeeded:!1,executionId:-1===s?u:u.slice(0,s)}},A=function(t){var e,r;return null!=t&&null!==(e=t.Identifier)&&void 0!==e&&e[0]?{identifier:null==t||null===(r=t.Identifier)||void 0===r?void 0:r[0]}:null},R=function(t){var e,r,n,o,c;return null!=t&&null!==(e=t.Data)&&void 0!==e&&null!==(r=e[0])&&void 0!==r&&r.LiteralData?{data:null==t||null===(n=t.Data)||void 0===n||null===(o=n[0])||void 0===o||null===(c=o.LiteralData)||void 0===c?void 0:c[0]}:null},F=function(t){var e,r,n,o,c,a;return null!=t&&t.Reference?{href:null==t||null===(e=t.Reference)||void 0===e||null===(r=e[0])||void 0===r||null===(n=r.$)||void 0===n?void 0:n.href,mimeType:null==t||null===(o=t.Reference)||void 0===o||null===(c=o[0])||void 0===c||null===(a=c.$)||void 0===a?void 0:a.mimeType}:null},D=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map((function(t){return[A].concat(f(e||[])).map((function(e){return e(t)})).reduce((function(t,e){return e?w(w({},t),e):t}),{})}))}},I=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.Observable.defer((function(){return s().post((0,l.Jy)(t,{version:"1.0.0",REQUEST:"Execute"}),e,w({headers:{"Content-Type":"application/xml"}},r))}))},_=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.executeStatusUpdateInterval,u=void 0===o?2e3:o,s=r.outputsExtractor,l=function(t){return c.Observable.defer((function(){return new Promise((function(e,r){return(0,a.parseString)(t,{tagNameProcessors:[i.stripPrefix]},(function(t,n){return t?r(t):e(n)}))}))}))};return I(t,e,n).catch((function(){throw new P("ExecuteProcessXHRFailed")})).switchMap((function(t){return"application/xml"===t.headers["content-type"]||"text/xml"===t.headers["content-type"]?l(t.data).map((function(e){return{data:e,type:"application/xml",originalData:t.data}})):c.Observable.of({data:t.data,type:t.headers["content-type"]})})).flatMap((function(e){var r=e.data,n=e.type,o=e.originalData;if("application/xml"!==n)return c.Observable.of(r);if(null==r||!r.ExecuteResponse)return c.Observable.of(o);var a=E(r,s),i=a.succeeded,p=a.data,f=a.executionId;if(i)return c.Observable.of(p);var d=c.Observable.interval(u).take(1).flatMap((function(){return j(t,f).catch((function(){throw new P("GetExecutionStatusXHRFailed")})).flatMap((function(t){return l(t.data).flatMap((function(t){var e=E(t,s);return e.succeeded?c.Observable.of(e.data):d}))}))}));return d}))}},10284:(t,e,r)=>{"use strict";r.d(e,{sw:()=>v,oB:()=>b});var n=r(49977),o=r.n(n),c=r(27361),a=r.n(c),i=r(5055),u=r(7526);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e="function"==typeof Map?new Map:void 0;return(p=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return f(t,arguments,w(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,t)})(t)}function f(t,e,r){return(f=d()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&y(o,r.prototype),o}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r(24384);var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(o,t);var e,r,n=(e=o,r=d(),function(){var t,n=w(e);if(r){var o=w(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return l(this,t)});function o(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(r=n.call(this,t)).name="OGCError",r.code=e,r}return o}(p(Error)),v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[u.stripPrefix],explicitArray:!1,mergeAttrs:!0};return o().Observable.bindNodeCallback((function(t,r){return(0,i.parseString)(t,e,r)}))(t)},b=function(t){return t.switchMap((function(t){return"string"==typeof t.data&&t.data.indexOf("ExceptionReport")>0?o().Observable.bindNodeCallback((function(t,e){return(0,i.parseString)(t,{tagNameProcessors:[u.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data).map((function(t){var e=a()(t,"ExceptionReport.Exception.ExceptionText");throw new m(e||"Undefined OGC Service Error",a()(t,"ExceptionReport.Exception.exceptionCode"))})):o().Observable.of(t)}))}},39156:(t,e,r)=>{function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=r(2245),i=r(84596),u=r(78889).wfsToGmlVersion,s=function(t){return'service="WFS" version="'+t+'" '+("1.0.0"===t?'outputFormat="GML2" ':"")+'xmlns:gml="http://www.opengis.net/gml" xmlns:wfs="http://www.opengis.net/wfs" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs '+"http://schemas.opengis.net/wfs/".concat(t,"1.0.0"===t?'/WFS-basic.xsd"':'/wfs.xsd"')},l=function(t){return'service="WFS" version="'+t+'" xmlns:wfs="http://www.opengis.net/wfs/2.0" xmlns:fes="http://www.opengis.net/fes/2.0" xmlns:gml="http://www.opengis.net/gml/3.2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd http://www.opengis.net/gml/3.2 http://schemas.opengis.net/gml/3.2.1/gml.xsd"'};t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.wfsVersion,r=void 0===e?"1.1.0":e,n=t.gmlVersion,c=t.filterNS,p=t.wfsNS,f=void 0===p?"wfs":p,d=n;!d&&r?d=u(r):d||(d="3.1.1");var y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.viewParams,n=t.resultType,o=t.outputFormat,c=t.startIndex,a=t.maxFeatures,i=function(t){return 0===r.indexOf("2.")?'count="'.concat(t,'"'):'maxFeatures="'.concat(t,'"')};return(0===r.indexOf("1.")?s(r):l(r))+(n?' resultType="'.concat(n,'"'):"")+(o?' outputFormat="'.concat(o,'"'):"")+(c||0===c?' startIndex="'.concat(c,'"'):"")+(a||0===a?" ".concat(i(a)):"")+(e?' viewParams="'.concat(e,'"'):"")},w=function(t){return i(t).map((function(t){return"<".concat("2.0"===r?"fes":"ogc",":PropertyName>").concat(t,"</").concat("2.0"===r?"fes":"ogc",":PropertyName>")})).join("")};return o(o({propertyName:w},a({gmlVersion:d,wfsVersion:r,filterNS:c||"2.0"===r?"fes":"ogc"})),{},{getFeature:function(t,e){return"<".concat(f,":GetFeature ").concat(y(e),">").concat(Array.isArray(t)?t.join(""):t,"</").concat(f,":GetFeature>")},sortBy:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ASC";return"<".concat(f,":SortBy><").concat(f,":SortProperty>").concat(w(t),"<").concat(f,":SortOrder>").concat(e,"</").concat(f,":SortOrder></").concat(f,":SortProperty></").concat(f,":SortBy>")},query:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.srsName,c=void 0===o?"EPSG:4326":o;return"<".concat(f,":Query ").concat("2.0"===r?"typeNames":"typeName",'="').concat(t,'" srsName="').concat(c,'">')+"".concat(Array.isArray(e)?e.join(""):e)+"</".concat(f,":Query>")}})}}}]);