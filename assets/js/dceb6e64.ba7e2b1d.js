"use strict";(self.webpackChunkcardano_updates=self.webpackChunkcardano_updates||[]).push([[8242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={title:"Consensus Quarterly Update",slug:"2022-11-15-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},o=void 0,s={permalink:"/cardano-updates/quarterly/2022-11-15-consensus",editUrl:"https://github.com/input-output-hk/cardano-updates/tree/main/quarterly/2022-11-15-consensus.md",source:"@site/quarterly/2022-11-15-consensus.md",title:"Consensus Quarterly Update",description:"Consensus Quarterly Update",date:"2022-11-15T00:00:00.000Z",formattedDate:"November 15, 2022",tags:[{label:"consensus",permalink:"/cardano-updates/quarterly/tags/consensus"}],readingTime:3.655,hasTruncateMarker:!1,authors:[{name:"Damian Nadales",title:"Consensus Team Lead",url:"https://github.com/dnadales",imageURL:"https://github.com/dnadales.png",key:"dnadales"}],frontMatter:{title:"Consensus Quarterly Update",slug:"2022-11-15-consensus",authors:"dnadales",tags:["consensus"],hide_table_of_contents:!1},nextItem:{title:"Network Team Update",permalink:"/cardano-updates/quarterly/2022-11-09-network"}},l={authorsImageUrls:[void 0]},u=[{value:"Consensus Quarterly Update",id:"consensus-quarterly-update",level:2},{value:"2022-09 - 2022-11",id:"2022-09---2022-11",level:2},{value:"Main achievements",id:"main-achievements",level:3},{value:"UTxO HD",id:"utxo-hd",level:4},{value:"Genesis",id:"genesis",level:4},{value:"Conway era",id:"conway-era",level:4},{value:"Technical debt",id:"technical-debt",level:4},{value:"Fostering collaboration",id:"fostering-collaboration",level:4},{value:"Next steps",id:"next-steps",level:3},{value:"UTxO HD",id:"utxo-hd-1",level:4},{value:"Genesis",id:"genesis-1",level:4},{value:"Tech debt",id:"tech-debt",level:4},{value:"Fostering collaboration",id:"fostering-collaboration-1",level:4}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"consensus-quarterly-update"},"Consensus Quarterly Update"),(0,r.kt)("h2",{id:"2022-09---2022-11"},"2022-09 - 2022-11"),(0,r.kt)("h3",{id:"main-achievements"},"Main achievements"),(0,r.kt)("h4",{id:"utxo-hd"},"UTxO HD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As a consequence of the errors observed when running distributed mempool\nbenchmarks, we re-designed the UTxO HD mempool integration, which fixed these\nerrors and lead to a simpler and more maintainable design.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We focused on increasing test coverage for the UTxO-HD prototype. In\nparticular, we added property tests for:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Backing store (work ongoing)"),(0,r.kt)("li",{parentName:"ul"},"Era transitions"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The property tests we added uncovered several bugs, which is a great result\ngiven the exponential increase in the cost of finding bugs as they are closer\nto deployment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One of the errors found by our tests required us to work on improvements in\nthe Haskell bindings for LMDB. This work is ongoing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We started working on the mempool property tests that will exercise the new\ncode paths that UTxO HD introduced.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'We developed, benchmarked and tested an implementation of sequences of\ndifferences based on "anti-diffs". Performance results of diff sequence\noperations show that we achieved a speedup of about ',(0,r.kt)("inlineCode",{parentName:"p"},"4x")," across several\nscenarios. Note: this speedup is taking into account diff sequence operations\nonly, so the consensus-wide speedup is less than ",(0,r.kt)("inlineCode",{parentName:"p"},"4x"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'We integrated the "anti-diff" prototype into the UTxO HD feature branch.'))),(0,r.kt)("h4",{id:"genesis"},"Genesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We wrote a simulator that demonstrates soundness of an abstract implementation\nof the new chain selection rule."),(0,r.kt)("li",{parentName:"ul"},"We elaborated a draft specification for the Genesis implementation (currently\nawaiting feedback from other architects)."),(0,r.kt)("li",{parentName:"ul"},"We elaborated a draft specification for the ChainSync Jumping optimization. In\nparticular, this includes a proof sketch that the latter preserves liveness\nand safety in all cases."),(0,r.kt)("li",{parentName:"ul"},"With the Networking team, we co-designed the eclipse avoidance mechanism,\nspecifically its coherence with the Genesis implementation plan's security\nand its dependence on the new ChainSync Jumping optimization."),(0,r.kt)("li",{parentName:"ul"},"We implemented a prototype for ChainSync Jumping. Initial benchmarks showed a\nperformance degradation wrt the baseline. Our optimization attempts so far\nhave brought the performance closer to the baseline, but not yet to parity.")),(0,r.kt)("h4",{id:"conway-era"},"Conway era"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We did most of the heavy lifting required to integrate the Conway era into the\nConsensus layer.")),(0,r.kt)("h4",{id:"technical-debt"},"Technical debt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We started working on enabling CI nightly tests, which revealed several test\nfailures due to thunks being found it data structures used by the ledger and\nconsensus. We made a lot of progress fixing those thunk errors, but some\nerrors still remain.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We elaborated a ",(0,r.kt)("inlineCode",{parentName:"p"},"db-analyser")," benchmark for the ledger operations. This led us\nto the identification of high processing time at epoch boundaries, and we\ncould not observe any performance degradation that can be attributed to era\nchanges.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We fixed a source of flakiness in the ChainDB QSM test.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We clarified a common source of confusion around VRF tie-breaking and\ncross-era chain selection.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We fixed a bug in the maximum-allowed ledger major protocol version."))),(0,r.kt)("h4",{id:"fostering-collaboration"},"Fostering collaboration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We spent time making ",(0,r.kt)("inlineCode",{parentName:"li"},"cardano-updates")," the central source of information for\nthe core teams stakeholders."),(0,r.kt)("li",{parentName:"ul"},"We went through the Galois gap analysis and extracted actionable points to\ntake on next."),(0,r.kt)("li",{parentName:"ul"},"Bart and Yogesh continued with their onboarding and stated making substantial\ncontributions to consensus.")),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("h4",{id:"utxo-hd-1"},"UTxO HD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finish the mempool property tests."),(0,r.kt)("li",{parentName:"ul"},"Benchmark the latest version of the prototype."),(0,r.kt)("li",{parentName:"ul"},"Elaborate a document that describes new integration test scenarios and pass it\nto the SDET team."),(0,r.kt)("li",{parentName:"ul"},"Bring query UTxO by address command performance on par with the baseline\nversion.")),(0,r.kt)("h4",{id:"genesis-1"},"Genesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Receive and incorporate Duncan's feedback on the first draft specification for\nthe Genesis implementation."),(0,r.kt)("li",{parentName:"ul"},"Begin prototyping the first genesis implementation, unless the first draft\nneeds major changes."),(0,r.kt)("li",{parentName:"ul"},"Draft a second revision of the Genesis report."),(0,r.kt)("li",{parentName:"ul"},"Review the second revision with a wider audience, which includes at least\nAlexander Russell. That feedback will drive a third and hopefully final\nrevision."),(0,r.kt)("li",{parentName:"ul"},"Investigate how to mitigate the ~30% slowdown we have observed so far in the\nChainSync jumping prototype, and try to mitigate it. In particular, we might\nneed to optimize the existing BlockFetch logic.")),(0,r.kt)("h4",{id:"tech-debt"},"Tech debt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enabling nightly CI tests.")),(0,r.kt)("h4",{id:"fostering-collaboration-1"},"Fostering collaboration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Merge the tutorial document Galois wrote; requires CI integration."),(0,r.kt)("li",{parentName:"ul"},"Come up with our own documentation improvements, many of which were suggested\nin the Galois gap analysis."),(0,r.kt)("li",{parentName:"ul"},"Try to hire a new team member.")))}d.isMDXComponent=!0}}]);