import{ab as s}from"./index-dfc0ddb4.js";function r(e){return s.post("/api/Basic/GetTreeTableMenuInfos",e,{headers:{"Content-Type":"application/json;charset=UTF-8"}})}function o(){return s.get("/api/Basic/GetComboBoxTreeMenuInfos")}function a(e){return s.put("/api/Basic/EditMenuInfo",e)}function i(e){return s.delete("/api/Basic/DeleteMenuInfoByMenuId",{params:{menuId:e}})}function c(e){return s.post("/api/Basic/GetUserInfoPageList",e)}function u(e){return s.patch("/api/Basic/UserResetPassword",void 0,{params:{userId:e}})}function f(e){return s.put("/api/Basic/EditUserInfo",e)}function l(e){return s.delete("/api/Basic/DeleteUserByUserId",{params:{userId:e}})}function I(e){return s.delete("/api/Basic/DeleteUserByUserIds",{data:e})}function d(){return s.get("/api/Basic/GetRoleInfos")}function p(e){return s.post("/api/Basic/GetRoleInfoList",e)}function B(e){return s.put("/api/Basic/EditRoleInfo",e)}function R(e){return s.delete("/api/Basic/DeleteRoleInfoByRoleId",{params:{roleId:e}})}function U(e){return s.delete("/api/Basic/DeleteRoleInfoByRoleIds",{data:e})}function y(e){return s.patch("/api/Basic/UpdateRoleMenuByRoleId",e)}export{i as D,a as E,r as G,y as U,o as a,p as b,U as c,R as d,B as e,c as f,u as g,I as h,l as i,d as j,f as k};
