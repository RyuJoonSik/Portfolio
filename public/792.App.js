"use strict";(self.webpackChunkdashboard_crud=self.webpackChunkdashboard_crud||[]).push([[792],{1925:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(8804);const r={center:l.iv`
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
  `}},6355:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(8804),r=n(8504);const a={red:l.iv`
    background-color: ${r.Q6.default};
    color: ${r.ix.light};
  `,green:l.iv`
    background-color: ${r.ek.default};
    color: ${r.ix.light};
  `,blue:l.iv`
    background-color: ${r.iN.default};
    color: ${r.ix.light};
  `,white:l.iv`
    background-color: ${({theme:e})=>e.color.backgroundAccent};
    color: ${({theme:e})=>e.color.textAccent};
  `}},1824:(e,t,n)=>{n.d(t,{Z:()=>l});const l={tablet:"@media screen and (max-width: 768px)",mobile:"@media screen and (max-width: 428px)"}},5780:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(8804),r=n(9454);const a=l.iv`
  width: 100%;
  max-width: ${e=>"small"===e.size?"402px":"initial"};
  border-radius: ${r.Z.small};
  background-color: ${({theme:e})=>e.color.backgroundAccent};
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.12),
    0px 2px 2px -1px rgba(0, 0, 0, 0.05);

  color: ${({theme:e})=>e.color.textDefault};
`,o=l.ZP.article`
  ${a}
`},166:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8804),r=n(9454),a=n(329),o=n(6355);const c=l.iv`
  ${o.Z.blue}
  width: 100%;
  padding: ${r.Z.small} 0;
  border-radius: ${r.Z.smaller};

  ${a.Z.large};
  text-align: center;
`,i=l.ZP.button`
  ${c};
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
  ${({direction:e,size:t,align:n,gap:i,width:s})=>l.iv`
    ${e?a.Z[e]:a.Z.horizontal};
    ${n?r.Z[n]:r.Z.startStart};
    gap: ${i?c.Z[i]:"initial"};
    ${t?o.Z[t]:o.Z.medium};
    width: ${s||"auto"};
  `}
`},9935:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8804),r=n(3016),a=n(6758),o=n(9454);const c=l.ZP.div`
  ${r.Z.vertical};
  gap: ${o.Z.smaller};

  &:focus-within {
    ${a.Z.medium};
    color: ${({theme:e})=>e.color.borderFocus};
  }
`},4957:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(7294);function r({children:e}){return l.createElement("form",{onSubmit:e=>{e.preventDefault()}},e)}},2162:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(8804),r=n(1925),a=n(3016),o=n(1824),c=n(9454);const i=l.iv`
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
`,s=l.ZP.header`
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
`},5792:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var l=n(7294),r=n(2533),a=n(1051),o=n(694),c=n(3935);function i({children:e}){const t=document.getElementById("modal");return(0,c.createPortal)(e,t)}var s=n(8804),u=n(1925),d=n(3016),m=n(9454);const f=s.iv`
  position: fixed;
  top: 50%;
  left: 50%;

  ${d.Z.horizontal};
  ${u.Z.center};
  box-sizing: border-box;
  width: 100%;
  padding: 0 ${m.Z.large};

  transform: translate(-50%, -50%);
`,Z=s.ZP.div`
  ${f};
`,h="dailyLifePosts";function E(e){(0,l.useEffect)((()=>{e.current?.focus()}),[])}var g=n(1591),$=n(7143);const b="dailyLifePosts";function p(e){return e.map((e=>({...e.data(),id:e.id})))}function v(e,t,n=5){return function(e,...t){const n=t.filter((e=>e));return(0,g.IO)(e,...n)}((0,g.hJ)(y,b),(0,g.Xo)("requestedAt",e),t?(0,g.TQ)(t):null,(0,g.b9)(n))}const y=(0,g.ad)($.Z);var w=n(5308);function x(){const[e,t]=(0,l.useState)(null);return[e,function(e,n,l,r,a){const o=(0,w.cF)($.Z),c=(0,w.iH)(o,e),i=(0,w.B0)(c,n);i.on("state_changed",(e=>{const n=e.bytesTransferred/e.totalBytes*100;r&&r(e),t(n)}),(e=>{a&&a(e)}),(async()=>{const e=await(0,w.Jt)(i.snapshot.ref);l&&l(e)}))}]}var k=n(6401),P=n(5780),C=n(6355);const L=s.iv`
  ${C.Z.white};
  padding: ${m.Z.smaller} ${m.Z.medium};
  border-radius: ${m.Z.smaller};
  border: ${m.Z.smallest} solid
    ${({theme:e})=>e.color.borderDefault};
`,R=s.ZP.button`
  ${L};
`;var S=n(166),B=n(894),z=n(4957),D=n(2162);const F=s.ZP.button`
  position: absolute;
  width: 0;
  height: 0;
`;function O({focusableElRef:e}){return l.createElement(F,{type:"button",onFocus:()=>{e.current?.focus()}})}var A=n(9935);function H({inputFileRef:e}){return l.createElement(A.Z,null,l.createElement("label",{htmlFor:"file"},"이미지(선택)"),l.createElement("input",{placeholder:"추가할 이미지를 선택해 주세요.",id:"file",type:"file",ref:e}))}function T({value:e,id:t,handleChange:n}){return l.createElement(A.Z,null,l.createElement("label",{htmlFor:t},"내용"),l.createElement("textarea",{placeholder:"내용을 입력해 주세요.",value:e,id:t,onChange:n}))}function I({value:e,id:t,handleChange:n}){return l.createElement(A.Z,null,l.createElement("label",{htmlFor:t},"제목"),l.createElement("input",{placeholder:"제목을 입력해 주세요.",value:e,id:t,onChange:n}))}function M({value:e}){return l.createElement(l.Fragment,null,l.createElement("strong",null,function(e){return 0===e?"이미지 업로드 대기 중...":0<e&&e<100?"이미지 업로드 중...":100==e?"이미지 업로드 완료!":void 0}(e)),l.createElement("progress",{max:100,value:e},e,"%"))}function U({value:e}){return l.createElement(l.Fragment,null,l.createElement("strong",null,function(e){return 0===e?"포스트 업로드 중...":100===e?"포스트 업로드 완료!":void 0}(e)),l.createElement("progress",{max:100,value:e},e,"%"))}function j({handleHideForm:e}){const t=(0,l.useRef)(null),n=(0,l.useRef)(null),r=(0,l.useRef)(null);E(t);const[a,o]=(0,k.Z)({title:"",content:""}),[c,i]=function(){const[e,t]=(0,l.useState)(null),n=(0,g.ad)($.Z);return[e,async function({title:e,content:l,downloadURL:r},a,o){t((e=>!!e));try{const o=await(0,g.ET)((0,g.hJ)(n,b),{title:e,content:l,downloadURL:r||"",requestedAt:g.EK.now()});a&&a(o),t((e=>!e))}catch(e){o&&o(e)}}]}(),[s,u]=x();(0,l.useEffect)((()=>{c&&setTimeout(e,500)}),[c,e]);return l.createElement(P.Z,{size:"small"},l.createElement(O,{focusableElRef:n}),l.createElement(D.Z,null,l.createElement("h4",null,"일상 포스트 작성하기"),l.createElement(R,{ref:t,onClick:e},"닫기")),l.createElement(B.Z,null,l.createElement(z.Z,null,l.createElement(I,{value:a.title,id:"title",handleChange:o}),l.createElement(T,{value:a.content,id:"content",handleChange:o}),l.createElement(H,{inputFileRef:r}),l.createElement(S.Z,{type:"button",ref:n,onClick:async()=>{const e=r.current?.files;e?.length?u(`${h+Date.now()}`,e[0],(e=>{i({...a,downloadURL:e})})):i(a)}},"작성하기")),null!==s&&l.createElement(M,{value:s}),null!==c&&l.createElement(U,{value:c?100:0})),l.createElement(O,{focusableElRef:t}))}const J=s.iv`
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
`,q=s.ZP.div`
  ${J};
`,Q=s.iv`
  ${C.Z.blue};
  ${d.Z.horizontal};
  ${u.Z.center};
  gap: ${m.Z.smaller};
  padding: ${m.Z.small} ${m.Z.small};
  border-radius: ${m.Z.smaller};
`,_=s.ZP.button`
  ${Q};
`;var K=n(6235),N=n(6415);const X=s.iv`
  ${d.Z.horizontal};
  ${u.Z.center};
  gap: ${m.Z.smaller};
  padding: ${m.Z.smaller} ${m.Z.smaller};
  border-radius: ${m.Z.smaller};

  word-break: keep-all;
`;s.ZP.button`
  ${X};
`;const G=s.ZP.button`
  ${C.Z.red};
  ${X};
`;function V({id:e}){const[t,n]=function(){const[e,t]=(0,l.useState)(null);return[e,async function(e,n,l){t(!1);const r=(0,g.ad)($.Z);try{await(0,g.oe)((0,g.JU)(r,b,e)),t(!0),n&&n()}catch(e){l&&l(e)}}]}();return l.createElement(G,{onClick:()=>{confirm("포스트를 삭제하시겠습니까")&&n(e,(()=>alert("포스트가 삭제되었습니다.")))}},l.createElement(N.H,{size:16}),"삭제")}var W=n(6196);const Y=s.ZP.button`
  ${C.Z.green};
  ${X};
`;function ee({buttonRef:e,handleShowForm:t}){return l.createElement(Y,{ref:e,onClick:()=>{confirm("포스트를 수정하시겠습니까?")&&t()}},l.createElement(W.k,{size:16}),"수정")}function te({handleHideForm:e,currentDailyLifePost:t}){const n=(0,l.useRef)(null),r=(0,l.useRef)(null),a=(0,l.useRef)(null);E(n);const[o,c]=(0,k.Z)({title:t.title,content:t.content}),[i,s]=function(){const[e,t]=(0,l.useState)(null);return[e,async function(e,n,l,r){t(!1);const a=(0,g.ad)($.Z);try{await(0,g.r7)((0,g.JU)(a,b,e),n),t(!0),l&&l()}catch(e){r&&r(e)}}]}(),[u,d]=x();(0,l.useEffect)((()=>{i&&setTimeout((()=>{alert("포스트가 수정되었습니다."),e()}),500)}),[i,e]);return l.createElement(P.Z,{size:"small"},l.createElement(O,{focusableElRef:r}),l.createElement(D.Z,null,l.createElement("h4",null,"일상 포스트 수정하기"),l.createElement(R,{ref:n,onClick:e},"닫기")),l.createElement(B.Z,null,l.createElement(z.Z,null,l.createElement(I,{value:o.title,id:"title",handleChange:c}),l.createElement(T,{value:o.content,id:"content",handleChange:c}),l.createElement(H,{inputFileRef:a}),l.createElement(S.Z,{type:"button",ref:r,onClick:async()=>{const e=a.current?.files;e?.length?d(`${h+Date.now()}`,e[0],(e=>{s(t.id,{...o,downloadURL:e})})):s(t.id,o)}},"수정하기")),null!==u&&l.createElement(M,{value:u}),null!==i&&l.createElement(U,{value:i?100:0})),l.createElement(O,{focusableElRef:n}))}const ne=s.ZP.div`
  background-color: black;
`,le=s.ZP.img`
  display: block;
  width: 50%;
  min-width: 310px;
  margin: 0 auto;
`;function re({src:e,alt:t,textContent:n}){return l.createElement("figure",null,l.createElement(ne,null,l.createElement(le,{src:e,alt:t})),l.createElement("figcaption",null,n))}const ae={year:"numeric",month:"numeric",day:"numeric",weekday:"long",hour:"numeric",minute:"numeric",second:"numeric"};function oe({dailyLifePost:e,setLastItem:t}){const n=(0,l.useRef)(null),[r,a]=(0,l.useState)(!1),{id:o,title:c,content:s,downloadURL:u,requestedAt:d}=e;return l.createElement(P.Z,{ref:t},l.createElement(D.Z,null,l.createElement("h3",null,c),l.createElement(K.Z,{align:"spaceBetweenCenter",width:"100%"},l.createElement("time",null,d.toDate().toLocaleString("ko-KR",ae)),l.createElement(K.Z,{gap:"small"},l.createElement(V,{id:o}),l.createElement(ee,{buttonRef:n,handleShowForm:()=>{a(!0)}})))),l.createElement(B.Z,null,u?l.createElement(re,{src:u,alt:"이미지 파일입니다.",textContent:s}):l.createElement("p",null,s)),r&&l.createElement(i,null,l.createElement(q,null,l.createElement(Z,null,l.createElement(te,{handleHideForm:()=>{a(!1),n.current?.focus()},currentDailyLifePost:e})))))}function ce(e,t){switch(t.type){case"init":return{dailyLifePosts:[],cursor:null,orderBy:t.orderBy,isLoading:!0,hasMore:!0};case"set":return{...e,dailyLifePosts:[...e.dailyLifePosts,...t.posts],cursor:t.lastDoc,isLoading:!1};case"load":return{...e,isLoading:!0};case"end":return{...e,isLoading:!1,hasMore:!1}}}var ie=n(7116),se=n(9301),ue=n(8504);const de=s.ZP.button`
  ${X};
  background-color: ${({isOn:e})=>e?ue.iN.default:ue.ix.dark};

  color: ${ue.ix.default};
`;function me({handleToggle:e,isScrollHandlerOn:t}){return console.log(t),l.createElement(de,{onClick:e,isOn:t},t?l.createElement(ie.J,{size:20}):l.createElement(se.k,{size:20}),"자동 불러오기",t)}const fe=s.ZP.div`
  ${d.Z.horizontal};

  button {
    ${C.Z.blue};
    ${X};
    width: 100%;
    border-radius: 0;
  }
`,Ze=s.ZP.div`
  position: absolute;

  transform: translate(0, 32px);
`;function he({handleOrderByDesc:e,handleOrderByAsc:t}){const[n,r]=(0,l.useState)(!1),a=()=>{r((e=>!e))};return l.createElement(fe,null,l.createElement("button",{onClick:a},"토글 버튼"),n&&l.createElement(Ze,null,l.createElement("button",{onClick:()=>{e(),a()}},"최신 순"),l.createElement("button",{onClick:()=>{t(),a()}},"오래된 순")))}function Ee(){const{postManager:e,handleOrderByDesc:t,handleOrderByAsc:n,loadDayilyLifePosts:r}=function(){const[e,t]=(0,l.useReducer)(ce,{dailyLifePosts:[],cursor:null,orderBy:"desc",isLoading:!0,hasMore:!0});return(0,l.useEffect)((()=>{!async function(){if(e.isLoading){const{orderBy:n,cursor:l}=e,{docs:r}=await(0,g.PL)(v(n,l));if(0===r.length)return void t({type:"end"});t({type:"set",posts:p(r),lastDoc:r[r.length-1]})}}()}),[e]),{postManager:e,handleOrderByDesc:()=>{t({type:"init",orderBy:"desc"})},handleOrderByAsc:()=>{t({type:"init",orderBy:"asc"})},loadDayilyLifePosts:()=>{e.cursor&&t({type:"load"})}}}(),{dailyLifePosts:a,isLoading:o,hasMore:c}=e,{setTarget:i,isScrollHandlerOn:s,setIsScrollHandlerOn:u}=function(e){const[t,n]=(0,l.useState)(null),[r,a]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{if(!r)return;const n=new IntersectionObserver(((t,n)=>{const[l]=t;l.isIntersecting&&(e(),n.unobserve(l.target))}),{root:null,rootMargin:"0px",threshold:.1});t&&n.observe(t)}),[t,r]),{setTarget:n,isScrollHandlerOn:r,setIsScrollHandlerOn:a}}(r);return l.createElement(l.Fragment,null,l.createElement(K.Z,{align:"spaceBetweenCenter",width:"100%"},l.createElement(he,{handleOrderByDesc:t,handleOrderByAsc:n}),l.createElement(me,{isScrollHandlerOn:s,handleToggle:()=>{u((e=>!e))}})),o&&l.createElement("div",null,"포스트를 불러오는 중..."),a.map(((e,t)=>t===a.length-1?l.createElement(oe,{key:e.id,dailyLifePost:e,setLastItem:i}):l.createElement(oe,{key:e.id,dailyLifePost:e}))),c&&!s&&l.createElement(S.Z,{onClick:r},"더 불러오기"),l.createElement(K.Z,null,!c&&"더 이상 포스트가 없습니다."))}function ge(){const e=(0,l.useRef)(null),[t,n]=(0,l.useState)(!1);return l.createElement(o.Z,null,l.createElement(a.Z,null,l.createElement("h2",null,"일상"),l.createElement(_,{onClick:()=>{n(!0)},ref:e},l.createElement(r.Q,{size:20}),"포스트 작성")),l.createElement(Ee,null),t&&l.createElement(i,null,l.createElement(q,null,l.createElement(Z,null,l.createElement(j,{handleHideForm:()=>{n(!1),e.current?.focus()}})))))}},6401:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(7294);function r(e){const[t,n]=(0,l.useState)(e);return[t,function({target:e}){n((t=>({...t,[e.id]:e.value})))}]}}}]);