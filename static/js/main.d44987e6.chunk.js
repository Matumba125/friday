(this.webpackJsonpfriday=this.webpackJsonpfriday||[]).push([[0],{12:function(e,t,n){e.exports={globalTitleBox:"PasswordRecovery_globalTitleBox__3ckrS",listTitleBox:"PasswordRecovery_listTitleBox__2iEjO",formWrap:"PasswordRecovery_formWrap__1Qf4Q",cardText:"PasswordRecovery_cardText__o5oek",error:"PasswordRecovery_error__1ckl_",cardTextTop:"PasswordRecovery_cardTextTop__1WfhR",buttonContainer:"PasswordRecovery_buttonContainer__QOcbX",cardTextBottom:"PasswordRecovery_cardTextBottom__14fWi",linkCardBottom:"PasswordRecovery_linkCardBottom__Ge2Hp"}},13:function(e,t,n){e.exports={globalTitleBox:"Loginization_globalTitleBox__3STcV",listTitleBox:"Loginization_listTitleBox__1GMEp",formWrap:"Loginization_formWrap__3gqNA",buttonContainer:"Loginization_buttonContainer__2jzI8",linkWrap:"Loginization_linkWrap__3teYT",error:"Loginization_error__1NJlm",passForgot:"Loginization_passForgot__3M-rH",formText:"Loginization_formText__MyRQC",linkCardBottom:"Loginization_linkCardBottom__BYneO"}},15:function(e,t,n){e.exports={input:"InputForm_input__143Ne",invalid:"InputForm_invalid__1ZBg9",inputText:"InputForm_inputText__1Z5mb",inputBox:"InputForm_inputBox__3rUwl",passwordControl:"InputForm_passwordControl__20CL3",view:"InputForm_view__1tY8Q"}},16:function(e,t,n){e.exports={globalTitleBox:"Registration_globalTitleBox__382nq",listTitleBox:"Registration_listTitleBox__2emNj",formWrap:"Registration_formWrap__3euNu",buttonsContainer:"Registration_buttonsContainer__3oPDd",buttonContainer:"Registration_buttonContainer__2t7YS",error:"Registration_error__2XiOz"}},18:function(e,t,n){e.exports={globalTitleBox:"NewPassword_globalTitleBox__7spSr",listTitleBox:"NewPassword_listTitleBox__2HQBk",formWrap:"NewPassword_formWrap__1cALo",cardText:"NewPassword_cardText__1NZQM",buttonContainer:"NewPassword_buttonContainer__iZLja"}},19:function(e,t,n){e.exports={globalTitleBox:"CheckEmail_globalTitleBox__1INBY",cardImgBlock:"CheckEmail_cardImgBlock__2sBn8",imgCard:"CheckEmail_imgCard__1N20T",rotate:"CheckEmail_rotate__4yGiG",cardText:"CheckEmail_cardText__3Gil1",listTitleBox:"CheckEmail_listTitleBox__2W8X1"}},27:function(e,t,n){e.exports={container:"CardContainer_container__24Ron",boxForm:"CardContainer_boxForm__15yre",rotate:"CardContainer_rotate__1d_rG"}},28:function(e,t,n){e.exports={modalInner:"IsLoading_modalInner__1R8j5",isLoadingBlock:"IsLoading_isLoadingBlock__oQSuX","is-loading":"IsLoading_is-loading__1Lo8h"}},30:function(e,t,n){e.exports={buttonContainerCancel:"ButtonFormCancel_buttonContainerCancel__25rzs",buttonCancel:"ButtonFormCancel_buttonCancel__3s0EY"}},39:function(e,t,n){e.exports={globalTitle:"GlobalTitle_globalTitle__7KIP_"}},40:function(e,t,n){e.exports={listTitle:"ListTitle_listTitle__2YuOa"}},41:function(e,t,n){e.exports={buttonSubmitColor:"ButtonFormColor_buttonSubmitColor__3w8my"}},50:function(e,t,n){},51:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(21),i=n.n(o),c=(n(49),n(50),n(51),n(14)),s=n(2),l=n(9),d=n(13),j=n.n(d),u=n(27),b=n.n(u),x=n(0),O=function(e){return Object(x.jsx)("div",{className:b.a.container,children:Object(x.jsx)("div",{className:b.a.boxForm,children:e.children})})},p=n(39),m=n.n(p),h=function(){return Object(x.jsx)("h1",{className:m.a.globalTitle,children:"It-incubator"})},g=n(40),_=n.n(g),f=function(e){return Object(x.jsx)("h2",{className:_.a.listTitle,children:e.text})},T=n(15),C=n.n(T),A=function(e){var t=e.inputType,n=e.text,a=e.onChangeText,o=e.placeholder,i=e.title,c=e.pattern,s=e.value,d=Object(r.useState)(!1),j=Object(l.a)(d,2),u=j[0],b=j[1],O="email"===t?"email":u?"text":"password",p=u?C.a.passwordControl:"".concat(C.a.passwordControl," ").concat(C.a.view);return Object(x.jsxs)("label",{className:C.a.formItem,children:[Object(x.jsx)("p",{className:C.a.inputText,children:n}),Object(x.jsxs)("div",{className:C.a.inputBox,children:[Object(x.jsx)("input",{className:C.a.input,type:O,placeholder:o,title:i,pattern:c,value:s,onChange:function(e){a&&a(e.currentTarget.value)},required:!0}),"password"===t&&Object(x.jsx)("button",{className:p,onClick:function(){b((function(e){return!e}))}})]})]})},v=n(41),E=n.n(v),N=function(e){return Object(x.jsx)("button",{className:E.a.buttonSubmitColor,type:"submit",onClick:e.onClick,disabled:e.disabled,children:e.text})},w=n(28),S=n.n(w),B=function(){return Object(x.jsx)("div",{className:S.a.modalInner,children:Object(x.jsx)("div",{className:S.a.isLoadingBlock})})},R=n(5),I=n(4),y=n(42),G=n.n(y).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0,headers:{"API-KEY":""}}),L=function(e){return G.post("/auth/login",e)},P=function(e){return G.post("/auth/register",e)},k=function(e){return G.post("/auth/forgot",e)},F={isLoading:!1},U=function(e){return{type:"APP/SET-IS-LOADING",isLoading:e}},D={isLoggedIn:!1,error:"",userData:{created:"",email:"",isAdmin:!1,name:"",publicCardPacksCount:0,rememberMe:!1,token:"",tokenDeathTime:0,updated:"",verified:!1}},Q=function(e){return{type:"LOGIN/SET-LOGGED",isLoggedIn:e}},z=function(e){return{type:"LOGIN/SET-ERROR",error:e}},W=function(e){return e.registration.error},Y=function(e){return e.registration.registered},M=function(e){return e.app.isLoading},J=function(e){return e.loginization.isLoggedIn},K=function(e){return e.loginization.error},X=function(e){return e.password.isSended},Z=function(e){return e.password.error},H=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),i=Object(l.a)(o,2),d=i[0],u=i[1],b=Object(r.useState)(!1),p=Object(l.a)(b,2),m=p[0],g=p[1],_=Object(R.b)(),T=Object(R.c)(K),C=Object(R.c)(J),v=Object(R.c)(M);return C?Object(x.jsx)(s.a,{to:he.PROFILE}):Object(x.jsxs)(x.Fragment,{children:[v&&Object(x.jsx)(B,{}),Object(x.jsx)(O,{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:j.a.globalTitleBox,children:Object(x.jsx)(h,{})}),Object(x.jsx)("div",{className:j.a.listTitleBox,children:Object(x.jsx)(f,{text:"Sign In"})}),Object(x.jsxs)("form",{className:j.a.formWrap,onSubmit:function(e){var t;e.preventDefault(),_((t={email:n,password:d,rememberMe:m},function(e){e(U(!0)),L(t).then((function(t){e(U(!1)),e(Q(!0)),e(function(e){return{type:"LOGIN/SET-USER-DATA",data:e}}(t.data))})).catch((function(t){e(U(!1)),e(Q(!1)),e(z(t.response.data.error))}))}))},action:"",method:"",children:[Object(x.jsx)(A,{text:"Email",inputType:"email",placeholder:"Please enter email",title:"Please enter email",value:n,onChangeText:function(e){a(e),T&&_(z(""))}}),Object(x.jsx)(A,{text:"Password",inputType:"password",placeholder:"Please enter password",pattern:"(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}",title:"the password must be at least 6 characters long including, one number, one capital letter, one small letter, and one of the special characters ! @ # $% ^ & *",value:d,onChangeText:function(e){u(e),T&&_(z(""))}}),Object(x.jsx)("input",{type:"checkbox",checked:m,onChange:function(){g(!m)}}),T&&Object(x.jsx)("p",{className:j.a.error,children:T}),Object(x.jsx)("div",{className:j.a.linkWrap,children:Object(x.jsx)(c.b,{className:j.a.passForgot,to:he.PASSWORD_RECOVERY,children:"Forgot password"})}),Object(x.jsx)("div",{className:j.a.buttonContainer,children:Object(x.jsx)(N,{text:"Login",type:"submit"})}),Object(x.jsx)("p",{className:j.a.formText,children:"Don\u2019t have an account?"})]}),Object(x.jsx)(c.b,{className:j.a.linkCardBottom,to:he.REGISTRATION,children:"Sign Up"})]})})]})},V=function(){return Object(x.jsx)("div",{})},q=n(18),$=n.n(q),ee=function(){var e=Object(s.h)().token;return alert(e),Object(x.jsx)("div",{children:Object(x.jsx)(O,{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:$.a.globalTitleBox,children:Object(x.jsx)(h,{})}),Object(x.jsx)("div",{className:$.a.listTitleBox,children:Object(x.jsx)(f,{text:"Create new password"})}),Object(x.jsxs)("form",{className:$.a.formWrap,action:"",method:"",children:[Object(x.jsx)(A,{text:"",inputType:"password",placeholder:"Password",title:"the password must be at least 6 characters long including, one number, one capital letter, one small letter, and one of the special characters ! @ # $% ^ & *",pattern:"(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}"}),Object(x.jsx)("p",{className:$.a.cardText,children:"Create new password and we will send you further instructions to email"}),Object(x.jsx)("div",{className:$.a.buttonContainer,children:Object(x.jsx)(N,{text:"Create new password"})})]})]})})})},te=n(12),ne=n.n(te),re=n(19),ae=n.n(re),oe=function(e){return Object(x.jsx)(O,{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:ae.a.globalTitleBox,children:Object(x.jsx)(h,{})}),Object(x.jsx)("div",{className:ae.a.cardImgBlock,children:Object(x.jsx)("img",{className:ae.a.imgCard,src:"data:image/png;base64,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",alt:""})}),Object(x.jsx)("div",{className:ae.a.listTitleBox,children:Object(x.jsx)(f,{text:"Check Email"})}),Object(x.jsxs)("p",{className:ae.a.cardText,children:["We\u2019ve sent an Email with instructions to ",e.email]})]})})},ie={isSended:!1,error:""},ce=function(e){return{type:"PASS/SET-IS-SENDED",isSended:e}},se=function(){var e=Object(R.b)(),t=Object(R.c)(X),n=Object(R.c)(Z),a=Object(R.c)(M),o=Object(r.useState)(""),i=Object(l.a)(o,2),s=i[0],d=i[1];return Object(x.jsxs)(x.Fragment,{children:[a&&Object(x.jsx)(B,{}),t?Object(x.jsx)(oe,{email:s}):Object(x.jsx)(O,{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:ne.a.globalTitleBox,children:Object(x.jsx)(h,{})}),Object(x.jsx)("div",{className:ne.a.listTitleBox,children:Object(x.jsx)(f,{text:"Forgot your password?"})}),Object(x.jsxs)("form",{className:ne.a.formWrap,onSubmit:function(t){t.preventDefault(),e(function(e){return function(t){t(U(!0)),k({email:e,from:"test-front-admin <lonely__wind@mail.ru>",message:'<div style={{ backgroundColor: "lime", padding: "15px"}}>Password recovery link:<link href=\'https://matumba125.github.io/friday/#/new-password/$token$\'>Click Here</link></div>'}).then((function(){t(U(!1)),t(ce(!0))})).catch((function(e){t(U(!1)),t(ce(!1)),t({type:"PASS/SET-ERROR",error:e.response.data.error})}))}}(s))},action:"",method:"",children:[Object(x.jsx)(A,{text:"",inputType:"email",placeholder:"Email",title:"Please enter your email",value:s,onChangeText:function(e){d(e)}}),n&&Object(x.jsx)("p",{className:ne.a.error,children:n}),Object(x.jsx)("p",{className:"".concat(ne.a.cardText," ").concat(ne.a.cardTextTop),children:"Enter your email address and we will send you further instructions"}),Object(x.jsx)("div",{className:ne.a.buttonContainer,children:Object(x.jsx)(N,{text:"Send Instructions"})}),Object(x.jsx)("p",{className:"".concat(ne.a.cardText," ").concat(ne.a.cardTextBottom),children:"Did you remember your password?"})]}),Object(x.jsx)(c.b,{className:ne.a.linkCardBottom,to:he.LOGIN,children:"Try logging in"})]})})]})},le=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"DAROVA"})})},de=n(16),je=n.n(de),ue=n(30),be=n.n(ue),xe=function(e){var t=Object(s.g)();return Object(x.jsx)("div",{className:be.a.buttonContainerCancel,children:Object(x.jsx)("button",{className:be.a.buttonCancel,type:"submit",disabled:e.disabled,onClick:function(e){e.preventDefault(),t.goBack()},children:"Cancel"})})},Oe={error:"",registered:!1},pe=function(e){return{type:"REG/ERROR",error:e}},me=function(){var e=Object(R.b)(),t=Object(R.c)(W),n=Object(R.c)(Y),a=Object(R.c)(M),o=Object(r.useState)(""),i=Object(l.a)(o,2),c=i[0],d=i[1],j=Object(r.useState)(""),u=Object(l.a)(j,2),b=u[0],p=u[1],m=Object(r.useState)(""),g=Object(l.a)(m,2),_=g[0],T=g[1],C=Object(r.useState)(!1),v=Object(l.a)(C,2),E=v[0],w=v[1];return n?Object(x.jsx)(s.a,{to:he.LOGIN}):Object(x.jsxs)(x.Fragment,{children:[a&&Object(x.jsx)(B,{}),Object(x.jsx)(O,{children:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:je.a.globalTitleBox,children:Object(x.jsx)(h,{})}),Object(x.jsx)("div",{className:je.a.listTitleBox,children:Object(x.jsx)(f,{text:"Sign Up"})}),Object(x.jsxs)("form",{className:je.a.formWrap,action:"",method:"",children:[Object(x.jsx)(A,{text:"Email",inputType:"email",placeholder:"Please enter email",title:"Please enter email",value:c,onChangeText:function(n){d(n),t&&e(pe(""))}}),Object(x.jsx)(A,{text:"Password",inputType:"password",placeholder:"Please enter password",pattern:"(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}",title:"the password must be at least 6 characters long including, one number, one capital letter, one small letter.",value:b,onChangeText:function(e){p(e)}}),Object(x.jsx)(A,{text:"\u0421onfirm password",inputType:"password",placeholder:"Please confirm password",pattern:"(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}",title:"Please confirm password",value:_,onChangeText:function(e){T(e),w(!1)}}),t&&Object(x.jsx)("p",{className:je.a.error,children:t}),E&&Object(x.jsx)("p",{className:je.a.error,children:"Passwords don't match"}),Object(x.jsxs)("div",{className:je.a.buttonsContainer,children:[Object(x.jsx)(xe,{}),Object(x.jsx)("div",{className:je.a.buttonContainer,children:Object(x.jsx)(N,{text:"Register",onClick:function(){var t;b===_?e((t={email:c,password:b},function(e){e(U(!0)),P(t).then((function(){e({type:"REG/SET-REGISTERED",registered:!0}),e(pe("")),e(U(!1))})).catch((function(t){e(pe(t.response.data.error)),e(U(!1))}))})):w(!0)}})})]})]})]})})]})},he={LOGIN:"/login",NOT_FOUND:"/404",NEW_PASSWORD:"/new-password",PASSWORD_RECOVERY:"/password-recovery",PROFILE:"/profile",REGISTRATION:"/registration"},ge=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(s.d,{children:[Object(x.jsx)(s.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(s.a,{to:he.LOGIN})}}),Object(x.jsx)(s.b,{path:he.LOGIN,render:function(){return Object(x.jsx)(H,{})}}),Object(x.jsx)(s.b,{path:he.NOT_FOUND,render:function(){return Object(x.jsx)(V,{})}}),Object(x.jsx)(s.b,{path:he.NEW_PASSWORD,render:function(){return Object(x.jsx)(ee,{})}}),Object(x.jsx)(s.b,{path:he.PASSWORD_RECOVERY,render:function(){return Object(x.jsx)(se,{})}}),Object(x.jsx)(s.b,{path:he.PROFILE,render:function(){return Object(x.jsx)(le,{})}}),Object(x.jsx)(s.b,{path:he.REGISTRATION,render:function(){return Object(x.jsx)(me,{})}})]})})};var _e=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(c.a,{children:Object(x.jsx)(ge,{})})})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))},Te=n(23),Ce=n(44),Ae={},ve=Object(Te.b)({password:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PASS/SET-IS-SENDED":return Object(I.a)(Object(I.a)({},e),{},{isSended:t.isSended});case"PASS/SET-ERROR":return Object(I.a)(Object(I.a)({},e),{},{error:t.error});default:return e}},loginization:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET-ERROR":return Object(I.a)(Object(I.a)({},e),{},{error:t.error});case"LOGIN/SET-LOGGED":return Object(I.a)(Object(I.a)({},e),{},{isLoggedIn:t.isLoggedIn});case"LOGIN/SET-USER-DATA":return Object(I.a)(Object(I.a)({},e),{},{userData:t.data})}return e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae;return e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REG/ERROR":return Object(I.a)(Object(I.a)({},e),{},{error:t.error});case"REG/SET-REGISTERED":return Object(I.a)(Object(I.a)({},e),{},{registered:t.registered});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-IS-LOADING":return Object(I.a)(Object(I.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),Ee=Object(Te.c)(ve,Object(Te.a)(Ce.a));i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(R.a,{store:Ee,children:Object(x.jsx)(_e,{})})}),document.getElementById("root")),fe()}},[[77,1,2]]]);
//# sourceMappingURL=main.d44987e6.chunk.js.map