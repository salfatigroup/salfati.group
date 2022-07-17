import{_ as p}from"./SgInput-bad68144.mjs";import{_ as n,d as u,o as d,c as l,n as m,a as e,e as r,p as _,g as f,b as x,h as v,i as h}from"./entry-c2e3a3f9.mjs";const y=u({name:"SgTextarea",props:{modelValue:{type:String,default:""},dark:{type:Boolean,default:!1}},setup(a,{expose:o}){o();const s={props:a};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),g=["value"];function b(a,o,t,s,O,T){return d(),l("textarea",{class:m({"w-full rounded-lg p-4 outline-none":!0,"bg-gray-800 hover:bg-gray-700 focus:bg-gray-700":t.dark,"bg-gray-100 hover:bg-gray-200 focus:bg-gray-200":!t.dark}),value:t.modelValue,onInput:o[0]||(o[0]=c=>a.$emit("update:modelValue",c.target.value))},null,42,g)}var S=n(y,[["render",b]]);const w={},i=a=>(_("data-v-7a828356"),a=a(),f(),a),k={class:"space-y-24 mt-20 mb-44 relative max-w-6xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5"},q=i(()=>e("div",{class:"text-center max-w-xl mx-auto space-y-4"},[e("h1",{class:"text-4xl font-extrabold"},[v(" Talk to one of our "),e("span",{class:"gradient-text"},"experts")]),e("p",null," We're here to help you find the right solution for your business. Our team will respond to your question within 24 hours. ")],-1)),N={class:"flex justify-between space-x-14"},V={class:"flex-col space-y-10 gradient-border",action:"https://formspree.io/f/xyyorybz",method:"POST"},C={class:"flex space-x-10"},I={class:"flex space-x-10"},$=i(()=>e("div",{class:"flex items-center justify-end"},[e("button",{type:"submit",class:"text-white font-medium h-12 px-8 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500"}," Submit ")],-1)),j=x('<div class="space-y-6" data-v-7a828356><div class="text-xl font-medium" data-v-7a828356> &quot;Salfati Group have helped us reach our goals in no time. We are amazed by the quality of products and services they provide.&quot; </div><div class="flex items-center justify-center space-x-4" data-v-7a828356><img src="'+h+'" alt="Salo" class="h-14 w-14 rounded-full" data-v-7a828356><div class="text-sm" data-v-7a828356><div class="font-bold" data-v-7a828356>Salomon Serfati</div><div class="text-gray-500" data-v-7a828356>Co-founder and CEO, Chariot</div></div></div></div>',1);function B(a,o){const t=p,s=S;return d(),l("div",k,[q,e("div",N,[e("form",V,[e("div",C,[r(t,{placeholder:"First Name",name:"first_name",type:"text",required:""}),r(t,{placeholder:"Last Name",name:"last_name",type:"text",required:""})]),e("div",I,[r(t,{placeholder:"Email Address",name:"email",type:"email",required:""}),r(t,{placeholder:"Company Name",name:"company",type:"text"})]),r(s,{rows:"10",placeholder:"Message",name:"message",required:""}),$]),j])])}var P=n(w,[["render",B],["__scopeId","data-v-7a828356"]]);export{P as default};
