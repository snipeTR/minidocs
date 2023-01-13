"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[3075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(d,o(o({ref:t},h),{},{components:n})):a.createElement(d,o({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:8},o="State Chains",l={unversionedId:"buildonminima/txntutorial/layer2/statechains",id:"buildonminima/txntutorial/layer2/statechains",title:"State Chains",description:"State Chains are similar to a normal ELTOO channel with a couple of differences.",source:"@site/docs/buildonminima/txntutorial/layer2/statechains.md",sourceDirName:"buildonminima/txntutorial/layer2",slug:"/buildonminima/txntutorial/layer2/statechains",permalink:"/docs/buildonminima/txntutorial/layer2/statechains",draft:!1,editUrl:"https://github.com/minima-global/minidocs/docs/buildonminima/txntutorial/layer2/statechains.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Full ELTOO Sequence",permalink:"/docs/buildonminima/txntutorial/layer2/eltoofullsequence"},next:{title:"Coin Flip v2",permalink:"/docs/buildonminima/txntutorial/layer2/coinflipv2"}},s={},c=[],h={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"state-chains"},"State Chains"),(0,i.kt)("p",null,"State Chains are similar to a normal ELTOO channel with a couple of differences."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The State Chain is run by a single entity, and it is the co-signer of any ELTOO Channel, with an additional User.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When the User wishes to give the Coin, which is in the ELTOO channel, to someone, they give them the Private Key of the Public Key that is used as one half of the MultiSig. A new Update and Settlement transaction is created that pays out the coin to the NEW user - a new address.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can only give the WHOLE coin to another user. This works well for NFTs.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"So every settlement transaction simply assigns the funds to a different new address controlled by the current owner.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When a User is given the coin the old user signs a chain of transfers. So that there is a 'State Chain' that defines who had and who was given the Coin.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"This means any previous User + the State Chain entity can in theory write themselves a new update and settlement and take the funds - so trust is required in the state chain entity.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Neither the State Chain entity nor the User ever have BOTH the keys required to update the channel.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It is impossible to take the Coin without it being known. Since the State Chain defines who should have it. So any attempt to steal the funds is 'known'.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The State Chain entity does not need to know 'who' the coin is being given to. All it promises is to create a new Update and Settlement transaction when the current owner wishes it - by signing with a public key, and that a new owner can be set with a\nnew public key when the current owner wishes it."))),(0,i.kt)("p",null,"Yes - the trust assumptions are different to a normal ELTOO transaction - but what is really powerful about State Chains is that unlike a normal ELTOO channel - users can be onboarded onto this Layer 2 protocol WITHOUT having to do an on chain transaction."),(0,i.kt)("p",null,"What you are doing is sending the 'coin' itself (or NFT) to layer 2 and then any user can be involved, since all you do is share the Private Key."))}u.isMDXComponent=!0}}]);