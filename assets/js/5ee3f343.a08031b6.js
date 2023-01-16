"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4977],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(n),p=i,d=f["".concat(l,".").concat(p)]||f[p]||m[p]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8971:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={sidebar_position:6},l="M of N MultiSig",c={unversionedId:"buildonminima/txntutorial/layer1/mofnmultisig",id:"buildonminima/txntutorial/layer1/mofnmultisig",title:"M of N MultiSig",description:"An M of N signature is a threshold signature. It requires a certain number of people in a pool to sign. Minima has a function just for that. So if you need 2 of 3 to sign..",source:"@site/docs/buildonminima/txntutorial/layer1/mofnmultisig.md",sourceDirName:"buildonminima/txntutorial/layer1",slug:"/buildonminima/txntutorial/layer1/mofnmultisig",permalink:"/docs/buildonminima/txntutorial/layer1/mofnmultisig",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer1/mofnmultisig.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"More Complex MultiSig",permalink:"/docs/buildonminima/txntutorial/layer1/complexmultisig"},next:{title:"SlowCash",permalink:"/docs/buildonminima/txntutorial/layer1/slowcash"}},s={},m=[],f={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"m-of-n-multisig"},"M of N MultiSig"),(0,o.kt)("p",null,"An M of N signature is a threshold signature. It requires a certain number of people in a pool to sign. Minima has a function just for that. So if you need 2 of 3 to sign.. "),(0,o.kt)("p",null,"You can use.."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"RETURN MULTISIG ( 2 0xFirstKey 0x2ndKey 0x3rdKey )\n")),(0,o.kt)("p",null,"In fact our first 2 of 2 multisig could have just been"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"RETURN MULTISIG ( 2 0xFirstKey 0x2ndKey )\n")))}p.isMDXComponent=!0}}]);