/*! For license information please see 4.c363f53f.chunk.js.LICENSE.txt */
(this["webpackJsonpcomfy-cartel-website"]=this["webpackJsonpcomfy-cartel-website"]||[]).push([[4],{149:function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(P){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new _(r||[]);return a._invoke=function(e,t,n){var r=f;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return C()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?d:v,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=s;var f="suspendedStart",v="suspendedYield",p="executing",d="completed",h={};function m(){}function y(){}function b(){}var g={};g[a]=function(){return this};var w=Object.getPrototypeOf,O=w&&w(w(k([])));O&&O!==n&&r.call(O,a)&&(g=O);var j=b.prototype=m.prototype=Object.create(g);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(o,a,i,c){var u=l(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function L(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function k(e){if(e){var n=e[a];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:C}}function C(){return{value:t,done:!0}}return y.prototype=j.constructor=b,b.constructor=y,y.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(j),e},e.awrap=function(e){return{__await:e}},E(x.prototype),x.prototype[i]=function(){return this},e.AsyncIterator=x,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new x(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(j),u(j,c,"Generator"),j[a]=function(){return this},j.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:k(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},151:function(e,t,n){e.exports=n(149)},152:function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,u,"next",e)}function u(e){r(i,o,a,c,u,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return o}))},153:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},157:function(e,t,n){"use strict";var r=n(1);t.a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t}},158:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,a,i,c){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,c],l=0;(u=new Error(t.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},161:function(e,t,n){},164:function(e,t,n){"use strict";var r=n(55),o=n(56);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(1)),i=(0,r(n(57)).default)(a.createElement("path",{d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"}),"MusicNote");t.default=i},165:function(e,t,n){"use strict";var r=n(55),o=n(56);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(1)),i=(0,r(n(57)).default)(a.createElement("path",{d:"M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z"}),"MusicOff");t.default=i},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1),o=n(157);function a(e){var t=Object(o.a)(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1);function o(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},168:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},169:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},212:function(e,t,n){"use strict";var r=n(3),o=n(25),a=n(166),i=n(1),c=n.n(i);var u=function(e,t){var n=Object(i.useRef)(!0);Object(i.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},s=n(157),l=n(167);function f(e){var t=function(e){var t=Object(i.useRef)(e);return t.current=e,t}(e);Object(i.useEffect)((function(){return function(){return t.current()}}),[])}var v=Math.pow(2,31)-1;function p(e,t,n){var r=n-Date.now();e.current=r<=v?setTimeout(t,r):setTimeout((function(){return p(e,t,n)}),v)}function d(){var e=Object(l.a)(),t=Object(i.useRef)();return f((function(){return clearTimeout(t.current)})),Object(i.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(n(),o<=v?t.current=setTimeout(r,o):p(t,r,Date.now()+o))},clear:n}}),[])}var h=n(153),m=n.n(h),y=n(70),b=n(8),g=n.n(b);n(158);function w(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function O(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function j(e,t){return Object.keys(t).reduce((function(n,a){var c,u=n,s=u[w(a)],l=u[a],f=Object(o.a)(u,[w(a),a].map(O)),v=t[a],p=function(e,t,n){var r=Object(i.useRef)(void 0!==e),o=Object(i.useState)(t),a=o[0],c=o[1],u=void 0!==e,s=r.current;return r.current=u,!u&&s&&a!==t&&c(t),[u?e:a,Object(i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(l,s,e[v]),d=p[0],h=p[1];return Object(r.a)({},f,((c={})[a]=d,c[v]=h,c))}),e)}n(21);function E(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function x(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function L(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}E.__suppressDeprecationWarning=!0,x.__suppressDeprecationWarning=!0,L.__suppressDeprecationWarning=!0;var N=/-(.)/g;var S=c.a.createContext({});S.Consumer,S.Provider;function _(e,t){var n=Object(i.useContext)(S);return e||n[t]||t}var k=function(e){return e[0].toUpperCase()+(t=e,t.replace(N,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var C=function(e,t){var n=void 0===t?{}:t,a=n.displayName,i=void 0===a?k(e):a,u=n.Component,s=n.defaultProps,l=c.a.forwardRef((function(t,n){var a=t.className,i=t.bsPrefix,s=t.as,l=void 0===s?u||"div":s,f=Object(o.a)(t,["className","bsPrefix","as"]),v=_(i,e);return c.a.createElement(l,Object(r.a)({ref:n,className:m()(a,v)},f))}));return l.defaultProps=s,l.displayName=i,l}("carousel-caption"),P=c.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,i=e.bsPrefix,u=e.children,s=e.className,l=Object(o.a)(e,["as","bsPrefix","children","className"]),f=m()(s,_(i,"carousel-item"));return c.a.createElement(a,Object(r.a)({ref:t},l,{className:f}),u)}));P.displayName="CarouselItem";var T=P;function I(e,t){var n=0;return c.a.Children.map(e,(function(e){return c.a.isValidElement(e)?t(e,n++):e}))}var M=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),null)};function D(e){return!e||"#"===e.trim()}var R=c.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"a":n,i=e.disabled,u=e.onKeyDown,s=Object(o.a)(e,["as","disabled","onKeyDown"]),l=function(e){var t=s.href,n=s.onClick;(i||D(t))&&e.preventDefault(),i?e.stopPropagation():n&&n(e)};return D(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),i&&(s.tabIndex=-1,s["aria-disabled"]=!0),c.a.createElement(a,Object(r.a)({ref:t},s,{onClick:l,onKeyDown:M((function(e){" "===e.key&&(e.preventDefault(),l(e))}),u)}))}));R.displayName="SafeAnchor";var A=R,F=n(168);function V(e,t){return function(e){var t=Object(F.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var G=/([A-Z])/g;var K=/^ms-/;function U(e){return function(e){return e.replace(G,"-$1").toLowerCase()}(e).replace(K,"-ms-")}var X=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var Y=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(U(t))||V(e).getPropertyValue(U(t));Object.keys(t).forEach((function(o){var a=t[o];a||0===a?!function(e){return!(!e||!X.test(e))}(o)?n+=U(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(U(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},z=n(169),H=!1,W=!1;try{var J={get passive(){return H=!0},get once(){return W=H=!0}};z.a&&(window.addEventListener("test",J,J),window.removeEventListener("test",J,!0))}catch(ie){}var Z=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!W){var o=r.once,a=r.capture,i=n;!W&&o&&(i=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=i),e.addEventListener(t,i,H?r:a)}e.addEventListener(t,n,r)};var $=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var B=function(e,t,n,r){return Z(e,t,n,r),function(){$(e,t,n,r)}};function q(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),a=B(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function Q(e,t,n,r){null==n&&(n=function(e){var t=Y(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=q(e,n,r),a=B(e,"transitionend",t);return function(){o(),a()}}function ee(e,t){var n=Y(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function te(e,t){var n=ee(e,"transitionDuration"),r=ee(e,"transitionDelay"),o=Q(e,(function(n){n.target===e&&(o(),t(n))}),n+r)}var ne={bsPrefix:g.a.string,as:g.a.elementType,slide:g.a.bool,fade:g.a.bool,controls:g.a.bool,indicators:g.a.bool,activeIndex:g.a.number,onSelect:g.a.func,onSlide:g.a.func,onSlid:g.a.func,interval:g.a.number,keyboard:g.a.bool,pause:g.a.oneOf(["hover",!1]),wrap:g.a.bool,touch:g.a.bool,prevIcon:g.a.node,prevLabel:g.a.string,nextIcon:g.a.node,nextLabel:g.a.string},re={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:c.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:c.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function oe(e,t){var n=j(e,{activeIndex:"onSelect"}),l=n.as,f=void 0===l?"div":l,v=n.bsPrefix,p=n.slide,h=n.fade,b=n.controls,g=n.indicators,w=n.activeIndex,O=n.onSelect,E=n.onSlide,x=n.onSlid,L=n.interval,N=n.keyboard,S=n.onKeyDown,k=n.pause,C=n.onMouseOver,P=n.onMouseOut,T=n.wrap,M=n.touch,D=n.onTouchStart,R=n.onTouchMove,F=n.onTouchEnd,V=n.prevIcon,G=n.prevLabel,K=n.nextIcon,U=n.nextLabel,X=n.className,Y=n.children,z=Object(o.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),H=_(v,"carousel"),W=Object(i.useRef)(null),J=Object(i.useState)("next"),Z=J[0],$=J[1],B=Object(i.useState)(!1),q=B[0],Q=B[1],ee=Object(i.useState)(!1),ne=ee[0],re=ee[1],oe=Object(i.useState)(w||0),ae=oe[0],ie=oe[1];ne||w===ae||(W.current?$(W.current):$((w||0)>ae?"next":"prev"),p&&re(!0),ie(w||0)),Object(i.useEffect)((function(){W.current&&(W.current=null)}));var ce,ue=0;!function(e,t){var n=0;c.a.Children.forEach(e,(function(e){c.a.isValidElement(e)&&t(e,n++)}))}(Y,(function(e,t){++ue,t===w&&(ce=e.props.interval)}));var se=Object(s.a)(ce),le=Object(i.useCallback)((function(e){if(!ne){var t=ae-1;if(t<0){if(!T)return;t=ue-1}W.current="prev",O&&O(t,e)}}),[ne,ae,O,T,ue]),fe=Object(a.a)((function(e){if(!ne){var t=ae+1;if(t>=ue){if(!T)return;t=0}W.current="next",O&&O(t,e)}})),ve=Object(i.useRef)();Object(i.useImperativeHandle)(t,(function(){return{element:ve.current,prev:le,next:fe}}));var pe=Object(a.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ve.current)&&fe()})),de="next"===Z?"left":"right";u((function(){p||(E&&E(ae,de),x&&x(ae,de))}),[ae]);var he=H+"-item-"+Z,me=H+"-item-"+de,ye=Object(i.useCallback)((function(e){!function(e){e.offsetHeight}(e),E&&E(ae,de)}),[E,ae,de]),be=Object(i.useCallback)((function(){re(!1),x&&x(ae,de)}),[x,ae,de]),ge=Object(i.useCallback)((function(e){if(N&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void le(e);case"ArrowRight":return e.preventDefault(),void fe(e)}S&&S(e)}),[N,S,le,fe]),we=Object(i.useCallback)((function(e){"hover"===k&&Q(!0),C&&C(e)}),[k,C]),Oe=Object(i.useCallback)((function(e){Q(!1),P&&P(e)}),[P]),je=Object(i.useRef)(0),Ee=Object(i.useRef)(0),xe=d(),Le=Object(i.useCallback)((function(e){je.current=e.touches[0].clientX,Ee.current=0,"hover"===k&&Q(!0),D&&D(e)}),[k,D]),Ne=Object(i.useCallback)((function(e){e.touches&&e.touches.length>1?Ee.current=0:Ee.current=e.touches[0].clientX-je.current,R&&R(e)}),[R]),Se=Object(i.useCallback)((function(e){if(M){var t=Ee.current;Math.abs(t)>40&&(t>0?le(e):fe(e))}"hover"===k&&xe.set((function(){Q(!1)}),L||void 0),F&&F(e)}),[M,k,le,fe,xe,L,F]),_e=null!=L&&!q&&!ne,ke=Object(i.useRef)();Object(i.useEffect)((function(){var e,t;if(_e)return ke.current=window.setInterval(document.visibilityState?pe:fe,null!=(e=null!=(t=se.current)?t:L)?e:void 0),function(){null!==ke.current&&clearInterval(ke.current)}}),[_e,fe,se,L,pe]);var Ce=Object(i.useMemo)((function(){return g&&Array.from({length:ue},(function(e,t){return function(e){O&&O(t,e)}}))}),[g,ue,O]);return c.a.createElement(f,Object(r.a)({ref:ve},z,{onKeyDown:ge,onMouseOver:we,onMouseOut:Oe,onTouchStart:Le,onTouchMove:Ne,onTouchEnd:Se,className:m()(X,H,p&&"slide",h&&H+"-fade")}),g&&c.a.createElement("ol",{className:H+"-indicators"},I(Y,(function(e,t){return c.a.createElement("li",{key:t,className:t===ae?"active":void 0,onClick:Ce?Ce[t]:void 0})}))),c.a.createElement("div",{className:H+"-inner"},I(Y,(function(e,t){var n=t===ae;return p?c.a.createElement(y.a,{in:n,onEnter:n?ye:void 0,onEntered:n?be:void 0,addEndListener:te},(function(t){return c.a.cloneElement(e,{className:m()(e.props.className,n&&"entered"!==t&&he,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&me)})})):c.a.cloneElement(e,{className:m()(e.props.className,n&&"active")})}))),b&&c.a.createElement(c.a.Fragment,null,(T||0!==w)&&c.a.createElement(A,{className:H+"-control-prev",onClick:le},V,G&&c.a.createElement("span",{className:"sr-only"},G)),(T||w!==ue-1)&&c.a.createElement(A,{className:H+"-control-next",onClick:fe},K,U&&c.a.createElement("span",{className:"sr-only"},U))))}var ae=c.a.forwardRef(oe);ae.displayName="Carousel",ae.propTypes=ne,ae.defaultProps=re,ae.Caption=C,ae.Item=T;t.a=ae}}]);