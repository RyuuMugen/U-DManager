"use strict";(self.webpackChunkdevice_management=self.webpackChunkdevice_management||[]).push([[8418],{95972:(S,h,s)=>{s.r(h),s.d(h,{default:()=>H});var e=s(67294),B=s(23724),T=s(97132),a=s(95489),t=s(28702),v=s(81912),l=s(89031);const f=async()=>{const{get:n}=(0,a.getFetchClient)(),{data:o}=await n((0,l.Gc)("email-templates"));return o},M=n=>{const{put:o}=(0,a.getFetchClient)();return o((0,l.Gc)("email-templates"),n)};var O=s(45697),i=s.n(O),E=s(41363);const y=({canUpdate:n,onEditClick:o})=>{const{formatMessage:r}=(0,T.useIntl)();return e.createElement(t.Table,{colCount:3,rowCount:3},e.createElement(t.Thead,null,e.createElement(t.Tr,null,e.createElement(t.Th,{width:"1%"},e.createElement(t.VisuallyHidden,null,r({id:(0,l.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),e.createElement(t.Th,null,e.createElement(t.Typography,{variant:"sigma",textColor:"neutral600"},r({id:(0,l.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),e.createElement(t.Th,{width:"1%"},e.createElement(t.VisuallyHidden,null,r({id:(0,l.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),e.createElement(t.Tbody,null,e.createElement(t.Tr,{...(0,a.onRowClick)({fn:()=>o("reset_password")})},e.createElement(t.Td,null,e.createElement(t.Icon,null,e.createElement(E.Refresh,{"aria-label":r({id:"global.reset-password",defaultMessage:"Reset password"})}))),e.createElement(t.Td,null,e.createElement(t.Typography,null,r({id:"global.reset-password",defaultMessage:"Reset password"}))),e.createElement(t.Td,{...a.stopPropagation},e.createElement(t.IconButton,{onClick:()=>o("reset_password"),label:r({id:(0,l.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:n&&e.createElement(E.Pencil,null)}))),e.createElement(t.Tr,{...(0,a.onRowClick)({fn:()=>o("email_confirmation")})},e.createElement(t.Td,null,e.createElement(t.Icon,null,e.createElement(E.Check,{"aria-label":r({id:(0,l.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),e.createElement(t.Td,null,e.createElement(t.Typography,null,r({id:(0,l.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),e.createElement(t.Td,{...a.stopPropagation},e.createElement(t.IconButton,{onClick:()=>o("email_confirmation"),label:r({id:(0,l.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:n&&e.createElement(E.Pencil,null)})))))};y.propTypes={canUpdate:i().bool.isRequired,onEditClick:i().func.isRequired};const b=y;var U=s(80831),c=s(53209);const G=c.Ry().shape({options:c.Ry().shape({from:c.Ry().shape({name:c.Z_().required(a.translatedErrors.required),email:c.Z_().email(a.translatedErrors.email).required(a.translatedErrors.required)}).required(),response_email:c.Z_().email(a.translatedErrors.email),object:c.Z_().required(a.translatedErrors.required),message:c.Z_().required(a.translatedErrors.required)}).required(a.translatedErrors.required)}),R=({template:n,onToggle:o,onSubmit:r})=>{const{formatMessage:m}=(0,T.useIntl)();return e.createElement(t.ModalLayout,{onClose:o,labelledBy:`${m({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${m({id:(0,l.OB)(n.display),defaultMessage:n.display})}`},e.createElement(t.ModalHeader,null,e.createElement(t.Breadcrumbs,{label:`${m({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${m({id:(0,l.OB)(n.display),defaultMessage:n.display})}`},e.createElement(t.Crumb,null,m({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),e.createElement(t.Crumb,null,m({id:(0,l.OB)(n.display),defaultMessage:n.display})))),e.createElement(U.Formik,{onSubmit:r,initialValues:n,validateOnChange:!1,validationSchema:G,enableReinitialize:!0},({errors:d,values:u,handleChange:p,isSubmitting:C})=>e.createElement(a.Form,null,e.createElement(t.ModalBody,null,e.createElement(t.Grid,{gap:5},e.createElement(t.GridItem,{col:6,s:12},e.createElement(a.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:p,value:u.options.from.name,error:d?.options?.from?.name,type:"text"})),e.createElement(t.GridItem,{col:6,s:12},e.createElement(a.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:p,value:u.options.from.email,error:d?.options?.from?.email,type:"text"})),e.createElement(t.GridItem,{col:6,s:12},e.createElement(a.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:p,value:u.options.response_email,error:d?.options?.response_email,type:"text"})),e.createElement(t.GridItem,{col:6,s:12},e.createElement(a.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:p,value:u.options.object,error:d?.options?.object,type:"text"})),e.createElement(t.GridItem,{col:12,s:12},e.createElement(t.Textarea,{label:m({id:(0,l.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:p,value:u.options.message,error:d?.options?.message&&m({id:d.options.message,defaultMessage:d.options.message})})))),e.createElement(t.ModalFooter,{startActions:e.createElement(t.Button,{onClick:o,variant:"tertiary"},"Cancel"),endActions:e.createElement(t.Button,{loading:C,type:"submit"},"Finish")}))))};R.propTypes={template:i().shape({display:i().string,icon:i().string,options:i().shape({from:i().shape({name:i().string,email:i().string}),message:i().string,object:i().string,response_email:i().string})}).isRequired,onSubmit:i().func.isRequired,onToggle:i().func.isRequired};const k=R,A=()=>e.createElement(a.CheckPagePermissions,{permissions:v.Z.readEmailTemplates},e.createElement(j,null)),j=()=>{const{formatMessage:n}=(0,T.useIntl)(),{trackUsage:o}=(0,a.useTracking)(),{notifyStatus:r}=(0,t.useNotifyAT)(),m=(0,a.useNotification)(),{lockApp:d,unlockApp:u}=(0,a.useOverlayBlocker)(),p=(0,e.useRef)(o),C=(0,B.useQueryClient)();(0,a.useFocusWhenNavigate)();const[Z,N]=(0,e.useState)(!1),[F,$]=(0,e.useState)(null),x=(0,e.useMemo)(()=>({update:v.Z.updateEmailTemplates}),[]),{isLoading:q,allowedActions:{canUpdate:w}}=(0,a.useRBAC)(x),{status:Q,data:I}=(0,B.useQuery)("email-templates",()=>f(),{onSuccess(){r(n({id:(0,l.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){m({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),V=q||Q!=="success",P=()=>{N(g=>!g)},D=g=>{$(g),P()},L=(0,B.useMutation)(g=>M({"email-templates":g}),{async onSuccess(){await C.invalidateQueries("email-templates"),m({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),p.current("didEditEmailTemplates"),u(),P()},onError(){m({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),u()},refetchActive:!0}),{isLoading:z}=L,W=g=>{d(),p.current("willEditEmailTemplates");const X={...I,[F]:g};L.mutate(X)};return V?e.createElement(t.Main,{"aria-busy":"true"},e.createElement(a.SettingsPageTitle,{name:n({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(t.HeaderLayout,{title:n({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(t.ContentLayout,null,e.createElement(a.LoadingIndicatorPage,null))):e.createElement(t.Main,{"aria-busy":z},e.createElement(a.SettingsPageTitle,{name:n({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(t.HeaderLayout,{title:n({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(t.ContentLayout,null,e.createElement(b,{onEditClick:D,canUpdate:w}),Z&&e.createElement(k,{template:I[F],onToggle:P,onSubmit:W})))},H=A},89031:(S,h,s)=>{s.d(h,{YX:()=>T,Gc:()=>v,OB:()=>l.Z});var e=s(96486);const T=f=>Object.keys(f).reduce((M,O)=>{const i=f[O].controllers,E=Object.keys(i).reduce((y,b)=>((0,e.isEmpty)(i[b])||(y[b]=i[b]),y),{});return(0,e.isEmpty)(E)||(M[O]={controllers:E}),M},{});var a=s(31498);const v=f=>`/${a.Z}/${f}`;var l=s(84757)}}]);
