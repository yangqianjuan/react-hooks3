(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{MZF8:function(e,t,n){"use strict";var o=n("ogwx");n.d(t,"a",(function(){return o["b"]}));n("VCU9")},OYlG:function(e,t,n){"use strict";n.r(t);var o=n("mn0l"),r=n("ahKI"),i=n.n(r),s=n("RGYn"),u=n("DBVu"),a=n("GAyR"),c=n("7JWa"),l="import React from 'react';\nimport { useBoolean } from 'reactHooks';\n\nexport default function () {\n  const [state, { setTrue, setFalse, toggle }] = useBoolean(true);\n\n  return (\n    <div>\n      <p>state:{`${state}`}</p>\n      <div>\n        <button onClick={setTrue}>setTrue</button>\n      </div>\n      <div>\n        <button onClick={setFalse}>setFalse</button>\n      </div>\n      <div>\n        <button onClick={toggle}>toggle</button>\n      </div>\n    </div>\n  );\n}",d="import React from 'react';\nimport { useToggle } from 'reactHooks';\n\nexport default function () {\n  const [state, { setLeft, setRight, toggle }] = useToggle();\n\n  return (\n    <div>\n      <p>state:{`${state}`}</p>\n      <div>\n        <button onClick={setLeft}>setLeft</button>\n      </div>\n      <div>\n        <button onClick={setRight}>setRight</button>\n      </div>\n      <div>\n        <button onClick={toggle}>toggle</button>\n      </div>\n    </div>\n  );\n}",p="import React from 'react';\nimport { useToggle } from 'reactHooks';\n\nexport default function () {\n  const [state, { setLeft, setRight, toggle }] = useToggle('left', 'right');\n  return (\n    <div>\n      <p>state:{`${state}`}</p>\n      <div>\n        <button onClick={setLeft}>setLeft</button>\n      </div>\n      <div>\n        <button onClick={setRight}>setRight</button>\n      </div>\n      <div>\n        <button onClick={toggle}>toggle</button>\n      </div>\n    </div>\n  );\n}",g={"useboolean-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(2).then(n.bind(null,"yoie"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:"18.2.0"}},identifier:"useboolean-demo1"}},"usetoggle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(2).then(n.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(a["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(2).then(n.bind(null,"Dr+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-demo2"}}},b=n("Zs1V"),f=n("0kt9"),v=n.n(f);t["default"]=e=>i.a.createElement(v.a,Object(o["a"])({},e,{config:s,demos:g,apis:b}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/hooks":[{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"},{"path":"/hooks/use-boolean","title":"useBoolean"}]}],"/":[{"title":"\u9996\u9875","path":"index"}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"}]},"title":"react hooks","logo":"/logo.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);