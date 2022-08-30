"use strict";(self.webpackChunkdashboard_crud=self.webpackChunkdashboard_crud||[]).push([[326],{1925:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(8804);const l={center:r.iv`
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
`},9326:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var r=n(7294),l=n(2533),a=n(1051),o=n(694),c=n(3935);function i({children:e}){const t=document.getElementById("modal");return(0,c.createPortal)(e,t)}var u=n(8804),d=n(1925),s=n(3016),m=n(9454);const f=u.iv`
  position: fixed;
  top: 50%;
  left: 50%;

  ${s.Z.horizontal};
  ${d.Z.center};
  box-sizing: border-box;
  width: 100%;
  padding: 0 ${m.Z.large};

  transform: translate(-50%, -50%);
`,Z=u.ZP.div`
  ${f};
`,h="dailyLifePosts";function $(e){(0,r.useEffect)((()=>{e.current?.focus()}),[])}var g=n(1591);const E="dailyLifePosts";var b=n(7143);var v=n(5308);function p(){const[e,t]=(0,r.useState)(null);return[e,function(e,n,r,l,a){const o=(0,v.cF)(b.Z),c=(0,v.iH)(o,e),i=(0,v.B0)(c,n);i.on("state_changed",(e=>{const n=e.bytesTransferred/e.totalBytes*100;l&&l(e),t(n)}),(e=>{a&&a(e)}),(async()=>{const e=await(0,v.Jt)(i.snapshot.ref);r&&r(e)}))}]}var x=n(6401),w=n(1652),k=n(1737);const y=u.iv`
  ${k.N};
  padding: ${m.Z.smaller} ${m.Z.medium};
  border-radius: ${m.Z.smaller};
  border: ${m.Z.smallest} solid
    ${({theme:e})=>e.color.borderDefault};
`,R=u.ZP.button`
  ${y};
`;var P=n(1020),C=n(894),F=n(4957),S=n(2162);const z=u.ZP.button`
  position: absolute;
  width: 0;
  height: 0;
`;function L({focusableElRef:e}){return r.createElement(z,{type:"button",onFocus:()=>{e.current?.focus()}})}var A=n(9935);function U({inputFileRef:e}){return r.createElement(A.Z,null,r.createElement("label",{htmlFor:"file"},"이미지(선택)"),r.createElement("input",{placeholder:"추가할 이미지를 선택해 주세요.",id:"file",type:"file",ref:e}))}function D({value:e,id:t,handleChange:n}){return r.createElement(A.Z,null,r.createElement("label",{htmlFor:t},"내용"),r.createElement("textarea",{placeholder:"내용을 입력해 주세요.",value:e,id:t,onChange:n}))}function q({value:e,id:t,handleChange:n}){return r.createElement(A.Z,null,r.createElement("label",{htmlFor:t},"제목"),r.createElement("input",{placeholder:"제목을 입력해 주세요.",value:e,id:t,onChange:n}))}function B({value:e}){return r.createElement(r.Fragment,null,r.createElement("strong",null,function(e){return 0===e?"이미지 업로드 대기 중...":0<e&&e<100?"이미지 업로드 중...":100==e?"이미지 업로드 완료!":void 0}(e)),r.createElement("progress",{max:100,value:e},e,"%"))}function H({value:e}){return r.createElement(r.Fragment,null,r.createElement("strong",null,function(e){return 0===e?"포스트 업로드 중...":100===e?"포스트 업로드 완료!":void 0}(e)),r.createElement("progress",{max:100,value:e},e,"%"))}function j({handleHideForm:e}){const t=(0,r.useRef)(null),n=(0,r.useRef)(null),l=(0,r.useRef)(null);$(t);const[a,o]=(0,x.Z)({title:"",content:""}),[c,i]=function(){const[e,t]=(0,r.useState)(null),n=(0,g.ad)(b.Z);return[e,async function({title:e,content:r,downloadURL:l},a,o){t((e=>!!e));try{const o=await(0,g.ET)((0,g.hJ)(n,E),{title:e,content:r,downloadURL:l||"",requestedAt:g.EK.now()});a&&a(o),t((e=>!e))}catch(e){o&&o(e)}}]}(),[u,d]=p();(0,r.useEffect)((()=>{c&&setTimeout(e,500)}),[c,e]);return r.createElement(w.Z,null,r.createElement(L,{focusableElRef:n}),r.createElement(S.Z,null,r.createElement("h4",null,"일상 포스트 작성하기"),r.createElement(R,{ref:t,onClick:e},"닫기")),r.createElement(C.Z,null,r.createElement(F.Z,null,r.createElement(q,{value:a.title,id:"title",handleChange:o}),r.createElement(D,{value:a.content,id:"content",handleChange:o}),r.createElement(U,{inputFileRef:l}),r.createElement(P.Z,{type:"button",ref:n,onClick:async()=>{const e=l.current?.files;e?.length?d(`${h+Date.now()}`,e[0],(e=>{i({...a,downloadURL:e})})):i(a)}},"작성하기")),null!==u&&r.createElement(B,{value:u}),null!==c&&r.createElement(H,{value:c?100:0})),r.createElement(L,{focusableElRef:t}))}const J=u.iv`
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
`,N=u.ZP.div`
  ${J};
`;var Q=n(5780),T=n(6235),I=n(6415),_=n(8504);const K=u.iv`
  background-color: ${_.Q6.default};
  color: ${_.ix.light};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${_.Q6.light};
    }
  }

  &:active {
    background-color: ${_.Q6.dark};
  }
`,O=(u.ZP.button`
  ${K};
`,u.iv`
  ${s.Z.horizontal};
  ${d.Z.center};
  gap: ${m.Z.smaller};
  padding: ${m.Z.smaller} ${m.Z.smaller};
  border-radius: ${m.Z.smaller};

  word-break: keep-all;
`);u.ZP.button`
  ${O};
`;const X=u.ZP.button`
  ${K};
  ${O};
`;function G({id:e}){const[t,n]=function(){const[e,t]=(0,r.useState)(null);return[e,async function(e,n,r){t(!1);const l=(0,g.ad)(b.Z);try{await(0,g.oe)((0,g.JU)(l,E,e)),t(!0),n&&n()}catch(e){r&&r(e)}}]}();return r.createElement(X,{onClick:()=>{confirm("포스트를 삭제하시겠습니까")&&n(e,(()=>alert("포스트가 삭제되었습니다.")))}},r.createElement(I.H,{size:16}),"삭제")}var M=n(6196);const V=u.iv`
  background-color: ${_.ek.default};
  color: ${_.ix.light};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${_.ek.light};
    }
  }

  &:active {
    background-color: ${_.ek.dark};
  }
`,W=(u.ZP.button`
  ${V};
`,u.ZP.button`
  ${V};
  ${O};
`);function Y({buttonRef:e,handleShowForm:t}){return r.createElement(W,{ref:e,onClick:()=>{confirm("포스트를 수정하시겠습니까?")&&t()}},r.createElement(M.k,{size:16}),"수정")}function ee({handleHideForm:e,currentDailyLifePost:t}){const n=(0,r.useRef)(null),l=(0,r.useRef)(null),a=(0,r.useRef)(null);$(n);const[o,c]=(0,x.Z)({title:t.title,content:t.content}),[i,u]=function(){const[e,t]=(0,r.useState)(null);return[e,async function(e,n,r,l){t(!1);const a=(0,g.ad)(b.Z);try{await(0,g.r7)((0,g.JU)(a,E,e),n),t(!0),r&&r()}catch(e){l&&l(e)}}]}(),[d,s]=p();(0,r.useEffect)((()=>{i&&setTimeout((()=>{alert("포스트가 수정되었습니다."),e()}),500)}),[i,e]);return r.createElement(w.Z,null,r.createElement(L,{focusableElRef:l}),r.createElement(S.Z,null,r.createElement("h4",null,"일상 포스트 수정하기"),r.createElement(R,{ref:n,onClick:e},"닫기")),r.createElement(C.Z,null,r.createElement(F.Z,null,r.createElement(q,{value:o.title,id:"title",handleChange:c}),r.createElement(D,{value:o.content,id:"content",handleChange:c}),r.createElement(U,{inputFileRef:a}),r.createElement(P.Z,{type:"button",ref:l,onClick:async()=>{const e=a.current?.files;e?.length?s(`${h+Date.now()}`,e[0],(e=>{u(t.id,{...o,downloadURL:e})})):u(t.id,o)}},"수정하기")),null!==d&&r.createElement(B,{value:d}),null!==i&&r.createElement(H,{value:i?100:0})),r.createElement(L,{focusableElRef:n}))}const te=u.ZP.div`
  background-color: black;
`,ne=u.ZP.img`
  display: block;
  width: 50%;
  min-width: 310px;
  margin: 0 auto;
`;function re({src:e,alt:t,textContent:n}){return r.createElement("figure",null,r.createElement(te,null,r.createElement(ne,{src:e,alt:t})),r.createElement("figcaption",null,n))}const le={year:"numeric",month:"numeric",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric",second:"numeric"};function ae(e){const t=(0,r.useRef)(null),[n,l]=(0,r.useState)(!1),{id:a,title:o,content:c,downloadURL:u,requestedAt:d}=e;return r.createElement(Q.Z,null,r.createElement(S.Z,null,r.createElement("h3",null,o),r.createElement(T.Z,{align:"spaceBetweenCenter",width:"100%"},r.createElement("time",null,d.toDate().toLocaleString("ko-KR",le)),r.createElement(T.Z,{gap:"small"},r.createElement(G,{id:a}),r.createElement(Y,{buttonRef:t,handleShowForm:()=>{l(!0)}})))),r.createElement(C.Z,null,u?r.createElement(re,{src:u,alt:"이미지 파일입니다.",textContent:c}):r.createElement("p",null,c)),n&&r.createElement(i,null,r.createElement(N,null,r.createElement(Z,null,r.createElement(ee,{handleHideForm:()=>{l(!1),t.current?.focus()},currentDailyLifePost:e})))))}var oe=n(440);const ce=u.iv`
  ${oe.E};
  ${s.Z.horizontal};
  ${d.Z.center};
  gap: ${m.Z.smaller};
  padding: ${m.Z.small} ${m.Z.small};
  border-radius: ${m.Z.smaller};
`,ie=u.ZP.button`
  ${ce};
`;function ue(){const e=(0,r.useRef)(null),[t,n]=(0,r.useState)(!1),c=function(){const[e,t]=(0,r.useState)([]),{current:n}=(0,r.useRef)((0,g.ad)(b.Z));return(0,r.useEffect)((()=>(console.log("onSnaphot enroll"),(0,g.cf)((0,g.IO)((0,g.hJ)(n,E),(0,g.Xo)("requestedAt","desc"),(0,g.b9)(5)),(e=>{console.log("onSnapshot fire");const n=function(e){const t=[];return e.forEach((e=>{const{title:n,content:r,downloadURL:l,requestedAt:a}=e.data();t.push({id:e.id,title:n,content:r,downloadURL:l,requestedAt:a})})),t}(e);t(n)})))),[]),e}();(0,r.useEffect)((()=>{new IntersectionObserver(((e,t)=>{}))}),[]);return r.createElement(o.Z,null,r.createElement(a.Z,null,r.createElement("h2",null,"일상"),r.createElement(ie,{onClick:()=>{n(!0)},ref:e},r.createElement(l.Q,{size:20}),"포스트 작성")),c.map((({title:e,content:t,id:n,requestedAt:l,downloadURL:a})=>r.createElement(ae,{key:n,id:n,title:e,content:t,downloadURL:a,requestedAt:l}))),t&&r.createElement(i,null,r.createElement(N,null,r.createElement(Z,null,r.createElement(j,{handleHideForm:()=>{n(!1),e.current?.focus()}})))))}},6401:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294);function l(e){const[t,n]=(0,r.useState)(e);return[t,function({target:e}){n((t=>({...t,[e.id]:e.value})))}]}}}]);