import{_ as J}from"./BaseButton.b6dfa1ce.js";import{a as K,_ as G}from"./SectionTitleLineWithButton.33fd8d2c.js";import{a as X,s as Y,_ as Z}from"./CardBoxWidget.0357733c.js";import{I as j,j as m,A as k,o as l,c as u,w as a,b as e,i as t,x as L,u as n,Q as ee,C as h,a as f,s as b,a6 as te,F as V,a7 as ne,H as N,a8 as oe,J as se,a9 as ae,e as le,E as T,h as ie}from"./entry.730cdf2a.js";import{K as ce,f as S,a as re,h as M,i as de,L as me,M as ue,N as _e,O as pe,P as fe,Q as he,j as P,k as xe,l as ge}from"./mdi.d9ce62a9.js";import{_ as ye}from"./UserAvatarCurrentUser.2536ad88.js";import{_ as A}from"./CardBox.efd56a9c.js";import{_ as ve}from"./FormCheckRadio.2a3fb139.js";import{_ as be}from"./PillTag.8de604b1.js";import{a as $e,_ as Ce}from"./CardBoxClient.77fa0d50.js";import{_ as we}from"./BaseDivider.b99e8918.js";import{_ as Be}from"./NotificationBar.a0938b36.js";import{_ as Se}from"./TableSampleClients.88c76262.js";import{_ as ke}from"./SectionMain.8363d8d0.js";import"./BaseIcon.109bb57d.js";import"./NumberDynamic.44b41aed.js";import"./UserAvatar.d8d89475.js";import"./_plugin-vue_export-helper.a1a6add7.js";const Le={class:"space-y-3 text-center md:text-left lg:mx-12"},Ve={class:"flex justify-center md:block"},Ne={class:"text-2xl"},Te=h(" Howdy, "),Me=h("! "),Pe=t("p",null,[h("Last login "),t("b",null,"12 mins ago"),h(" from "),t("b",null,"127.0.0.1")],-1),je={class:"flex justify-center md:block"},Ae={__name:"UserCard",setup(o){const i=j(),c=m(()=>i.userName),x=k(!1);return($,_)=>(l(),u(A,{flex:"flex-row",class:"items-center"},{default:a(()=>[e(ee,{type:"justify-around lg:justify-center"},{default:a(()=>[e(ye,{class:"lg:mx-12"}),t("div",Le,[t("div",Ve,[e(ve,{modelValue:x.value,"onUpdate:modelValue":_[0]||(_[0]=g=>x.value=g),name:"notifications-switch",type:"switch",label:"Notifications","input-value":!0},null,8,["modelValue"])]),t("h1",Ne,[Te,t("b",null,L(n(c)),1),Me]),Pe,t("div",je,[e(be,{label:"Verified",color:"info",icon:n(ce)},null,8,["icon"])])])]),_:1})]),_:1}))}},De={class:"mb-3"},Ie={class:"space-y-3"},Oe={class:"text-gray-500 dark:text-gray-400"},He={class:"text-xl"},Ue={__name:"CardBoxAmountItem",props:{title:{type:String,required:!0},value:{type:String,required:!0},divider:Boolean,trend:{type:String,default:null},trendType:{type:String,default:null},icon:{type:String,default:null},iconType:{type:String,default:null}},setup(o){return(i,c)=>(l(),f(V,null,[t("div",De,[o.trend?(l(),u(X,{key:0,trend:o.trend,"trend-type":o.trendType,small:""},null,8,["trend","trend-type"])):b("",!0)]),t("div",te(i.$attrs,{class:{"flex justify-between items-center":o.icon}}),[t("div",Ie,[t("h4",Oe,L(o.title),1),t("h3",He,L(o.value),1)]),o.icon?(l(),u(K,{key:0,icon:o.icon,color:o.iconType,bg:""},null,8,["icon","color"])):b("",!0)],16),o.divider?(l(),u(we,{key:0})):b("",!0)],64))}},Fe={class:"grid grid-cols-12 gap-6 mb-6 -mx-6 md:mx-0"},We={class:"col-span-12 sm:col-span-6 xl:col-span-3"},qe={class:"col-span-12 sm:col-span-6 xl:col-span-3"},Ee={class:"col-span-12 sm:col-span-6 xl:col-span-3"},Qe={class:"col-span-12 sm:col-span-6 xl:col-span-3"},Re={class:"grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6"},ze={class:"flex flex-col"},Je={class:"grid grid-cols-1 xl:grid-cols-4 xl:gap-6 mb-6"},Ke={class:"xl:flex xl:flex-col xl:col-span-3 mb-6 xl:mb-0"},Ge={class:"grid grid-cols-1 gap-6 md:grid-cols-4"},Xe={key:0,class:"md:col-span-3"},Ye={class:"text-center md:text-right"},Ze=t("b",null,"Responsive table.",-1),et=h(" Collapses on mobile "),vt={__name:"HomeView",setup(o){const i=j(),c=ne();c.pushMessage("Welcome back. This is demo","contrast");const x=k(!0);N(x,r=>{r?c.pushMessage("Success! Now active","success"):c.pushMessage("Done! Now inactive","danger")});const $=oe(),_=m(()=>$.isLg),g=m(()=>$.isMd);N([_,g],()=>{w()});const C=k(null),w=()=>{let r=4;_.value?r=9:g.value&&(r=6),C.value=Y(r)};se(()=>{w()});const D=m(()=>i.clients.slice(0,3)),I=m(()=>i.history);return m(()=>i.products),(r,tt)=>{const y=J,p=G,v=Z,O=Ae,H=$e,U=Ce,d=Ue,F=ie,B=A,W=ae("LineChart"),q=Be,E=Se,Q=ke,R=le;return l(),f("div",null,[e(R,{name:"zen"},{default:a(()=>[e(Q,null,{default:a(()=>[e(p,{icon:n(S),title:"Overview",main:""},{default:a(()=>[e(y,{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",label:"Buy dashboard",icon:n(re),color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),t("div",Fe,[t("div",We,[e(v,{trend:"12%","trend-type":"up",color:"text-emerald-500",icon:n(M),number:512,label:"Clients"},null,8,["icon"])]),t("div",qe,[e(v,{trend:"12%","trend-type":"down",color:"text-blue-500",icon:n(de),number:7770,prefix:"$",label:"Sales"},null,8,["icon"])]),t("div",Ee,[e(v,{trend:"Overflow","trend-type":"alert",color:"text-red-500",icon:n(S),number:256,suffix:"%",label:"Performance"},null,8,["icon"])]),t("div",Qe,[e(v,{trend:"Last 24 hours","trend-type":"info",color:"text-yellow-500",icon:n(me),number:24,label:"Alerts"},null,8,["icon"])])]),t("div",Re,[e(O),t("div",ze,[(l(!0),f(V,null,T(n(D),s=>(l(),u(H,{key:s.id,name:s.name,login:s.login,date:s.created,progress:s.progress},null,8,["name","login","date","progress"]))),128))])]),e(p,{icon:n(S),title:"Finance"},null,8,["icon"]),t("div",Je,[t("div",Ke,[(l(!0),f(V,null,T(n(I),(s,z)=>(l(),u(U,{key:z,amount:s.amount,date:s.date,business:s.business,type:s.type,name:s.name,account:s.account},null,8,["amount","date","business","type","name","account"]))),128))]),e(B,null,{footer:a(()=>[e(F,null,{default:a(()=>[e(y,{color:"info",icon:n(ue),label:"Payout"},null,8,["icon"]),e(y,{color:"info",icon:n(_e),outline:""},null,8,["icon"])]),_:1})]),default:a(()=>[e(d,{title:"Unpaid balance",value:"$120,489.67",icon:n(pe),"icon-type":"info",divider:""},null,8,["icon"]),e(d,{title:"Pending transactions",value:"$756.49",icon:n(fe),"icon-type":"warning",divider:""},null,8,["icon"]),e(d,{title:"Pending withdrawals",value:"$50,124.28",icon:n(he),"icon-type":"danger"},null,8,["icon"])]),_:1})]),e(p,{icon:n(P),title:"Trends overview"},{default:a(()=>[e(y,{icon:n(xe),color:"whiteDark",onClick:w},null,8,["icon"])]),_:1},8,["icon"]),e(B,{class:"mb-6"},{default:a(()=>[t("div",Ge,[C.value?(l(),f("div",Xe,[e(W,{data:C.value},null,8,["data"])])):b("",!0),t("div",Ye,[e(d,{title:"Checking Account",value:"$33,908.37",trend:"12%","trend-type":"up",divider:""}),e(d,{title:"Auto Loan Account",value:"$1,456.49",trend:"Balance low","trend-type":"alert",divider:""}),e(d,{title:"Home Loan Account",value:"$98,726.20",trend:"24%","trend-type":"down"})])])]),_:1}),e(p,{icon:n(P),title:"Products"},null,8,["icon"]),e(p,{icon:n(M),title:"Clients"},null,8,["icon"]),e(q,{color:"info",icon:n(ge)},{default:a(()=>[Ze,et]),_:1},8,["icon"]),e(B,{"has-table":""},{default:a(()=>[e(E)]),_:1})]),_:1})]),_:1})])}}};export{vt as default};