(this.webpackJsonpfriday=this.webpackJsonpfriday||[]).push([[0],{11:function(e,n,t){e.exports={superInput:"SuperInputText_superInput__2MNAu",errorInput:"SuperInputText_errorInput__2ii5r",error:"SuperInputText_error__1_pl1"}},15:function(e,n,t){e.exports={default:"SuperButton_default__Ncch0",red:"SuperButton_red__3plR2"}},16:function(e,n,t){e.exports={checkbox:"SuperCheckbox_checkbox__2D53o",spanClassName:"SuperCheckbox_spanClassName__26F15"}},21:function(e,n,t){e.exports={select:"SuperSelect_select__3g0sn"}},22:function(e,n,t){e.exports={superSpan:"SuperEditableSpan_superSpan__2-3cr"}},29:function(e,n,t){},30:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(18),s=t.n(a),o=(t(29),t(30),t(23)),u=t(2),j=t(0),i=function(){return Object(j.jsx)("div",{})},p=function(){return Object(j.jsx)("div",{})},b=function(){return Object(j.jsx)("div",{})},l=function(){return Object(j.jsx)("div",{})},O=function(){return Object(j.jsx)("div",{})},x=function(){return Object(j.jsx)("div",{})},h="/login",d="/404",f="/new-password",C="/password-recovery",g="/profile",m="/registration",_=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:h,render:function(){return Object(j.jsx)(i,{})}}),Object(j.jsx)(u.a,{path:d,render:function(){return Object(j.jsx)(p,{})}}),Object(j.jsx)(u.a,{path:f,render:function(){return Object(j.jsx)(b,{})}}),Object(j.jsx)(u.a,{path:C,render:function(){return Object(j.jsx)(l,{})}}),Object(j.jsx)(u.a,{path:g,render:function(){return Object(j.jsx)(O,{})}}),Object(j.jsx)(u.a,{path:m,render:function(){return Object(j.jsx)(x,{})}})]})})},v=t(6),N=t(5),y=t(11),S=t.n(y),k=function(e){e.type;var n=e.onChange,t=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=(e.className,e.spanClassName),o=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(S.a.error," ").concat(s||""),i="".concat(e.error?S.a.errorInput:S.a.superInput?S.a.superInput:"");return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(v.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:i},o)),a&&Object(j.jsx)("span",{className:u,children:a})]})},F=t(15),I=t.n(F),T=function(e){var n=e.red,t=e.className,c=Object(N.a)(e,["red","className"]),r="".concat(n?I.a.red:I.a.default," ").concat(t);return Object(j.jsx)("button",Object(v.a)({className:r},c))},E=t(21),B=t.n(E),P=function(e){var n=e.options,t=e.onChange,c=e.onChangeOption,r=Object(N.a)(e,["options","onChange","onChangeOption"]),a=n?n.map((function(e,n){return Object(j.jsxs)("option",{id:"sel",value:e,children:[" ",e]},e+"-"+n)})):[];return Object(j.jsx)("div",{className:B.a.select,children:Object(j.jsx)("select",Object(v.a)(Object(v.a)({onChange:function(e){t&&t(e),c&&c(e.currentTarget.value)}},r),{},{children:a}))})},w=t(16),D=t.n(w),K=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(D.a.checkbox," ").concat(c||"");return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",Object(v.a)({type:"checkbox",onChange:function(e){n&&n(e),t&&t(!!e)},className:s},a)),r&&Object(j.jsx)("span",{className:D.a.spanClassName,children:r})]})},A=function(e){e.type;var n=e.name,t=e.options,c=e.value,r=e.onChange,a=e.onChangeOption,s=(Object(N.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),a&&a(e.currentTarget.value)}),o=t?t.map((function(e,t){return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:n,checked:e===c,value:e,onChange:s}),e]},n+"-"+t)})):[];return Object(j.jsx)(j.Fragment,{children:o})},J=t(24),L=t(22),M=t.n(L),R=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,r=e.spanProps,a=Object(N.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),o=Object(J.a)(s,2),u=o[0],i=o[1],p=r||{},b=p.children,l=p.onDoubleClick,O=(p.className,Object(N.a)(p,["children","onDoubleClick","className"])),x="".concat(M.a.superSpan);return Object(j.jsx)(j.Fragment,{children:u?Object(j.jsx)(k,Object(v.a)({autoFocus:!0,onBlur:function(e){i(!1),n&&n(e)},onEnter:function(){i(!1),t&&t()}},a)):Object(j.jsx)("span",Object(v.a)(Object(v.a)({onDoubleClick:function(e){i(!0),l&&l(e)},className:x},O),{},{children:b||a.value}))})},q=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{}),Object(j.jsx)(T,{}),Object(j.jsx)(P,{}),Object(j.jsx)(K,{}),Object(j.jsx)(A,{}),Object(j.jsx)(R,{})]})};var z=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(_,{}),Object(j.jsx)(q,{})]})})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root")),G()}},[[37,1,2]]]);
//# sourceMappingURL=main.9f25b144.chunk.js.map