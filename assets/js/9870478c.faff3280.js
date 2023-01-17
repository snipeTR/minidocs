"use strict";(self.webpackChunkminima_docs=self.webpackChunkminima_docs||[]).push([[1836],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),p=o,d=f["".concat(l,".").concat(p)]||f[p]||h[p]||r;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2987:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return h}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],c={sidebar_position:9},l="A Cascading Chain",s={unversionedId:"learn/minimawhitepaper/ acascadingchain",id:"learn/minimawhitepaper/ acascadingchain",title:"A Cascading Chain",description:"The power of hashing ensures that an unbroken chain of blocks cannot be altered in any way. The power of hashing also ensures that sometimes someone will find a very high difficulty PoW when looking for a much lower one. If you take this into account pre-PoW you can construct block headers that reference multiple block parents at different levels of difficulty. Instead of having 2 difficulty values for a user to mine in the Tx-PoW, the Transaction Difficulty set to 10 seconds of work on average, and the Block Difficulty set to 1 block every 50 seconds, let us add 1 more difficulty, the Super Block Difficulty set to twice the current block difficulty...",source:"@site/docs/learn/minimawhitepaper/ acascadingchain.md",sourceDirName:"learn/minimawhitepaper",slug:"/learn/minimawhitepaper/ acascadingchain",permalink:"/docs/learn/minimawhitepaper/ acascadingchain",editUrl:"https://github.com/minima-global/minidocs/docs/learn/minimawhitepaper/ acascadingchain.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Energy",permalink:"/docs/learn/minimawhitepaper/energy"},next:{title:"Storage-less MMR UTXO",permalink:"/docs/learn/minimawhitepaper/storagelessmmrutxo"}},u={},h=[],f={toc:h};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a-cascading-chain"},"A Cascading Chain"),(0,r.kt)("p",null,"The power of hashing ensures that an unbroken chain of blocks cannot be altered in any way. The power of hashing also ensures that sometimes someone will find a very high difficulty PoW when looking for a much lower one. If you take this into account pre-PoW you can construct block headers that reference multiple block parents at different levels of difficulty. Instead of having 2 difficulty values for a user to mine in the Tx-PoW, the Transaction Difficulty set to 10 seconds of work on average, and the Block Difficulty set to 1 block every 50 seconds, let us add 1 more difficulty, the Super Block Difficulty set to twice the current block difficulty..."),(0,r.kt)("p",null,"Every block references its direct parent and the last Super Block. Now a Tx-PoW has 3 possible levels, Transaction, Block and Super Block. If the Block hash difficulty is high enough it becomes a Super Block (which is also a valid block). Eventually, all blocks and data are discarded and only a chain of Super Block headers is kept as a long term store of the total PoW in the chain. Now instead of only 1 Super Block Level, let us use 256. 1 for each bit in a 32-byte hash. Each level is twice the difficulty of the level below. These are the only difficulty values for each block, each linking back to its Super Block Level parent."),(0,r.kt)("p",null,"The proof chain grows logarithmically, so that an almost limitless amount of PoW can be stored in a finite chain of headers, since every level stores blocks that are twice as difficult as the level below. Thus, an exponentially shorter unbroken chain of more PoWerful blocks is kept in place of a longer unbroken chain of less PoWerful ones. Due to the nature of randomised hash mining, the sum of the Tx-PoW difficulty of the higher-level blocks will on average equal the sum of the Tx-PoW difficulty of the lower level blocks."),(0,r.kt)("p",null,"The cascading chain allows each user to keep the total cumulative PoW without requiring the storage of every block. Only certain lucky blocks are kept, all of which reference each other, to keep a short unbroken chain of ever-increasing total PoW."),(0,r.kt)("p",null,"Almost all blocks and transactions are pruned. Pruning has no effect on the security of the user doing-the-pruning. Once a transaction has been checked by a user, that transaction need never be checked again, a simple reference will suffice. Blocks are kept for a certain period of time, a week would be fine, before being pruned. This way any user that logs on to the network can always catch up a weeks' worth of blocks. So as long as a user logs on to the network once a week he can validate every transaction on layer 1 and run a Complete node, full validating and full TxPoW mining, without needing increasing amounts of storage."),(0,r.kt)("p",null,"For a new user, who has no previous history of the chain and no coins, Nakamoto Consensus can objectively and independently tell which chain is the current valid chain - the Cascading Chain with the most PoW."))}p.isMDXComponent=!0}}]);