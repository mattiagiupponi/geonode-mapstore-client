(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7347],{25108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(82904),o=r(27418),c=r.n(o);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return c()({},e,u({},t.control,c()({},e[t.control],u({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?c()({},e,u({},t.control,c()({},e[t.control],u({},t.property,void 0)))):c()({},e,u({},t.control,c()({},e[t.control],u({},t.property,t.value))));case n.dc:return c()({},e,u({},t.control,c()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),i=o.reduce((function(t,r){return c()(t,u({},r,c()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return c()({},e,i);default:return e}}},89514:(e,t,r)=>{"use strict";r.d(t,{B9:()=>v,dl:()=>f,jg:()=>y});var n=r(75875),o=r.n(n),c=r(9228),u=r(69141),i=r(55877),a=r.n(i),l=new c.Z,s=new u.Z;function d(e){try{var t=e.features.reduce((function(e,t){var r;return"Polygon"===(null==t||null===(r=t.geometry)||void 0===r?void 0:r.type)&&e.geometry.coordinates.push(t.geometry.coordinates),e}),{type:"Feature",properties:{},geometry:{type:"MultiPolygon",coordinates:[]}}),r=s.readFeatures(t);return l.writeFeatures(r)}catch(e){return{}}}function p(e){try{var t,r,n=l.readFeatures(e),o=JSON.parse(s.writeFeatures(n)),c=null==o||null===(t=o.features)||void 0===t?void 0:t[0];return{type:"FeatureCollection",features:((null==c||null===(r=c.geometry)||void 0===r?void 0:r.coordinates)||[]).map((function(e){var t=a()();return{type:"Feature",properties:{id:t},id:t,geometry:{type:"Polygon",coordinates:e}}}))}}catch(e){return{type:"FeatureCollection",features:[]}}}var v=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"user";return o().get("/security/geolimits/".concat(e,"?").concat(r,"_id=").concat(t)).then((function(e){return p(e.data)}))},f=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"user",n=arguments.length>3?arguments[3]:void 0,c=d(n);return o().post("/security/geolimits/".concat(e,"?").concat(r,"_id=").concat(t),c).then((function(e){return e.data}))},y=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"user";return o().delete("/security/geolimits/".concat(e,"?").concat(r,"_id=").concat(t)).then((function(e){return e.data}))}},12530:(e,t,r)=>{"use strict";var n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{zj:()=>c,N5:()=>u,nN:()=>i});var c={DELETE_RESOURCE:"deleteResource",CLONE_RESOURCE:"cloneResource",PERMISSIONS_RESOURCE:"permissionsResource"},u={READY:"ready",FAILED:"failed",RUNNING:"running",FINISHED:"finished"},i=(o(n={},c.DELETE_RESOURCE,5e3),o(n,c.CLONE_RESOURCE,1e3),o(n,c.PERMISSIONS_RESOURCE,1e3),n)}}]);