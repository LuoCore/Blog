/* empty css              */import{d as T,r as c,v as D,o as j,m as q,w as t,g as o,j as d,f as G,k as J,Q as a,B as M,C as W,I as A,n as F,J as H,K as X,x as Y,T as Z,a5 as ee,M as oe,h as le,_ as te}from"./index-639ed9af.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{b as ae,c as ne,d as se}from"./basic-78b47728.js";import{_ as ie}from"./DialogEditRoleInfo.vue_vue_type_script_setup_true_lang-95134bfe.js";import{_ as re}from"./DialogPrivileges.vue_vue_type_script_setup_true_lang-dd2c869c.js";import{u as z}from"./useConfirm-cdf4438b.js";import{u as R}from"./useLoading-7d3c9d4b.js";/* empty css              */const ce=[{title:"选项",width:"55px",type:"checkbox",fixed:"left"},{key:"roleId",title:"角色Id",width:"80px",align:"center"},{key:"roleName",title:"角色名",align:"center"},{key:"companyName",title:"公司名称",align:"center"},{title:"操作",width:"200px",customSlot:"operator",key:"operator",fixed:"right"}],de={class:"table-box"},ue=T({__name:"index",setup(me){const p=c(!1),y=c(),v=D({current:1,limit:10,total:4}),g=c([]),i=D({roleId:0,roleName:""});function w(){i.roleId=0,i.roleName=""}function m(){v.current=1,I(v)}const I=async l=>{p.value=!0;try{const e=await ae({requestData:i,currentPageNum:l.current,pageSize:l.limit});if(!e||!e.isSuccess)return;e.responseData?(g.value=e.responseData,l.total=e.pageCount):g.value=[]}finally{p.value=!1}},S=(l,e)=>{a.msg(`字段${l} - 排序${e}, 你可以利用 sort-change 实现服务端排序`)},x=c({...{roleId:0,roleName:"",menuIds:[]}}),f=c(!1),h=l=>{l&&l!=null&&(x.value={roleId:l.roleId,roleName:l.roleName,menuIds:l.menuIds}),f.value=!f.value},_=c(!1),C=c(),V=l=>{(!l||l==null)&&a.msg("无法获取到该角色信息！"),C.value=l,_.value=!_.value};function $(){const l=y.value.map(e=>parseInt(e));if(l.length==0){a.msg("您未选择数据，请先选择要删除的数据",{icon:3,time:2e3});return}z(a,"您将删除所有选中的数据？",e=>{R(a,"正在删除数据....",async u=>{try{const s=await ne(l);s.isSuccess?a.msg("您已成功删除",{icon:1}):a.msg("删除失败"+(s==null?void 0:s.message),{icon:2}),m()}finally{a.close(e),a.close(u)}})})}function B(l){z(a,"您将删除所有选中的数据？",e=>{R(a,"正在删除数据....",async u=>{try{const s=await se(l.roleId);s.isSuccess?a.msg("您已成功删除",{icon:1}):a.msg("删除失败"+(s==null?void 0:s.message),{icon:2}),m()}finally{a.close(e),a.close(u)}})})}function U(){a.msg("您已取消操作")}return(l,e)=>{const u=M,s=W,b=A,r=F,K=H,P=X,E=Y,k=Z,L=ee,O=oe,Q=le;return j(),q(Q,{fluid:"true",class:"role-box"},{default:t(()=>[o(E,null,{default:t(()=>[o(P,{style:{"margin-top":"10px"}},{default:t(()=>[o(K,null,{default:t(()=>[o(b,{md:5},{default:t(()=>[o(s,{label:"角色Id","label-width":"80"},{default:t(()=>[o(u,{type:"number",modelValue:i.roleId,"onUpdate:modelValue":e[0]||(e[0]=n=>i.roleId=n),placeholder:"请输入",size:"sm","allow-clear":!0,style:{width:"98%"}},null,8,["modelValue"])]),_:1})]),_:1}),o(b,{md:5},{default:t(()=>[o(s,{label:"角色名称","label-width":"80"},{default:t(()=>[o(u,{modelValue:i.roleName,"onUpdate:modelValue":e[1]||(e[1]=n=>i.roleName=n),placeholder:"请输入",size:"sm","allow-clear":!0,style:{width:"98%"}},null,8,["modelValue"])]),_:1})]),_:1}),o(b,{md:5},{default:t(()=>[o(s,{"label-width":"20"},{default:t(()=>[o(r,{style:{"margin-left":"20px"},type:"normal",size:"sm",onClick:m},{default:t(()=>[d(" 查询 ")]),_:1}),o(r,{size:"sm",onClick:w},{default:t(()=>[d(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),G("div",de,[o(O,{id:"roleId",resize:!0,page:v,height:"100%",columns:J(ce),loading:p.value,"default-toolbar":!0,"data-source":g.value,"selected-keys":y.value,"onUpdate:selectedKeys":e[3]||(e[3]=n=>y.value=n),onChange:I,onSortChange:S},{toolbar:t(()=>[o(r,{size:"sm",type:"primary",onClick:e[2]||(e[2]=n=>h())},{default:t(()=>[o(k,{class:"layui-icon-addition"}),d(" 新增")]),_:1}),o(r,{size:"sm",onClick:$},{default:t(()=>[o(k,{class:"layui-icon-delete"}),d(" 删除 ")]),_:1})]),operator:t(({row:n})=>[o(r,{size:"xs",border:"green","border-style":"dashed",onClick:N=>h(n)},{default:t(()=>[d("编辑")]),_:2},1032,["onClick"]),o(r,{size:"xs",border:"blue","border-style":"dashed",onClick:N=>V(n)},{default:t(()=>[d("分配权限")]),_:2},1032,["onClick"]),o(L,{content:"确定要删除此角色吗?",onConfirm:N=>B(n),onCancel:U},{default:t(()=>[o(r,{size:"xs",border:"red","border-style":"dashed"},{default:t(()=>[d("删除")]),_:1})]),_:2},1032,["onConfirm"])]),_:1},8,["page","columns","loading","data-source","selected-keys"])]),o(ie,{visible:f.value,"onUpdate:visible":e[4]||(e[4]=n=>f.value=n),"form-data":x.value,onDone:m},null,8,["visible","form-data"]),o(re,{visible:_.value,"onUpdate:visible":e[5]||(e[5]=n=>_.value=n),"role-info":C.value,onDone:m},null,8,["visible","role-info"])]),_:1})}}});const ze=te(ue,[["__scopeId","data-v-c1c84f0a"]]);export{ze as default};