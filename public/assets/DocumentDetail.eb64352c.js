var A=Object.defineProperty;var y=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var b=(o,e,t)=>e in o?A(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,T=(o,e)=>{for(var t in e||(e={}))N.call(e,t)&&b(o,t,e[t]);if(y)for(var t of y(e))j.call(e,t)&&b(o,t,e[t]);return o};import{w as q,v as B}from"./element-plus.ccbabc0c.js";import{c as H,B as O,X as U,D as V,Y as G,Z,$ as k,a0 as $,a1 as v,a2 as S,a3 as R,a4 as z}from"./index.82a37249.js";import{m as Y,u as w}from"./medium-zoom.esm.042cc6c5.js";import{S as F,bD as m,bE as P,bF as p,bG as f,bg as W,r as X,bH as J,a$ as K,x as Q,t as x,T as I,h as c,j as s,a1 as g,$ as d,Z as u,V as E,U as tt,o as a,ak as D}from"./vendor.4578470d.js";const C=(o,e)=>{document.querySelectorAll('[data-pid="'+o+'"]').forEach(function(t){let i=t.querySelector("i.editor-arrow-right");i&&!m(i,"expand")&&p(i,"expand");let n=P(t,"data-id");t.style.display=e?null:"none",n&&C(n,e)})},et=o=>{document.querySelectorAll(`${o}.ac-param-table .editor-arrow-right`).forEach(function(e){e.onclick=function(){C(P(this,"data-id"),!m(this,"expand")),p(this,"expand")}}),document.querySelectorAll(`${o}div.collapse-title .response_body_title`).forEach(function(e){e.onclick=function(){const t=this.parentElement,i=t.parentElement,n=m(i,"close");f(t.nextElementSibling,n),f(i.nextElementSibling,n),p(i,"close")}}),document.querySelectorAll(`${o}h3.collapse-title >span`).forEach(function(e){e.onclick=function(){const t=this.parentElement,i=m(t,"close");f(t.nextElementSibling,i),p(t,"close")}})},ot=o=>{Y(`${o}.ProseMirror .image-view img`,{template:"#template-zoom-image",container:"[data-zoom-container]"})},nt=o=>{W("[data-tippy-content]",{theme:"light",appendTo:document.querySelector(`${o}.ProseMirror`)})},it=o=>{document.querySelectorAll(`${o}.code-block button`).forEach(e=>{e.setAttribute("data-text",e.parentElement.querySelector("code").innerText)})},st=async o=>{const{initHighlight:e}=w();await F();const t=o?`${o} `:"";et(t),nt(t),ot(t),it(t),e(document.querySelectorAll(`${t}pre code`))};var ct="/assets/icon-empty.9fe6949e.png";const at={watch:{"$route.params.node_id":function(){this.getDocumentDetail()}},setup(){const o=X(null),{top:e}=J(o),t=O(),{isGuest:i,projectInfo:n}=K(t);Q(e,()=>v.emit(S,e.value<25),{immediate:!0});const{initHighlight:r}=w(),l=x("documentImportModal"),h=x("setDocumentTitle"),_=U();return{pid:n.value.id,projectInfo:n,isGuest:i,title:o,initHighlight:r,documentImportModal:l,setDocumentTitle:h,publicParams:_}},data(){return{hasDocument:!0,isLoading:!0,DOCUMENT_TYPES:V,document:{},project_id:null}},methods:{initStaticDocInteractive(){st(".document-detail")},onImportBtnCLick(){this.documentImportModal.show(T({},G(this.publicParams)),Z)},getDocumentDetail(){const o=parseInt(this.$route.params.node_id,10);if(isNaN(o)){k(),this.isLoading=!1,this.hasDocument=!1;return}this.doc_id=o,this.isLoading=!0,this.hasDocument=!0;const e={project_id:this.projectInfo.id,doc_id:this.doc_id};$(e,"html").then(t=>{this.document=this.transferDoc(t.data||{}),this.setDocumentTitle(this.document.title),this.initStaticDocInteractive()}).catch(t=>{}).finally(()=>{this.$nextTick(()=>{this.isLoading=!1,k()})})},transferDoc(o){return o}},mounted(){v.emit(S,!1),this.getDocumentDetail()},unmounted(){this.document={},this.isLoading=!0,this.hasDocument=!0}},rt={class:"ac-document document-detail","element-loading-background":"#fff"},lt={class:"ac-document__desc"},dt=s("i",{class:"iconfont iconIconPopoverUser"},null,-1),ut=s("i",{class:"iconfont icontime"},null,-1),mt=["innerHTML"],pt={key:0},ht=s("img",{src:ct,alt:""},null,-1),_t={key:0,style:{width:"470px",display:"block",margin:"auto"}},ft=D(" \u60A8\u5F53\u524D\u5C1A\u672A\u521B\u5EFA\u6587\u6863\uFF0C\u8BF7\u4ECE\u5DE6\u4FA7\u76EE\u5F55\u680F\u70B9\u51FB\u6DFB\u52A0\uFF0C\u5F00\u59CB\u5728\u7EBF\u7EF4\u62A4 API \u6587\u6863\u3002\u60A8\u8FD8\u53EF\u4EE5\u5C06\u672C\u5730\u9879\u76EE "),gt={key:1,style:{width:"470px",display:"block",margin:"auto"}};function Dt(o,e,t,i,n,r){const l=q,h=R,_=z,L=B;return I((a(),c("div",rt,[I(s("div",null,[s("h1",{class:"ac-document__title",ref:"title"},g(n.document.title),513),s("p",lt,[d(l,{effect:"dark",content:n.document.last_updated_by+" \u6700\u540E\u7F16\u8F91",placement:"bottom"},{default:u(()=>[s("span",null,[dt,D(g(n.document.last_updated_by),1)])]),_:1},8,["content"]),d(l,{effect:"dark",content:"\u66F4\u65B0\u4E8E "+n.document.updated_time,placement:"bottom"},{default:u(()=>[s("span",null,[ut,D(g(n.document.updated_time),1)])]),_:1},8,["content"])]),n.document.content?(a(),c("div",{key:0,class:"ProseMirror readonly",innerHTML:n.document.content},null,8,mt)):E("",!0)],512),[[tt,n.hasDocument&&n.document.id]]),n.hasDocument?E("",!0):(a(),c("div",pt,[d(h,{styles:{width:"260px",height:"auto","margin-bottom":"26px"}},{icon:u(()=>[ht]),title:u(()=>[i.isGuest?(a(),c("div",gt,"\u60A8\u5F53\u524D\u5C1A\u672A\u521B\u5EFA\u6587\u6863")):(a(),c("div",_t,[ft,s("a",{class:"text-blue-600",href:"javascript:void(0);",onClick:e[0]||(e[0]=(...M)=>r.onImportBtnCLick&&r.onImportBtnCLick(...M))},"\u5BFC\u5165")]))]),_:1})])),d(_,{bottom:100,right:100})])),[[L,n.isLoading]])}var St=H(at,[["render",Dt]]);export{St as default};
