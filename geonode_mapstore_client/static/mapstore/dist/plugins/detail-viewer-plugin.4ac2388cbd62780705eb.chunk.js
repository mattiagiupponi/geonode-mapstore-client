(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5121],{14068:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(24852),l=n.n(r),a=n(55033),i=n.n(a),o=n(32425),u=n(83139),c=n(80717);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const f=(0,r.forwardRef)((function(e,t){var n,a,v=e.className,f=void 0===v?"ms-thumbnail":v,p=e.label,g=e.loading,y=e.message,b=e.error,h=e.thumbnail,E=e.removeGlyph,w=void 0===E?"trash":E,O=e.removeTooltipId,j=void 0===O?"removeThumbnail":O,N=e.style,P=void 0===N?{}:N,_=e.maxFileSize,I=void 0===_?5e5:_,Z=e.supportedImageTypes,k=void 0===Z?["image/png","image/jpeg","image/jpg"]:Z,S=e.thumbnailOptions,A=e.dropZoneProps,C=void 0===A?{className:"ms-thumbnail-dropzone",activeClassName:"ms-thumbnail-dropzone-active",rejectClassName:"ms-thumbnail-dropzone-reject"}:A,x=e.onUpdate,T=void 0===x?function(){}:x,D=e.onError,M=void 0===D?function(){}:D,L=e.onRemove,R=e.toolbarButtons,z=(0,r.useRef)(),Y=(n=(0,r.useState)(),a=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}}(n,a)||m(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),F=Y[0],U=Y[1];if((0,r.useEffect)((function(){return z.current=!0,function(){z.current=!1}}),[]),g||F)return l().createElement("div",{className:"dropzone-thumbnail-container".concat(f?" ".concat(f):""," ms-loading")},l().createElement(o.Z,{size:70}));var q=l().createElement(c.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:R||[{glyph:w,visible:!(!L||!h),tooltipId:j,onClick:function(e){var t;null==e||null===(t=e.stopPropagation)||void 0===t||t.call(e),null==L||L()}}]});return l().createElement("div",{className:"dropzone-thumbnail-container".concat(f?" ".concat(f):""),style:P},p,l().createElement(i(),s({},C,{multiple:!1,onDrop:function(e){var t,n=null==e||null===(t=e[0])||void 0===t?void 0:t.type,r=-1!==k.indexOf(n);U(!0),function(e,t){return new Promise((function(n){var r=e;if(null!=r&&r[0]){var l=r[0],a=new FileReader;return a.onload=function(e){return n(t?(0,u.Xq)(e.target.result,t).then((function(e){return{data:e,size:e.length}})):{data:e.target.result,size:l.size})},a.readAsDataURL(l)}return n({data:null})}))}(e,S).then((function(t){var n=t.data,l=t.size;return z.current?(U(!1),r&&n&&l<I?T(n,e):M([].concat(d(r?[]:["FORMAT"]),d(n&&l>=I?["SIZE"]:[])),e)):null})).catch((function(e){return z.current?(U(!1),M(e)):null}))}}),h?l().createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},l().createElement("div",{ref:t,style:{position:"relative",width:"100%",height:"100%",backgroundImage:"url(".concat(h,")"),backgroundSize:null!=S&&S.contain?"contain":"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),l().createElement("div",{className:"dropzone-content-image-added"},y),q):l().createElement("div",{className:"dropzone-content-image"},y,q,b&&l().createElement("div",{className:"dropzone-errors"},b))))}))},25108:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(82904),l=n(27418),a=n.n(l);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.kM:var n=t.property||"enabled";return a()({},e,i({},t.control,a()({},e[t.control],i({},n,!(e[t.control]||{})[n]))));case r.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?a()({},e,i({},t.control,a()({},e[t.control],i({},t.property,void 0)))):a()({},e,i({},t.control,a()({},e[t.control],i({},t.property,t.value))));case r.dc:return a()({},e,i({},t.control,a()({},e[t.control],t.properties)));case r.l:var l=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),o=l.reduce((function(t,n){return a()(t,i({},n,a()({},e[n],!0===e[n].enabled?{enabled:!1}:{})))}),{});return a()({},e,o);default:return e}}},74621:(e,t,n)=>{"use strict";n.d(t,{np:()=>r,L3:()=>l,jl:()=>a,y8:()=>i,qg:()=>o}),n(27418),n(27361);var r=function(e){return e&&e.security&&e.security.user},l=function(e){return r(e)&&r(e).role},a=function(e){return e&&e.security&&e.security.user},i=function(e){return e.security&&e.security.token},o=function(e){return"ADMIN"===l(e)}},83139:(e,t,n)=>{"use strict";n.d(t,{Xq:()=>r,v9:()=>a});var r=function(e,t){return new Promise((function(n,r){var l=t||{},a=l.width,i=void 0===a?64:a,o=l.height,u=void 0===o?64:o,c=l.contain,s=l.type,d=void 0===s?"image/jpeg":s,m=l.quality,v=void 0===m?.5:m,f=new Image;f.crossOrigin="anonymous",f.onload=function(){var e=f.naturalWidth/f.naturalHeight,t=i,r=u,l=i/u,a=document.createElement("canvas");a.setAttribute("width",i),a.setAttribute("height",u),a.style.width=i+"px",a.style.height=u+"px";var o=a.getContext("2d"),s=!c&&e<l||c&&e>l?[t,t/e]:[r*e,r];o.save(),o.translate(t/2,r/2),o.drawImage(f,-s[0]/2,-s[1]/2,s[0],s[1]),o.restore();var m=a.toDataURL(d,v);n(m)},f.onerror=function(e){r(e)},f.src=e}))},l=function(e,t){return new Promise((function(n,r){var l=t||{},a=l.type,i=void 0===a?"image/jpeg":a,o=l.quality,u=void 0===o?.5:o,c=document.createElement("video");c.crossOrigin="anonymous";var s=document.createElement("source"),d=document.createElement("canvas");c.addEventListener("loadedmetadata",(function(){var e=c.videoWidth,t=c.videoHeight;d.setAttribute("width",e),d.setAttribute("height",t),d.style.width=e+"px",d.style.height=t+"px"}),!0),c.addEventListener("loadeddata",(function(){c.currentTime=1}),!0),c.addEventListener("seeked",(function(){d.getContext("2d").drawImage(c,0,0);try{var e=d.toDataURL(i,u);n(e)}catch(e){r(e)}}),!0),c.addEventListener("error",(function(e){r(e)}),!0),c.appendChild(s),c.setAttribute("src",e)}))},a=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,a=/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/,i=null===(e=t.match(a))||void 0===e?void 0:e[1];return i?new Promise((function(e){return e("http://img.youtube.com/vi/".concat(i,"/sddefault.jpg"))})):t.match(/\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i)?l(t).then((function(e){return r(e,n)})):new Promise((function(e,t){return t("Cannot create a thumbnail from the provided source")}))}},10412:(e,t,n)=>{"use strict";n.d(t,{Z:()=>K});var r=n(24852),l=n.n(r),a=n(27856),i=n.n(a),o=n(97842),u=n(93473),c=n(57588),s=n(45697),d=n.n(s),m=function(e){var t,n=e.itemsTab,r=e.transition,a=n.map((function(e,t){return l().createElement(c.Tab,{key:t,eventKey:null==e?void 0:e.title,title:null==e?void 0:e.title},null==e?void 0:e.data)}));return l().createElement(c.Tabs,{defaultActiveKey:null==n||null===(t=n.shift())||void 0===t?void 0:t.title,transition:r,className:"tabs-info",id:"tabs-info"},a)};m.propTypes={itemsTab:d().array,transition:d().bool},m.defaultProps={itemsTab:[],transition:!0};const v=m;var f=function(e){var t=e.itemslist,n=null==t?void 0:t.map((function(e){return e.value&&l().createElement(l().Fragment,null,l().createElement("dt",{className:"DList-cell DList-cell--medium"},l().createElement("strong",null,"".concat(e.label))),l().createElement("dd",{className:"DList-cell"},"".concat(e.value)))}));return l().createElement("dl",{className:"DList DList--2cols"},n)};f.propTypes={itemslist:d().array},f.defaultProps={itemslist:[]};const p=f;var g=n(51605),y=n(5346),b=n(15135),h=n(30381),E=n.n(h),w=n(29896),O=n(23279),j=n.n(O),N=n(74855),P=n.n(N),_=n(72500),I=n.n(_),Z=n(42090),k=n.n(Z);const S=(0,r.forwardRef)((function(e,t){var n=e.text,r=e.className,a=void 0===r?"gn-text-editable":r,i=e.onEdit,o=void 0===i?function(){}:i;return l().createElement(k(),{innerRef:t,className:a,html:n,onClick:function(e){e.stopPropagation()},onChange:function(e){o(e.target.value)}})}));var A=n(14068);function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const x=function(e){var t,n,a=e.defaultImage,i=e.onEdit,u=void 0===i?function(){}:i,c=(t=(0,r.useState)(),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=c[0],d=c[1];return(0,r.useEffect)((function(){d(a)}),[]),l().createElement(l().Fragment,null,l().createElement(A.Z,{thumbnail:s,onUpdate:function(e){d(e),u(e)},message:l().createElement(y.Z,{msgId:"gnviewer.uploadImage"})}),l().createElement("div",{className:"icon-image-preview"},l().createElement(o.Z,{name:"file-upload"})))};var T=["src","style"];function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=(0,b.Z)(P()),U=function(e){var t=e.title,n=e.onEdit;return l().createElement("div",{className:"editContainer"},l().createElement(S,{onEdit:n,text:t}))},q=function(e){var t=e.abstract,n=e.onEdit;return l().createElement("div",{className:"editContainer"},l().createElement(S,{onEdit:n,text:t}))},V=function(e){var t=e.image,n=e.onEdit;return l().createElement("div",{className:"editContainer imagepreview"},l().createElement(x,{onEdit:n,defaultImage:t}))};function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(0===e.indexOf("http"))return e;var t=I().parse(e),n=t.path,r=window.location,l=r.protocol,a=r.host;return"".concat(l,"://").concat(a).concat(n)}function $(e){var t=e.src,n=e.style,a=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,T),i=z((0,r.useState)(),2),o=i[0],u=i[1];return(0,r.useEffect)((function(){t&&!o&&u(!0)}),[t]),l().createElement("img",D({},a,{src:t,onLoad:function(){return u(!1)},onError:function(){return u(!1)},style:L(L(L({},n),o&&{backgroundColor:"transparent"}),{},{objectFit:"contain"})}))}var B=function(e){var t=e.itemslist,n=e.extraItemsList,a=z((0,r.useState)(!1),2),i=a[0],o=a[1];return l().createElement("div",{className:"DList-containner"},l().createElement(p,{itemslist:t}),n.length>0&&l().createElement("a",{className:"moreinfo",href:"javascript:void(0);",onClick:function(){o(!i)}},l().createElement(y.Z,{msgId:"gnviewer.moreinfo"})),n.length>0&&i&&l().createElement(p,{itemslist:n}))};function X(e){var t,n,a,c,s,d,m,f,p,b,h=e.resource,O=e.formatHref,N=e.linkHref,P=e.sectionStyle,_=e.loading,I=e.getTypesInfo,Z=e.editTitle,k=e.editAbstract,S=e.editThumbnail,A=e.activeEditMode,C=e.closePanel,x=e.favorite,T=e.onFavorite,D=e.enableFavorite,M=z((0,r.useState)(!1),2),L=M[0],R=M[1],Y=z((0,r.useState)(!1),2),X=Y[0],K=Y[1],W=function(){R(!L)},G=function(){K(!X)},Q=(0,r.useRef)(),J=(0,r.useRef)(),ee=z((0,r.useState)(!1),2),te=ee[0],ne=ee[1];if((0,r.useEffect)((function(){return J.current=!0,function(){J.current=!1}}),[]),!h&&!_)return null;var re=I(),le=h&&(re[h.doc_type]||re[h.resource_type])||{},ae=le.formatEmbedUrl,ie=void 0===ae?function(e){return null==e?void 0:e.embed_url}:ae,oe=le.formatDetailUrl,ue=void 0===oe?function(e){return null==e?void 0:e.detail_url}:oe,ce=le.icon,se=le.name,de=(null==h?void 0:h.embed_url)&&ie(h),me=(null==h?void 0:h.pk)&&ue(h),ve=null!=h&&h.href&&null!=h&&h.href.includes("download")?null==h?void 0:h.href:void 0,fe=[{label:"Title",value:null==h?void 0:h.title},{label:"Abstract",value:null==h?void 0:h.raw_abstract},{label:"Owner",value:null==h||null===(t=h.owner)||void 0===t?void 0:t.username},{label:"Created",value:E()(null==h?void 0:h.created).format("MMMM Do YYYY")},{label:"Published",value:E()(null==h?void 0:h.date).format("MMMM Do YYYY")},{label:"Last Modified",value:E()(null==h?void 0:h.last_updated).format("MMMM Do YYYY")},{label:"Resource Type",value:null==h?void 0:h.resource_type},{label:"Category",value:null==h?void 0:h.category},{label:"Keywords",value:null==h||null===(n=h.keywords)||void 0===n?void 0:n.join(" ")},{label:"Regions",value:null==h||null===(a=h.regions)||void 0===a?void 0:a.map((function(e){return e.name+" "}))}],pe=[{label:"Point of Contact",value:(null==h||null===(c=h.poc)||void 0===c?void 0:c.first_name)+(null==h||null===(s=h.poc)||void 0===s?void 0:s.last_name)||(null==h||null===(d=h.poc)||void 0===d?void 0:d.username)},{label:"License",value:null==h||null===(m=h.license)||void 0===m?void 0:m.name_long},{label:"Attribution",value:null==h?void 0:h.attribution},{label:"Restriction",value:null==h||null===(f=h.restriction_code_type)||void 0===f?void 0:f.identifier},{label:"Edition",value:null==h?void 0:h.edition},{label:"Maintenance Frequency",value:null==h?void 0:h.maintenance_frequency},{label:"Language",value:null==h?void 0:h.language},{label:"Purpose",value:null==h?void 0:h.raw_purpose},{label:"Data Quality",value:null==h?void 0:h.raw_data_quality_statement},{label:"Temporal extent",value:null!=h&&h.temporal_extent_start?(null==h?void 0:h.temporal_extent_start)+" - ":void 0+(null==h?void 0:h.temporal_extent_end)?null==h?void 0:h.temporal_extent_end:void 0},{label:"Spatial Representation Type",value:null==h||null===(p=h.spatial_representation_type)||void 0===p?void 0:p.identifier},{label:"Supplemental Information",value:null==h?void 0:h.raw_supplemental_information}],ge=[{title:"Info",data:l().createElement(B,{itemslist:fe,extraItemsList:pe})}];return l().createElement("div",{ref:Q,className:"gn-details-panel".concat(_?" loading":""),style:{width:null==P?void 0:P.width}},l().createElement("section",{style:P},l().createElement("div",{className:"gn-details-panel-header"},l().createElement(u.Z,{variant:"default",href:N(),onClick:C,size:"sm"},l().createElement(o.Z,{name:"times"}))),!A&&!S&&l().createElement("div",{className:"gn-details-panel-preview"},l().createElement("div",{className:"gn-loader-placeholder",style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},l().createElement(o.Z,{name:ce})),de?l().createElement("iframe",{key:de,src:de,style:{position:"absolute",width:"100%",height:"100%"},frameBorder:"0"}):de||S?void 0:l().createElement($,{src:null==h?void 0:h.thumbnail_url,style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,backgroundColor:"inherit"}}),_&&l().createElement("div",{className:"gn-details-panel-preview-loader",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center"}},l().createElement(g.Z,{animation:"border",role:"status"},l().createElement("span",{className:"sr-only"},"Loading resource detail...")))),l().createElement("div",{className:"gn-details-panel-content"},S&&l().createElement("div",{className:"gn-details-panel-content-img"},!A&&l().createElement($,{src:null==h?void 0:h.thumbnail_url}),A&&l().createElement("div",{className:"gn-details-panel-preview inediting"}," ",l().createElement(V,{onEdit:S,image:null==h?void 0:h.thumbnail_url})," ")),l().createElement("div",{className:"gn-details-panel-content-text"},l().createElement("div",{className:"gn-details-panel-title"},!L&&l().createElement("h1",null,ce&&l().createElement(l().Fragment,null,l().createElement(o.Z,{name:ce})),null==h?void 0:h.title),A&&!L&&l().createElement("span",{onClick:W},l().createElement(o.Z,{name:"edit"})),L&&l().createElement("h1",null,l().createElement(U,{title:null==h?void 0:h.title,onEdit:Z}),l().createElement("span",{className:"inEdit",onClick:W},l().createElement(o.Z,{name:"check-circle"}))),l().createElement("div",{className:"gn-details-panel-tools"},D&&l().createElement(u.Z,{variant:"default",onClick:j()((function(){T(!x)}),500)},l().createElement(o.Z,{stylePrefix:x?"fa":"far",name:"star"})),ve&&l().createElement(u.Z,{variant:"default",href:ve},l().createElement(o.Z,{name:"download"})),me&&l().createElement(F,{tooltipPosition:"top",tooltipId:te?"gnhome.copiedResourceUrl":"gnhome.copyResourceUrl",text:H(me)},l().createElement(u.Z,{variant:"default",onClick:function(){ne(!0),setTimeout((function(){J.current&&ne(!1)}),700)}},l().createElement(o.Z,{name:"share-alt"}))),me&&!S&&l().createElement(u.Z,{variant:"default",href:me,rel:"noopener noreferrer"},l().createElement(y.Z,{msgId:"gnhome.view".concat(se||"")})))),l().createElement("p",null,(null==h?void 0:h.owner)&&l().createElement(l().Fragment,null,l().createElement("a",{href:O({query:{"filter{owner.username.in}":h.owner.username}})},(0,w.vW)(h.owner))),(null==h?void 0:h.date_type)&&(null==h?void 0:h.date)&&l().createElement(l().Fragment,null," ","/"," ",E()(h.date).format("MMMM Do YYYY"))),l().createElement("div",{className:"gn-details-panel-description"},X&&l().createElement(l().Fragment,null,l().createElement(q,{abstract:null==h?void 0:h.abstract,onEdit:k}),l().createElement("span",{className:"inEdit",onClick:G},l().createElement(o.Z,{name:"check-circle"}))),!X&&null!=h&&h.abstract?l().createElement("span",{className:"gn-details-panel-text",dangerouslySetInnerHTML:{__html:i().sanitize(h.abstract)}}):null,A&&!X&&l().createElement("span",{onClick:G},l().createElement(o.Z,{name:"edit"}))),l().createElement("p",null,(null==h||null===(b=h.category)||void 0===b?void 0:b.identifier)&&l().createElement("div",null,l().createElement(y.Z,{msgId:"gnhome.category"}),":"," ",l().createElement("a",{href:O({query:{"filter{category.identifier.in}":h.category.identifier}})},h.category.identifier))))),Z&&l().createElement("div",{className:"gn-details-panel-info"},l().createElement(v,{itemsTab:ge}))))}X.defaultProps={onClose:function(){},formatHref:function(){return"#"},linkHref:function(){return"#"},width:696,getTypesInfo:w.NN};const K=X},17594:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(24852),l=n.n(r);function a(e){var t=e.name,n=e.className,r=e.style,a=e.stylePrefix,i=void 0===a?"fa":a;return l().createElement("i",{className:"".concat(i," fa-").concat(t).concat(n?" ".concat(n):""),style:r})}a.defaultProps={};const i=a},97842:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(17594)},28261:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(24852),l=n.n(r),a=n(45697),i=n.n(a),o=["id","className","style","children"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.id,n=e.className,r=e.style,a=e.children,i=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,o),c=n?" "+n:"";return l().createElement(l().Fragment,null,l().createElement("div",u({},i,{id:t,className:"gn-spinner".concat(c),style:r}),l().createElement("div",null)),a)}c.propTypes={id:i().string,className:i().string,style:i().object},c.defaultProps={};const s=c},51605:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r.Z});var r=n(28261)},29863:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var r=n(24852),l=n.n(r),a=n(22843),i=n(71703),o=n(22222),u=n(10412),c=n(74621),s=n(43892),d=n(25108),m=n(82904),v=n(72036),f=n(5346),p=n(2811),g=n(93473),y=n(45697),b=n.n(y),h=(0,i.connect)((0,o.P1)([function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading)||!1},function(e){var t,n;return(null==e||null===(t=e.gnresource)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.favorite)||!1}],(function(e,t,n){return{resource:e,loading:t,favorite:n}})),{closePanel:m.Xi.bind(null,"DetailViewer",null),onFavorite:s.gw})(u.Z),E=(0,i.connect)((0,o.P1)([p.V$,p.fg],(function(e,t){return{hide:e||!t}})),{onClick:m.Xi.bind(null,"DetailViewer",null)})((function(e){var t=e.onClick,n=e.hide,r=e.variant,a=e.size;return n?null:l().createElement(g.Z,{variant:r,size:a,onClick:function(){t()}}," ",l().createElement(f.Z,{msgId:"gnviewer.details"}))}));function w(e){var t=e.enabled,n=e.onEditResource,r=e.onEditAbstractResource,a=e.onEditThumbnail,i=e.canEdit,o=e.width,u=e.hide,c=e.user;return u?null:l().createElement("div",{style:{top:0,left:0,width:"100%",height:"100%"}},!t&&l().createElement(h,{editTitle:function(e){n(e)},editAbstract:function(e){r(e)},editThumbnail:function(e){a(e)},activeEditMode:!t&&i,enableFavorite:!!c,sectionStyle:{width:o,position:"fixed"}}))}w.propTypes={width:b().number},w.defaultProps={width:800};var O=(0,i.connect)((0,o.P1)([function(e){var t,n;return(null==e||null===(t=e.controls)||void 0===t||null===(n=t.DetailViewer)||void 0===n?void 0:n.enabled)||!1},p.il,p.V$,p.fg,c.np],(function(e,t,n,r,l){return{enabled:e,canEdit:t,hide:n||!r,user:l}})),{onEditResource:s.Br,onEditAbstractResource:s.bI,onEditThumbnail:s.U5})(w);const j=(0,a.rx)("DetailViewer",{component:O,containers:{ViewerLayout:{name:"DetailViewer",target:"rightColumn",priority:1},ActionNavbar:{name:"DetailViewerButton",Component:E,priority:1}},epics:{},reducers:{gnresource:v.Z,controls:d.Z}})},2811:(e,t,n)=>{"use strict";n.d(t,{fg:()=>r,HG:()=>l,Yj:()=>a,uu:()=>i,UU:()=>o,il:()=>u,ez:()=>c,V$:()=>s});var r=function(e){var t,n,r,l=null==e||null===(t=e.gnresource)||void 0===t?void 0:t.id,a=null==e||null===(n=e.gnresource)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.pk;return l||a},l=function(e){var t,n;return(null==e||null===(t=e.gnresource)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.perms)||[]},a=function(e){var t,n;return(null==e||null===(t=e.gnresource)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.name)||!1},i=function(e){var t,n;return(null==e||null===(t=e.gnresource)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.abstract)||!1},o=function(e){var t,n;return(null==e||null===(t=e.gnresource)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.thumbnail_url)||!1},u=function(e){var t,n,r,l,a=null==e||null===(t=e.gnresource)||void 0===t||null===(n=t.permissions)||void 0===n?void 0:n.canEdit,i=(null==e||null===(r=e.gnresource)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.perms)||[];return a||i.includes("change_resourcebase")},c=function(){return function(e){var t,n,r;return null==e||null===(t=e.security)||void 0===t||null===(n=t.user)||void 0===n||null===(r=n.perms)||void 0===r?void 0:r.includes("add_resource")}},s=function(e){var t;return!(null==e||null===(t=e.gnresource)||void 0===t||!t.isNew)}}}]);