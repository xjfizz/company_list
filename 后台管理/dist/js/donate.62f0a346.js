(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["donate"],{2232:function(t,e,a){"use strict";var l=a("a180"),i=a.n(l);i.a},"83e4":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-copy"}),t._v(" 新闻动态")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-select",{staticClass:"mr10",attrs:{clearable:"",placeholder:"请选择公司名"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},t._l(t.companyList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleSearch}},[t._v("搜索")]),a("el-button",{staticClass:"add-sty",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){return t.add()}}},[t._v("增加")])],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:"","header-cell-class-name":"table-header"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"state",label:"公司名"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.state?a("el-tag",{attrs:{type:"success"}},[t._v("江苏二四优递生活服务有限公司")]):2==e.row.state?a("el-tag",{attrs:{type:"warning"}},[t._v("江苏玥珮物流有限公司")]):3==e.row.state?a("el-tag",{attrs:{type:"info"}},[t._v("江苏蜗活电子商务有限公司")]):4==e.row.state?a("el-tag",{attrs:{type:"danger"}},[t._v("上海简适物业服务有限公司")]):5==e.row.state?a("el-tag",[t._v("江苏华软智能信息科技有限公司")]):t._e()]}}])}),a("el-table-column",{attrs:{prop:"title",label:"标题"}}),a("el-table-column",{attrs:{prop:"content",label:"内容",align:"center"}}),a("el-table-column",{attrs:{prop:"time",label:"日期",align:"center"}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":t.page.currentPage,"page-size":t.page.pageSize,total:t.page.total},on:{"current-change":t.handlePageChange}})],1),a("el-dialog",{attrs:{title:"增加",visible:t.addVisible,width:"30%"},on:{"update:visible":function(e){t.addVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.formAdd,"label-width":"70px"}},[a("el-form-item",{attrs:{label:"公司"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formAdd.state,callback:function(e){t.$set(t.formAdd,"state",e)},expression:"formAdd.state"}},t._l(t.companyList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.formAdd.title,callback:function(e){t.$set(t.formAdd,"title",e)},expression:"formAdd.title"}})],1),a("el-form-item",{attrs:{label:"内容"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.formAdd.content,callback:function(e){t.$set(t.formAdd,"content",e)},expression:"formAdd.content"}})],1),a("el-form-item",{attrs:{label:"日期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.formAdd.time,callback:function(e){t.$set(t.formAdd,"time",e)},expression:"formAdd.time"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.saveAdd}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"30%"},on:{"update:visible":function(e){t.editVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.formEdit,"label-width":"70px"}},[a("el-form-item",{attrs:{label:"公司"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formEdit.state,callback:function(e){t.$set(t.formEdit,"state",e)},expression:"formEdit.state"}},t._l(t.companyList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.formEdit.title,callback:function(e){t.$set(t.formEdit,"title",e)},expression:"formEdit.title"}})],1),a("el-form-item",{attrs:{label:"内容"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.formEdit.content,callback:function(e){t.$set(t.formEdit,"content",e)},expression:"formEdit.content"}})],1),a("el-form-item",{attrs:{label:"日期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.formEdit.time,callback:function(e){t.$set(t.formEdit,"time",e)},expression:"formEdit.time"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("确 定")])],1)],1)],1)])},i=[],o=a("365c"),n={name:"news",data:function(){return{searchKey:"",tableData:[],page:{currentPage:1,pageSize:10,total:0},companyList:[{value:5,label:"江苏华软智能信息科技有限公司"},{value:1,label:"江苏二四优递生活服务有限公司"},{value:2,label:"江苏玥珮物流有限公司"},{value:3,label:"江苏蜗活电子商务有限公司"},{value:4,label:"上海简适物业服务有限公司"}],addVisible:!1,editVisible:!1,formAdd:{},formEdit:{}}},mounted:function(){this.init()},methods:{init:function(){this.getList()},getList:function(){var t=this,e={page:this.page.currentPage-1,state:this.searchKey};o["a"].getNewsList(e).then((function(e){200==e.code&&(console.log("getList",e),t.tableData=e.data.rows,t.page.total=e.data.total)}))},handleSearch:function(){this.page.currentPage=1,this.getList()},add:function(){this.addVisible=!0},handleEdit:function(t,e){this.formEdit=JSON.parse(JSON.stringify(e)),this.editVisible=!0},handleDelete:function(t,e){var a=this;this.$confirm("确定要删除吗？","提示",{type:"warning"}).then((function(){a.del(e.id)})).catch((function(){}))},del:function(t){var e=this,a=[t];o["a"].delNews(a).then((function(t){200==t.code&&(e.$message.success("删除成功"),e.page.currentPage=1,e.getList())}))},handleSelectionChange:function(){},handlePageChange:function(){},saveAdd:function(){var t=this,e={state:this.formAdd.state,title:this.formAdd.title,content:this.formAdd.content,time:this.formAdd.time};o["a"].addNews(e).then((function(e){console.log(e),200==e.code&&(t.$message.success("操作成功"),t.formAdd={},t.addVisible=!1,t.page.currentPage=1,t.getList())}))},saveEdit:function(){var t=this,e={id:this.formEdit.id,state:this.formEdit.state,title:this.formEdit.title,content:this.formEdit.content,time:this.formEdit.time};o["a"].editNews(e).then((function(e){console.log(e),200==e.code&&(t.$message.success("操作成功"),t.formEdit={},t.editVisible=!1,t.page.currentPage=1,t.getList())}))}},computed:{}},s=n,r=(a("2232"),a("5511")),c=Object(r["a"])(s,l,i,!1,null,null,null);e["default"]=c.exports},a180:function(t,e,a){}}]);
//# sourceMappingURL=donate.62f0a346.js.map