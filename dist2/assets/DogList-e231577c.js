import{r as c,u as d,a as p,j as s,L as h,b as _}from"./index-ec6337fa.js";import{h as g}from"./httpClient-df0bb4a1.js";const m=a=>Object.entries(a.message),u=()=>{const[a,i]=c.useState([["",[""]]]),[l,r]=c.useState(!1);return c.useEffect(()=>{r(!0),g.get("/breeds/list/all").then(e=>{if(!e.data.code)i(m(e.data));else{if(!e.data.status)return;throw new Error(`${e.data.code} ${e.data.status}`)}}).then(()=>r(!1)).catch(e=>{console.error(e)})},[]),{dogEntries:a,isLoading:l}},v="_link_1bvve_41",x="_tag_1bvve_45",t={"list-wrapper":"_list-wrapper_1bvve_1","loader-wrapper":"_loader-wrapper_1bvve_11","list-header":"_list-header_1bvve_24","list-item":"_list-item_1bvve_29",link:v,tag:x,"tags-wrapper":"_tags-wrapper_1bvve_61"},w=()=>{const{dogEntries:a,isLoading:i}=u(),{t:l}=d(),r=p();return s.jsx(s.Fragment,{children:i?s.jsx("div",{className:t["loader-wrapper"],children:s.jsx(h,{})}):s.jsxs("div",{className:t["list-wrapper"],children:[s.jsx("h1",{className:t["list-header"],children:l("headers.dogList")}),a.map(([e,o])=>s.jsxs("div",{className:t["list-item"],children:[s.jsx(_,{to:`/search/${e}`,className:t.link,children:e}),s.jsx("div",{className:t["tags-wrapper"],children:o.map(n=>s.jsx("button",{onClick:()=>{r(`/search/${e}/${n}`)},className:t.tag,children:n},n))})]},e))]})})};export{w as default};