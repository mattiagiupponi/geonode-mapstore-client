(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7832],{11766:(e,t,r)=>{"use strict";r.d(t,{H:()=>j,Z:()=>P});var n=r(24852),o=r.n(n),c=r(12961),i=r(13218),a=r.n(i),l=r(17621),s=r.n(l),u=r(30294),p=r(38560),f=r(25288),d=r(45869),m=r(5346),g=r(15402),b=r(15135),y=["boxShadow","MozBoxShadow","WebkitBoxShadow"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=(0,b.Z)(p.Z);function w(e){var t=e.themeStyle,r=e.disableBackgroundPicker,i=void 0!==r&&r,a=e.disableBackgroundAlpha,l=e.disableTextColor,p=e.disableShadow,b=e.onChange,v=void 0===b?function(){}:b,O=e.onOpen,w=void 0===O?function(){}:O,j=e.placement,P=(0,n.useRef)(),E=null==t?void 0:t.backgroundColor,C=null==t?void 0:t.color,k=!l&&E&&C&&!s().isReadable(C,E)?s().mostReadable(E,[C,"#000000","#ffffff"],{includeFallbackColors:!0}).toHexString():null;return o().createElement(o().Fragment,null,!i&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.backgroundColorLabel"})),o().createElement("div",null,o().createElement(c.Z,{placement:j,key:E,onOpen:w,color:E,format:a?"hex":"rgb",disableAlpha:a,presetColors:[],onChangeColor:function(e){var r=s()(e).isLight()?s()(e).darken(10).toHexString():s()(e).lighten(15).toHexString(),n=!l&&!(null!=t&&t.color)&&{color:s().mostReadable(e,["#000000","#ffffff"],{includeFallbackColors:!0}).toHexString()};v(h(h({},t),{},{backgroundColor:e,borderColor:r},!l&&n))}}))),!l&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.textColorLabel"})),o().createElement(f.Z,{className:"ms-custom-theme-picker-popover",ref:function(e){e&&(P.current=e.trigger)},placement:"top",content:o().createElement(o().Fragment,null,o().createElement(g.Z,{msgId:"geostory.customizeTheme.alternativeTextColorPopover",msgParams:{color:k}}),o().createElement(S,{bsSize:"xs",bsStyle:"primary",style:{margin:"auto",display:"block"},onClick:function(){var e,r;v(h(h({},t),{},{color:k})),null===(e=P.current)||void 0===e||null===(r=e.hide)||void 0===r||r.call(e)}},o().createElement(m.Z,{msgId:"geostory.customizeTheme.useAlternativeTextColor"})))},k&&o().createElement(S,{className:"square-button-md no-border",style:{display:k?"block":"none"}},o().createElement(u.Glyphicon,{glyph:"exclamation-mark"}))||o().createElement("div",null))),o().createElement("div",null,o().createElement(c.Z,{placement:j,key:C,color:C,onOpen:w,format:"hex",disableAlpha:!0,presetColors:[],onChangeColor:function(e){v(h(h({},t),{},{color:e}))}}))),!p&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.shadowLabel"})),o().createElement("div",null,o().createElement(d.Z,{checked:null==t?void 0:t.boxShadow,onChange:function(){var e=t||{},r=e.boxShadow,n=(e.MozBoxShadow,e.WebkitBoxShadow,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,y));v(r?h({},n):h(h({},n),{},{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}))}}))))}function j(e){var t=e.selected,r=e.value,n=e.storyTheme,c=e.onUpdate,i=e.onActive,l=e.disableBackgroundAlpha,s=e.disableTextColor,p=e.disableShadow,f=function(e,n){var o=a()(t)&&t;return c("theme",h(h({},o),{},n?O({value:e},r,h({},n)):{value:e}))},d=n||{},g=d.color,b=d.backgroundColor,y=b&&{backgroundColor:b},v=h(h({},!s&&g&&{color:g}),y),j=(null==t?void 0:t.value)===r,P=(null==t?void 0:t[r])||v;return o().createElement(o().Fragment,null,j?o().createElement("div",{className:"ms-custom-theme-picker-menuitem-header"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"})),o().createElement(S,{tooltipId:"geostory.contentToolbar.customizeThemeRemoveLabel",className:"square-button-md no-border",onClick:function(e){e.stopPropagation(),f("")}},o().createElement(u.Glyphicon,{glyph:"trash"}))):o().createElement(o().Fragment,null,o().createElement(u.MenuItem,{active:j,onClick:function(){return f(r,P)}},o().createElement(m.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"}))),j&&o().createElement("div",{className:"ms-custom-theme-picker-menuitem"},o().createElement(w,{disableBackgroundAlpha:l,disableTextColor:s,disableShadow:p,themeStyle:P,onChange:function(e){return f(r,e)},onOpen:i})))}const P=w},25288:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(24852),o=r.n(n),c=r(45697),i=r.n(c),a=r(30294),l=r(37275);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(s,e);var t,r,n,c,i=(n=s,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(n);if(c){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return d(this,e)});function s(){var e;u(this,s);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(m(e=i.call.apply(i,[this].concat(r))),"getContainerNode",(function(){return e.parentNode||document.querySelector("."+(l.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body})),e}return t=s,(r=[{key:"render",value:function(){var e=this;return o().createElement("div",{ref:function(t){e.parentNode=t&&t.parentNode},className:this.props.className,style:this.props.style},o().createElement(a.OverlayTrigger,{ref:function(t){e.trigger=t},trigger:["click"],container:this.getContainerNode(),placement:this.props.placement,rootClose:!0,overlay:o().createElement(a.Popover,{id:this.props.id,title:this.props.title,className:this.props.popoverClassName},this.props.content)},this.props.children))}}])&&p(t.prototype,r),s}(o().Component);b(y,"propTypes",{id:i().string,style:i().object,className:i().string,popoverClassName:i().string,placement:i().string,title:i().node,content:i().node}),b(y,"defaultProps",{id:""});const v=y},25311:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(24852),o=r.n(n),c=r(90937),i=r(67076),a=["connectDragSource","connectDragPreview","connectDropTarget","isDragging","isOver"];function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={beginDrag:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}};const f=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isDraggable;return t}),(0,i.compose)((0,c.Ej)("row",p,(function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging(),draggingItem:t.getItem()||null}})),(0,c.GR)("row",{drop:function(e,t){var r=t.getItem();r.sortId!==e.sortId&&e.onSort(e.sortId,r.sortId,{id:e.id,containerId:e.containerId},{id:r.id,containerId:r.containerId})}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})),(function(e){return function(t){var r=t.connectDragSource,n=t.connectDragPreview,c=t.connectDropTarget,i=t.isDragging,s=t.isOver,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,a),p=u.draggingItem&&u.draggingItem.sortId<u.sortId,f=u.draggingItem&&u.draggingItem.containerId===u.containerId,d=f&&i?" ms-dragging":"",m=f&&s?" ms-over":"",g=f&&p?" ms-above":" ms-below";return n(c(o().createElement("div",{className:"ms-dragg".concat(d).concat(m," ").concat(g)},o().createElement("div",null,o().createElement(e,l({},u,{connectDragSource:r,isDragging:i,isOver:s,onDrop:function(e){return e.stopPropagation()}}))))))}})))},45567:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(24852),o=r.n(n),c=r(67076),i=["onSort","isDraggable","items","containerId"];function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p=(0,c.compose)((0,c.branch)((function(e){var t=e.isDraggable;return void 0===t||t}),(function(e){return function(t){var r=t.onSort,n=t.isDraggable,c=t.items,l=void 0===c?[]:c,u=t.containerId,p=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,i),f=l.map((function(e,t){return s(s({},e),{},{onSort:r,isDraggable:n,sortId:t,key:e.id||t,containerId:u})}));return o().createElement(e,a({},s(s({},p),{},{isDraggable:n}),{items:f}))}})))},57037:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(24852),o=r.n(n),c=r(45697),i=r.n(c),a=r(23560),l=r.n(a),s=r(24198),u=r(17621),p=r.n(u),f=r(80307),d=r(37275);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e){var t=e.value,r=e.format,c=e.onChangeColor,i=e.text,a=e.line,u=e.disabled,d=e.pickerProps,g=e.containerNode,y=e.onOpen,h=e.placement,O=10,S={picker:{opacity:0},arrow:{opacity:0},overlay:{}},w=v((0,n.useState)(),2),j=w[0],P=w[1],E=v((0,n.useState)(S),2),C=E[0],k=E[1],I=v((0,n.useState)(),2),x=I[0],D=I[1],T=p()(t).toString(),N=l()(g)?g():g;(0,n.useEffect)((function(){var e=j&&p()(j).toString();e&&T&&T!==e&&P(t)}),[T]),(0,n.useEffect)((function(){y(x),x||k(S)}),[x]);var Z=(0,n.useRef)(),A=(0,n.useRef)();function R(){var e,t,r,n,o,c,i;if("center"===h)return{picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}};var a=null==Z||null===(e=Z.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e),l=null==A||null===(r=A.current)||void 0===r||null===(n=r.getBoundingClientRect)||void 0===n?void 0:n.call(r),s=null==A||null===(o=A.current)||void 0===o||null===(c=o.querySelector)||void 0===c?void 0:c.call(o,".ms-sketch-picker"),u=null==s||null===(i=s.getBoundingClientRect)||void 0===i?void 0:i.call(s);if(a&&l&&u){var p,f,d,m,g=u.width,b=u.height,y=l.top,v=l.left,S=l.width,w=l.height,j=a.top,P=a.left,E=a.width,C=a.height,k=[P+E/2,j+C/2],I=k[0]-v>g/2+O&&v+S-k[0]>g/2+O,x=k[1]-y>b/2+O&&y+w-k[1]>b/2+O,D={top:{filter:function(){return I&&j-y>b+O},styles:function(){return{picker:{position:"absolute",top:j-b-O-y,left:P+E/2-g/2-v},overlay:{},arrow:{top:j+2,left:P+E/2,transform:"translate(-50%, -50%) rotateZ(270deg) translateX(50%)"}}}},right:{filter:function(){return x&&v+S-(P+E)>g+O},styles:function(){return{picker:{position:"absolute",top:j-b/2-y,left:P+E+O-v},overlay:{},arrow:{top:j+C/2,left:P+E-2,transform:"translate(-50%, -50%) rotateZ(0deg) translateX(50%)"}}}},bottom:{filter:function(){return I&&y+w-(j+C)>b+O},styles:function(){return{picker:{position:"absolute",top:j+C+O-y,left:P+E/2-g/2-v},overlay:{},arrow:{top:j+C-2,left:P+E/2,transform:"translate(-50%, -50%) rotateZ(90deg) translateX(50%)"}}}},left:{filter:function(){return x&&P-v>g+O},styles:function(){return{picker:{position:"absolute",top:j-b/2-y,left:P-g-O-v},overlay:{},arrow:{top:j+C/2,left:P+2,transform:"translate(-50%, -50%) rotateZ(180deg) translateX(50%)"}}}}};if(null!=D&&null!==(p=D[h])&&void 0!==p&&null!==(f=p.filter)&&void 0!==f&&f.call(p))return null==D||null===(d=D[h])||void 0===d||null===(m=d.styles)||void 0===m?void 0:m.call(d);if("top"!==h&&D.top.filter())return D.top.styles();if("right"!==h&&D.right.filter())return D.right.styles();if("bottom"!==h&&D.bottom.filter())return D.bottom.styles();if("left"!==h&&D.left.filter())return D.left.styles()}return{picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}}}(0,n.useEffect)((function(){var e=function(){return k(R())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((function(){x&&k(R())}),[x]);var z,L,B=u?" ms-disabled":"",_=o().createElement("div",{ref:A,className:"ms-color-picker-overlay",style:b({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",top:0,left:0},null==C?void 0:C.overlay)},o().createElement("div",{className:"ms-color-picker-cover",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0},onClick:function(){D(!1),j&&c(r?p()(j).toString(r):j)}}),o().createElement(s.xS,m({},d,{className:"ms-sketch-picker",styles:{picker:b({width:200,padding:"10px 10px 0",boxSizing:"initial"},null==C?void 0:C.picker)},color:p()(j||t).toRgb(),onChange:function(e){return P(e.rgb)}})),o().createElement("div",{className:"ms-sketch-picker-arrow",style:b({position:"absolute",borderWidth:12},null==C?void 0:C.arrow)})),F=N?(0,f.createPortal)(_,N):_;return o().createElement("div",{className:"ms-color-picker".concat(B)},o().createElement("div",{className:"ms-color-picker-swatch",ref:Z,style:(z=j||t||"transparent",L=p()(z).toRgbString(),a?{boxSizing:"border-box",border:"4px solid ".concat(L),backgroundColor:"transparent"}:{color:"transparent"===z?"#000000":p().mostReadable(L,["#000000"],{includeFallbackColors:!0}).toHexString(),backgroundColor:L}),onClick:function(){u||(D(!x),j&&c(r?p()(j).toString(r):j))}},i),x?F:null)}O.propTypes={value:i().oneOfType([i().string,i().shape({r:i().number,g:i().number,b:i().number,a:i().number})]),format:i().string,onChangeColor:i().func,text:i().string,line:i().bool,disabled:i().bool,pickerProps:i().object,containerNode:i().oneOfType([i().node,i().func]),onOpen:i().function,placement:i().string},O.defaultProps={disabled:!1,line:!1,onChangeColor:function(){},pickerProps:{},onOpen:function(){},containerNode:function(){return document.querySelector("."+((0,d.u8)("themePrefix")||"ms2")+" > div")||document.body}};const S=O},12961:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(24852),o=r.n(n),c=r(45697),i=r.n(c),a=r(30294),l=r(57037);function s(e){var t=e.color,r=e.format,n=e.line,c=e.onChangeColor,i=e.disableAlpha,s=e.containerNode,u=e.onOpen,p=e.presetColors,f=e.placement;return o().createElement("div",{className:"ms-color-selector"},o().createElement(l.Z,{text:o().createElement(a.Glyphicon,{glyph:"dropper"}),format:r,line:n,value:t,onChangeColor:c,pickerProps:{disableAlpha:i,presetColors:p},containerNode:s,onOpen:u,placement:f}))}s.propTypes={color:i().oneOfType([i().string,i().shape({r:i().number,g:i().number,b:i().number,a:i().number})]),format:i().string,line:i().bool,onChangeColor:i().func,disableAlpha:i().bool,containerNode:i().node,onOpen:i().func,presetColors:i().array,placement:i().string},s.defaultProps={line:!1,onChangeColor:function(){},onOpen:function(){}};const u=s},66190:(e,t,r)=>{"use strict";r.d(t,{Z:()=>N});var n=r(27361),o=r.n(n),c=r(47037),i=r.n(c),a=r(81763),l=r.n(a),s=r(30998),u=r.n(s),p=r(13311),f=r.n(p),d=r(68630),m=r.n(d),g=r(1469),b=r.n(g),y=r(84596),v=r.n(y),h=r(19155),O=r.n(h),S=r(61868),w=r(92579),j=r(34990);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x=function(e,t){var r=e.length,n=0;return t||0===t||(n=r),i()(t)?n=u()(e,{id:t})+1:l()(t)&&(n=Math.min(t,e.length)),n},D=function e(t,r,n){var o=n.contents,c=n.background,i=n.id,a=n.resourceId,l=[],s=r+'{"id": "'.concat(i,'"}]');return a===t?[s]:(c&&c.resourceId===t&&l.push(s+".background"),o?o.reduce((function(r,n){return[].concat(k(r),k(e(t,s+".contents[",n)))}),l):l)},T={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.D7:var r=t.id,n=t.path,c=t.position,a=t.element,l=(0,w.Ll)("currentStory.".concat(n),e),s=o()(e,l,[]),u=x(s,c),p=s.slice();return p.splice(u,0,E({id:r},a)),(0,S.t8)(l,p,e);case j.mN:var d=t.id,g=t.mediaType,y=t.data;return(0,S.t8)("currentStory.resources",O()([{id:d,type:g,data:y}].concat(k(e.currentStory&&e.currentStory.resources||[])),"id"),e);case j.vb:return(0,S.t8)("mode",t.mode,e);case j.QK:var h=t.id,P=t.mediaType,I=t.data,N=(0,S.cc)("currentStory.resources",{id:h,type:P,data:I},{id:h},e);return P===w.Tr.MAP&&e.currentStory.sections.filter((function(e){return e.type!==w.ID.CAROUSEL})).reduce((function(e,t){return[].concat(k(e),k(D(h,"sections[",t)))}),[]).map((function(t){var r=(0,w.Ll)("currentStory.".concat(t,".map"),e);N=(0,S.t8)(r,void 0,N)})),N;case j.Ro:var Z=t.id,A=t.mediaType,R=(0,S.z6)("currentStory.resources",{id:Z},e);return e.currentStory.sections.reduce((function(e,t){return[].concat(k(e),k(D(Z,"sections[",t)))}),[]).map((function(t){var r=(0,w.Ll)("currentStory.".concat(t,".resourceId"),e);if(R=(0,S.zN)(r,R),A===w.Tr.MAP){var n=(0,w.Ll)("currentStory.".concat(t,".map"),e);R=(0,S.zN)(n,R)}})),R;case j.lX:return(0,S.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,S.t8)("loading",t.value,e));case j.Dq:var z=t.path,L=(0,w.Ll)("currentStory.".concat(z),e),B=k(L),_=B.pop(),F=o()(e,B);return b()(F)?(i()(_)&&(_=parseInt(_,10)),(0,S.t8)(B,[].concat(k(F.slice(0,_)),k(F.slice(_+1))),e)):(0,S.zN)(L,e);case j.ij:var M,q,U,H,W,X=e.defaultSettings||{},G=t.story.settings||X,$=(null===(M=G)||void 0===M||null===(q=M.theme)||void 0===q?void 0:q.fontFamilies)||[],K=null===(U=e.currentStory)||void 0===U||null===(H=U.settings)||void 0===H||null===(W=H.theme)||void 0===W?void 0:W.fontFamilies;return K&&K.length>0&&(G=(0,S.t8)("theme.fontFamilies",O()([].concat(k(K),k($)),"family"),G)),(0,S.t8)("currentStory",E(E({},t.story),{},{settings:G}),e);case j.i2:return(0,S.t8)("selectedCard",e.selectedCard===t.card?"":t.card,e);case j.IY:var Q=t.control,Y=t.value;return(0,S.t8)("controls.".concat(Q),Y,e);case j.Zf:var J=t.resource,V=e.currentStory&&e.currentStory.settings||{};return(0,S.qC)((0,S.t8)("resource",J),(0,S.t8)("currentStory.settings.storyTitle",V.storyTitle||J.name))(e);case j.si:case j.KT:return(0,S.zN)("errors.save",e);case j.SW:return(0,S.t8)("errors.save",v()(t.error),e);case j.Mk:return(0,S.t8)("isCollapsed",!e.isCollapsed,e);case j.NZ:var ee=o()(e,"currentStory.settings.".concat(t.option));return(0,S.t8)("currentStory.settings.".concat(t.option),!ee,e);case j.c:var te=!e.isSettingsEnabled,re=e.currentStory&&e.currentStory.settings||{};return(0,S.qC)((0,S.t8)("isSettingsEnabled",te),(0,S.t8)("oldSettings",te?re:{}),(0,S.t8)("currentStory.settings",te?E({},re):t.withSave?re:e.oldSettings))(e);case j.wb:var ne=t.path,oe=t.mode,ce=t.element,ie=(0,w.Ll)("currentStory.".concat(ne),e),ae=o()(e,ie);return m()(ae)&&m()(ce)&&"merge"===oe&&(ce=E(E({},ae),ce)),b()(ae)&&b()(ce)&&"merge"===oe&&(ce=[].concat(k(ae),k(ce))),(0,S.t8)(ie,ce,e);case j.km:return(0,S.t8)("currentStory.settings.".concat(t.prop),t.value,e);case j.un:if(t.columnId){var le=f()(e.currentStory.sections,(function(e){return f()(e.contents,{id:t.columnId})}));return le&&f()(le.contents,{id:t.columnId})?(0,S.t8)("currentPage",E(E({},e.currentPage),{},{columns:E(E({},e.currentPage.columns),{},C({},le.id,t.columnId))}),e):e}return(0,S.t8)("currentPage",E(E({},e.currentPage),{},{sectionId:t.sectionId}),e);case j.Cx:var se=t.status,ue=t.target,pe=t.selector,fe=void 0===pe?"":pe,de=t.hideContent,me=void 0!==de&&de,ge=t.path,be=se?{target:ue,selector:fe,hideContent:me,path:ge}:void 0;return(0,S.t8)("focusedContent",be,e);case j.jr:return(0,S.t8)("pendingChanges",t.value,e);case j.ZY:return(0,S.t8)("updateUrlOnScroll",t.value,e);case j.EQ:return(0,S.t8)("mediaEditorSettings",t.mediaEditorSettings,e);case j.W$:if(t.sectionId){var ye=f()(e.currentStory.sections,(function(e){return f()(e.contents,{id:t.showContentId})}));return ye&&f()(ye.contents,{id:t.showContentId})?(0,S.t8)("currentStory",E(E({},e.currentStory),{},{sections:(0,w.eI)(e.currentStory.sections,t)}),e):e}return e;case j.mk:return(0,S.t8)("drawOptions",t.drawOptions,e);default:return e}}},31398:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var n=r(97395),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,r=void 0===t?"notification.warning":t,o=e.autoDismiss,c=void 0===o?6:o,i=e.position,a=void 0===i?"tc":i,l=e.message,s=void 0===l?"Error":l;return(0,n.vU)({title:r,autoDismiss:c,position:a,message:s})}}}]);