"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[999],{6999:function(e,n,r){r.r(n),r.d(n,{default:function(){return L}});var i=r(2791),l=r(9434),a=function(e){return e.contacts.items},t=function(e){return e.filter},o=function(e){return e.contacts.isLoading},s=r(3634),u=r(176),d=r(2392),c=r(8208),m=r(9140),p=r(4224),v=r(3329),f=function(){var e=(0,l.v9)(a),n=(0,l.I0)();return(0,v.jsx)(u.k,{direction:"column",align:"center",m:"4",w:400,children:(0,v.jsxs)(d.NI,{as:"form",onSubmit:function(r){r.preventDefault();var i=r.target,l=r.target.name.value,a=r.target.number.value,t=e.some((function(e){return e.name.toLowerCase()===l.toLowerCase()})),o={name:l,number:a};t?alert("".concat(l," is in use. Try another name.")):(n((0,s.uK)(o)),i.reset())},children:[(0,v.jsx)(c.l,{htmlFor:"name",children:"Name"}),(0,v.jsx)(m.I,{type:"text",name:"name",maxLength:"30",required:!0,mb:"4"}),(0,v.jsx)(c.l,{htmlFor:"number",children:"Number"}),(0,v.jsx)(m.I,{type:"tel",name:"number",maxLength:"30",pattern:"/\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]",required:!0,mb:"4"}),(0,v.jsx)(p.z,{type:"submit",bg:"blue.500",color:"white",p:"4",fontSize:20,_hover:{bg:"blue.600"},children:"Add contact"})]})})},h=r(2347),x=r(1413),g=r(4925),b=r(7872),j=r(2503),Z=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],y=(0,b.G)((function(e,n){var r=e.templateAreas,i=e.gap,l=e.rowGap,a=e.columnGap,t=e.column,o=e.row,s=e.autoFlow,u=e.autoRows,d=e.templateRows,c=e.autoColumns,m=e.templateColumns,p=(0,g.Z)(e,Z),f={display:"grid",gridTemplateAreas:r,gridGap:i,gridRowGap:l,gridColumnGap:a,gridAutoColumns:c,gridColumn:t,gridRow:o,gridAutoFlow:s,gridAutoRows:u,gridTemplateRows:d,gridTemplateColumns:m};return(0,v.jsx)(j.m.div,(0,x.Z)({ref:n,__css:f},p))}));y.displayName="Grid";var I=r(5310),R=r(3142),C=r(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function w(e,n){return Array.isArray(e)?e.map((function(e){return null===e?null:n(e)})):(0,C.Kn)(e)?Object.keys(e).reduce((function(r,i){return r[i]=n(e[i]),r}),{}):null!=e?n(e):null}var k=["columns","spacingX","spacingY","spacing","minChildWidth"],F=(0,b.G)((function(e,n){var r=e.columns,i=e.spacingX,l=e.spacingY,a=e.spacing,t=e.minChildWidth,o=(0,g.Z)(e,k),s=(0,I.F)(),u=t?function(e,n){return w(e,(function(e){var r,i=(0,R.LP)("sizes",e,"number"===typeof(r=e)?"".concat(r,"px"):r)(n);return null===e?null:"repeat(auto-fit, minmax(".concat(i,", 1fr))")}))}(t,s):w(r,(function(e){return null===e?null:"repeat(".concat(e,", minmax(0, 1fr))")}));return(0,v.jsx)(y,(0,x.Z)({ref:n,gap:a,columnGap:i,rowGap:l,templateColumns:u},o))}));F.displayName="SimpleGrid";var N=r(4087),q=r(8843),_=function(){var e=(0,l.v9)(a),n=(0,l.v9)(t),r=(0,l.v9)(o),i=(0,l.I0)(),d=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.number.includes(n)}));return(0,v.jsx)(v.Fragment,{children:r?(0,v.jsx)(h.x,{children:"Loading..."}):(0,v.jsx)(F,{columns:4,spacing:10,m:"4",children:d.length>0?d.map((function(e){var n=e.id,r=e.name,l=e.number;return(0,v.jsxs)(N.xu,{borderWidth:"1px",borderRadius:"lg",overflow:"hidden",my:"2",w:300,children:[(0,v.jsxs)(u.k,{alignItems:"center",justifyContent:"space-between",p:"2",children:[(0,v.jsx)(h.x,{children:r}),(0,v.jsx)(q.P,{onClick:function(){return function(e){return i((0,s.GK)(e))}(n)}})]}),(0,v.jsx)(N.xu,{p:"2",children:(0,v.jsx)(h.x,{children:l})})]},n)})):(0,v.jsx)(h.x,{children:"No contacts found"})})})},P=r(3165),G=function(){var e=(0,l.I0)();return(0,v.jsxs)(d.NI,{id:"filter",m:"4",w:400,children:[(0,v.jsx)(c.l,{children:"Search list:"}),(0,v.jsx)(m.I,{type:"search",name:"filter",value:(0,l.v9)(t),onChange:function(n){var r=n.target.value.toLowerCase();e((0,P.T)(r))}})]})},L=function(){var e=(0,l.I0)(),n=(0,l.v9)(o);return(0,i.useEffect)((function(){e((0,s.yF)())}),[e]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Phonebook"}),(0,v.jsx)(f,{}),(0,v.jsx)("div",{children:n&&"Request in progress..."}),n?null:(0,v.jsx)(G,{}),(0,v.jsx)(_,{})]})}},2392:function(e,n,r){r.d(n,{NI:function(){return C},NJ:function(){return R},e:function(){return j}});var i=r(1413),l=r(4925),a=r(9439),t=r(9886),o=r(4591),s=r(7872),u=r(9084),d=r(2996),c=r(2503),m=r(6992),p=r(2791),v=r(3329),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],x=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),g=(0,a.Z)(x,2),b=g[0],j=g[1],Z=(0,t.k)({strict:!1,name:"FormControlContext"}),y=(0,a.Z)(Z,2),I=y[0],R=y[1];var C=(0,s.G)((function(e,n){var r=(0,u.jC)("Form",e),t=function(e){var n=e.id,r=e.isRequired,t=e.isInvalid,s=e.isDisabled,u=e.isReadOnly,d=(0,l.Z)(e,f),c=(0,p.useId)(),v=n||"field-".concat(c),h="".concat(v,"-label"),x="".concat(v,"-feedback"),g="".concat(v,"-helptext"),b=(0,p.useState)(!1),j=(0,a.Z)(b,2),Z=j[0],y=j[1],I=(0,p.useState)(!1),R=(0,a.Z)(I,2),C=R[0],w=R[1],k=(0,p.useState)(!1),F=(0,a.Z)(k,2),N=F[0],q=F[1],_=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:g},e),{},{ref:(0,o.lq)(n,(function(e){e&&w(!0)}))})}),[g]),P=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(N),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(t),"data-readonly":(0,m.PB)(u),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:v})}),[v,s,N,t,u,h]),G=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,o.lq)(n,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[x]),L=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),d),{},{ref:n,role:"group"})}),[d]),T=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!u,isDisabled:!!s,isFocused:!!N,onFocus:function(){return q(!0)},onBlur:function(){return q(!1)},hasFeedbackText:Z,setHasFeedbackText:y,hasHelpText:C,setHasHelpText:w,id:v,labelId:h,feedbackId:x,helpTextId:g,htmlProps:d,getHelpTextProps:_,getErrorMessageProps:G,getRootProps:L,getLabelProps:P,getRequiredIndicatorProps:T}}((0,d.Lr)(e)),s=t.getRootProps,x=(t.htmlProps,(0,l.Z)(t,h)),g=(0,m.cx)("chakra-form-control",e.className);return(0,v.jsx)(I,{value:x,children:(0,v.jsx)(b,{value:r,children:(0,v.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},s({},n)),{},{className:g,__css:r.container}))})})}));C.displayName="FormControl",(0,s.G)((function(e,n){var r=R(),l=j(),a=(0,m.cx)("chakra-form__helper-text",e.className);return(0,v.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:l.helperText,className:a}))})).displayName="FormHelperText"},8208:function(e,n,r){r.d(n,{l:function(){return p}});var i=r(1413),l=r(4925),a=r(2392),t=r(7872),o=r(9084),s=r(2996),u=r(2503),d=r(6992),c=r(3329),m=["className","children","requiredIndicator","optionalIndicator"],p=(0,t.G)((function(e,n){var r,t=(0,o.mq)("FormLabel",e),p=(0,s.Lr)(e),f=(p.className,p.children),h=p.requiredIndicator,x=void 0===h?(0,c.jsx)(v,{}):h,g=p.optionalIndicator,b=void 0===g?null:g,j=(0,l.Z)(p,m),Z=(0,a.NJ)(),y=null!=(r=null==Z?void 0:Z.getLabelProps(j,n))?r:(0,i.Z)({ref:n},j);return(0,c.jsxs)(u.m.label,(0,i.Z)((0,i.Z)({},y),{},{className:(0,d.cx)("chakra-form__label",p.className),__css:(0,i.Z)({display:"block",textAlign:"start"},t),children:[f,(null==Z?void 0:Z.isRequired)?x:b]}))}));p.displayName="FormLabel";var v=(0,t.G)((function(e,n){var r=(0,a.NJ)(),l=(0,a.e)();if(!(null==r?void 0:r.isRequired))return null;var t=(0,d.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(u.m.span,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:l.requiredIndicator,className:t}))}));v.displayName="RequiredIndicator"},9140:function(e,n,r){r.d(n,{I:function(){return h}});var i=r(1413),l=r(4925),a=r(2392),t=r(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function u(e){var n=function(e){var n,r,o,u=(0,a.NJ)(),d=e.id,c=e.disabled,m=e.readOnly,p=e.required,v=e.isRequired,f=e.isInvalid,h=e.isReadOnly,x=e.isDisabled,g=e.onFocus,b=e.onBlur,j=(0,l.Z)(e,s),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==u?void 0:u.hasFeedbackText)&&(null==u?void 0:u.isInvalid)&&Z.push(u.feedbackId);(null==u?void 0:u.hasHelpText)&&Z.push(u.helpTextId);return(0,i.Z)((0,i.Z)({},j),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=d?d:null==u?void 0:u.id,isDisabled:null!=(n=null!=c?c:x)?n:null==u?void 0:u.isDisabled,isReadOnly:null!=(r=null!=m?m:h)?r:null==u?void 0:u.isReadOnly,isRequired:null!=(o=null!=p?p:v)?o:null==u?void 0:u.isRequired,isInvalid:null!=f?f:null==u?void 0:u.isInvalid,onFocus:(0,t.v0)(null==u?void 0:u.onFocus,g),onBlur:(0,t.v0)(null==u?void 0:u.onBlur,b)})}(e),r=n.isDisabled,u=n.isInvalid,d=n.isReadOnly,c=n.isRequired,m=(0,l.Z)(n,o);return(0,i.Z)((0,i.Z)({},m),{},{disabled:r,readOnly:d,required:c,"aria-invalid":(0,t.Qm)(u),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(d)})}var d=r(7872),c=r(9084),m=r(2996),p=r(2503),v=r(3329),f=["htmlSize"],h=(0,d.G)((function(e,n){var r=e.htmlSize,a=(0,l.Z)(e,f),o=(0,c.jC)("Input",a),s=u((0,m.Lr)(a)),d=(0,t.cx)("chakra-input",e.className);return(0,v.jsx)(p.m.input,(0,i.Z)((0,i.Z)({size:r},s),{},{__css:o.field,ref:n,className:d}))}));h.displayName="Input",h.id="Input"}}]);
//# sourceMappingURL=999.c957caf4.chunk.js.map