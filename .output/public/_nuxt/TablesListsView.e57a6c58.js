import{_ as N}from"./BaseButton.b6dfa1ce.js";import{_ as I}from"./SectionTitleLineWithButton.33fd8d2c.js";import{_ as O,a as F}from"./CardBoxClient.77fa0d50.js";import{_ as D}from"./UserAvatar.d8d89475.js";import{o as c,c as d,w as a,b as t,i as s,x as f,u as n,Q as R,h as W,I as q,j as b,a as _,e as z,F as h,E as x,C as j}from"./entry.730cdf2a.js";import{_ as A}from"./PillTag.8de604b1.js";import{b as Q,_ as U}from"./sampleButtonMenuOptions.12384809.js";import{_ as k}from"./CardBox.efd56a9c.js";import{a2 as G,a3 as H,a as J,a4 as K,l as $,a5 as v}from"./mdi.d9ce62a9.js";import{_ as X}from"./NotificationBar.a0938b36.js";import{_ as Y}from"./TableSampleClients.88c76262.js";import{C as Z}from"./CardBoxComponentEmpty.08f599cb.js";import{_ as tt}from"./SectionMain.8363d8d0.js";import"./BaseIcon.109bb57d.js";import"./_plugin-vue_export-helper.a1a6add7.js";const ot={class:"text-center md:text-left"},et={class:"text-xl"},nt={class:"text-gray-500"},at={class:"text-xl md:mx-6"},st={__name:"CardBoxProduct",props:{product:{type:Object,required:!0,validate:e=>e.name&&e.date&&e.adjective&&e.material&&e.price}},setup(e){return(r,B)=>{const u=D,i=R,m=A,y=W,p=U,l=k;return c(),d(l,{class:"mb-6 last:mb-0","is-hoverable":""},{default:a(()=>[t(i,null,{default:a(()=>[t(i,{type:"justify-start"},{default:a(()=>[t(u,{class:"w-12 h-12 md:mr-6",api:"bottts",bg:"",username:e.product.name},null,8,["username"]),s("div",ot,[s("h4",et,f(e.product.name),1),s("p",nt,f(e.product.date),1)])]),_:1}),t(i,{type:"justify-end"},{default:a(()=>[t(y,{"class-addon":"mr-1.5 last:mr-0 mb-3"},{default:a(()=>[t(m,{color:"success",label:e.product.adjective,small:""},null,8,["label"]),t(m,{color:"info",label:e.product.material,small:""},null,8,["label"]),t(m,{color:"warning",label:e.product.product,small:""},null,8,["label"])]),_:1}),s("h4",at,"$"+f(e.product.price),1),t(p,{options:n(Q),icon:n(G),small:""},null,8,["options","icon"])]),_:1})]),_:1})]),_:1})}}},ct={class:"grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6"},lt={class:"flex flex-col justify-between"},it={class:"flex flex-col justify-between"},rt=s("b",null,"Responsive table.",-1),mt=j(" Collapses on mobile "),_t=s("b",null,"Empty.",-1),dt=j(" When there's nothing to show "),Tt={__name:"TablesListsView",setup(e){const r=q(),B=b(()=>r.clients.slice(0,3)),u=b(()=>r.history.slice(0,3)),i=b(()=>(r.products||[]).slice(0,4));return(m,y)=>{const p=N,l=I,w=O,T=F,P=st,g=X,E=Y,C=k,S=Z,V=tt,L=z;return c(),_("div",null,[t(L,{name:"zen"},{default:a(()=>[t(V,null,{default:a(()=>[t(l,{icon:n(H),title:"Finance",main:""},{default:a(()=>[t(p,{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",label:"Buy dashboard",icon:n(J),color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),s("div",ct,[s("div",lt,[(c(!0),_(h,null,x(n(u),(o,M)=>(c(),d(w,{key:M,amount:o.amount,date:o.date,business:o.business,type:o.type,name:o.name,account:o.account},null,8,["amount","date","business","type","name","account"]))),128))]),s("div",it,[(c(!0),_(h,null,x(n(B),o=>(c(),d(T,{key:o.id,name:o.name,login:o.login,date:o.created,progress:o.progress},null,8,["name","login","date","progress"]))),128))])]),t(l,{icon:n(K),title:"Products"},null,8,["icon"]),(c(!0),_(h,null,x(n(i),o=>(c(),d(P,{key:o.id,product:o},null,8,["product"]))),128)),t(l,{icon:n($),title:"Responsive Table"},null,8,["icon"]),t(g,{color:"info",icon:n($)},{default:a(()=>[rt,mt]),_:1},8,["icon"]),t(C,{class:"mb-6","has-table":""},{default:a(()=>[t(E,{checkable:""})]),_:1}),t(l,{icon:n(v),title:"Empty variation"},null,8,["icon"]),t(g,{color:"danger",icon:n(v)},{default:a(()=>[_t,dt]),_:1},8,["icon"]),t(C,null,{default:a(()=>[t(S)]),_:1})]),_:1})]),_:1})])}}};export{Tt as default};