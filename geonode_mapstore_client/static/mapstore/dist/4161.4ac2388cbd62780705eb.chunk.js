(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4161],{65045:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});var r=e(49179);const o=function(t){function n(n){var e="Assertion failed. See https://openlayers.org/en/"+("latest"===r.q4?r.q4:"v"+r.q4.split("-")[0])+"/doc/errors/#"+n+" for details.";t.call(this,e),this.code=n,this.name="AssertionError",this.message=e}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(Error)},80967:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});var r=function(){this.disposed_=!1};r.prototype.dispose=function(){this.disposed_||(this.disposed_=!0,this.disposeInternal())},r.prototype.disposeInternal=function(){};const o=r},58493:(t,n,e)=>{"use strict";e.d(n,{v_:()=>l,ZP:()=>h});var r=e(49179),o=e(13910),i=e(56834),s=e(9520),u=e(13580),a=function(t){function n(n,e,r){t.call(this,n),this.key=e,this.oldValue=r}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(s.ZP),c=function(t){function n(n){t.call(this),(0,r.sq)(this),this.values_={},void 0!==n&&this.setProperties(n)}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.get=function(t){var n;return this.values_.hasOwnProperty(t)&&(n=this.values_[t]),n},n.prototype.getKeys=function(){return Object.keys(this.values_)},n.prototype.getProperties=function(){return(0,u.f0)({},this.values_)},n.prototype.notify=function(t,n){var e;e=l(t),this.dispatchEvent(new a(e,t,n)),e=o.Z.PROPERTYCHANGE,this.dispatchEvent(new a(e,t,n))},n.prototype.set=function(t,n,e){if(e)this.values_[t]=n;else{var r=this.values_[t];this.values_[t]=n,r!==n&&this.notify(t,r)}},n.prototype.setProperties=function(t,n){for(var e in t)this.set(e,t[e],n)},n.prototype.unset=function(t,n){if(t in this.values_){var e=this.values_[t];delete this.values_[t],n||this.notify(t,e)}},n}(i.Z),f={};function l(t){return f.hasOwnProperty(t)?f[t]:f[t]="change:"+t}const h=c},13910:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});const r={PROPERTYCHANGE:"propertychange"}},56834:(t,n,e)=>{"use strict";e.d(n,{B:()=>s,Z:()=>u});var r=e(13002),o=e(66575),i=e(73381);function s(t){if(Array.isArray(t))for(var n=0,e=t.length;n<e;++n)(0,r.bN)(t[n]);else(0,r.bN)(t)}const u=function(t){function n(){t.call(this),this.revision_=0}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.changed=function(){++this.revision_,this.dispatchEvent(i.Z.CHANGE)},n.prototype.getRevision=function(){return this.revision_},n.prototype.on=function(t,n){if(Array.isArray(t)){for(var e=t.length,o=new Array(e),i=0;i<e;++i)o[i]=(0,r.oL)(this,t[i],n);return o}return(0,r.oL)(this,t,n)},n.prototype.once=function(t,n){if(Array.isArray(t)){for(var e=t.length,o=new Array(e),i=0;i<e;++i)o[i]=(0,r.Vx)(this,t[i],n);return o}return(0,r.Vx)(this,t,n)},n.prototype.un=function(t,n){if(Array.isArray(t))for(var e=0,o=t.length;e<o;++e)(0,r.Ev)(this,t[e],n);else(0,r.Ev)(this,t,n)},n}(o.Z)},38906:(t,n,e)=>{"use strict";e.d(n,{h:()=>o});var r=e(65045);function o(t,n){if(!t)throw new r.Z(n)}},13002:(t,n,e)=>{"use strict";e.d(n,{oL:()=>a,Vx:()=>c,Ev:()=>f,bN:()=>l,oh:()=>h});var r=e(13580);function o(t,n,e,r){for(var o,i=0,s=t.length;i<s;++i)if((o=t[i]).listener===n&&o.bindTo===e)return r&&(o.deleteIndex=i),o}function i(t,n){var e=s(t);return e?e[n]:void 0}function s(t,n){var e=t.ol_lm;return!e&&n&&(e=t.ol_lm={}),e}function u(t,n){var e=i(t,n);if(e){for(var o=0,u=e.length;o<u;++o)t.removeEventListener(n,e[o].boundListener),(0,r.ZH)(e[o]);e.length=0;var a=s(t);a&&(delete a[n],0===Object.keys(a).length&&function(t){delete t.ol_lm}(t))}}function a(t,n,e,r,i){var u=s(t,!0),a=u[n];a||(a=u[n]=[]);var c=o(a,e,r,!1);return c?i||(c.callOnce=!1):(c={bindTo:r,callOnce:!!i,listener:e,target:t,type:n},t.addEventListener(n,function(t){var n=function(n){var e=t.listener,r=t.bindTo||t.target;return t.callOnce&&l(t),e.call(r,n)};return t.boundListener=n,n}(c)),a.push(c)),c}function c(t,n,e,r){return a(t,n,e,r,!0)}function f(t,n,e,r){var s=i(t,n);if(s){var u=o(s,e,r,!0);u&&l(u)}}function l(t){if(t&&t.target){t.target.removeEventListener(t.type,t.boundListener);var n=i(t.target,t.type);if(n){var e="deleteIndex"in t?t.deleteIndex:n.indexOf(t);-1!==e&&n.splice(e,1),0===n.length&&u(t.target,t.type)}(0,r.ZH)(t)}}function h(t){var n=s(t);if(n)for(var e in n)u(t,e)}},9520:(t,n,e)=>{"use strict";e.d(n,{UW:()=>o,ZP:()=>i});var r=function(t){this.propagationStopped,this.type=t,this.target=null};function o(t){t.stopPropagation()}r.prototype.preventDefault=function(){this.propagationStopped=!0},r.prototype.stopPropagation=function(){this.propagationStopped=!0};const i=r},73381:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});const r={CHANGE:"change",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",ERROR:"error",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",MOUSEDOWN:"mousedown",MOUSEMOVE:"mousemove",MOUSEOUT:"mouseout",MOUSEUP:"mouseup",MOUSEWHEEL:"mousewheel",MSPOINTERDOWN:"MSPointerDown",RESIZE:"resize",TOUCHSTART:"touchstart",TOUCHMOVE:"touchmove",TOUCHEND:"touchend",WHEEL:"wheel"}},66575:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var r=e(80967),o=e(13002),i=e(64011),s=e(9520);const u=function(t){function n(){t.call(this),this.pendingRemovals_={},this.dispatching_={},this.listeners_={}}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.addEventListener=function(t,n){var e=this.listeners_[t];e||(e=this.listeners_[t]=[]),-1===e.indexOf(n)&&e.push(n)},n.prototype.dispatchEvent=function(t){var n="string"==typeof t?new s.ZP(t):t,e=n.type;n.target=this;var r,o=this.listeners_[e];if(o){e in this.dispatching_||(this.dispatching_[e]=0,this.pendingRemovals_[e]=0),++this.dispatching_[e];for(var u=0,a=o.length;u<a;++u)if(!1===o[u].call(this,n)||n.propagationStopped){r=!1;break}if(--this.dispatching_[e],0===this.dispatching_[e]){var c=this.pendingRemovals_[e];for(delete this.pendingRemovals_[e];c--;)this.removeEventListener(e,i.Zn);delete this.dispatching_[e]}return r}},n.prototype.disposeInternal=function(){(0,o.oh)(this)},n.prototype.getListeners=function(t){return this.listeners_[t]},n.prototype.hasListener=function(t){return t?t in this.listeners_:Object.keys(this.listeners_).length>0},n.prototype.removeEventListener=function(t,n){var e=this.listeners_[t];if(e){var r=e.indexOf(n);t in this.pendingRemovals_?(e[r]=i.Zn,++this.pendingRemovals_[t]):(e.splice(r,1),0===e.length&&delete this.listeners_[t])}},n}(r.Z)},21915:(t,n,e)=>{"use strict";e.d(n,{hI:()=>s,f3:()=>u,d9:()=>a,qf:()=>c,b8:()=>f,r4:()=>l,jE:()=>h,pX:()=>p,lJ:()=>v,T9:()=>d,YN:()=>E,HK:()=>g,ZT:()=>_,GN:()=>y,fS:()=>O,l7:()=>M,Wj:()=>T,qP:()=>P,H6:()=>R,bg:()=>S,hC:()=>G,w$:()=>L,qg:()=>N,g0:()=>Z,p8:()=>b,Cr:()=>m,Ed:()=>w,rL:()=>x,Xv:()=>C,dz:()=>U,kK:()=>A,xb:()=>H,EO:()=>W,H9:()=>Y,I7:()=>D,Ne:()=>k});var r=e(38906),o=e(51748),i=e(34178);function s(t){for(var n=[1/0,1/0,-1/0,-1/0],e=0,r=t.length;e<r;++e)T(n,t[e]);return n}function u(t,n,e){return e?(e[0]=t[0]-n,e[1]=t[1]-n,e[2]=t[2]+n,e[3]=t[3]+n,e):[t[0]-n,t[1]-n,t[2]+n,t[3]+n]}function a(t,n){return n?(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n):t.slice()}function c(t,n,e){var r,o;return(r=n<t[0]?t[0]-n:t[2]<n?n-t[2]:0)*r+(o=e<t[1]?t[1]-e:t[3]<e?e-t[3]:0)*o}function f(t,n){return h(t,n[0],n[1])}function l(t,n){return t[0]<=n[0]&&n[2]<=t[2]&&t[1]<=n[1]&&n[3]<=t[3]}function h(t,n,e){return t[0]<=n&&n<=t[2]&&t[1]<=e&&e<=t[3]}function p(t,n){var e=t[0],r=t[1],o=t[2],s=t[3],u=n[0],a=n[1],c=i.Z.UNKNOWN;return u<e?c|=i.Z.LEFT:u>o&&(c|=i.Z.RIGHT),a<r?c|=i.Z.BELOW:a>s&&(c|=i.Z.ABOVE),c===i.Z.UNKNOWN&&(c=i.Z.INTERSECTING),c}function v(){return[1/0,1/0,-1/0,-1/0]}function d(t,n,e,r,o){return o?(o[0]=t,o[1]=n,o[2]=e,o[3]=r,o):[t,n,e,r]}function E(t){return d(1/0,1/0,-1/0,-1/0,t)}function g(t,n){var e=t[0],r=t[1];return d(e,r,e,r,n)}function _(t,n){return function(t,n){for(var e=0,r=n.length;e<r;++e)T(t,n[e]);return t}(E(n),t)}function y(t,n,e,r,o){return P(E(o),t,n,e,r)}function O(t,n){return t[0]==n[0]&&t[2]==n[2]&&t[1]==n[1]&&t[3]==n[3]}function M(t,n){return n[0]<t[0]&&(t[0]=n[0]),n[2]>t[2]&&(t[2]=n[2]),n[1]<t[1]&&(t[1]=n[1]),n[3]>t[3]&&(t[3]=n[3]),t}function T(t,n){n[0]<t[0]&&(t[0]=n[0]),n[0]>t[2]&&(t[2]=n[0]),n[1]<t[1]&&(t[1]=n[1]),n[1]>t[3]&&(t[3]=n[1])}function P(t,n,e,r,o){for(;e<r;e+=o)I(t,n[e],n[e+1]);return t}function I(t,n,e){t[0]=Math.min(t[0],n),t[1]=Math.min(t[1],e),t[2]=Math.max(t[2],n),t[3]=Math.max(t[3],e)}function R(t,n,e){var r;return(r=n.call(e,G(t)))||(r=n.call(e,L(t)))||(r=n.call(e,C(t)))?r:(r=n.call(e,x(t)))||!1}function S(t){var n=0;return H(t)||(n=U(t)*m(t)),n}function G(t){return[t[0],t[1]]}function L(t){return[t[2],t[1]]}function N(t){return[(t[0]+t[2])/2,(t[1]+t[3])/2]}function Z(t,n){var e;return n===o.Z.BOTTOM_LEFT?e=G(t):n===o.Z.BOTTOM_RIGHT?e=L(t):n===o.Z.TOP_LEFT?e=x(t):n===o.Z.TOP_RIGHT?e=C(t):(0,r.h)(!1,13),e}function b(t,n,e,r,o){var i=n*r[0]/2,s=n*r[1]/2,u=Math.cos(e),a=Math.sin(e),c=i*u,f=i*a,l=s*u,h=s*a,p=t[0],v=t[1],E=p-c+h,g=p-c-h,_=p+c-h,y=p+c+h,O=v-f-l,M=v-f+l,T=v+f+l,P=v+f-l;return d(Math.min(E,g,_,y),Math.min(O,M,T,P),Math.max(E,g,_,y),Math.max(O,M,T,P),o)}function m(t){return t[3]-t[1]}function w(t,n,e){var r=e||[1/0,1/0,-1/0,-1/0];return A(t,n)?(t[0]>n[0]?r[0]=t[0]:r[0]=n[0],t[1]>n[1]?r[1]=t[1]:r[1]=n[1],t[2]<n[2]?r[2]=t[2]:r[2]=n[2],t[3]<n[3]?r[3]=t[3]:r[3]=n[3]):E(r),r}function x(t){return[t[0],t[3]]}function C(t){return[t[2],t[3]]}function U(t){return t[2]-t[0]}function A(t,n){return t[0]<=n[2]&&t[2]>=n[0]&&t[1]<=n[3]&&t[3]>=n[1]}function H(t){return t[2]<t[0]||t[3]<t[1]}function W(t,n){return n?(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n):t}function Y(t,n){var e=(t[2]-t[0])/2*(n-1),r=(t[3]-t[1])/2*(n-1);t[0]-=e,t[2]+=e,t[1]-=r,t[3]+=r}function D(t,n,e){var r=!1,o=p(t,n),s=p(t,e);if(o===i.Z.INTERSECTING||s===i.Z.INTERSECTING)r=!0;else{var u,a,c=t[0],f=t[1],l=t[2],h=t[3],v=n[0],d=n[1],E=e[0],g=e[1],_=(g-d)/(E-v);s&i.Z.ABOVE&&!(o&i.Z.ABOVE)&&(r=(u=E-(g-h)/_)>=c&&u<=l),r||!(s&i.Z.RIGHT)||o&i.Z.RIGHT||(r=(a=g-(E-l)*_)>=f&&a<=h),r||!(s&i.Z.BELOW)||o&i.Z.BELOW||(r=(u=E-(g-f)/_)>=c&&u<=l),r||!(s&i.Z.LEFT)||o&i.Z.LEFT||(r=(a=g-(E-c)*_)>=f&&a<=h)}return r}function k(t,n,e){var r=[t[0],t[1],t[0],t[3],t[2],t[1],t[2],t[3]];return n(r,r,2),function(t,n,e){return d(Math.min.apply(null,t),Math.min.apply(null,n),Math.max.apply(null,t),Math.max.apply(null,n),e)}([r[0],r[2],r[4],r[6]],[r[1],r[3],r[5],r[7]],e)}},51748:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});const r={BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",TOP_LEFT:"top-left",TOP_RIGHT:"top-right"}},34178:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});const r={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16}},64011:(t,n,e)=>{"use strict";function r(){return!0}function o(){return!1}function i(){}e.d(n,{uX:()=>r,Dv:()=>o,Zn:()=>i})},28795:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});const r={POINT:"Point",LINE_STRING:"LineString",LINEAR_RING:"LinearRing",POLYGON:"Polygon",MULTI_POINT:"MultiPoint",MULTI_LINE_STRING:"MultiLineString",MULTI_POLYGON:"MultiPolygon",GEOMETRY_COLLECTION:"GeometryCollection",CIRCLE:"Circle"}},21882:(t,n,e)=>{"use strict";function r(t,n,e){return Math.min(Math.max(t,n),e)}e.d(n,{uZ:()=>r,f9:()=>o,rU:()=>i,bI:()=>s,SV:()=>u,Ux:()=>a,Yr:()=>c,$W:()=>f,t7:()=>l});var o="cosh"in Math?Math.cosh:function(t){var n=Math.exp(t);return(n+1/n)/2};function i(t,n,e,r,o,i){var u=o-e,a=i-r;if(0!==u||0!==a){var c=((t-e)*u+(n-r)*a)/(u*u+a*a);c>1?(e=o,r=i):c>0&&(e+=u*c,r+=a*c)}return s(t,n,e,r)}function s(t,n,e,r){var o=e-t,i=r-n;return o*o+i*i}function u(t){for(var n=t.length,e=0;e<n;e++){for(var r=e,o=Math.abs(t[e][e]),i=e+1;i<n;i++){var s=Math.abs(t[i][e]);s>o&&(o=s,r=i)}if(0===o)return null;var u=t[r];t[r]=t[e],t[e]=u;for(var a=e+1;a<n;a++)for(var c=-t[a][e]/t[e][e],f=e;f<n+1;f++)e==f?t[a][f]=0:t[a][f]+=c*t[e][f]}for(var l=new Array(n),h=n-1;h>=0;h--){l[h]=t[h][n]/t[h][h];for(var p=h-1;p>=0;p--)t[p][n]-=t[p][h]*l[h]}return l}function a(t){return 180*t/Math.PI}function c(t){return t*Math.PI/180}function f(t,n){var e=t%n;return e*n<0?e+n:e}function l(t,n,e){return t+e*(n-t)}},13580:(t,n,e)=>{"use strict";e.d(n,{f0:()=>r,ZH:()=>o,KX:()=>i,xb:()=>s});var r="function"==typeof Object.assign?Object.assign:function(t,n){var e=arguments;if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(t),o=1,i=arguments.length;o<i;++o){var s=e[o];if(null!=s)for(var u in s)s.hasOwnProperty(u)&&(r[u]=s[u])}return r};function o(t){for(var n in t)delete t[n]}function i(t){var n=[];for(var e in t)n.push(t[e]);return n}function s(t){var n;for(n in t)return!1;return!n}},18672:(t,n,e)=>{"use strict";e.d(n,{zY:()=>b,rM:()=>L,Sx:()=>R,UQ:()=>N,OP:()=>w,U2:()=>S,_Q:()=>G,Ck:()=>C,WO:()=>x,gD:()=>I,bU:()=>m,vs:()=>U,$A:()=>A});var r=e(70295),o=e(21915),i=e(21882),s=e(44183),u=e(40868),a=6378137,c=Math.PI*a,f=[-c,-c,c,c],l=[-180,-85,180,85],h=function(t){function n(n){t.call(this,{code:n,units:u.default.METERS,extent:f,global:!0,worldExtent:l,getPointResolution:function(t,n){return t/(0,i.f9)(n[1]/a)}})}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(s.Z),p=[new h("EPSG:3857"),new h("EPSG:102100"),new h("EPSG:102113"),new h("EPSG:900913"),new h("urn:ogc:def:crs:EPSG:6.18:3:3857"),new h("urn:ogc:def:crs:EPSG::3857"),new h("http://www.opengis.net/gml/srs/epsg.xml#3857")];var v,d,E,g=[-180,-90,180,90],_=6378137*Math.PI/180,y=function(t){function n(n,e){t.call(this,{code:n,units:u.default.DEGREES,extent:g,axisOrientation:e,global:!0,metersPerUnit:_,worldExtent:g})}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n}(s.Z),O=[new y("CRS:84"),new y("EPSG:4326","neu"),new y("urn:ogc:def:crs:EPSG::4326","neu"),new y("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new y("urn:ogc:def:crs:OGC:1.3:CRS84"),new y("urn:ogc:def:crs:OGC:2:84"),new y("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new y("urn:x-ogc:def:crs:EPSG:4326","neu")],M={},T=e(84110);function P(t,n,e){var r;if(void 0!==n){for(var o=0,i=t.length;o<i;++o)n[o]=t[o];r=n}else r=t.slice();return r}function I(t,n,e){if(void 0!==n&&t!==n){for(var r=0,o=t.length;r<o;++r)n[r]=t[r];t=n}return t}function R(t){!function(t,n){M[t]=n}(t.getCode(),t),(0,T.IH)(t,t,P)}function S(t){return"string"==typeof t?M[t]||null:t||null}function G(t,n,e,o){var i,s=(t=S(t)).getPointResolutionFunc();if(s)i=s(n,e);else if(t.getUnits()==u.default.DEGREES&&!o||o==u.default.DEGREES)i=n;else{var a=x(t,S("EPSG:4326")),c=[e[0]-n/2,e[1],e[0]+n/2,e[1],e[0],e[1]-n/2,e[0],e[1]+n/2];c=a(c,c,2),i=((0,r.Sp)(c.slice(0,2),c.slice(2,4))+(0,r.Sp)(c.slice(4,6),c.slice(6,8)))/2;var f=o?u.METERS_PER_UNIT[o]:t.getMetersPerUnit();void 0!==f&&(i/=f)}return i}function L(t){!function(t){t.forEach(R)}(t),t.forEach((function(n){t.forEach((function(t){n!==t&&(0,T.IH)(n,t,P)}))}))}function N(t,n){return t?"string"==typeof t?S(t):t:S(n)}function Z(t){return function(n,e,r){for(var o=n.length,i=void 0!==r?r:2,s=void 0!==e?e:new Array(o),u=0;u<o;u+=i){var a=t([n[u],n[u+1]]);s[u]=a[0],s[u+1]=a[1];for(var c=i-1;c>=2;--c)s[u+c]=n[u+c]}return s}}function b(t,n,e,r){var o=S(t),i=S(n);(0,T.IH)(o,i,Z(e)),(0,T.IH)(i,o,Z(r))}function m(t,n){var e=U(t,void 0!==n?n:"EPSG:3857","EPSG:4326"),r=e[0];return(r<-180||r>180)&&(e[0]=(0,i.$W)(r+180,360)-180),e}function w(t,n){if(t===n)return!0;var e=t.getUnits()===n.getUnits();return(t.getCode()===n.getCode()||x(t,n)===P)&&e}function x(t,n){var e=t.getCode(),r=n.getCode(),o=(0,T.U2)(e,r);return o||(o=I),o}function C(t,n){return x(S(t),S(n))}function U(t,n,e){return C(n,e)(t,void 0,t.length)}function A(t,n,e){var r=C(n,e);return(0,o.Ne)(t,r)}L(p),L(O),v=p,d=function(t,n,e){var r=t.length,o=e>1?e:2,i=n;void 0===i&&(i=o>2?t.slice():new Array(r));for(var s=c,u=0;u<r;u+=o){i[u]=s*t[u]/180;var f=a*Math.log(Math.tan(Math.PI*(t[u+1]+90)/360));f>s?f=s:f<-s&&(f=-s),i[u+1]=f}return i},E=function(t,n,e){var r=t.length,o=e>1?e:2,i=n;void 0===i&&(i=o>2?t.slice():new Array(r));for(var s=0;s<r;s+=o)i[s]=180*t[s]/c,i[s+1]=360*Math.atan(Math.exp(t[s+1]/a))/Math.PI-90;return i},O.forEach((function(t){v.forEach((function(n){(0,T.IH)(t,n,d),(0,T.IH)(n,t,E)}))}))},44183:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i});var r=e(40868),o=function(t){this.code_=t.code,this.units_=t.units,this.extent_=void 0!==t.extent?t.extent:null,this.worldExtent_=void 0!==t.worldExtent?t.worldExtent:null,this.axisOrientation_=void 0!==t.axisOrientation?t.axisOrientation:"enu",this.global_=void 0!==t.global&&t.global,this.canWrapX_=!(!this.global_||!this.extent_),this.getPointResolutionFunc_=t.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=t.metersPerUnit};o.prototype.canWrapX=function(){return this.canWrapX_},o.prototype.getCode=function(){return this.code_},o.prototype.getExtent=function(){return this.extent_},o.prototype.getUnits=function(){return this.units_},o.prototype.getMetersPerUnit=function(){return this.metersPerUnit_||r.METERS_PER_UNIT[this.units_]},o.prototype.getWorldExtent=function(){return this.worldExtent_},o.prototype.getAxisOrientation=function(){return this.axisOrientation_},o.prototype.isGlobal=function(){return this.global_},o.prototype.setGlobal=function(t){this.global_=t,this.canWrapX_=!(!t||!this.extent_)},o.prototype.getDefaultTileGrid=function(){return this.defaultTileGrid_},o.prototype.setDefaultTileGrid=function(t){this.defaultTileGrid_=t},o.prototype.setExtent=function(t){this.extent_=t,this.canWrapX_=!(!this.global_||!t)},o.prototype.setWorldExtent=function(t){this.worldExtent_=t},o.prototype.setGetPointResolution=function(t){this.getPointResolutionFunc_=t},o.prototype.getPointResolutionFunc=function(){return this.getPointResolutionFunc_};const i=o},40868:(t,n,e)=>{"use strict";e.r(n),e.d(n,{METERS_PER_UNIT:()=>o,default:()=>i});var r={DEGREES:"degrees",FEET:"ft",METERS:"m",PIXELS:"pixels",TILE_PIXELS:"tile-pixels",USFEET:"us-ft"},o={};o[r.DEGREES]=2*Math.PI*6370997/360,o[r.FEET]=.3048,o[r.METERS]=1,o[r.USFEET]=1200/3937;const i=r},84110:(t,n,e)=>{"use strict";e.d(n,{IH:()=>o,U2:()=>i});var r={};function o(t,n,e){var o=t.getCode(),i=n.getCode();o in r||(r[o]={}),r[o][i]=e}function i(t,n){var e;return t in r&&n in r[t]&&(e=r[t][n]),e}},70295:(t,n,e)=>{"use strict";e.d(n,{Sp:()=>s,bg:()=>a,cv:()=>c});var r=e(21882),o=e(28795),i=6371008.8;function s(t,n,e){var o=e||i,s=(0,r.Yr)(t[1]),u=(0,r.Yr)(n[1]),a=(u-s)/2,c=(0,r.Yr)(n[0]-t[0])/2,f=Math.sin(a)*Math.sin(a)+Math.sin(c)*Math.sin(c)*Math.cos(s)*Math.cos(u);return 2*o*Math.atan2(Math.sqrt(f),Math.sqrt(1-f))}function u(t,n){for(var e=0,o=t.length,i=t[o-1][0],s=t[o-1][1],u=0;u<o;u++){var a=t[u][0],c=t[u][1];e+=(0,r.Yr)(a-i)*(2+Math.sin((0,r.Yr)(s))+Math.sin((0,r.Yr)(c))),i=a,s=c}return e*n*n/2}function a(t,n){var e=n||{},r=e.radius||i,s=e.projection||"EPSG:3857",c=t.getType();c!==o.Z.GEOMETRY_COLLECTION&&(t=t.clone().transform(s,"EPSG:4326"));var f,l,h,p,v,d,E=0;switch(c){case o.Z.POINT:case o.Z.MULTI_POINT:case o.Z.LINE_STRING:case o.Z.MULTI_LINE_STRING:case o.Z.LINEAR_RING:break;case o.Z.POLYGON:for(f=t.getCoordinates(),E=Math.abs(u(f[0],r)),h=1,p=f.length;h<p;++h)E-=Math.abs(u(f[h],r));break;case o.Z.MULTI_POLYGON:for(h=0,p=(f=t.getCoordinates()).length;h<p;++h)for(l=f[h],E+=Math.abs(u(l[0],r)),v=1,d=l.length;v<d;++v)E-=Math.abs(u(l[v],r));break;case o.Z.GEOMETRY_COLLECTION:var g=t.getGeometries();for(h=0,p=g.length;h<p;++h)E+=a(g[h],n);break;default:throw new Error("Unsupported geometry type: "+c)}return E}function c(t,n,e,o){var s=o||i,u=(0,r.Yr)(t[1]),a=(0,r.Yr)(t[0]),c=n/s,f=Math.asin(Math.sin(u)*Math.cos(c)+Math.cos(u)*Math.sin(c)*Math.cos(e)),l=a+Math.atan2(Math.sin(e)*Math.sin(c)*Math.cos(u),Math.cos(c)-Math.sin(u)*Math.sin(f));return[(0,r.Ux)(l),(0,r.Ux)(f)]}},49179:(t,n,e)=>{"use strict";function r(){return function(){throw new Error("Unimplemented abstract method.")}()}function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t}e.d(n,{O3:()=>r,XW:()=>o,sq:()=>s,q4:()=>u});var i=0;function s(t){return t.ol_uid||(t.ol_uid=String(++i))}var u="5.3.0"}}]);