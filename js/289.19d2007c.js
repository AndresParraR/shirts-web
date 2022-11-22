"use strict";(self["webpackChunkshirts_web"]=self["webpackChunkshirts_web"]||[]).push([[289],{2289:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var i=a(3396),s=a(8694);const l={class:"container-base"},r={class:"product-container"},o={class:"design-container"};function d(e,t,a,d,n,u){const c=(0,i.up)("ProductDetail");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",r,[(0,i._)("div",o,[(0,i.Wm)(s.f,{style:{height:"100%"},class:"bg-white",width:"300","aspect-ratio":1,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",cover:""})]),e.detailShirt?((0,i.wg)(),(0,i.j4)(c,{key:0,shirtData:e.detailShirt,class:"detail-product"},null,8,["shirtData"])):(0,i.kq)("",!0)])])}var n=a(919),u=a(7139),c=a(5101),p=a(9752),h=a(1888),m=a(1334),g=a(1037),v=a(2356),S=a(2902);const y=e=>((0,i.dD)("data-v-2b8344d6"),e=e(),(0,i.Cn)(),e),_={class:"text-h4 text--primary"},b={class:"text--primary mb-3"},f=y((()=>(0,i._)("p",{class:"mb-5"},"60 available",-1))),w={class:"container-action-buttons mb-2"},D=(0,i.Uk)(" Buy now "),z=(0,i.Uk)(" Add car ");function I(e,t,a,s,l,r){const o=(0,i.up)("DialogFullScreen");return(0,i.wg)(),(0,i.j4)(p._,{class:"mx-auto"},{default:(0,i.w5)((()=>[(0,i.Wm)(h.Z,null,{default:(0,i.w5)((()=>[(0,i._)("p",_,(0,u.zw)(e.shirtData.title),1),(0,i._)("p",b,(0,u.zw)(e.shirtData.description),1),(0,i._)("p",null,"$ "+(0,u.zw)(e.shirtData.finalPrice),1)])),_:1}),(0,i.Wm)(m.h,{class:"d-block"},{default:(0,i.w5)((()=>[(0,i.Wm)(v.N,{modelValue:e.selection,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selection=t),class:"mb-5","active-class":"deep-purple--text text--accent-4",mandatory:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.sizes,(e=>((0,i.wg)(),(0,i.j4)(g.v,{color:"primary",key:e,value:e._id},{default:(0,i.w5)((()=>[(0,i.Uk)((0,u.zw)(e.name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"]),f,(0,i.Wm)(S.h,{modelValue:e.quantity,"onUpdate:modelValue":t[1]||(t[1]=t=>e.quantity=t),rules:e.quantityRules,max:6,label:"Quantity",type:"number",variant:"outlined",required:""},null,8,["modelValue","rules"]),(0,i._)("div",w,[(0,i.Wm)(c.T,{variant:"elevated",size:"large",color:"primary",onClick:t[2]||(t[2]=t=>e.btnBuyProduct())},{default:(0,i.w5)((()=>[D])),_:1}),(0,i.Wm)(c.T,{variant:"elevated",size:"large",color:"primary",onClick:t[3]||(t[3]=t=>e.addItemToStoreId())},{default:(0,i.w5)((()=>[z])),_:1})])])),_:1}),(0,i.Wm)(o,{onHandleDialog:t[4]||(t[4]=t=>e.handleDialogStep(t)),dialog:e.dialogSteps,pastSteps:e.steps},null,8,["dialog","pastSteps"])])),_:1})}var k=a(4870),q=a(4497),P=(0,i.aZ)({name:"ProductDetail",props:{shirtData:{type:Object,required:!0}},components:{DialogFullScreen:q.Z},created(){console.log(this),this.sizes.length<1?this.fetchAllSizes():this.selection=this.sizes[0]._id},data:()=>({}),setup(e){const{setIdStore:t,fetchAllSizes:a,buyProduct:s}=(0,n.ol)(["setIdStore","fetchAllSizes","buyProduct"]),{user:l,storeId:r,sizes:o}=(0,n.eJ)(["user","storeId","sizes"]),d=(0,k.iH)(1),u=(0,k.iH)(""),c=(0,k.iH)(!1),p=(0,k.iH)([{component:"Register",tutorial:!1}]),h=(0,k.iH)([e=>!!e||"El campo es requerido",e=>/^[0-9]{1,6}$/.test(e)||"No debe tener mas de 6 digitos",e=>e>0||"No debe ser menos de 1"]);(0,i.YP)(o,(e=>{e.length>0&&(u.value=e[0]._id)}));const m=()=>{t({id:e.shirtData._id,quantity:d.value,size:u.value})},g=()=>{console.log("buyProduct",l),l.value?s({userId:e.shirtData.userId,productId:e.shirtData._id,sizeId:u.value,quantity:d.value}):v(!0)},v=e=>{console.log("handleDialogStep",e),c.value=e};return{quantityRules:h,quantity:d,selection:u,addItemToStoreId:m,btnBuyProduct:g,setIdStore:t,storeId:r,sizes:o,fetchAllSizes:a,steps:p,dialogSteps:c,handleDialogStep:v}}}),x=a(89);const W=(0,x.Z)(P,[["render",I],["__scopeId","data-v-2b8344d6"]]);var H=W,V=(0,i.aZ)({props:{id:{type:String,required:!1}},name:"DetailView",components:{ProductDetail:H},setup(){const{fetchShirt:e}=(0,n.ol)(["fetchShirt"]),{detailShirt:t}=(0,n.eJ)(["detailShirt"]);return{fetchShirt:e,detailShirt:t}},mounted(){console.log(this.id),this.fetchShirt(this.id)}});const j=(0,x.Z)(V,[["render",d],["__scopeId","data-v-52310ea0"]]);var Z=j}}]);
//# sourceMappingURL=289.19d2007c.js.map