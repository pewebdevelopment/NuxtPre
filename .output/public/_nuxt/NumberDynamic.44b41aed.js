import{A as f,j as c,V as v,H as m,J as p,o as d,a as x,x as r,u as y}from"./entry.730cdf2a.js";const w={__name:"NumberDynamic",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},setup(a){const t=a,e=f(0),i=c(()=>e.value<1e3?e.value:v(e.value).format("0,0")),u=c(()=>t.value),o=l=>{const n=Math.ceil(e.value+l);if(n>u.value)return e.value=u.value,!1;e.value=n,setTimeout(()=>{o(l)},25)},s=()=>{e.value=0,o(t.value/(t.duration/25))};return m(u,()=>{s()}),p(()=>{s()}),(l,n)=>(d(),x("div",null,r(a.prefix)+r(y(i))+r(a.suffix),1))}};export{w as _};
