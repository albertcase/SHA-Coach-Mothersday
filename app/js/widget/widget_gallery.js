function wxshare(t){wx.ready(function(){wx.onMenuShareTimeline({title:"大声说出对妈妈的爱，赢取全新Saddle手袋！",link:t,imgUrl:window.location.origin+"/app/images/kv.png",success:function(){_hmt.push(["_trackEvent","buttons","share","Share to Moments"])},cancel:function(){}}),wx.onMenuShareAppMessage({title:"COACH致爱母亲节",desc:"大声说出对妈妈的爱，赢取全新Saddle手袋！",link:t,imgUrl:window.location.origin+"/app/images/kv.png",type:"",dataUrl:"",success:function(){_hmt.push(["_trackEvent","buttons","share","Share to friends"])},cancel:function(){}})})}function gotoPin(t){var n=$(".wrapper .pin");n.removeClass("current").eq(t).addClass("current")}var Zepto=function(){function t(t){return null==t?String(t):V[W.call(t)]||"object"}function n(n){return"function"==t(n)}function e(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(n){return"object"==t(n)}function r(t){return o(t)&&!e(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return $.call(t,function(t){return null!=t})}function c(t){return t.length>0?C.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in A?A[t]:A[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,n){return"number"!=typeof n||L[u(t)]?n:n+"px"}function d(t){var n,e;return B[t]||(n=N.createElement(t),N.body.appendChild(n),e=getComputedStyle(n,"").getPropertyValue("display"),n.parentNode.removeChild(n),"none"==e&&(e="block"),B[t]=e),B[t]}function p(t){return"children"in t?O.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function h(t,n,e){for(j in n)e&&(r(n[j])||Y(n[j]))?(r(n[j])&&!r(t[j])&&(t[j]={}),Y(n[j])&&!Y(t[j])&&(t[j]=[]),h(t[j],n[j],e)):n[j]!==b&&(t[j]=n[j])}function m(t,n){return null==n?C(t):C(t).filter(n)}function g(t,e,i,o){return n(e)?e.call(t,i,o):e}function v(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function y(t,n){var e=t.className||"",i=e&&e.baseVal!==b;return n===b?i?e.baseVal:e:void(i?e.baseVal=n:t.className=n)}function x(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(n){return t}}function w(t,n){n(t);for(var e=0,i=t.childNodes.length;i>e;e++)w(t.childNodes[e],n)}var b,j,C,E,T,S,P=[],O=P.slice,$=P.filter,N=window.document,B={},A={},L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},k=/^\s*<(\w+|!)[^>]*>/,_=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,M=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Z=/^(?:body|html)$/i,D=/([A-Z])/g,R=["val","css","html","text","data","width","height","offset"],z=["after","prepend","before","append"],F=N.createElement("table"),q=N.createElement("tr"),H={tr:N.createElement("tbody"),tbody:F,thead:F,tfoot:F,td:q,th:q,"*":N.createElement("div")},I=/complete|loaded|interactive/,U=/^[\w-]*$/,V={},W=V.toString,J={},X=N.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return J.matches=function(t,n){if(!n||!t||1!==t.nodeType)return!1;var e=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(e)return e.call(t,n);var i,o=t.parentNode,r=!o;return r&&(o=X).appendChild(t),i=~J.qsa(o,n).indexOf(t),r&&X.removeChild(t),i},T=function(t){return t.replace(/-+(.)?/g,function(t,n){return n?n.toUpperCase():""})},S=function(t){return $.call(t,function(n,e){return t.indexOf(n)==e})},J.fragment=function(t,n,e){var i,o,a;return _.test(t)&&(i=C(N.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(M,"<$1></$2>")),n===b&&(n=k.test(t)&&RegExp.$1),n in H||(n="*"),a=H[n],a.innerHTML=""+t,i=C.each(O.call(a.childNodes),function(){a.removeChild(this)})),r(e)&&(o=C(i),C.each(e,function(t,n){R.indexOf(t)>-1?o[t](n):o.attr(t,n)})),i},J.Z=function(t,n){return t=t||[],t.__proto__=C.fn,t.selector=n||"",t},J.isZ=function(t){return t instanceof J.Z},J.init=function(t,e){var i;if(!t)return J.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&k.test(t))i=J.fragment(t,RegExp.$1,e),t=null;else{if(e!==b)return C(e).find(t);i=J.qsa(N,t)}else{if(n(t))return C(N).ready(t);if(J.isZ(t))return t;if(Y(t))i=s(t);else if(o(t))i=[t],t=null;else if(k.test(t))i=J.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==b)return C(e).find(t);i=J.qsa(N,t)}}return J.Z(i,t)},C=function(t,n){return J.init(t,n)},C.extend=function(t){var n,e=O.call(arguments,1);return"boolean"==typeof t&&(n=t,t=e.shift()),e.forEach(function(e){h(t,e,n)}),t},J.qsa=function(t,n){var e,o="#"==n[0],r=!o&&"."==n[0],a=o||r?n.slice(1):n,s=U.test(a);return i(t)&&s&&o?(e=t.getElementById(a))?[e]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(s&&!o?r?t.getElementsByClassName(a):t.getElementsByTagName(n):t.querySelectorAll(n))},C.contains=N.documentElement.contains?function(t,n){return t!==n&&t.contains(n)}:function(t,n){for(;n&&(n=n.parentNode);)if(n===t)return!0;return!1},C.type=t,C.isFunction=n,C.isWindow=e,C.isArray=Y,C.isPlainObject=r,C.isEmptyObject=function(t){var n;for(n in t)return!1;return!0},C.inArray=function(t,n,e){return P.indexOf.call(n,t,e)},C.camelCase=T,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.map=function(t,n){var e,i,o,r=[];if(a(t))for(i=0;i<t.length;i++)e=n(t[i],i),null!=e&&r.push(e);else for(o in t)e=n(t[o],o),null!=e&&r.push(e);return c(r)},C.each=function(t,n){var e,i;if(a(t)){for(e=0;e<t.length;e++)if(n.call(t[e],e,t[e])===!1)return t}else for(i in t)if(n.call(t[i],i,t[i])===!1)return t;return t},C.grep=function(t,n){return $.call(t,n)},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,n){V["[object "+n+"]"]=n.toLowerCase()}),C.fn={forEach:P.forEach,reduce:P.reduce,push:P.push,sort:P.sort,indexOf:P.indexOf,concat:P.concat,map:function(t){return C(C.map(this,function(n,e){return t.call(n,e,n)}))},slice:function(){return C(O.apply(this,arguments))},ready:function(t){return I.test(N.readyState)&&N.body?t(C):N.addEventListener("DOMContentLoaded",function(){t(C)},!1),this},get:function(t){return t===b?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return P.every.call(this,function(n,e){return t.call(n,e,n)!==!1}),this},filter:function(t){return n(t)?this.not(this.not(t)):C($.call(this,function(n){return J.matches(n,t)}))},add:function(t,n){return C(S(this.concat(C(t,n))))},is:function(t){return this.length>0&&J.matches(this[0],t)},not:function(t){var e=[];if(n(t)&&t.call!==b)this.each(function(n){t.call(this,n)||e.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&n(t.item)?O.call(t):C(t);this.forEach(function(t){i.indexOf(t)<0&&e.push(t)})}return C(e)},has:function(t){return this.filter(function(){return o(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!o(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!o(t)?t:C(t)},find:function(t){var n,e=this;return n=t?"object"==typeof t?C(t).filter(function(){var t=this;return P.some.call(e,function(n){return C.contains(n,t)})}):1==this.length?C(J.qsa(this[0],t)):this.map(function(){return J.qsa(this,t)}):C()},closest:function(t,n){var e=this[0],o=!1;for("object"==typeof t&&(o=C(t));e&&!(o?o.indexOf(e)>=0:J.matches(e,t));)e=e!==n&&!i(e)&&e.parentNode;return C(e)},parents:function(t){for(var n=[],e=this;e.length>0;)e=C.map(e,function(t){return(t=t.parentNode)&&!i(t)&&n.indexOf(t)<0?(n.push(t),t):void 0});return m(n,t)},parent:function(t){return m(S(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,n){return $.call(p(n.parentNode),function(t){return t!==n})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(n){return n[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=d(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t);if(this[0]&&!e)var i=C(t).get(0),o=i.parentNode||this.length>1;return this.each(function(n){C(this).wrapAll(e?t.call(this,n):o?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var n;(n=t.children()).length;)t=n.first();C(t).append(this)}return this},wrapInner:function(t){var e=n(t);return this.each(function(n){var i=C(this),o=i.contents(),r=e?t.call(this,n):t;o.length?o.wrapAll(r):i.append(r)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=C(this);(t===b?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(n){var e=this.innerHTML;C(this).empty().append(g(this,t,n,e))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(n){var e=g(this,t,n,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this[0].textContent:null},attr:function(t,n){var e;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(o(t))for(j in t)v(this,j,t[j]);else v(this,t,g(this,n,e,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(e=this[0].getAttribute(t))&&t in this[0]?this[0][t]:e:b},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){v(this,t)},this)})},prop:function(t,n){return t=G[t]||t,1 in arguments?this.each(function(e){this[t]=g(this,n,e,this[t])}):this[0]&&this[0][t]},data:function(t,n){var e="data-"+t.replace(D,"-$1").toLowerCase(),i=1 in arguments?this.attr(e,n):this.attr(e);return null!==i?x(i):b},val:function(t){return 0 in arguments?this.each(function(n){this.value=g(this,t,n,this.value)}):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(n){var e=C(this),i=g(this,t,n,e.offset()),o=e.offsetParent().offset(),r={top:i.top-o.top,left:i.left-o.left};"static"==e.css("position")&&(r.position="relative"),e.css(r)});if(!this.length)return null;var n=this[0].getBoundingClientRect();return{left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(n,e){if(arguments.length<2){var i,o=this[0];if(!o)return;if(i=getComputedStyle(o,""),"string"==typeof n)return o.style[T(n)]||i.getPropertyValue(n);if(Y(n)){var r={};return C.each(n,function(t,n){r[n]=o.style[T(n)]||i.getPropertyValue(n)}),r}}var a="";if("string"==t(n))e||0===e?a=u(n)+":"+f(n,e):this.each(function(){this.style.removeProperty(u(n))});else for(j in n)n[j]||0===n[j]?a+=u(j)+":"+f(j,n[j])+";":this.each(function(){this.style.removeProperty(u(j))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?P.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(n){if("className"in this){E=[];var e=y(this),i=g(this,t,n,e);i.split(/\s+/g).forEach(function(t){C(this).hasClass(t)||E.push(t)},this),E.length&&y(this,e+(e?" ":"")+E.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===b)return y(this,"");E=y(this),g(this,t,n,E).split(/\s+/g).forEach(function(t){E=E.replace(l(t)," ")}),y(this,E.trim())}})},toggleClass:function(t,n){return t?this.each(function(e){var i=C(this),o=g(this,t,e,y(this));o.split(/\s+/g).forEach(function(t){(n===b?!i.hasClass(t):n)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===b?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===b?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],n=this.offsetParent(),e=this.offset(),i=Z.test(n[0].nodeName)?{top:0,left:0}:n.offset();return e.top-=parseFloat(C(t).css("margin-top"))||0,e.left-=parseFloat(C(t).css("margin-left"))||0,i.top+=parseFloat(C(n[0]).css("border-top-width"))||0,i.left+=parseFloat(C(n[0]).css("border-left-width"))||0,{top:e.top-i.top,left:e.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||N.body;t&&!Z.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});C.fn[t]=function(o){var r,a=this[0];return o===b?e(a)?a["inner"+n]:i(a)?a.documentElement["scroll"+n]:(r=this.offset())&&r[t]:this.each(function(n){a=C(this),a.css(t,g(this,o,n,a[t]()))})}}),z.forEach(function(n,e){var i=e%2;C.fn[n]=function(){var n,o,r=C.map(arguments,function(e){return n=t(e),"object"==n||"array"==n||null==e?e:J.fragment(e)}),a=this.length>1;return r.length<1?this:this.each(function(t,n){o=i?n:n.parentNode,n=0==e?n.nextSibling:1==e?n.firstChild:2==e?n:null;var s=C.contains(N.documentElement,o);r.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!o)return C(t).remove();o.insertBefore(t,n),s&&w(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},C.fn[i?n+"To":"insert"+(e?"Before":"After")]=function(t){return C(t)[n](this),this}}),J.Z.prototype=C.fn,J.uniq=S,J.deserializeValue=x,C.zepto=J,C}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function n(t){return t._zid||(t._zid=d++)}function e(t,e,r,a){if(e=i(e),e.ns)var s=o(e.ns);return(g[n(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!s.test(t.ns)||r&&n(t.fn)!==n(r)||a&&t.sel!=a)})}function i(t){var n=(""+t).split(".");return{e:n[0],ns:n.slice(1).sort().join(" ")}}function o(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function r(t,n){return t.del&&!y&&t.e in x||!!n}function a(t){return w[t]||y&&x[t]||t}function s(e,o,s,c,l,d,p){var h=n(e),m=g[h]||(g[h]=[]);o.split(/\s/).forEach(function(n){if("ready"==n)return t(document).ready(s);var o=i(n);o.fn=s,o.sel=l,o.e in w&&(s=function(n){var e=n.relatedTarget;return!e||e!==this&&!t.contains(this,e)?o.fn.apply(this,arguments):void 0}),o.del=d;var h=d||s;o.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var n=h.apply(e,t._args==f?[t]:[t].concat(t._args));return n===!1&&(t.preventDefault(),t.stopPropagation()),n}},o.i=m.length,m.push(o),"addEventListener"in e&&e.addEventListener(a(o.e),o.proxy,r(o,p))})}function c(t,i,o,s,c){var u=n(t);(i||"").split(/\s/).forEach(function(n){e(t,n,o,s).forEach(function(n){delete g[u][n.i],"removeEventListener"in t&&t.removeEventListener(a(n.e),n.proxy,r(n,c))})})}function u(n,e){return(e||!n.isDefaultPrevented)&&(e||(e=n),t.each(E,function(t,i){var o=e[t];n[t]=function(){return this[i]=b,o&&o.apply(e,arguments)},n[i]=j}),(e.defaultPrevented!==f?e.defaultPrevented:"returnValue"in e?e.returnValue===!1:e.getPreventDefault&&e.getPreventDefault())&&(n.isDefaultPrevented=b)),n}function l(t){var n,e={originalEvent:t};for(n in t)C.test(n)||t[n]===f||(e[n]=t[n]);return u(e,t)}var f,d=1,p=Array.prototype.slice,h=t.isFunction,m=function(t){return"string"==typeof t},g={},v={},y="onfocusin"in window,x={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:c},t.proxy=function(e,i){var o=2 in arguments&&p.call(arguments,2);if(h(e)){var r=function(){return e.apply(i,o?o.concat(p.call(arguments)):arguments)};return r._zid=n(e),r}if(m(i))return o?(o.unshift(e[i],e),t.proxy.apply(null,o)):t.proxy(e[i],e);throw new TypeError("expected function")},t.fn.bind=function(t,n,e){return this.on(t,n,e)},t.fn.unbind=function(t,n){return this.off(t,n)},t.fn.one=function(t,n,e,i){return this.on(t,n,e,i,1)};var b=function(){return!0},j=function(){return!1},C=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,n,e){return this.on(n,t,e)},t.fn.undelegate=function(t,n,e){return this.off(n,t,e)},t.fn.live=function(n,e){return t(document.body).delegate(this.selector,n,e),this},t.fn.die=function(n,e){return t(document.body).undelegate(this.selector,n,e),this},t.fn.on=function(n,e,i,o,r){var a,u,d=this;return n&&!m(n)?(t.each(n,function(t,n){d.on(t,e,i,n,r)}),d):(m(e)||h(o)||o===!1||(o=i,i=e,e=f),(h(i)||i===!1)&&(o=i,i=f),o===!1&&(o=j),d.each(function(f,d){r&&(a=function(t){return c(d,t.type,o),o.apply(this,arguments)}),e&&(u=function(n){var i,r=t(n.target).closest(e,d).get(0);return r&&r!==d?(i=t.extend(l(n),{currentTarget:r,liveFired:d}),(a||o).apply(r,[i].concat(p.call(arguments,1)))):void 0}),s(d,n,o,i,e,u||a)}))},t.fn.off=function(n,e,i){var o=this;return n&&!m(n)?(t.each(n,function(t,n){o.off(t,e,n)}),o):(m(e)||h(i)||i===!1||(i=e,e=f),i===!1&&(i=j),o.each(function(){c(this,n,i,e)}))},t.fn.trigger=function(n,e){return n=m(n)||t.isPlainObject(n)?t.Event(n):u(n),n._args=e,this.each(function(){n.type in x&&"function"==typeof this[n.type]?this[n.type]():"dispatchEvent"in this?this.dispatchEvent(n):t(this).triggerHandler(n,e)})},t.fn.triggerHandler=function(n,i){var o,r;return this.each(function(a,s){o=l(m(n)?t.Event(n):n),o._args=i,o.target=s,t.each(e(s,n.type||n),function(t,n){return r=n.proxy(o),o.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){t.fn[n]=function(t){return 0 in arguments?this.bind(n,t):this.trigger(n)}}),t.Event=function(t,n){m(t)||(n=t,t=n.type);var e=document.createEvent(v[t]||"Events"),i=!0;if(n)for(var o in n)"bubbles"==o?i=!!n[o]:e[o]=n[o];return e.initEvent(t,i,!0),u(e)}}(Zepto),function(t){function n(n,e,i){var o=t.Event(e);return t(n).trigger(o,i),!o.isDefaultPrevented()}function e(t,e,i,o){return t.global?n(e||y,i,o):void 0}function i(n){n.global&&0===t.active++&&e(n,null,"ajaxStart")}function o(n){n.global&&!--t.active&&e(n,null,"ajaxStop")}function r(t,n){var i=n.context;return n.beforeSend.call(i,t,n)===!1||e(n,i,"ajaxBeforeSend",[t,n])===!1?!1:void e(n,i,"ajaxSend",[t,n])}function a(t,n,i,o){var r=i.context,a="success";i.success.call(r,t,a,n),o&&o.resolveWith(r,[t,a,n]),e(i,r,"ajaxSuccess",[n,i,t]),c(a,n,i)}function s(t,n,i,o,r){var a=o.context;o.error.call(a,i,n,t),r&&r.rejectWith(a,[i,n,t]),e(o,a,"ajaxError",[i,o,t||n]),c(n,i,o)}function c(t,n,i){var r=i.context;i.complete.call(r,n,t),e(i,r,"ajaxComplete",[n,i]),o(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==j?"json":w.test(t)?"script":b.test(t)&&"xml")||"text"}function f(t,n){return""==n?t:(t+"&"+n).replace(/[&?]{1,2}/,"?")}function d(n){n.processData&&n.data&&"string"!=t.type(n.data)&&(n.data=t.param(n.data,n.traditional)),!n.data||n.type&&"GET"!=n.type.toUpperCase()||(n.url=f(n.url,n.data),n.data=void 0)}function p(n,e,i,o){return t.isFunction(e)&&(o=i,i=e,e=void 0),t.isFunction(i)||(o=i,i=void 0),{url:n,data:e,success:i,dataType:o}}function h(n,e,i,o){var r,a=t.isArray(e),s=t.isPlainObject(e);t.each(e,function(e,c){r=t.type(c),o&&(e=i?o:o+"["+(s||"object"==r||"array"==r?e:"")+"]"),!o&&a?n.add(c.name,c.value):"array"==r||!i&&"object"==r?h(n,c,i,e):n.add(e,c)})}var m,g,v=0,y=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,j="application/json",C="text/html",E=/^\s*$/,T=y.createElement("a");T.href=window.location.href,t.active=0,t.ajaxJSONP=function(n,e){if(!("type"in n))return t.ajax(n);var i,o,c=n.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++v,l=y.createElement("script"),f=window[u],d=function(n){t(l).triggerHandler("error",n||"abort")},p={abort:d};return e&&e.promise(p),t(l).on("load error",function(r,c){clearTimeout(o),t(l).off().remove(),"error"!=r.type&&i?a(i[0],p,n,e):s(null,c||"error",p,n,e),window[u]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),r(p,n)===!1?(d("abort"),p):(window[u]=function(){i=arguments},l.src=n.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),n.timeout>0&&(o=setTimeout(function(){d("timeout")},n.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:j,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(n){var e,o=t.extend({},n||{}),c=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===o[m]&&(o[m]=t.ajaxSettings[m]);i(o),o.crossDomain||(e=y.createElement("a"),e.href=o.url,e.href=e.href,o.crossDomain=T.protocol+"//"+T.host!=e.protocol+"//"+e.host),o.url||(o.url=window.location.toString()),d(o);var p=o.dataType,h=/\?.+=\?/.test(o.url);if(h&&(p="jsonp"),o.cache!==!1&&(n&&n.cache===!0||"script"!=p&&"jsonp"!=p)||(o.url=f(o.url,"_="+Date.now())),"jsonp"==p)return h||(o.url=f(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,c);var v,x=o.accepts[p],w={},b=function(t,n){w[t.toLowerCase()]=[t,n]},j=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,C=o.xhr(),S=C.setRequestHeader;if(c&&c.promise(C),o.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",x||"*/*"),(x=o.mimeType||x)&&(x.indexOf(",")>-1&&(x=x.split(",",2)[0]),C.overrideMimeType&&C.overrideMimeType(x)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&b("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(g in o.headers)b(g,o.headers[g]);if(C.setRequestHeader=b,C.onreadystatechange=function(){if(4==C.readyState){C.onreadystatechange=u,clearTimeout(v);var n,e=!1;if(C.status>=200&&C.status<300||304==C.status||0==C.status&&"file:"==j){p=p||l(o.mimeType||C.getResponseHeader("content-type")),n=C.responseText;try{"script"==p?(0,eval)(n):"xml"==p?n=C.responseXML:"json"==p&&(n=E.test(n)?null:t.parseJSON(n))}catch(i){e=i}e?s(e,"parsererror",C,o,c):a(n,C,o,c)}else s(C.statusText||null,C.status?"error":"abort",C,o,c)}},r(C,o)===!1)return C.abort(),s(null,"abort",C,o,c),C;if(o.xhrFields)for(g in o.xhrFields)C[g]=o.xhrFields[g];var P="async"in o?o.async:!0;C.open(o.type,o.url,P,o.username,o.password);for(g in w)S.apply(C,w[g]);return o.timeout>0&&(v=setTimeout(function(){C.onreadystatechange=u,C.abort(),s(null,"timeout",C,o,c)},o.timeout)),C.send(o.data?o.data:null),C},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var n=p.apply(null,arguments);return n.type="POST",t.ajax(n)},t.getJSON=function(){var n=p.apply(null,arguments);return n.dataType="json",t.ajax(n)},t.fn.load=function(n,e,i){if(!this.length)return this;var o,r=this,a=n.split(/\s/),s=p(n,e,i),c=s.success;return a.length>1&&(s.url=a[0],o=a[1]),s.success=function(n){r.html(o?t("<div>").html(n.replace(x,"")).find(o):n),c&&c.apply(r,arguments)},t.ajax(s),this};var S=encodeURIComponent;t.param=function(n,e){var i=[];return i.add=function(n,e){t.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(S(n)+"="+S(e))},h(i,n,e),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e,i=[],o=function(t){return t.forEach?t.forEach(o):void i.push({name:n,value:t})};return this[0]&&t.each(this[0].elements,function(i,r){e=r.type,n=r.name,n&&"fieldset"!=r.nodeName.toLowerCase()&&!r.disabled&&"submit"!=e&&"reset"!=e&&"button"!=e&&"file"!=e&&("radio"!=e&&"checkbox"!=e||r.checked)&&o(t(r).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(n){t.push(encodeURIComponent(n.name)+"="+encodeURIComponent(n.value))}),t.join("&")},t.fn.submit=function(n){if(0 in arguments)this.bind("submit",n);else if(this.length){var e=t.Event("submit");this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(n,e){return n=n||[],t.extend(n,t.fn),n.selector=e||"",n.__Z=!0,n},isZ:function(n){return"array"===t.type(n)&&"__Z"in n}});try{getComputedStyle(void 0)}catch(n){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(n){return null}}}}(Zepto),function(t,n){var e=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",o=function(){var t=e.clientWidth,n=window.innerHeight;t&&(t/n>750/1334?e.style.fontSize=50*(n/667)+"px":e.style.fontSize=50*(t/375)+"px")};t.addEventListener&&(n.addEventListener(i,o,!1),o())}(document,window),$(document).ready(function(){var t="http://coach-mom.samesamechina.com/";wxshare(t)}),Api={isFollow:function(t){Common.msgBox.add("loading..."),$.ajax({url:"/api/status",type:"POST",dataType:"json",success:function(n){return Common.msgBox.remove(),t(n)}})},isLogin:function(t){Common.msgBox.add("loading..."),$.ajax({url:"/api/islogin",type:"POST",dataType:"json",success:function(n){return Common.msgBox.remove(),t(n)}})},writeGreeting:function(t,n){Common.msgBox.add("loading..."),$.ajax({url:"/api/greeting",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),n(t)}})},ballot:function(t,n){Common.msgBox.add("loading..."),$.ajax({url:"/api/ballot",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),n(t)}})},sendVerifycode:function(t,n){Common.msgBox.add("短信发送中..."),$.ajax({url:"/api/sendverifycode",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),n(t)}})},customerBind:function(t,n){Common.msgBox.add("loading..."),$.ajax({url:"/api/customerbind",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),n(t)}})},customerRegister:function(t,n){Common.msgBox.add("loading..."),$.ajax({url:"/api/customerregister",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),n(t)}})},galleryList:function(t,n){Common.msgBox.add("loading..."),$.ajax({url:"/api/list",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),n(t)}})},getGreeting:function(t,n){Common.msgBox.add("loading..."),$.ajax({url:"/api/getgreeting",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),n(t)}})},coupon:function(t,n){Common.msgBox.add("loading..."),$.ajax({url:"/api/card",type:"POST",dataType:"json",data:t,success:function(t){return Common.msgBox.remove(),n(t)}})},openidverify:function(t){Common.msgBox.add("loading..."),$.ajax({url:"/api/openidverify",type:"POST",dataType:"json",success:function(n){return Common.msgBox.remove(),t(n)}})}},$(document).ready(function(){$("body").on("touchstart",".btn-alert-ok",function(){Common.alertBox.remove()})}),function(){var t=navigator.userAgent.toLowerCase(),n={goIndexpage:function(t){t?window.location.href="index?id="+t:window.location.href="index"},goReloadHomePage:function(t){t?window.location.href="home?id="+t:window.location.href="home"},goFirstPage:function(){gotoPin(0)},goWriteGreetingPage:function(){gotoPin(0)},goPhotoPage:function(t){t?window.location.href="photo?id="+t:window.location.href="photo"},goGallerypage:function(t){t?window.location.href="gallery?id="+t:window.location.href="gallery"},goMobilePage:function(){gotoPin(1)},goInfoPage:function(){gotoPin(2)},goCouponPage:function(){gotoPin(3)},isWx:function(){return!!/micromessenger/.test(t)},queryString:function(t){var t,n,e,i=location.href,o=i.indexOf("?");i=i.substr(o+1);var r=i.split("&");for(e=0;e<r.length;e++)if(o=r[e].indexOf("="),o>0)return t=r[e].substring(0,o),n=r[e].substr(o+1)},msgBox:{add:function(t,n){n?$("body").append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+t+"</div></div>"):$("body").append('<div class="ajaxpop msgbox"><div class="loading"><div class="icon-loading"></div>'+t+"</div></div>")},remove:function(){$(".ajaxpop").remove()}},alertBox:{add:function(t){$("body").append('<div class="alertpop msgbox"><div class="inner"><div class="msg">'+t+'</div><div class="btn-alert-ok">是</div></div></div>')},remove:function(){$(".alertpop").remove()}},errorMsg:{add:function(t,n){t.find(".error").length?t.find(".error").html(n):t.append('<div class="error">'+n+"</div>")},remove:function(t){t.find(".error").length&&t.find(".error").remove()}}};this.Common=n}.call(this),$(document).ready(function(){var t,n=1,e=!0;Api.galleryList({nowpage:n,rowcount:6},function(n){if(e=!0,1==n.status){var i=n.msg.list,o="";t=parseInt(n.msg.totalpage);for(var r=0;r<i.length;r++)o=o+'<li class="item"><div class="top-banner"><span class="user-name">'+i[r].nickname+'</span><span class="icon-good">'+i[r].ballot+'</span></div><div class="photo-wrap"><div class="photo-frame photo photo-1"><div class="block-photo"><div class="p-inner"><img src="'+i[r].image+'" alt=""/></div></div><div class="leave-words writing-words">'+i[r].greeting+"</div></div></div></li>";$(".gallery-list").append(o)}else 0==n.status?Common.goIndexpage():Common.alertBox.add(n.msg)}),$(window).on("scroll",function(){if($(document).height()-$(window).height()<=$(window).scrollTop()+100){if(!e)return;if(e=!1,n++,n>t)return;Api.galleryList({nowpage:n,rowcount:6},function(t){if(e=!0,1==t.status){for(var n=t.msg.list,i="",o=0;o<n.length;o++)i='<li class="item"><div class="top-banner"><span class="user-name">'+n[o].nickname+'</span><span class="icon-good">'+n[o].ballot+'</span></div><div class="photo-wrap"><div class="photo-frame photo photo-1"><div class="block-photo"><div class="p-inner"><img src='+n[o].image+' alt=""/></div></div><div class="leave-words writing-words">'+n[o].greeting+"</div></div></div></li>";$(".gallery-list").append(i)}else 0==t.status?Common.goIndexpage():Common.alertBox.add(t.msg)})}})});