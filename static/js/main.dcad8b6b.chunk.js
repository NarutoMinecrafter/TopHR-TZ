(this["webpackJsonptophr-tz"]=this["webpackJsonptophr-tz"]||[]).push([[0],{33:function(t,e,c){},34:function(t,e,c){},40:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c(0),a=c(15),r=c.n(a),s=(c(33),c(27)),o=(c(34),c.p+"static/media/shopping-cart.13b2b8a9.svg"),j=c(4),u=c(11),d=c(5),b=c(23),p=c(3),O="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, debitis sint! Doloribus quod in asperiores possimus error lias totam nihil nemo! Obcaecati dolorem asperiores repellat mollitia eligendi voluptatum aut. Obcaecati, modi odio esseipisci aliquid ipsam nulla porro. Veniam, blanditiis.",l={product:[{photo:c.p+"static/media/keyboard.bd16921b.png",name:"\u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430",price:25,quantity:56,desc:O},{photo:c.p+"static/media/pillow.b5610f0b.png",name:"\u041f\u043e\u0434\u0443\u0448\u043a\u0430",price:50,quantity:2,desc:O},{photo:c.p+"static/media/mouse.e2194958.png",name:"\u043c\u044b\u0448\u043a\u0430",price:11,quantity:12,desc:O}]},m=function(t){return{type:"DELETE_ELEMENT",name:t}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DELETE_ELEMENT":return Object(p.a)(Object(p.a)({},t),{},{product:t.product.map((function(t){return t.name===e.name?Object(p.a)(Object(p.a)({},t),{},{quantity:t.quantity-1}):t}))});case"ADD_ELEMENT":return Object(p.a)(Object(p.a)({},t),{},{product:t.product.map((function(t){return t.name===e.name?Object(p.a)(Object(p.a)({},t),{},{quantity:t.quantity+1}):t}))});default:return t}},x=function(t){return function(e){e(function(t){return{type:"ADD_PRODUCT",product:t}}(t)),e(m(t.name))}},v=function(t){return function(e){e(function(t){return{type:"PLUS_ONE_PRODUCT",name:t}}(t)),e(m(t))}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_PRODUCT":return Object(p.a)(Object(p.a)({},t),{},{product:t.product.length>0?[e.product].concat(Object(b.a)(t.product)):[e.product]});case"DELETE_PRODUCT":return Object(p.a)(Object(p.a)({},t),{},{product:t.product.map((function(t){return t.name===e.name?Object(p.a)(Object(p.a)({},t),{},{quantity:0}):t}))});case"PLUS_ONE_PRODUCT":return Object(p.a)(Object(p.a)({},t),{},{product:t.product.map((function(t){return t.name===e.name?Object(p.a)(Object(p.a)({},t),{},{quantity:t.quantity+1}):t}))});case"MINUS_ONE_PRODUCT":return Object(p.a)(Object(p.a)({},t),{},{product:t.product.map((function(t){return t.name===e.name?Object(p.a)(Object(p.a)({},t),{},{quantity:t.quantity-1}):t}))});case"CLEAR":return Object(p.a)(Object(p.a)({},t),{},{product:Object(b.a)(t.product.splice())});default:return t}},y=function(t){var e=Object(d.b)(),c=Object(d.c)((function(t){return t.shopping\u0421art.product}));return Object(n.jsxs)("div",{className:"ProductDiv ".concat(t.isActive&&"margin225"),children:[Object(n.jsx)("div",{children:Object(n.jsx)(u.b,{to:"product/".concat(t.name),children:Object(n.jsx)("img",{src:t.photo,alt:"\u0444\u043e\u0442\u043e \u0442\u043e\u0432\u0430\u0440\u0430",onClick:t.click})})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:t.name}),Object(n.jsx)("div",{children:"".concat(t.price," $ / \u0448\u0442")}),Object(n.jsx)("div",{children:"\u0412\u0441\u0435\u0433\u043e: ".concat(t.quantity)})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{disabled:t.quantity<=0,className:"button lGrin",onClick:function(){c.find((function(e){return e.name===t.name}))?e(v(t.name)):e(x({name:t.name,price:t.price,photo:t.photo,quantity:1}))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})})]})},g=function(t){var e=Object(d.b)(),c=Object(d.c)((function(t){return t.shopping\u0421art.product}));return Object(n.jsxs)("div",{className:"DescriptionProduct ".concat(t.isActive&&"margin195"),children:[Object(n.jsxs)("div",{className:"sImages",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:t.photo,alt:"\u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430"})}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:t.photo,alt:"\u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430"})}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:t.photo,alt:"\u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430"})}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:t.photo,alt:"\u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430"})})]}),Object(n.jsx)("div",{className:"bImage",style:{background:"url(".concat(t.photo,") no-repeat"),width:"362px",height:"215px",position:"relative",gridArea:"b",backgroundSize:"100%",borderRadius:"15px"},children:Object(n.jsxs)("div",{className:"points",children:[Object(n.jsx)("div",{className:"point activ"}),Object(n.jsx)("div",{className:"point"}),Object(n.jsx)("div",{className:"point"}),Object(n.jsx)("div",{className:"point"})]})}),Object(n.jsxs)("div",{className:"pName",children:[Object(n.jsx)("div",{children:t.name}),Object(n.jsx)("div",{children:"".concat(t.price," $ / \u0448\u0442")}),Object(n.jsx)("div",{children:"\u0412\u0441\u0435\u0433\u043e: ".concat(t.quantity)}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"button dGrin",onClick:function(){c.find((function(e){return e.name===t.name}))?e(v(t.name)):e(x({name:t.name,price:t.price,photo:t.photo,quantity:1}))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]}),Object(n.jsx)("div",{className:"pDescription",children:Object(n.jsx)("h1",{children:t.desc})})]})},N=function(t){var e=Object(d.b)(),c=Object(d.c)((function(t){return t.products.product})),i=!1;return c.forEach((function(e){e.name===t.name&&0===e.quantity&&(i=!0)})),Object(n.jsxs)("div",{className:"miniProductDiv",children:[Object(n.jsx)("div",{children:t.name}),Object(n.jsx)("div",{children:"".concat(t.price,"$/\u0448\u0442")}),Object(n.jsx)("button",{className:"circle",onClick:function(){return e({type:"DELETE_PRODUCT",name:t.name})},children:"\u2716"}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:t.photo,alt:t.name})}),Object(n.jsx)("button",{className:"minus",onClick:function(){return e((c=t.name,function(t){t(function(t){return{type:"MINUS_ONE_PRODUCT",name:t}}(c)),t(function(t){return{type:"ADD_ELEMENT",name:t}}(c))}));var c},children:"-"}),Object(n.jsx)("div",{children:t.quantity}),Object(n.jsx)("button",{disabled:i,className:"plus",onClick:function(){return e(v(t.name))},children:"+"})]})},E=function(){var t=Object(j.f)().pathname;Object(i.useEffect)((function(){}),[t]);for(var e=Object(d.b)(),c=Object(i.useState)(!1),a=Object(s.a)(c,2),r=a[0],b=a[1],p=Object(d.c)((function(t){return t.products.product})),O=Object(d.c)((function(t){return t.shopping\u0421art.product})),l=O.map((function(t){return t.quantity*t.price})),m=0,h=0;h<=l.length;h++)l[h]&&(m+=l[h]);return Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("header",{children:["/"!==t&&Object(n.jsxs)(u.b,{to:"/",children:[" ",Object(n.jsx)("div",{className:"back",children:"< \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})," "]}),Object(n.jsx)("span",{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(n.jsx)("img",{src:o,alt:"\u043a\u043e\u0440\u0437\u0438\u043d\u0430",className:"shopping\u0421art",onClick:function(){return b(!r)}}),r&&Object(n.jsxs)("div",{className:"shopp\u0421art",children:[Object(n.jsx)("img",{src:o,alt:"\u043a\u043e\u0440\u0437\u0438\u043d\u0430",className:"shopping\u0421art",onClick:function(){return b(!r)}}),Object(n.jsx)("br",{}),O.map((function(t){return t.quantity>0?Object(n.jsx)(N,{photo:t.photo,name:t.name,price:t.price,quantity:t.quantity},t.name):Object(n.jsx)(n.Fragment,{})})),Object(n.jsxs)("div",{className:"purchase",children:[Object(n.jsx)("div",{children:"(\u0441\u0443\u043c\u043c\u0430 \u0432\u0441\u0435\u0445 \u0432\u0435\u0449\u0435\u0439 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0435)"}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:["\u041a \u043e\u043f\u043b\u0430\u0442\u0435: ",m,"$"]}),Object(n.jsx)("button",{disabled:m<=0,className:"button dGrin",onClick:function(){return e({type:"CLEAR"})},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]})]}),Object(n.jsx)("main",{children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",children:p.map((function(t){return Object(n.jsx)(y,{isActive:r,photo:t.photo,name:t.name,price:t.price,quantity:t.quantity},t.name)}))}),p.map((function(t){return Object(n.jsx)(j.a,{path:"/product/".concat(t.name),render:function(){return Object(n.jsx)(g,{isActive:r,photo:t.photo,name:t.name,price:t.price,quantity:t.quantity,desc:t.desc},t.name)}})})),Object(n.jsx)(j.a,{path:"*",render:function(){return Object(n.jsx)(n.Fragment,{children:"404 NOT FOUND"})}})]})})]})},q=c(12),D=c(26),C=Object(q.c)({"shopping\u0421art":f,products:h}),T=Object(q.d)(C,Object(q.a)(D.a));window.store=T;var k=T;r.a.render(Object(n.jsx)(u.a,{children:Object(n.jsx)(d.a,{store:k,children:Object(n.jsx)(E,{},"app")})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.dcad8b6b.chunk.js.map