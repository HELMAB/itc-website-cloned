(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{276:function(t,e,r){"use strict";r.r(e);r(29),r(12);var n={name:"BlogItem",props:{blog:{type:Object,require:!0}},data:function(){return{images:["/img/blog-item-01.png","/img/g-02.JPG","/img/g-03.JPG","/img/g-04.JPG"]}},computed:{image:function(){var t=this;return this.images[Array.from({length:1},(function(){return Math.floor(Math.random()*t.images.length)}))]}}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"space-y-3 py-2 p-2 bg-gray-100"},[r("div",{staticClass:"border h-32 overflow-hidden"},[r("img",{staticClass:"object-cover",attrs:{src:t.image}})]),t._v(" "),r("h3",{staticClass:"text-sm font-bold uppercase"},[r("a",{attrs:{href:"#"}},[t._v(t._s(t.blog.title))])]),t._v(" "),r("p",{staticClass:"text-xs text-gray-500"},[t._v(t._s(t.blog.date))]),t._v(" "),r("p",{staticClass:"text-justify text-xs"},[t._v(t._s(t.blog.description))]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-right text-xs"},[r("a",{attrs:{href:"#"}},[t._v("[Read More]")])])}],!1,null,"db4d0142",null);e.default=component.exports}}]);