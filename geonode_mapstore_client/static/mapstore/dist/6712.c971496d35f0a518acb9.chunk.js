(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6712],{67007:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>T});var n=r(72500),i=r.n(n),a=r(1469),o=r.n(a),u=r(84596),l=r.n(u),s=r(27361),c=r.n(s),f=r(27418),p=r.n(f),m=r(5055),d=r.n(m),g=r(75875),v=r.n(g),y=r(63202),b=r(86267);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O={},L=function(e){var t=(o()(e)&&e||e.split(","))[0],r=i().parse(t,!0);return i().format(p()({},r,{search:null},{query:p()({service:"WMS",version:"1.3.0",request:"GetCapabilities"},r.query)}))},w=function(e){var t=e&&e.Title,r=e.LogoURL&&h(h({},c()(e,"LogoURL.$")||{}),{},{format:c()(e,"LogoURL.Format")}),n=c()(e,'OnlineResource.$["xlink:href"]');return{title:t,logo:r,imageUrl:c()(e,'LogoURL.OnlineResource.$["xlink:href"]'),link:n}},M=function e(t){return t.Layer?(o()(t.Layer)&&t.Layer||[t.Layer]).reduce((function(t,r){return t.concat(e(r)).concat(r.Layer&&r.Name?[r]:[])}),[]):t.Name&&[t]||[]},C=function(e){return e.Request&&e.Request.GetMap&&e.Request.GetMap.DCPType&&e.Request.GetMap.DCPType.HTTP&&e.Request.GetMap.DCPType.HTTP.Get&&e.Request.GetMap.DCPType.HTTP.Get.OnlineResource&&e.Request.GetMap.DCPType.HTTP.Get.OnlineResource.$||void 0},R=function(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,u=arguments.length>3?arguments[3]:void 0,l=(n.WMS_Capabilities||n.WMT_MS_Capabilities||{}).Capability,s=(n.WMS_Capabilities||n.WMT_MS_Capabilities||{}).Service,c=C(l),f=l.Layer&&(null===(e=l.Layer.SRS||l.Layer.CRS)||void 0===e?void 0:e.map((function(e){return e.toUpperCase()})))||[],m=l.Layer&&l.Layer.Attribution&&w(l.Layer.Attribution),d=l.Request&&l.Request.GetMap&&l.Request.GetMap.Format||[],g=M(l),v=o()(g)?g:[g],y=v.filter((function(e){return!u||-1!==e.Name.toLowerCase().indexOf(u.toLowerCase())||e.Title&&-1!==e.Title.toLowerCase().indexOf(u.toLowerCase())||e.Abstract&&-1!==e.Abstract.toLowerCase().indexOf(u.toLowerCase())}));return{numberOfRecordsMatched:y.length,numberOfRecordsReturned:Math.min(a,y.length),nextRecord:i+Math.min(a,y.length)+1,service:s,layerOptions:{version:(null===(t=n.WMS_Capabilities||n.WMT_MS_Capabilities)||void 0===t||null===(r=t.$)||void 0===r?void 0:r.version)||"1.3.0"},records:y.filter((function(e,t){return t>=i-1&&t<i-1+a})).map((function(e){return p()({},e,{formats:d,onlineResource:c,SRS:f,credits:e.Attribution?w(e.Attribution):m})}))}},B=function(e,t,r,n){var i=O[e];return i&&(new Date).getTime()<i.timestamp+1e3*((0,y.u8)("cacheExpire")||60)?new Promise((function(e){e(R(i.data,t,r,n))})):v().get(L(e)).then((function(i){var a;return d().parseString(i.data,{explicitArray:!1},(function(e,t){a=t})),O[e]={timestamp:(new Date).getTime(),data:a},R(a,t,r,n)}))};const T={flatLayers:M,parseUrl:L,getDimensions:function(e){return l()(e.Dimension||e.dimension||[]).map((function(t,r){var n=e.Extent&&l()(e.Extent)[r]||e.extent&&l()(e.extent)[r];return{name:t.$.name,units:t.$.units,unitSymbol:t.$.unitSymbol,default:t.$.default||n&&n.$.default,values:t._&&t.split(",")||n&&n._&&n.split(",")}}))},getCapabilities:function(e,t){var n=i().parse(e,!0),a=i().format(p()({},n,{query:p()({service:"WMS",version:"1.1.1",request:"GetCapabilities"},n.query)}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7959),r.e(7260)]).then(function(){var n=r(67260).unmarshaller;e(v().get(L(a)).then((function(e){var r;if(t)return d().parseString(e.data,{explicitArray:!1},(function(e,t){r=t})),r;var i=n.unmarshalString(e.data);return i&&i.value})))}.bind(null,r)).catch(r.oe)}))},describeLayer:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i().parse(e,!0),o=i().format(p()({},a,{query:p()({service:"WMS",version:"1.1.1",layers:t,request:"DescribeLayer"},a.query,n.query||{})}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7959),r.e(7260)]).then(function(){var t=r(67260).unmarshaller;e(v().get(L(o)).then((function(e){var r=t.unmarshalString(e.data);return r&&r.value&&r.value.layerDescription&&r.value.layerDescription[0]})))}.bind(null,r)).catch(r.oe)}))},getRecords:B,describeLayers:function(e,t){var r=i().parse(e,!0),n=i().format(p()({},r,{query:p()({service:"WMS",version:"1.1.1",layers:t,request:"DescribeLayer"},r.query)}));return v().get(L(n)).then((function(e){var t;return d().parseString(e.data,{explicitArray:!1},(function(e,r){t=r&&r.WMS_DescribeLayerResponse&&r.WMS_DescribeLayerResponse.LayerDescription})),(t=Array.isArray(t)?t:[t]).map((function(e){return h(h({},e&&e.$||{}),{},{layerName:e&&e.$&&e.$.name,query:h({},e&&e.query&&e.query.$||{})})}))}))},textSearch:function(e,t,r,n){return B(e,t,r,n)},parseLayerCapabilities:function e(t,r,n){return l()(n||c()(t,"capability.layer.layer")).reduce((function(n,i){return n||(!i.name&&i.layer?e(t,r,l()(i.layer)):2===r.name.split(":").length&&i.name&&2===i.name.split(":").length?r.name===i.name&&i:i.name&&2===i.name.split(":").length?r.name===i.name.split(":")[1]&&i:2===r.name.split(":").length?r.name.split(":")[1]===i.name&&i:r.name===i.name&&i)}),null)},getBBox:function(e,t){for(var r=e,n=r.EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,b.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;!n&&r.Layer&&r.Layer.length;)n=(r=r.Layer[0]).EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,b.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;n||(n={westBoundLongitude:-180,southBoundLatitude:-90,eastBoundLongitude:180,northBoundLatitude:90});var i={extent:[n.westBoundLongitude||n.minx,n.southBoundLatitude||n.miny,n.eastBoundLongitude||n.maxx,n.northBoundLatitude||n.maxy],crs:"EPSG:4326"};return t?{crs:i.crs,bounds:{minx:i.extent[0],miny:i.extent[1],maxx:i.extent[2],maxy:i.extent[3]}}:i},reset:function(){Object.keys(O).forEach((function(e){delete O[e]}))}}},76712:(e,t,r)=>{"use strict";r.d(t,{n0:()=>Z,tW:()=>Q,FJ:()=>X,F8:()=>z,ll:()=>K,eL:()=>V,AD:()=>Y,oR:()=>ee,LZ:()=>te,eX:()=>re,QQ:()=>ne,B8:()=>ie,T6:()=>ae});var n=r(27418),i=r.n(n),a=r(91175),o=r.n(a),u=r(1469),l=r.n(u),s=r(47037),c=r.n(s),f=r(84596),p=r.n(f),m=r(13218),d=r.n(m),g=r(89734),v=r.n(g),y=r(44908),b=r.n(y),x=r(64721),h=r.n(x),S=r(27361),O=r.n(S),L=r(14293),w=r.n(L),M=r(41609),C=r.n(M),R=r(72500),B=r.n(R),T=r(86267),W=r(63202),G=r(24262),P=r(86638),j=r(7294),q=r(33044),D=r(67007),A=r(88798);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){U(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(e){return e&&e.replace(/\/csw$/,"/")},_=function(e){return d()(e)&&e._||e},$=function(e,t){return e.filter((function(r){return j.C2(t,r,e,t,null)}))},k=function(e){var t=Array.isArray(e.references)?e.references:[e.references];return o()([].filter.call(t,(function(t){return"WWW:LINK-1.0-http--image-thumbnail"===t.scheme||"thumbnail"===t.scheme||"WWW:DOWNLOAD-1.0-http--download"===t.scheme&&-1!==(t.value||"").indexOf("".concat(e.identifier||"","-thumb"))||"WWW:DOWNLOAD-REST_MAP"===t.scheme&&-1!==(t.value||"").indexOf("".concat(e.identifier||"","-thumb"))})))},N={csw:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e;return n&&n.records?n.records.map((function(e){var n,a,u,s=e.dc;if(s&&s.URI){var f=l()(s.URI)?s.URI:s.URI&&[s.URI]||[],m=o()([].filter.call(f,(function(e){return"thumbnail"===e.name})))||o()([].filter.call(f,(function(e){var t;return!e.name&&(null===(t=e.protocol)||void 0===t?void 0:t.indexOf("image/"))>-1})));n=m?m.value:null,a=o()([].filter.call(f,(function(e){return e.protocol&&(e.protocol.match(/^OGC:WMS-(.*)-http-get-map/g)||e.protocol.match(/^OGC:WMS/g))})))}if(!a&&s&&s.references&&s.references.length){var d=Array.isArray(s.references)?s.references:[s.references];if(a=o()([].filter.call(d,(function(e){return e.scheme&&(e.scheme.match(/^OGC:WMS-(.*)-http-get-map/g)||"OGC:WMS"===e.scheme)})))){var g=B().parse(a.value,!0),y=g.query&&g.query.layers||s.alternative;a=i()({},a,{name:y})}}if(!a&&s&&s.references&&s.references.length){var x=Array.isArray(s.references)?s.references:[s.references];if(u=o()([].filter.call(x,(function(e){return e.scheme&&"WWW:DOWNLOAD-REST_MAP"===e.scheme})))){var S=s.alternative;u=i()({},u,{name:S})}}if(!n&&s&&s.references){var O=k(s);O&&(n=O.value)}var L=[];if(s&&s.references&&(Array.isArray(s.references)?s.references:[s.references]).filter((function(e){return e.scheme.indexOf("http-get-capabilities")>-1})).forEach((function(e){var r=0===e.value.indexOf("http")?e.value:(t&&t.catalogURL||"")+"/"+e.value;L.push({type:e.scheme,url:r})})),a&&a.name){0===a.value.indexOf("http")||i()({},a,{value:(t&&t.catalogURL||"")+"/"+a.value});var w={type:a.protocol||a.scheme,url:a.value,SRS:[],params:{name:a.name}};L.push(w)}if(u&&u.name){var M={type:"arcgis",url:u.value,SRS:[],params:{name:u.name}};L.push(M)}n&&(0===n.indexOf("http")||(n=(E(t&&t.url)||"")+n));var C={boundingBox:e.boundingBox&&e.boundingBox.extent&&p()(e.boundingBox.extent.join(","))};if(s&&(C=I(I({},C),v()(Object.keys(s)).reduce((function(e,t){return I(I({},e),{},U({},t,b()(p()(s[t]))))}),{}))),s&&s.URI&&p()(s.URI)&&p()(s.URI).length&&(C=I(I({},C),{},{uri:["<ul>"+p()(s.URI).map((function(e){return'<li><a target="_blank" href="'.concat(e.value,'">').concat(e.name,"</a></li>")})).join("")+"</ul>"]})),s&&s.subject&&p()(s.subject)&&p()(s.subject).length&&(C=I(I({},C),{},{subject:["<ul>"+p()(s.subject).map((function(e){return"<li>".concat(e,"</li>")})).join("")+"</ul>"]})),L&&p()(L).length?C=I(I({},C),{},{references:["<ul>"+p()(L).map((function(e){return'<li><a target="_blank" href="'.concat(e.url,'">').concat(e.params&&e.params.name||e.url,"</a></li>")})).join("")+"</ul>"]}):delete C.references,s&&s.temporal){var R=s.temporal.split("; ");if(R.length){var T=R.filter((function(e){return-1!==e.indexOf("scheme=")})).map((function(e){var t=e.indexOf("=");return e.substr(t+1,e.length-1)}));T=T.length?T[0]:"W3C-DTF";var W=R.filter((function(e){return-1!==e.indexOf("start=")||-1!==e.indexOf("end=")})).map((function(e){var t=e.indexOf("="),n=e.substr(0,t),i=e.substr(t+1,e.length-1),a=e.length-t-1<=10;return h()(["start","end"],n)&&"W3C-DTF"===T&&!a?(0,P.S$)(r,"catalog.".concat(n))+new Date(i).toLocaleString():h()(["start","end"],n)?(0,P.S$)(r,"catalog.".concat(n))+i:""}));C=I(I({},C),{},{temporal:["<ul>"+W.map((function(e){return"<li>".concat(e,"</li>")})).join("")+"</ul>"]})}}return{boundingBox:e.boundingBox,description:s&&c()(s.abstract)&&s.abstract||"",layerOptions:t&&t.layerOptions||{},identifier:s&&c()(s.identifier)&&s.identifier||"",references:L,thumbnail:n,title:s&&c()(s.title)&&s.title||"",tags:s&&s.tags||"",metadata:C}})):null},wms:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&e.records?e.records.map((function(r){return{capabilities:r,credits:r.credits,boundingBox:D.ZP.getBBox(r),description:r.Abstract||r.Title||r.Name,identifier:r.Name,service:e.service,tags:"",layerOptions:I(I({},(null==t?void 0:t.layerOptions)||{}),(null==e?void 0:e.layerOptions)||{}),title:(0,G.EM)(r)||r.Name,formats:p()(r.formats||[]),dimensions:(r.Dimension&&p()(r.Dimension)||[]).map((function(e){return i()({},{values:e._&&e._.split(",")||[]},e.$||{})})).filter((function(e){return e&&"time"!==e.name})),references:[{type:"OGC:WMS",url:t&&t.url,SRS:r.SRS&&(l()(r.SRS)?r.SRS:[r.SRS])||[],params:{name:r.Name}}]}})):null},wmts:function(e,t){return e&&e.records?e.records.map((function(e){var r=p()(j.f1(e)||t&&t.url);1===r.length&&(r=r[0]);var n=j.dN(e),a=p()(e.TileMatrixSetLink||[]).reduce((function(t,r){var n,a=o()((e.TileMatrixSet&&p()(e.TileMatrixSet)||[]).filter((function(e){return e["ows:Identifier"]===r.TileMatrixSet}))),u=a&&T.default.getEPSGCode(a["ows:SupportedCRS"]),l=r.TileMatrixSetLimits&&(r.TileMatrixSetLimits.TileMatrixLimits||[]).map((function(e){return{identifier:e.TileMatrix,ranges:{cols:{min:e.MinTileCol,max:e.MaxTileCol},rows:{min:e.MinTileRow,max:e.MaxTileRow}}}}))||a.TileMatrix.map((function(e){return{identifier:e["ows:Identifier"]}}));return i()(t,(U(n={},a["ows:Identifier"],l),U(n,u,l),n))}),{}),u=function(e){var t=e["ows:WGS84BoundingBox"];return t||(t={"ows:LowerCorner":"-180.0 -90.0","ows:UpperCorner":"180.0 90.0"}),t}(e);return{title:_(e["ows:Title"]||e["ows:Identifier"]),description:_(e["ows:Abstract"]||e["ows:Title"]||e["ows:Identifier"]),identifier:_(e["ows:Identifier"]),tags:"",layerOptions:t&&t.layerOptions||{},style:e.style,capabilitiesURL:n,queryable:e.queryable,requestEncoding:e.requestEncoding,tileMatrixSet:e.TileMatrixSet,matrixIds:a,format:e.format,TileMatrixSetLink:p()(e.TileMatrixSetLink),boundingBox:{extent:[u["ows:LowerCorner"].split(" ")[0],u["ows:LowerCorner"].split(" ")[1],u["ows:UpperCorner"].split(" ")[0],u["ows:UpperCorner"].split(" ")[1]],crs:"EPSG:4326"},references:[{type:"OGC:WMTS",url:r,SRS:$(e.SRS||[],a),params:{name:e["ows:Identifier"]}}]}})):null},tms:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.records){var r=t.service&&"tms"===t.service.provider;return r?e.records.map((function(e){return{title:e.title,tileMapUrl:e.href,description:"".concat(e.srs).concat(e.format?", "+e.format:""),tmsUrl:t.tmsUrl,references:[{type:"OGC:TMS",version:"1.0.0",url:t.url}]}})):e.records.map((function(e){return{title:e.title||e.provider,url:e.url,attribution:e.attribution,options:e.options,provider:e.provider,type:"tileprovider",references:[]}}))}return null},wfs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.records;return t?t.map((function(e){return I(I({},e),{},{references:[{type:"OGC:WFS-1.1.0-http-get-capabilities",url:e.url},{type:"OGC:WFS-1.1.0-http-get-feature",url:e.url}]})})):null},backgrounds:function(e){return e&&e.records?e.records.map((function(e){return{description:e.title,title:e.title,identifier:e.name,thumbnail:e.thumbURL,references:[],background:e}})):null}},Z=function(e){return e.filter((function(e){return T.default.isSRSAllowed(e)})).reduce((function(e,t){return i()(e,U({},t,!0))}),{})},H=function(e,t){var r=e.split("?"),n={};return r.length>=2&&r[1]&&r[1].split(/[&;]/g).forEach((function(e){var r=e.split("=");-1===t.indexOf(r[0].toLowerCase())&&(n[r[0]]=r[1])})),{url:r[0],params:n}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.references,r=void 0===t?[]:t;return{wfs:o()(r.filter((function(e){return e.type&&("OGC:WFS"===e.type||e.type.indexOf("OGC:WFS")>-1&&e.type.indexOf("http-get-feature")>-1)}))),wms:o()(r.filter((function(e){return e.type&&("OGC:WMS"===e.type||e.type.indexOf("OGC:WMS")>-1&&e.type.indexOf("http-get-map")>-1)}))),wmts:o()(r.filter((function(e){return e.type&&("OGC:WMTS"===e.type||e.type.indexOf("OGC:WMTS")>-1&&e.type.indexOf("http-get-map")>-1)}))),tms:o()(r.filter((function(e){return e.type&&("OGC:TMS"===e.type||e.type.indexOf("OGC:TMS")>-1)})))}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{references:[]};return{esri:o()(e.references.filter((function(e){return e.type&&("ESRI:SERVER"===e.type||"arcgis"===e.type)})))}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.references,r=void 0===t?[]:t,n=o()(r.filter((function(e){return e.type&&e.type.indexOf("OGC:WMS")>-1&&e.type.indexOf("http-get-capabilities")>-1}))),i=o()(r.filter((function(e){return e.type&&e.type.indexOf("OGC:WFS")>-1&&e.type.indexOf("http-get-capabilities")>-1}))),a=o()(r.filter((function(e){return e.type&&e.type.indexOf("OGC:WMTS")>-1&&e.type.indexOf("http-get-capabilities")>-1}))),u=[];return n&&u.push({type:"WMS_GET_CAPABILITIES",url:n.url,labelId:"catalog.wmsGetCapLink"}),a&&u.push({type:"WMTS_GET_CAPABILITIES",url:a.url,labelId:"catalog.wmtsGetCapLink"}),i&&u.push({type:"WFS_GET_CAPABILITIES",url:i.url,labelId:"catalog.wfsGetCapLink"}),u},J=function(e){return e&&!l()(e)&&-1!==e.indexOf(",")?e.split(",").map((function(e){return e.trim()})):e},K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wms",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.removeParams,i=void 0===n?[]:n,a=r.format,o=r.catalogURL,u=r.url,s=r.formats,c=void 0===s?{}:s,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},p=arguments.length>4?arguments[4]:void 0;if(!e||!e.references)return null;var m,d,g=Q(e),v=g.wms,y=g.wmts,b=v||y,x=function(e){return H(W.ZP.cleanDuplicatedQuestionMarks(e),["request","layer","layers","service","version"].concat(i))},h=J(b.url);if(h&&l()(h))m=h.map((function(e){return x(e)})).map((function(e){return e.url})),d=h.map((function(e){return x(e)})).map((function(e){return e.params})).reduce((function(e,t){return I(I({},e),t)}),{});else{var S=x(h||o),O=S.url,L=S.params;m=O,d=L}var M=function(e){return l()(e)&&1===e.length?e[0]:e},R=M(u||m),B=Z(b.SRS);return I(I(I({type:t,requestEncoding:e.requestEncoding,style:e.style,format:a,url:R,capabilitiesURL:e.capabilitiesURL,queryable:e.queryable,visibility:!0,dimensions:e.dimensions||[],name:b.params&&b.params.name,title:e.title||b.params&&b.params.name,matrixIds:"wmts"===t?e.matrixIds||[]:void 0,description:e.description||"",tileMatrixSet:"wmts"===t?e.tileMatrixSet||[]:void 0,credits:!W.ZP.getConfigProp("noCreditsFromCatalog")&&e.credits,bbox:{crs:e.boundingBox.crs,bounds:{minx:e.boundingBox.extent[0],miny:e.boundingBox.extent[1],maxx:e.boundingBox.extent[2],maxy:e.boundingBox.extent[3]}},links:z(e),params:d,allowedSRS:B,catalogURL:o},f),e.layerOptions),{},{localizedLayerStyles:w()(p)?void 0:p},"wms"===t&&!C()(c)&&{imageFormats:c.imageFormats,infoFormats:c.infoFormats})},V=function(e,t,r,n){return N[e]&&N[e](t,r,n)||null},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||!e.references)return null;var r=X(e),n=r.esri;return I({type:n.type,url:n.url,visibility:!0,dimensions:e.dimensions||[],name:n.params&&n.params.name,bbox:{crs:e.boundingBox.crs,bounds:{minx:e.boundingBox.extent[0],miny:e.boundingBox.extent[1],maxx:e.boundingBox.extent[2],maxy:e.boundingBox.extent[3]}}},t)},ee=function(e,t,r){var n=e.tileMapUrl,i=t.TileMap,a=void 0===i?{}:i,o=r.forceDefaultTileGrid,u=a.Title,l=a.Abstract,s=a.SRS,c=a.BoundingBox,f=void 0===c?{}:c,m=a.Origin,d=a.TileFormat,g=void 0===d?{}:d,v=a.TileSets,y=a.$,b=y.version,x=y.tilemapservice,h=O()(f,"$",{}),S=h.minx,L=h.miny,w=h.maxx,M=h.maxy,C=O()(m,"$"),R=C.x,B=C.y,T=O()(g,"$",{}),W=T.width,G=T.height,P=T["mime-type"],j=T.extension,D=[parseFloat(W),parseFloat(G,10)],A=p()(O()(v,"TileSet",[]).map((function(e){return e.$}))).map((function(e){var t=e.href,r=e.order,n=e["units-per-pixel"];return{href:(0,q.cleanAuthParamsFromURL)(t),order:parseFloat(r),resolution:parseFloat(n)}})),F=O()(v,"profile");return{title:u,visibility:!0,hideErrors:!0,name:u,allowedSRS:U({},s,!0),description:l,srs:s,version:b,tileMapService:x?(0,q.cleanAuthParamsFromURL)(x):void 0,type:"tms",profile:F,tileMapUrl:n,forceDefaultTileGrid:o,bbox:f&&{crs:s,bounds:{minx:parseFloat(S),miny:parseFloat(L),maxx:parseFloat(w),maxy:parseFloat(M)}},tileSets:A,origin:{x:parseFloat(R),y:parseFloat(B)},format:P,tileSize:D,extension:j}},te=function(e){return I({type:e.type||"wfs",search:{url:e.url,type:"wfs"},url:e.url,queryable:e.queryable,visibility:!0,name:e.name,title:e.title||e.name,description:e.description||"",bbox:e.boundingBox,links:z(e),style:{weight:1,color:"rgba(0, 0, 255, 1)",opacity:1,fillColor:"rgba(0, 0, 255, 0.1)",fillOpacity:.1,radius:10}},e.layerOptions)},re=function(e){return{type:"tileprovider",visibility:!0,url:e.url,title:e.title,attribution:e.attribution,options:e.options,provider:e.provider,name:e.provider}},ne=[{label:"image/png",value:"image/png"},{label:"image/png8",value:"image/png8"},{label:"image/jpeg",value:"image/jpeg"},{label:"image/vnd.jpeg-png",value:"image/vnd.jpeg-png"},{label:"image/vnd.jpeg-png8",value:"image/vnd.jpeg-png8"},{label:"image/gif",value:"image/gif"}],ie=function(){return b()(Object.values((0,A.eq)()))},ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return D.ZP.getCapabilities(e).then((function(e){var r,n,i=O()(e,"capability.request.getMap.format",[]);if(C()(i))r=ne;else{var a=ne.map((function(e){return e.value}));r=(i=i.map((function(e){var t=e.value;return{label:t,value:t}}))).filter((function(e){var t=e.value;return h()(a,t)}))||[]}if(t){var o=O()(e,"capability.request.getFeatureInfo.format",[]),u=ie();C()(o)?n=u:(o=o.map((function(e){return e.value})),n=b()(o.filter((function(e){return h()(u,e)})))||[])}return t?{imageFormats:r,infoFormats:n}:r})).catch((function(){return t?{imageFormats:ne,infoFormats:ie()}:ne}))}}}]);