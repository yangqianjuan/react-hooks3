(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{MZF8:function(e,t,n){"use strict";var r=n("ogwx");n.d(t,"a",(function(){return r["b"]}));n("VCU9")},OYlG:function(e,t,n){"use strict";n.r(t);var r=n("mn0l"),o=n("ahKI"),a=n.n(o),s=n("RGYn"),u=n("DBVu"),i=n("GAyR"),c=n("7JWa"),l="import React from 'react';\nimport { useBoolean } from 'reactHooks';\n\nexport default function () {\n  const [state, { setTrue, setFalse, toggle }] = useBoolean(true);\n\n  return (\n    <div>\n      <p>state:{`${state}`}</p>\n      <div>\n        <button onClick={setTrue}>setTrue</button>\n      </div>\n      <div>\n        <button onClick={setFalse}>setFalse</button>\n      </div>\n      <div>\n        <button onClick={toggle}>toggle</button>\n      </div>\n    </div>\n  );\n}",d="import React, { useState } from 'react';\nimport { useDebounce } from 'reactHooks';\n\nexport default () => {\n  const [value, setValue] = useState();\n  const debounceValue = useDebounce(value, 1000);\n  return (\n    <div>\n      <input\n        type=\"text\"\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        style={{ width: 180 }}\n      />\n      <p>{debounceValue}</p>\n    </div>\n  );\n};",p="import React, { useEffect, useState } from 'react';\nimport { useLatest } from 'reactHooks';\n\nexport default function () {\n  const [count, setCount] = useState(0);\n  const latestValue = useLatest(count);\n  useEffect(() => {\n    const interval = setInterval(() => {\n      console.log(latestValue.current);\n      setCount((s) => latestValue.current + 1);\n    }, 1000);\n    return () => clearInterval(interval);\n  }, []);\n  return <div>{count}</div>;\n}",m="import React, { useState, useCallback } from 'react';\nimport { message } from 'antd';\nimport { useMemorizedFn } from 'reactHooks';\nexport default () => {\n  const [count, setCount] = useState(0);\n  const callbackFn = useCallback(() => {\n    message.info(`callback:${count}`);\n  }, [count]);\n  console.log(useMemorizedFn);\n  // debugger;\n  const memorizedFn = useMemorizedFn(() => {\n    message.info(`memorizedL${count}`);\n  });\n  // console.log(memorizedFn);\n  return (\n    <div>\n      <button\n        onClick={() => {\n          setCount((s) => s + 1);\n        }}\n      >\n        count++\n      </button>\n      <div>\n        <button onClick={callbackFn}>useCallback</button>\n        <button onClick={memorizedFn}>useMemorizedFn</button>\n      </div>\n    </div>\n  );\n};",f="import React from 'react';\nimport Mock from 'mockjs';\nimport { useRequest } from 'reactHooks';\nexport default () => {\n  const getUserName = () => {\n    return new Promise((resolve) => {\n      setTimeout(() => {\n        resolve(Mock.mock('@name'));\n      }, 1000);\n    });\n  };\n  // debugger;\n  const { loading, data, error } = useRequest(getUserName);\n  // console.log(loading, data, error);\n  if (loading) {\n    return <div>\u52a0\u8f7d\u4e2d\u3002\u3002\u3002</div>;\n  }\n  if (error) {\n    return <div>error:{error}</div>;\n  }\n  if (data) {\n    return <div>data:{data}</div>;\n  }\n};",b="import React from 'react';\nimport { useTitle } from 'reactHooks';\n\nexport default () => {\n  const title = useTitle('\u81ea\u5b9a\u4e49\u7684\u6807\u9898');\n  return <div>\u8bbe\u7f6e\u9875\u9762\u7684hooks</div>;\n};",v="import React from 'react';\nimport { useToggle } from 'reactHooks';\n\nexport default function () {\n  const [state, { setLeft, setRight, toggle }] = useToggle();\n\n  return (\n    <div>\n      <p>state:{`${state}`}</p>\n      <div>\n        <button onClick={setLeft}>setLeft</button>\n      </div>\n      <div>\n        <button onClick={setRight}>setRight</button>\n      </div>\n      <div>\n        <button onClick={toggle}>toggle</button>\n      </div>\n    </div>\n  );\n}",g="import React from 'react';\nimport { useToggle } from 'reactHooks';\n\nexport default function () {\n  const [state, { setLeft, setRight, toggle }] = useToggle('left', 'right');\n  return (\n    <div>\n      <p>state:{`${state}`}</p>\n      <div>\n        <button onClick={setLeft}>setLeft</button>\n      </div>\n      <div>\n        <button onClick={setRight}>setRight</button>\n      </div>\n      <div>\n        <button onClick={toggle}>toggle</button>\n      </div>\n    </div>\n  );\n}",h="import React from 'react';\nimport { useUpdate } from 'reactHooks';\nexport default () => {\n  const update = useUpdate();\n  return (\n    <div>\n      <p>{Date.now()}</p>\n      <button onClick={update}>update</button>\n    </div>\n  );\n};",k={"useboolean-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(14),n.e(3)]).then(n.bind(null,"yoie"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:"18.2.0"}},identifier:"useboolean-demo1"}},"usedebounce-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(14),n.e(3)]).then(n.bind(null,"eWij"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:"18.2.0"}},identifier:"usedebounce-demo1"}},"uselatest-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(14),n.e(3)]).then(n.bind(null,"OCTU"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"18.2.0"}},identifier:"uselatest-demo1"}},"usememorizedfn-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(14),n.e(3)]).then(n.bind(null,"s868"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{react:{version:">=16.9.0"},antd:{version:"5.2.1"},"react-dom":{version:">=16.9.0"}},identifier:"usememorizedfn-demo1"}},"index-default":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(14),n.e(3)]).then(n.bind(null,"CgOj"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f}},dependencies:{react:{version:"18.2.0"},mockjs:{version:"1.1.0"}},identifier:"index-default"}},"usetitle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(14),n.e(3)]).then(n.bind(null,"dA01"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b}},dependencies:{react:{version:"18.2.0"}},identifier:"usetitle-demo1"}},"usetoggle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(14),n.e(3)]).then(n.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:v}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(14),n.e(3)]).then(n.bind(null,"Dr+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-demo2"}},"useupdate-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(0),n.e(14),n.e(3)]).then(n.bind(null,"INwW"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:h}},dependencies:{react:{version:"18.2.0"}},identifier:"useupdate-demo1"}}},w=n("Zs1V"),x=n("0kt9"),O=n.n(x);t["default"]=e=>a.a.createElement(O.a,Object(r["a"])({},e,{config:s,demos:k,apis:w}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/hooks":[{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"},{"path":"/hooks/use-boolean","title":"useBoolean"},{"path":"/hooks/use-latest","title":"useLatest"},{"path":"/hooks/use-memorized-fn","title":"UseMemorizedFn"}]},{"title":"\u8bf7\u6c42","children":[{"path":"/hooks/use-request/index","title":"\u5feb\u901f\u4e0a\u624b"}]},{"title":"DOM","children":[{"path":"/hooks/use-title","title":"useTitle"},{"path":"/hooks/use-debounce","title":"useDebounce"},{"path":"/hooks/use-update","title":"useUpdate"}]}],"/":[{"title":"\u9996\u9875","path":"index"}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"}]},"title":"react hooks","logo":"/logo.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);