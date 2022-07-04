import{bv as a,bw as s,bx as r,by as l,b7 as m,o as p,f as u,h as c,$ as h}from"./vendor.da18d6a7.js";import{m as g,u as f}from"./useHighlight.aee3eb77.js";import{b as _}from"./index.c9e71ecd.js";function d(e,o){document.querySelectorAll('[data-pid="'+e+'"]').forEach(function(t){let i=t.querySelector("i.editor-arrow-right");i&&!a(i,"expand")&&r(i,"expand");let n=s(t,"data-id");t.style.display=o?null:"none",n&&d(n,o)})}const y={name:"AcEditorDocument",props:["doc"],watch:{doc:function(){this.init()}},setup(){const{initHighlight:e}=f();return{initHighlight:e}},data(){return{zoomTemplate:`<template id="template-zoom-image">
                            <div class="zoom-image-wrapper">
                                <div class="zoom-image-container" data-zoom-container></div>
                            </div>
                          </template>`,zoomImageOption:{template:"#template-zoom-image",container:"[data-zoom-container]"}}},methods:{initTableToggle(){document.querySelectorAll(".ac-param-table .editor-arrow-right").forEach(function(e){e.onclick=function(){d(s(this,"data-id"),!a(this,"expand")),r(this,"expand")}}),document.querySelectorAll("div.collapse-title .response_body_title").forEach(function(e){e.onclick=function(){let o=this.parentElement,t=o.parentElement,i=a(t,"close");l(o.nextElementSibling,i),l(t.nextElementSibling,i),r(t,"close")}}),document.querySelectorAll("h3.collapse-title >span").forEach(function(e){e.onclick=function(){let o=this.parentElement,t=a(o,"close");l(o.nextElementSibling,t),r(o,"close")}})},initMediumZoom(){g(".ProseMirror .image-view img",this.zoomImageOption)},initTippy(){m("[data-tippy-content]",{theme:"light",appendTo:document.querySelector(".ProseMirror")})},initCodeBlockToClipboard(){document.querySelectorAll(".code-block button").forEach(e=>{e.setAttribute("data-text",e.parentElement.querySelector("code").innerText)})},init(){this.$nextTick(()=>{this.initTableToggle(),this.initTippy(),this.initMediumZoom(),this.initCodeBlockToClipboard(),this.initHighlight(document.querySelectorAll("pre code"))})}},mounted(){this.init()}},b={class:"ac-document is-detail"},T={class:"ac-document__title"},S=["innerHTML"],x=["innerHTML"];function E(e,o,t,i,n,v){return p(),u("div",b,[c("h1",T,h(t.doc.title),1),c("div",{class:"ProseMirror readonly",innerHTML:t.doc.content},null,8,S),c("div",{innerHTML:n.zoomTemplate},null,8,x)])}var k=_(y,[["render",E]]);export{k as A};