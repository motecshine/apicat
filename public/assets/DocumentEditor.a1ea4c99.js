var T=Object.defineProperty,$=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(t,e,o)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,c=(t,e)=>{for(var o in e||(e={}))A.call(e,o)&&f(t,o,e[o]);if(h)for(var o of h(e))B.call(e,o)&&f(t,o,e[o]);return t},m=(t,e)=>$(t,P(e));import{c as l,B as L,X as O,a6 as j,a7 as I,a8 as U,a9 as S,$ as g,a0 as y,aa as C,a1 as a,ab as b,ac as V,ad as R,ae as M,af as w,ag as k,ah as x,a5 as J}from"./index.82a37249.js";import{x as K,g as z,E as n,v as G}from"./element-plus.ccbabc0c.js";import{K as N,o as u,h as _,$ as E,Z as q,v as X,bI as Y,t as Z,bc as H,b8 as Q,r as W,a$ as tt,ax as D,bp as et,T as F,j as ot,aA as it,aB as at,Y as nt,V as st,as as rt}from"./vendor.4578470d.js";import{a as dt,d as ut,b as ct}from"./params.3a351fc3.js";const mt={class:"loading"},lt=N({setup(t){return(e,o)=>{const i=z;return u(),_("div",mt,[E(i,{class:"is-loading",size:30},{default:q(()=>[E(X(K))]),_:1})])}}});var _t=l(lt,[["__scopeId","data-v-7fcc6324"]]);const pt={},ht={class:"loading-error text-center"};function ft(t,e){return u(),_("div",ht,"\u7F16\u8F91\u5668\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01")}var gt=l(pt,[["render",ft],["__scopeId","data-v-38912440"]]);const Ct=N({components:{AcEditor:Y({loader:()=>J(()=>import("./editor.es.f4f17518.js"),["assets/editor.es.f4f17518.js","assets/vendor.4578470d.js","assets/sortable.esm.85cd8ec3.js","assets/element-plus.ccbabc0c.js","assets/element-plus.8e6ef202.css"]),loadingComponent:_t,errorComponent:gt,timeout:1e4})},setup(){const t=Z("updateTreeNode"),e=H(),o=Q(),i=W(null),d=L(),{projectInfo:s}=tt(d);return{publicParams:O(),projectInfo:s,docuemntContainer:i,project_id:s.value.id,node_id:parseInt(e.params.node_id,10),route:e,router:o,updateTreeNode:t}},data(){return{editorOptions:{uploadImage:t=>this.uploadImage(t),getAllCommonParams:()=>this.getAllCommonParams(),addCommonParam:t=>this.addCommonParam(t),deleteCommonParam:t=>this.deleteCommonParam(t),getUrlList:()=>this.getUrlList(),deleteUrl:t=>this.deleteUrl(t),openNotification:()=>this.openNotification()},document:{},isLoading:!1,isDocumentLoading:!1}},watch:{"$route.params.node_id":{immediate:!0,handler:function(){this.getDocumentDetail()}},"document.title":function(){this.onDocumentChange()}},methods:{openNotification(){this.$refs.notice.show()},intoEditor(){setTimeout(()=>this.$refs.editor&&this.$refs.editor.editor.focus(),200)},editorFocus(t){(!t||t.target===this.docuemntContainer)&&setTimeout(()=>this.$refs.editor&&this.$refs.editor.editor.focus(!0),200)},uploadImage(t){return new Promise((e,o)=>{if(!t)return n.error("\u8BF7\u9009\u62E9\u56FE\u7247"),o("\u8BF7\u9009\u62E9\u56FE\u7247");if(t.size>10*1024*1024)return n.error("\u56FE\u7247\u4E0D\u80FD\u8D85\u8FC710MB"),o("\u56FE\u7247\u4E0D\u80FD\u8D85\u8FC710MB");j().send(t).end((i,d)=>{if(!i){I(d.data).then(({src:s})=>e(s));return}n.error(i||"\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"),o("\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01")})})},getUrlList(){return U(this.project_id).then(t=>t.data).catch(()=>{})},deleteUrl(t){return S(this.project_id,t).then(()=>{n.success("\u5E38\u7528URL\u5220\u9664\u6210\u529F")})},addCommonParam(t){const e=m(c({},t),{project_id:this.project_id});return delete e.sub_params,delete e._id,dt(e).then(o=>(n.success("\u5E38\u7528\u53C2\u6570\u6DFB\u52A0\u6210\u529F"),o.data))},deleteCommonParam(t){return ut(this.project_id,t.id).then(e=>(n.success("\u5E38\u7528\u53C2\u6570\u5220\u9664\u6210\u529F"),e.data))},getAllCommonParams(){return ct(this.project_id).then(t=>t.data).catch(t=>{})},getDocumentDetail(){const t=parseInt(this.route.params.node_id,10);if(isNaN(t)){g();return}this.node_id=t,this.isDocumentLoading=!0;const e={project_id:this.publicParams.projectId,doc_id:this.node_id};y(e).then(o=>{o.data.project_id=this.project_id,o.data.doc_id=o.data.id,!o.data.url&&(o.data.url=""),o.data.content=JSON.parse(o.data.content||"{}"),this.document=o.data,this.autoFocus()}).catch(o=>{}).finally(()=>{this.isDocumentLoading=!1,g()})},updateTreeNodeTitle(t){t&&this.updateTreeNode&&this.updateTreeNode(t.doc_id,{title:t.title||""})},onSaveBtnClick(){this.save()},save(){const t=this.getDocumentContent();!t||(this.isLoading=!0,C(t).then(()=>a.emit(b)).catch(()=>a.emit(V)).finally(()=>{this.isLoading=!1}))},getDocumentContent(){if(this.$refs.editor&&this.$refs.editor.editor){let t=this.$refs.editor.editor.getJSON();return m(c({},this.document),{content:JSON.stringify(t)})}return this.document},onDocumentChange:D(function(){if(this.isLoading)return;a.emit(R);const t=this.getDocumentContent();t&&C(t).then(e=>{a.emit(M),this.updateTreeNodeTitle(e.data)}).catch(()=>{a.emit(w)})},200),onDocumentTitleChange:D(function(){et(this.document.title)||(k({project_id:this.project_id,title:this.document.title,doc_id:this.node_id}),this.updateTreeNodeTitle({doc_id:this.node_id,title:this.document.title}))},500),autoFocus(){this.route.query.isNew&&this.$refs.title&&this.$refs.title.focus()}},mounted(){a.on(x,this.onSaveBtnClick)}});function Et(t,e,o,i,d,s){const p=rt("AcEditor"),v=G;return F((u(),_("div",{class:"ac-document is-edit",ref:"docuemntContainer",onClick:e[2]||(e[2]=(...r)=>t.editorFocus&&t.editorFocus(...r))},[F(ot("input",{class:"ac-document__title",type:"text",maxlength:"255",ref:"title","onUpdate:modelValue":e[0]||(e[0]=r=>t.document.title=r),onKeydown:e[1]||(e[1]=it((...r)=>t.intoEditor&&t.intoEditor(...r),["enter"])),placeholder:"\u8BF7\u8F93\u5165\u6587\u6863\u6807\u9898"},null,544),[[at,t.document.title]]),t.document.content?(u(),nt(p,{key:0,ref:"editor",document:t.document.content,options:t.editorOptions,onOnChange:t.onDocumentChange},null,8,["document","options","onOnChange"])):st("",!0)])),[[v,t.isDocumentLoading]])}var $t=l(Ct,[["render",Et]]);export{$t as default};
