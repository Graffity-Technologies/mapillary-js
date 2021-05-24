(self.webpackChunkmapillary_js_doc=self.webpackChunkmapillary_js_doc||[]).push([[7297],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return f}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),o=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=o(e.components);return a.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=o(t),f=n,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return t?a.createElement(d,p(p({ref:r},s),{},{components:t})):a.createElement(d,p({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var o=2;o<i;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9693:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var a=t(2122),n=t(9756),i=(t(7294),t(3905)),p={id:"api.cameraent",title:"Interface: CameraEnt",sidebar_label:"CameraEnt",custom_edit_url:null},l={unversionedId:"interfaces/api.cameraent",id:"interfaces/api.cameraent",isDocsHomePage:!1,title:"Interface: CameraEnt",description:"api.CameraEnt",source:"@site/api/interfaces/api.cameraent.md",sourceDirName:"interfaces",slug:"/interfaces/api.cameraent",permalink:"/mapillary-js/api/interfaces/api.cameraent",editUrl:null,version:"current",sidebar_label:"CameraEnt",frontMatter:{id:"api.cameraent",title:"Interface: CameraEnt",sidebar_label:"CameraEnt",custom_edit_url:null},sidebar:"api",previous:{title:"Class: Viewer",permalink:"/mapillary-js/api/classes/viewer.viewer-1"},next:{title:"Interface: ClusterContract",permalink:"/mapillary-js/api/interfaces/api.clustercontract"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"camera_parameters",id:"camera_parameters",children:[]},{value:"camera_type",id:"camera_type",children:[]}]}],o={toc:c};function s(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},o,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/modules/api"},"api"),".CameraEnt"),(0,i.kt)("p",null,"Ent representing camera properties."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"CameraEnt")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/mapillary-js/api/interfaces/api.spatialimageent"},(0,i.kt)("em",{parentName:"a"},"SpatialImageEnt"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"camera_parameters"},"camera","_","parameters"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"camera","_","parameters"),": ",(0,i.kt)("em",{parentName:"p"},"number"),"[]"),(0,i.kt)("p",null,"Camera type dependent camera parameters."),(0,i.kt)("p",null,"For perspective and fisheye camera types,\nthe camera parameters array should be\nconstructed according to"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[focal, k1, k2]")),(0,i.kt)("p",null,"where focal is the camera focal length,\nand k1, k2 are radial distortion parameters."),(0,i.kt)("p",null,"For spherical camera type the camera\nparameters should be an emtpy array."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/1fd62652/src/api/ents/CameraEnt.ts#L20"},"api/ents/CameraEnt.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"camera_type"},"camera","_","type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"camera","_","type"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Projection type of the camera."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," Supported camera types are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  'spherical'\n  'fisheye'\n  'perspective'\n")),(0,i.kt)("p",null,"Other camera types will be treated as\nperspective images."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapillary/mapillary-js/blob/1fd62652/src/api/ents/CameraEnt.ts#L36"},"api/ents/CameraEnt.ts:36")))}s.isMDXComponent=!0}}]);