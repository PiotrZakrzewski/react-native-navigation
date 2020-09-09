(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(212)),i={id:"style-theme",title:"Themes",sidebar_label:"Themes"},s={unversionedId:"docs/style-theme",id:"docs/style-theme",isDocsHomePage:!1,title:"Themes",description:"A theme is a type of style which is applied to the entire app. It allows you to declare",source:"@site/docs/docs/style-theme.mdx",slug:"/docs/style-theme",permalink:"/react-native-navigation/next/docs/style-theme",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/style-theme.mdx",version:"current",sidebar_label:"Themes",sidebar:"docs",previous:{title:"Styling with options",permalink:"/react-native-navigation/next/docs/style-options"},next:{title:"StatusBar",permalink:"/react-native-navigation/next/docs/style-statusBar"}},c=[{value:"Applying a theme",id:"applying-a-theme",children:[]},{value:"Conditional themes with Options Processor",id:"conditional-themes-with-options-processor",children:[]},{value:"Conditional themes with Layout Processor",id:"conditional-themes-with-layout-processor",children:[]},{value:"Changing theme dynamically",id:"changing-theme-dynamically",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A theme is a type of style which is applied to the entire app. It allows you to declare\na consistent style to all Navigation components such as the TopBar and BottomTabs and also\nto system elements like the StatusBar and NavigationBar."),Object(r.b)("h2",{id:"applying-a-theme"},"Applying a theme"),Object(r.b)("p",null,"Themes are applied using ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.setDefaultOptions()")," which must be called ",Object(r.b)("strong",{parentName:"p"},"before")," ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.setRoot()")," is called."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// Set the default topBar background color to red\nNavigation.setDefaultOptions({\n  topBar: {\n    background: {\n      color: 'red'\n    }\n  }\n});\n\n// That stack's topBar background color will be red, as is set in default options\nNavigation.setRoot({\n  root: {\n    stack: {\n      children: [\n        ...\n      ]\n    }\n  }\n});\n")),Object(r.b)("h2",{id:"conditional-themes-with-options-processor"},"Conditional themes with Options Processor"),Object(r.b)("p",null,"Some style requirements can't be facilitated with the ",Object(r.b)("inlineCode",{parentName:"p"},"defaultOptions")," api. For example, an app may have a unique theme for screens displayed in a modal or require that modals have a default dismiss button in the TopBar. An Options Processor allow us to mutate the options object of each screen and layout right before they are displayed."),Object(r.b)("p",null,"Lets see how we can leverage this API to add a dismiss button to the TopBar when showing a modal."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"file=./style-theme/option-processor.tsx",file:"./style-theme/option-processor.tsx"}),"import {\n  CommandName,\n  Navigation,\n  NavigationButtonPressedEvent,\n  OptionsTopBar,\n} from 'react-native-navigation';\n\nNavigation.addOptionProcessor<OptionsTopBar>(\n  'topBar',\n  (topBar: OptionsTopBar, commandName: CommandName): OptionsTopBar => {\n    if (commandName === CommandName.ShowModal) {\n      if (!topBar.leftButtons) {\n        topBar.leftButtons = [\n          {\n            id: 'dismissModalButton',\n            icon: require('dismissIcon.png'),\n            color: 'black',\n          },\n        ];\n      }\n    }\n    return topBar;\n  }\n);\n\n// Now that each modal has a dismiss button, let's handle the button press event and dismiss the modal when needed.\nNavigation.events().registerNavigationButtonPressedListener(\n  (event: NavigationButtonPressedEvent) => {\n    if (event.buttonId === 'dismissModalButton') {\n      Navigation.dismissModal(event.componentId);\n    }\n  }\n);\n")),Object(r.b)("p",null,"The Options Processors can also be used to set default options for buttons, here's how:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"file=./style-theme/option-processor-defaults.tsx",file:"./style-theme/option-processor-defaults.tsx"}),"import { CommandName, Navigation, OptionsTopBarButton } from 'react-native-navigation';\n\nNavigation.addOptionProcessor<OptionsTopBarButton>(\n  'topBar.rightButtons',\n  (button: OptionsTopBarButton, commandName: CommandName): OptionsTopBarButton => {\n    button.fontFamily = 'helvetica';\n    button.color = 'red';\n    return button;\n  }\n);\n")),Object(r.b)("h2",{id:"conditional-themes-with-layout-processor"},"Conditional themes with Layout Processor"),Object(r.b)("p",null,"Layout Processor is similar in concept to the Options Processor discussed above. While Options Processor is invoked for each options object, Layout Processor is invoked once on the entire (layout)","['../api/layout-layout/']"," tree passed to the Navigation command."),Object(r.b)("p",null,"Through the Layout Processor we can access the layout and it's children, and mutate both options and passProps before the layout is displayed. In this example we iterate on the stack's children and set a dark TopBar color according to a ",Object(r.b)("inlineCode",{parentName:"p"},"theme")," property in the child's props."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:"file=./style-theme/layout-processor.tsx",file:"./style-theme/layout-processor.tsx"}),"import { Layout, Navigation } from 'react-native-navigation';\n\ninterface ScreenProps {\n  theme: 'light' | 'dark';\n}\n\nfunction isScreenProps(obj: unknown): obj is ScreenProps {\n  return typeof obj === 'object' && obj !== null && typeof (obj as ScreenProps).theme === 'string';\n}\n\nNavigation.addLayoutProcessor((layout: Layout, commandName: string) => {\n  layout.stack?.children?.forEach((child) => {\n    if (!child.component) {\n      return;\n    }\n    const props = child.component.passProps;\n    if (isScreenProps(props) && props.theme === 'dark') {\n      child.component.options = {\n        topBar: {\n          background: {\n            color: 'black',\n          },\n        },\n      };\n    }\n  });\n  return layout;\n});\n")),Object(r.b)("h2",{id:"changing-theme-dynamically"},"Changing theme dynamically"),Object(r.b)("p",null,"Apps can have multiple themes and sometimes you might need to change theme dynamically. To change current theme, simply call ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.setDefaultOptions()")," with updated theme options, following that with a call to ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.setRoot()"),". The reason we need to setRoot once more is because ",Object(r.b)("inlineCode",{parentName:"p"},"Navigation.setDefaultOptions()")," does not apply options to screens which had already been created."))}p.isMDXComponent=!0},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||r;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);