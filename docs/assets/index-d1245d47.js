import{d as N,s as T,u as B,r,v as D,y as E,G as L,z as m,a as G,f as e,t as x,k as b,g as t,w as l,L as M,p as P,i as z,o as R,j as V,A as j,B as A,C as F,D as J,n as $,E as q,_ as H}from"./index-34f7f365.js";/* empty css              */const g=c=>(P("data-v-3d171321"),c=c(),z(),c),K={class:"login-wrap"},O={class:"login-root"},Q={class:"login-main"},W=g(()=>e("img",{class:"login-one-ball",src:"https://assets.codehub.cn/micro-frontend/login/fca1d5960ccf0dfc8e32719d8a1d80d2.png"},null,-1)),X=g(()=>e("img",{class:"login-two-ball",src:"https://assets.codehub.cn/micro-frontend/login/4bcf705dad662b33a4fc24aaa67f6234.png"},null,-1)),Y={class:"login-container"},Z={class:"login-side"},ee={class:"login-bg-title"},oe={style:{margin:"20px auto"}},se={class:"login-ID"},te=g(()=>e("div",{style:{"font-size":"22px","margin-bottom":"15px","margin-top":"5px"}}," 🎯 登录 ",-1)),ae={style:{height:"250px"}},le={style:{width:"264px",display:"inline-block"}},ne=["src"],ie=N({__name:"index",setup(c){const f="LuoCore",C=T(),u=B(),v=r("1"),y=r(""),_=r(!1),h=r(!1),s=D({account:{}.VITE_Login_UserName,password:{}.VITE_Login_Password,vercode:"",verifyCodeUid:""});E(()=>{w()});const k=async()=>{_.value=!0,j({loginName:s.account,loginPwd:s.password,verifyCodeUid:s.verifyCodeUid,verifyCode:s.vercode}).then(({statusCode:n,isSuccess:o,message:i,developerMessage:d,responseData:p})=>{setTimeout(()=>{_.value=!1,o?m.msg(i||"登录成功",{icon:1},async()=>{u.token=p||"",await u.loadMenus(),await u.loadPermissions(),C.push("/")}):m.msg(i||"登录失败",{icon:2})},1e3)})},w=async()=>{const n=await L();n.isSuccess?(y.value=n.responseData,s.verifyCodeUid=n.message):m.msg(n.message||"获取验证码失败",{icon:2})};return(n,o)=>{const i=A,d=F,p=J,U=$,I=q,S=M;return R(),G("div",K,[e("div",O,[e("div",Q,[W,X,e("div",Y,[e("div",Z,[e("div",ee,[e("h1",null,x(b(f))+" admin",1),e("h3",oe,x(b(f))+" 后台管理系统 ",1)])]),e("div",se,[te,t(S,{type:"brief",modelValue:v.value,"onUpdate:modelValue":o[4]||(o[4]=a=>v.value=a)},{default:l(()=>[t(I,{title:"用户名",id:"1"},{default:l(()=>[e("div",ae,[t(d,{"label-width":0},{default:l(()=>[t(i,{"allow-clear":!0,"prefix-icon":"layui-icon-username",placeholder:"用户名",modelValue:s.account,"onUpdate:modelValue":o[0]||(o[0]=a=>s.account=a)},null,8,["modelValue"])]),_:1}),t(d,{"label-width":0},{default:l(()=>[t(i,{"allow-clear":!0,"prefix-icon":"layui-icon-password",placeholder:"密码",password:"",type:"password",modelValue:s.password,"onUpdate:modelValue":o[1]||(o[1]=a=>s.password=a)},null,8,["modelValue"])]),_:1}),t(d,{"label-width":0},{default:l(()=>[e("div",le,[t(i,{"allow-clear":!0,"prefix-icon":"layui-icon-vercode",placeholder:"验证码",modelValue:s.vercode,"onUpdate:modelValue":o[2]||(o[2]=a=>s.vercode=a)},null,8,["modelValue"])]),e("div",{class:"login-captach",onClick:w},[e("img",{style:{width:"100%"},src:y.value,alt:"获取验证码"},null,8,ne)])]),_:1}),t(p,{value:"",name:"like",modelValue:h.value,"onUpdate:modelValue":o[3]||(o[3]=a=>h.value=a),skin:"primary",label:"1"},{default:l(()=>[V("记住密码")]),_:1},8,["modelValue"]),t(d,{"label-width":0},{default:l(()=>[t(U,{style:{"margin-top":"20px"},type:"primary",loading:_.value,fluid:!0,loadingIcon:"layui-icon-loading",onClick:k},{default:l(()=>[V("登录")]),_:1},8,["loading"])]),_:1})])]),_:1})]),_:1},8,["modelValue"])])])])])])}}});const re=H(ie,[["__scopeId","data-v-3d171321"]]);export{re as default};
