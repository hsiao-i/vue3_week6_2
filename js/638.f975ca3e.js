"use strict";(self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[]).push([[638],{530:function(a,t,e){function n(a){return{all:a=a||new Map,on:function(t,e){var n=a.get(t);n?n.push(e):a.set(t,[e])},off:function(t,e){var n=a.get(t);n&&(e?n.splice(n.indexOf(e)>>>0,1):a.set(t,[]))},emit:function(t,e){var n=a.get(t);n&&n.slice().map((function(a){a(e)})),(n=a.get("*"))&&n.slice().map((function(a){a(t,e)}))}}}e.d(t,{Z:function(){return r}});const s=n();var r=s},181:function(a,t,e){e.d(t,{Z:function(){return Z}});var n=e(252),s=e(577);const r={class:"navbar navbar-expand-lg navbar-light bg-light pt-3"},l={class:"container-fluid"},o=(0,n.Uk)("前台"),i=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarNav"},u={class:"navbar-nav"},d={class:"nav-item"},p=(0,n.Uk)("首頁"),m={class:"nav-item"},v=(0,n.Uk)("產品列表"),b={class:"nav-item"},g=(0,n.Uk)("購物車"),f={class:"nav-item"},h=(0,n.Uk)("登入後台"),_={type:"button",class:"btn btn-primary me-5"},w=(0,n.Uk)(" 結帳 "),k={class:"position-absolute top-0 start-80 me-5 pt-5translate-middle badge rounded-pill bg-danger"},x=(0,n._)("span",{class:"visually-hidden"},"unread messages",-1);function y(a,t,e,y,U,I){const D=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",r,[(0,n._)("div",l,[(0,n.Wm)(D,{to:"/",class:"navbar-brand",href:"#"},{default:(0,n.w5)((()=>[o])),_:1}),i,(0,n._)("div",c,[(0,n._)("ul",u,[(0,n._)("li",d,[(0,n.Wm)(D,{to:"/",class:"nav-link active","aria-current":"page",href:"#"},{default:(0,n.w5)((()=>[p])),_:1})]),(0,n._)("li",m,[(0,n.Wm)(D,{to:"/products",class:"nav-link",href:"#"},{default:(0,n.w5)((()=>[v])),_:1})]),(0,n._)("li",b,[(0,n.Wm)(D,{to:"/cart",class:"nav-link",href:"#"},{default:(0,n.w5)((()=>[g])),_:1})]),(0,n._)("li",f,[(0,n.Wm)(D,{to:"/login",class:"nav-link",href:"#"},{default:(0,n.w5)((()=>[h])),_:1})])])]),(0,n._)("button",_,[w,(0,n._)("span",k,[(0,n.Uk)((0,s.zw)(U.cartData.carts.length)+" ",1),x])])])])}var U=e(530),I={data(){return{cartData:{carts:[]}}},methods:{getCart(){this.$http.get("https://vue3-course-api.hexschool.io/api/hsiaoi/cart").then((a=>{this.cartData=a.data.data})).catch((a=>{alert(a.data.message)}))}},mounted(){this.getCart(),U.Z.on("get-cart",(()=>{this.getCart()}))}},D=e(744);const W=(0,D.Z)(I,[["render",y]]);var Z=W},638:function(a,t,e){e.r(t),e.d(t,{default:function(){return f}});var n=e(252),s=e(963);const r={class:"container mt-5"},l=(0,n._)("h2",null,"登入",-1),o={class:"mb-3"},i=(0,n._)("label",{for:"exampleInputEmail1",class:"form-label"},"帳號",-1),c={class:"mb-3"},u=(0,n._)("label",{for:"exampleInputPassword1",class:"form-label"},"密碼",-1),d=(0,n._)("button",{type:"submit",class:"btn btn-primary w-100"},"登入",-1);function p(a,t,e,p,m,v){const b=(0,n.up)("FrontNavbar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(b),(0,n._)("div",r,[l,(0,n._)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)(((...a)=>v.signIn&&v.signIn(...a)),["prevent"]))},[(0,n._)("div",o,[i,(0,n.wy)((0,n._)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp","onUpdate:modelValue":t[0]||(t[0]=a=>m.user.username=a)},null,512),[[s.nr,m.user.username]])]),(0,n._)("div",c,[u,(0,n.wy)((0,n._)("input",{type:"password",class:"form-control",id:"exampleInputPassword1","onUpdate:modelValue":t[1]||(t[1]=a=>m.user.password=a)},null,512),[[s.nr,m.user.password]])]),d],32)])],64)}var m=e(181),v={components:{FrontNavbar:m.Z},data(){return{user:{username:"",password:""}}},methods:{signIn(){this.$http.post("https://vue3-course-api.hexschool.io/v2/admin/signin",this.user).then((a=>{console.log(a);const{token:t,expired:e}=a.data;document.cookie=`hexToken=${t}; expires=${new Date(e)}`,this.$router.push("/admin/products")})).catch((a=>{alert(a.response.data.message)}))},test(){console.log("click")}}},b=e(744);const g=(0,b.Z)(v,[["render",p]]);var f=g}}]);
//# sourceMappingURL=638.f975ca3e.js.map