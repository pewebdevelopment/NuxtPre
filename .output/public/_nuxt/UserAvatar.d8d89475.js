import{j as r,o,a as u,i as c,u as t,r as p}from"./entry.730cdf2a.js";const i=["src","alt"],f={__name:"UserAvatar",props:{username:{type:String,required:!0},avatar:{type:String,default:null},api:{type:String,default:"avataaars"}},setup(s){const a=s,l=r(()=>{var e;return(e=a.avatar)!=null?e:`https://avatars.dicebear.com/api/${a.api}/${a.username.replace(/[^a-z0-9]+/i,"-")}.svg`}),n=r(()=>a.username);return(e,d)=>(o(),u("div",null,[c("img",{src:t(l),alt:t(n),class:"rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"},null,8,i),p(e.$slots,"default")]))}};export{f as _};
