"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[9393],{3905:function(n,e,t){t.d(e,{Zo:function(){return d},kt:function(){return u}});var i=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=i.createContext({}),l=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},d=function(n){var e=l(n.components);return i.createElement(s.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,s=n.parentName,d=p(n,["components","mdxType","originalType","parentName"]),c=l(t),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return t?i.createElement(h,o(o({ref:e},d),{},{components:t})):i.createElement(h,o({ref:e},d))}));function u(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,o=new Array(r);o[0]=c;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=n,p.mdxType="string"==typeof n?n:a,o[1]=p;for(var l=2;l<r;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1899:function(n,e,t){t.r(e),t.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],p={sidebar_position:7},s="Using MiniDapps",l={unversionedId:"runanode/usingminidapps",id:"runanode/usingminidapps",title:"Using MiniDapps",description:"MiniDapps are decentralized applications on Minima. To learn more about MiniDapps, please see the About MiniDapps section.",source:"@site/docs/runanode/usingminidapps.md",sourceDirName:"runanode",slug:"/runanode/usingminidapps",permalink:"/docs/runanode/usingminidapps",editUrl:"https://github.com/minima-global/minidocs/docs/runanode/usingminidapps.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Linux VPS",permalink:"/docs/runanode/linux_vps"},next:{title:"Download MiniDapps",permalink:"/docs/runanode/latestminidapps"}},d={},m=[{value:"Accessing the MiniDapp Hub",id:"accessing-the-minidapp-hub",level:2},{value:"Installing MiniDapps",id:"installing-minidapps",level:2},{value:"MiniDapp Permissions",id:"minidapp-permissions",level:2},{value:"Changing MiniDapp Permissions",id:"changing-minidapp-permissions",level:3},{value:"Accepting/Denying Pending Commands",id:"acceptingdenying-pending-commands",level:3},{value:"Uninstalling MiniDapps",id:"uninstalling-minidapps",level:2}],c={toc:m};function u(n){var e=n.components,p=(0,a.Z)(n,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-minidapps"},"Using MiniDapps"),(0,r.kt)("p",null,"MiniDapps are decentralized applications on Minima. To learn more about MiniDapps, please see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/minidapps/minidappsintro"},"About MiniDapps")," section."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Android Users ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The following guidance is for Desktop and Server users. Android users can download the latest MiniDapps from within the app by visiting the ",(0,r.kt)("strong",{parentName:"p"},"DAPP Store"),". Once downloaded, MiniDapps can be installed from the app ",(0,r.kt)("strong",{parentName:"p"},"Home")," page.",(0,r.kt)("br",null),"\nFor more guidance on Android, please visit the ",(0,r.kt)("strong",{parentName:"p"},"Help")," section in the app. "))),(0,r.kt)("h2",{id:"accessing-the-minidapp-hub"},"Accessing the MiniDapp Hub"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to to ",(0,r.kt)("a",{parentName:"li",href:"https://127.0.0.1:9003/"},"https://127.0.0.1:9003/")," or https://localhost:9003/ in your web browser. ",(0,r.kt)("br",null),"\nServer users will need to use https://YourServerIP:9003/  "),(0,r.kt)("li",{parentName:"ol"},"You may be shown a security certificate warning, to which you can click on Advanced, then Proceed. This may be different depending on the browser and OS you are using."),(0,r.kt)("li",{parentName:"ol"},"You will see your login page, to get your password return to the Command Line and enter ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mds\n")),(0,r.kt)("p",null,"You should see an output similar to below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mds\n{\n  "command":"mds",\n  "status":true,\n  "response":{\n    "password":"1SV0-F0WN-K367",\n    "minidapps":[]\n  }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Copy and Paste your password into the field and click ",(0,r.kt)("strong",{parentName:"li"},"Enter")),(0,r.kt)("li",{parentName:"ol"},"You will see your MiniDapp hub!")),(0,r.kt)("h2",{id:"installing-minidapps"},"Installing MiniDapps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and save the MiniDapps you wish to use from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/minima-global/Minima/tree/master/mds/store/files"},"here.")),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Choose File")," and select a MiniDapp "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Install")," and return to the hub to open the app")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Windows",src:t(3361).Z,width:"1053",height:"241"})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Testnet Coins")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To use the Wallet MiniDapp, you will need Testnet Minima coins. These can be got by using the Gimme20 MiniDapp. Testnet coins are not of any value."))),(0,r.kt)("h2",{id:"minidapp-permissions"},"MiniDapp Permissions"),(0,r.kt)("p",null,"By default, all MiniDapps will be given ",(0,r.kt)("strong",{parentName:"p"},"READ")," permission."),(0,r.kt)("p",null,"When a MiniDapp with READ permission attempts to run a command which would make changes to your node or require access to your funds, a PENDING command will be created which you will need to accept. "),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You should only give ",(0,r.kt)("strong",{parentName:"p"},"WRITE")," permissions to MiniDapps that you trust. ",(0,r.kt)("br",null),"\nOnly the ",(0,r.kt)("strong",{parentName:"p"},"Terminal")," MiniDapp will need to be installed with ",(0,r.kt)("strong",{parentName:"p"},"WRITE")," permission "))),(0,r.kt)("p",null,"To install the Terminal with WRITE permission; you must run following command from the Command Line Interface where Minima is running (ensure you have downloaded the Terminal MiniDapp first and use the relevant file path below):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mds action:install file:C:\\Users\\Downloads\\Terminal.mds.zip trust:write\n")),(0,r.kt)("p",null,"You can then use the Terminal to change permissions for a MiniDapp."),(0,r.kt)("h3",{id:"changing-minidapp-permissions"},"Changing MiniDapp Permissions"),(0,r.kt)("p",null,"To list your MiniDapps and check their existing permission, use ",(0,r.kt)("inlineCode",{parentName:"p"},"mds")," from the Terminal. Each MiniDapp has a ",(0,r.kt)("inlineCode",{parentName:"p"},"uid")," to identify it. "),(0,r.kt)("p",null,"To change permissions for a MiniDapp, copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"uid")," of the MiniDapp you wish to change and run the following command from the Terminal: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mds action:permissions uid:0x... trust:read/write\n")),(0,r.kt)("p",null,"The output should look like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mds action:permissions uid:0x02FA22EF2A2A3B0FA01D688A902779E5 trust:write\n{\n  "command":"mds",\n  "params":{\n    "action":"permissions",\n    "uid":"0x02FA22EF2A2A3B0FA01D688A902779E5",\n    "trust":"write"\n  },\n  "status":true,\n  "pending":false\n}\n')),(0,r.kt)("h3",{id:"acceptingdenying-pending-commands"},"Accepting/Denying Pending Commands"),(0,r.kt)("p",null,"When using MiniDapps that have READ permissions, you will be asked to ",(0,r.kt)("strong",{parentName:"p"},"accept/deny")," commands that require access to your funds e.g. Sending funds from the Wallet or MaxSolo"),(0,r.kt)("p",null,"To review your pending commands, run from the Terminal MiniDapp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mds action:pending \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: Sending a transaction from the Wallet")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mds action:pending\n{\n  "command":"mds",\n  "params":{\n    "action":"pending"\n  },\n  "status":true,\n  "pending":false,\n  "response":{\n    "pending":[{\n      "uid":"0x4D020F84762AAB4EF593B6E6DACE7064",    <--COPY THIS UID\n      "minidapp":{\n        "uid":"0xFE2750C4186CF82FB4E91D5FEA21839F",\n        "conf":{\n          "name":"Wallet",\n          "icon":"minimaWallet.png",\n          "version":"0.1.5",\n          "description":"Official Minima Wallet",\n          "browser":"internal",\n          "permission":"read"\n        }\n      },\n      "command":"send amount:1 address:MxG087TG0E8G7FN4SF8T22YTZ00Z8MHA8FF7ERZMWD4TWAK3Y07GGBG4PBGEG1U tokenid:0x00 burn:0"\n    },\n')),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"uid")," of the pending command, then ",(0,r.kt)("strong",{parentName:"p"},"to accept/deny the command")," write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mds action:accept/deny uid:0x4D020F84762AAB4EF593B6E6DACE7064\n")),(0,r.kt)("p",null,"Accepting the command will execute the command; denying will remove the pending command from the list and will not be executed."),(0,r.kt)("h2",{id:"uninstalling-minidapps"},"Uninstalling MiniDapps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the Command Line where Minima is running, type ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mds\n")),(0,r.kt)("p",null,"You should see an output similar to below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mds\n{\n  "command":"mds",\n  "status":true,\n  "response":{\n    "password":"1SV0-F0WN-K367",\n    "minidapps":[{\n      "uid":"0xFE2750C4186CF82FB4E91D5FEA21839F",\n      "conf":{\n        "name":"Wallet",\n        "icon":"minimaWallet.png",\n        "version":"0.1.5",\n        "description":"Official Minima Wallet"\n      }\n    }]\n  }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("strong",{parentName:"li"},"UID")),(0,r.kt)("li",{parentName:"ol"},"Enter the following command, pasting your MiniDapp ",(0,r.kt)("inlineCode",{parentName:"li"},"uid")," on the end:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mds action:uninstall uid:0xFE2750C4186CF82FB4E91D5FEA21839F\n")))}u.isMDXComponent=!0},3361:function(n,e,t){e.Z=t.p+"assets/images/minihub-8109ab02cca567a2e257972eced7206a.png"}}]);