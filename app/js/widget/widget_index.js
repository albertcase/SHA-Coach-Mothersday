function gotoPin(t){var e=$(".wrapper .pin");e.removeClass("current").eq(t).addClass("current")}var Zepto=function(){function t(t){return null==t?String(t):V[W.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(e){return"object"==t(e)}function r(t){return o(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return $.call(t,function(t){return null!=t})}function u(t){return t.length>0?E.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in A?A[t]:A[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||B[c(t)]?e:e+"px"}function p(t){var e,n;return L[t]||(e=N.createElement(t),N.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),L[t]=n),L[t]}function h(t){return"children"in t?O.call(t.children):E.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(C in e)n&&(r(e[C])||Q(e[C]))?(r(e[C])&&!r(t[C])&&(t[C]={}),Q(e[C])&&!Q(t[C])&&(t[C]=[]),d(t[C],e[C],n)):e[C]!==b&&(t[C]=e[C])}function m(t,e){return null==e?E(t):E(t).filter(e)}function g(t,n,i,o){return e(n)?n.call(t,i,o):n}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",i=n&&n.baseVal!==b;return e===b?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function x(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?E.parseJSON(t):t):t}catch(e){return t}}function w(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)w(t.childNodes[n],e)}var b,C,E,j,T,P,S=[],O=S.slice,$=S.filter,N=window.document,L={},A={},B={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},k=/^\s*<(\w+|!)[^>]*>/,q=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,M=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Z=/^(?:body|html)$/i,_=/([A-Z])/g,D=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],F=N.createElement("table"),z=N.createElement("tr"),H={tr:N.createElement("tbody"),tbody:F,thead:F,tfoot:F,td:z,th:z,"*":N.createElement("div")},I=/complete|loaded|interactive/,U=/^[\w-]*$/,V={},W=V.toString,G={},J=N.createElement("div"),X={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return G.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,o=t.parentNode,r=!o;return r&&(o=J).appendChild(t),i=~G.qsa(o,e).indexOf(t),r&&J.removeChild(t),i},T=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return $.call(t,function(e,n){return t.indexOf(e)==n})},G.fragment=function(t,e,n){var i,o,a;return q.test(t)&&(i=E(N.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(M,"<$1></$2>")),e===b&&(e=k.test(t)&&RegExp.$1),e in H||(e="*"),a=H[e],a.innerHTML=""+t,i=E.each(O.call(a.childNodes),function(){a.removeChild(this)})),r(n)&&(o=E(i),E.each(n,function(t,e){D.indexOf(t)>-1?o[t](e):o.attr(t,e)})),i},G.Z=function(t,e){return t=t||[],t.__proto__=E.fn,t.selector=e||"",t},G.isZ=function(t){return t instanceof G.Z},G.init=function(t,n){var i;if(!t)return G.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&k.test(t))i=G.fragment(t,RegExp.$1,n),t=null;else{if(n!==b)return E(n).find(t);i=G.qsa(N,t)}else{if(e(t))return E(N).ready(t);if(G.isZ(t))return t;if(Q(t))i=s(t);else if(o(t))i=[t],t=null;else if(k.test(t))i=G.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==b)return E(n).find(t);i=G.qsa(N,t)}}return G.Z(i,t)},E=function(t,e){return G.init(t,e)},E.extend=function(t){var e,n=O.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},G.qsa=function(t,e){var n,o="#"==e[0],r=!o&&"."==e[0],a=o||r?e.slice(1):e,s=U.test(a);return i(t)&&s&&o?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(s&&!o?r?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},E.contains=N.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},E.type=t,E.isFunction=e,E.isWindow=n,E.isArray=Q,E.isPlainObject=r,E.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},E.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},E.camelCase=T,E.trim=function(t){return null==t?"":String.prototype.trim.call(t)},E.uuid=0,E.support={},E.expr={},E.map=function(t,e){var n,i,o,r=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return u(r)},E.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},E.grep=function(t,e){return $.call(t,e)},window.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),E.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(t){return E(E.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return E(O.apply(this,arguments))},ready:function(t){return I.test(N.readyState)&&N.body?t(E):N.addEventListener("DOMContentLoaded",function(){t(E)},!1),this},get:function(t){return t===b?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return S.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):E($.call(this,function(e){return G.matches(e,t)}))},add:function(t,e){return E(P(this.concat(E(t,e))))},is:function(t){return this.length>0&&G.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==b)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?O.call(t):E(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return E(n)},has:function(t){return this.filter(function(){return o(t)?E.contains(this,t):E(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!o(t)?t:E(t)},last:function(){var t=this[this.length-1];return t&&!o(t)?t:E(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?E(t).filter(function(){var t=this;return S.some.call(n,function(e){return E.contains(e,t)})}):1==this.length?E(G.qsa(this[0],t)):this.map(function(){return G.qsa(this,t)}):E()},closest:function(t,e){var n=this[0],o=!1;for("object"==typeof t&&(o=E(t));n&&!(o?o.indexOf(n)>=0:G.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return E(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=E.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(P(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return h(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return $.call(h(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return E.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=E(t).get(0),o=i.parentNode||this.length>1;return this.each(function(e){E(this).wrapAll(n?t.call(this,e):o?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){E(this[0]).before(t=E(t));for(var e;(e=t.children()).length;)t=e.first();E(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=E(this),o=i.contents(),r=n?t.call(this,e):t;o.length?o.wrapAll(r):i.append(r)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=E(this);(t===b?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return E(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return E(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;E(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(o(t))for(C in t)v(this,C,t[C]);else v(this,t,g(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:b},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){v(this,t)},this)})},prop:function(t,e){return t=X[t]||t,1 in arguments?this.each(function(n){this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(_,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?x(i):b},val:function(t){return 0 in arguments?this.each(function(e){this.value=g(this,t,e,this.value)}):this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=E(this),i=g(this,t,e,n.offset()),o=n.offsetParent().offset(),r={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(r.position="relative"),n.css(r)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i,o=this[0];if(!o)return;if(i=getComputedStyle(o,""),"string"==typeof e)return o.style[T(e)]||i.getPropertyValue(e);if(Q(e)){var r={};return E.each(e,function(t,e){r[e]=o.style[T(e)]||i.getPropertyValue(e)}),r}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(C in e)e[C]||0===e[C]?a+=c(C)+":"+f(C,e[C])+";":this.each(function(){this.style.removeProperty(c(C))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(E(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?S.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){j=[];var n=y(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){E(this).hasClass(t)||j.push(t)},this),j.length&&y(this,n+(n?" ":"")+j.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===b)return y(this,"");j=y(this),g(this,t,e,j).split(/\s+/g).forEach(function(t){j=j.replace(l(t)," ")}),y(this,j.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=E(this),o=g(this,t,n,y(this));o.split(/\s+/g).forEach(function(t){(e===b?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===b?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===b?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=Z.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(E(t).css("margin-top"))||0,n.left-=parseFloat(E(t).css("margin-left"))||0,i.top+=parseFloat(E(e[0]).css("border-top-width"))||0,i.left+=parseFloat(E(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||N.body;t&&!Z.test(t.nodeName)&&"static"==E(t).css("position");)t=t.offsetParent;return t})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});E.fn[t]=function(o){var r,a=this[0];return o===b?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(r=this.offset())&&r[t]:this.each(function(e){a=E(this),a.css(t,g(this,o,e,a[t]()))})}}),R.forEach(function(e,n){var i=n%2;E.fn[e]=function(){var e,o,r=E.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:G.fragment(n)}),a=this.length>1;return r.length<1?this:this.each(function(t,e){o=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=E.contains(N.documentElement,o);r.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!o)return E(t).remove();o.insertBefore(t,e),s&&w(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},E.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return E(t)[e](this),this}}),G.Z.prototype=E.fn,G.uniq=P,G.deserializeValue=x,E.zepto=G,E}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=p++)}function n(t,n,r,a){if(n=i(n),n.ns)var s=o(n.ns);return(g[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||r&&e(t.fn)!==e(r)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function o(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function r(t,e){return t.del&&!y&&t.e in x||!!e}function a(t){return w[t]||y&&x[t]||t}function s(n,o,s,u,l,p,h){var d=e(n),m=g[d]||(g[d]=[]);o.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var o=i(e);o.fn=s,o.sel=l,o.e in w&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=p;var d=p||s;o.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},o.i=m.length,m.push(o),"addEventListener"in n&&n.addEventListener(a(o.e),o.proxy,r(o,h))})}function u(t,i,o,s,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,o,s).forEach(function(e){delete g[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,r(e,u))})})}function c(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(j,function(t,i){var o=n[t];e[t]=function(){return this[i]=b,o&&o.apply(n,arguments)},e[i]=C}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=b)),e}function l(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,p=1,h=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,i){var o=2 in arguments&&h.call(arguments,2);if(d(n)){var r=function(){return n.apply(i,o?o.concat(h.call(arguments)):arguments)};return r._zid=e(n),r}if(m(i))return o?(o.unshift(n[i],n),t.proxy.apply(null,o)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var b=function(){return!0},C=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,o,r){var a,c,p=this;return e&&!m(e)?(t.each(e,function(t,e){p.on(t,n,i,e,r)}),p):(m(n)||d(o)||o===!1||(o=i,i=n,n=f),(d(i)||i===!1)&&(o=i,i=f),o===!1&&(o=C),p.each(function(f,p){r&&(a=function(t){return u(p,t.type,o),o.apply(this,arguments)}),n&&(c=function(e){var i,r=t(e.target).closest(n,p).get(0);return r&&r!==p?(i=t.extend(l(e),{currentTarget:r,liveFired:p}),(a||o).apply(r,[i].concat(h.call(arguments,1)))):void 0}),s(p,e,o,i,n,c||a)}))},t.fn.off=function(e,n,i){var o=this;return e&&!m(e)?(t.each(e,function(t,e){o.off(t,n,e)}),o):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=C),o.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in x&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var o,r;return this.each(function(a,s){o=l(m(e)?t.Event(e):e),o._args=i,o.target=s,t.each(n(s,e.type||e),function(t,e){return r=e.proxy(o),o.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),i=!0;if(e)for(var o in e)"bubbles"==o?i=!!e[o]:n[o]=e[o];return n.initEvent(t,i,!0),c(n)}}(Zepto),function(t){function e(e,n,i){var o=t.Event(n);return t(e).trigger(o,i),!o.isDefaultPrevented()}function n(t,n,i,o){return t.global?e(n||y,i,o):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function o(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function r(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,o){var r=i.context,a="success";i.success.call(r,t,a,e),o&&o.resolveWith(r,[t,a,e]),n(i,r,"ajaxSuccess",[e,i,t]),u(a,e,i)}function s(t,e,i,o,r){var a=o.context;o.error.call(a,i,e,t),r&&r.rejectWith(a,[i,e,t]),n(o,a,"ajaxError",[i,o,t||e]),u(e,i,o)}function u(t,e,i){var r=i.context;i.complete.call(r,e,t),n(i,r,"ajaxComplete",[e,i]),o(i)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==C?"json":w.test(t)?"script":b.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function p(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function h(e,n,i,o){return t.isFunction(n)&&(o=i,i=n,n=void 0),t.isFunction(i)||(o=i,i=void 0),{url:e,data:n,success:i,dataType:o}}function d(e,n,i,o){var r,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){r=t.type(u),o&&(n=i?o:o+"["+(s||"object"==r||"array"==r?n:"")+"]"),!o&&a?e.add(u.name,u.value):"array"==r||!i&&"object"==r?d(e,u,i,n):e.add(n,u)})}var m,g,v=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,C="application/json",E="text/html",j=/^\s*$/,T=y.createElement("a");T.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,o,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++v,l=y.createElement("script"),f=window[c],p=function(e){t(l).triggerHandler("error",e||"abort")},h={abort:p};return n&&n.promise(h),t(l).on("load error",function(r,u){clearTimeout(o),t(l).off().remove(),"error"!=r.type&&i?a(i[0],h,e,n):s(null,u||"error",h,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),r(h,e)===!1?(p("abort"),h):(window[c]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(o=setTimeout(function(){p("timeout")},e.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:C,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,o=t.extend({},e||{}),u=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===o[m]&&(o[m]=t.ajaxSettings[m]);i(o),o.crossDomain||(n=y.createElement("a"),n.href=o.url,n.href=n.href,o.crossDomain=T.protocol+"//"+T.host!=n.protocol+"//"+n.host),o.url||(o.url=window.location.toString()),p(o);var h=o.dataType,d=/\?.+=\?/.test(o.url);if(d&&(h="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=h&&"jsonp"!=h)||(o.url=f(o.url,"_="+Date.now())),"jsonp"==h)return d||(o.url=f(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,u);var v,x=o.accepts[h],w={},b=function(t,e){w[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,E=o.xhr(),P=E.setRequestHeader;if(u&&u.promise(E),o.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",x||"*/*"),(x=o.mimeType||x)&&(x.indexOf(",")>-1&&(x=x.split(",",2)[0]),E.overrideMimeType&&E.overrideMimeType(x)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&b("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(g in o.headers)b(g,o.headers[g]);if(E.setRequestHeader=b,E.onreadystatechange=function(){if(4==E.readyState){E.onreadystatechange=c,clearTimeout(v);var e,n=!1;if(E.status>=200&&E.status<300||304==E.status||0==E.status&&"file:"==C){h=h||l(o.mimeType||E.getResponseHeader("content-type")),e=E.responseText;try{"script"==h?(0,eval)(e):"xml"==h?e=E.responseXML:"json"==h&&(e=j.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?s(n,"parsererror",E,o,u):a(e,E,o,u)}else s(E.statusText||null,E.status?"error":"abort",E,o,u)}},r(E,o)===!1)return E.abort(),s(null,"abort",E,o,u),E;if(o.xhrFields)for(g in o.xhrFields)E[g]=o.xhrFields[g];var S="async"in o?o.async:!0;E.open(o.type,o.url,S,o.username,o.password);for(g in w)P.apply(E,w[g]);return o.timeout>0&&(v=setTimeout(function(){E.onreadystatechange=c,E.abort(),s(null,"timeout",E,o,u)},o.timeout)),E.send(o.data?o.data:null),E},t.get=function(){return t.ajax(h.apply(null,arguments))},t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=h.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var o,r=this,a=e.split(/\s/),s=h(e,n,i),u=s.success;return a.length>1&&(s.url=a[0],o=a[1]),s.success=function(e){r.html(o?t("<div>").html(e.replace(x,"")).find(o):e),u&&u.apply(r,arguments)},t.ajax(s),this};var P=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(P(e)+"="+P(n))},d(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],o=function(t){return t.forEach?t.forEach(o):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,r){n=r.type,e=r.name,e&&"fieldset"!=r.nodeName.toLowerCase()&&!r.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||r.checked)&&o(t(r).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(){"use strict";function t(t,e){var n=[],i=this.options;return i.onProgress&&t&&i.onProgress.call(this,t,e,this.completed.length),this.completed.length+this.errors.length===this.queue.length&&(n.push(this.completed),this.errors.length&&n.push(this.errors),i.onComplete.apply(this,n)),this}var e="addEventListener"in new Image,n=function(t,e){this.options={pipeline:!1,auto:!0,prefetch:!1,onComplete:function(){}},e&&"object"==typeof e&&this.setOptions(e),this.addQueue(t),this.queue.length&&this.options.auto&&this.processQueue()};n.prototype.setOptions=function(t){var e,n=this.options;for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return this},n.prototype.addQueue=function(t){return this.queue=t.slice(),this},n.prototype.reset=function(){return this.completed=[],this.errors=[],this},n.prototype.addEvents=function(n,i,o){var r=this,a=this.options,s=function(){e?(this.removeEventListener("error",u),this.removeEventListener("abort",u),this.removeEventListener("load",c)):this.onerror=this.onabort=this.onload=null},u=function(){s.call(this),r.errors.push(i),a.onError&&a.onError.call(r,i),t.call(r,i),a.pipeline&&r.loadNext(o)},c=function(){s.call(this),r.completed.push(i),t.call(r,i,this),a.pipeline&&r.loadNext(o)};e?(n.addEventListener("error",u,!1),n.addEventListener("abort",u,!1),n.addEventListener("load",c,!1)):(n.onerror=n.onabort=u,n.onload=c)},n.prototype.load=function(t,e){var n=new Image;return this.addEvents(n,t,e),n.src=t,this},n.prototype.loadNext=function(t){return t++,this.queue[t]&&this.load(this.queue[t],t),this},n.prototype.processQueue=function(){var t=0,e=this.queue,n=e.length;if(this.reset(),this.options.pipeline)this.load(e[0],0);else for(;n>t;++t)this.load(e[t],t);return this},"function"==typeof define&&define.amd?define(function(){return n}):this.preLoader=n}.call(this),function(t,e){var n=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",o=function(){var t=n.clientWidth,e=window.innerHeight;t&&(t/e>750/1334?n.style.fontSize=50*(e/667)+"px":n.style.fontSize=50*(t/375)+"px")};t.addEventListener&&(e.addEventListener(i,o,!1),o())}(document,window),$(document).ready(function(){var t="http://coach-mom.samesamechina.com/";wx.ready(function(){wx.onMenuShareTimeline({title:"大声说出对妈妈的爱，赢取全新Saddle手袋！",link:t,imgUrl:window.location.origin+"/app/images/kv.png",success:function(){},cancel:function(){}}),wx.onMenuShareAppMessage({title:"COACH致爱母亲节",desc:"大声说出对妈妈的爱，赢取全新Saddle手袋！",link:t,imgUrl:window.location.origin+"/app/images/kv.png",type:"",dataUrl:"",success:function(){},cancel:function(){}})})}),Api={isFollow:function(t){Common.msgBox.add("loading..."),$.ajax({url:"/api/status",type:"POST",dataType:"json",success:function(e){return Common.msgBox.remove(),t(e)}})},isLogin:function(t){Common.msgBox.add("loading..."),$.ajax({url:"/api/islogin",type:"POST",dataType:"json",success:function(e){return Common.msgBox.remove(),t(e)}})},writeGreeting:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/greeting",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},ballot:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/ballot",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},sendVerifycode:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/sendverifycode",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},customerBind:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/customerbind",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},customerRegister:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/customerregister",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},galleryList:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/list",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},getGreeting:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/getgreeting",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},coupon:function(t,e){Common.msgBox.add("loading..."),$.ajax({url:"/api/card",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),e(t)}})},openidverify:function(t){Common.msgBox.add("loading..."),$.ajax({url:"/api/openidverify",type:"POST",dataType:"json",success:function(e){return Common.msgBox.remove(),t(e)}})}},function(){var t=navigator.userAgent.toLowerCase(),e={goIndexpage:function(t){t?window.location.href="index?id="+t:window.location.href="index"},goReloadHomePage:function(t){t?window.location.href="home?id="+t:window.location.href="home"},goFirstPage:function(){gotoPin(0)},goWriteGreetingPage:function(){gotoPin(0)},goPhotoPage:function(t){t?window.location.href="photo?id="+t:window.location.href="photo"},goGallerypage:function(t){t?window.location.href="gallery?id="+t:window.location.href="gallery"},goMobilePage:function(){gotoPin(1)},goInfoPage:function(){gotoPin(2)},goCouponPage:function(){gotoPin(3)},isWx:function(){return!!/micromessenger/.test(t)},queryString:function(t){var t,e,n,i=location.href,o=i.indexOf("?");i=i.substr(o+1);var r=i.split("&");for(n=0;n<r.length;n++)if(o=r[n].indexOf("="),o>0)return t=r[n].substring(0,o),e=r[n].substr(o+1)},msgBox:{add:function(t,e){e?$("body").append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+t+"</div></div>"):$("body").append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+t+"</div></div>")},remove:function(){$(".ajaxpop").remove()}},errorMsg:{add:function(t,e){t.find(".error").length?t.find(".error").html(e):t.append('<div class="error">'+e+"</div>")},remove:function(t){t.find(".error").length&&t.find(".error").remove()}}};this.Common=e}.call(this),$(document).ready(function(){function t(){$(".loading-wrap").addClass("show");var t="/app",e=[t+"/images/loading-logo.png",t+"/images/logo.png",t+"/images/p1-1.png",t+"/images/p1-t1.png",t+"/images/p3-1.png",t+"/images/p4-1.png",t+"/images/qrcode-follow-text.png",t+"/images/qrcode-follow.png",t+"/images/share-tips.png",t+"/images/share-tips.png",t+"/images/btn-sprite.png",t+"/images/coupon.png",t+"/images/form-btn.png",t+"/images/icon-sprite.png",t+"/images/kv.png",t+"/images/show-1.png",t+"/images/show-2.png",t+"/images/show-3.png",t+"/images/show-4.png",t+"/images/title.png"];new preLoader(e,{onProgress:function(){},onComplete:function(){$(".preloading").remove(1e3),Common.goFirstPage(),$(".btn-gogallery").on("click",function(t){Common.goGallerypage()}),$(".btn-filltext").on("click",function(){Api.isFollow(function(t){1==t.status?Api.isLogin(function(t){console.log(t),1==t.status?t.msg.background?Common.goPhotoPage(t.msg.id):Common.goReloadHomePage():0==t.status?Common.goIndexpage():alert(t.msg);
}):$(".qrcode-pop").removeClass("hide")})}),$(".terms").on("click",function(){$(".terms-pop").removeClass("hide")}),$(".btn-close").on("click",function(){$(".terms-pop").addClass("hide")})}})}t()});