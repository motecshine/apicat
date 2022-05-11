var N=Object.defineProperty,T=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(t,e,o)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,n=(t,e)=>{for(var o in e||(e={}))$.call(e,o)&&m(t,o,e[o]);if(c)for(var o of c(e))v.call(e,o)&&m(t,o,e[o]);return t},s=(t,e)=>T(t,B(e));import{b as L,a5 as P,a6 as j,a7 as A,a8 as U,a1 as l,a0 as y,a9 as h,aa as b,a4 as k}from"./index.6adbff9a.js";import{d as O,bv as w,t as I,ah as p,bi as S,U as _,c as V,a as d,aH as M,S as J,X as R,_ as q,T as z,a6 as f,ar as H,o as g,Y as X}from"./vendor.2ee35ec0.js";import{a as Y,d as x,b as G}from"./params.5984f49b.js";import{E as i}from"./element-plus.5b1d6711.js";const K=O({components:{AcEditor:w(()=>k(()=>import("./editor.es.d63d6ce6.js"),["assets/editor.es.d63d6ce6.js","assets/vendor.2ee35ec0.js","assets/index.6adbff9a.js","assets/index.6a63fb9c.css","assets/element-plus.5b1d6711.js","assets/element-plus.898dbfba.css","assets/sortable.esm.85cd8ec3.js"]))},setup(){return{updateTreeNode:I("updateTreeNode")}},data(){return{editorOptions:{uploadImage:t=>this.uploadImage(t),getAllCommonParams:()=>this.getAllCommonParams(),addCommonParam:t=>this.addCommonParam(t),deleteCommonParam:t=>this.deleteCommonParam(t),getUrlList:()=>this.getUrlList(),deleteUrl:t=>this.deleteUrl(t),openNotification:()=>this.openNotification()},project_id:this.$route.params.project_id,node_id:parseInt(this.$route.params.node_id,10),document:{},isLoading:!1,isDocumentLoading:!1}},watch:{"$route.params.node_id":{immediate:!0,handler:function(){this.getDocumentDetail()}},"document.title":function(){this.onDocumentTitleChange()}},methods:{openNotification(){this.$refs.notice.show()},intoEditor(){setTimeout(()=>this.$refs.editor&&this.$refs.editor.editor.focus(),200)},uploadImage(t){return new Promise((e,o)=>{if(!t)return i.error("\u8BF7\u9009\u62E9\u56FE\u7247"),o("\u8BF7\u9009\u62E9\u56FE\u7247");if(t.size>10*1024*1024)return i.error("\u56FE\u7247\u4E0D\u80FD\u8D85\u8FC710MB"),o("\u56FE\u7247\u4E0D\u80FD\u8D85\u8FC710MB");P().send(t).end((a,u)=>{if(!a){j(u.data).then(({src:r})=>e(r));return}i.error(a||"\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"),o("\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01")})})},getUrlList(){return A(this.project_id).then(t=>t.data).catch(()=>{})},deleteUrl(t){return U(this.project_id,t).then(()=>{i.success("\u5E38\u7528URL\u5220\u9664\u6210\u529F")})},addCommonParam(t){const e=s(n({},t),{project_id:this.project_id});return delete e.sub_params,delete e._id,Y(e).then(o=>(i.success("\u5E38\u7528\u53C2\u6570\u6DFB\u52A0\u6210\u529F"),o.data))},deleteCommonParam(t){return x(this.project_id,t.id).then(e=>(i.success("\u5E38\u7528\u53C2\u6570\u5220\u9664\u6210\u529F"),e.data))},getAllCommonParams(){return G(this.project_id).then(t=>t.data).catch(t=>{})},getDocumentDetail(){const t=parseInt(this.$route.params.node_id,10);if(isNaN(t)){l();return}this.node_id=t,this.isDocumentLoading=!0,y(this.project_id,this.node_id).then(e=>{e.data.project_id=this.project_id,e.data.doc_id=e.data.id,!e.data.url&&(e.data.url=""),e.data.content=JSON.parse(e.data.content||"{}"),this.document=e.data,this.autoFocus()}).catch(e=>{}).finally(()=>{this.isDocumentLoading=!1,l()})},updateTreeNodeTitle(t){t&&this.updateTreeNode&&this.updateTreeNode(t.doc_id,{title:t.title||""})},onSaveBtnClick(){this.save()},save(){this.isLoading=!0,h(this.getDocumentContent()).then(t=>{i.success(t.message||"\u4FDD\u5B58\u6210\u529F"),this.updateTreeNodeTitle(t.data),this.$router.push({name:"document.api.detail",params:{project_id:this.project_id,node_id:this.node_id}})}).catch(t=>t).finally(()=>{this.isLoading=!1})},getDocumentContent(){if(this.$refs.editor&&this.$refs.editor.editor){let t=this.$refs.editor.editor.getJSON();return s(n({},this.document),{content:JSON.stringify(t)})}return this.document},onDocumentChange:p(function(){h(this.getDocumentContent()).then(t=>{this.updateTreeNodeTitle(t.data)})},500),onDocumentTitleChange:p(function(){S(this.document.title)||(b({project_id:this.project_id,title:this.document.title,doc_id:this.node_id}),this.updateTreeNodeTitle({doc_id:this.node_id,title:this.document.title}))},500),autoFocus(){this.$route.query.isNew&&this.$refs.title&&this.$refs.title.focus()}}}),Q={class:"ac-document is-edit"},W={class:"ac-document__operate"},Z={class:"ac-document__operate-inner text-right"},tt=X(" \u4FDD\u5B58 ");function et(t,e,o,a,u,r){const D=f("AcEditor"),C=f("el-button"),F=H("loading");return _((g(),V("div",Q,[_(d("input",{class:"ac-document__title",type:"text",maxlength:"255",ref:"title","onUpdate:modelValue":e[0]||(e[0]=E=>t.document.title=E),placeholder:"\u8BF7\u8F93\u5165\u6587\u6863\u6807\u9898"},null,512),[[M,t.document.title]]),t.document.content?(g(),J(D,{key:0,ref:"editor",document:t.document.content,options:t.editorOptions,onOnChange:t.onDocumentChange},null,8,["document","options","onOnChange"])):R("",!0),d("div",W,[d("div",Z,[q(C,{loading:t.isLoading,type:"primary",onClick:t.onSaveBtnClick},{default:z(()=>[tt]),_:1},8,["loading","onClick"])])])])),[[F,t.isDocumentLoading]])}var dt=L(K,[["render",et]]);export{dt as default};