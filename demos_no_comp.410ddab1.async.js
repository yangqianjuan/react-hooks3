(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"82LI":function(e,t,r){"use strict";r.r(t);var n=r("iojd"),a=r("ahKI"),u=r.n(a),c=r("qPJ8");t["default"]=function(){var e=Object(c["g"])(),t=Object(n["a"])(e,2),r=t[0],a=t[1],l=a.setLeft,o=a.setRight,i=a.toggle;return u.a.createElement("div",null,u.a.createElement("p",null,"state:","".concat(r)),u.a.createElement("div",null,u.a.createElement("button",{onClick:l},"setLeft")),u.a.createElement("div",null,u.a.createElement("button",{onClick:o},"setRight")),u.a.createElement("div",null,u.a.createElement("button",{onClick:i},"toggle")))}},CgOj:function(e,t,r){"use strict";r.r(t);var n=r("ahKI"),a=r.n(n),u=r("zIOf"),c=r.n(u),l=r("qPJ8");t["default"]=()=>{var e=()=>new Promise((e=>{setTimeout((()=>{e(c.a.mock("@name"))}),1e3)})),t=Object(l["e"])(e),r=t.loading,n=t.data,u=t.error;return r?a.a.createElement("div",null,"\u52a0\u8f7d\u4e2d\u3002\u3002\u3002"):u?a.a.createElement("div",null,"error:",u):n?a.a.createElement("div",null,"data:",n):void 0}},"Dr+N":function(e,t,r){"use strict";r.r(t);var n=r("iojd"),a=r("ahKI"),u=r.n(a),c=r("qPJ8");t["default"]=function(){var e=Object(c["g"])("left","right"),t=Object(n["a"])(e,2),r=t[0],a=t[1],l=a.setLeft,o=a.setRight,i=a.toggle;return u.a.createElement("div",null,u.a.createElement("p",null,"state:","".concat(r)),u.a.createElement("div",null,u.a.createElement("button",{onClick:l},"setLeft")),u.a.createElement("div",null,u.a.createElement("button",{onClick:o},"setRight")),u.a.createElement("div",null,u.a.createElement("button",{onClick:i},"toggle")))}},INwW:function(e,t,r){"use strict";r.r(t);var n=r("ahKI"),a=r.n(n),u=r("qPJ8");t["default"]=()=>{var e=Object(u["h"])();return a.a.createElement("div",null,a.a.createElement("p",null,Date.now()),a.a.createElement("button",{onClick:e},"update"))}},OCTU:function(e,t,r){"use strict";r.r(t);var n=r("iojd"),a=r("ahKI"),u=r.n(a),c=r("qPJ8");t["default"]=function(){var e=Object(a["useState"])(0),t=Object(n["a"])(e,2),r=t[0],l=t[1],o=Object(c["c"])(r);return Object(a["useEffect"])((()=>{var e=setInterval((()=>{console.log(o.current),l((e=>o.current+1))}),1e3);return()=>clearInterval(e)}),[]),u.a.createElement("div",null,r)}},dA01:function(e,t,r){"use strict";r.r(t);var n=r("ahKI"),a=r.n(n),u=r("qPJ8");t["default"]=()=>{Object(u["f"])("\u81ea\u5b9a\u4e49\u7684\u6807\u9898");return a.a.createElement("div",null,"\u8bbe\u7f6e\u9875\u9762\u7684hooks")}},eWij:function(e,t,r){"use strict";r.r(t);var n=r("iojd"),a=r("ahKI"),u=r.n(a),c=r("qPJ8");t["default"]=()=>{var e=Object(a["useState"])(),t=Object(n["a"])(e,2),r=t[0],l=t[1],o=Object(c["b"])(r,1e3);return u.a.createElement("div",null,u.a.createElement("input",{type:"text",value:r,onChange:e=>l(e.target.value),style:{width:180}}),u.a.createElement("p",null,o))}},qPJ8:function(e,t,r){"use strict";r.d(t,"g",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"f",(function(){return f})),r.d(t,"c",(function(){return m})),r.d(t,"b",(function(){return O})),r.d(t,"d",(function(){return h})),r.d(t,"h",(function(){return E})),r.d(t,"e",(function(){return L}));var n=r("iojd"),a=r("ahKI");function u(e,t){var r=Object(a["useState"])(e),u=Object(n["a"])(r,2),c=u[0],l=u[1],o=Object(a["useMemo"])((()=>{var r=void 0===t?!e:t,n=()=>l(e),a=()=>l(r),u=()=>l((t=>t===e?r:e));return{setLeft:n,setRight:a,toggle:u}}),[]);return[c,o]}var c=u;function l(e,t){var r=c(e),u=Object(n["a"])(r,2),l=u[0],o=u[1],i=o.setLeft,s=o.setRight,d=o.toggle,v=Object(a["useMemo"])((()=>{var e=()=>i(),t=()=>s();return{setTrue:e,setFalse:t,toggle:d}}),[]);return[l,v]}var o=l;function i(e){var t=Object(a["useRef"])(e);return t.current=e,t}function s(e){var t=i(e);Object(a["useEffect"])((()=>()=>t.current()))}var d={restoreTitle:!1};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,r=Object(a["useRef"])(document.title);Object(a["useEffect"])((()=>{document.title=e}),[e]),s((()=>{t.restoreTitle&&(document.title=r.current)}))}var f=v;function b(e){var t=Object(a["useRef"])(e);return t.current=e,t}var m=b;function j(e,t){var r=Object(a["useState"])(e),u=Object(n["a"])(r,2),c=u[0],l=u[1];return Object(a["useEffect"])((()=>{var r=setTimeout((()=>{l(e)}),t);return()=>clearTimeout(r)}),[e,t]),c}var O=j,g=e=>{var t=Object(a["useRef"])(e);t.current=Object(a["useMemo"])((()=>e),[e]);var r=Object(a["useRef"])();return r.current||(r.current=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.current.apply(this,[...r])}),r.current},h=g,E=()=>{var e=Object(a["useState"])({}),t=Object(n["a"])(e,2),r=t[1];return()=>r({})},p=r("G3cz"),w=r("J9RX"),k=r("DBVu"),I=r("GAyR"),P=["stopNow","returnNow"];class C{constructor(e,t,r,n){this.serviceRef=e,this.options=t,this.update=r,this.initState=n,this.pluginImpls=void 0,this.count=0,this.state={loading:!1,data:void 0,params:void 0,error:void 0},this.state=Object(p["a"])(Object(p["a"])({},this.state),{},{loading:!1},n)}setState(e){this.count+=1,this.state=Object(p["a"])(Object(p["a"])({},this.state),e),this.update()}runPluginHandler(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=this.pluginImpls.map((t=>{var n;return null===(n=t[e])||void 0===n?void 0:n.call(t,r)})).filter(Boolean);return Object.assign({},...a)}runAsync(){var e=arguments,t=this;return Object(I["a"])(Object(k["a"])().mark((function r(){var n,a,u,c,l,o,i,s,d,v,f,b,m,j;return Object(k["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:for(t.count+=1,t.count,u=e.length,c=new Array(u),l=0;l<u;l++)c[l]=e[l];if(o=t.runPluginHandler("onBefore",...c),i=o.stopNow,s=void 0!==i&&i,d=o.returnNow,v=void 0!==d&&d,f=Object(w["a"])(o,P),!s){r.next=6;break}return r.abrupt("return",new Promise((()=>{})));case 6:if(t.setState(Object(p["a"])(Object(p["a"])({loading:!0},t.state),f)),!v){r.next=9;break}return r.abrupt("return",Promise.resolve(f.data));case 9:return null===(n=t.options)||void 0===n||null===(a=n.onBefore)||void 0===a||a.call(n,...c),r.prev=10,b=t.runPluginHandler("onRequest",t.serviceRef.current,c),m=b.servicePromise,m||(m=t.serviceRef.current(c)),r.next=15,m;case 15:return j=r.sent,t.setState({data:j,error:void 0,loading:!1}),r.abrupt("return",j);case 20:throw r.prev=20,r.t0=r["catch"](10),t.setState({error:r.t0,data:void 0,loading:!1}),r.t0;case 24:case"end":return r.stop()}}),r,null,[[10,20]])})))()}run(){return this.runAsync(...arguments)}}var R=C,J=["manual"],y=(e,t,r)=>{var n=t.manual,u=void 0!==n&&n,c=Object(w["a"])(t,J),l=Object(p["a"])({manual:u},c),o=m(e),i=E(),s=Object(a["useMemo"])((()=>{var e=r.map((e=>{var t;return null===(t=e.onInit)||void 0===t?void 0:t.call(e,l)})).filter(Boolean);return new R(o,l,i,Object.assign({},...e))}),[]);return s.pluginImpls=r.map((e=>e(s,l))),{loading:s.state.loading,params:s.state.params,data:s.state.data,error:s.state.error,run:h(s.run.bind(void 0,s))}},q=y,S=(e,t)=>{var r=t.manual,n=t.ready,u=void 0===n||n,c=t.defaultParams,l=void 0===c?[]:c,o=t.refreshDeps,i=void 0===o?[]:o,s=t.refreshDepsAction,d=Object(a["useRef"])(!1);return d.current=!1,Object(a["useEffect"])((()=>{!r&&u&&(d.current=!0,e.run(...l))}),[u]),Object(a["useEffect"])((()=>{d.current||r||(s?s(...l):e.refresh(...l))}),[...i]),{onBefore:()=>{if(!u)return{stopNow:!0}}}};S.onInit=e=>{var t=e.manual,r=e.ready,n=void 0===r||r,a=e.defaultParams,u=void 0===a?[]:a;return{loading:!t&&n,params:u}};var K=S,T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return q(e,t,[...r,K])},A=T,L=A},s868:function(e,t,r){"use strict";r.r(t);var n=r("iojd"),a=r("ahKI"),u=r.n(a),c=r("EZs7"),l=r("qPJ8");t["default"]=()=>{var e=Object(a["useState"])(0),t=Object(n["a"])(e,2),r=t[0],o=t[1],i=Object(a["useCallback"])((()=>{c["a"].info("callback:".concat(r))}),[r]);console.log(l["d"]);var s=Object(l["d"])((()=>{c["a"].info("memorizedL".concat(r))}));return u.a.createElement("div",null,u.a.createElement("button",{onClick:()=>{o((e=>e+1))}},"count++"),u.a.createElement("div",null,u.a.createElement("button",{onClick:i},"useCallback"),u.a.createElement("button",{onClick:s},"useMemorizedFn")))}},yoie:function(e,t,r){"use strict";r.r(t);var n=r("iojd"),a=r("ahKI"),u=r.n(a),c=r("qPJ8");t["default"]=function(){var e=Object(c["a"])(!0),t=Object(n["a"])(e,2),r=t[0],a=t[1],l=a.setTrue,o=a.setFalse,i=a.toggle;return u.a.createElement("div",null,u.a.createElement("p",null,"state:","".concat(r)),u.a.createElement("div",null,u.a.createElement("button",{onClick:l},"setTrue")),u.a.createElement("div",null,u.a.createElement("button",{onClick:o},"setFalse")),u.a.createElement("div",null,u.a.createElement("button",{onClick:i},"toggle")))}}}]);