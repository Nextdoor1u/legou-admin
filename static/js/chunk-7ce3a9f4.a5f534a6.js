(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ce3a9f4"],{4292:function(t,e,a){"use strict";a("aa8d")},4624:function(t,e,a){"use strict";e["a"]={data:function(){return{tableData:{start:1,limit:10,total:0,layout:"->,total, sizes, prev, pager, next, jumper",size:[5,10,15,20]}}}}},"4e54":function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"h",(function(){return l})),a.d(e,"a",(function(){return c})),a.d(e,"g",(function(){return u})),a.d(e,"f",(function(){return o})),a.d(e,"d",(function(){return d}));a("99af");var i=a("b775");function n(t,e,a){return Object(i["a"])({url:"/lejuAdmin/productArticle/findArticles/".concat(t,"/").concat(e),method:"post",data:a})}function r(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/del/"+t,method:"delete"})}function s(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/changeShowStatus",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/lejuAdmin/material/uploadFileOss",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/addArticle",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/lejuAdmin/productArticle/productArticle/"+t,method:"get"})}function o(t,e){return Object(i["a"])({url:"/lejuAdmin/material/findMaterialByPage/".concat(t,"/").concat(e)})}function d(t){return Object(i["a"])({url:"/lejuAdmin/material/delMaterial/"+t,method:"delete"})}},aa8d:function(t,e,a){},ec17:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"MaterialList"},[a("el-card",{attrs:{shadow:"always","body-style":{padding:"20px"}}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[a("el-upload",{staticClass:"upload-demo",attrs:{action:"/lejuAdmin/material/uploadFileOssSave",headers:t.token,"on-success":t.imgSuccess,"before-upload":t.limitImgSize}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传素材")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)]),a("el-row",{attrs:{gutter:20}},t._l(t.materialList,(function(e){return a("el-col",{key:e.id,staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:{span:"4-8"}}},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(e.createTime))])]),a("img",{staticStyle:{width:"100%",height:"250px"},attrs:{src:e.ossUrl}}),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.del(e.id)}}},[t._v("删除")])],1)],1)})),1),a("el-pagination",{staticStyle:{"margin-top":"30px"},attrs:{"current-page":t.tableData.start,"page-sizes":t.tableData.size,"page-size":t.tableData.limit,layout:t.tableData.layout,total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},n=[],r=a("4e54"),s=a("4624"),l=a("2f4d"),c={name:"MaterialList",mixins:[s["a"]],data:function(){return{materialList:[],token:{token:Object(l["b"])()}}},created:function(){},mounted:function(){this.getMaterialList()},methods:{getMaterialList:function(){var t=this;Object(r["f"])(this.tableData.start,this.tableData.limit).then((function(e){t.materialList=e.data.rows,t.tableData.total=e.data.total,console.log(t.tableData.total)}))},imgSuccess:function(t){t.success&&(this.$message.success("上传素材成功"),this.getMaterialList())},limitImgSize:function(t){return!(t.size>512e3)||(this.$message.success("图片要小于500kb"),!1)},del:function(t){var e=this;Object(r["d"])(t).then((function(t){console.log(t),t.success&&(e.$message.success("删除成功"),e.getMaterialList())}))},handleSizeChange:function(t){this.tableData.limit=t,this.getMaterialList()},handleCurrentChange:function(t){this.tableData.start=t,this.getMaterialList()}}},u=c,o=(a("4292"),a("2877")),d=Object(o["a"])(u,i,n,!1,null,"3366d492",null);e["default"]=d.exports}}]);