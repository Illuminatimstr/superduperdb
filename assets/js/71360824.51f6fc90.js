"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[7238],{9425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=t(4848),c=t(8453);const r={},d=void 0,a={id:"api/components/schema",title:"schema",description:"superduperdb.components.schema",source:"@site/content/api/components/schema.md",sourceDirName:"api/components",slug:"/api/components/schema",permalink:"/docs/api/components/schema",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/api/components/schema.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"model",permalink:"/docs/api/components/model"},next:{title:"stack",permalink:"/docs/api/components/stack"}},i={},o=[{value:"<code>get_schema</code>",id:"get_schema",level:2},{value:"<code>Schema</code>",id:"schema",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"superduperdb.components.schema"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/superduperdb/components/schema.py",children:"Source code"})}),"\n",(0,s.jsx)(n.h2,{id:"get_schema",children:(0,s.jsx)(n.code,{children:"get_schema"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"get_schema(db,\n     schema: Union[superduperdb.components.schema.Schema,\n     str]) -> Optional[superduperdb.components.schema.Schema]\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db"}),(0,s.jsx)(n.td,{children:"Datalayer instance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"schema"}),(0,s.jsx)(n.td,{children:"Schema to get. If a string, it will be loaded from the database."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Handle schema caching and loading."}),"\n",(0,s.jsx)(n.h2,{id:"schema",children:(0,s.jsx)(n.code,{children:"Schema"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Schema(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = <factory>,\n     *,\n     artifacts: 'dc.InitVar[t.Optional[t.Dict]]' = None,\n     fields: Mapping[str,\n     superduperdb.components.datatype.DataType]) -> None\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identifier"}),(0,s.jsx)(n.td,{children:"Identifier of the leaf."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"db"}),(0,s.jsx)(n.td,{children:"Datalayer instance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uuid"}),(0,s.jsx)(n.td,{children:"UUID of the leaf."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"artifacts"}),(0,s.jsxs)(n.td,{children:["A dictionary of artifacts paths and ",(0,s.jsx)(n.code,{children:"DataType"})," objects"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fields"}),(0,s.jsxs)(n.td,{children:["A mapping of field names to types or ",(0,s.jsx)(n.code,{children:"Encoders"})]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["A component carrying the ",(0,s.jsx)(n.code,{children:"DataType"})," of columns."]})]})}function l(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var s=t(6540);const c={},r=s.createContext(c);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);