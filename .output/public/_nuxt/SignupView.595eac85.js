import{_ as h}from"./FormControl.7d132941.js";import{_ as g}from"./FormField.5156074c.js";import{_ as b}from"./BaseButton.9c4e5419.js";import{z as w,I as V,o as x,a as S,b as e,w as o,e as y,f as B,B as C,u as m,C as $,Q as v,R as P}from"./entry.9b5e4f21.js";import{_ as k}from"./CardBox.812cf05e.js";import{_ as F}from"./SectionFormScreen.38dd5bf0.js";import{b as U,a0 as j}from"./mdi.d9ce62a9.js";import"./BaseIcon.0e12e6ab.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./colorsPremium.f004664a.js";import"./JustboilLogo.098e0e9b.js";const E=$(" Have an account? "),J={__name:"SignupView",setup(L){const a=w({login:"johndoe",email:"john.doe@example.com",pass:"secret"}),i=V(),r=()=>{i.pushMessage("Submitted. Demo only","contrast")};return(M,t)=>{const l=h,s=g,p=b,u=v,c=k,_=F,d=y;return x(),S("div",null,[e(d,null,{default:o(()=>[e(_,{bg:"yellowRed","has-promo":""},{default:o(({cardClass:f})=>[e(c,{class:B(f),"is-form":"",onSubmit:C(r,["prevent"])},{footer:o(()=>[e(u,{mobile:""},{default:o(()=>[e(p,{label:"Signup",type:"submit",color:"info"}),e(m(P),{to:"/login",class:"text-sm"},{default:o(()=>[E]),_:1})]),_:1})]),default:o(()=>[e(s,{label:"Username",help:"Please enter your new username"},{default:o(()=>[e(l,{modelValue:a.login,"onUpdate:modelValue":t[0]||(t[0]=n=>a.login=n),"icon-right":m(U),name:"login",placeholder:"johndoe",autocomplete:"username"},null,8,["modelValue","icon-right"])]),_:1}),e(s,{label:"Email",help:"Please enter your email"},{default:o(()=>[e(l,{modelValue:a.email,"onUpdate:modelValue":t[1]||(t[1]=n=>a.email=n),"icon-right":m(j),name:"login",type:"email",placeholder:"user@example.com",autocomplete:"email"},null,8,["modelValue","icon-right"])]),_:1}),e(s,{label:"Password",help:"Click icon to show/hide"},{default:o(()=>[e(l,{modelValue:a.pass,"onUpdate:modelValue":t[2]||(t[2]=n=>a.pass=n),type:"password",name:"password",placeholder:"Password",autocomplete:"new-password"},null,8,["modelValue"])]),_:1})]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1})])}}};export{J as default};