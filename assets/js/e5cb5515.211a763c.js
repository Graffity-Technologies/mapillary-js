(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[5814],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var v=n.createContext({}),o=function(e){var t=n.useContext(v),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(v.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,v=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=o(r),u=a,f=s["".concat(v,".").concat(u)]||s[u]||m[u]||i;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=s;var l={};for(var v in t)hasOwnProperty.call(t,v)&&(l[v]=t[v]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var o=2;o<i;o++)p[o]=r[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1177:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return v},default:function(){return c}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),p={id:"viewer.viewerevent",title:"Interface: ViewerEvent",sidebar_label:"ViewerEvent",custom_edit_url:null},l={unversionedId:"interfaces/viewer.viewerevent",id:"interfaces/viewer.viewerevent",isDocsHomePage:!1,title:"Interface: ViewerEvent",description:"viewer.ViewerEvent",source:"@site/api/interfaces/viewer.viewerevent.md",sourceDirName:"interfaces",slug:"/interfaces/viewer.viewerevent",permalink:"/mapillary-js/api/interfaces/viewer.viewerevent",editUrl:null,version:"current",sidebar_label:"ViewerEvent",frontMatter:{id:"viewer.viewerevent",title:"Interface: ViewerEvent",sidebar_label:"ViewerEvent",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: ViewerDataLoadingEvent",permalink:"/mapillary-js/api/interfaces/viewer.viewerdataloadingevent"},next:{title:"Interface: ViewerImageEvent",permalink:"/mapillary-js/api/interfaces/viewer.viewerimageevent"}},v=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"target",id:"target",children:[]},{value:"type",id:"type",children:[]}]}],o={toc:v};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/viewer"},"viewer"),".ViewerEvent"),(0,i.kt)("p",null,"Interface for general viewer events."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ViewerEvent")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.viewerbearingevent"},(0,i.kt)("em",{parentName:"a"},"ViewerBearingEvent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.viewerimageevent"},(0,i.kt)("em",{parentName:"a"},"ViewerImageEvent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.viewerdataloadingevent"},(0,i.kt)("em",{parentName:"a"},"ViewerDataLoadingEvent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.viewermouseevent"},(0,i.kt)("em",{parentName:"a"},"ViewerMouseEvent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.viewernavigableevent"},(0,i.kt)("em",{parentName:"a"},"ViewerNavigableEvent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.viewernavigationedgeevent"},(0,i.kt)("em",{parentName:"a"},"ViewerNavigationEdgeEvent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.viewerstateevent"},(0,i.kt)("em",{parentName:"a"},"ViewerStateEvent"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"target"},"target"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"target"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/viewer.iviewer"},(0,i.kt)("em",{parentName:"a"},"IViewer"))),(0,i.kt)("p",null,"The viewer object that fired the event."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/1fd62652/src/viewer/events/ViewerEvent.ts#L11"},"viewer/events/ViewerEvent.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/viewer#viewereventtype"},(0,i.kt)("em",{parentName:"a"},"ViewerEventType"))),(0,i.kt)("p",null,"The event type."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/1fd62652/src/viewer/events/ViewerEvent.ts#L16"},"viewer/events/ViewerEvent.ts:16")))}c.isMDXComponent=!0}}]);