(this["webpackJsonprsa-ldap"]=this["webpackJsonprsa-ldap"]||[]).push([[0],{37:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var c=a(1),l=a(0),s=a.n(l),n=a(10),i=a.n(n),r=(a(60),a(61),a(38)),j=a.n(r),o=a(40),b=a.n(o),d=function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsxs)("div",{children:["Manage LDAP Configurations ",Object(c.jsxs)("span",{className:"link",children:[Object(c.jsx)(j.a,{color:"primary"})," ",Object(c.jsx)(b.a,{color:"primary"})]})]})})},h=a(11),O=(a(37),a(67),a(5)),x=a(106),u=a(98),m=a(101),p=a(100),f=a(97),g=a(99),y=a(96),v=a(20),C=a.n(v),P=a(105),A=a(103),D=a(46),S=a.n(D),k=a(47),N=a.n(k),L=a(42),T=a.n(L),M=a(43),E=a.n(M),F=a(44),U=a.n(F),I=a(45),w=a.n(I),B=a(31),R=a(102),X=(a(68),function(e){return e.show?Object(c.jsxs)("div",{className:"more",children:[Object(c.jsx)("div",{children:"Sync Now"}),Object(c.jsx)("div",{children:"Delete"})]}):null});function J(e,t,a,c,l,s,n){return{name:e,status:t,userDomain:a,defaultStatus:c,lastUpdated:l,updatedBy:s,actions:n}}var K=[J("CORP","Active","CORP"," ","10/15/2018 11:28:00 PM","Steve, Bipin Domy"," "),J("Local Computer","Active","USXXLETTEJL1C"," ","10/15/2018 11:28:00 PM","Thomas, Abin"," "),J("Incident Management LDAP","Inactive","EMC"," ","10/15/2018 11:28:00 PM","S, Karthika"," "),J("Admin Dashboard LDAP","Failed","CORP"," ","10/15/2018 11:28:00 PM","Steve, Bipin Domy"," "),J("Incident Management LDAP","Completed","USXXLETTEJL1C"," ","10/15/2018 11:28:00 PM","Thomas, Abin"," "),J("Business Impact analysis LDAP","Cancelled","USXXLETTEJL1C"," ","10/15/2018 11:28:00 PM","S, Karthika"," "),J("Incident Management LDAP","Queued","CORP"," ","10/15/2018 11:28:00 PM","George, Adam"," ")],Q=Object(O.a)((function(){return Object(x.a)({root:{"&:nth-of-type(even)":{backgroundColor:"#f9fbe7"}}})}))(y.a),Y=function(){var e=Object(l.useState)(!1),t=Object(h.a)(e,2),a=t[0],s=t[1],n=function(){s(!a)};return Object(c.jsxs)(f.a,{children:[Object(c.jsxs)(u.a,{className:"table",size:"small",children:[Object(c.jsx)(g.a,{children:Object(c.jsxs)(y.a,{style:{borderBottom:"2px solid #9e9e9e"},children:[Object(c.jsxs)(p.a,{align:"left",children:["NAME",Object(c.jsx)(A.a,{title:"Filter list",children:Object(c.jsx)(P.a,{"aria-label":"filter list",children:Object(c.jsx)(C.a,{})})}),Object(c.jsx)("span",{className:"line"})]}),Object(c.jsxs)(p.a,{align:"left",children:["SYNC STATUS",Object(c.jsx)(A.a,{title:"Filter list",children:Object(c.jsx)(P.a,{"aria-label":"filter list",children:Object(c.jsx)(C.a,{})})}),Object(c.jsx)("span",{className:"line"})]}),Object(c.jsxs)(p.a,{align:"left",children:["USER'S DOMAIN",Object(c.jsx)(A.a,{title:"Filter list",children:Object(c.jsx)(P.a,{"aria-label":"filter list",children:Object(c.jsx)(C.a,{})})}),Object(c.jsx)("span",{className:"line"})]}),Object(c.jsxs)(p.a,{align:"left",children:["DEFAULT",Object(c.jsx)(A.a,{title:"Filter list",children:Object(c.jsx)(P.a,{"aria-label":"filter list",children:Object(c.jsx)(C.a,{})})}),Object(c.jsx)("span",{className:"line"})]}),Object(c.jsxs)(p.a,{align:"left",children:["LAST UPDATED",Object(c.jsx)(A.a,{title:"Filter list",children:Object(c.jsx)(P.a,{"aria-label":"filter list",children:Object(c.jsx)(C.a,{})})}),Object(c.jsx)("span",{className:"line"})]}),Object(c.jsxs)(p.a,{align:"left",children:["UPDATED BY",Object(c.jsx)(A.a,{title:"Filter list",children:Object(c.jsx)(P.a,{"aria-label":"filter list",children:Object(c.jsx)(C.a,{})})}),Object(c.jsx)("span",{className:"line"})]}),Object(c.jsx)(p.a,{align:"right",children:"ACTIONS"})]})}),Object(c.jsx)(m.a,{className:"Row",children:K.map((function(e,t){return Object(c.jsxs)(Q,{style:{color:"#ffffff"},children:[Object(c.jsx)(p.a,{component:"th",scope:"row",style:{color:"#80aaff"},children:e.name}),Object(c.jsxs)(p.a,{align:"left",style:"Active"!==e.status&&"Inactive"!==e.status?{color:"#80aaff"}:{color:"#000000"},children:[e.status,"Failed"===e.status?Object(c.jsx)(T.a,{color:"error",style:{float:"right"}}):null,"Completed"===e.status?Object(c.jsx)(E.a,{style:{float:"right",color:B.a[600]}}):null,"Cancelled"===e.status?Object(c.jsx)(U.a,{style:{float:"right",color:R.a[800]}}):null,"Queued"===e.status?Object(c.jsx)(w.a,{color:"primary",style:{float:"right"}}):null]}),Object(c.jsx)(p.a,{align:"left",children:e.userDomain}),Object(c.jsx)(p.a,{align:"left",children:0===t?Object(c.jsx)(S.a,{}):null}),Object(c.jsx)(p.a,{align:"left",children:e.lastUpdated}),Object(c.jsx)(p.a,{align:"left",children:e.updatedBy}),Object(c.jsx)(p.a,{align:"left",children:Object(c.jsx)(A.a,{title:"More",children:Object(c.jsx)(P.a,{"aria-label":"more",children:Object(c.jsx)(N.a,{color:"primary",onClick:n})})})})]},e.name)}))})]}),Object(c.jsx)(X,{show:a})]})},z=a(48),G=a.n(z),q=a(49),H=a.n(q),V=a(104),W=(a(70),function(e){var t=e.show,a=Object(l.useState)(!0),s=Object(h.a)(a,2),n=s[0],i=s[1],r=function(e){e.preventDefault(),i(e.currentTarget.checked)};return t?Object(c.jsxs)("div",{className:"modal",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(V.a,{checked:n,onChange:r,color:"primary",inputProps:{"aria-label":"primary checkbox"}}),"Name"]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(V.a,{checked:!n,onChange:r,color:"primary",inputProps:{"aria-label":"primary checkbox"}}),"ID"]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(V.a,{checked:n,onChange:r,color:"primary",inputProps:{"aria-label":"primary checkbox"}}),"Sync Status"]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(V.a,{checked:n,onChange:r,color:"primary",inputProps:{"aria-label":"primary checkbox"}}),"User's Domain"]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(V.a,{checked:n,onChange:r,color:"primary",inputProps:{"aria-label":"primary checkbox"}}),"Default Status"]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(V.a,{checked:n,onChange:r,color:"primary",inputProps:{"aria-label":"primary checkbox"}}),"Last Updated"]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(V.a,{checked:n,onChange:r,color:"primary",inputProps:{"aria-label":"primary checkbox"}}),"Updated By"]})]}):null}),Z=function(){var e=Object(l.useState)(!1),t=Object(h.a)(e,2),a=t[0],s=t[1];return Object(c.jsxs)("div",{className:"Content",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"Column",children:"Drag a column name here to group the items by the value within that column."}),Object(c.jsxs)("span",{className:"eye",children:[Object(c.jsx)(A.a,{title:"Menu list",children:Object(c.jsx)(P.a,{"aria-label":"menu list",children:Object(c.jsx)(G.a,{color:"primary",onClick:function(){s(!a)}})})}),Object(c.jsx)(A.a,{title:"Add list",children:Object(c.jsx)(P.a,{"aria-label":"Add list",children:Object(c.jsx)(H.a,{color:"primary"})})})]})]}),Object(c.jsx)(Y,{}),Object(c.jsx)(W,{show:a})]})};a(71);var $=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(d,{}),Object(c.jsx)(Z,{})]})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(t){var a=t.getCLS,c=t.getFID,l=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),l(e),s(e),n(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)($,{})}),document.getElementById("root")),_()}},[[72,1,2]]]);
//# sourceMappingURL=main.1d69d335.chunk.js.map