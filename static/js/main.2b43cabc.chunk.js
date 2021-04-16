(this["webpackJsonpfmotion-example"]=this["webpackJsonpfmotion-example"]||[]).push([[0],{43:function(e,i,t){},44:function(e,i,t){"use strict";t.r(i);var n=t(0),a=t.n(n),s=t(30),r=t.n(s),o=t(32),c=t(22),d=t(21),l=t(4),j=t(46),h=t(2),x={initial:{rotate:-180},final:{rotate:0,transition:{duration:1}}},p={initial:{opacity:0,pathLength:0},final:{opacity:1,pathLength:1,transition:{duration:2,ease:"easeInOut"}}},b=function(){return Object(h.jsxs)("header",{children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsxs)(j.a.svg,{className:"pizza-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",variants:x,initial:"initial",animate:"final",children:[Object(h.jsx)(j.a.path,{variants:p,fill:"none",d:"M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"}),Object(h.jsx)(j.a.path,{variants:p,fill:"none",d:"M50 30 L50 -10 C50 -10 90 -10 90 30 Z"})]})}),Object(h.jsx)(j.a.div,{initial:{y:-250},animate:{y:-10},transition:{delay:.2,type:"spring",stiffnes:120},className:"title",children:Object(h.jsx)("h1",{children:"Pizza Joint"})})]})},v=t(12),O=t(48),u={animationOne:{x:[-20,20],y:[0,-30],transition:{x:{yoyo:1/0,duration:.5},y:{yoyo:1/0,duration:.25}}},animationTwo:{y:[0,-40],x:0,transition:{y:{yoyo:1/0,ease:"easeOut"}}}},y=function(){var e=Object(O.a)("animationOne","animationTwo"),i=Object(d.a)(e,2),t=i[0],n=i[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a.div,{className:"loader",variants:u,animate:t}),Object(h.jsx)("div",{onClick:function(){return n()},children:"Cycle Animation"})]})},m={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.4,yoyo:1/0}}},f={hidden:{opacity:0},visible:{opacity:1,transition:{delay:.5,duration:1}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},g=function(){return Object(h.jsxs)(j.a.div,{variants:f,initial:"hidden",animate:"visible",exit:"exit",className:"home container",children:[Object(h.jsx)("h2",{children:"Welcome to Pizza Joint"}),Object(h.jsx)(v.b,{to:"/base",children:Object(h.jsx)(j.a.button,{variants:m,whileHover:"hover",children:"Create Your Pizza"})}),Object(h.jsx)(y,{})]})},w={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",delay:"0.5"}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},z={hidden:{x:"-100vw"},visible:{x:0,transition:{type:"spring",stiffness:120}}},C={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.4,yoyo:1/0}}},S=function(e){var i=e.addBase,t=e.pizza;return Object(h.jsxs)(j.a.div,{variants:w,initial:"hidden",animate:"visible",exit:"exit",className:"base container",children:[Object(h.jsx)("h3",{children:"Step 1: Choose Your Base"}),Object(h.jsx)("ul",{children:["Classic","Thin & Crispy","Thicc Crust"].map((function(e){var n=t.base===e?"active":"";return Object(h.jsx)(j.a.li,{whileHover:{scale:1.3,originX:0,color:"#f8e112"},transition:{type:"spring",stiffness:300},onClick:function(){return i(e)},children:Object(h.jsx)("span",{className:n,children:e})},e)}))}),t.base&&Object(h.jsx)(j.a.div,{variants:z,className:"next",children:Object(h.jsx)(v.b,{to:"/toppings",children:Object(h.jsx)(j.a.button,{variants:C,whileHover:"hover",children:"Next"})})})]})},N={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",delay:"0.5"}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},k={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.4,yoyo:1/0}}},M=function(e){var i=e.addTopping,t=e.pizza;return Object(h.jsxs)(j.a.div,{variants:N,initial:"hidden",animate:"visible",exit:"exit",className:"toppings container",children:[Object(h.jsx)("h3",{children:"Step 2: Choose Toppings"}),Object(h.jsx)("ul",{children:["mushrooms","peppers","onions","olives","extra cheese","tomatoes"].map((function(e){var n=t.toppings.includes(e)?"active":"";return Object(h.jsx)(j.a.li,{whileHover:{scale:1.3,originX:0,color:"#f8e112"},transition:{type:"spring",stiffness:300},onClick:function(){return i(e)},children:Object(h.jsx)("span",{className:n,children:e})},e)}))}),Object(h.jsx)(v.b,{to:"/order",children:Object(h.jsx)(j.a.button,{variants:k,whileHover:"hover",children:"Order"})})]})},T={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",mass:.4,damping:8,when:"beforeChildren",staggerChildren:.4}}},B={hidden:{opacity:0},visible:{opacity:1}},E=function(e){var i=e.pizza,t=e.setShowModal;return Object(n.useEffect)((function(){setTimeout((function(){t(!0)}),5e3)}),[t]),Object(h.jsxs)(j.a.div,{variants:T,initial:"hidden",animate:"visible",className:"container order",children:[Object(h.jsxs)("h2",{children:["Thank you for your order ",":)"]}),Object(h.jsxs)(j.a.p,{variants:B,children:["You ordered a ",i.base," pizza with:"]}),Object(h.jsx)(j.a.div,{variants:B,children:i.toppings.map((function(e){return Object(h.jsx)("div",{children:e},e)}))})]})},H=t(47),I={visible:{opacity:1},hidden:{opacity:0}},J={hidden:{y:"-100vh",opacity:0},visible:{y:"200px",opacity:1,transition:{delay:.5}}},L=function(e){var i=e.showModal;e.setShowModal;return Object(h.jsx)(H.a,{exitBeforeEnter:!0,children:i&&Object(h.jsx)(j.a.div,{className:"backdrop",variants:I,animate:"visible",initial:"hidden",exit:"hidden",children:Object(h.jsxs)(j.a.div,{className:"modal",variants:J,children:[Object(h.jsx)("p",{children:"Want to make another Pizza?"}),Object(h.jsx)(v.b,{to:"/",children:Object(h.jsx)("button",{children:"Start Again"})})]})})})};var P=function(){var e=Object(l.f)(),i=Object(n.useState)({base:"",toppings:[]}),t=Object(d.a)(i,2),a=t[0],s=t[1],r=Object(n.useState)(!1),j=Object(d.a)(r,2),x=j[0],p=j[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{}),Object(h.jsx)(L,{showModal:x,setShowModal:p}),Object(h.jsx)(H.a,{exitBeforeEnter:!0,onExitComplete:function(){return p(!1)},children:Object(h.jsxs)(l.c,{location:e,children:[Object(h.jsx)(l.a,{path:"/base",children:Object(h.jsx)(S,{addBase:function(e){s(Object(c.a)(Object(c.a)({},a),{},{base:e}))},pizza:a})}),Object(h.jsx)(l.a,{path:"/toppings",children:Object(h.jsx)(M,{addTopping:function(e){var i;i=a.toppings.includes(e)?a.toppings.filter((function(i){return i!==e})):[].concat(Object(o.a)(a.toppings),[e]),s(Object(c.a)(Object(c.a)({},a),{},{toppings:i}))},pizza:a})}),Object(h.jsx)(l.a,{path:"/order",children:Object(h.jsx)(E,{pizza:a,setShowModal:p})}),Object(h.jsx)(l.a,{path:"/",children:Object(h.jsx)(g,{})})]},e.key)})]})};t(43);r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v.a,{children:Object(h.jsx)(P,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.2b43cabc.chunk.js.map