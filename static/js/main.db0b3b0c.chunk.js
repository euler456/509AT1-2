(this.webpackJsonp509at1=this.webpackJsonp509at1||[]).push([[0],{26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c(9),r=c(11),a=c(10),i=c(1),j=c.n(i),o=c(19),b=c.n(o),d=(c(26),c.p+"static/media/Ribs.007abdcf.jpg"),l=c.p+"static/media/XiaoLongBao.e2160dd2.jpg",h=c.p+"static/media/gruel.f0b36732.jpg",p=c(7),O=c(2),u=c(0),x=function(e){Object(r.a)(c,e);var t=Object(a.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(u.jsxs)(p.a,{children:[Object(u.jsx)("div",{class:"container"}),Object(u.jsxs)("div",{class:"container",children:[Object(u.jsx)("h1",{children:"Freshly Login"}),Object(u.jsxs)("ul",{id:"header",class:"row",children:[Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/",class:"col",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/Login",class:"col ",children:"Login"})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/contact",class:"col ",children:"Contact"})}),Object(u.jsx)("li",{children:Object(u.jsx)(p.b,{to:"/Setting",class:"col ",children:"Setting"})}),Object(u.jsx)("input",{id:"search",type:"text",placeholder:"Search.."})]}),Object(u.jsxs)("div",{id:"content",children:[Object(u.jsx)(O.a,{exact:!0,path:"/",component:m}),Object(u.jsx)(O.a,{exact:!0,path:"/Login",component:f}),Object(u.jsx)(O.a,{path:"/Sign",component:g}),Object(u.jsx)(O.a,{path:"/contact",component:v}),Object(u.jsx)(O.a,{path:"/Setting",component:y}),Object(u.jsx)(O.a,{path:"/password",component:w})]})]})]})}}]),c}(j.a.Component),m=function(e){Object(r.a)(c,e);var t=Object(a.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Home"}),Object(u.jsx)("h4",{children:"Xiao Long Bao"}),Object(u.jsx)("img",{src:l,alt:"XiaoLongBao"}),Object(u.jsx)("p",{children:"Xiaolongbao is a type of Chinese steamed bun (baozi) from Jiangsu province, especially associated with Wuxi and Shanghai (Shanghai was formerly a part of Jiangsu province)"}),Object(u.jsx)("h4",{class:"order",children:"Order:"}),Object(u.jsx)("input",{type:"number",name:"order",class:"order1",placeholder:"0"}),Object(u.jsx)("h4",{children:"Ribs"}),Object(u.jsx)("img",{src:d,alt:"Ribs"}),Object(u.jsx)("p",{children:"Ribs of pork, beef, lamb, and venison are a cut of meat. The term ribs usually refers to the less meaty part of the chops, often cooked as a slab (not cut into separate ribs)."}),Object(u.jsx)("h4",{class:"order",children:"Order:"}),Object(u.jsx)("input",{type:"number",name:"order",class:"order1",placeholder:"0"}),Object(u.jsx)("h4",{children:"gruel"}),Object(u.jsx)("img",{src:h,alt:"gruel"}),Object(u.jsx)("p",{children:"Gruel is a food consisting of some type of cereal\u2014such as ground oats, wheat, rye or rice\u2014boiled in water or milk."}),Object(u.jsx)("h4",{class:"order",children:"Order:"}),Object(u.jsx)("input",{type:"number",name:"order",class:"order1",placeholder:"0"}),Object(u.jsx)("br",{}),Object(u.jsx)("form",{action:"https://localhost:9998/api.php?action=login",method:"POST",id:"loginform",children:Object(u.jsx)("button",{id:"fat-btn",class:"btn btn-success",children:"Order"})})]})}}]),c}(j.a.Component),f=function(e){Object(r.a)(c,e);var t=Object(a.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Login"}),Object(u.jsxs)("form",{action:"https://localhost:9998/api.php",method:"GET",children:[Object(u.jsx)("h4",{children:"username"}),Object(u.jsx)("input",{type:"text",name:"username",placeholder:"user name",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"password"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"password",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{name:"subject",type:"submit",id:"fat-btn",class:"btn btn-success",children:"Loggin"})]}),Object(u.jsx)("br",{}),Object(u.jsx)(p.b,{to:"/Sign",children:"Sign Up"}),Object(u.jsx)("form",{action:"https://localhost:9998/api.php?action=login",method:"POST",id:"loginform",children:Object(u.jsx)("button",{id:"fat-btn",class:"btn btn-success",children:"Forgot Password?"})})]})}}]),c}(j.a.Component),g=function(e){Object(r.a)(c,e);var t=Object(a.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Sign Up"}),Object(u.jsxs)("form",{action:"https://localhost:9998/api.php?action=login",method:"POST",id:"loginform",children:[Object(u.jsx)("h4",{children:"Firstname"}),Object(u.jsx)("input",{type:"text",name:"Firstname",placeholder:"Firstname",id:"Firstname",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"Lastname"}),Object(u.jsx)("input",{type:"text",name:"Lastname",placeholder:"Lastname",id:"Lastname",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"email"}),Object(u.jsx)("input",{type:"email",name:"email",placeholder:"email",id:"regemail",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"number"}),Object(u.jsx)("input",{type:"number",name:"phone",placeholder:"phone",id:"regphone",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"username"}),Object(u.jsx)("input",{type:"text",name:"username",placeholder:"user name",id:"reguser",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"password"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"password",id:"regpass",required:!0}),"     ",Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"Confirm password"}),Object(u.jsx)("input",{type:"password",name:"Confirm",placeholder:"Confirm password",id:"Confirm",required:!0}),"  ",Object(u.jsx)("br",{}),Object(u.jsx)("button",{name:"subject",type:"submit",id:"fat-btn",class:"btn btn-success",children:Object(u.jsx)(p.b,{to:"/Login",class:"col ",children:"Register"})})]})]})}}]),c}(j.a.Component),y=function(e){Object(r.a)(c,e);var t=Object(a.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Edit My profile"}),Object(u.jsxs)("form",{action:"https://localhost:9998/api.php?action=login",method:"POST",id:"loginform",children:[Object(u.jsx)("h4",{children:" Firstname"}),Object(u.jsx)("input",{type:"text",name:"Firstname",placeholder:"Firstname",id:"Firstname",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:" Lastname"}),Object(u.jsx)("input",{type:"text",name:"Lastname",placeholder:"Lastname",id:"Lastname",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:" email"}),Object(u.jsx)("input",{type:"email",name:"email",placeholder:"email",id:"regemail",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:" number"}),Object(u.jsx)("input",{type:"number",name:"phone",placeholder:"phone",id:"regphone",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:" username"}),Object(u.jsx)("input",{type:"text",name:"username",placeholder:"user name",id:"reguser",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"Want to reset password?"}),Object(u.jsx)("button",{name:"subject",type:"submit",id:"fat-btn",class:"btn btn-success",children:Object(u.jsx)(p.b,{to:"/password",class:"col ",children:"password"})}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{name:"subject",type:"submit",id:"fat-btn",class:"btn btn-success",children:"Save"})]})]})}}]),c}(j.a.Component),w=function(e){Object(r.a)(c,e);var t=Object(a.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"New password"}),Object(u.jsx)("input",{type:"password",name:"password",placeholder:"password",id:"regpass",required:!0}),"     ",Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"Confirm password"}),Object(u.jsx)("input",{type:"password",name:"Confirm",placeholder:"Confirm password",id:"Confirm",required:!0}),"  ",Object(u.jsx)("br",{}),Object(u.jsx)("button",{name:"subject",type:"submit",id:"fat-btn",class:"btn btn-success",children:"Save"})]})}}]),c}(j.a.Component),v=function(e){Object(r.a)(c,e);var t=Object(a.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Contact Method"}),Object(u.jsx)("p",{children:"e-mail:xxxx@gmial.com"}),Object(u.jsx)("p",{children:"Phone Number: xxx-xxx-xxx"}),Object(u.jsx)("p",{children:"Address: 10 shhh street Brisbane,QLD"})]})}}]),c}(j.a.Component);b.a.render(Object(u.jsx)(x,{}),document.getElementById("root"));t.default=x}},[[33,1,2]]]);
//# sourceMappingURL=main.db0b3b0c.chunk.js.map