(this["webpackJsonpcomfy-cartel-website"]=this["webpackJsonpcomfy-cartel-website"]||[]).push([[12],{146:function(t,e,c){"use strict";c.d(e,"a",(function(){return i}));var n=c(147),a=c.n(n),s=c(148),r=c(77).a.firestore();function i(){return o.apply(this,arguments)}function o(){return(o=Object(s.a)(a.a.mark((function t(){var e,c,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=r.collection("info").doc("tweets"),t.next=4,e.get();case 4:return c=t.sent,n=c.data(),t.abrupt("return",n.latest_tweets);case 9:throw t.prev=9,t.t0=t.catch(0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}},197:function(t,e,c){},198:function(t,e,c){},216:function(t,e,c){"use strict";c.r(e);var n=c(33),a=c(0),s=c(199),r=c(208),i=(c(197),c(3)),o=function(){return Object(i.jsx)("div",{className:"LoaderWidget",children:Object(i.jsx)("h1",{className:"breathing-text",children:"The Comfy Cartel"})})},u=c(146);c(198),e.default=function(){var t=Object(r.a)("(max-width: 650px)"),e={width:t?"300":"450",height:t?"450":"700"},c=Object(a.useState)(!1),h=Object(n.a)(c,2),l=h[0],d=h[1],j=Object(a.useState)([]),b=Object(n.a)(j,2),f=b[0],p=b[1];return Object(a.useEffect)((function(){d(!0),Object(u.a)().then((function(t){p(t),d(!1)}))}),[]),Object(i.jsx)("div",{className:"LatestTweets",children:Object(i.jsxs)("div",{className:"content-container",children:[Object(i.jsx)("h1",{className:"title",children:"Latest Tweets"}),l?Object(i.jsx)("div",{className:"loading-container",children:Object(i.jsx)(o,{})}):Object(i.jsx)("div",{className:"grid-container",children:f.map((function(t,c){return Object(i.jsx)(s.a,{tweetId:t,options:{theme:"dark",width:e.width,height:e.height,size:"large"}},c)}))})]})})}}}]);