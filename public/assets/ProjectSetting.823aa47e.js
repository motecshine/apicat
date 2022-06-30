var O=Object.defineProperty,L=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var v=(e,o,n)=>o in e?O(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,r=(e,o)=>{for(var n in o||(o={}))T.call(o,n)&&v(e,n,o[n]);if(b)for(var n of b(o))N.call(o,n)&&v(e,n,o[n]);return e},u=(e,o)=>L(e,S(o));import{_ as R,a as y}from"./ImagePreview.143296e3.js";import{u as $,N as A,O as B,a as D,g as q,P as z,Q as J,h as M,e as G,f as H,j as Q,H as X}from"./element-plus.85f938a9.js";import{b as Y,x as k,h as Z,f as K}from"./index.a22b0d3c.js";import{a3 as W,t as x,aa as ee,a$ as oe,ac as p,o as ne,f as le,Z as l,X as t,_ as te,U as ae,h as se,ai as d}from"./vendor.b27f3889.js";var m="/assets/icon-project.e0f48f4a.png";const ie={setup(){const e=k(),o=W({PROJECT_DEFAULT_ICON:m,isLoading:!1,imgUrl:null,file:null,disableType:!1,form:{icon_link:m,name:"",visible:0,description:""},rules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0",trigger:"blur"},{min:2,message:"\u9879\u76EE\u540D\u79F0\u4E0D\u80FD\u5C11\u4E8E\u4E24\u4E2A\u5B57",trigger:"blur"}]}});return x(()=>e.projectInfo,()=>{const n=e.projectInfo||{};o.form=u(r({},n),{icon_link:n.icon||m})},{immediate:!0}),r({},ee(o))},components:{Lock:$,View:A,Upload:B},methods:u(r({},oe(k,["updateProjectInfo"])),{handleUpload(e){return e.append("icon",this.file),Z(e)},reset(){this.$refs.projectForm.resetFields(),this.form={icon_link:m,name:"",type:K.API.value,visible:0,description:""}},onImageUpload(e,o){this.imgUrl=e,this.file=o},onProjectIconUploadSuccess(e){this.form.icon_link=e},handleSubmit(e){this.$refs[e].validate(o=>{if(o){this.isLoading=!0;const n={};n.project_id=this.form.id,n.icon_link=this.form.icon_link,n.icon=this.form.icon_link,n.name=this.form.name,n.visibility=this.form.visible,n.visible=this.form.visible,n.description=this.form.description,this.updateProjectInfo(n).then(f=>{this.$message.success(f.msg||"\u9879\u76EE\u4FEE\u6539\u6210\u529F\uFF01")}).finally(()=>{this.isLoading=!1})}})}}),emits:["on-ok"]},re=se("span",null,"\u9879\u76EE\u8BBE\u7F6E",-1),me=d("\u4E0A\u4F20\u65B0\u56FE\u6807 "),de=d("\u79C1\u6709 "),ce=d("\u516C\u5F00 "),ue=d("\u4FDD\u5B58");function pe(e,o,n,f,fe,s){const U=D,I=p("Upload"),c=G,_=H,j=R,i=q,h=Q,E=p("Lock"),g=z,V=p("View"),P=J,w=M,C=X,F=y;return ne(),le(ae,null,[l(C,{shadow:"never"},{header:t(()=>[re]),default:t(()=>[l(w,{ref:"projectForm",model:e.form,rules:e.rules,"label-position":"top",class:"py-2 pl-2 max-w-sm",onSubmit:o[4]||(o[4]=te(a=>s.handleSubmit("projectForm"),["prevent"]))},{default:t(()=>[l(i,{label:""},{default:t(()=>[l(U,{class:"mr-7",shape:"square",size:60,src:e.form.icon_link?e.form.icon_link:e.PROJECT_DEFAULT_ICON},null,8,["src"]),l(j,{onDone:s.onImageUpload},{default:t(()=>[l(_,null,{default:t(()=>[l(c,null,{default:t(()=>[l(I)]),_:1}),me]),_:1})]),_:1},8,["onDone"])]),_:1}),l(i,{label:"\u9879\u76EE\u540D\u79F0",prop:"name",class:"hide_required"},{default:t(()=>[l(h,{modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=a=>e.form.name=a),placeholder:"\u9879\u76EE\u540D\u79F0",maxlength:"255"},null,8,["modelValue"])]),_:1}),l(i,{label:"\u6743\u9650"},{default:t(()=>[l(P,{modelValue:e.form.visible,"onUpdate:modelValue":o[1]||(o[1]=a=>e.form.visible=a)},{default:t(()=>[l(g,{label:0},{default:t(()=>[l(c,{class:"mr-1"},{default:t(()=>[l(E)]),_:1}),de]),_:1}),l(g,{label:1},{default:t(()=>[l(c,{class:"mr-1"},{default:t(()=>[l(V)]),_:1}),ce]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(i,{label:"\u9879\u76EE\u63CF\u8FF0"},{default:t(()=>[l(h,{modelValue:e.form.description,"onUpdate:modelValue":o[2]||(o[2]=a=>e.form.description=a),type:"textarea",autosize:{minRows:4,maxRows:4},maxlength:"255"},null,8,["modelValue"])]),_:1}),l(_,{onClick:o[3]||(o[3]=a=>s.handleSubmit("projectForm")),loading:e.isLoading},{default:t(()=>[ue]),_:1},8,["loading"])]),_:1},8,["model","rules"])]),_:1}),l(F,{"img-url":e.imgUrl,file:e.file,onOnOk:s.onProjectIconUploadSuccess,"handle-upload":s.handleUpload},null,8,["img-url","file","onOnOk","handle-upload"])],64)}var ke=Y(ie,[["render",pe]]);export{ke as default};