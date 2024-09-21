// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,y,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,S=Array.isArray;function O(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _(e){var r,t,n,o,a,c,l,f,s,p,g,d,b;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,f=0;f<e.length;f++)if("string"==typeof(n=e[f]))c+=n;else{if(r=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+m(b):m(b)+p)),c+=n.arg||"",l+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,t,n,i;for(t=[],i=0,n=T.exec(e);n;)(r=e.slice(i,T.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=T.lastIndex,n=T.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return _.apply(null,r)}var V,A=Object.prototype,P=A.toString,F=A.__defineGetter__,$=A.__defineSetter__,C=A.__lookupGetter__,N=A.__lookupSetter__;V=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&$&&$.call(e,r,t.set),e};var B=V;function L(e,r,t){B(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var R=/./;function G(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return X&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function U(e,r){return null!=e&&Y.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,z="function"==typeof H?H.toStringTag:"",D=Z()?function(e){var r,t,n;if(null==e)return M.call(e);t=e[z],r=U(e,z);try{e[z]=void 0}catch(r){return M.call(e)}return n=M.call(e),r?e[z]=t:delete e[z],n}:function(e){return M.call(e)},q=Boolean,J=Boolean.prototype.toString,K=Z();function Q(e){return"object"==typeof e&&(e instanceof q||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function ee(e){return W(e)||Q(e)}G(ee,"isPrimitive",W),G(ee,"isObject",Q);var re="object"==typeof self?self:null,te="object"==typeof window?window:null,ne="object"==typeof globalThis?globalThis:null,ie=function(e){if(arguments.length){if(!W(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ne)return ne;if(re)return re;if(te)return te;throw new Error("unexpected error. Unable to resolve global object.")}(),oe=ie.document&&ie.document.childNodes,ae=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var ce,le=/^\s*function\s*([^(]*)/i;G(ue,"REGEXP",le),ce=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};var fe=ce;function se(e){return null!==e&&"object"==typeof e}var pe=function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!fe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(se);function ge(e){var r,t,n,i;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=le.exec(n.toString()))return r[1]}return se(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(se,"isObjectLikeArray",pe);var de,be="function"==typeof R||"object"==typeof ae||"function"==typeof oe?function(e){return ge(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ge(e).toLowerCase():r},he=(de=Object.assign,"function"===be(de)),ye=Object.assign;function ve(e){return Object.keys(Object(e))}var we,me=void 0!==Object.keys;function je(e){return"[object Arguments]"===D(e)}we=function(){return je(arguments)}();var Se=we;function Oe(e){return"string"==typeof e}var Ee=String.prototype.valueOf,_e=Z();function Te(e){return"object"==typeof e&&(e instanceof String||(_e?function(e){try{return Ee.call(e),!0}catch(e){return!1}}(e):"[object String]"===D(e)))}function ke(e){return Oe(e)||Te(e)}function xe(e){return"number"==typeof e}G(ke,"isPrimitive",Oe),G(ke,"isObject",Te);var Ie=Number,Ve=Ie.prototype.toString,Ae=Z();function Pe(e){return"object"==typeof e&&(e instanceof Ie||(Ae?function(e){try{return Ve.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function Fe(e){return xe(e)||Pe(e)}function $e(e){return e!=e}function Ce(e){return xe(e)&&$e(e)}function Ne(e){return Pe(e)&&$e(e.valueOf())}function Be(e){return Ce(e)||Ne(e)}G(Fe,"isPrimitive",xe),G(Fe,"isObject",Pe),G(Be,"isPrimitive",Ce),G(Be,"isObject",Ne);var Le=Number.POSITIVE_INFINITY,Re=Ie.NEGATIVE_INFINITY,Ge=Math.floor;function We(e){return Ge(e)===e}function Xe(e){return e<Le&&e>Re&&We(e)}function Ze(e){return xe(e)&&Xe(e)}function Me(e){return Pe(e)&&Xe(e.valueOf())}function Ye(e){return Ze(e)||Me(e)}G(Ye,"isPrimitive",Ze),G(Ye,"isObject",Me);var Ue,He=Object.prototype.propertyIsEnumerable,ze=!He.call("beep","0");function De(e,r){var t;return null!=e&&(!(t=He.call(e,r))&&ze&&ke(e)?!Ce(r=+r)&&Ze(r)&&r>=0&&r<e.length:t)}Ue=Se?je:function(e){return null!==e&&"object"==typeof e&&!fe(e)&&"number"==typeof e.length&&We(e.length)&&e.length>=0&&e.length<=4294967295&&U(e,"callee")&&!De(e,"callee")};var qe=Ue,Je=Array.prototype.slice,Ke=De((function(){}),"prototype"),Qe=!De({toString:null},"toString"),er=9007199254740991;function rr(e,r,t){var n,i;if(!function(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&We(e.length)&&e.length>=0&&e.length<=er}(e)&&!Oe(e))throw new TypeError(I("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Ze(t))throw new TypeError(I("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Be(r)){for(;i<n;i++)if(Be(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}function tr(e){return e.constructor&&e.constructor.prototype===e}var nr,ir=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],or="undefined"==typeof window?void 0:window,ar=function(){var e;if("undefined"===be(or))return!1;for(e in or)try{-1===rr(ir,e)&&U(or,e)&&null!==or[e]&&"object"===be(or[e])&&tr(or[e])}catch(e){return!0}return!1}(),ur="undefined"!=typeof window,cr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];nr=me?function(){return 2!==(ve(arguments)||"").length}(1,2)?function(e){return qe(e)?ve(Je.call(e)):ve(e)}:ve:function(e){var r,t,n,i,o,a,u;if(i=[],qe(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!U(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof e)&&!se(e))return i;t=Ke&&n}for(o in e)t&&"prototype"===o||!U(e,o)||i.push(String(o));if(Qe)for(r=function(e){if(!1===ur&&!ar)return tr(e);try{return tr(e)}catch(e){return!1}}(e),u=0;u<cr.length;u++)a=cr[u],r&&"constructor"===a||!U(e,a)||i.push(String(a));return i};var lr,fr=nr,sr=void 0!==Object.getOwnPropertySymbols,pr=Object,gr=pr.getOwnPropertySymbols;lr=sr?function(e){return gr(pr(e))}:function(){return[]};var dr=lr;function br(e){var r,t,n;for(r=fr(e),t=dr(e),n=0;n<t.length;n++)De(e,t[n])&&r.push(t[n]);return r}var hr,yr=Object;hr=he?ye:function(e){var r,t,n,i,o,a,u;if(null==e)throw new TypeError(I("invalid argument. First argument must be a non-null object. Value: `%s`.",e));for(o=yr(e),a=1;a<arguments.length;a++)if(null!=(r=arguments[a]))for(i=(t=br(yr(r))).length,u=0;u<i;u++)o[n=t[u]]=r[n];return o};var vr={};return L(vr,"assign",hr),L(vr,"Object",yr),vr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r();
//# sourceMappingURL=browser.js.map