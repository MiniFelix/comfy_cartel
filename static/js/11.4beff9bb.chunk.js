(this["webpackJsonpcomfy-cartel-website"]=this["webpackJsonpcomfy-cartel-website"]||[]).push([[11],{150:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var c=a(151),i=a.n(c),n=a(152),r=a(79).a.firestore();function o(){return s.apply(this,arguments)}function s(){return(s=Object(n.a)(i.a.mark((function t(){var e,a,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=r.collection("info").doc("tweets"),t.next=4,e.get();case 4:return a=t.sent,c=a.data(),t.abrupt("return",c.latest_tweets);case 9:throw t.prev=9,t.t0=t.catch(0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}},162:function(t,e,a){},163:function(t,e,a){},215:function(t,e,a){"use strict";a.r(e);var c=a(34),i=a(1),n=a(212),r=(a(161),a(162),a(15)),o=a(63),s=[{image_url:"https://pbs.twimg.com/media/E4vWfWhUcAgfjN2?format=jpg&name=large",caption_title:"The Comfy Cartel - Party Crashers",caption_description:"Chapters 2 main arc is out, go check it out now!"},{image_url:"".concat(o.a,"/illustration/comfy-cartel-001.jpg"),caption_title:"The Comfy Cartel",caption_description:"Welcome"},{image_url:"".concat(o.a,"/illustration/comfy-cartel-007.jpg"),caption_title:"Night Stroll",caption_description:"Kkatamina riding in one of her luxurious cars"},{image_url:"".concat(o.a,"/illustration/comfy-cartel-005.jpg"),caption_title:"Corpse Husband",caption_description:"Corpse receives an invitation from a certain someone..."},{image_url:"".concat(o.a,"/illustration/comfy-cartel-002.jpg"),caption_title:"Sykkuno",caption_description:"Corpse learns that his handler isn\u2019t all that he seems"},{image_url:"".concat(o.a,"/illustration/comfy-cartel-006.jpg"),caption_title:"Peter Park",caption_description:"As Yakuza Peter"},{image_url:"".concat(o.a,"/illustration/comfy-cartel-004.jpg"),caption_title:"The Amigops",caption_description:"A family reunion on the horizon..."},{image_url:"".concat(o.a,"/illustration/comfy-cartel-003.jpg"),caption_title:"The Luminarae's Council",caption_description:""}],l=a(164),u=a.n(l),p=a(165),m=a.n(p),j=a(142),h=(a(163),a(4)),d="".concat(o.a,"/cartel_ost_01.mp3"),f=function(){var t=Object(i.useState)(new Audio(d)),e=Object(c.a)(t,1)[0],a=Object(i.useState)(!1),n=Object(c.a)(a,2),r=n[0],o=n[1];return Object(i.useEffect)((function(){e.load(),e.volume=.1,e.loop=!0,r?(e.play(),e.muted=!1):e.muted=!0}),[r]),Object(i.useEffect)((function(){return function(){e.pause()}}),[]),Object(h.jsx)(j.a,{className:"AudioPlayer",onClick:function(){o(!r)},children:r?Object(h.jsx)(u.a,{fontSize:"large",htmlColor:"white"}):Object(h.jsx)(m.a,{fontSize:"large",htmlColor:"white"})})};a(150);function b(t){var e=t.slides,a=void 0===e?[]:e,r=Object(i.useState)(0),o=Object(c.a)(r,2),s=o[0],l=o[1];return Object(h.jsx)(n.a,{className:"carousel",activeIndex:s,onSelect:function(t,e){l(t)},children:a.map((function(t,e){return Object(h.jsxs)(n.a.Item,{style:{height:"100vh"},children:[Object(h.jsx)("img",{style:{objectFit:"cover",width:"100%",height:"100%"},className:"d-block w-100",src:t.image_url,alt:"First slide"}),Object(h.jsx)("div",{className:"carousel-bg"}),Object(h.jsxs)(n.a.Caption,{className:"carousel-caption",children:[Object(h.jsx)("h3",{children:t.caption_title}),Object(h.jsx)("p",{children:t.caption_description})]})]},e)}))})}e.default=function(){var t=Object(r.g)();return Object(h.jsxs)("div",{className:"Home",children:[Object(h.jsx)(b,{slides:s}),Object(h.jsx)("div",{className:"bg-gradient"}),Object(h.jsx)("div",{style:{},className:"audio-player",children:Object(h.jsx)(f,{})}),Object(h.jsx)("div",{className:"read-chapter-button",onClick:function(){return t.push("/chapters")},children:"Read Chapters"})]})}}}]);