import{d as C,r as y,W as M,X as B,o as V,m as N,w as i,f as g,g as c,N as S,j as p,t as K,Q as n,T,a6 as U,a7 as $,n as z,a4 as D}from"./index-5a84bdf5.js";import{U as G,a as W}from"./basic-6f2e0f19.js";import{u as v}from"./useLoading-61382632.js";const j={style:{height:"320px",overflow:"auto"}},E={style:{width:"90%","text-align":"right"}},X=C({__name:"DialogPrivileges",props:{visible:{type:Boolean},roleInfo:{}},emits:["done","update:visible"],setup(x,{emit:I}){const r=y([]),t=y([]),a=x,f=I,u=M({get(){return a.visible},set(s){f("update:visible",s)}});B(()=>{console.log(`count is now: ${a.visible}`),a.visible&&(t.value=a.roleInfo.menuIds,v(n,"正在获取菜单信息",async s=>{try{const e=await W();if(e){if(!e.isSuccess||!e.responseData){n.msg(`获取菜单列表失败:${e.message}`,{icon:2});return}}else{n.msg("获取菜单列表失败",{icon:2});return}e.responseData.map(l=>{r.value.push(_(l))})}catch(e){n.msg(e.message,{icon:2})}finally{n.close(s)}}))});function _(s){const e={id:s.menuId,title:s.menuName,icon:s.menuIcon,spread:!0,children:void 0};if(s.childrenMenus&&s.childrenMenus.length>0){const l=s.childrenMenus.map(m=>_(m));e.children=l}return e}function b(){v(n,"正在获取菜单信息",async s=>{try{const e=await G({roleId:a.roleInfo.roleId,menuIds:t.value});if(!e||!e.isSuccess){n.msg((e==null?void 0:e.message)||"操作失败",{icon:2});return}n.msg((e==null?void 0:e.message)||"操作成功",{icon:1}),d(),f("done")}catch(e){n.msg(e.message,{icon:2})}finally{n.close(s)}})}function d(){t.value=[],r.value=[],u.value=!1}return(s,e)=>{const l=T,m=U,w=$,h=z,k=D;return V(),N(k,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=o=>u.value=o),close:d,title:"分配权限",area:["500px","450px"]},{default:i(()=>[g("div",j,[c(m,{style:{"margin-left":"40px"},"tail-node-icon":!1,data:r.value,showCheckbox:!0,checkedKeys:t.value,"onUpdate:checkedKeys":e[0]||(e[0]=o=>t.value=o)},{title:i(({data:o})=>[c(l,{class:S(o.icon)},null,8,["class"]),p(" "+K(o.title),1)]),_:1},8,["data","checkedKeys"])]),c(w),g("div",E,[c(h,{size:"sm",type:"primary",onClick:b},{default:i(()=>[p("保存")]),_:1}),c(h,{size:"sm",onClick:d},{default:i(()=>[p("取消")]),_:1})])]),_:1},8,["modelValue"])}}});export{X as _};
