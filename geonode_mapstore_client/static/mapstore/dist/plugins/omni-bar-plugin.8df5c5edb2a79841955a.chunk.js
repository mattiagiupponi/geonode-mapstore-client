(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7489],{9860:(r,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>v});var e=t(67294),o=t.n(e),a=t(45697),i=t.n(a),s=(t(78998),t(27418)),l=t.n(s),c=t(58252);function p(r){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function u(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function f(r,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function d(r,n){return(d=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r})(r,n)}function m(r,n){return!n||"object"!==p(n)&&"function"!=typeof n?b(r):n}function b(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function y(r){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function g(r,n,t){return n in r?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,r}var h=function(r){!function(r,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(n&&n.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),n&&d(r,n)}(s,r);var n,t,e,a,i=(e=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}(),function(){var r,n=y(e);if(a){var t=y(this).constructor;r=Reflect.construct(n,arguments,t)}else r=n.apply(this,arguments);return m(this,r)});function s(){var r;u(this,s);for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return g(b(r=i.call.apply(i,[this].concat(t))),"getPanels",(function(){return r.props.items.filter((function(r){return r.tools})).reduce((function(r,n){return r.concat(n.tools.map((function(r,t){var e,o;return{name:n.name+t,panel:r,cfg:(null==n||null===(e=n.cfg)||void 0===e||null===(o=e.toolsCfg)||void 0===o?void 0:o[t])||{}}})))}),[])})),g(b(r),"getTools",(function(){return r.props.items.sort((function(r,n){return r.position-n.position}))})),r}return n=s,(t=[{key:"render",value:function(){return o().createElement(c.Z,{id:this.props.id,style:this.props.style,className:this.props.className,mapType:this.props.mapType,container:function(r){return o().createElement("div",r,r.children)},toolStyle:"primary",activeStyle:"default",stateSelector:"omnibar",tool:function(r){return o().createElement("div",null,r.children)},tools:this.getTools(),panels:this.getPanels()})}}])&&f(n.prototype,t),s}(o().Component);g(h,"propTypes",{className:i().string,style:i().object,items:i().array,id:i().string,mapType:i().string}),g(h,"defaultProps",{items:[],className:"navbar-dx shadow",style:{},id:"mapstore-navbar",mapType:"leaflet"});const v={OmniBarPlugin:l()(h,{disablePluginIf:"{state('featuregridmode') === 'EDIT' || (state('router') && state('router').includes('/geostory/shared') && state('geostorymode') !== 'edit')}"}),reducers:{}}},90603:(r,n,t)=>{(r.exports=t(9252)()).push([r.id,"/*viewer navbar */\r\n.msgapi .navbar-dx{\r\n\tposition:absolute;\r\n\tright:0;\r\n\ttop:0;\r\n}\r\n\r\n.msgapi .navbar-dx > ul{\r\n\tpadding:0;\r\n}\r\n\r\n.msgapi .navbar-dx > ul > li{\r\n\tfloat: left;\r\n\tlist-style:none;\r\n}\r\n\r\n.msgapi .navbar-dx .search-wrap .MapSearchBar{\r\n    right: 0;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.msgapi .navbar-dx .search-wrap .form-control,.msgapi .navbar-dx .search-wrap .form-control:focus{\r\n    border-color: #fff;\r\n    border-right: 0;\r\n    webkit-box-shadow: none;\r\n    box-shadow: none;\r\n}\r\n.msgapi .navbar-dx .search-wrap .MapSearchBar .input-group-addon{\r\n    border: 0;\r\n}\r\n.msgapi .navbar-dx .search-result-list{\r\n    left: 0;\r\n    max-height: none;\r\n}\r\n\r\n.msgapi .navbar-dx .dropdown-menu {\r\n\tmargin:0;\r\n\tpadding-top: 0;\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .msgapi .navbar-dx .search-wrap {\r\n       width: 500px;\r\n       height: 50px;\r\n    }\r\n}\r\n\r\n.msgapi .navbar-dx > * {\r\n\tdisplay: inline-block;\r\n}\r\n/* Page Navbar */\r\n.msgapi .navbar-home .dropdown {\r\n\tfloat: right;\r\n}\r\n.msgapi .navbar-home .navbar-header {\r\n\tmargin-top: 7px;\r\n\tmargin-left: 10px;\r\n\tmargin-right: 10px;\r\n\tdisplay: inline-block;\r\n}\r\n",""])},78998:(r,n,t)=>{var e=t(90603);"string"==typeof e&&(e=[[r.id,e,""]]),t(14246)(e,{}),e.locals&&(r.exports=e.locals)}}]);