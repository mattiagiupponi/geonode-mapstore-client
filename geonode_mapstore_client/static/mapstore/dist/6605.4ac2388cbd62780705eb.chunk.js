(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6605],{25108:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var n=t(82904),o=t(27418),u=t.n(o);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case n.kM:var t=r.property||"enabled";return u()({},e,i({},r.control,u()({},e[r.control],i({},t,!(e[r.control]||{})[t]))));case n.At:return!0===r.toggle&&e[r.control]&&e[r.control][r.property]===r.value?u()({},e,i({},r.control,u()({},e[r.control],i({},r.property,void 0)))):u()({},e,i({},r.control,u()({},e[r.control],i({},r.property,r.value))));case n.dc:return u()({},e,i({},r.control,u()({},e[r.control],r.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(r.skip||[]).indexOf(e)})),a=o.reduce((function(r,t){return u()(r,i({},t,u()({},e[t],!0===e[t].enabled?{enabled:!1}:{})))}),{});return u()({},e,a);default:return e}}},31935:(e,r,t)=>{"use strict";t.d(r,{YL:()=>a,B0:()=>c,Mz:()=>l,TC:()=>s,qS:()=>d,Pe:()=>f,TP:()=>v});var n=t(22222),o=t(75110),u=t(93152),i=t(24262),a=function(e){return e.backgroundSelector&&e.backgroundSelector.source},c=function(e){return e.backgroundSelector&&e.backgroundSelector.modalParams},l=function(e){return e.backgroundSelector&&e.backgroundSelector.backgrounds||[]},s=function(e){return e.backgroundSelector&&e.backgroundSelector.lastRemovedId},d=function(e){return e.backgroundSelector&&e.backgroundSelector.confirmDeleteBackgroundModal},f=function(e){return e.backgroundSelector&&e.backgroundSelector.allowDeletion},v=(0,n.P1)(o.l2,u.$v,u.lh,(function(e,r,t){var n=e.filter((function(e){return e&&"background"===e.group}));return t&&t[r]?n.map((function(e){return(0,i.kf)(e,r)}))||[]:n}))},58422:(e,r,t)=>{"use strict";t.d(r,{UC:()=>b}),t(52259),t(827);var n=t(22222),o=t(88113),u=t(1757),i=t(7877),a=t(85148),c=t(97291);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t(75110),t(31935);var f={},v=(0,n.zB)({catalogServices:(0,n.zB)({services:o.b6,selectedService:o.Cb}),widgetsConfig:(0,n.zB)({widgets:u.zm,layouts:u.p,collapsed:u.lF}),mapInfoConfiguration:i.bI,dimensionData:(0,n.zB)({currentTime:a.WT,offsetTime:a.ns}),timelineData:(0,n.zB)({selectedLayer:c.Li})}),b=function(e){var r=Object.keys(f).reduce((function(r,t){return s(s({},r),{},d({},t,f[t](e)))}),{});return s(s({},v(e)),r)}},24684:(e,r,t)=>{"use strict";t.d(r,{F:()=>u,y:()=>i});var n=t(27361),o=t.n(n),u=function(e){return o()(e,"router.location.pathname")||"/"},i=function(e){return o()(e,"router.location.search")||""}},87218:(e,r,t)=>{"use strict";t.d(r,{I:()=>n,_:()=>o});var n=function(e){return e.searchconfig&&e.searchconfig.textSearchConfig},o=function(e){return e.searchbookmarkconfig&&e.searchbookmarkconfig.bookmarkSearchConfig}},74621:(e,r,t)=>{"use strict";t.d(r,{np:()=>n,L3:()=>o,jl:()=>u,y8:()=>i,qg:()=>a}),t(27418),t(27361);var n=function(e){return e&&e.security&&e.security.user},o=function(e){return n(e)&&n(e).role},u=function(e){return e&&e.security&&e.security.user},i=function(e){return e.security&&e.security.token},a=function(e){return"ADMIN"===o(e)}},73443:(e,r,t)=>{"use strict";t.d(r,{rs:()=>n,AY:()=>o,SW:()=>u,yB:()=>i,oG:()=>a,XG:()=>c,oz:()=>l,id:()=>s,gc:()=>d,cE:()=>f,rG:()=>v,Vj:()=>b,Pg:()=>p,nY:()=>g});var n="GEONODE:SAVING_RESOURCE",o="GEONODE:SAVE_SUCCESS",u="GEONODE:SAVE_ERROR",i="GEONODE:CLEAR_SAVE",a="GEONODE:SAVE_CONTENT",c="GEONODE:UPDATE_RESOURCE_BEFORE_SAVE",l="GEONODE:SAVE_DIRECT_CONTENT";function s(){return{type:n}}function d(e){return{type:o,success:e}}function f(e){return{type:u,error:e}}function v(){return{type:i}}function b(e,r,t,n){return{type:a,id:e,metadata:r,reload:t,showNotifications:n}}function p(e){return{type:c,id:e}}function g(){return{type:l}}},18576:(e,r,t)=>{"use strict";t.d(r,{ZP:()=>P});var n=t(49977),o=t(827),u=t(75110),i=t(31935),a=t(58422),c=t(87218),l=t(52259),s=t(63202),d=t(66113),f=t(74621),v=t(97395),b=t(73443),p=t(43892),g=t(99380),m=t(55035),y=t(55877),O=t.n(y),h=t(2811);function S(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return E(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){j(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var D={map:function(e,r,t,n){var d=(0,o.Od)(e)||{},f=(0,u.l2)(e),v=(0,u.Bt)(e),b=(0,i.Mz)(e),p=(0,c.I)(e),y=(0,c._)(e),O=(0,a.UC)(e),h=(0,l.saveMapConfiguration)(d,f,v,b,p,y,O),S={title:t.name,abstract:t.description,thumbnail_url:t.thumbnail,data:h};return r?(0,g.sA)(r,k(k({},S),{},{id:r})):(0,g.df)(S).then((function(e){if(n){var r=((0,s.u8)("geoNodeSettings")||{}).geonodeUrl,t=void 0===r?"/":r;window.location.href=(0,m.zL)("".concat(t,"catalogue/#/map/").concat(e.pk)),window.location.reload()}return e.data}))},geostory:function(e,r,t,n){var o=(0,d.Kg)(e),u=(0,f.np)(e),i={title:t.name,abstract:t.description,thumbnail_url:t.thumbnail,data:o};return r?(0,g.Tw)(r,i):(0,g.NJ)(k({name:t.name+" "+O()(),owner:u.name},i)).then((function(e){if(n){var r=((0,s.u8)("geoNodeSettings")||{}).geonodeUrl,t=void 0===r?"/":r;window.location.href=(0,m.zL)("".concat(t,"catalogue/#/geostory/").concat(e.pk)),window.location.reload()}return e.data}))},document:function(e,r,t){var n={title:t.name,abstract:t.description,thumbnail_url:t.thumbnail};return!!r&&(0,g.gU)(r,n)},dataset:function(e,r,t){var n={title:t.name,abstract:t.description,thumbnail_url:t.thumbnail};return!!r&&(0,g.do)(r,n)}};const P={gnSaveContent:function(e,r){return e.ofType(b.oG).switchMap((function(e){var t,o=r.getState(),u=(null===(t=o.gnresource)||void 0===t?void 0:t.type)||"map";return n.Observable.defer((function(){return D[u](o,e.id,e.metadata,e.reload)})).switchMap((function(r){return n.Observable.of.apply(n.Observable,[(0,b.gc)(r),(0,p.QN)({title:e.metadata.name,abstract:e.metadata.description,thumbnail_url:e.metadata.thumbnail,extension:null==r?void 0:r.extension,href:null==r?void 0:r.href})].concat(S(e.showNotifications?[(0,v.Vp)({title:"saveDialog.saveSuccessTitle",message:"saveDialog.saveSuccessMessage"})]:[])))})).catch((function(r){return n.Observable.of.apply(n.Observable,[(0,b.cE)(r.data||r.message)].concat(S(e.showNotifications?[(0,v.vU)({title:"map.mapError.errorTitle",message:"map.mapError.errorDefault"})]:[])))})).startWith((0,b.id)())}))},gnUpdateResource:function(e,r){return e.ofType(b.XG).switchMap((function(e){var t,o=(null===(t=r.getState().gnresource)||void 0===t?void 0:t.data)||{};return!e.id||o.pk&&e.id&&o.pk+""==e.id+""?n.Observable.empty():n.Observable.defer((function(){return(0,g.iv)(e.id)})).switchMap((function(e){return n.Observable.of((0,p.DF)(e))})).catch((function(e){return n.Observable.of((0,p.mN)(e.data||e.message))})).startWith((0,p.Q$)())}))},gnSaveDirectContent:function(e,r){return e.ofType(b.oz).switchMap((function(){var e,t=r.getState(),u=(0,o._H)(t),i=(null==u?void 0:u.id)||(null==t||null===(e=t.gnresource)||void 0===e?void 0:e.id);return n.Observable.defer((function(){return(0,g.iv)(i)})).switchMap((function(e){var r=(0,h.Yj)(t),o=(0,h.uu)(t),u=(0,h.UU)(t),a={name:r||(null==e?void 0:e.title),description:o||(null==e?void 0:e.abstract),thumbnail:u||(null==e?void 0:e.thumbnail_url),extension:null==e?void 0:e.extension,href:null==e?void 0:e.href};return n.Observable.of((0,p.DF)(e),(0,b.Vj)(i,a,!1,!0))})).catch((function(e){return n.Observable.of((0,b.cE)(e.data||e.message),(0,v.vU)({title:"map.mapError.errorTitle",message:e.data||e.message||"map.mapError.errorDefault"}))})).startWith((0,b.id)())}))}}},62170:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var n=t(73443);const o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;switch(r.type){case n.rs:case n.oz:return{saving:!0,error:void 0,success:void 0};case n.AY:return{success:r.success,saving:!1};case n.SW:return{error:r.error,saving:!1};case n.yB:return{};default:return e}}},2811:(e,r,t)=>{"use strict";t.d(r,{fg:()=>n,HG:()=>o,Yj:()=>u,uu:()=>i,UU:()=>a,il:()=>c,ez:()=>l,V$:()=>s});var n=function(e){var r,t,n,o=null==e||null===(r=e.gnresource)||void 0===r?void 0:r.id,u=null==e||null===(t=e.gnresource)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.pk;return o||u},o=function(e){var r,t;return(null==e||null===(r=e.gnresource)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.perms)||[]},u=function(e){var r,t;return(null==e||null===(r=e.gnresource)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.name)||!1},i=function(e){var r,t;return(null==e||null===(r=e.gnresource)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.abstract)||!1},a=function(e){var r,t;return(null==e||null===(r=e.gnresource)||void 0===r||null===(t=r.data)||void 0===t?void 0:t.thumbnail_url)||!1},c=function(e){var r,t,n,o,u=null==e||null===(r=e.gnresource)||void 0===r||null===(t=r.permissions)||void 0===t?void 0:t.canEdit,i=(null==e||null===(n=e.gnresource)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.perms)||[];return u||i.includes("change_resourcebase")},l=function(){return function(e){var r,t,n;return null==e||null===(r=e.security)||void 0===r||null===(t=r.user)||void 0===t||null===(n=t.perms)||void 0===n?void 0:n.includes("add_resource")}},s=function(e){var r;return!(null==e||null===(r=e.gnresource)||void 0===r||!r.isNew)}}}]);