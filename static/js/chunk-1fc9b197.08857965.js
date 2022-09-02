(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fc9b197"],{4624:function(e,t,a){"use strict";t["a"]={data:function(){return{tableData:{start:1,limit:10,total:0,layout:"->,total, sizes, prev, pager, next, jumper",size:[5,10,15,20]}}}}},"58c3":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"permission",staticStyle:{padding:"30px"}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"20px"}}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新增角色")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.roleList,stripe:"",border:""}},[a("el-table-column",{attrs:{type:"index",label:"#",align:"center",fixed:""}}),a("el-table-column",{attrs:{prop:"roleName",label:"角色名称",align:"center",fixed:""}}),a("el-table-column",{attrs:{prop:"roleCode",label:"角色编码",align:"center"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"}}),a("el-table-column",{attrs:{prop:"createTime",label:"添加时间",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{attrs:{type:"success"},on:{click:function(a){return e.clickEdit(t.row.id)}}},[e._v("编辑")]),a("el-link",{staticStyle:{"margin-left":"20px"},attrs:{type:"danger"},on:{click:function(a){return e.delRole(t.row.id)}}},[e._v("删除")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{"current-page":e.tableData.start,"page-sizes":e.tableData.size,"page-size":e.tableData.limit,layout:e.tableData.layout,total:e.tableData.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"新增角色",visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.addRoleData,"label-width":"80px",rules:e.rules}},[a("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.addRoleData.roleName,callback:function(t){e.$set(e.addRoleData,"roleName",t)},expression:"addRoleData.roleName "}})],1),a("el-form-item",{attrs:{label:"角色编码"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.addRoleData.roleCode,callback:function(t){e.$set(e.addRoleData,"roleCode",t)},expression:"addRoleData.roleCode"}})],1),a("el-form-item",{attrs:{label:"角色描述"}},[a("el-input",{attrs:{type:"textarea",size:"mini"},model:{value:e.addRoleData.remark,callback:function(t){e.$set(e.addRoleData,"remark",t)},expression:"addRoleData.remark "}})],1),a("el-form-item",{attrs:{label:"选择菜单"}},[a("el-checkbox",{on:{change:e.handleOpenAll},model:{value:e.openAll,callback:function(t){e.openAll=t},expression:"openAll"}},[e._v("展开/关闭")]),a("el-checkbox",{on:{change:e.handleSelectAll},model:{value:e.isAll,callback:function(t){e.isAll=t},expression:"isAll"}},[e._v("全选/取消全选")]),a("el-tree",{ref:"tree",attrs:{data:e.permissionList,props:e.defaultProps,"show-checkbox":"","node-key":"id"},on:{"check-change":e.handleCheckChange}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.editRole}},[e._v("确 定")])],1)],1)],1)},i=[],n=(a("d3b7"),a("159b"),a("b6df")),s=a("4624"),o={name:"Permission",mixins:[s["a"]],data:function(){return{roleList:[],permissionList:[],ids:[],defaultProps:{label:"title"},dialogVisible:!1,addRoleData:{createTime:"",id:"",isDeleted:!1,modifyTime:"",nickName:"",password:"",roleIds:[],salt:"",username:""},rules:{roleName:[{required:!0,message:"请输入用户名称",trigger:"blur"}]},openAll:!1,isAll:!1}},created:function(){},mounted:function(){this.getRoleList()},methods:{getRoleList:function(){var e=this;Object(n["c"])(this.tableData.start,this.tableData.limit).then((function(t){e.roleList=t.data.rows,e.tableData.total=t.data.total})),Object(n["e"])().then((function(t){e.permissionList=t.data.permissionList,e.getAllNodeid(t.data.permissionList,e.ids)}))},handleSizeChange:function(e){this.tableData.limit=e,this.getRoleList()},handleCurrentChange:function(e){this.tableData.start=e,this.getRoleList()},handleOpenAll:function(e){for(var t in this.$refs.tree.store.nodesMap)this.$refs.tree.store.nodesMap[t].expanded=e},handleSelectAll:function(e){e?this.$refs.tree.setCheckedNodes(this.permissionList):this.$refs.tree.setCheckedNodes([])},handleCheckChange:function(){this.addRoleData.roleIds=this.$refs.tree.getCheckedKeys(),this.$refs.tree.getCheckedNodes().length===this.ids.length?this.isAll=!0:this.isAll=!1},getAllNodeid:function(e,t){var a=this;e.forEach((function(e){e.children&&a.getAllNodeid(e.children,t),t.push(e.id)}))},editRole:function(){var e=this;this.addRoleData.id?Object(n["h"])(this.addRoleData).then((function(t){t.success&&(e.$message.success("修改角色成功"),e.getRoleList(),e.dialogVisible=!1)})):Object(n["g"])(this.addRoleData).then((function(t){t.success&&(e.$message.success("添加角色成功"),e.getRoleList(),e.dialogVisible=!1)}))},clickEdit:function(e){var t=this;this.dialogVisible=!0,Object(n["b"])(e).then((function(e){t.addRoleData=e.data.role}))},delRole:function(e){var t=this;Object(n["f"])(e).then((function(e){console.log(e),e.success&&(t.$message.success("删除成功"),t.getRoleList())}))}}},r=o,c=a("2877"),d=Object(c["a"])(r,l,i,!1,null,"50e04e30",null);t["default"]=d.exports},b6df:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"e",(function(){return s})),a.d(t,"g",(function(){return o})),a.d(t,"h",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return d})),a.d(t,"a",(function(){return u}));a("99af");var l=a("b775");function i(e,t){return Object(l["a"])({url:"admin/sysAuth/user/findUsersByPage/".concat(e,"/").concat(t),method:"post"})}function n(e,t){return Object(l["a"])({url:"/admin/sysAuth/role/findRolesByPage/".concat(e,"/").concat(t)})}function s(){return Object(l["a"])({url:"/admin/sysAuth/index/getInitMenus"})}function o(e){return Object(l["a"])({url:"/admin/sysAuth/role/saveRolePermissions",method:"post",data:e})}function r(e){return Object(l["a"])({url:"/admin/sysAuth/role/updateRolePermissions",method:"put",data:e})}function c(e){return Object(l["a"])({url:"/admin/sysAuth/role/findRolePermissions/"+e})}function d(e){return Object(l["a"])({url:"/admin/sysAuth/role/removeRole/"+e,method:"delete"})}function u(){return Object(l["a"])({url:"/admin/sysAuth/permission/findAllPermissions"})}}}]);