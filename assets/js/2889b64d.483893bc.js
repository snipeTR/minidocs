"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[4679],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1631:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},p="Start a Private Node",s={unversionedId:"buildonminima/startaprivatenode",id:"buildonminima/startaprivatenode",title:"Start a Private Node",description:"For development purposes, it can be useful to run one or more private test nodes stimulating network traffic. Starting these nodes from Genesis will also give you 1 billion coins to test transactions with.",source:"@site/docs/buildonminima/startaprivatenode.md",sourceDirName:"buildonminima",slug:"/buildonminima/startaprivatenode",permalink:"/docs/buildonminima/startaprivatenode",editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/startaprivatenode.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/docs/earnrewards/incentiveprogramtermsandconditions/general"},next:{title:"Introduction",permalink:"/docs/buildonminima/dapptutorial/buildintro"}},u={},c=[{value:"Available start up parameters",id:"available-start-up-parameters",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"start-a-private-node"},"Start a Private Node"),(0,o.kt)("p",null,"For development purposes, it can be useful to run one or more private test nodes stimulating network traffic. Starting these nodes from Genesis will also give you 1 billion coins to test transactions with. "),(0,o.kt)("p",null,"To start a private node from genesis:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Node 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -jar minima.jar -data minidata1 -test -nop2p -genesis\n")),(0,o.kt)("p",null,"This will start a node on the default ports of 9001-5. "),(0,o.kt)("p",null,"To create a second node to test transactions between two nodes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Node 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -jar minima.jar -data minidata2 -test -nop2p -clean -port 10001 -connect 127.0.0.1:9001\n")),(0,o.kt)("p",null,"If you need to quit Minima and wish to restart it without deleting old data use:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Node 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -jar minima.jar -data minidata1 -test -nop2p\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Node 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -jar minima.jar -data minidata2 -test -nop2p -connect 127.0.0.1:9001\n")),(0,o.kt)("h2",{id:"available-start-up-parameters"},"Available start up parameters"),(0,o.kt)("p",null,"Optional start up parameters:",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-rpcenable")," : enable remote procedure call",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-mdsenable")," : enable the MiniDapp System (mds)",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-clean")," : clears existing data, all coins will be lost ",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-data")," : specify a path and folder name for the config files",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-port")," : specify the initial port for Minima to use",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-host")," : Specify the host IP",(0,o.kt)("br",null)),(0,o.kt)("p",null,"To create a private node:",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-genesis")," : start the node from the genesis block (automatically uses -clean and -private)",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-test")," : uses test parameters e.g. faster block times (automatically uses -private)",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-connect")," : Create your own network by manually connecting to this list of host:port",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-nop2p")," : Disable the automatic P2P system",(0,o.kt)("br",null)))}d.isMDXComponent=!0}}]);