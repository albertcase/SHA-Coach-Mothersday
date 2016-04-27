function gotoPin(t){var e=$(".wrapper .pin");e.removeClass("current").eq(t).addClass("current")}var Zepto=function(){function t(t){return null==t?String(t):V[G.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(e){return"object"==t(e)}function r(t){return o(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return O.call(t,function(t){return null!=t})}function c(t){return t.length>0?j.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in B?B[t]:B[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||A[u(t)]?e:e+"px"}function h(t){var e,n;return k[t]||(e=N.createElement(t),N.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),k[t]=n),k[t]}function p(t){return"children"in t?$.call(t.children):j.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(C in e)n&&(r(e[C])||Y(e[C]))?(r(e[C])&&!r(t[C])&&(t[C]={}),Y(e[C])&&!Y(t[C])&&(t[C]=[]),d(t[C],e[C],n)):e[C]!==w&&(t[C]=e[C])}function m(t,e){return null==e?j(t):j(t).filter(e)}function g(t,n,i,o){return e(n)?n.call(t,i,o):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",i=n&&n.baseVal!==w;return e===w?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function x(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?j.parseJSON(t):t):t}catch(e){return t}}function b(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)b(t.childNodes[n],e)}var w,C,j,E,T,S,P=[],$=P.slice,O=P.filter,N=window.document,k={},B={},A={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},_=/^\s*<(\w+|!)[^>]*>/,L=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,M=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Z=/^(?:body|html)$/i,D=/([A-Z])/g,q=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],z=N.createElement("table"),F=N.createElement("tr"),I={tr:N.createElement("tbody"),tbody:z,thead:z,tfoot:z,td:F,th:F,"*":N.createElement("div")},H=/complete|loaded|interactive/,U=/^[\w-]*$/,V={},G=V.toString,W={},J=N.createElement("div"),X={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return W.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,o=t.parentNode,r=!o;return r&&(o=J).appendChild(t),i=~W.qsa(o,e).indexOf(t),r&&J.removeChild(t),i},T=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},S=function(t){return O.call(t,function(e,n){return t.indexOf(e)==n})},W.fragment=function(t,e,n){var i,o,a;return L.test(t)&&(i=j(N.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(M,"<$1></$2>")),e===w&&(e=_.test(t)&&RegExp.$1),e in I||(e="*"),a=I[e],a.innerHTML=""+t,i=j.each($.call(a.childNodes),function(){a.removeChild(this)})),r(n)&&(o=j(i),j.each(n,function(t,e){q.indexOf(t)>-1?o[t](e):o.attr(t,e)})),i},W.Z=function(t,e){return t=t||[],t.__proto__=j.fn,t.selector=e||"",t},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,n){var i;if(!t)return W.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&_.test(t))i=W.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return j(n).find(t);i=W.qsa(N,t)}else{if(e(t))return j(N).ready(t);if(W.isZ(t))return t;if(Y(t))i=s(t);else if(o(t))i=[t],t=null;else if(_.test(t))i=W.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return j(n).find(t);i=W.qsa(N,t)}}return W.Z(i,t)},j=function(t,e){return W.init(t,e)},j.extend=function(t){var e,n=$.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},W.qsa=function(t,e){var n,o="#"==e[0],r=!o&&"."==e[0],a=o||r?e.slice(1):e,s=U.test(a);return i(t)&&s&&o?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:$.call(s&&!o?r?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},j.contains=N.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},j.type=t,j.isFunction=e,j.isWindow=n,j.isArray=Y,j.isPlainObject=r,j.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},j.inArray=function(t,e,n){return P.indexOf.call(e,t,n)},j.camelCase=T,j.trim=function(t){return null==t?"":String.prototype.trim.call(t)},j.uuid=0,j.support={},j.expr={},j.map=function(t,e){var n,i,o,r=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return c(r)},j.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},j.grep=function(t,e){return O.call(t,e)},window.JSON&&(j.parseJSON=JSON.parse),j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),j.fn={forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,indexOf:P.indexOf,concat:P.concat,map:function(t){return j(j.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return j($.apply(this,arguments))},ready:function(t){return H.test(N.readyState)&&N.body?t(j):N.addEventListener("DOMContentLoaded",function(){t(j)},!1),this},get:function(t){return t===w?$.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):j(O.call(this,function(e){return W.matches(e,t)}))},add:function(t,e){return j(S(this.concat(j(t,e))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?$.call(t):j(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return j(n)},has:function(t){return this.filter(function(){return o(t)?j.contains(this,t):j(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!o(t)?t:j(t)},last:function(){var t=this[this.length-1];return t&&!o(t)?t:j(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?j(t).filter(function(){var t=this;return P.some.call(n,function(e){return j.contains(e,t)})}):1==this.length?j(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)}):j()},closest:function(t,e){var n=this[0],o=!1;for("object"==typeof t&&(o=j(t));n&&!(o?o.indexOf(n)>=0:W.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return j(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=j.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(S(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return $.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return O.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return j.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=j(t).get(0),o=i.parentNode||this.length>1;return this.each(function(e){j(this).wrapAll(n?t.call(this,e):o?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){j(this[0]).before(t=j(t));for(var e;(e=t.children()).length;)t=e.first();j(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=j(this),o=i.contents(),r=n?t.call(this,e):t;o.length?o.wrapAll(r):i.append(r)})},unwrap:function(){return this.parent().each(function(){j(this).replaceWith(j(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=j(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return j(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return j(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;j(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(o(t))for(C in t)v(this,C,t[C]);else v(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:w},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){v(this,t)},this)})},prop:function(t,e){return t=X[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(D,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?x(i):w},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?j(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=j(this),i=g(this,t,e,n.offset()),o=n.offsetParent().offset(),r={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(r.position="relative"),n.css(r)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i,o=this[0];if(!o)return;if(i=getComputedStyle(o,""),"string"==typeof e)return o.style[T(e)]||i.getPropertyValue(e);if(Y(e)){var r={};return j.each(e,function(t,e){r[e]=o.style[T(e)]||i.getPropertyValue(e)}),r}}var a="";if("string"==t(e))n||0===n?a=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(C in e)e[C]||0===e[C]?a+=u(C)+":"+f(C,e[C])+";":this.each(function(){this.style.removeProperty(u(C))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(j(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){E=[];var n=y(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){j(this).hasClass(t)||E.push(t)},this),E.length&&y(this,n+(n?" ":"")+E.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===w)return y(this,"");E=y(this),g(this,t,e,E).split(/\s+/g).forEach(function(t){E=E.replace(l(t)," ")}),y(this,E.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=j(this),o=g(this,t,n,y(this));o.split(/\s+/g).forEach(function(t){(e===w?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=Z.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(j(t).css("margin-top"))||0,n.left-=parseFloat(j(t).css("margin-left"))||0,i.top+=parseFloat(j(e[0]).css("border-top-width"))||0,i.left+=parseFloat(j(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||N.body;t&&!Z.test(t.nodeName)&&"static"==j(t).css("position");)t=t.offsetParent;return t})}},j.fn.detach=j.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});j.fn[t]=function(o){var r,a=this[0];return o===w?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(r=this.offset())&&r[t]:this.each(function(e){a=j(this),a.css(t,g(this,o,e,a[t]()))})}}),R.forEach(function(e,n){var i=n%2;j.fn[e]=function(){var e,o,r=j.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:W.fragment(n)}),a=this.length>1;return r.length<1?this:this.each(function(t,e){o=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=j.contains(N.documentElement,o);r.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!o)return j(t).remove();o.insertBefore(t,e),s&&b(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},j.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return j(t)[e](this),this}}),W.Z.prototype=j.fn,W.uniq=S,W.deserializeValue=x,j.zepto=W,j}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,r,a){if(n=i(n),n.ns)var s=o(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||r&&e(t.fn)!==e(r)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function o(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function r(t,e){return t.del&&!y&&t.e in x||!!e}function a(t){return b[t]||y&&x[t]||t}function s(n,o,s,c,l,h,p){var d=e(n),m=g[d]||(g[d]=[]);o.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var o=i(e);o.fn=s,o.sel=l,o.e in b&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=h;var d=h||s;o.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},o.i=m.length,m.push(o),"addEventListener"in n&&n.addEventListener(a(o.e),o.proxy,r(o,p))})}function c(t,i,o,s,c){var u=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,o,s).forEach(function(e){delete g[u][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,r(e,c))})})}function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(E,function(t,i){var o=n[t];e[t]=function(){return this[i]=w,o&&o.apply(n,arguments)},e[i]=C}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},b={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:c},t.proxy=function(n,i){var o=2 in arguments&&p.call(arguments,2);if(d(n)){var r=function(){return n.apply(i,o?o.concat(p.call(arguments)):arguments)};return r._zid=e(n),r}if(m(i))return o?(o.unshift(n[i],n),t.proxy.apply(null,o)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},C=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,o,r){var a,u,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,r)}),h):(m(n)||d(o)||o===!1||(o=i,i=n,n=f),(d(i)||i===!1)&&(o=i,i=f),o===!1&&(o=C),h.each(function(f,h){r&&(a=function(t){return c(h,t.type,o),o.apply(this,arguments)}),n&&(u=function(e){var i,r=t(e.target).closest(n,h).get(0);return r&&r!==h?(i=t.extend(l(e),{currentTarget:r,liveFired:h}),(a||o).apply(r,[i].concat(p.call(arguments,1)))):void 0}),s(h,e,o,i,n,u||a)}))},t.fn.off=function(e,n,i){var o=this;return e&&!m(e)?(t.each(e,function(t,e){o.off(t,n,e)}),o):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=C),o.each(function(){c(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){e.type in x&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var o,r;return this.each(function(a,s){o=l(m(e)?t.Event(e):e),o._args=i,o.target=s,t.each(n(s,e.type||e),function(t,e){return r=e.proxy(o),o.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),i=!0;if(e)for(var o in e)"bubbles"==o?i=!!e[o]:n[o]=e[o];return n.initEvent(t,i,!0),u(n)}}(Zepto),function(t){function e(e,n,i){var o=t.Event(n);return t(e).trigger(o,i),!o.isDefaultPrevented()}function n(t,n,i,o){return t.global?e(n||y,i,o):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function o(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function r(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,o){var r=i.context,a="success";i.success.call(r,t,a,e),o&&o.resolveWith(r,[t,a,e]),n(i,r,"ajaxSuccess",[e,i,t]),c(a,e,i)}function s(t,e,i,o,r){var a=o.context;o.error.call(a,i,e,t),r&&r.rejectWith(a,[i,e,t]),n(o,a,"ajaxError",[i,o,t||e]),c(e,i,o)}function c(t,e,i){var r=i.context;i.complete.call(r,e,t),n(i,r,"ajaxComplete",[e,i]),o(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==j?"html":t==C?"json":b.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,i,o){return t.isFunction(n)&&(o=i,i=n,n=void 0),t.isFunction(i)||(o=i,i=void 0),{url:e,data:n,success:i,dataType:o}}function d(e,n,i,o){var r,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,c){r=t.type(c),o&&(n=i?o:o+"["+(s||"object"==r||"array"==r?n:"")+"]"),!o&&a?e.add(c.name,c.value):"array"==r||!i&&"object"==r?d(e,c,i,n):e.add(n,c)})}var m,g,v=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,C="application/json",j="text/html",E=/^\s*$/,T=y.createElement("a");T.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,o,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++v,l=y.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(r,c){clearTimeout(o),t(l).off().remove(),"error"!=r.type&&i?a(i[0],p,e,n):s(null,c||"error",p,e,n),window[u]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),r(p,e)===!1?(h("abort"),p):(window[u]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(o=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:C,xml:"application/xml, text/xml",html:j,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,o=t.extend({},e||{}),c=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===o[m]&&(o[m]=t.ajaxSettings[m]);i(o),o.crossDomain||(n=y.createElement("a"),n.href=o.url,n.href=n.href,o.crossDomain=T.protocol+"//"+T.host!=n.protocol+"//"+n.host),o.url||(o.url=window.location.toString()),h(o);var p=o.dataType,d=/\?.+=\?/.test(o.url);if(d&&(p="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=p&&"jsonp"!=p)||(o.url=f(o.url,"_="+Date.now())),"jsonp"==p)return d||(o.url=f(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,c);var v,x=o.accepts[p],b={},w=function(t,e){b[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,j=o.xhr(),S=j.setRequestHeader;if(c&&c.promise(j),o.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",x||"*/*"),(x=o.mimeType||x)&&(x.indexOf(",")>-1&&(x=x.split(",",2)[0]),j.overrideMimeType&&j.overrideMimeType(x)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&w("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(g in o.headers)w(g,o.headers[g]);if(j.setRequestHeader=w,j.onreadystatechange=function(){if(4==j.readyState){j.onreadystatechange=u,clearTimeout(v);var e,n=!1;if(j.status>=200&&j.status<300||304==j.status||0==j.status&&"file:"==C){p=p||l(o.mimeType||j.getResponseHeader("content-type")),e=j.responseText;try{"script"==p?(0,eval)(e):"xml"==p?e=j.responseXML:"json"==p&&(e=E.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?s(n,"parsererror",j,o,c):a(e,j,o,c)}else s(j.statusText||null,j.status?"error":"abort",j,o,c)}},r(j,o)===!1)return j.abort(),s(null,"abort",j,o,c),j;if(o.xhrFields)for(g in o.xhrFields)j[g]=o.xhrFields[g];var P="async"in o?o.async:!0;j.open(o.type,o.url,P,o.username,o.password);for(g in b)S.apply(j,b[g]);return o.timeout>0&&(v=setTimeout(function(){j.onreadystatechange=u,j.abort(),s(null,"timeout",j,o,c)},o.timeout)),j.send(o.data?o.data:null),j},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var o,r=this,a=e.split(/\s/),s=p(e,n,i),c=s.success;return a.length>1&&(s.url=a[0],o=a[1]),s.success=function(e){r.html(o?t("<div>").html(e.replace(x,"")).find(o):e),c&&c.apply(r,arguments)},t.ajax(s),this};var S=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(S(e)+"="+S(n))},d(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],o=function(t){return t.forEach?t.forEach(o):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,r){n=r.type,e=r.name,e&&"fieldset"!=r.nodeName.toLowerCase()&&!r.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||r.checked)&&o(t(r).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(t,e){var n=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",o=function(){var t=n.clientWidth,e=window.innerHeight;t&&(t/e>750/1334?n.style.fontSize=50*(e/667)+"px":n.style.fontSize=50*(t/375)+"px")};t.addEventListener&&(e.addEventListener(i,o,!1),o())}(document,window),$(document).ready(function(){var t="http://coach-mom.samesamechina.com/";wx.ready(function(){wx.onMenuShareTimeline({title:"大声说出对妈妈的爱，赢取全新Saddle手袋！",link:t,imgUrl:window.location.origin+"/app/images/kv.png",success:function(){_hmt.push(["_trackEvent","buttons","share","back2"])},cancel:function(){}}),wx.onMenuShareAppMessage({title:"COACH致爱母亲节",desc:"大声说出对妈妈的爱，赢取全新Saddle手袋！",link:t,imgUrl:window.location.origin+"/app/images/kv.png",type:"",dataUrl:"",success:function(){_hmt.push(["_trackEvent","buttons","share","Share to Moments"])},cancel:function(){}})})}),Api={isFollow:function(t){Common.msgBox.add("loading..."),$.ajax({url:"/api/status",type:"POST",dataType:"json",success:function(e){return Common.msgBox.remove(),t(e)}})},isLogin:function(t){Common.msgBox.add("loading..."),$.ajax({url:"/api/islogin",type:"POST",dataType:"json",success:function(e){return Common.msgBox.remove(),t(e)}})},writeGreeting:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/greeting",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},ballot:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/ballot",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},sendVerifycode:function(t,e){Common.msgBox.add("短信发送中..."),$.ajax({url:"/api/sendverifycode",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},customerBind:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/customerbind",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},customerRegister:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/customerregister",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},galleryList:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/list",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},getGreeting:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/getgreeting",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},coupon:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/card",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},openidverify:function(t){Common.msgBox.add("loading..."),$.ajax({url:"/api/openidverify",type:"POST",dataType:"json",success:function(e){return Common.msgBox.remove(),t(e)}})}},$(document).ready(function(){$("body").on("touchstart",".btn-alert-ok",function(){Common.alertBox.remove()})}),function(){var t=navigator.userAgent.toLowerCase(),e={goIndexpage:function(t){t?window.location.href="index?id="+t:window.location.href="index"},goReloadHomePage:function(t){t?window.location.href="home?id="+t:window.location.href="home"},goFirstPage:function(){gotoPin(0)},goWriteGreetingPage:function(){gotoPin(0)},goPhotoPage:function(t){t?window.location.href="photo?id="+t:window.location.href="photo"},goGallerypage:function(t){t?window.location.href="gallery?id="+t:window.location.href="gallery"},goMobilePage:function(){gotoPin(1)},goInfoPage:function(){gotoPin(2)},goCouponPage:function(){gotoPin(3)},isWx:function(){return!!/micromessenger/.test(t)},queryString:function(t){var t,e,n,i=location.href,o=i.indexOf("?");i=i.substr(o+1);var r=i.split("&");for(n=0;n<r.length;n++)if(o=r[n].indexOf("="),o>0)return t=r[n].substring(0,o),e=r[n].substr(o+1)},msgBox:{add:function(t,e){e?$("body").append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+t+"</div></div>"):$("body").append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+t+"</div></div>")},remove:function(){$(".ajaxpop").remove()}},alertBox:{add:function(t){$("body").append('<div class="alertpop msgbox"><div class="inner"><div class="msg">'+t+'</div><div class="btn-alert-ok">是</div></div></div>')},remove:function(){$(".alertpop").remove()}},errorMsg:{add:function(t,e){t.find(".error").length?t.find(".error").html(e):t.append('<div class="error">'+e+"</div>")},remove:function(t){t.find(".error").length&&t.find(".error").remove()}}};this.Common=e}.call(this),$(document).ready(function(){var t,e=Common.queryString("id");Api.isLogin(function(n){1==n.status?(t=n.msg.id,e==t?$(".btn-sprite").eq(0).removeClass("btn-joinplay").addClass("btn-gogallery"):$(".btn-sprite").eq(0).addClass("btn-joinplay").removeClass("btn-gogallery"),Api.getGreeting({id:e},function(t){var e=t.msg;1==t.status&&($(".photo-frame").attr("class","photo-frame photo photo-"+e.background),$(".p-inner img").attr("src",e.image),$(".leave-words").html(e.greeting),$(".user-name").html(e.nickname),e.isballot?$(".icon-good").removeClass("notlike"):$(".icon-good").addClass("notlike"),$(".icon-good").html(e.ballot))})):0==n.status?Common.goIndexpage():Common.alertBox.add(n.msg)});var n=!0;$(".btn-sprite").on("click",function(){if($(this).hasClass("btn-gogallery"))_hmt.push(["_trackEvent","buttons","click","back2"]),Common.goGallerypage();else if($(this).hasClass("btn-joinplay"))_hmt.push(["_trackEvent","buttons","click","play2"]),Api.isFollow(function(t){1==t.status?Common.goIndexpage():$(".qrcode-pop").removeClass("hide")});else if($(this).hasClass("btn-like")){if(_hmt.push(["_trackEvent","buttons","click","Like1"]),!n)return;n=!1,Api.ballot({id:e},function(t){if(n=!0,1==t.status){var e=parseInt($(".icon-good").html());$(".icon-good").html(++e),$(".icon-good").removeClass("notlike")}else 0==t.status?Common.goIndexpage():Common.alertBox.add(t.msg)})}})});