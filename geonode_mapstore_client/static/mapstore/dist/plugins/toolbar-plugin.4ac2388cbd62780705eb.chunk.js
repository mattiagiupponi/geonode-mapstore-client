(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2794],{83520:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>R});var n=r(24852),o=r.n(n),i=r(45697),u=r.n(i),l=r(71703),a=r(64317),c=r(31255),s=r(55105),p=r(22222),f=r(27418),y=r.n(f),b=r(58252);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var v=["children"],d=["children"];function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function O(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function w(t,e,r){return e&&j(t.prototype,e),r&&j(t,r),t}function P(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=_(t);if(e){var o=_(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return T(this,r)}}function T(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?x(t):e}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var z=function(t){P(r,t);var e=C(r);function r(){return S(this,r),e.apply(this,arguments)}return w(r,[{key:"render",value:function(){var t=this.props,e=t.children,r=O(t,v);return o().createElement(a.CSSTransitionGroup,m({},r,{transitionName:"toolbarexpand",transitionEnterTimeout:500,transitionLeaveTimeout:300}),e)}}]),r}(o().Component),V=function(t){P(r,t);var e=C(r);function r(){return S(this,r),e.apply(this,arguments)}return w(r,[{key:"render",value:function(){var t=this.props,e=t.children,r=O(t,d);return o().createElement("div",r,e)}}]),r}(o().Component),E=function(t){P(r,t);var e=C(r);function r(){var t;S(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return g(x(t=e.call.apply(e,[this].concat(o))),"getPanel",(function(t){return!0===t.panel?t.plugin:t.panel})),g(x(t),"getPanels",(function(){return t.getTools().filter((function(t){return t.panel})).map((function(e){return{name:e.name,title:e.title,cfg:e.cfg,panel:t.getPanel(e),items:e.items,wrap:e.wrap||!1}}))})),g(x(t),"getTools",(function(){var e=t.props.items.filter((function(t){return!t.alwaysVisible}))||[];return t.props.items.filter((function(r){return r.alwaysVisible||1===e.length||t.props.allVisible})).filter((function(e){return!e.showWhen||e.showWhen(t.props)})).map((function(t,e){return y()({},t,{position:t.position||e})})).sort((function(t,e){return t.position-e.position}))})),t}return w(r,[{key:"render",value:function(){var t=this.props.disableAnimation?V:z;return o().createElement(b.Z,{id:this.props.id,className:"mapToolbar btn-group-"+this.props.layout,toolCfg:this.props.btnConfig,container:t,mapType:this.props.mapType,toolStyle:this.props.buttonStyle,activeStyle:this.props.pressedButtonStyle,toolSize:this.props.buttonSize,stateSelector:this.props.stateSelector,tools:this.getTools(),panels:this.getPanels(),activePanel:this.props.active,style:this.props.style,panelStyle:this.props.panelStyle,panelClassName:this.props.panelClassName})}}]),r}(o().Component);g(E,"propTypes",{id:u().string,tools:u().array,mapType:u().string,style:u().object,panelStyle:u().object,panelClassName:u().string,disableAnimation:u().bool,active:u().string,items:u().array,allVisible:u().bool,layout:u().string,stateSelector:u().string,buttonStyle:u().string,buttonSize:u().string,pressedButtonStyle:u().string,btnConfig:u().object}),g(E,"contextTypes",{messages:u().object,router:u().object}),g(E,"defaultProps",{id:"mapstore-toolbar",style:{},panelStyle:{minWidth:"300px",right:"52px",zIndex:100,position:"absolute",overflow:"auto",left:"450px"},panelClassName:"toolbar-panel",disableAnimation:!1,items:[],allVisible:!0,layout:"vertical",stateSelector:"toolbar",buttonStyle:"primary",buttonSize:null,pressedButtonStyle:"success",btnConfig:{className:"square-button"}});var N=function(t){return(0,p.P1)([function(e){return e.controls&&e.controls[t]&&e.controls[t].active},function(e){return e.controls&&e.controls[t]&&e.controls[t].expanded},c.Rd,function(t){return(0,s.ic)(t,{right:!0,bottom:!0})}],(function(e,r,n,o){return{active:e,allVisible:r,stateSelector:t,layout:n?"horizontal":"vertical",style:o}}))};const R={ToolbarPlugin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toolbar";return(0,l.connect)(N(t))(E)},reducers:{controls:r(25108).Z}}},25108:(t,e,r)=>{"use strict";r.d(e,{Z:()=>l});var n=r(82904),o=r(27418),i=r.n(o);function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.kM:var r=e.property||"enabled";return i()({},t,u({},e.control,i()({},t[e.control],u({},r,!(t[e.control]||{})[r]))));case n.At:return!0===e.toggle&&t[e.control]&&t[e.control][e.property]===e.value?i()({},t,u({},e.control,i()({},t[e.control],u({},e.property,void 0)))):i()({},t,u({},e.control,i()({},t[e.control],u({},e.property,e.value))));case n.dc:return i()({},t,u({},e.control,i()({},t[e.control],e.properties)));case n.l:var o=Object.keys(t).filter((function(t){return-1===(e.skip||[]).indexOf(t)})),l=o.reduce((function(e,r){return i()(e,u({},r,i()({},t[r],!0===t[r].enabled?{enabled:!1}:{})))}),{});return i()({},t,l);default:return t}}},55105:(t,e,r)=>{"use strict";r.d(e,{Nr:()=>p,ic:()=>f,Jz:()=>b,VM:()=>h,CF:()=>v});var n=r(91175),o=r.n(n),i=r(827),u=r(52259);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=function(t){return t.maplayout&&t.maplayout.layout||{}},p=function(t){return t.maplayout&&t.maplayout.boundingMapRect||{}},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=s(t);return r&&Object.keys(r).filter((function(t){return e[t]})).reduce((function(t,e){return a(a({},t),{},c({},e,r[e]))}),{})||{}},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=s(t),n=!!o()(e.filter((function(t){return r[t.key]})).map((function(t){return"not"===t.type?r[t.key]!==t.value&&r[t.key]:r[t.key]===t.value})));return n},b=function(t){return y(t,[{key:"right",value:658}])},h=function(t){return y(t,[{key:"bottom",value:30,type:"not"}])},v=function(t){var e=(0,i.Od)(t),r=p(t);return r&&e&&e.size&&{left:(0,u.parseLayoutValue)(r.left,e.size.width),bottom:(0,u.parseLayoutValue)(r.bottom,e.size.height),right:(0,u.parseLayoutValue)(r.right,e.size.width),top:(0,u.parseLayoutValue)(r.top,e.size.height)}}},87157:(t,e,r)=>{var n=r(40554),o=r(88958);t.exports=function(t,e,r,i){var u=t.length;for((r=n(r))<0&&(r=-r>u?0:u+r),(i=void 0===i||i>u?u:n(i))<0&&(i+=u),i=r>i?0:o(i);r<i;)t[r++]=e;return t}},19873:(t,e,r)=>{var n=r(87157),o=r(16612);t.exports=function(t,e,r,i){var u=null==t?0:t.length;return u?(r&&"number"!=typeof r&&o(t,e,r)&&(r=0,i=u),n(t,e,r,i)):[]}},88958:(t,e,r)=>{var n=r(29750),o=r(40554);t.exports=function(t){return t?n(o(t),0,4294967295):0}},64317:(t,e,r)=>{"use strict";var n=i(r(1174)),o=i(r(92381));function i(t){return t&&t.__esModule?t:{default:t}}t.exports={TransitionGroup:o.default,CSSTransitionGroup:n.default}}}]);