webpackJsonp([9],{QVb9:function(s,t){},qFJK:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={name:"Message",components:{Header:a("Cz8s").a},data:function(){return{userName:"",userImg:"",List:[{ClassNmae:"iconfont icon--",names:"我的订单",path:"/order",clolr:""},{ClassNmae:"iconfont icon-shangchengjifenshangcheng_xuanzhong",names:"积分商城",path:"/",clolr:"rgb(252, 123, 83)"},{ClassNmae:"iconfont icon-huangguanwangguanhuiyuanshenfendengjirenzhengxianxing",names:"饿了么会员卡",path:"/",clolr:"rgb(255, 198, 54)"}],Arr:[{ClassNmae:"iconfont icon-fuwuzhongxin",names:"服务中心",path:"/",clolr:"#6ac20b"},{ClassNmae:"iconfont icon-xiazaiAPP",names:"下载饿了么APP",path:"/",clolr:"#3399ff"}],bsys:!1}},methods:{},mounted:function(){var s=this,t=this.$store.state.log.id;this.axios.get("http://elm.cangdu.org/v1/user?user_id="+t).then(function(t){s.userName=t.data.username}),this.axios.get("http://elm.cangdu.org/img/default.jpg").then(function(t){console.log(t),s.userImg=t.config.url}),localStorage.log?this.bsys=!0:this.bsys=!1,new IScroll(".Message-box-one",{})}},n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"Message-box"},[a("Header",{staticClass:"header"},[a("van-icon",{attrs:{slot:"first",tag:"router-link",to:"/",name:"arrow-left",info:""},slot:"first"}),s._v(" "),a("p",{attrs:{slot:"mid"},slot:"mid"},[s._v("我的")]),s._v(" "),a("p",{attrs:{slot:"last"},slot:"last"})],1),s._v(" "),a("div",{staticClass:"Message-box-one"},[a("div",[a("router-link",{staticClass:"message-Id",attrs:{tag:"section",to:"/my_message"}},[a("div",[a("img",{attrs:{src:this.userImg,alt:""}})]),s._v(" "),a("div",[a("p",[a("b",[s._v(s._s(this.userName))])]),s._v(" "),a("p",[a("span",{staticClass:"el-icon-mobile-phone"}),s._v(" "),""==this.$store.state.log?a("span",[s._v("暂无绑定手机号")]):s._e(),""!=this.$store.state.log?a("span",[s._v("绑定的手机号")]):s._e()])]),s._v(" "),a("van-icon",{attrs:{tag:"div",name:"arrow",color:"#fff",size:"0.37rem"}})],1),s._v(" "),s._m(0),s._v(" "),a("div",{staticClass:"Mesg_aDiv-Label"},[a("ul",s._l(s.List,function(t,e){return a("router-link",{key:e,attrs:{tag:"li",to:"/order"}},[a("p",{class:t.ClassNmae,style:{color:t.clolr}},[a("span",[s._v(s._s(t.names))])]),s._v(" "),a("van-icon",{attrs:{tag:"p",name:"arrow"}})],1)}),1),s._v(" "),a("ul",s._l(s.Arr,function(t,e){return a("router-link",{key:e,attrs:{tag:"li",to:"/"}},[a("p",{class:t.ClassNmae,style:{color:t.clolr}},[a("span",[s._v(s._s(t.names))])]),s._v(" "),a("van-icon",{attrs:{tag:"p",name:"arrow"}})],1)}),1)])],1)])],1)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"message-price"},[a("ul",[a("li",[a("p",[a("span",[a("b",[s._v("0.00")])]),s._v("元")]),s._v(" "),a("p",[s._v("我的余额")])]),s._v(" "),a("li",[a("p",[a("span",[a("b",[s._v("3")])]),s._v("个")]),s._v(" "),a("p",[s._v("我的优惠")])]),s._v(" "),a("li",[a("p",[a("span",[a("b",[s._v("0")])]),s._v("分")]),s._v(" "),a("p",[s._v("我的积分")])])])])}]};var o=a("C7Lr")(e,n,!1,function(s){a("QVb9")},null,null);t.default=o.exports}});
//# sourceMappingURL=9.3a6c6039ecca622618ad.js.map