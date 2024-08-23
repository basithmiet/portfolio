import{a as $}from"./chunk-M4256NY2.js";import{b as A,d as K,e as V}from"./chunk-6GOIHXIO.js";import{La as P,Na as S,P as x,Pa as r,Qa as a,Ra as p,Sa as O,Ta as E,U as C,Ua as M,Va as d,Wa as j,Xa as F,Ya as c,Za as g,_ as v,_a as I,ba as w,cb as T,db as q,eb as L,fb as z,ha as b,ia as k,q as _,ua as y,xa as m,ya as u}from"./chunk-LR6DEKUE.js";var f=(()=>{let i=class i{constructor(t){this.http=t}getProduct(){return this.http.get("https://fakestoreapi.com/products").pipe(_(t=>t))}};i.\u0275fac=function(e){return new(e||i)(C(V))},i.\u0275prov=x({token:i,factory:i.\u0275fac});let n=i;return n})();var H=(()=>{let i=class i{transform(t,e,o){let s=[];return!t||e===""||o===""?t:(t.forEach(h=>{h[o].trim().toLowerCase().includes(e.toLowerCase())&&s.push(h)}),s)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275pipe=w({name:"filter",type:i,pure:!0,standalone:!0});let n=i;return n})();function J(n,i){if(n&1){let l=M();O(0),r(1,"div",11),p(2,"img",12),r(3,"h5",13),c(4),a(),r(5,"p",13),c(6),a(),r(7,"p")(8,"strong"),c(9,"Price:"),a(),c(10),a(),r(11,"button",14),d("click",function(){let e=b(l).$implicit,o=j();return k(o.addtocart(e))}),c(12,"Add to cart"),a()(),E()}if(n&2){let l=i.$implicit;m(2),F("src",l.image,y),m(2),g(l.title),m(2),g(l.description),m(4),I(" $",l.price,"")}}var et=(()=>{let i=class i{constructor(t,e){this.api=t,this.cartService=e,this.searchKey=""}ngOnInit(){this.api.getProduct().subscribe(t=>{this.productList=t,this.filterCategory=t,this.productList.forEach(e=>{(e.category==="women's clothing"||e.category==="men's clothing")&&(e.category="fashion"),Object.assign(e,{quantity:1,total:e.price})})}),this.cartService.search.subscribe(t=>{this.searchKey=t})}addtocart(t){this.cartService.addtoCart(t)}filter(t){this.filterCategory=this.productList.filter(e=>{if(e.category==t||t=="")return e})}};i.\u0275fac=function(e){return new(e||i)(u(f),u($))},i.\u0275cmp=v({type:i,selectors:[["app-products"]],standalone:!0,features:[T([f]),q],decls:26,vars:5,consts:[[1,"card-top","container-fluid"],[1,"container","d-flex"],[1,"item"],[3,"click"],["src","https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100","alt",""],["src","https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100","alt",""],["src","https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100","alt",""],["src","https://rukminim1.flixcart.com/image/580/696/kkh6zrk0/jewellery-set/o/w/z/gt-ns-862-matushri-art-original-imafzt9teacakjyn.jpeg?q=50","alt","",2,"width","62px","margin-top","5px"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[1,"card","col-md-3"],["alt","",3,"src"],[2,"white-space","nowrap","overflow","hidden","text-overflow","ellipsis","max-width","100ch"],[1,"btn","btn-primary",3,"click"]],template:function(e,o){e&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),d("click",function(){return o.filter("")}),p(4,"img",4),r(5,"h6"),c(6,"All products"),a()()(),r(7,"div",2)(8,"a",3),d("click",function(){return o.filter("electronics")}),p(9,"img",5),r(10,"h6"),c(11,"Electronics"),a()()(),r(12,"div",2)(13,"a",3),d("click",function(){return o.filter("fashion")}),p(14,"img",6),r(15,"h6"),c(16,"Fashion"),a()()(),r(17,"div",2)(18,"a",3),d("click",function(){return o.filter("jewelery")}),p(19,"img",7),r(20,"h6"),c(21,"Jewllery"),a()()()()(),r(22,"div",8)(23,"div",9),P(24,J,13,4,"ng-container",10),L(25,"filter"),a()()),e&2&&(m(24),S("ngForOf",z(25,1,o.filterCategory,o.searchKey,"title")))},dependencies:[K,A,H],styles:[".card-top[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.2);border-radius:.25rem}.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:64px}.item[_ngcontent-%COMP%]{margin:0 15px;text-align:center}.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#00f}.card[_ngcontent-%COMP%]{padding:20px;margin:50px}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:200px;margin-bottom:15px;transition:.3s ease-in-out}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transition:.3s ease-in-out;transform:scale(1.1)}"]});let n=i;return n})();export{et as ProductsComponent};
