(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},hPU5:function(e,t,n){"use strict";var a=n("ahKI"),l=n.n(a),r=n("bIC1"),c=n.n(r);n("nxnQ");function o(e,t){return d(e)||s(e,t)||i(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){o=!0,l=u}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function d(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),u=o(r,2),i=u[0],m=u[1],s=Object(a["useState"])(!1),d=o(s,2),E=d[0],f=d[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){m(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},nxnQ:function(e,t,n){},tFn9:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),l=n.n(a),r=n("dJWd"),c=n("vlId"),o=n("AVpQ"),u=n("hPU5"),i=l.a.memo((e=>{var t=e.demos,n=t["usememoizedfn-demo1"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"usememoizedfn"},l.a.createElement(r["AnchorLink"],{to:"#usememoizedfn","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useMemoizedFn"),l.a.createElement("p",null,"\u6301\u4e45\u5316 function \u7684 Hook\uff0c\u7406\u8bba\u4e0a\uff0c\u53ef\u4ee5\u4f7f\u7528 useMemoizedFn \u5b8c\u5168\u4ee3\u66ff useCallback\u3002"),l.a.createElement("p",null,"\u5728\u67d0\u4e9b\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528 useCallback \u6765\u8bb0\u4f4f\u4e00\u4e2a\u51fd\u6570\uff0c\u4f46\u662f\u5728\u7b2c\u4e8c\u4e2a\u53c2\u6570 deps \u53d8\u5316\u65f6\uff0c\u4f1a\u91cd\u65b0\u751f\u6210\u51fd\u6570\uff0c\u5bfc\u81f4\u51fd\u6570\u5730\u5740\u53d8\u5316\u3002"),l.a.createElement(o["a"],{code:"const [state, setState] = useState('');\n\n// \u5728 state \u53d8\u5316\u65f6\uff0cfunc \u5730\u5740\u4f1a\u53d8\u5316\nconst func = useCallback(() => {\n  console.log(state);\n}, [state]);",lang:"js"}),l.a.createElement("p",null,"\u4f7f\u7528 useMemoizedFn, \u53ef\u4ee5\u7701\u7565\u7b2c\u4e8c\u4e2a\u53c2\u6570deps,\u540c\u65f6\u4fdd\u8bc1\u51fd\u6570\u5730\u5740\u6c38\u8fdc\u4e0d\u4f1a\u53d8\u5316"),l.a.createElement(o["a"],{code:"const [state, setState] = useState('');\n\n// func \u5730\u5740\u6c38\u8fdc\u4e0d\u4f1a\u53d8\u5316\nconst func = useMemoizedFn(() => {\n  console.log(state);\n});",lang:"js"}),l.a.createElement("h2",{id:"demo"},l.a.createElement(r["AnchorLink"],{to:"#demo","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"demo")),l.a.createElement(c["default"],t["usememoizedfn-demo1"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],{code:"const fn = useMemoizedFn<T>(fn: T): T;",lang:"typescript"}),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"fn"),l.a.createElement("td",null,"\u5f15\u7528\u5730\u5740\u6c38\u8fdc\u4e0d\u4f1a\u53d8\u5316\u7684 fn"),l.a.createElement("td",null,l.a.createElement("code",null,"(...args:any[])=>any")),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"params"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"fn"),l.a.createElement("td",null,"\u9700\u8981\u6301\u4e45\u5316\u7684\u51fd\u6570"),l.a.createElement("td",null,l.a.createElement("code",null,"(...args:any[]=>any")),l.a.createElement("td",null,"-")))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:n})}}}]);