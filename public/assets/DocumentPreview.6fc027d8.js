import{A as s}from"./AcEditorDocument.c5ac7902.js";import{b as r,ac as a}from"./index.6adbff9a.js";import{t as i,ba as m,a6 as p,o as u,c as d,a as _,_ as l}from"./vendor.2ee35ec0.js";import"./useHighlight.10314a85.js";import"./element-plus.5b1d6711.js";const f={name:"DocumentPreview",components:{AcEditorDocument:s},setup(){const o=i("showSearchInput"),t=a(),{documentInfo:e}=m(t);return o(!1),document.title=e.value.title,{documentInfo:e}}},v={class:"ac-preview is-single"},w={class:"ac-preview-content"};function h(o,t,e,c,D,A){const n=p("AcEditorDocument");return u(),d("main",v,[_("div",w,[l(n,{doc:c.documentInfo},null,8,["doc"])])])}var P=r(f,[["render",h]]);export{P as default};