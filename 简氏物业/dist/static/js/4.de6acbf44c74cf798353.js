webpackJsonp([4],{JcyW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("aYx4"),a=n("gyMJ"),c={name:"NewsInformation",data:function(){return{newsList:[{id:"001",title:"世界上第一个程序员",introduce:"为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机",date:"05-24",year:"2019"},{id:"002",title:"世界上第二个程序员",introduce:"为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机",date:"05-24",year:"2019"},{id:"003",title:"世界上第三个程序员",introduce:"为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机",date:"05-24",year:"2019"},{id:"004",title:"世界上第四个程序员",introduce:"为计算程序拟定“算法”，写作的第四份“程序设计流程图”，被珍视为“第一位给计算机",date:"05-24",year:"2019"},{id:"005",title:"世界上第五个程序员",introduce:"为计算程序拟定“算法”，写作的第五份“程序设计流程图”，被珍视为“第一位给计算机",date:"05-24",year:"2019"},{id:"006",title:"世界上第六个程序员",introduce:"为计算程序拟定“算法”，写作的第五份“程序设计流程图”，被珍视为“第一位给计算机",date:"05-24",year:"2019"}]}},mounted:function(){(new i.WOW).init(),this.init()},methods:{init:function(){this.getProduct()},getProduct:function(){var t=this;a.a.dynamic.getDynamictList({state:4}).then(function(e){200==e.code&&(t.newsList=e.data.map(function(t){return{id:t.id,title:t.title,introduce:t.content,date:t.time.substring(5,10),year:t.time.substring(0,4)}}),console.log("this.navList",t.navList))})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"NewsInformation"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",{staticClass:"news-container container-fuild"},t._l(t.newsList,function(e,i){return n("li",{key:i,staticClass:"wow fadeIn"},[n("div",{staticClass:"content"},[n("p",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.introduce))])]),t._v(" "),n("div",{staticClass:"time"},[n("p",[t._v(t._s(e.date))]),t._v(" "),n("span",[t._v(t._s(e.year))])]),t._v(" "),t._m(2,!0)])}),0),t._v(" "),t._m(3)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container text-center"},[e("h3",[this._v("公司动态")]),this._v(" "),e("p",{staticStyle:{color:"#b2b2b2"}},[this._v("Company News")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav container text-center"},[e("a",{staticClass:"active",attrs:{href:"#"}},[this._v("公司动态")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"circle"},[e("img",{attrs:{src:n("mDJx")}}),this._v(" "),e("i",{staticClass:"line center-block"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contaianer-fuild text-center more"},[e("i",{staticClass:"glyphicon glyphicon-th"})])}]};var r=n("C7Lr")(c,s,!1,function(t){n("WWTq")},"data-v-4e9324bd",null);e.default=r.exports},WWTq:function(t,e){},mDJx:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=4.de6acbf44c74cf798353.js.map