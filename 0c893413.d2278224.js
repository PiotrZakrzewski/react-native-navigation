(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{212:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,b=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return n?a.a.createElement(b,s(s({ref:t},p),{},{components:n})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},213:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},215:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},216:function(e,t,n){"use strict";var o=n(0),a=n(215);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},217:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(216),r=n(213),s=n(47),c=n.n(s),p=37,l=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,d=e.values,u=e.groupId,m=Object(i.a)(),b=m.tabGroupChoices,f=m.setTabGroupChoices,h=Object(o.useState)(s),v=h[0],O=h[1],g=Object(o.useState)(!1),y=g[0],j=g[1];if(null!=u){var w=b[u];null!=w&&w!==v&&d.some((function(e){return e.value===w}))&&O(w)}var x=function(e){O(e),null!=u&&f(u,e)},N=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},P=function(){j(!1)};return Object(o.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",P)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),C(e)},onFocus:function(){return x(t)},onClick:function(){x(t),j(!1)},onPointerDown:function(){return j(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},218:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(6),i=(n(0),n(212)),r=n(217),s=n(218),c={id:"style-options",title:"Styling with options",sidebar_label:"Options"},p={unversionedId:"docs/style-options",id:"version-6.12.2/docs/style-options",isDocsHomePage:!1,title:"Styling with options",description:"A Screen's look and feel is configured with an Options object. Options can be applied to screens in three ways. Each method of applying options has benefits and draw backs which are important be aware of so we can use the right tool for the job.",source:"@site/versioned_docs/version-6.12.2/docs/style-screens.mdx",slug:"/docs/style-options",permalink:"/react-native-navigation/docs/style-options",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-6.12.2/docs/style-screens.mdx",version:"6.12.2",sidebar_label:"Options",sidebar:"version-6.12.2/docs",previous:{title:"Overlay",permalink:"/react-native-navigation/docs/overlay"},next:{title:"Themes",permalink:"/react-native-navigation/docs/style-theme"}},l=[{value:"Command options",id:"command-options",children:[]},{value:"Static options",id:"static-options",children:[{value:"Handle props in static options",id:"handle-props-in-static-options",children:[]}]},{value:"Merge options",id:"merge-options",children:[]}],d={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A Screen's look and feel is configured with an ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"../api/options-root"}),"Options")," object. Options can be applied to screens in three ways. Each method of applying options has benefits and draw backs which are important be aware of so we can use the right tool for the job."),Object(i.b)("h2",{id:"command-options"},"Command options"),Object(i.b)("p",null,"Options can be passed to layouts as part of a command. For example when pushing a screen. Options passed in commands are typically dynamic options which are determined at runtime."),Object(i.b)("p",null,"In the example below we're pushing a user profile screen and we'd like show the user name in the title. To do so, we set the title in the component's options."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"file=./style-screens/command-options.tsx",file:"./style-screens/command-options.tsx"}),"import { Navigation } from 'react-native-navigation';\n\nfunction showUserProfileScreen(user: User) {\n  Navigation.push(componentId, {\n    component: {\n      name: 'ProfileScreen',\n      passProps: { user },\n      options: {\n        topBar: {\n          title: {\n            text: user.name,\n          },\n        },\n      },\n    },\n  });\n}\n")),Object(i.b)("p",null,"Notice how the title is actually inferred from the ",Object(i.b)("inlineCode",{parentName:"p"},"user")," object which is set in ",Object(i.b)("inlineCode",{parentName:"p"},"passProps"),". While this works perfectly fine, declaring the title each time a screen is pushed is a bit tedious and error prone. Later on we'll see a more convenient method to declare dynamic options which are inferred from props."),Object(i.b)("h2",{id:"static-options"},"Static options"),Object(i.b)("p",null,"Static options are options that are declared statically ",Object(i.b)("strong",{parentName:"p"},"on")," the component class. Whenever a screen has a known predefined style, static options should be used as they are evaluated immediately when the screen is created."),Object(i.b)(r.a,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"class",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"file=./style-screens/static-options-class.tsx",file:"./style-screens/static-options-class.tsx"}),"import { NavigationComponent, Options } from 'react-native-navigation';\n\nclass MyScreen extends NavigationComponent {\n  static options: Options = {\n    topBar: {\n      title: {\n        text: 'My Screen',\n      },\n    },\n  };\n}\n"))),Object(i.b)(s.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"file=./style-screens/static-options-fn.tsx",file:"./style-screens/static-options-fn.tsx"}),"import { View } from 'react-native';\nimport { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';\n\nconst MyFunctionalScreen: NavigationFunctionComponent = (props: NavigationComponentProps) => {\n  return <View />;\n};\n\nMyFunctionalScreen.options = {\n  topBar: {\n    title: {\n      text: 'My Screen',\n    },\n  },\n};\n")))),Object(i.b)("h3",{id:"handle-props-in-static-options"},"Handle props in static options"),Object(i.b)("p",null,"Sometimes a screen's style includes properties defined in the calling scope where the screen is used. Like in the user profile screen we've seen above where the the user name is used as the TopBar title. As the user name is unique for each profile, it can't be defined explicitly in the static options."),Object(i.b)("p",null,"Luckily, we can access props from static options and set the title from static options! Let's see how this is done:"),Object(i.b)(r.a,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"class",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"file=./style-screens/static-options-props-class.tsx",file:"./style-screens/static-options-props-class.tsx"}),"import { NavigationComponent, NavigationComponentProps, Options } from 'react-native-navigation';\n\ninterface Props extends NavigationComponentProps {\n  order: OrderDetails;\n}\n\nclass OrderScreen extends NavigationComponent<Props> {\n  static options(props: Props): Options {\n    return {\n      topBar: {\n        title: {\n          text: props.order.orderId,\n        },\n      },\n    };\n  }\n}\n"))),Object(i.b)(s.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"file=./style-screens/static-options-props-fn.tsx",file:"./style-screens/static-options-props-fn.tsx"}),"import { View } from 'react-native';\nimport { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';\n\ninterface Props extends NavigationComponentProps {\n  order: OrderDetails;\n}\n\nconst OrderScreen: NavigationFunctionComponent<Props> = (props: Props) => {\n  return <View />;\n};\n\nOrderScreen.options = (props: Props) => {\n  return {\n    topBar: {\n      title: {\n        text: props.order.orderId,\n      },\n    },\n  };\n};\n")))),Object(i.b)("p",null,"Following this approach we can determine options that are dependent on other external factors, such as experiments or A/B tests."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"file=./style-screens/static-options-experiments.tsx",file:"./style-screens/static-options-experiments.tsx"}),"import { NavigationComponent, Options } from 'react-native-navigation';\n\nclass ExperimentScreen extends NavigationComponent {\n  static options(): Options {\n    const ExperimentsManager = require('./ExperimentsManager');\n    const food = ExperimentsManager.isActive('VeganExperiment') ? 'Tofu' : 'Hamburger';\n\n    return {\n      topBar: {\n        title: {\n          text: `Hello ${food}!`,\n        },\n      },\n    };\n  }\n}\n")),Object(i.b)("h2",{id:"merge-options"},"Merge options"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"mergeOptions")," command is used to update a layout's style. Keep in mind that the merge happens in native, and not ins JS. This meaning that if ",Object(i.b)("inlineCode",{parentName:"p"},"mergeOptions")," is called to update a screen's options, the static options declared on the React Component are not affected by mergeOptions."),Object(i.b)("p",null,"The following example shows how to update a TopBar background color to red."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"file=./style-screens/merge-options.tsx",file:"./style-screens/merge-options.tsx"}),"import { Navigation } from 'react-native-navigation';\n\nNavigation.mergeOptions(componentId, {\n  topBar: {\n    background: {\n      color: 'red',\n    },\n  },\n});\n")),Object(i.b)("hr",null),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Avoid using mergeOptions in a screen's constructor or in componentDidMount!")))),Object(i.b)("p",null,"When a screen first appears, it's ",Object(i.b)("inlineCode",{parentName:"p"},"constructor")," and ",Object(i.b)("inlineCode",{parentName:"p"},"componentDidMount")," functions are called followed by a ",Object(i.b)("inlineCode",{parentName:"p"},"componentDidAppear")," event. (read more about screen lifecycle ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/react-native-navigation/docs/screen-lifecycle"}),"here"),")."),Object(i.b)("p",null,"Developers might be tempted to call ",Object(i.b)("inlineCode",{parentName:"p"},"mergeOptions")," in constructor or componentDidMount to update options. Calling ",Object(i.b)("inlineCode",{parentName:"p"},"mergeOptions")," before the ",Object(i.b)("inlineCode",{parentName:"p"},"componentDidAppear")," event has been received has two very negative effects:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Updating certain options can trigger additional layout and draw cycles which can have serious impact on performance."),Object(i.b)("li",{parentName:"ol"},"Options applied dynamically with the ",Object(i.b)("inlineCode",{parentName:"li"},"mergeOptions")," command might be handled in native ",Object(i.b)("strong",{parentName:"li"},"after")," the screen has already appeared. This will result in noticeable flickering and artifacts as options are updated after the initial options have been applied and are visible to the user.")))}u.isMDXComponent=!0}}]);