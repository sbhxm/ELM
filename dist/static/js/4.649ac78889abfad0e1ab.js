webpackJsonp([4],{XQWi:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});i("hksX");var e={name:"shopDetails",comments:{},data:function(){return{faln:!0,list:[],arr:[],array:[],iN:-1,arrayAll:[],arrayAllTow:[],price:"",show:!1,ballShow:!1,Gap:!1}},methods:{Faln:function(){this.faln=!0},Fal:function(){this.faln=!1},chengeColor:function(t){this.iN=t},AllPowerful:function(t,s,i){!function(t){var s=document.createElement("div");s.className="ballFather",document.body.appendChild(s);var i=document.createElement("div");i.className="ballSon",s.appendChild(i);var e=t.clientY,a=t.clientX;s.style.left=a+"px",s.style.top=e+"px";var o=window.innerHeight-e;s.style.webkitTransform="translateY("+o+"px)",s.style.transform="translateY("+o+"px)",i.style.webkitTransform="translateX(-"+(a-10)+"px)",i.style.transform="translateX(-"+(a-10)+"px)",setTimeout(function(){document.querySelector(".sc").classList.add("animation"),setTimeout(function(){document.querySelector(".sc").classList.remove("animation")},400)},500)}(t),s.is_featured++;var e=this.arrayAll.findIndex(function(t){return t.name==s.name});-1==e?(this.arrayAll.push(s),this.$store.commit("towshop",this.arrayAll),this.$store.commit("price",i)):this.arrayAll[e].is_featured++,this.arrayAllTow=this.$store.state.towshop,this.price=this.$store.state.price;var a=0,o=0;for(s=0;s<this.list.length;s++)for(var r=0;r<this.list[s].foods.length;r++)a+=this.list[s].foods[r].is_featured*this.price,o+=this.list[s].foods[r].is_featured;this.$store.commit("sum",a),this.$store.commit("subAll",o),this.$store.state.sum>5?(this.Gap=!0,this.$refs.ColorBlue.style.backgroundColor="#3190e8",this.$refs.ColorGreen.style.backgroundColor=" #56d176",this.ballShow=!0):this.ballShow=!1},Minus:function(t){if(t.is_featured--,this.$store.state.subAll--,this.$store.state.subAll<1)this.$refs.ColorBlue.style.backgroundColor="#3d3d3f",this.$refs.ColorGreen.style.backgroundColor="#535356",this.$store.state.sum=0,this.ballShow=!1,this.Gap=!1;else{this.ballShow=!0;var s=0,i=0;for(t=0;t<this.list.length;t++)for(var e=0;e<this.list[t].foods.length;e++)s+=this.list[t].foods[e].is_featured*this.price,i+=this.list[t].foods[e].is_featured;this.$store.commit("sum",s),this.$store.commit("subAll",i)}},faA:function(t){this.$store.state.subAll--;for(var s=0;s<this.arrayAllTow.length;s++)this.arrayAllTow[s].item_id==t.item_id&&(this.arrayAllTow[s].is_featured<2?this.arrayAllTow.splice(s,1):this.arrayAllTow[s].is_featured--);this.$store.state.subAll<1&&(this.$refs.ColorBlue.style.backgroundColor="#3d3d3f",this.$refs.ColorGreen.style.backgroundColor="#535356",this.$store.state.sum=0),this.$store.state.subAll>=1?this.ballShow=!0:this.ballShow=!1},Del:function(){this.arrayAllTow.splice(0,this.arrayAllTow.length);for(var t=0;t<this.list.length;t++)for(var s=0;s<this.list[t].foods.length;s++)this.list[t].foods[s].is_featured=0,this.$refs.ColorBlue.style.backgroundColor="#3d3d3f",this.$refs.ColorGreen.style.backgroundColor="#535356",this.$store.state.sum=0,this.$store.state.subAll=0},showPopup:function(t){this.arrayAllTow&&(this.show=!this.show)}},mounted:function(){var t=this;this.axios.get("../../../static/json/shop.json").then(function(s){t.list=s.data});for(var s=this.$store.state.Image,i=0;i<s.length;i++)this.$route.params.id==s[i].id&&(this.arr=s[i],this.array=s[i].activities[0])}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-box"},[e("header",[e("div",{staticClass:"header-one"},[e("img",{attrs:{src:"//elm.cangdu.org/img/"+t.arr.image_path,alt:""}})]),t._v(" "),e("ul",{staticClass:"shop-header-ul"},[e("li",[e("section",{staticClass:"header-section"},[e("div",{staticClass:"div-img"},[e("img",{attrs:{src:"//elm.cangdu.org/img/"+t.arr.image_path,alt:""}})]),t._v(" "),e("div",[e("p",[t._v(t._s(t.arr.name))]),t._v(" "),e("p",[t._v("商家配送 / "+t._s(t.arr.order_lead_time)+"送达 / 配送费约￥"+t._s(t.arr.float_delivery_fee))]),t._v(" "),e("p",[t._v("公告："+t._s(t.arr.promotion_info))])])]),t._v(" "),e("figcaption",[e("span",[t._v("满")]),t._v(t._s(t.array.description)+"\n                ")])])])]),t._v(" "),e("nav",[e("p",{on:{click:function(s){return t.Faln()}}},[t._v("商品")]),t._v(" "),e("p",{on:{click:function(s){return t.Fal()}}},[t._v("评价")])]),t._v(" "),e("article",{staticClass:"shop-con"},[t.faln?e("section",{staticClass:"shop-commodity"},[e("ul",{staticClass:"shop-commodity-ul"},t._l(t.list,function(s,i){return e("li",{key:i,class:{active:i==t.iN},on:{click:function(s){return t.chengeColor(i)}}},[e("a",{attrs:{href:"#skip"+i}},[t._v(t._s(s.name))])])}),0),t._v(" "),e("div",{staticClass:"shop-commodity-div"},t._l(t.list,function(s,i){return e("article",{key:i},[e("div",{staticClass:"shop-hotSale",attrs:{id:"skip"+i}},[e("span",[t._v(t._s(s.name))]),e("span",[t._v(t._s(s.description))])]),t._v(" "),t._l(s.foods,function(s,i){return e("ul",{key:i,staticClass:"shop-hotSale-ul"},[e("li",[e("img",{attrs:{src:"//elm.cangdu.org/img/"+s.image_path,alt:""}}),t._v(" "),e("ol",[e("li",[t._v(t._s(s.name))]),t._v(" "),e("li",[t._v(t._s(s.description))]),t._v(" "),e("li",{staticClass:"shop-hard"},[e("span",[t._v("月售"+t._s(s.month_sales))]),t._v("  好评率"+t._s(s.satisfy_rate)+"%\n                                       ")]),t._v(" "),e("li",[e("span",[t._v(t._s(s.item_id))])]),t._v(" "),t._l(s.specfoods,function(i,a){return e("li",{key:a,staticClass:"shop-lastLi"},[e("p",[e("span",{staticClass:"shop-hotSale-span"},[t._v("￥")]),e("span",[t._v(t._s(i.price))]),t._v(" "),e("span",{staticClass:"shop-hotSale-span"},[t._v("起")])]),t._v(" "),e("p",[s.is_featured>0?e("button",{staticClass:"faB",on:{click:function(i){return t.Minus(s)}}},[t._v("-")]):t._e(),t._v(" "),s.is_featured>0?e("span",[t._v(t._s(s.is_featured))]):t._e(),t._v(" "),e("button",{on:{click:function(e){return t.AllPowerful(e,s,i.price)}}},[t._v("+")])])])})],2)])])})],2)}),0)]):t._e(),t._v(" "),t.faln?t._e():e("section",{staticClass:"evaluate"},[e("img",{attrs:{src:i("bd2H"),alt:""}})])]),t._v(" "),e("section",{staticClass:"shop-show"},[e("van-popup",{staticClass:"shop-didi",style:{width:"100%",paddingBottom:"0.77rem"},attrs:{position:"bottom",tag:"div"},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[e("div",{staticClass:"shop-show-one"},[e("p",[t._v("购物车")]),t._v(" "),e("p",{on:{click:function(s){return t.Del()}}},[e("van-icon",{attrs:{name:"delete",color:" rgb(187, 187, 187)",tag:"span"}}),t._v(" "),e("span",[t._v("清空")])],1)]),t._v(" "),t._l(t.arrayAllTow,function(s,i){return e("ul",{key:i,staticClass:"shop-show-ul"},[e("li",[t._v(t._s(s.name))]),t._v(" "),e("li",[t._v("￥"),e("span",[t._v(t._s(t.price))])]),t._v(" "),e("li",[e("button",{staticClass:"faA",on:{click:function(i){return t.faA(s)}}},[t._v("-")]),t._v(" "),e("span",[t._v(t._s(s.is_featured))]),t._v(" "),e("button",{on:{click:function(t){s.is_featured++}}},[t._v("+")])])])})],2)],1),t._v(" "),e("footer",{staticClass:"shop-fot"},[e("div",{ref:"ColorBlue",staticClass:"iconfont icon-gouwuche1-copy sc",on:{click:function(s){return t.showPopup()}}}),t._v(" "),e("div",[e("p",{staticClass:"shop-fot-oneP"},[e("span",[t._v("￥")]),e("span",[t._v(t._s(this.$store.state.sum))])]),t._v(" "),t._m(0)]),t._v(" "),t.Gap?t._e():e("div",{ref:"ColorGreen"},[t._v("还差￥5起送")]),t._v(" "),t.Gap?e("div",{ref:"ColorGreen"},[t._v("去结算")]):t._e(),t._v(" "),t.ballShow?e("div",{staticClass:"ball"},[t._v(t._s(this.$store.state.subAll))]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"shop-fot-towP"},[s("span",[this._v("配送费")]),s("span",[this._v("￥5")])])}]};var o=i("C7Lr")(e,a,!1,function(t){i("i02p")},null,null);s.default=o.exports},bd2H:function(t,s,i){t.exports=i.p+"static/img/evaluate.83d54e4.png"},hksX:function(t,s){},i02p:function(t,s){}});
//# sourceMappingURL=4.649ac78889abfad0e1ab.js.map