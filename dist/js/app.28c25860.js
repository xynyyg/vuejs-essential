(function(t){function e(e){for(var s,o,l=e[0],r=e[1],c=e[2],p=0,d=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,l=1;l<n.length;l++){var r=n[l];0!==a[r]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vuejs-essential/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2370:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrap"}},[n("TheHeader"),n("TheFooter")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-default topnav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:function(e){return t.toggleNav()}}},[n("span",{staticClass:"sr-only"},[t._v("Toggle nav")]),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"})]),n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[n("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),n("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])]),n("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(e,s){return n("li",{key:e.id,class:{active:s===t.activeNavIndex}},[n("a",{attrs:{href:"#"},on:{click:function(e){return t.changeNavIndex(s)}}},[t._v(t._s(e))])])}),0)])])])},l=[],r={name:"TheHeader.vue",data:function(){return{logo:{src:"".concat(this.uploadsUrl),title:"Vuejs"},navList:["社区","问答","教程","头条"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl=""},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},c=r,u=(n("e4e3"),n("2877")),p=Object(u["a"])(c,o,l,!1,null,"60df55de",null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row footer-top"},[n("div",{staticClass:"col-sm-5 col-lg-5"},[n("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),n("div",{staticClass:"text-md"},t._l(t.contacts,function(e){return n("a",{key:e.id,style:t.contactStyle,attrs:{title:e.title,href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon})])}),0),n("br"),n("span",{domProps:{innerHTML:t._s(t.designer)}})]),n("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.sponsor.title))]),n("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,function(t){return n("li",{key:t.id},[n("a",{attrs:{href:t.link,target:"_blank"}},[n("img",{staticClass:"footer-sponsor-link",attrs:{title:t.title,src:t.logo,alt:t.title,width:"98"}})])])}),0)]),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.statistics.title))]),n("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,function(e){return n("li",{key:e.id},[t._v(t._s(e.title)+": "+t._s(e.description))])}),0)]),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.other.title))]),n("ul",{staticClass:"list-unstyled"},t._l(t.other.list,function(e){return n("li",{key:e.id},[n("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon}),t._v(" "+t._s(e.title)+"\n                ")])])}),0)])])])])])])},v=[],h={name:"TheFooter.vue",data:function(){return{description:"VuejsCaff 是一个 Vue.js 的知识社区",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:summer@yousails.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com/1837553744/profile?topnav=1&wvr=6"},{icon:"weixin",title:"加我微信",link:"https://vuejscaff.com/contact"}],contactStyle:{paddingRight:"8px"},designer:'\n      <span style="font-size:0.9em">Designed by\n        <span style="color: #e27575;font-size: 14px;">❤</span>\n        <a href="https://github.com/summerblue"target="_blank"style="color:inherit">Summer</a>\n      </span>\n    ',sponsor:{title:"赞助商",list:[{logo:"https://cdn.learnku.com/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",title:"本站服务器由 UCloud 赞助",link:"http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao"},{logo:"https://cdn.learnku.com/uploads/banners/yGLIR0idW7zsInjsNmzr.png",title:"本站 CDN 服务由七牛赞助",link:"http://www.qiniu.com/?utm_source=phphub"},{logo:"https://cdn.learnku.com/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",title:"Composer 镜像赞助商",link:"https://www.upyun.com/"}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其他信息",list:[{icon:"thumbs-up",title:"软件外包服务",link:"https://vuejscaff.com/contact"},{icon:"globe",title:"推荐网站",link:"https://vuejscaff.com/sites"}]}}}},b=h,m=(n("a69f"),Object(u["a"])(b,f,v,!1,null,"62901f59",null)),g=m.exports,_={name:"app",components:{TheHeader:d,TheFooter:g}},y=_,C=(n("5c0b"),n("5c64"),Object(u["a"])(y,a,i,!1,null,null,null)),w=C.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("e332"),a=n.n(s);a.a},"5c64":function(t,e,n){"use strict";var s=n("6ee5"),a=n.n(s);a.a},"6ee5":function(t,e,n){},a69f:function(t,e,n){"use strict";var s=n("c6a5"),a=n.n(s);a.a},c6a5:function(t,e,n){},e332:function(t,e,n){},e4e3:function(t,e,n){"use strict";var s=n("2370"),a=n.n(s);a.a}});
//# sourceMappingURL=app.28c25860.js.map