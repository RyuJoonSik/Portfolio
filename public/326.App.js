"use strict";(self.webpackChunkdashboard_crud=self.webpackChunkdashboard_crud||[]).push([[326],{1925:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(8804);const r={center:l.iv`
    justify-content: center;
    align-items: center;
  `,centerStart:l.iv`
    justify-content: center;
    align-items: flex-start;
  `,startCenter:l.iv`
    justify-content: flex-start;
    align-items: center;
  `,startStart:l.iv`
    justify-content: flex-start;
    align-items: flex-start;
  `,endCenter:l.iv`
    justify-content: flex-end;
    align-items: center;
  `,spaceBetweenCenter:l.iv`
    justify-content: space-between;
    align-items: center;
  `}},1824:(e,t,n)=>{n.d(t,{Z:()=>l});const l={tablet:"@media screen and (max-width: 768px)",mobile:"@media screen and (max-width: 428px)"}},5780:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(8804),r=n(9454);const a=l.iv`
  width: 100%;
  border-radius: ${r.Z.small};
  background-color: ${({theme:e})=>e.color.backgroundAccent};
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.12),
    0px 2px 2px -1px rgba(0, 0, 0, 0.05);
`,o=l.ZP.article`
  ${a};
`},1652:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(8804),r=n(9454);const a=l.iv`
  width: 100%;
  max-width: 402px;
  border-radius: ${r.Z.small};
  background-color: ${({theme:e})=>e.color.backgroundAccent};
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.12),
    0px 2px 2px -1px rgba(0, 0, 0, 0.05);
`,o=l.ZP.article`
  ${a};
`},440:(e,t,n)=>{n.d(t,{E:()=>a});var l=n(8804),r=n(8504);const a=l.iv`
  background-color: ${r.iN.default};
  color: ${r.ix.light};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${r.iN.light};
    }
  }

  &:active {
    background-color: ${r.iN.dark};
  }
`;l.ZP.button`
  ${a};
`},1020:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8804),r=n(9454),a=n(329),o=n(440);const c=l.iv`
  ${o.E}
  width: 100%;
  padding: ${r.Z.small} 0;
  border-radius: ${r.Z.smaller};

  ${a.Z.large};
  text-align: center;
`,i=l.ZP.button`
  ${c};
`},1737:(e,t,n)=>{n.d(t,{N:()=>r});var l=n(8804);const r=l.iv`
  background-color: ${({theme:e})=>e.color.backgroundAccent};
  color: ${({theme:e})=>e.color.textAccent};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({theme:e})=>e.color.backgroundHover};
    }
  }
`;l.ZP.button`
  ${r};
`},894:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8804),r=n(9454),a=n(1824),o=n(3016);const c=l.iv`
  ${o.Z.vertical};
  gap: ${r.Z.small};
  padding: ${r.Z.larger};

  color: ${({theme:e})=>e.color.textDefault};

  ${a.Z.mobile} {
    padding: ${r.Z.medium};
  }
`,i=l.ZP.div`
  ${c};
`},6235:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8804),r=n(1925),a=n(3016),o=n(329),c=n(9454);const i=l.ZP.div`
  ${({direction:e,size:t,align:n,gap:i,width:u})=>l.iv`
    ${e?a.Z[e]:a.Z.horizontal};
    ${n?r.Z[n]:r.Z.startStart};
    gap: ${i?c.Z[i]:"initial"};
    ${t?o.Z[t]:o.Z.medium};
    width: ${u||"auto"};
  `}
`},9935:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8804),r=n(3016),a=n(6758),o=n(9454);const c=l.ZP.div`
  ${r.Z.vertical};
  gap: ${o.Z.smaller};

  &:focus-within {
    ${a.Z.medium};
    color: ${({theme:e})=>e.color.borderFocus};
  }
`},4957:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(7294);function r({children:e}){return l.createElement("form",{onSubmit:e=>{e.preventDefault()}},e)}},2162:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(8804),r=n(1925),a=n(3016),o=n(1824),c=n(9454);const i=l.iv`
  ${a.Z.horizontal};
  ${r.Z.spaceBetweenCenter};
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
`,u=l.ZP.header`
  ${i};
`},1051:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8804),r=n(3016),a=n(1925),o=n(9454),c=n(1824);const i=l.ZP.header`
  ${r.Z.horizontal};
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
`},694:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8804),r=n(1925),a=n(3016),o=n(1824),c=n(9454);const i=l.ZP.main`
  ${a.Z.vertical};
  ${r.Z.startCenter};
  gap: ${c.Z.larger};
  width: 100%;
  max-width: 1020px;

  ${o.Z.mobile} {
    gap: ${c.Z.medium};
  }
`},9326:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var l=n(7294),r=n(2533),a=n(1051),o=n(694),c=n(3935);function i({children:e}){const t=document.getElementById("modal");return(0,c.createPortal)(e,t)}var u=n(8804),d=n(1925),s=n(3016),m=n(9454);const f=u.iv`
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
`,h="dailyLifePosts";function $(e){(0,l.useEffect)((()=>{e.current?.focus()}),[])}var g=n(1591);const E="dailyLifePosts";var b=n(7143);var v=n(5308);function p(){const[e,t]=(0,l.useState)(null);return[e,function(e,n,l,r,a){const o=(0,v.cF)(b.Z),c=(0,v.iH)(o,e),i=(0,v.B0)(c,n);i.on("state_changed",(e=>{const n=e.bytesTransferred/e.totalBytes*100;r&&r(e),t(n)}),(e=>{a&&a(e)}),(async()=>{const e=await(0,v.Jt)(i.snapshot.ref);l&&l(e)}))}]}var x=n(6401),w=n(1652),k=n(1737);const y=u.iv`
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
`;function L({focusableElRef:e}){return l.createElement(z,{type:"button",onFocus:()=>{e.current?.focus()}})}var A=n(9935);function U({inputFileRef:e}){return l.createElement(A.Z,null,l.createElement("label",{htmlFor:"file"},"이미지(선택)"),l.createElement("input",{placeholder:"추가할 이미지를 선택해 주세요.",id:"file",type:"file",ref:e}))}function D({value:e,id:t,handleChange:n}){return l.createElement(A.Z,null,l.createElement("label",{htmlFor:t},"내용"),l.createElement("textarea",{placeholder:"내용을 입력해 주세요.",value:e,id:t,onChange:n}))}function q({value:e,id:t,handleChange:n}){return l.createElement(A.Z,null,l.createElement("label",{htmlFor:t},"제목"),l.createElement("input",{placeholder:"제목을 입력해 주세요.",value:e,id:t,onChange:n}))}function B({value:e}){return l.createElement(l.Fragment,null,l.createElement("strong",null,function(e){return 0===e?"이미지 업로드 대기 중...":0<e&&e<100?"이미지 업로드 중...":100==e?"이미지 업로드 완료!":void 0}(e)),l.createElement("progress",{max:100,value:e},e,"%"))}function H({value:e}){return l.createElement(l.Fragment,null,l.createElement("strong",null,function(e){return 0===e?"포스트 업로드 중...":100===e?"포스트 업로드 완료!":void 0}(e)),l.createElement("progress",{max:100,value:e},e,"%"))}function j({handleHideForm:e}){const t=(0,l.useRef)(null),n=(0,l.useRef)(null),r=(0,l.useRef)(null);$(t);const[a,o]=(0,x.Z)({title:"",content:""}),[c,i]=function(){const[e,t]=(0,l.useState)(null),n=(0,g.ad)(b.Z);return[e,async function({title:e,content:l,downloadURL:r},a,o){t((e=>!!e));try{const o=await(0,g.ET)((0,g.hJ)(n,E),{title:e,content:l,downloadURL:r||"",requestedAt:g.EK.now()});a&&a(o),t((e=>!e))}catch(e){o&&o(e)}}]}(),[u,d]=p();(0,l.useEffect)((()=>{c&&setTimeout(e,500)}),[c,e]);return l.createElement(w.Z,null,l.createElement(L,{focusableElRef:n}),l.createElement(S.Z,null,l.createElement("h4",null,"일상 포스트 작성하기"),l.createElement(R,{ref:t,onClick:e},"닫기")),l.createElement(C.Z,null,l.createElement(F.Z,null,l.createElement(q,{value:a.title,id:"title",handleChange:o}),l.createElement(D,{value:a.content,id:"content",handleChange:o}),l.createElement(U,{inputFileRef:r}),l.createElement(P.Z,{type:"button",ref:n,onClick:async()=>{const e=r.current?.files;e?.length?d(`${h+Date.now()}`,e[0],(e=>{i({...a,downloadURL:e})})):i(a)}},"작성하기")),null!==u&&l.createElement(B,{value:u}),null!==c&&l.createElement(H,{value:c?100:0})),l.createElement(L,{focusableElRef:t}))}const J=u.iv`
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
`,N=u.ZP.div`
  ${J};
`;var Q=n(5780),T=n(6235),_=n(6415),I=n(8504);const K=u.iv`
  background-color: ${I.Q6.default};
  color: ${I.ix.light};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${I.Q6.light};
    }
  }

  &:active {
    background-color: ${I.Q6.dark};
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
`;function G({id:e}){const[t,n]=function(){const[e,t]=(0,l.useState)(null);return[e,async function(e,n,l){t(!1);const r=(0,g.ad)(b.Z);try{await(0,g.oe)((0,g.JU)(r,E,e)),t(!0),n&&n()}catch(e){l&&l(e)}}]}();return l.createElement(X,{onClick:()=>{confirm("포스트를 삭제하시겠습니까")&&n(e,(()=>alert("포스트가 삭제되었습니다.")))}},l.createElement(_.H,{size:16}),"삭제")}var M=n(6196);const V=u.iv`
  background-color: ${I.ek.default};
  color: ${I.ix.light};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${I.ek.light};
    }
  }

  &:active {
    background-color: ${I.ek.dark};
  }
`,W=(u.ZP.button`
  ${V};
`,u.ZP.button`
  ${V};
  ${O};
`);function Y({buttonRef:e,handleShowForm:t}){return l.createElement(W,{ref:e,onClick:()=>{confirm("포스트를 수정하시겠습니까?")&&t()}},l.createElement(M.k,{size:16}),"수정")}function ee({handleHideForm:e,currentDailyLifePost:t}){const n=(0,l.useRef)(null),r=(0,l.useRef)(null),a=(0,l.useRef)(null);$(n);const[o,c]=(0,x.Z)({title:t.title,content:t.content}),[i,u]=function(){const[e,t]=(0,l.useState)(null);return[e,async function(e,n,l,r){t(!1);const a=(0,g.ad)(b.Z);try{await(0,g.r7)((0,g.JU)(a,E,e),n),t(!0),l&&l()}catch(e){r&&r(e)}}]}(),[d,s]=p();(0,l.useEffect)((()=>{i&&setTimeout((()=>{alert("포스트가 수정되었습니다."),e()}),500)}),[i,e]);return l.createElement(w.Z,null,l.createElement(L,{focusableElRef:r}),l.createElement(S.Z,null,l.createElement("h4",null,"일상 포스트 수정하기"),l.createElement(R,{ref:n,onClick:e},"닫기")),l.createElement(C.Z,null,l.createElement(F.Z,null,l.createElement(q,{value:o.title,id:"title",handleChange:c}),l.createElement(D,{value:o.content,id:"content",handleChange:c}),l.createElement(U,{inputFileRef:a}),l.createElement(P.Z,{type:"button",ref:r,onClick:async()=>{const e=a.current?.files;e?.length?s(`${h+Date.now()}`,e[0],(e=>{u(t.id,{...o,downloadURL:e})})):u(t.id,o)}},"수정하기")),null!==d&&l.createElement(B,{value:d}),null!==i&&l.createElement(H,{value:i?100:0})),l.createElement(L,{focusableElRef:n}))}const te=u.ZP.div`
  background-color: black;
`,ne=u.ZP.img`
  display: block;
  width: 50%;
  min-width: 310px;
  margin: 0 auto;
`;function le({src:e,alt:t,textContent:n}){return l.createElement("figure",null,l.createElement(te,null,l.createElement(ne,{src:e,alt:t})),l.createElement("figcaption",null,n))}const re={year:"numeric",month:"numeric",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric",second:"numeric"};function ae(e){const t=(0,l.useRef)(null),[n,r]=(0,l.useState)(!1),{id:a,title:o,content:c,downloadURL:u,requestedAt:d}=e;return l.createElement(Q.Z,null,l.createElement(S.Z,null,l.createElement("h3",null,o),l.createElement(T.Z,{align:"spaceBetweenCenter",width:"100%"},l.createElement("time",null,d.toDate().toLocaleString("ko-KR",re)),l.createElement(T.Z,{gap:"small"},l.createElement(G,{id:a}),l.createElement(Y,{buttonRef:t,handleShowForm:()=>{r(!0)}})))),l.createElement(C.Z,null,u?l.createElement(le,{src:u,alt:"이미지 파일입니다.",textContent:c}):l.createElement("p",null,c)),n&&l.createElement(i,null,l.createElement(N,null,l.createElement(Z,null,l.createElement(ee,{handleHideForm:()=>{r(!1),t.current?.focus()},currentDailyLifePost:e})))))}var oe=n(440);const ce=u.iv`
  ${oe.E};
  ${s.Z.horizontal};
  ${d.Z.center};
  gap: ${m.Z.smaller};
  padding: ${m.Z.small} ${m.Z.small};
  border-radius: ${m.Z.smaller};
`,ie=u.ZP.button`
  ${ce};
`;function ue(){const e=(0,l.useRef)(null),[t,n]=(0,l.useState)(!1),c=function(){const[e,t]=(0,l.useState)([]),{current:n}=(0,l.useRef)((0,g.ad)(b.Z));return(0,l.useEffect)((()=>(console.log("onSnaphot enroll"),(0,g.cf)((0,g.IO)((0,g.hJ)(n,E),(0,g.Xo)("requestedAt","desc"),(0,g.b9)(5)),(e=>{console.log("onSnapshot fire");const n=function(e){const t=[];return e.forEach((e=>{const{title:n,content:l,downloadURL:r,requestedAt:a}=e.data();t.push({id:e.id,title:n,content:l,downloadURL:r,requestedAt:a})})),t}(e);t(n)})))),[]),e}();return l.createElement(o.Z,null,l.createElement(a.Z,null,l.createElement("h2",null,"일상"),l.createElement(ie,{onClick:()=>{n(!0)},ref:e},l.createElement(r.Q,{size:20}),"포스트 작성")),c.map((({title:e,content:t,id:n,requestedAt:r,downloadURL:a})=>l.createElement(ae,{key:n,id:n,title:e,content:t,downloadURL:a,requestedAt:r}))),t&&l.createElement(i,null,l.createElement(N,null,l.createElement(Z,null,l.createElement(j,{handleHideForm:()=>{n(!1),e.current?.focus()}})))))}},6401:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(7294);function r(e){const[t,n]=(0,l.useState)(e);return[t,function({target:e}){n((t=>({...t,[e.id]:e.value})))}]}}}]);