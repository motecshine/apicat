import{g as ee,q as te,E as B,h as oe,I as se,J as ae,a as re,b as ne,c as le,e as N,H as ie}from"./element-plus.aa12b6bd.js";import{u as U,_ as q}from"./useTable.c5e7e86a.js";import{B as O,E as J,a as ue,F as V,e as K,G as ce,H as me,I as de,c as W,J as pe,K as _e}from"./index.6e925652.js";import{K as T,a$ as F,x as A,o as _,Y as S,v as h,D as fe,$ as r,r as k,b8 as ve,b7 as he,bn as $,ak as C,h as j,Z as p,j as G,W as P,at as I,a1 as H,aA as be,V as R}from"./vendor.b7ec7f69.js";import"./usePage.c385c079.js";var ge=T({emits:["on-success"],setup(a,{emit:e}){const l=[{title:"\u59D3\u540D",key:"name"},{title:"\u90AE\u7BB1",key:"email"},{title:"\u89D2\u8272",render:f=>r("span",{class:"text dis_hover"},[f.authority_name])}],v={project_id:""},t=O(),{projectInfo:i}=F(t),{isLoading:d,total:u,currentPage:n,data:b,getTableData:g}=U(J,{searchParam:v,totalKey:"total_members",dataKey:"project_members",isLoaded:!1});return A(()=>i.value,async()=>{i.value&&i.value.id&&(v.project_id=i.value.id,await g(),e("on-success",u.value||0))},{immediate:!0}),(f,o)=>{const c=q;return _(),S(c,{loading:h(d),"table-data":h(b),"page-total":h(u),"current-page":h(n),"onUpdate:current-page":o[0]||(o[0]=y=>fe(n)?n.value=y:null),columns:l,class:"pb-3"},null,8,["loading","table-data","page-total","current-page"])}}});$.configure({showSpinner:!1});var ye=T({emits:["on-remove","on-success"],setup(a,{emit:e}){const l={project_id:""},v=O(),{projectInfo:t}=F(v),i=ue(),d=k(),u=k(!1),n=k(),b=V,g=ve();let f=null;const{isLoading:o,currentPage:c,data:y,total:L,getTableData:w}=U(J,{searchParam:l,totalKey:"total_members",dataKey:"project_members",isLoaded:!1}),Y=[{title:"\u59D3\u540D",key:"name"},{title:"\u90AE\u7BB1",key:"email"},{title:"\u89D2\u8272",render:s=>i.userInfo.user_id===s.user_id?r("span",null,[s.authority_name]):r("a",{class:"inline-flex items-center el-icon__more",onClick:m=>Z(m,s),"data-role":s.authority,href:"javascript:void(0)"},[r("span",null,[s.authority_name]),r(ee,null,{default:()=>[r(te,null,null)]})])},{title:"\u64CD\u4F5C",width:160,render:s=>{if(s.authority===0)return[];let m=[];return s.authority!==2&&m.push(r("span",{class:"cursor-pointer text-blue-600 mr-2",onClick:()=>z(s)},[C("\u79FB\u4EA4\u9879\u76EE")])),i.userInfo.user_id!==s.user_id&&m.push(r("span",{class:"cursor-pointer text-red-400",onClick:()=>Q(s)},[C("\u79FB\u9664\u6210\u5458")])),m}}],Z=(s,m)=>{f=m,d.value=s.currentTarget,u.value=!0},z=s=>{K({title:"\u79FB\u4EA4\u63D0\u793A",content:"\u786E\u5B9A\u5C06\u9879\u76EE\u79FB\u4EA4\u7ED9\u8BE5\u6210\u5458\u5417\uFF1F",onOk:m=>ce(t.value.id,s.user_id).then(M=>{B.success(M.msg||"\u79FB\u4EA4\u6210\u529F\uFF01"),g.replace({name:"projects"})}).catch(()=>m())})},Q=s=>{K({title:"\u5220\u9664\u63D0\u793A",content:"\u786E\u5B9A\u79FB\u9664\u8BE5\u6210\u5458\u5417\uFF1F",onOk:()=>me(t.value.id,s.user_id).then(m=>{B.success(m.msg||"\u79FB\u9664\u6210\u529F\uFF01"),e("on-remove"),w()})})},X=s=>{$.start(),de({authority:s.value,user_id:f.user_id,project_id:t.value.id}).then(m=>{B.success(m.msg||"\u6743\u9650\u4FEE\u6539\u6210\u529F\uFF01"),f.authority=s.value,f.authority_name=s.text}).catch(()=>{}).finally(()=>{$.done()})};return he(d,s=>{var x,D;const M=s.target.parentNode,E=M.parentNode;((x=M==null?void 0:M.classList)==null?void 0:x.contains("el-icon__more"))||((D=E==null?void 0:E.classList)==null?void 0:D.contains("el-icon__more"))||(u.value=!1)}),A(()=>t.value,async()=>{t.value&&t.value.id&&(l.project_id=t.value.id,await w(),e("on-success",L.value||0))},{immediate:!0}),{isLoading:o,roles:b,project:t,members:y,currentPage:c,total:L,columns:Y,popoverRef:n,isShowPopover:u,rolePopperRef:d,onRoleItemClick:X,getTableData:w}}});const ke=["onClick"];function je(a,e,l,v,t,i){const d=q,u=oe;return _(),j(P,null,[r(d,{loading:a.isLoading,"table-data":a.members,"page-total":a.total,"current-page":a.currentPage,"onUpdate:current-page":e[0]||(e[0]=n=>a.currentPage=n),columns:a.columns,class:"pb-3"},null,8,["loading","table-data","page-total","current-page","columns"]),r(u,{ref:"popoverRef","popper-class":"ac-popper-menu",width:"auto",visible:a.isShowPopover,"onUpdate:visible":e[1]||(e[1]=n=>a.isShowPopover=n),"virtual-ref":a.rolePopperRef,"virtual-triggering":""},{default:p(()=>[G("ul",null,[(_(!0),j(P,null,I(a.roles,n=>(_(),j("li",{key:n.value,class:"ac-popper-menu__item",onClick:b=>a.onRoleItemClick(n)},H(n.text),9,ke))),128))])]),_:1},8,["visible","virtual-ref"])],64)}var Me=W(ye,[["render",je]]);const Se={emits:["on-ok"],props:{members:{type:Array,default:()=>[]},project:{type:Object,default:()=>({})}},data(){return{isShow:!1,isLoading:!1,roles:V,form:{user_ids:[],authority:V[0].value},rules:{user_ids:{required:!0,message:"\u8BF7\u9009\u62E9\u9700\u8981\u6DFB\u52A0\u7684\u6210\u5458",trigger:"change",type:"array"}}}},watch:{isShow:function(){!this.isShow&&this.reset()}},methods:{show(a){this.form.project_id=a.id,this.isShow=!0},hide(){this.isShow=!1},onCloseBtnClick(){this.isShow=!1,this.reset()},reset(){this.$refs.teamForm.resetFields()},handleSubmit(a){this.$refs[a].validate(e=>e&&this.submit())},submit(){this.isLoading=!0,pe(this.form).then(a=>{this.$Message.success(a.msg||"\u6DFB\u52A0\u6210\u5458\u6210\u529F!"),this.hide(),this.$emit("on-ok")}).catch(a=>{}).finally(()=>{this.isLoading=!1})}}},we=C("\u53D6\u6D88"),Ce=C("\u786E\u5B9A");function Pe(a,e,l,v,t,i){const d=se,u=ae,n=re,b=ne,g=N,f=le;return _(),S(f,{modelValue:t.isShow,"onUpdate:modelValue":e[5]||(e[5]=o=>t.isShow=o),width:340,"close-on-click-modal":!1,title:"\u6DFB\u52A0\u6210\u5458","append-to-body":"",class:"show-footer-line vertical-center-modal"},{footer:p(()=>[r(g,{onClick:e[3]||(e[3]=o=>i.onCloseBtnClick())},{default:p(()=>[we]),_:1}),r(g,{loading:t.isLoading,type:"primary",onClick:e[4]||(e[4]=o=>i.handleSubmit("teamForm"))},{default:p(()=>[Ce]),_:1},8,["loading"])]),default:p(()=>[r(b,{onKeyup:e[2]||(e[2]=be(o=>i.handleSubmit("teamForm"),["enter"])),ref:"teamForm",model:t.form,rules:t.rules,"label-position":"top",style:{"margin-bottom":"-19px"}},{default:p(()=>[r(n,{label:"\u9009\u62E9\u6210\u5458",prop:"user_ids",class:"hide_required"},{default:p(()=>[r(u,{modelValue:t.form.user_ids,"onUpdate:modelValue":e[0]||(e[0]=o=>t.form.user_ids=o),placeholder:"\u9009\u62E9\u6210\u5458","no-data-text":"\u6682\u65E0\u6210\u5458",filterable:"",multiple:"",clearable:"",class:"w-full"},{default:p(()=>[(_(!0),j(P,null,I(l.members,o=>(_(),S(d,{value:o.user_id,key:o.user_id,label:o.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(n,{label:"\u6743\u9650",prop:"authority"},{default:p(()=>[r(u,{modelValue:t.form.authority,"onUpdate:modelValue":e[1]||(e[1]=o=>t.form.authority=o),class:"w-full"},{default:p(()=>[(_(!0),j(P,null,I(t.roles,o=>(_(),S(d,{value:o.value,key:o.value,label:o.text},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])}var Le=W(Se,[["render",Pe]]);const Ee={key:0,class:"absolute right-2",style:{top:"7px"}},Be=C("\u6DFB\u52A0\u6210\u5458");var Te=T({setup(a){const e=O(),{projectInfo:l,isManager:v}=F(e),t=k([]),i=k(),d=k(),u=k(0),n=()=>{var c;(c=i.value)==null||c.show(l.value)},b=async()=>{var c;(c=d.value)==null||c.getTableData(),await o()},g=async()=>{await o()},f=c=>{u.value=c},o=async()=>{const{id:c}=l.value||{};if(!!v)try{const{data:y}=await _e(c);t.value=y||[]}catch{t.value=[]}};return A(()=>l.value,async()=>{l.value&&l.value.id&&await o()},{immediate:!0}),(c,y)=>{const L=N,w=ie;return _(),j(P,null,[r(w,{shadow:"never","body-style":{padding:0}},{header:p(()=>[G("span",null,"\u6210\u5458\u5217\u8868"+H(u.value?`(${u.value})`:""),1),h(v)?(_(),j("div",Ee,[r(L,{onClick:n,type:"primary"},{default:p(()=>[Be]),_:1})])):R("",!0)]),default:p(()=>[h(l)&&h(v)?(_(),S(Me,{key:0,ref_key:"projectMembersManage",ref:d,onOnRemove:g,onOnSuccess:f},null,512)):R("",!0),h(l)&&!h(v)?(_(),S(ge,{key:1,onOnSuccess:f})):R("",!0)]),_:1}),r(Le,{members:t.value,ref_key:"addProjectMemberModal",ref:i,onOnOk:b},null,8,["members"])],64)}}});export{Te as default};
