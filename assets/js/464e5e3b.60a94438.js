(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[2008],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return d},kt:function(){return s}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=m(a),s=n,N=k["".concat(o,".").concat(s)]||k[s]||u[s]||l;return a?r.createElement(N,p(p({ref:e},d),{},{components:a})):r.createElement(N,p({ref:e},d))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1199:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return o},default:function(){return d}});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),p={id:"examples",title:"Examples",slug:"/"},i={unversionedId:"examples",id:"examples",isDocsHomePage:!1,title:"Examples",description:"Support",source:"@site/examples/examples.md",sourceDirName:".",slug:"/",permalink:"/mapillary-js/examples/",editUrl:"https://github.com/mapillary/mapillary-js/edit/main/doc/examples/examples.md",version:"current",frontMatter:{id:"examples",title:"Examples",slug:"/"},sidebar:"examples"},o=[{value:"Support",id:"support",children:[]},{value:"Viewer",id:"viewer",children:[{value:"Image",id:"image",children:[]}]},{value:"Component",id:"component",children:[{value:"Input",id:"input",children:[]},{value:"Spatial",id:"spatial",children:[]},{value:"Marker",id:"marker",children:[]},{value:"Popup",id:"popup",children:[]},{value:"Tag",id:"tag",children:[]}]},{value:"Extension",id:"extension",children:[]}],m={toc:o};function d(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"support"},"Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/examples/support"},"Check Support")),(0,l.kt)("td",{parentName:"tr",align:null},"Verify that the browser ",(0,l.kt)("a",{parentName:"td",href:"/api/modules/viewer#functions"},"supports")," MapillaryJS")))),(0,l.kt)("h2",{id:"viewer"},"Viewer"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/examples/viewer-initialization"},"Initialization")),(0,l.kt)("td",{parentName:"tr",align:null},"Initialize the viewer in different ways and check if it is ",(0,l.kt)("a",{parentName:"td",href:"/api/classes/viewer.viewer-1#isnavigable"},"navigable"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/examples/viewer-options"},"Options")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure appearance and behavior through ",(0,l.kt)("a",{parentName:"td",href:"/api/interfaces/viewer.vieweroptions"},"viewer")," and ",(0,l.kt)("a",{parentName:"td",href:"/api/interfaces/viewer.componentoptions"},"component")," options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/examples/viewer-methods"},"Methods")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure appearance and behavior with methods after initial ",(0,l.kt)("a",{parentName:"td",href:"/api/classes/viewer.viewer-1#on"},"load"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Events"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Filtering"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Viewpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Center, zoom, and bearing")))),(0,l.kt)("h3",{id:"image"},"Image"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LngLat Explained"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"component"},"Component"),(0,l.kt)("h3",{id:"input"},"Input"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pointer"),(0,l.kt)("td",{parentName:"tr",align:null},"Activate and deactivate mouse, pen, and touch handlers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Keyboard"),(0,l.kt)("td",{parentName:"tr",align:null},"Activate and deactivate keyboard handlers")))),(0,l.kt)("h3",{id:"spatial"},"Spatial"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Options"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"marker"},"Marker"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add and drag markers"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Marker appearance"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure marker style and behavior")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hovered markers"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Map synchronization"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"One million markers"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"popup"},"Popup"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Display popups"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Configure popups"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Connect popups with tags"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"tag"},"Tag"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Show tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Show point, polygon and rect tags")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Configure tags"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Create tags"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Listen to tag changes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hover tags"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"extension"},"Extension"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"MapillaryJS API"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/examples/procedural-data-provider"},"Procedural Data Provider")),(0,l.kt)("td",{parentName:"tr",align:null},"Data Provider"),(0,l.kt)("td",{parentName:"tr",align:null},"Serve ",(0,l.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Procedural_generation"},"procedurally generated")," data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/examples/webgl-renderer"},"WebGL Renderer")),(0,l.kt)("td",{parentName:"tr",align:null},"Render"),(0,l.kt)("td",{parentName:"tr",align:null},"Use ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API"},"WebGL")," to render a 3D object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/examples/three-renderer"},"Three.js Renderer")),(0,l.kt)("td",{parentName:"tr",align:null},"Render"),(0,l.kt)("td",{parentName:"tr",align:null},"Use ",(0,l.kt)("a",{parentName:"td",href:"https://threejs.org/"},"Three.js")," to render a 3D object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/examples/animation"},"Animation")),(0,l.kt)("td",{parentName:"tr",align:null},"Render"),(0,l.kt)("td",{parentName:"tr",align:null},"Make a rotating cube ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL"},"animation"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/examples/fly-controls"},"Fly Controls")),(0,l.kt)("td",{parentName:"tr",align:null},"Camera Control"),(0,l.kt)("td",{parentName:"tr",align:null},"Attach ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/mrdoob/three.js/blob/r127/examples/jsm/controls/FlyControls.js"},"fly controls")," leveraging Three.js")))))}d.isMDXComponent=!0}}]);