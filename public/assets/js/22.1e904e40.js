(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{182:function(e,n,o){"use strict";o.r(n);var r=o(0),t=Object(r.a)({},function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"content"},[this._m(0),this._v(" "),this._m(1),this._v(" "),n("p",[this._v("个人博客："),n("a",{attrs:{href:"http://blog.recoluan.com",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[this._v("午后南杂")]),n("OutboundLink")],1)])])},[function(){var e=this.$createElement,n=this._self._c||e;return n("h4",{attrs:{id:"方法介绍："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法介绍：","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法介绍：")])},function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ol",[o("li",[o("p",[e._v("启动MongoDB服务（禁用访问权限控制）")]),e._v(" "),o("pre",[o("code",[e._v("mongod --port 27017 --dbpath d:/file/mongo\n")])])]),e._v(" "),o("li",[o("p",[e._v("连接至MongoDB实例")]),e._v(" "),o("pre",[o("code",[e._v("mongo --port 27017\n")])])]),e._v(" "),o("li",[o("p",[e._v("添加管理员账号")]),e._v(" "),o("pre",[o("code",[e._v('use admin\ndb.createUser({user: "username1", pwd: "123456", roles: [{role: "userAdminAnyDatabase", db: "admin"}]})\n')])])]),e._v(" "),o("li",[o("p",[e._v("重启MongoDB实例，并启用访问权限控制")]),e._v(" "),o("pre",[o("code",[e._v("mongod --auth --port 27017 --dbpath d:/file/mongo\n")])])]),e._v(" "),o("li",[o("p",[e._v("连接至MongoDB实例")]),e._v(" "),o("pre",[o("code",[e._v("mongo --port 27017\n")])])]),e._v(" "),o("li",[o("p",[e._v("切换至admin库，并登陆")]),e._v(" "),o("pre",[o("code",[e._v('use admin\ndb.auth("username1","123456")\n')])])]),e._v(" "),o("li",[o("p",[e._v("添加普通用户账号")]),e._v(" "),o("pre",[o("code",[e._v('use dbName\ndb.createUser({user: "username2", pwd: "123456", roles: [{role: "readWrite", db: "dbName"}]})\n')])])]),e._v(" "),o("li",[o("p",[e._v("使用普通用户账号登陆")]),e._v(" "),o("pre",[o("code",[e._v('mongo --port 27017\nuse dbName\ndb.auth("username2","123456")\n')])])]),e._v(" "),o("li",[o("p",[o("strong",[o("em",[e._v("切记")])]),e._v(" 登陆或创建mongo连接实例的时候需要用创建的普通账户及其所在数据库的名字")]),e._v(" "),o("pre",[o("code",[e._v("mongodb://username2:123456@host:port/dbName'\n")])])])])}],!1,null,null,null);t.options.__file="2017110101.md";n.default=t.exports}}]);