import{j as r,o as i,a as o,u as s,i as c,r as u,f as p}from"./entry.730cdf2a.js";const h=["width","height"],d=["d"],_={__name:"BaseIcon",props:{path:{type:String,required:!0},w:{type:String,default:"w-6"},h:{type:String,default:"h-6"},size:{type:[String,Number],default:null}},setup(n){const t=n,l=r(()=>`inline-flex justify-center items-center ${t.w} ${t.h}`),a=r(()=>{var e;return(e=t.size)!=null?e:16});return(e,f)=>(i(),o("span",{class:p(s(l))},[(i(),o("svg",{viewBox:"0 0 24 24",width:s(a),height:s(a),class:"inline-block"},[c("path",{fill:"currentColor",d:n.path},null,8,d)],8,h)),u(e.$slots,"default")],2))}};export{_};