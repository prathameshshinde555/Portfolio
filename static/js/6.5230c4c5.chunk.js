(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[6],{58:function(e,t,a){"use strict";var n=a(1),c=a(0),s=a(4),i=a.n(s),r=a(21),o=a.p+"static/media/gotham-bold.73ce573b.woff2";a(60);t.a=({children:e,level:t=1,as:a,align:s="auto",weight:l="medium",className:d,...u})=>{const b=Math.min(Math.max(t,0),4),j=a||`h${Math.max(b,1)}`;return Object(n.jsxs)(c.Fragment,{children:["bold"===l&&Object(n.jsxs)(r.a,{children:[Object(n.jsx)("link",{rel:"preload",href:o,as:"font",crossorigin:""}),Object(n.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${o}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(n.jsx)(j,{className:i()(d,"heading",`heading--align-${s}`,`heading--level-${b}`,`heading--weight-${l}`),...u,children:e})]})}},59:function(e,t,a){"use strict";var n=a(1),c=a(4),s=a.n(c);a(62);t.a=({children:e,size:t="m",as:a="p",align:c="auto",weight:i="auto",secondary:r,className:o,...l})=>Object(n.jsx)(a,{className:s()(o,"text",`text--align-${c}`,`text--size-${t}`,`text--weight-${i}`,{"text--secondary":r}),...l,children:e})},60:function(e,t,a){},61:function(e,t,a){"use strict";var n=a(1),c=a(0),s=a(4),i=a.n(s);a(65);const r=Object(c.forwardRef)((({as:e="div",children:t,className:a,...c},s)=>Object(n.jsx)(e,{className:i()("section",a),ref:s,...c,children:t})));t.a=r},62:function(e,t,a){},63:function(e,t,a){"use strict";var n=a(1),c=a(0),s=a(4),i=a.n(s),r=a(9),o=a(67),l=a(23),d=a(27);a(64);const u=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],b="glyph",j="value";const h=({text:e,start:t=!0,delay:a=0,className:s,...h})=>{const m=Object(c.useRef)([{type:b,value:""}]),p=Object(c.useRef)(),O=Object(r.h)();return Object(c.useEffect)((()=>{const n=p.current,c=e.split("");let s;const i=()=>{const e=m.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));n.innerHTML=e.join("")},r=Object(o.d)(0,(e=>{m.current=function(e,t,a){return e.map(((e,n)=>{if(n<a)return{type:j,value:e};if(a%1<.5){const e=Math.floor(Math.random()*u.length);return{type:b,value:u[e]}}return{type:b,value:t[n].value}}))}(c,m.current,e),i()}));return!t||s||O||d.a||(s=Object(o.a)(Object(o.b)(a),Object(o.c)({from:0,to:c.length,stiffness:8,damping:5})).start(r)),O&&(m.current=c.map(((e,t)=>({type:j,value:c[t]}))),i()),()=>{s&&s.stop()}}),[O,t,a,e]),Object(n.jsxs)("span",{className:i()("decoder-text",s),...h,children:[Object(n.jsx)(l.a,{className:"decoder-text__label",children:e}),Object(n.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:p})]})};t.a=Object(c.memo)(h)},64:function(e,t,a){},65:function(e,t,a){},69:function(e,t,a){"use strict";var n=a(1),c=a(4),s=a.n(c),i=a(2);a(71);const r=({lineWidth:e,lineHeight:t,notchWidth:a,notchHeight:c,collapseDelay:r,collapsed:o,className:l,style:d})=>Object(n.jsxs)("div",{className:s()("divider",l),style:{"--lineWidth":e,"--lineHeight":t,"--notchWidth":a,"--notchHeight":c,"--collapseDelay":Object(i.c)(r),...d},children:[Object(n.jsx)("div",{className:s()("divider__line",{"divider__line--collapsed":o})}),Object(n.jsx)("div",{className:s()("divider__notch",{"divider__notch--collapsed":o}),style:{"--collapseDelay":Object(i.c)(r+160)}})]});r.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0},t.a=r},71:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a(4),i=a.n(s),r=a(56),o=a(57),l=a(21);a(86);var d=({className:e,resize:t="none",value:a,onChange:s,minRows:r=1,maxRows:o,...l})=>{const[d,u]=Object(c.useState)(r),[b,j]=Object(c.useState)(),h=Object(c.useRef)();Object(c.useEffect)((()=>{const e=getComputedStyle(h.current),t=parseInt(e.lineHeight,10),a=parseInt(e.paddingTop,10)+parseInt(e.paddingBottom,10);j({lineHeight:t,paddingHeight:a})}),[]);return Object(n.jsx)("textarea",{className:i()("textarea",e),ref:h,onChange:e=>{s(e);const{lineHeight:t,paddingHeight:a}=b,n=e.target.rows;e.target.rows=r;const c=~~((e.target.scrollHeight-a)/t);c===n&&(e.target.rows=c),o&&c>=o&&(e.target.rows=o,e.target.scrollTop=e.target.scrollHeight),u(o&&c>o?o:c)},style:{"--resize":t},rows:d,value:a,...l})},u=a(9),b=a(20),j=a(10),h=a(2),m=a(14);a(87);var p=({id:e,label:t,hasValue:a,value:s,multiline:l,className:p,style:O,error:_,onBlur:g,...f})=>{const[x,v]=Object(c.useState)(!1),y=Object(u.c)(),N=Object(c.useRef)(),w=e||`input-${y}`,$=`${w}-label`,S=`${w}-error`,M=l?d:"input";return Object(n.jsxs)("div",{className:i()("input",p,{"input--error":!!_}),style:O,children:[Object(n.jsxs)("div",{className:"input__content",children:[Object(n.jsx)("label",{className:i()("input__label",{"input__label--focused":x,"input__label--has-value":!!s}),id:$,htmlFor:w,children:t}),Object(n.jsx)(M,{className:"input__element",id:w,"aria-labelledby":$,"aria-describedby":_?S:void 0,onFocus:()=>v(!0),onBlur:e=>{v(!1),g&&g(e)},value:s,...f}),Object(n.jsx)("div",{className:i()("input__underline",{"input__underline--focused":x})})]}),Object(n.jsx)(r.a,{component:null,children:!!_&&Object(n.jsx)(o.a,{timeout:Object(h.b)(j.b.base.durationM),children:e=>{var t;return Object(n.jsx)("div",{className:i()("input__error",`input__error--${e}`),id:S,role:"alert",style:{"--height":Object(b.a)(e)?Object(h.d)(null===(t=N.current)||void 0===t?void 0:t.getBoundingClientRect().height):"0px"},children:Object(n.jsxs)("div",{className:"input__error-message",ref:N,children:[Object(n.jsx)(m.a,{icon:"error"}),_]})})}})})]})},O=a(63),_=a(69),g=a(22),f=a(61),x=a(27),v=a(58),y=a(59);a(88);const N=j.b.base.durationS;function w(e,t=Object(h.c)(0),a=1){const n=Object(h.b)(e)*a;return{"--delay":Object(h.c)((Object(h.b)(t)+n).toFixed(0))}}t.default=()=>{const{status:e}=Object(u.j)(),t=Object(c.useRef)(),a=Object(u.b)(""),s=Object(u.b)(""),[d,$]=Object(c.useState)(!1),[S,M]=Object(c.useState)(!1),[H,R]=Object(c.useState)("");Object(u.k)();const k=Object(c.useCallback)((async e=>{if(e.preventDefault(),R(""),!d)try{$(!0);const e=await fetch("/api/message",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.value,message:s.value})}),t=await e.json(),n=function({status:e,errorMessage:t,fallback:a="There was a problem with your request"}){return 200!==e&&(t||{500:"There was a problem with the server, try again later",404:"There was a problem connecting to the server. Make sure you are connected to the internet"}[e]||a)}({status:null===e||void 0===e?void 0:e.status,errorMessage:null===t||void 0===t?void 0:t.error,fallback:"There was a problem sending your message"});if(n)throw new Error(n);M(!0),$(!1)}catch(t){$(!1),R(t.message)}}),[a.value,s.value,d]);return Object(n.jsxs)(f.a,{className:i()("contact",`contact--${e}`),children:[Object(n.jsxs)(l.a,{children:[Object(n.jsx)("title",{children:"Contact | Prathamesh Shinde"}),Object(n.jsx)("meta",{name:"description",content:"Send me a message if you\u2019re interested in discussing a project or if you just want to say hi"})]}),Object(n.jsxs)(r.a,{component:null,children:[!S&&Object(n.jsx)(o.a,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:1600,onEnter:b.b,children:e=>Object(n.jsxs)("form",{className:"contact__form",method:"post",onSubmit:k,children:[Object(n.jsx)(v.a,{className:i()("contact__title",`contact__title--${e}`,{"contact__title--hidden":x.a}),level:3,as:"h1",style:w(j.b.base.durationXS,N,.3),children:Object(n.jsx)(O.a,{text:"Say hello",start:"exited"!==e&&!x.a,delay:300})}),Object(n.jsx)(_.a,{className:i()("contact__divider",`contact__divider--${e}`,{"contact__divider--hidden":x.a}),style:w(j.b.base.durationXS,N,.4)}),Object(n.jsx)(p,{required:!0,className:i()("contact__input",`contact__input--${e}`,{"contact__input--hidden":x.a}),style:w(j.b.base.durationXS,N),autoComplete:"email",label:"Your Email",type:"email",maxLength:512,...a}),Object(n.jsx)(p,{required:!0,multiline:!0,className:i()("contact__input",`contact__input--${e}`,{"contact__input--hidden":x.a}),style:w(j.b.base.durationS,N),autoComplete:"off",label:"Message",maxLength:4096,...s}),Object(n.jsx)(r.a,{component:null,children:!!H&&Object(n.jsx)(o.a,{timeout:Object(h.b)(j.b.base.durationM),children:e=>{var a;return Object(n.jsx)("div",{className:i()("contact__form-error",`contact__form-error--${e}`),style:{"--height":Object(b.a)(e)?Object(h.d)(null===(a=t.current)||void 0===a?void 0:a.getBoundingClientRect().height):"0px"},children:Object(n.jsx)("div",{className:"contact__form-error-content",ref:t,children:Object(n.jsxs)("div",{className:"contact__form-error-message",children:[Object(n.jsx)(m.a,{className:"contact__form-error-icon",icon:"error"}),H]})})})}})}),Object(n.jsx)(g.a,{className:i()("contact__button",`contact__button--${e}`,{"contact__button--hidden":x.a,"contact__button--sending":d}),style:w(j.b.base.durationM,N),disabled:d,loading:d,loadingText:"Sending...",icon:"send",type:"submit",children:"Send Message"})]})}),S&&Object(n.jsx)(o.a,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,onEnter:b.b,timeout:0,children:e=>Object(n.jsxs)("div",{className:"contact__complete","aria-live":"polite",children:[Object(n.jsx)(v.a,{level:3,as:"h3",className:i()("contact__complete-title",`contact__complete-title--${e}`),children:"Message Sent"}),Object(n.jsx)(y.a,{size:"l",className:i()("contact__complete-text",`contact__complete-text--${e}`),style:w(j.b.base.durationXS),children:"I\u2019ll get back to you within a couple days, sit tight"}),Object(n.jsx)(g.a,{secondary:!0,iconHoverShift:!0,className:i()("contact__complete-button",`contact__complete-button--${e}`),style:w(j.b.base.durationM),href:"/",icon:"chevronRight",children:"Back to homepage"})]})})]})]})}}}]);
//# sourceMappingURL=6.5230c4c5.chunk.js.map