(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32507fc1"],{"20fd":function(t,r,a){"use strict";var e=a("d9f6"),n=a("aebd");t.exports=function(t,r,a){r in t?e.f(t,r,n(0,a)):t[r]=a}},3702:function(t,r,a){var e=a("481b"),n=a("5168")("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||s[n]===t)}},"4ee1":function(t,r,a){var e=a("5168")("iterator"),n=!1;try{var s=[7][e]();s["return"]=function(){n=!0},Array.from(s,function(){throw 2})}catch(o){}t.exports=function(t,r){if(!r&&!n)return!1;var a=!1;try{var s=[7],i=s[e]();i.next=function(){return{done:a=!0}},s[e]=function(){return i},t(s)}catch(o){}return a}},"549b":function(t,r,a){"use strict";var e=a("d864"),n=a("63b6"),s=a("241e"),o=a("b0dc"),i=a("3702"),c=a("b447"),l=a("20fd"),u=a("7cd6");n(n.S+n.F*!a("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var r,a,n,p,d=s(t),f="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,h=void 0!==v,g=0,w=u(d);if(h&&(v=e(v,m>2?arguments[2]:void 0,2)),void 0==w||f==Array&&i(w))for(r=c(d.length),a=new f(r);r>g;g++)l(a,g,h?v(d[g],g):d[g]);else for(p=w.call(d),a=new f;!(n=p.next()).done;g++)l(a,g,h?o(p,v,[n.value,g],!0):n.value);return a.length=g,a}})},"54a1":function(t,r,a){a("6c1c"),a("1654"),t.exports=a("95d5")},"5a5f":function(t,r,a){},"774e":function(t,r,a){t.exports=a("d2d5")},"7f7f":function(t,r,a){var e=a("86cc").f,n=Function.prototype,s=/^\s*function ([^ (]*)/,o="name";o in n||a("9e1e")&&e(n,o,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},"935e":function(t,r,a){"use strict";a.r(r);var e=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[a("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(r){t.msgShow=r}}}),a("div",{staticClass:"panel panel-default"},[t._m(0),a("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:""}},[t._v("用户名")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator:input.required",value:{regex:/^[a-zA-Z]+\w*\s?\w*$/,error:"用户名要求以字母开头的单词字符"},expression:"{ regex:/^[a-zA-Z]+\\w*\\s?\\w*$/,error:'用户名要求以字母开头的单词字符' }",arg:"input",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.username},on:{input:function(r){r.target.composing||(t.username=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:""}},[t._v("密码")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{regex:/^\w{6,16}$/,error:"密码要求 6 ~ 16 个单词字符"},expression:"{ regex: /^\\w{6,16}$/, error:'密码要求 6 ~ 16 个单词字符' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"password",placeholder:"请输入密码",id:"password"},domProps:{value:t.password},on:{input:function(r){r.target.composing||(t.password=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:""}},[t._v("确认密码")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.cpassword,expression:"cpassword",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{target:"#password"},expression:"{target:'#password'}",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"password",placeholder:"请输入确认密码"},domProps:{value:t.cpassword},on:{input:function(r){r.target.composing||(t.cpassword=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label",attrs:{for:""}},[t._v("验证码")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.captcha,expression:"captcha",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"图片验证码"},expression:"{ title:'图片验证码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.captcha},on:{input:function(r){r.target.composing||(t.captcha=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),a("div",{staticClass:"thumbnail",attrs:{title:"点击图片重新获取验证码"},on:{click:t.getCaptcha}},[a("div",{staticClass:"captcha vcenter",domProps:{innerHTML:t._s(t.captchaTpl)}})]),a("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.register}},[a("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v("注册\n        ")])])])],1)])},n=[function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"panel-title"},[t._v("请注册")])])}],s=(a("7f7f"),a("ac6a"),a("a745")),o=a.n(s);function i(t){if(o()(t)){for(var r=0,a=new Array(t.length);r<t.length;r++)a[r]=t[r];return a}}var c=a("774e"),l=a.n(c),u=a("c8bb"),p=a.n(u);function d(t){if(p()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return l()(t)}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(t){return i(t)||d(t)||f()}var v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890",a="",e=[];try{e=m(Array(t)).map(function(){return r[Math.floor(Math.random()*r.length)]})}catch(n){}return e.forEach(function(t){a+='<span class="flex1 hcenter">'.concat(t,"</span>")}),e=e.join(""),{tpl:a,captcha:e}},h=(a("e8ec"),{name:"Register",data:function(){return{captchaTpl:"",username:"",password:"",cpassword:"",captcha:"",msg:"",msgType:"",msgShow:!1}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=v(6),r=t.tpl,a=t.captcha;this.captchaTpl=r,this.localCaptcha=a},register:function(t){var r=this;this.$nextTick(function(){var a="submit"===t.target.type?t.target:t.target.parentElement;a.canSubmit&&r.submit()})},submit:function(){if(this.captcha.toUpperCase()!==this.localCaptcha)this.showMsg("验证码不正确"),this.getCaptcha();else{var t={name:this.username,password:this.password,avatar:"https://api.adorable.io/avatars/200/".concat(this.username,".png")},r=this.$store.state.user;r&&r.name===t.name?this.showMsg("用户名已存在"):this.login(t)}},login:function(t){this.$store.dispatch("login",t),this.showMsg("注册成功","success")},showMsg:function(t){var r=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";this.msg=t,this.msgType=a,this.msgShow=!1,this.$nextTick(function(){r.msgShow=!0})}}}),g=h,w=(a("edf6"),a("2877")),b=Object(w["a"])(g,e,n,!1,null,"596a2a7b",null);r["default"]=b.exports},"95d5":function(t,r,a){var e=a("40c3"),n=a("5168")("iterator"),s=a("481b");t.exports=a("584a").isIterable=function(t){var r=Object(t);return void 0!==r[n]||"@@iterator"in r||s.hasOwnProperty(e(r))}},b0dc:function(t,r,a){var e=a("e4ae");t.exports=function(t,r,a,n){try{return n?r(e(a)[0],a[1]):r(a)}catch(o){var s=t["return"];throw void 0!==s&&e(s.call(t)),o}}},c8bb:function(t,r,a){t.exports=a("54a1")},d2d5:function(t,r,a){a("1654"),a("549b"),t.exports=a("584a").Array.from},edf6:function(t,r,a){"use strict";var e=a("5a5f"),n=a.n(e);n.a}}]);
//# sourceMappingURL=chunk-32507fc1.1f798315.js.map