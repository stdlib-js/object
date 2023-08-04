// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,b=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,b,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var O=String.fromCharCode,E=isNaN,_=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,l,f,s,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(c(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function P(r){var e,t,n;if(!V(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var F,N=Object.prototype,$=N.toString,C=N.__defineGetter__,B=N.__defineSetter__,L=N.__lookupGetter__,R=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var G=F;function W(r,e,t){G(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}var X=/./;function Z(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(r){return"boolean"==typeof r}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return Y&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function D(r,e){return null!=r&&z.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,J="function"==typeof q?q.toStringTag:"";var K=U()?function(r){var e,t,n;if(null==r)return H.call(r);t=r[J],e=D(r,J);try{r[J]=void 0}catch(e){return H.call(r)}return n=H.call(r),e?r[J]=t:delete r[J],n}:function(r){return H.call(r)},Q=Boolean,rr=Boolean.prototype.toString;var er=U();function tr(r){return"object"==typeof r&&(r instanceof Q||(er?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function nr(r){return M(r)||tr(r)}function ir(){return new Function("return this;")()}Z(nr,"isPrimitive",M),Z(nr,"isObject",tr);var or="object"==typeof self?self:null,ar="object"==typeof window?window:null,ur="object"==typeof global?global:null,cr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!M(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ir()}if(cr)return cr;if(or)return or;if(ar)return ar;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=lr.document&&lr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var gr,br=/^\s*function\s*([^(]*)/i;Z(pr,"REGEXP",br),gr=Array.isArray?Array.isArray:function(r){return"[object Array]"===K(r)};var dr=gr;function hr(r){return null!==r&&"object"==typeof r}var yr=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!dr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(hr);function vr(r){var e,t,n,i;if(("Object"===(t=K(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=br.exec(n.toString()))return e[1]}return hr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(hr,"isObjectLikeArray",yr);var wr="function"==typeof X||"object"==typeof sr||"function"==typeof fr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?vr(r).toLowerCase():e};var mr,jr=(mr=Object.assign,"function"===wr(mr)),Sr=Object.assign;function Or(r){return Object.keys(Object(r))}var Er,_r=void 0!==Object.keys;function Tr(r){return"[object Arguments]"===K(r)}Er=function(){return Tr(arguments)}();var kr=Er;function xr(r){return"string"==typeof r}var Ir=String.prototype.valueOf;var Ar=U();function Vr(r){return"object"==typeof r&&(r instanceof String||(Ar?function(r){try{return Ir.call(r),!0}catch(r){return!1}}(r):"[object String]"===K(r)))}function Pr(r){return xr(r)||Vr(r)}function Fr(r){return"number"==typeof r}Z(Pr,"isPrimitive",xr),Z(Pr,"isObject",Vr);var Nr=Number,$r=Nr.prototype.toString;var Cr=U();function Br(r){return"object"==typeof r&&(r instanceof Nr||(Cr?function(r){try{return $r.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function Lr(r){return Fr(r)||Br(r)}function Rr(r){return r!=r}function Gr(r){return Fr(r)&&Rr(r)}function Wr(r){return Br(r)&&Rr(r.valueOf())}function Xr(r){return Gr(r)||Wr(r)}Z(Lr,"isPrimitive",Fr),Z(Lr,"isObject",Br),Z(Xr,"isPrimitive",Gr),Z(Xr,"isObject",Wr);var Zr=Number.POSITIVE_INFINITY,Mr=Nr.NEGATIVE_INFINITY,Yr=Math.floor;function Ur(r){return Yr(r)===r}function Hr(r){return r<Zr&&r>Mr&&Ur(r)}function zr(r){return Fr(r)&&Hr(r)}function Dr(r){return Br(r)&&Hr(r.valueOf())}function qr(r){return zr(r)||Dr(r)}Z(qr,"isPrimitive",zr),Z(qr,"isObject",Dr);var Jr=Object.prototype.propertyIsEnumerable;var Kr=!Jr.call("beep","0");function Qr(r,e){var t;return null!=r&&(!(t=Jr.call(r,e))&&Kr&&Pr(r)?!Gr(e=+e)&&zr(e)&&e>=0&&e<r.length:t)}var re;re=kr?Tr:function(r){return null!==r&&"object"==typeof r&&!dr(r)&&"number"==typeof r.length&&Ur(r.length)&&r.length>=0&&r.length<=4294967295&&D(r,"callee")&&!Qr(r,"callee")};var ee=re,te=Array.prototype.slice;var ne=Qr((function(){}),"prototype"),ie=!Qr({toString:null},"toString");function oe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ur(r.length)&&r.length>=0&&r.length<=9007199254740991}function ae(r,e,t){var n,i;if(!oe(r)&&!xr(r))throw new TypeError(P("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!zr(t))throw new TypeError(P("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Xr(e)){for(;i<n;i++)if(Xr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}function ue(r){return r.constructor&&r.constructor.prototype===r}var ce=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],le="undefined"==typeof window?void 0:window;var fe=function(){var r;if("undefined"===wr(le))return!1;for(r in le)try{-1===ae(ce,r)&&D(le,r)&&null!==le[r]&&"object"===wr(le[r])&&ue(le[r])}catch(r){return!0}return!1}(),se="undefined"!=typeof window;var pe,ge=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];pe=_r?function(){return 2!==(Or(arguments)||"").length}(1,2)?function(r){return ee(r)?Or(te.call(r)):Or(r)}:Or:function(r){var e,t,n,i,o,a,u;if(i=[],ee(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!D(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!hr(r))return i;t=ne&&n}for(o in r)t&&"prototype"===o||!D(r,o)||i.push(String(o));if(ie)for(e=function(r){if(!1===se&&!fe)return ue(r);try{return ue(r)}catch(r){return!1}}(r),u=0;u<ge.length;u++)a=ge[u],e&&"constructor"===a||!D(r,a)||i.push(String(a));return i};var be,de=pe,he=void 0!==Object.getOwnPropertySymbols,ye=Object,ve=ye.getOwnPropertySymbols;be=he?function(r){return ve(ye(r))}:function(){return[]};var we=be;function me(r){var e,t,n;for(e=de(r),t=we(r),n=0;n<t.length;n++)Qr(r,t[n])&&e.push(t[n]);return e}var je,Se=Object;je=jr?Sr:function(r){var e,t,n,i,o,a,u;if(null==r)throw new TypeError(P("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(o=Se(r),a=1;a<arguments.length;a++)if(null!=(e=arguments[a]))for(i=(t=me(Se(e))).length,u=0;u<i;u++)o[n=t[u]]=e[n];return o};var Oe={};return W(Oe,"assign",je),W(Oe,"Object",Se),Oe}));
//# sourceMappingURL=index.js.map
