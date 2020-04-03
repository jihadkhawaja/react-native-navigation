(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(1),r=(n(0),n(171));const o={id:"options-api",title:"Options Commands",sidebar_label:"Options commands"},i={id:"options-api",title:"Options Commands",description:"## `setDefaultOptions`",source:"@site/docs/api-options.mdx",permalink:"/react-native-navigation/docs/options-api",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/api-options.mdx",sidebar_label:"Options commands",sidebar:"api",previous:{title:"SplitView",permalink:"/react-native-navigation/docs/splitView"},next:{title:"The options object",permalink:"/react-native-navigation/docs/options-root"}},c=[{value:"<code>setDefaultOptions</code>",id:"setdefaultoptions",children:[]},{value:"<code>mergeOptions</code>",id:"mergeoptions",children:[]}],b={rightToc:c};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"setdefaultoptions"},Object(r.b)("inlineCode",{parentName:"h2"},"setDefaultOptions")),Object(r.b)("p",null,"Set default options for all screens. Useful for declaring a consistent style across the app."),Object(r.b)("h4",{id:"parameters"},"Parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"options"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"options-root"}),"Options")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Options root")))),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'Navigation.setDefaultOptions({\n  bottomTab: {\n    textColor: "black",\n    selectedTextColor: "blue"\n  }\n});\n')),Object(r.b)("h2",{id:"mergeoptions"},Object(r.b)("inlineCode",{parentName:"h2"},"mergeOptions")),Object(r.b)("p",null,"Change navigation options of a component."),Object(r.b)("h4",{id:"parameters-1"},"Parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"componentId"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The component id")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"options"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"options-root"}),"Options")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Options root")))),Object(r.b)("h4",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions('componentId', {\n  bottomTabs: {\n    visible: false\n  }\n});\n")))}l.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||O[u]||o;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);