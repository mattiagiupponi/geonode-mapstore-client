(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4760],{64210:(t,e,r)=>{"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}r(87883);var a=r(44020),s=r(74851);function u(t,e){return e.decode?a(t):t}function l(t){return Array.isArray(t)?t.sort():"object"===o(t)?l(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function c(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}e.Qc=function(t,e){var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,o){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===o[t]&&(o[t]={}),o[t][e[1]]=r):o[t]=r};case"bracket":return function(t,r,o){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==o[t]?o[t]=[].concat(o[t],r):o[t]=[r]:o[t]=r};case"comma":return function(t,e,r){var o="string"==typeof e&&e.split("").indexOf(",")>-1?e.split(","):e;r[t]=o};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},e)),i=Object.create(null);if("string"!=typeof t)return i;if(!(t=t.trim().replace(/^[?#&]/,"")))return i;var a,h,d,f=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=n(t))){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw a}}}}(t.split("&"));try{for(f.s();!(a=f.n()).done;){var p=a.value,b=(h=s(e.decode?p.replace(/\+/g," "):p,"="),d=2,function(t){if(Array.isArray(t))return t}(h)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var o,n,i=[],a=!0,s=!1;try{for(r=r.call(t);!(a=(o=r.next()).done)&&(i.push(o.value),!e||i.length!==e);a=!0);}catch(t){s=!0,n=t}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return i}}(h,d)||n(h,d)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=b[0],v=b[1];v=void 0===v?null:u(v,e),r(u(y,e),v,i)}}catch(t){f.e(t)}finally{f.f()}for(var m=0,g=Object.keys(i);m<g.length;m++){var S=g[m],w=i[S];if("object"===o(w)&&null!==w)for(var T=0,C=Object.keys(w);T<C.length;T++){var k=C[T];w[k]=c(w[k],e)}else i[S]=c(w,e)}return!1===e.sort?i:(!0===e.sort?Object.keys(i).sort():Object.keys(i).sort(e.sort)).reduce((function(t,e){var r=i[e];return Boolean(r)&&"object"===o(r)&&!Array.isArray(r)?t[e]=l(r):t[e]=r,t}),Object.create(null))}},87883:t=>{"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},74851:t=>{"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},44020:t=>{"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),o=new RegExp("("+e+")+","gi");function n(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),o=t.slice(e);return Array.prototype.concat.call([],n(r),n(o))}function i(t){try{return decodeURIComponent(t)}catch(i){for(var e=t.match(r),o=1;o<e.length;o++)e=(t=n(e,o).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch(t){var n=i(r[0]);n!==r[0]&&(e[r[0]]=n)}r=o.exec(t)}e["%C2"]="�";for(var a=Object.keys(e),s=0;s<a.length;s++){var u=a[s];t=t.replace(new RegExp(u,"g"),e[u])}return t}(t)}}},87157:(t,e,r)=>{var o=r(40554),n=r(88958);t.exports=function(t,e,r,i){var a=t.length;for((r=o(r))<0&&(r=-r>a?0:a+r),(i=void 0===i||i>a?a:o(i))<0&&(i+=a),i=r>i?0:n(i);r<i;)t[r++]=e;return t}},19873:(t,e,r)=>{var o=r(87157),n=r(16612);t.exports=function(t,e,r,i){var a=null==t?0:t.length;return a?(r&&"number"!=typeof r&&n(t,e,r)&&(r=0,i=a),o(t,e,r,i)):[]}},88958:(t,e,r)=>{var o=r(29750),n=r(40554);t.exports=function(t){return t?o(n(t),0,4294967295):0}},19081:(t,e,r)=>{"use strict";t.exports=r(1174)},6806:(t,e,r)=>{"use strict";var o,n=(o=r(15132))&&o.__esModule?o:{default:o};e.Z=n.default},15132:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),a=r(24852),s=l(a),u=l(r(45697));function l(t){return t&&t.__esModule?t:{default:t}}var c={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},h={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},d={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"scroll",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},f={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},p={zIndex:1,position:"fixed",top:0,bottom:0},b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.state={sidebarWidth:t.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null,dragSupported:!1},r.overlayClicked=r.overlayClicked.bind(r),r.onTouchStart=r.onTouchStart.bind(r),r.onTouchMove=r.onTouchMove.bind(r),r.onTouchEnd=r.onTouchEnd.bind(r),r.onScroll=r.onScroll.bind(r),r.saveSidebarRef=r.saveSidebarRef.bind(r),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"componentDidMount",value:function(){this.setState({dragSupported:"object"===("undefined"==typeof window?"undefined":n(window))&&"ontouchstart"in window}),this.saveSidebarWidth()}},{key:"componentDidUpdate",value:function(){this.isTouching()||this.saveSidebarWidth()}},{key:"onTouchStart",value:function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchStartY:e.clientY,touchCurrentX:e.clientX,touchCurrentY:e.clientY})}}},{key:"onTouchMove",value:function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX,touchCurrentY:t.targetTouches[e].clientY});break}}},{key:"onTouchEnd",value:function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}}},{key:"onScroll",value:function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}},{key:"inCancelDistanceOnScroll",value:function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20}},{key:"isTouching",value:function(){return null!==this.state.touchIdentifier}},{key:"overlayClicked",value:function(){this.props.open&&this.props.onSetOpen(!1)}},{key:"saveSidebarWidth",value:function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})}},{key:"saveSidebarRef",value:function(t){this.sidebar=t}},{key:"touchSidebarWidth",value:function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)}},{key:"render",value:function(){var t=o({},h,this.props.styles.sidebar),e=o({},d,this.props.styles.content),r=o({},f,this.props.styles.overlay),n=this.state.dragSupported&&this.props.touch,i=this.isTouching(),a={className:this.props.rootClassName,style:o({},c,this.props.styles.root),role:"navigation"},u=void 0;if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",this.props.shadow&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",this.props.shadow&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),i){var l=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-l)+"%)",t.WebkitTransform="translateX("+100*(1-l)+"%)"):(t.transform="translateX(-"+100*(1-l)+"%)",t.WebkitTransform="translateX(-"+100*(1-l)+"%)"),r.opacity=l,r.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?e.right=this.state.sidebarWidth+"px":e.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",r.opacity=1,r.visibility="visible");if(!i&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",e.transition="none",r.transition="none"),n)if(this.props.open)a.onTouchStart=this.onTouchStart,a.onTouchMove=this.onTouchMove,a.onTouchEnd=this.onTouchEnd,a.onTouchCancel=this.onTouchEnd,a.onScroll=this.onScroll;else{var b=o({},p,this.props.styles.dragHandle);b.width=this.props.touchHandleWidth,this.props.pullRight?b.right=0:b.left=0,u=s.default.createElement("div",{style:b,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return s.default.createElement("div",a,s.default.createElement("div",{className:this.props.sidebarClassName,style:t,ref:this.saveSidebarRef},this.props.sidebar),s.default.createElement("div",{className:this.props.overlayClassName,style:r,role:"presentation",tabIndex:"0",onClick:this.overlayClicked}),s.default.createElement("div",{className:this.props.contentClassName,style:e},u,this.props.children))}}]),e}(a.Component);b.propTypes={children:u.default.node.isRequired,styles:u.default.shape({root:u.default.object,sidebar:u.default.object,content:u.default.object,overlay:u.default.object,dragHandle:u.default.object}),rootClassName:u.default.string,sidebarClassName:u.default.string,contentClassName:u.default.string,overlayClassName:u.default.string,sidebar:u.default.node.isRequired,docked:u.default.bool,open:u.default.bool,transitions:u.default.bool,touch:u.default.bool,touchHandleWidth:u.default.number,pullRight:u.default.bool,shadow:u.default.bool,dragToggleDistance:u.default.number,onSetOpen:u.default.func,defaultSidebarWidth:u.default.number},b.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},e.default=b},28878:(t,e,r)=>{"use strict";var o,n={fromESObservable:((o=r(49977))&&o.__esModule?o:{default:o}).default.Observable.from,toESObservable:function(t){return t}};e.Z=n},19412:(t,e,r)=>{var o=r(98098);t.exports=function(t,e){var r=new o.io.GeoJSONReader,n=r.read(JSON.stringify(t.geometry)),i=r.read(JSON.stringify(e.geometry)),a=n.union(i);return{type:"Feature",geometry:a=(new o.io.GeoJSONWriter).write(a),properties:t.properties}}}}]);