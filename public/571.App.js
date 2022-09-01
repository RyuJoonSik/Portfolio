"use strict";(self.webpackChunkdashboard_crud=self.webpackChunkdashboard_crud||[]).push([[571],{1925:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(8804);const l={center:r.iv`
    justify-content: center;
    align-items: center;
  `,centerStart:r.iv`
    justify-content: center;
    align-items: flex-start;
  `,startCenter:r.iv`
    justify-content: flex-start;
    align-items: center;
  `,startStart:r.iv`
    justify-content: flex-start;
    align-items: flex-start;
  `,endCenter:r.iv`
    justify-content: flex-end;
    align-items: center;
  `,spaceBetweenCenter:r.iv`
    justify-content: space-between;
    align-items: center;
  `}},1824:(e,t,n)=>{n.d(t,{Z:()=>r});const r={tablet:"@media screen and (max-width: 768px)",mobile:"@media screen and (max-width: 428px)"}},5780:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8804),l=n(9454);const a=r.iv`
  width: 100%;
  border-radius: ${l.Z.small};
  background-color: ${({theme:e})=>e.color.backgroundAccent};
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.12),
    0px 2px 2px -1px rgba(0, 0, 0, 0.05);
`,o=r.ZP.article`
  ${a};
`},1652:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8804),l=n(9454);const a=r.iv`
  width: 100%;
  max-width: 402px;
  border-radius: ${l.Z.small};
  background-color: ${({theme:e})=>e.color.backgroundAccent};
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.12),
    0px 2px 2px -1px rgba(0, 0, 0, 0.05);
`,o=r.ZP.article`
  ${a};
`},440:(e,t,n)=>{n.d(t,{E:()=>a});var r=n(8804),l=n(8504);const a=r.iv`
  background-color: ${l.iN.default};
  color: ${l.ix.light};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${l.iN.light};
    }
  }

  &:active {
    background-color: ${l.iN.dark};
  }
`;r.ZP.button`
  ${a};
`},1020:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8804),l=n(9454),a=n(329),o=n(440);const c=r.iv`
  ${o.E}
  width: 100%;
  padding: ${l.Z.small} 0;
  border-radius: ${l.Z.smaller};

  ${a.Z.large};
  text-align: center;
`,i=r.ZP.button`
  ${c};
`},1737:(e,t,n)=>{n.d(t,{N:()=>l});var r=n(8804);const l=r.iv`
  background-color: ${({theme:e})=>e.color.backgroundAccent};
  color: ${({theme:e})=>e.color.textAccent};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({theme:e})=>e.color.backgroundHover};
    }
  }
`;r.ZP.button`
  ${l};
`},894:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8804),l=n(9454),a=n(1824),o=n(3016);const c=r.iv`
  ${o.Z.vertical};
  gap: ${l.Z.small};
  padding: ${l.Z.larger};

  color: ${({theme:e})=>e.color.textDefault};

  ${a.Z.mobile} {
    padding: ${l.Z.medium};
  }
`,i=r.ZP.div`
  ${c};
`},6235:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8804),l=n(1925),a=n(3016),o=n(329),c=n(9454);const i=r.ZP.div`
  ${({direction:e,size:t,align:n,gap:i,width:u})=>r.iv`
    ${e?a.Z[e]:a.Z.horizontal};
    ${n?l.Z[n]:l.Z.startStart};
    gap: ${i?c.Z[i]:"initial"};
    ${t?o.Z[t]:o.Z.medium};
    width: ${u||"auto"};
  `}
`},9935:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(8804),l=n(3016),a=n(6758),o=n(9454);const c=r.ZP.div`
  ${l.Z.vertical};
  gap: ${o.Z.smaller};

  &:focus-within {
    ${a.Z.medium};
    color: ${({theme:e})=>e.color.borderFocus};
  }
`},4957:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294);function l({children:e}){return r.createElement("form",{onSubmit:e=>{e.preventDefault()}},e)}},2162:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(8804),l=n(1925),a=n(3016),o=n(1824),c=n(9454);const i=r.iv`
  ${a.Z.horizontal};
  ${l.Z.spaceBetweenCenter};
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  padding: ${c.Z.larger};
  border-bottom: ${c.Z.smallest}
    ${({theme:e})=>e.color.borderDefault} solid;

  color: ${({theme:e})=>e.color.textAccent};

  ${o.Z.mobile} {
    padding: ${c.Z.medium};
  }
`,u=r.ZP.header`
  ${i};
`},1051:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8804),l=n(3016),a=n(1925),o=n(9454),c=n(1824);const i=r.ZP.header`
  ${l.Z.horizontal};
  ${a.Z.spaceBetweenCenter};
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  padding: ${o.Z.larger} 0;
  border-bottom: ${o.Z.smallest}
    ${({theme:e})=>e.color.borderDefault} solid;

  color: ${({theme:e})=>e.color.textAccent};

  ${c.Z.mobile} {
    padding: ${o.Z.medium} 0;
  }
`},694:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8804),l=n(1925),a=n(3016),o=n(1824),c=n(9454);const i=r.ZP.main`
  ${a.Z.vertical};
  ${l.Z.startCenter};
  gap: ${c.Z.larger};
  width: 100%;
  max-width: 1020px;

  ${o.Z.mobile} {
    gap: ${c.Z.medium};
  }
`},5571:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ze});var r=n(7294),l=n(2533),a=n(1051),o=n(694),c=n(3935);function i({children:e}){const t=document.getElementById("modal");return(0,c.createPortal)(e,t)}var u=n(8804),d=n(1925),s=n(3016),m=n(9454);const f=u.iv`
  position: fixed;
  top: 50%;
  left: 50%;

  ${s.Z.horizontal};
  ${d.Z.center};
  box-sizing: border-box;
  width: 100%;
  padding: 0 ${m.Z.large};

  transform: translate(-50%, -50%);
`,h=u.ZP.div`
  ${f};
`,Z="dailyLifePosts";function g(e){(0,r.useEffect)((()=>{e.current?.focus()}),[])}var E=n(1591),$=n(7143);const b="dailyLifePosts";function p(e){return e.map((e=>({...e.data(),id:e.id})))}function v(e,t,n=5){return function(e,...t){const n=t.filter((e=>e));return(0,E.IO)(e,...n)}((0,E.hJ)(y,b),(0,E.Xo)("requestedAt",e),t?(0,E.TQ)(t):null,(0,E.b9)(n))}const y=(0,E.ad)($.Z);var x=n(5308);function w(){const[e,t]=(0,r.useState)(null);return[e,function(e,n,r,l,a){const o=(0,x.cF)($.Z),c=(0,x.iH)(o,e),i=(0,x.B0)(c,n);i.on("state_changed",(e=>{const n=e.bytesTransferred/e.totalBytes*100;l&&l(e),t(n)}),(e=>{a&&a(e)}),(async()=>{const e=await(0,x.Jt)(i.snapshot.ref);r&&r(e)}))}]}var k=n(6401),P=n(1652),C=n(1737);const R=u.iv`
  ${C.N};
  padding: ${m.Z.smaller} ${m.Z.medium};
  border-radius: ${m.Z.smaller};
  border: ${m.Z.smallest} solid
    ${({theme:e})=>e.color.borderDefault};
`,L=u.ZP.button`
  ${R};
`;var F=n(1020),B=n(894),D=n(4957),S=n(2162);const z=u.ZP.button`
  position: absolute;
  width: 0;
  height: 0;
`;function A({focusableElRef:e}){return r.createElement(z,{type:"button",onFocus:()=>{e.current?.focus()}})}var H=n(9935);function U({inputFileRef:e}){return r.createElement(H.Z,null,r.createElement("label",{htmlFor:"file"},"이미지(선택)"),r.createElement("input",{placeholder:"추가할 이미지를 선택해 주세요.",id:"file",type:"file",ref:e}))}function j({value:e,id:t,handleChange:n}){return r.createElement(H.Z,null,r.createElement("label",{htmlFor:t},"내용"),r.createElement("textarea",{placeholder:"내용을 입력해 주세요.",value:e,id:t,onChange:n}))}function J({value:e,id:t,handleChange:n}){return r.createElement(H.Z,null,r.createElement("label",{htmlFor:t},"제목"),r.createElement("input",{placeholder:"제목을 입력해 주세요.",value:e,id:t,onChange:n}))}function N({value:e}){return r.createElement(r.Fragment,null,r.createElement("strong",null,function(e){return 0===e?"이미지 업로드 대기 중...":0<e&&e<100?"이미지 업로드 중...":100==e?"이미지 업로드 완료!":void 0}(e)),r.createElement("progress",{max:100,value:e},e,"%"))}function O({value:e}){return r.createElement(r.Fragment,null,r.createElement("strong",null,function(e){return 0===e?"포스트 업로드 중...":100===e?"포스트 업로드 완료!":void 0}(e)),r.createElement("progress",{max:100,value:e},e,"%"))}function Q({handleHideForm:e}){const t=(0,r.useRef)(null),n=(0,r.useRef)(null),l=(0,r.useRef)(null);g(t);const[a,o]=(0,k.Z)({title:"",content:""}),[c,i]=function(){const[e,t]=(0,r.useState)(null),n=(0,E.ad)($.Z);return[e,async function({title:e,content:r,downloadURL:l},a,o){t((e=>!!e));try{const o=await(0,E.ET)((0,E.hJ)(n,b),{title:e,content:r,downloadURL:l||"",requestedAt:E.EK.now()});a&&a(o),t((e=>!e))}catch(e){o&&o(e)}}]}(),[u,d]=w();(0,r.useEffect)((()=>{c&&setTimeout(e,500)}),[c,e]);return r.createElement(P.Z,null,r.createElement(A,{focusableElRef:n}),r.createElement(S.Z,null,r.createElement("h4",null,"일상 포스트 작성하기"),r.createElement(L,{ref:t,onClick:e},"닫기")),r.createElement(B.Z,null,r.createElement(D.Z,null,r.createElement(J,{value:a.title,id:"title",handleChange:o}),r.createElement(j,{value:a.content,id:"content",handleChange:o}),r.createElement(U,{inputFileRef:l}),r.createElement(F.Z,{type:"button",ref:n,onClick:async()=>{const e=l.current?.files;e?.length?d(`${Z+Date.now()}`,e[0],(e=>{i({...a,downloadURL:e})})):i(a)}},"작성하기")),null!==u&&r.createElement(N,{value:u}),null!==c&&r.createElement(O,{value:c?100:0})),r.createElement(A,{focusableElRef:t}))}const T=u.iv`
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
`,q=u.ZP.div`
  ${T};
`;var _=n(440);const I=u.iv`
  ${_.E};
  ${s.Z.horizontal};
  ${d.Z.center};
  gap: ${m.Z.smaller};
  padding: ${m.Z.small} ${m.Z.small};
  border-radius: ${m.Z.smaller};
`,K=u.ZP.button`
  ${I};
`;var M=n(5780),X=n(6235),G=n(6415),V=n(8504);const W=u.iv`
  background-color: ${V.Q6.default};
  color: ${V.ix.light};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${V.Q6.light};
    }
  }

  &:active {
    background-color: ${V.Q6.dark};
  }
`,Y=(u.ZP.button`
  ${W};
`,u.iv`
  ${s.Z.horizontal};
  ${d.Z.center};
  gap: ${m.Z.smaller};
  padding: ${m.Z.smaller} ${m.Z.smaller};
  border-radius: ${m.Z.smaller};

  word-break: keep-all;
`);u.ZP.button`
  ${Y};
`;const ee=u.ZP.button`
  ${W};
  ${Y};
`;function te({id:e}){const[t,n]=function(){const[e,t]=(0,r.useState)(null);return[e,async function(e,n,r){t(!1);const l=(0,E.ad)($.Z);try{await(0,E.oe)((0,E.JU)(l,b,e)),t(!0),n&&n()}catch(e){r&&r(e)}}]}();return r.createElement(ee,{onClick:()=>{confirm("포스트를 삭제하시겠습니까")&&n(e,(()=>alert("포스트가 삭제되었습니다.")))}},r.createElement(G.H,{size:16}),"삭제")}var ne=n(6196);const re=u.iv`
  background-color: ${V.ek.default};
  color: ${V.ix.light};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${V.ek.light};
    }
  }

  &:active {
    background-color: ${V.ek.dark};
  }
`,le=(u.ZP.button`
  ${re};
`,u.ZP.button`
  ${re};
  ${Y};
`);function ae({buttonRef:e,handleShowForm:t}){return r.createElement(le,{ref:e,onClick:()=>{confirm("포스트를 수정하시겠습니까?")&&t()}},r.createElement(ne.k,{size:16}),"수정")}function oe({handleHideForm:e,currentDailyLifePost:t}){const n=(0,r.useRef)(null),l=(0,r.useRef)(null),a=(0,r.useRef)(null);g(n);const[o,c]=(0,k.Z)({title:t.title,content:t.content}),[i,u]=function(){const[e,t]=(0,r.useState)(null);return[e,async function(e,n,r,l){t(!1);const a=(0,E.ad)($.Z);try{await(0,E.r7)((0,E.JU)(a,b,e),n),t(!0),r&&r()}catch(e){l&&l(e)}}]}(),[d,s]=w();(0,r.useEffect)((()=>{i&&setTimeout((()=>{alert("포스트가 수정되었습니다."),e()}),500)}),[i,e]);return r.createElement(P.Z,null,r.createElement(A,{focusableElRef:l}),r.createElement(S.Z,null,r.createElement("h4",null,"일상 포스트 수정하기"),r.createElement(L,{ref:n,onClick:e},"닫기")),r.createElement(B.Z,null,r.createElement(D.Z,null,r.createElement(J,{value:o.title,id:"title",handleChange:c}),r.createElement(j,{value:o.content,id:"content",handleChange:c}),r.createElement(U,{inputFileRef:a}),r.createElement(F.Z,{type:"button",ref:l,onClick:async()=>{const e=a.current?.files;e?.length?s(`${Z+Date.now()}`,e[0],(e=>{u(t.id,{...o,downloadURL:e})})):u(t.id,o)}},"수정하기")),null!==d&&r.createElement(N,{value:d}),null!==i&&r.createElement(O,{value:i?100:0})),r.createElement(A,{focusableElRef:n}))}const ce=u.ZP.div`
  background-color: black;
`,ie=u.ZP.img`
  display: block;
  width: 50%;
  min-width: 310px;
  margin: 0 auto;
`;function ue({src:e,alt:t,textContent:n}){return r.createElement("figure",null,r.createElement(ce,null,r.createElement(ie,{src:e,alt:t})),r.createElement("figcaption",null,n))}const de={year:"numeric",month:"numeric",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric",second:"numeric"};function se({dailyLifePost:e,itemRef:t}){const n=(0,r.useRef)(null),[l,a]=(0,r.useState)(!1),{id:o,title:c,content:u,downloadURL:d,requestedAt:s}=e;return r.createElement(M.Z,{ref:t},r.createElement(S.Z,null,r.createElement("h3",null,c),r.createElement(X.Z,{align:"spaceBetweenCenter",width:"100%"},r.createElement("time",null,s.toDate().toLocaleString("ko-KR",de)),r.createElement(X.Z,{gap:"small"},r.createElement(te,{id:o}),r.createElement(ae,{buttonRef:n,handleShowForm:()=>{a(!0)}})))),r.createElement(B.Z,null,d?r.createElement(ue,{src:d,alt:"이미지 파일입니다.",textContent:u}):r.createElement("p",null,u)),l&&r.createElement(i,null,r.createElement(q,null,r.createElement(h,null,r.createElement(oe,{handleHideForm:()=>{a(!1),n.current?.focus()},currentDailyLifePost:e})))))}function me(e){return{dailyLifePosts:[],cursor:null,orderBy:e,isLoading:!0}}function fe(e,t){switch(t.type){case"init":return me(t.orderBy);case"set":return{...e,dailyLifePosts:[...e.dailyLifePosts,...t.posts],cursor:t.lastDoc,isLoading:!1};case"load":return{...e,isLoading:!0};default:throw new Error}}function he(){(0,r.useRef)(null);const{postManager:e,handleOrderByDesc:t,handleOrderByAsc:n,loadDayilyLifePosts:l}=function(){const[e,t]=(0,r.useReducer)(fe,me("desc"));return(0,r.useEffect)((()=>{!async function(){if(e.isLoading){const{orderBy:n,cursor:r}=e,{docs:l}=await(0,E.PL)(v(n,r));t({type:"set",posts:p(l),lastDoc:l[l.length-1]})}}()}),[e]),{postManager:e,handleOrderByDesc:()=>{t({type:"init",orderBy:"desc"})},handleOrderByAsc:()=>{t({type:"init",orderBy:"asc"})},loadDayilyLifePosts:()=>{t({type:"load"})}}}(),[a,o]=(0,r.useState)(null);(0,r.useEffect)((()=>{console.log("hi"),console.log(a)}),[]);const{dailyLifePosts:c,isLoading:i}=e;return r.createElement(r.Fragment,null,r.createElement("button",{onClick:l},"load"),r.createElement("button",{onClick:t},"desc"),r.createElement("button",{onClick:n},"asc"),c.map(((e,t)=>t===c.length-1?r.createElement(se,{key:e.id,dailyLifePost:e,itemRef:o}):r.createElement(se,{key:e.id,dailyLifePost:e}))),r.createElement("div",null,i&&"로딩 중..."))}function Ze(){const e=(0,r.useRef)(null),[t,n]=(0,r.useState)(!1);return r.createElement(o.Z,null,r.createElement(a.Z,null,r.createElement("h2",null,"일상"),r.createElement(K,{onClick:()=>{n(!0)},ref:e},r.createElement(l.Q,{size:20}),"포스트 작성")),r.createElement(he,null),t&&r.createElement(i,null,r.createElement(q,null,r.createElement(h,null,r.createElement(Q,{handleHideForm:()=>{n(!1),e.current?.focus()}})))))}},6401:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294);function l(e){const[t,n]=(0,r.useState)(e);return[t,function({target:e}){n((t=>({...t,[e.id]:e.value})))}]}}}]);