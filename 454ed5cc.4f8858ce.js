(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{212:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,b=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=p(a),O=n,j=d["".concat(b,".").concat(O)]||d[O]||u[O]||o;return a?r.a.createElement(j,l(l({ref:t},i),{},{components:a})):r.a.createElement(j,l({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,b=new Array(o);b[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var i=2;i<o;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(212)),b={id:"options-layout",title:"Layout Options",sidebar_label:"Layout"},l={unversionedId:"api/options-layout",id:"version-6.12.2/api/options-layout",isDocsHomePage:!1,title:"Layout Options",description:"`js",source:"@site/versioned_docs/version-6.12.2/api/options-layout.mdx",slug:"/api/options-layout",permalink:"/react-native-navigation/api/options-layout",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-6.12.2/api/options-layout.mdx",version:"6.12.2",sidebar_label:"Layout",sidebar:"version-6.12.2/api",previous:{title:"Status Bar Options",permalink:"/react-native-navigation/api/options-statusBar"},next:{title:"Modal Options",permalink:"/react-native-navigation/api/options-modal"}},c=[{value:"<code>fitSystemWindows</code>",id:"fitsystemwindows",children:[]},{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>componentBackgroundColor</code>",id:"componentbackgroundcolor",children:[]},{value:"<code>orientation</code>",id:"orientation",children:[]},{value:"<code>topMargin</code>",id:"topmargin",children:[]},{value:"<code>direction</code>",id:"direction",children:[]}],i={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const options = {\n  layout: {}\n};\n")),Object(o.b)("h3",{id:"fitsystemwindows"},Object(o.b)("inlineCode",{parentName:"h3"},"fitSystemWindows")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Both")))),Object(o.b)("h3",{id:"backgroundcolor"},Object(o.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(o.b)("p",null,"Set the screen background color."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Color"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Both")))),Object(o.b)("h3",{id:"componentbackgroundcolor"},Object(o.b)("inlineCode",{parentName:"h3"},"componentBackgroundColor")),Object(o.b)("p",null,"Set background color only for components. On Android, using this option instead of ",Object(o.b)("inlineCode",{parentName:"p"},"backgroundColor")," helps reduce overdraw."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Color"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Both")))),Object(o.b)("h3",{id:"orientation"},Object(o.b)("inlineCode",{parentName:"h3"},"orientation")),Object(o.b)("p",null,"Set the allowed orientations."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"['portrait', 'landscape']"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Both")))),Object(o.b)("h3",{id:"topmargin"},Object(o.b)("inlineCode",{parentName:"h3"},"topMargin")),Object(o.b)("p",null,"Set the layout top margin."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(o.b)("h3",{id:"direction"},Object(o.b)("inlineCode",{parentName:"h3"},"direction")),Object(o.b)("p",null,"Set language direction, only works with DefaultOptions. ",Object(o.b)("inlineCode",{parentName:"p"},"locale")," is an Android specific option which sets the direction according to the device locale."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('rtl', 'ltr', 'locale')"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Both")))))}p.isMDXComponent=!0}}]);