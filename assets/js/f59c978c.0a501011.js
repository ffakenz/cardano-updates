"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[6545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={title:"Consensus Team Update",slug:"2022-11-30-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},i=void 0,s={permalink:"/cardano-updates/2022-11-30-consensus",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/blog/2022-11-30-consensus.md",source:"@site/blog/2022-11-30-consensus.md",title:"Consensus Team Update",description:"High level summary",date:"2022-11-30T00:00:00.000Z",formattedDate:"November 30, 2022",tags:[{label:"consensus",permalink:"/cardano-updates/tags/consensus"}],readingTime:2.4,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Team Update",slug:"2022-11-30-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},nextItem:{title:"Performance & tracing update",permalink:"/cardano-updates/2022-11-30-performance-and-tracing"}},l={authorsImageUrls:[void 0]},p=[{value:"High level summary",id:"high-level-summary",level:2},{value:"Workstreams",id:"workstreams",level:2},{value:"UTxO HD prototype",id:"utxo-hd-prototype",level:3},{value:"Backing store property tests",id:"backing-store-property-tests",level:4},{value:"LSM tree implementation",id:"lsm-tree-implementation",level:3},{value:"CSJ prototype",id:"csj-prototype",level:3},{value:"New VRF and KES crypto integration",id:"new-vrf-and-kes-crypto-integration",level:3},{value:"Technical debt",id:"technical-debt",level:3},{value:"Fostering collaboration",id:"fostering-collaboration",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"high-level-summary"},"High level summary"),(0,r.kt)("p",null,"During the past two weeks, the consensus team merged improvements to the monadic\ncursor API that was needed to implement LMDB range reads, which is in turn\nrequired for the implementation of the UTxO HD feature. We added tables to\nseveral tests in for the UTxO HD feature, which increases our confidence in the\ncorrectness of the prototype. The mempool property tests are close to being\ncompleted. Also, we finished the LSM tree tuning algorithm."),(0,r.kt)("p",null,"On the Genesis front we started simplifying the BlockFetch logic with\nCSJ-specific workloads in mind. "),(0,r.kt)("p",null,"We are also documenting the Block Diffusion Pipelining feature, and added a\nhigh-level overview of consensus to the top level documentation of\n",(0,r.kt)("inlineCode",{parentName:"p"},"ouroboros-network"),"."),(0,r.kt)("h2",{id:"workstreams"},"Workstreams"),(0,r.kt)("h3",{id:"utxo-hd-prototype"},"UTxO HD prototype"),(0,r.kt)("p",null,"We merged the implementation of a monadic cursor API (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/lmdb-simple/pull/1"},"#1"),")) which was\nneeded to solve a bug with LMDB range-reads. After this PR was merged, we focused on\nbridging the gap between the ",(0,r.kt)("inlineCode",{parentName:"p"},"lmdb-simple")," interface and consensus by facilitating\nusing ",(0,r.kt)("inlineCode",{parentName:"p"},"lmdb-simple"),"'s cursor API without ",(0,r.kt)("inlineCode",{parentName:"p"},"Serialise")," constraints (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/lmdb-simple/pull/3"},"#3"),")."),(0,r.kt)("p",null,"We refactored the backing store property tests to use ",(0,r.kt)("inlineCode",{parentName:"p"},"quickcheck-lockstep"),"\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4081"},"#4081"),")."),(0,r.kt)("p",null,"We added tables to the mock ledger in the UTxO-HD feature branch\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4184"},"#4184"),"). Every test that used to run with ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleBlocks")," now uses\ntables. This will enable us to exercise the UTxO HD mempool integration by\nleveraging the existing mempool property-tests. The new state-machine\nproperty-tests are still needed for testing the parallel behaviour of the\nmempool."),(0,r.kt)("p",null,"Our work on the mempool state-machine tests revealed the need for improvements\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},"quickcheck-state-machine")," library. Parallel testing assumed that the\nstate machine did not have access to mutable references. However, the mempool\ntests require the use of such mutable references for mocking the ledger\ninterface. As a result, our parallel tests were failing with rather obscure\nmessages. @Jasagredo submitted a pull request (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stevana/quickcheck-state-machine/pull/12"},"#12"),") that allows for\nnew mutable references to be created at each run of the state machine."),(0,r.kt)("h4",{id:"backing-store-property-tests"},"Backing store property tests"),(0,r.kt)("h3",{id:"lsm-tree-implementation"},"LSM tree implementation"),(0,r.kt)("p",null,"We finished the LSM Tree tuning algorithm. We are currently tidying up the code\nand gathering results (i.e., plots and their interpretation)."),(0,r.kt)("h3",{id:"csj-prototype"},"CSJ prototype"),(0,r.kt)("p",null,"We started simplifying the BlockFetch logic with CSJ-specific workloads in mind."),(0,r.kt)("h3",{id:"new-vrf-and-kes-crypto-integration"},"New VRF and KES crypto integration"),(0,r.kt)("p",null,"Started working on supporting new version of ",(0,r.kt)("inlineCode",{parentName:"p"},"StandardCrypto")," which uses compact\nKES and batched VRF (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4151"},"#4151"),")."),(0,r.kt)("h3",{id:"technical-debt"},"Technical debt"),(0,r.kt)("p",null,'We reviewed the existing state of the Block Diffusion Pipelining document. We\nare now working on the "Implementation" section (',(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/issues/4020"},"#4020"),")."),(0,r.kt)("h3",{id:"fostering-collaboration"},"Fostering collaboration"),(0,r.kt)("p",null,"We cleared up our understanding of the error dynamics of forecasting\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4146"},"#4146")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4174"},"#4174"),")."),(0,r.kt)("p",null,"We submitted a pull request that adds an overview of consensus to the ",(0,r.kt)("a",{parentName:"p",href:"https://input-output-hk.github.io/ouroboros-network/"},"top level\ndocumentation")," of\nouroboros-network (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4197"},"#4197"),"). This overview describes the consensus components and adds a\nhyperlinked map to the modules documentation."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/pull/4197"},"https://github.com/input-output-hk/ouroboros-network/pull/4197")))}c.isMDXComponent=!0}}]);