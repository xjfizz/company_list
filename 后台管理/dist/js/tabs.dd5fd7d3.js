(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tabs"],{4686:function(e,t,a){"use strict";var n=a("8739"),l=a.n(n);l.a},8739:function(e,t,a){},e4b4:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-copy"}),e._v(" 联系留言管理")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"手机号查询"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("搜索")])],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","header-cell-class-name":"table-header"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),a("el-table-column",{attrs:{prop:"mail",label:"电子邮件",align:"center"}}),a("el-table-column",{attrs:{prop:"content",label:"留言",align:"center"}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.page.currentPage,"page-size":e.page.pageSize,total:e.page.total},on:{"current-change":e.handlePageChange}})],1)],1)])},l=[],c=a("365c"),i={name:"message",data:function(){return{searchKey:"",tableData:[],page:{currentPage:1,pageSize:10,total:0}}},mounted:function(){this.init()},methods:{init:function(){this.getList()},getList:function(){var e=this,t={page:this.page.currentPage-1,phone:this.searchKey};c["a"].getContactList(t).then((function(t){200==t.code&&(console.log("getList",t),e.tableData=t.data.rows,e.page.total=t.data.total)}))},handleSearch:function(){this.page.currentPage=1,this.getList()},add:function(){},handleSelectionChange:function(){},handlePageChange:function(e){this.page.currentPage=e,this.getList()}},computed:{}},s=i,r=(a("4686"),a("5511")),o=Object(r["a"])(s,n,l,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=tabs.dd5fd7d3.js.map