(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7785],{43526:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>j});var r=n(24852),o=n.n(r),i=n(45697),c=n.n(i),a=n(58252),u=n(67076);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v={},w=(0,u.lifecycle)({componentDidMount:function(){if(v[this.props.id]){var t=document.getElementById(this.props.id);t&&t.parentNode&&!t.hasChildNodes()&&t.parentNode.replaceChild(v[this.props.id],t)}},shouldComponentUpdate:function(){return!1},componentWillUnmount:function(){v[this.props.id]=document.getElementById(this.props.id)}})((function(t){var e=t.id;return o().createElement("div",{id:e})})),O=[{element:o().createElement(w,{key:"attribution",id:"footer-attribution-container"})},{element:o().createElement(w,{key:"scalebar",id:"footer-scalebar-container"})}],S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(u,t);var e,n,r,i,c=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(i){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return d(this,t)});function u(){var t;p(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return g(b(t=c.call.apply(c,[this].concat(n))),"getPanels",(function(){return t.props.items.filter((function(t){return t.tools})).reduce((function(t,e){return t.concat(e.tools.map((function(t,n){return{name:e.name+n,panel:t,cfg:e.cfg.toolsCfg?e.cfg.toolsCfg[n]:{}}})))}),[])})),g(b(t),"getTools",(function(){return[O[0]].concat(s(t.props.items.sort((function(t,e){return e.position-t.position}))),[O[1]])})),t}return e=u,(n=[{key:"render",value:function(){return o().createElement(a.Z,{id:this.props.id,style:this.props.style,className:this.props.className,mapType:this.props.mapType,container:function(t){return o().createElement("div",t,t.children)},toolStyle:"primary",activeStyle:"default",stateSelector:"mapFooter",tool:function(t){return o().createElement("div",null,t.children)},tools:this.getTools(),panels:this.getPanels()})}}])&&y(e.prototype,n),u}(o().Component);g(S,"propTypes",{className:c().string,style:c().object,items:c().array,id:c().string,mapType:c().string}),g(S,"defaultProps",{items:[],className:"mapstore-map-footer",style:{},id:"mapstore-map-footer",mapType:"leaflet"});const j={MapFooterPlugin:S,reducers:{}}}}]);