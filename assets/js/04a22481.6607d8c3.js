(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[1329],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?i.createElement(h,l(l({ref:t},u),{},{components:a})):i.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4538:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var i=a(2122),n=a(9756),r=(a(7294),a(3905)),l={id:"start",title:"Getting Started",slug:"/"},o={unversionedId:"intro/start",id:"intro/start",isDocsHomePage:!1,title:"Getting Started",description:"Overview",source:"@site/docs/intro/start.md",sourceDirName:"intro",slug:"/",permalink:"/mapillary-js/docs/",editUrl:"https://github.com/mapillary/mapillary-js/edit/main/doc/docs/intro/start.md",version:"current",frontMatter:{id:"start",title:"Getting Started",slug:"/"},sidebar:"docs",next:{title:"Try MapillaryJS",permalink:"/mapillary-js/docs/intro/try"}},s=[{value:"Overview",id:"overview",children:[{value:"Try MapillaryJS",id:"try-mapillaryjs",children:[]},{value:"Step-by-Step Guide",id:"step-by-step-guide",children:[]},{value:"Extend and Augment",id:"extend-and-augment",children:[]},{value:"API Reference",id:"api-reference",children:[]},{value:"Examples",id:"examples",children:[]}]},{value:"Essentials",id:"essentials",children:[{value:"What is MapillaryJS, Exactly?",id:"what-is-mapillaryjs-exactly",children:[]},{value:"Glossary",id:"glossary",children:[]}]},{value:"Staying Informed",id:"staying-informed",children:[]},{value:"Something Missing?",id:"something-missing",children:[]}],p={toc:s};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This page is an overview of the MapillaryJS ",(0,r.kt)("inlineCode",{parentName:"p"},"v4.x")," documentation and related resources."),(0,r.kt)("h3",{id:"try-mapillaryjs"},"Try MapillaryJS"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"/docs/intro/try"},"guide to trying MapillaryJS")," will take you through the installation and give a first experience of using MapillaryJS by adding it to a simple HTML page."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Throughout the documentation you will see live examples. The live example editors use the ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React library")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX syntax"),". If you have not used React before, that is no problem, understanding React and JSX is not needed to follow along in the guides."))),(0,r.kt)("h3",{id:"step-by-step-guide"},"Step-by-Step Guide"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides"},"guide to main concepts")," is the best place to start to learn concepts step by step. Every next chapter in it builds on the knowledge introduced in the previous chapters."),(0,r.kt)("h3",{id:"extend-and-augment"},"Extend and Augment"),(0,r.kt)("p",null,"Once you\u2019re comfortable with the main concepts and played with MapillaryJS a little bit, you might be interested in more advanced topics. The ",(0,r.kt)("a",{parentName:"p",href:"/docs/extension/extend"},"guide to extending MapillaryJS")," will introduce you to the powerful extension APIs which lets you extend and augment the MapillaryJS experience. You can load and visualize your own data format, render your own 3D models onto the MapillaryJS canvas, and define your own interactivity."),(0,r.kt)("h3",{id:"api-reference"},"API Reference"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/api"},"API reference")," is useful when you want to learn more details about a particular MapillaryJS API."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/examples"},"examples section")," gives you a deep dive into the details of using the MapillaryJS APIs through code examples."),(0,r.kt)("h2",{id:"essentials"},"Essentials"),(0,r.kt)("h3",{id:"what-is-mapillaryjs-exactly"},"What is MapillaryJS, Exactly?"),(0,r.kt)("p",null,"MapillaryJS is an interactive, extendable street imagery and sematic mapping visualization platform. But what does that actually mean? Let us go through it together."),(0,r.kt)("h4",{id:"street-imagery"},"Street Imagery"),(0,r.kt)("p",null,"Street imagery is simply images captured anywhere on earth at street-level, i.e roughly at eye-height. MapillaryJS provides interactivity to navigate street imagery smoothly in a virtual, undistorted 3D world."),(0,r.kt)("h4",{id:"semantic-mapping"},"Semantic Mapping"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cartography"},"Mapping")," is the practice of making or using maps."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Semantics"},"Semantics")," is the study of meaning, reference or truth. In our case, it is about understanding the meaning of each part of the map."),(0,r.kt)("p",null,"MapillaryJS provides methods to visualize the underlying data used to create semantic 3D maps through its spatial rendering capabilities. This is useful for understanding the structure of semantic mapping algorithm output."),(0,r.kt)("h4",{id:"visualization-platform"},"Visualization Platform"),(0,r.kt)("p",null,"The aim of MapillaryJS is to provide the following characteristics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core capabilities",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A small set of capabilities that work really well.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Interactivity - Smooth street level and map camera navigation, panning, zooming."),(0,r.kt)("li",{parentName:"ul"},"Navigation graph construction - S2 cell based graph creation."),(0,r.kt)("li",{parentName:"ul"},"Image tiling - On demand, full resolution image rendering."),(0,r.kt)("li",{parentName:"ul"},"Undistortion - Textures and camera frames should be undistorted in the virtual 3D world."),(0,r.kt)("li",{parentName:"ul"},"Spatial rendering - Point clouds, camera frames, GPS positions."))))),(0,r.kt)("li",{parentName:"ul"},"Stability",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The functionality provided by the platform should be deterministic."),(0,r.kt)("li",{parentName:"ul"},"Unit test coverage should be high to avoid regressions."))),(0,r.kt)("li",{parentName:"ul"},"Great performance",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All the core capabilities should provide outstanding performance."))),(0,r.kt)("li",{parentName:"ul"},"Easy to understand APIs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"While the MapillaryJS APIs should provide great power to the developers building upon MapillaryJS, they should also be coherent and simple to use."))),(0,r.kt)("li",{parentName:"ul"},"Extendability",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The core capabilities of MapillaryJS should function really well, but many applications require specific functionality and customization. Therefore MapillaryJS needs to provide powerful extension APIs for developers to build upon.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Load any data format."),(0,r.kt)("li",{parentName:"ul"},"Render any 3D content, e.g. by using Three.js."),(0,r.kt)("li",{parentName:"ul"},"Build application specific interactivity.")))))),(0,r.kt)("p",null,"By providing the above characteristics, MapillaryJS can be a visualization platform in the browser for spatial and mapping developers to build upon and extend."),(0,r.kt)("h3",{id:"glossary"},"Glossary"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/intro/glossary"},"glossary")," contains an overview of the most common terms you\u2019ll see in the MapillaryJS documentation."),(0,r.kt)("h2",{id:"staying-informed"},"Staying Informed"),(0,r.kt)("p",null,"You can find a changelog for every release in the MapillaryJS repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/main/CHANGELOG.md"},"CHANGELOG"),", as well as on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/releases"},"Releases")," page."),(0,r.kt)("h2",{id:"something-missing"},"Something Missing?"),(0,r.kt)("p",null,"If something is missing in the documentation or if you found some part confusing, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/main/.github/CONTRIBUTING.md#sending-a-pull-request"},"send a pull request")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/issues/new"},"file an issue")," for the source code repository with your suggestions for improvement."))}u.isMDXComponent=!0}}]);