import{d as M,r as p,W as N,X as k,o as x,m as S,w as l,f as g,g as t,j as h,z as s,B as T,C as z,Y as E,n as F,K as R,a4 as U}from"./index-d8cbdd46.js";/* empty css              *//* empty css              */import{e as $,a as q}from"./basic-6ef9ceac.js";import{u as G}from"./useLoading-886b777a.js";const j={style:{padding:"20px"}},K={style:{width:"100%","text-align":"center"}},A=M({__name:"DialogEditRoleInfo",props:{visible:{type:Boolean},formData:{}},emits:["done","update:visible"],setup(V,{emit:b}){const i=p(),m=p([]),c=V,_=b,d=N({get(){return c.visible},set(e){_("update:visible",e)}});k(()=>{console.log(`count is now: ${c.visible}`),c.visible&&w()});async function w(){try{const e=await q();if(e){if(!e.isSuccess||!e.responseData){s.msg(`获取菜单列表失败:${e.message}`,{icon:2});return}}else{s.msg("获取菜单列表失败",{icon:2});return}m.value=[],e.responseData.map(o=>{m.value.push(y(o))})}catch(e){s.msg(e.message,{icon:2})}}function y(e){const o={id:e.menuId,title:e.menuName,field:e.parentId,children:void 0};if(e.childrenMenus&&e.childrenMenus.length>0){const u=e.childrenMenus.map(n=>y(n));o.children=u}return o}const B=p({roleName:[{type:"string",required:!0,message:"账号不能为空"},{asyncValidator:async(e,o)=>{if(!o)return Promise.resolve()}}]});function C(){i.value.validate((e,o,u)=>{e&&G(s,"正在提交数据",async n=>{try{const a=await $(o);if(!a||!a.isSuccess){s.confirm(a.message||"编辑用户信息失败",{icon:2});return}s.msg(a.message||"操作成功",{icon:1}),_("done"),f()}catch(a){s.msg(a.message,{icon:2})}finally{s.close(n)}})})}function f(){d.value=!1,i.value.reset(),i.value.clearValidate()}return(e,o)=>{const u=T,n=z,a=E,v=F,D=R,I=U;return x(),S(I,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=r=>d.value=r),rules:B.value,close:f,title:"角色编辑",area:["500px","370px"]},{default:l(()=>[g("div",j,[t(D,{ref_key:"refForm",ref:i,model:e.formData},{default:l(()=>[t(n,{label:"角色名称",prop:"roleName",required:""},{default:l(()=>[t(u,{modelValue:e.formData.roleName,"onUpdate:modelValue":o[0]||(o[0]=r=>e.formData.roleName=r)},null,8,["modelValue"])]),_:1}),t(n,{label:"菜单信息",prop:"menuIds"},{default:l(()=>[t(a,{modelValue:e.formData.menuIds,"onUpdate:modelValue":o[1]||(o[1]=r=>e.formData.menuIds=r),data:m.value,placeholder:"请选择","allow-clear":!1,search:!0,multiple:!0,checkStrictly:!1},null,8,["modelValue","data"])]),_:1}),g("div",K,[t(v,{size:"sm",type:"primary",onClick:C},{default:l(()=>[h("保存")]),_:1}),t(v,{size:"sm",onClick:f},{default:l(()=>[h("取消")]),_:1})])]),_:1},8,["model"])])]),_:1},8,["modelValue","rules"])}}});export{A as _};
