import{_ as $}from"./FormControl.7d132941.js";import{_ as R}from"./FormField.5156074c.js";import{j as k,R as F,o as c,c as g,w as o,f as d,s as P,i as T,x as N,t as A,u as C,z as H,A as u,a8 as v,a as U,b as e,e as j,B as z,C as D,Q as E,h as I}from"./entry.9b5e4f21.js";import{_ as M}from"./BaseButton.9c4e5419.js";import{_ as Q}from"./BaseIcon.0e12e6ab.js";import{_ as q}from"./CardBox.812cf05e.js";import"./_plugin-vue_export-helper.a1a6add7.js";const G={__name:"ButtonTextLink",props:{to:{type:String,default:null},href:{type:String,default:null},icon:{type:String,default:null},label:{type:String,default:null},small:Boolean},setup(t){const l=t,r=k(()=>l.to?F:"a");return(a,p)=>(c(),g(A(C(r)),{to:t.to,href:t.href,class:d(["inline-flex items-center cursor-pointer",{"text-sm":t.small}])},{default:o(()=>[t.icon?(c(),g(Q,{key:0,path:t.icon,w:"w-4",h:"h-4",class:d([t.small?"mr-1":"mr-2"])},null,8,["path","class"])):P("",!0),T("span",null,N(t.label),1)]),_:1},8,["to","href","class"]))}},J=D(" Forgot password? "),oe={__name:"LoginView",setup(t){const l=H({login:"johndoe",pass:"secret",remember:["remember"]}),r=u(!1);setTimeout(()=>{r.value=!0},750);const a=u(!1),p=k(()=>a.value?"animate-shake":""),w=()=>{a.value=!0,r.value=!1,setTimeout(()=>{a.value=!1,m.value=!1},2e3)},m=u(!0);return(i,n)=>{const f=$,_=R,B=v("FormCheckRadioPicker"),V=v("RouterLink"),h=E,b=M,x=I,y=G,L=q,S=j;return c(),U("div",null,[e(S,null,{default:o(()=>[e(L,{class:d([i.cardClass,C(p)]),"is-form":"",onSubmit:z(w,["prevent"])},{footer:o(()=>[e(h,{mobile:""},{default:o(()=>[e(x,null,{default:o(()=>[e(b,{label:"Login",type:"submit",color:"info",tip:r.value?"Click to see error state":null},null,8,["tip"]),e(b,{label:"Sign up",to:"/signup",color:"info",outline:""})]),_:1}),e(y,{to:"/",icon:i.mdiHome,label:"Home",small:""},null,8,["icon"])]),_:1})]),default:o(()=>[e(_,{label:"Login",error:a.value,help:"Please enter your login"},{default:o(()=>[e(f,{modelValue:l.login,"onUpdate:modelValue":n[0]||(n[0]=s=>l.login=s),error:a.value,"icon-right":i.mdiAccount,name:"login",placeholder:"user@example.com",autocomplete:"username"},null,8,["modelValue","error","icon-right"])]),_:1},8,["error"]),e(_,{label:"Password",error:a.value,help:"Click icon to show/hide"},{default:o(()=>[e(f,{modelValue:l.pass,"onUpdate:modelValue":n[1]||(n[1]=s=>l.pass=s),error:a.value,"tip-right":m.value?null:"Click to show/hide",type:"password",name:"password",placeholder:"Password",autocomplete:"current-password",onRightIconClick:n[2]||(n[2]=s=>m.value=!0)},null,8,["modelValue","error","tip-right"])]),_:1},8,["error"]),e(h,{mobile:""},{default:o(()=>[e(B,{modelValue:l.remember,"onUpdate:modelValue":n[3]||(n[3]=s=>l.remember=s),name:"remember",options:{remember:"Remember"},spaced:""},null,8,["modelValue"]),e(V,{to:"/remind",class:"text-sm"},{default:o(()=>[J]),_:1})]),_:1})]),_:1},8,["class","onSubmit"])]),_:1})])}}};export{oe as default};