!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var i in o)("object"==typeof exports?exports:t)[i]=o[i]}}(window,(function(){return function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=11)}([function(t,e,o){var i=o(13);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(15)(i,n);i.locals&&(t.exports=i.locals)},,,,,,,,,,,function(t,e,o){t.exports=o(17)},function(t,e,o){"use strict";var i=o(0);o.n(i).a},function(t,e,o){(t.exports=o(14)(!1)).push([t.i,".VueHoverfade-enter-active,.VueHoverfade-leave-active{transition:opacity .5s}.VueHoverfade-enter,.VueHoverfade-leave-to{opacity:0}.vh--outer[v-cloak]{display:none}.vh--flex{display:flex}.vh--jc{justify-content:center}.vh--ai{align-items:center}.vh--rel{position:relative}.vh--abs{position:absolute}.vh--outer{display:inline-block;line-height:0;font-family:Arial,Helvetica,sans-serif;color:#fff}.vh--holder{overflow:hidden;touch-action:manipulation;cursor:zoom-in;align-items:flex-start}.vh--image{top:0;left:0;pointer-events:none}.vh--message{bottom:20px;background-color:rgba(0,0,0,.65);padding:8px 15px;border-radius:50px;text-align:center;line-height:initial}.vh--icon{transform:rotate(-45deg);display:block;font-size:20px;margin-right:5px;line-height:20px}.vh--close{top:5px;left:5px;line-height:0;background-color:rgba(0,0,0,.65);border-radius:50px;font-size:23px;cursor:pointer;height:28px;width:28px}.vh--loading-o{top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.65);pointer-events:none}.vh--loading{top:50%;left:50%;font-size:60px;line-height:60px;animation:vuehoverzoomspin 1s linear infinite;width:36px;height:70px}.vh--none{opacity:0}@keyframes vuehoverzoomspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",i=t[3];if(!i)return o;if(e&&"function"==typeof btoa){var n=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[o].concat(r).concat([n]).join("\n")}var s;return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(i[r]=!0)}for(n=0;n<t.length;n++){var s=t[n];"number"==typeof s[0]&&i[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},function(t,e,o){var i,n,r={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=i.apply(this,arguments)),n}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var i=a.call(this,t,o);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),u=null,l=0,h=[],d=o(16);function p(t,e){for(var o=0;o<t.length;o++){var i=t[o],n=r[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(y(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(y(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function f(t,e){for(var o=[],i={},n=0;n<t.length;n++){var r=t[n],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):o.push(i[s]={id:s,parts:[a]})}return o}function m(t,e){var o=c(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=h[h.length-1];if("top"===t.insertAt)i?i.nextSibling?o.insertBefore(e,i.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),h.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=c(t.insertAt.before,o);o.insertBefore(e,n)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return o.nc}();i&&(t.attrs.nonce=i)}return b(e,t.attrs),m(t,e),e}function b(t,e){Object.keys(e).forEach((function(o){t.setAttribute(o,e[o])}))}function y(t,e){var o,i,n,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var s=l++;o=u||(u=g(e)),i=x.bind(null,o,s,!1),n=x.bind(null,o,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),m(t,e),e}(e),i=A.bind(null,o,e),n=function(){v(o),o.href&&URL.revokeObjectURL(o.href)}):(o=g(e),i=_.bind(null,o),n=function(){v(o)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=f(t,e);return p(o,e),function(t){for(var i=[],n=0;n<o.length;n++){var s=o[n];(a=r[s.id]).refs--,i.push(a)}t&&p(f(t,e),e);for(n=0;n<i.length;n++){var a;if(0===(a=i[n]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete r[a.id]}}}};var z,w=(z=[],function(t,e){return z[t]=e,z.filter(Boolean).join("\n")});function x(t,e,o,i){var n=o?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,n);else{var r=document.createTextNode(n),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function _(t,e){var o=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}function A(t,e,o){var i=o.css,n=o.sourceMap,r=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||r)&&(i=d(i)),n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,i=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var n,r=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")}))}},function(t,e,o){"use strict";o.r(e);var i={name:"ImageZoom",directives:{clickOutside:{bind:function(t,e,o){t.clickOutsideEvent=function(i){t==i.target||t.contains(i.target)||o.context[e.expression](i)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}}},data:function(){return{touch:!1,zoomed:!1,x:0,y:0,touchPosition:0,origX:0,origY:0,offsetLeft:0,offsetTop:0,zoomWidth:0,options:{zoomAmount:0,zoom:!1,zoomWebp:!1},loaded:!1,loading:!1,webp_supported:!1}},props:{regular:String,regularWebp:String,zoom:String,zoomWebp:String,imgClass:String,alt:String,zoomAmount:{type:Number,default:0},clickZoom:Boolean,hoverMessage:{type:String,default:'<span class="vh--icon">&#9906;</span> Hover to zoom'},touchMessage:{type:String,default:'<span class="vh--icon">&#9906;</span> Tap to zoom'},clickMessage:{type:String,default:'<span class="vh--icon">&#9906;</span> Click to zoom'},breakpoints:Array,lazyload:Boolean,lazyloadPlaceholder:{type:String,default:""}},mounted:function(){this.check_webp_feature("lossy",function(t,e){e&&(this.webp_supported=!0)}.bind(this)),this.options.zoomAmount=this.zoomAmount,this.options.zoom=this.zoom,this.options.zoomWebp=this.zoomWebp,this.zoom||(this.options.zoom=this.regular,this.options.zoomAmount=2),!this.zoomWebp&&this.regularWebp&&(this.options.zoomWebp=this.regularWebp,this.options.zoomAmount=2),("ontouchstart"in window||navigator.msMaxTouchPoints)&&(this.touch=!0);var t,e,o=0,i=0,n=this.$refs["vue-hover-zs"];n.addEventListener("touchstart",function(n){if(this.zoomed){n.cancelable&&n.preventDefault();var r=n.changedTouches[0];t=r.pageX-o,e=r.pageY-i}}.bind(this)),n.addEventListener("touchmove",function(o){if(this.zoomed){var i=o.changedTouches[0];this.x=i.pageX-t,this.y=i.pageY-e,i.pageX-t<=this.origX-this.zoomWidth&&(this.x=this.origX-this.zoomWidth),i.pageX-t>=0&&(this.x=-1),i.pageY-e<=this.origY-this.options.zoomAmount*this.origY&&(this.y=this.origY-this.options.zoomAmount*this.origY),i.pageY-e>=0&&(this.y=-1),this.touchPosition="translate3d("+this.x+"px,"+this.y+"px,0)"}}.bind(this)),n.addEventListener("touchend",function(n){if(this.zoomed){var r=n.changedTouches[0];o=r.pageX-t,i=r.pageY-e}}.bind(this))},created:function(){var t=this;this.breakpoints&&window.addEventListener("resize",this.debounce((function(){t.resize()}),500))},destroyed:function(){this.breakpoints&&window.removeEventListener("resize",this.resize())},methods:{debounce:function(t,e){var o,i=this;return function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var a=i;clearTimeout(o),o=setTimeout((function(){return t.apply(a,r)}),e)}},resize:function(){this.loaded=!1},check_webp_feature:function(t,e){var o=new Image;o.onload=function(){var i=o.width>0&&o.height>0;e(t,i)},o.onerror=function(){e(t,!1)},o.src="data:image/webp;base64,"+{lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}[t]},loadImage:function(t,e){var o=new Image;o.onload=e,o.src=t},loadZoom:function(){this.offset(),0!=this.options.zoomAmount&&(this.zoomWidth=this.origX*this.options.zoomAmount),this.loaded?(this.zoomed=!0,0==this.options.zoomAmount&&(this.options.zoomAmount=this.zoomWidth/this.origX)):this.zoomLoad()},zoomLoad:function(){this.loading=!0;var t=this.options.zoom;this.breakpoints&&this.breakpoints.forEach((function(e,o){window.innerWidth>=e.width&&(t=e.zoom?e.zoom:e.regular)})),this.webp_supported&&this.options.zoomWebp&&(t=this.options.zoomWebp,this.breakpoints&&this.breakpoints.forEach((function(e,o){window.innerWidth>=e.width&&(t=e.zoomWebp?e.zoomWebp:e.regularWebp)}))),this.loadImage(t,function(t){0==this.options.zoomAmount&&(this.zoomWidth=t.target.width,this.options.zoomAmount=t.target.width/this.origX),this.loaded=!0,this.loading=!1,this.zoomed=!0}.bind(this))},isZoom:function(t,e){("hover"==e&&!this.clickZoom||"click"==e&&this.clickZoom||"touch"==e&&this.touch)&&(this.zoomed=!1,1==t&&this.loadZoom())},offset:function(){this.origX=parseFloat(this.$refs["vue-hover-zs"].offsetWidth),this.origY=parseFloat(this.$refs["vue-hover-zs"].offsetHeight)},mousePos:function(t){this.offsetLeft=window.pageXOffset+this.$refs["vue-hover-zs"].getBoundingClientRect().left,this.offsetTop=window.pageYOffset+this.$refs["vue-hover-zs"].getBoundingClientRect().top,this.touch||this.loading||(this.loaded||0!=this.options.zoomAmount?(this.x=(t.pageX-this.offsetLeft)*(this.options.zoomAmount-1),this.y=(t.pageY-this.offsetTop)*(this.options.zoomAmount-1)):(this.offset(),this.zoomLoad()))}}};o(12);var n=function(t,e,o,i,n,r,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=o,u._compiled=!0),i&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):n&&(c=a?function(){n.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.isZoom,expression:"isZoom"}],staticClass:"vh--outer vh--rel"},[o("div",{ref:"vue-hover-zs",staticClass:"vh--holder vh--rel vh--flex vh--jc",on:{mouseenter:function(e){return t.isZoom(!0,"hover")},mouseleave:function(e){return t.isZoom(!1,"hover")},mousemove:t.mousePos,click:function(e){return t.isZoom(!t.zoomed,"click")}}},[t.lazyload?o("picture",{class:{"vh--none":t.zoomed}},[t._l(t.breakpoints,(function(e){return[e.regularWebp?o("source",{attrs:{"data-srcset":e.regularWebp,type:"image/webp",media:"(min-width:"+e.width+"px)"}}):t._e(),t._v(" "),e.regular?o("source",{attrs:{"data-rcset":e.regular,media:"(min-width:"+e.width+"px)"}}):t._e()]})),t._v(" "),t.regularWebp?o("source",{attrs:{"data-srcset":t.regularWebp,type:"image/webp"}}):t._e(),t._v(" "),o("img",{class:t.imgClass+" lazyload",attrs:{src:t.lazyloadPlaceholder,"data-src":t.regular,alt:t.alt}})],2):o("picture",{class:{"vh--none":t.zoomed}},[t._l(t.breakpoints,(function(e){return[e.regularWebp?o("source",{attrs:{srcset:e.regularWebp,type:"image/webp",media:"(min-width:"+e.width+"px)"}}):t._e(),t._v(" "),e.regular?o("source",{attrs:{srcset:e.regular,media:"(min-width:"+e.width+"px)"}}):t._e()]})),t._v(" "),t.regularWebp?o("source",{attrs:{srcset:t.regularWebp,type:"image/webp"}}):t._e(),t._v(" "),o("img",{class:t.imgClass,attrs:{src:t.regular,alt:t.alt}})],2),t._v(" "),t.zoomed?o("picture",[t._l(t.breakpoints,(function(e){return[e.zoomWebp?o("source",{attrs:{srcset:e.zoomWebp,type:"image/webp",media:"(min-width:"+e.width+"px)"}}):e.regularWebp?o("source",{attrs:{srcset:e.regularWebp,type:"image/webp",media:"(min-width:"+e.width+"px)"}}):t._e(),t._v(" "),e.zoom?o("source",{attrs:{srcset:e.zoom,media:"(min-width:"+e.width+"px)"}}):e.regular?o("source",{attrs:{srcset:e.regular,media:"(min-width:"+e.width+"px)"}}):t._e()]})),t._v(" "),t.options.zoomWebp?o("source",{attrs:{src:"options.zoomWebp",type:"image/webp"}}):t._e(),t._v(" "),t.touch?o("img",{staticClass:"vh--image vh--abs",style:"width:"+t.zoomWidth+"px;transform:"+t.touchPosition,attrs:{src:t.options.zoom}}):o("img",{staticClass:"vh--image vh--abs",style:{width:t.zoomWidth+"px",transform:"translate(-"+t.x+"px,-"+t.y+"px)"},attrs:{src:t.options.zoom}})],2):t._e(),t._v(" "),o("transition",{attrs:{name:"VueHoverfade"}},[t.zoomed||t.loading||t.clickZoom||t.touch?t.zoomed||t.loading||t.touch?t.zoomed||t.loading||!t.touch?t._e():o("div",{staticClass:"vh--message vh--abs vh--flex vh--jc vh--ai",domProps:{innerHTML:t._s(t.touchMessage)}}):o("div",{staticClass:"vh--message vh--abs vh--flex vh--jc vh--ai",domProps:{innerHTML:t._s(t.clickMessage)}}):o("div",{staticClass:"vh--message vh--abs vh--flex vh--jc vh--ai",domProps:{innerHTML:t._s(t.hoverMessage)}})])],1),t._v(" "),o("transition",{attrs:{name:"VueHoverfade"}},[t.touch&&t.zoomed&&t.loaded?o("div",{staticClass:"vh--close vh--abs vh--flex vh--jc vh--ai",domProps:{innerHTML:t._s("&times;")},on:{click:function(e){e.stopPropagation(),t.zoomed=!1}}}):t.loading?o("div",{staticClass:"vh--loading-o vh--abs vh--flex vh--jc vh--ai"},[o("div",{staticClass:"vh--loading",domProps:{innerHTML:t._s("&#9696;")}})]):t._e()])],1)}),[],!1,null,null,null).exports;e.default=n}])}));