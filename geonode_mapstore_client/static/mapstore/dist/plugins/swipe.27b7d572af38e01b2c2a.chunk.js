(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6235],{80416:(e,t,n)=>{"use strict";n.d(t,{yS:()=>r,Zz:()=>o,ms:()=>i,ih:()=>c,OX:()=>a,sb:()=>s,K$:()=>u,k7:()=>l,cX:()=>p,x9:()=>f,vs:()=>d,oE:()=>y,Po:()=>m,qv:()=>v,cI:()=>E,g6:()=>g,I4:()=>S,l$:()=>w,Xv:()=>h,k3:()=>b,CQ:()=>O,R8:()=>R,HN:()=>A,sH:()=>P,c7:()=>T,_7:()=>_,eF:()=>L,O6:()=>I,ED:()=>D,RP:()=>M,sF:()=>N,VP:()=>C,He:()=>Y,vO:()=>x,WO:()=>j,bh:()=>k,pV:()=>z,MK:()=>G,ZF:()=>H,tV:()=>W,Dv:()=>Z,Yz:()=>F,kI:()=>U,XG:()=>V,A4:()=>X,Rp:()=>Q,ct:()=>$,oh:()=>K,$h:()=>q,ud:()=>B,Qr:()=>J,LR:()=>ee,nN:()=>te,UG:()=>ne,F5:()=>re,c9:()=>oe,Jh:()=>ie,Xy:()=>ce});var r="CHANGE_LAYER_PROPERTIES",o="DATASETS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",c="TOGGLE_NODE",a="SORT_NODE",s="REMOVE_NODE",u="UPDATE_NODE",l="MOVE_NODE",p="LAYER_LOADING",f="LAYER_LOAD",d="LAYER_ERROR",y="ADD_LAYER",m="ADD_GROUP",v="REMOVE_LAYER",E="SHOW_SETTINGS",g="HIDE_SETTINGS",S="UPDATE_SETTINGS",w="REFRESH_LAYERS",h="DATASETS:UPDATE_LAYERS_DIMENSION",b="LAYERS_REFRESHED",O="LAYERS_REFRESH_ERROR",R="DATASETS:BROWSE_DATA",A="DATASETS:DOWNLOAD",P="DATASETS:CLEAR_LAYERS",T="DATASETS:SELECT_NODE",_="DATASETS:FILTER_LAYERS",L="DATASETS:SHOW_LAYER_METADATA",I="DATASETS:HIDE_LAYER_METADATA",D="DATASETS:UPDATE_SETTINGS_PARAMS";function M(e,t,n){return{type:E,node:e,nodeType:t,options:n}}function N(){return{type:g}}function C(e){return{type:S,options:e}}function Y(e,t){return{type:r,newProperties:t,layer:e}}function x(e,t){return{type:o,layer:e,params:t}}function j(e,t){return{type:i,newProperties:t,group:e}}function k(e,t,n){return{type:c,node:e,nodeType:t,status:!n}}function z(e){return{type:"CONTEXT_NODE",node:e}}function G(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:a,node:e,order:t,sortLayers:n}}function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:s,node:e,nodeType:t,removeEmpty:n}}function W(e,t,n){return{type:u,node:e,nodeType:t,options:n}}function Z(e,t,n){return{type:l,node:e,groupId:t,index:n}}function F(e){return{type:p,layerId:e}}function U(e,t){return{type:f,layerId:e,error:t}}function V(e,t,n){return{type:d,layerId:e,tilesCount:t,tilesErrorCount:n}}function X(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:y,layer:e,foreground:t}}function Q(e,t,n){return{type:m,group:e,parent:t,options:n}}function $(e,t){return{type:r,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function K(e){return{type:b,layers:e}}function q(e,t){return{type:O,layers:e,error:t}}function B(e,t,n,r){return{type:h,dimension:e,value:t,options:n,layers:r}}function J(e){return{type:R,layer:e}}function ee(e){return{type:A,layer:e}}function te(){return{type:P}}function ne(e,t,n){return{type:T,id:e,nodeType:t,ctrlKey:n}}function re(e){return{type:_,text:e}}function oe(e,t){return{type:L,metadataRecord:e,maskLoading:t}}function ie(){return{type:I}}function ce(e,t){return{type:D,newParams:e,update:t}}},22780:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Support:()=>re,default:()=>ce});var r=n(24852),o=n.n(r),i=n(71703),c=n(22222),a=n(75110),s=n(71314),u=n(27418),l=n.n(u),p="SWIPE:SET_ACTIVE",f="SWIPE:SET_MODE",d="SWIPE:SET_SWIPE_TOOL_DIRECTION",y="SWIPE:SET_SPY_TOOL_RADIUS";function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"active";return{type:p,active:e,prop:t}}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=n(49977),w=n.n(S),h=n(80416),b=n(75982);const O={resetLayerSwipeSettingsEpic:function(e,t){return e.ofType(h.c7).switchMap((function(e){var n=e.nodeType,r=t.getState();return(0,s.yn)(r).active&&"group"===n?w().Observable.of(m(!1)):w().Observable.empty()}))},deactivateSwipeToolOnSwitchMaps:function(e,t){return e.ofType(b.nk).switchMap((function(){return(0,s.yn)(t.getState()).active?w().Observable.of(m(!1)):w().Observable.empty()}))}};var R=n(22843),A=n(43129),P=n(85552),T=n.n(P),_=n(13311),L=n.n(_),I=n(5346),D=n(32107);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=[{label:"Horizontal",value:"cut-horizontal"},{label:"Vertical",value:"cut-vertical"}],x=function(e){var t=e.spyModeSettings,n=e.onSetSpyToolRadius;return o().createElement("div",{className:"mapstore-swipe-settings-spy"},o().createElement("h4",null,o().createElement(I.Z,{msgId:"toc.radius"})),o().createElement("div",{className:"mapstore-slider with-tooltip"},o().createElement(T(),{tooltips:!0,step:10,start:[t.radius],range:{min:[20],max:[100]},onChange:function(e){return n(e[0])}})))},j=function(e){var t=e.swipeModeSettings,n=e.onSetSwipeToolDirection;return o().createElement("div",{className:"mapstore-swipe-settings-slider"},o().createElement("h4",null,o().createElement(I.Z,{msgId:"toc.direction"})),o().createElement(A.ZP,{styles:{menuPortal:function(e){return N(N({},e),{},{zIndex:3100})}},onChange:function(e){var t=e.value;return n(t)},clearable:!1,value:L()(Y,["value",t.direction]),options:Y}))},k=(0,c.P1)([s.yn,s.wQ,s.IY],(function(e,t,n){return{configuring:(null==e?void 0:e.configuring)||!1,toolMode:(null==e?void 0:e.mode)||"swipe",swipeModeSettings:t,spyModeSettings:n}}));const z=(0,i.connect)(k,{onSetConfigurationActive:m,onSetSwipeToolDirection:function(e){return{type:d,direction:e}},onSetSpyToolRadius:function(e){return{type:y,radius:e}}})((function(e){var t=e.configuring,n=e.toolMode,r=e.swipeModeSettings,i=e.spyModeSettings,c=e.onSetConfigurationActive,a=void 0===c?function(){}:c,s=e.onSetSpyToolRadius,u=void 0===s?function(){}:s,l=e.onSetSwipeToolDirection,p=void 0===l?function(){}:l;return o().createElement("div",{className:"mapstore-swipe-settings"},o().createElement(D.Z,{title:"spy"===n?o().createElement(I.Z,{msgId:"toc.spyconfiguration"}):o().createElement(I.Z,{msgId:"toc.swipeconfiguration"}),open:t,onClose:function(){return a(!1,"configuring")},enableFooter:!1,draggable:!0,size:"xs",bodyClassName:"mapstore-swipe-setiings-modal-body",dialogClassName:" mapstore-swipe-settings-modal",glyph:"transfer"},"spy"===n?o().createElement(x,{spyModeSettings:i,onSetSpyToolRadius:u}):o().createElement(j,{swipeModeSettings:r,onSetSwipeToolDirection:p})))}));var G=n(30294),H=n(85294),W=n.n(H);const Z=function(e){var t=e.map,n=e.layer,o=e.type,i=e.getWidth,c=e.getHeight,a=e.circleCutProp,s=(0,r.useCallback)((function(e){var n=e.context,r=i()*t.pixelRatio_;n.save(),n.beginPath(),n.rect(r,0,n.canvas.width-r,n.canvas.height),n.strokeStyle="rgba(0,0,0,0.5)",n.clip()}),[n,o]),u=(0,r.useCallback)((function(e){e.context.restore()}),[n,o]),l=(0,r.useCallback)((function(e){var n=e.context,r=c()*t.pixelRatio_;n.save(),n.beginPath(),n.rect(0,r,n.canvas.width,n.canvas.height-r),n.clip()}),[n,o]),p=(0,r.useCallback)((function(e){var t=e.context,n=e.frameState.pixelRatio;t.save(),t.beginPath();var r=a.getMousePosition();r&&(t.arc(r[0]*n,r[1]*n,a.radius*n,0,2*Math.PI),t.lineWidth=5*n,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()),t.clip()}),[n,o,a]);return(0,r.useEffect)((function(){var e=t.getLayers().getArray().filter((function(e){return e.get("msId")===n}))[0];if(e){switch(o){case"cut-vertical":!function(e,t,n){e.on("precompose",t),e.on("postcompose",n)}(e,s,u);break;case"cut-horizontal":!function(e,t,n){e.on("precompose",t),e.on("postcompose",n)}(e,l,u);break;case"circle":!function(e,t,n){e.on("precompose",t),e.on("postcompose",n)}(e,p,u)}return t.render(),function(){e.un("precompose",s),e.un("precompose",l),e.un("precompose",p),e.un("postcompose",u),t.render()}}return function(){return t.render()}}),[n,o,a]),null};function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=function(e){var t=e.type,n=e.map,i=e.widthRef,c=F((0,r.useState)(),2),a=c[0],s=c[1],u=F((0,r.useState)(!0),2),l=u[0],p=u[1],f=function(){s({x:0,y:0}),i.current=n.getProperties().size[0]/2};return(0,r.useEffect)((function(){return window.addEventListener("resize",f),function(){window.removeEventListener("resize",f)}}),[t]),(0,r.useEffect)((function(){i.current=n.getProperties().size[0]/2}),[t]),o().createElement(W(),{position:a,bounds:"parent",onStart:function(){return p(!1)},onDrag:function(e,t){return function(e,t){i.current+=t.deltaX,s({x:t.x,y:t.y}),n.render()}(0,t)},onStop:function(){return p(!0)}},o().createElement("div",{className:"mapstore-swipe-slider",style:{height:"100%",top:"0px",left:"".concat(n.getProperties().size[0]/2,"px"),width:"8px",cursor:"col-resize"}},l&&o().createElement("div",{className:"ms-vertical-swipe-slider-arrows",style:{top:"".concat(n.getProperties().size[1]/2-26,"px")}},o().createElement("div",{className:"ms-slider-arrows"},o().createElement(G.Glyphicon,{glyph:"chevron-left"})),o().createElement("div",{className:"ms-slider-arrows"},o().createElement(G.Glyphicon,{glyph:"chevron-right"})))))},X=function(e){var t=e.type,n=e.map,i=e.heightRef,c=F((0,r.useState)(),2),a=c[0],s=c[1],u=F((0,r.useState)(!0),2),l=u[0],p=u[1],f=function(){s({x:0,y:0}),i.current=n.getProperties().size[1]/2};return(0,r.useEffect)((function(){return window.addEventListener("resize",f),function(){window.removeEventListener("resize",f)}}),[t]),(0,r.useEffect)((function(){i.current=n.getProperties().size[1]/2}),[t]),o().createElement(W(),{position:a,bounds:"parent",onStart:function(){return p(!1)},onDrag:function(e,t){return function(e,t){i.current+=t.deltaY,s({x:t.x,y:t.y}),n.render()}(0,t)},onStop:function(){return p(!0)}},o().createElement("div",{className:"mapstore-swipe-slider",style:{height:"8px",top:"".concat(n.getProperties().size[1]/2,"px"),left:"0px",width:"100%",cursor:"row-resize"}},l&&o().createElement("div",{className:"ms-horizontal-swipe-slider-arrows",style:{left:"".concat(n.getProperties().size[0]/2-26,"px")}},o().createElement("div",{className:"ms-slider-arrows"},o().createElement(G.Glyphicon,{glyph:"chevron-up"})),o().createElement("div",{className:"ms-slider-arrows"},o().createElement(G.Glyphicon,{glyph:"chevron-down"})))))};const Q=function(e){var t=e.map,n=e.layer,i=e.type,c=void 0===i?"cut-vertical":i,a=e.active,s=(0,r.useRef)(),u=(0,r.useRef)();return n&&a?o().createElement(o().Fragment,null,"cut-vertical"===c&&o().createElement(V,{widthRef:u,map:t,type:c}),"cut-horizontal"===c&&o().createElement(X,{heightRef:s,map:t,type:c}),o().createElement(Z,{map:t,layer:n,type:c,getWidth:function(){return u.current},getHeight:function(){return s.current}})):null},$=function(e){var t=e.layer,n=e.map,i=e.active,c=e.radius,a=(0,r.useRef)(),s=(0,r.useCallback)((function(e){a.current=n.getEventPixel(e),n.render()}),[t,c]),u=(0,r.useCallback)((function(){a.current=null,n.render()}),[t,c]);(0,r.useEffect)((function(){var e=n.getTargetElement();return e.addEventListener("mousemove",s),e.addEventListener("mouseout",u),function(){e.removeEventListener("mousemove",s),e.removeEventListener("mouseout",u)}}),[]);var l={radius:c,getMousePosition:function(){return a.current}};return t&&i?o().createElement(Z,{map:n,layer:t,type:"circle",circleCutProp:l}):null};var K=n(45697),q=n.n(K);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var J=(0,n(15135).Z)(G.SplitButton),ee={title:o().createElement(G.Glyphicon,{glyph:"transfer"}),tooltipId:"toc.compareTool",tooltipPosition:"top",className:"square-button-md no-border",pullRight:!0},te=function(e){var t=e.swipeSettings,n=e.onSetActive,r=e.onSetSwipeMode,i=e.status;return o().createElement(J,B({onClick:function(){t.active||"LAYER"!==i?n(!1):n(!0)},bsStyle:null!=t&&t.active?"success":"primary"},ee),o().createElement(G.MenuItem,{active:"swipe"===(null==t?void 0:t.mode),onClick:function(){r("swipe"),n(!0)}},o().createElement(G.Glyphicon,{glyph:"vert-dashed"}),o().createElement(I.Z,{msgId:"toc.swipe"})),o().createElement(G.MenuItem,{active:"spy"===(null==t?void 0:t.mode),onClick:function(){r("spy"),n(!0)}},o().createElement(G.Glyphicon,{glyph:"search"}),o().createElement(I.Z,{msgId:"toc.spyGlass"})),o().createElement(G.MenuItem,{onClick:function(){t.configuring||"LAYER"!==i?n(!1,"configuring"):n(!0,"configuring")}},o().createElement(G.Glyphicon,{glyph:"cog"}),o().createElement(I.Z,{msgId:"toc.configureTool"})))};te.propTypes={swipeSettings:q().object,status:q().string,onSetActive:q().func,onSetSwipeMode:q().func},te.defaultProps={status:"LAYER",onSetSwipeMode:function(){},onSetActive:function(){}};const ne=te;var re=function(e){var t=e.mode,n=e.map,r=e.layer,i=e.active,c=e.swipeModeSettings,a=e.spyModeSettings;return"spy"===t?o().createElement($,{map:n,layer:r,active:i,radius:a.radius}):o().createElement(Q,{map:n,layer:r,active:i,type:c.direction})},oe=(0,c.P1)([a.Iz,s.yn,s.wQ,s.IY],(function(e,t,n,r){return{layer:null==e?void 0:e.id,active:t.active||!1,swipeModeSettings:n,spyModeSettings:r,mode:(null==t?void 0:t.mode)||"swipe"}})),ie=(0,i.connect)(oe,null)(re);const ce=(0,R.rx)("Swipe",{options:{disablePluginIf:"{state('mapType') === 'leaflet' || state('mapType') === 'cesium'}"},component:z,containers:{TOC:{name:"Swipe",target:"toolbar",selector:function(e){return"LAYER"===e.status},Component:(0,i.connect)((0,c.P1)(s.yn,(function(e){return{swipeSettings:e}})),{onSetActive:m,onSetSwipeMode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"swipe";return{type:f,mode:e}}})(ne)},Map:{name:"Swipe",Tool:ie}},reducers:{swipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return l()({},e,g({},t.prop,t.active));case f:return l()({},e,{mode:t.mode});case d:var n=E(E({},e.swipe),{},{direction:t.direction});return l()({},e,{swipe:n});case y:var r=E(E({},e.spy),{},{radius:t.radius});return l()({},e,{spy:r});default:return e}}},epics:O})},71314:(e,t,n)=>{"use strict";n.d(t,{yn:()=>r,IY:()=>o,wQ:()=>i});var r=function(e){return e.swipe&&e.swipe||{active:!1}},o=function(e){var t;return(null==e||null===(t=e.swipe)||void 0===t?void 0:t.spy)||{radius:80}},i=function(e){var t;return(null==e||null===(t=e.swipe)||void 0===t?void 0:t.swipe)||{direction:"cut-vertical"}}},19081:(e,t,n)=>{"use strict";e.exports=n(1174)}}]);