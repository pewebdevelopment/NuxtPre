import{_ as V}from"./FormControl.7d132941.js";import{_ as w}from"./FormField.5156074c.js";import{_ as g}from"./FormCheckRadio.ff32033a.js";import{_ as B}from"./BaseButton.9c4e5419.js";import{z as h,V as x,o as $,a as k,b as o,w as e,e as y,f as C,B as F,u as r,h as v}from"./entry.9b5e4f21.js";import{_ as P}from"./CardBox.812cf05e.js";import{_ as S}from"./SectionFullScreen.4d4628e0.js";import{b as U,z}from"./mdi.d9ce62a9.js";import"./BaseIcon.0e12e6ab.js";import"./_plugin-vue_export-helper.a1a6add7.js";const I={__name:"index",setup(L){const n=h({login:"john.doe",pass:"highly-secure-password-fYjUw-",remember:!0}),u=x(),i=()=>{u.push("/dashboard")};return(R,t)=>{const s=V,l=w,_=g,m=B,p=v,c=P,d=S,f=y;return $(),k("div",null,[o(f,null,{default:e(()=>[o(d,{bg:"purplePink"},{default:e(({cardClass:b})=>[o(c,{class:C(b),"is-form":"",onSubmit:F(i,["prevent"])},{footer:e(()=>[o(p,null,{default:e(()=>[o(m,{type:"submit",color:"info",label:"Login"}),o(m,{to:"/dashboard",color:"info",outline:"",label:"Back"})]),_:1})]),default:e(()=>[o(l,{label:"Login",help:"Please enter your login"},{default:e(()=>[o(s,{modelValue:n.login,"onUpdate:modelValue":t[0]||(t[0]=a=>n.login=a),icon:r(U),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),o(l,{label:"Password",help:"Please enter your password"},{default:e(()=>[o(s,{modelValue:n.pass,"onUpdate:modelValue":t[1]||(t[1]=a=>n.pass=a),icon:r(z),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),o(_,{modelValue:n.remember,"onUpdate:modelValue":t[2]||(t[2]=a=>n.remember=a),name:"remember",label:"Remember","input-value":!0},null,8,["modelValue"])]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1})])}}};export{I as default};