"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[5235],{4272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(4848),a=r(8453),u=r(9489),l=r(7227);const o={sidebar_label:"Create Model Output Type"},s="Create Model Output Type",c={id:"reusable_snippets/create_model_output_type",title:"create_model_output_type",description:"",source:"@site/content/reusable_snippets/create_model_output_type.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/create_model_output_type",permalink:"/docs/reusable_snippets/create_model_output_type",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/reusable_snippets/create_model_output_type.md",tags:[],version:"current",frontMatter:{sidebar_label:"Create Model Output Type"}},i={},d=[];function p(e){const t={code:"code",h1:"h1",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-model-output-type",children:"Create Model Output Type"}),"\n",(0,n.jsxs)(u.A,{children:[(0,n.jsx)(l.A,{value:"MongoDB",label:"MongoDB",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"chunked_model_datatype = None        \n"})})}),(0,n.jsx)(l.A,{value:"SQL",label:"SQL",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from superduperdb.backends.ibis.field_types import dtype\nchunked_model_datatype = dtype('str')        \n"})})})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},7227:(e,t,r)=>{r.d(t,{A:()=>l});r(6540);var n=r(870);const a={tabItem:"tabItem_Ymn6"};var u=r(4848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,u.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},9489:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),a=r(870),u=r(4245),l=r(6347),o=r(6494),s=r(2814),c=r(5167),i=r(1269);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),u=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(u),(0,n.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(a.location.search);t.set(u,e),a.replace({...a.location,search:t.toString()})}),[u,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,u=p(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:u}))),[c,d]=f({queryString:r,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,u]=(0,i.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&u.set(e)}),[r,u])]}({groupId:a}),v=(()=>{const e=c??m;return b({value:e,tabValues:u})?e:null})();(0,o.A)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,u]),tabValues:u}}var h=r(1062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(4848);function _(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.a_)(),i=e=>{const t=e.currentTarget,r=s.indexOf(t),a=o[r].value;a!==n&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:u}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>s.push(e),onKeyDown:d,onClick:i,...u,className:(0,a.A)("tabs__item",v.tabItem,u?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const u=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=u.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:u.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,y.jsx)(_,{...e,...t}),(0,y.jsx)(g,{...e,...t})]})}function w(e){const t=(0,h.A)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(6540);const a={},u=n.createContext(a);function l(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);