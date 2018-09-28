(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{198:function(n,t,e){"use strict";e.r(t);var i=e(0),s=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content"},[e("p",[n._v("首先要明白浏览器在加载页面的时候是按顺序来加载的，这样以来就很清楚了，js动态添加dom以后，这些dom并没有绑定事件，这个时候最简单的一个办法就是：将绑定事件的方法封装到一个函数A中，在动态添加完dom以后立即执行一次函数A即可。")]),n._v(" "),e("p",[n._v("其次需要注意的是，在你可能同时需要添加许多的dom，不要添加一个就执行一次函数A，这样会增加浏览器的负载，你需要在所有dom添加完以后在执行函数A，例如你用一个for循环遍历dom组合并拼接成一个字符串，然后添加到某个父级dom里面，这个时候你需要在循环外添加一次就可以了。")]),n._v(" "),e("p",[n._v("代码如下：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n    <meta charset=\"UTF-8\">\n    <title>添加div并绑定点击事件</title>\n    <style>\n        div.btn{\n            width: 200px;\n            height: 50px;\n            line-height: 50px;\n            text-align: center;\n            border: solid 1px #000;\n            cursor: pointer;\n        }\n        div.innerDiv{\n            width: 50px;\n            height: 50px;\n            background-color: black;\n            margin: 10px;\n            cursor: pointer;\n        }\n    </style>\n</head>\n<body>\n    <div class=\"aa\">\n        <div class=\"btn\">添加div并绑定点击事件</div>\n        <div class=\"outerDiv\"></div>\n    </div>\n    <script>\n        function getClass(classname) {\n            return document.getElementsByClassName(classname);\n        }\n        getClass('btn')[0].onclick=function () {\n            addDom();\n        }\n        //    将点击事件封装为函数\n        function funA() {\n            for(var i=0;i<getClass('innerDiv').length;i++){\n                getClass('innerDiv')[i].onclick=function () {\n                    alert(this.innerText);\n                }\n            }\n        }\n        //    将添加dom封装为函数\n        function addDom() {\n            var oldHtml='';\n            for(var j=0;j<6;j++){\n                oldHtml+='<div class=\"innerDiv\">'+j+'</div>'\n            }\n            getClass('outerDiv')[0].innerHTML=oldHtml;\n            funA();\n        }\n        //    如果将函数A放在这里就不会起作用的\n        //    funA();\n    <\/script>\n</body>\n</html>\n")])])]),e("p",[n._v("个人博客："),e("a",{attrs:{href:"recoluan.gitlab.io"}},[e("strong",[n._v("午后南杂")])])])])}],!1,null,null,null);s.options.__file="2017052401.md";t.default=s.exports}}]);