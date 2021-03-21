(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,5,6],{273:function(t,e,r){"use strict";r.r(e);var l={name:"Box",props:{title:{type:String,default:""},bgClass:{type:String,default:"bg-itccolor"},bgColor:{type:String,required:!1}}},o=r(18),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-4"},[r("div",{staticClass:"p-2",class:t.bgClass,style:t.bgColor?"background-color: "+t.bgColor:""},[r("div",{staticClass:"flex items-center justify-between text-white w-full"},[r("h3",{staticClass:"text-white font-display"},[t._v(t._s(t.title))]),t._v(" "),t._t("tools")],2)]),t._v(" "),r("div",{staticClass:"bg-gray-100"},[t._t("default")],2)])}),[],!1,null,"49d007aa",null);e.default=component.exports},275:function(t,e,r){"use strict";r.r(e);var l={name:"Sideshow"},o=r(18),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-itccolor grid grid-cols-12"},[t._m(0),t._v(" "),r("div",{staticClass:"col-span-4"},[r("div",{staticClass:"w-full"},[r("a",{attrs:{href:""}},t._l(5,(function(e,l){return r("div",{staticClass:"grid grid-cols-12 p-2",class:3===l?"bg-blue-500":""},[t._m(1,!0),t._v(" "),r("div",{staticClass:"col-span-8 space-y-2 pl-2"},[r("h3",{staticClass:"text-xs text-white"},[t._v("ឯកឧត្តមបណ្ឌិត ហង់ ជួន ណារ៉ុន អញ្ជើញក្នុងពិធីទិវាគ្រូបង្រៀន")]),t._v(" "),r("p",{staticClass:"text-xs",class:3===l?"text-gray-800":"text-gray-500"},[t._v("ទិវាគ្រូបង្រៀននៅវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា")])])])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-span-8"},[r("div",{staticClass:"w-full relative"},[r("img",{staticClass:"w-full",attrs:{src:"/img/sideshow/01.png",alt:"slideshow"}}),t._v(" "),r("div",{staticClass:"absolute -bottom-0 bg-gray-900 w-full p-4 text-white"},[r("h3",[t._v("ឯកឧត្តមបណ្ឌិត ហង់ ជួន ណារ៉ុន អញ្ជើញក្នុងពិធីទិវាគ្រូបង្រៀន")]),t._v(" "),r("p",{staticClass:"text-gray-500"},[t._v("ទិវាគ្រូបង្រៀននៅវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា")]),t._v(" "),r("p",{staticClass:"text-xs text-gray-500"},[t._v("(Show - 2014-03-29 04:06:12)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-span-4 w-full rounded-lg"},[e("img",{staticClass:"object-contain rounded-lg",attrs:{src:"/img/sideshow/01.png",alt:""}})])}],!1,null,"02712468",null);e.default=component.exports},276:function(t,e,r){"use strict";r.r(e);r(29),r(12);var l={name:"BlogItem",props:{blog:{type:Object,require:!0}},data:function(){return{images:["/img/blog-item-01.png","/img/g-02.JPG","/img/g-03.JPG","/img/g-04.JPG"]}},computed:{image:function(){var t=this;return this.images[Array.from({length:1},(function(){return Math.floor(Math.random()*t.images.length)}))]}}},o=r(18),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"space-y-3 py-2 p-2 bg-gray-100"},[r("div",{staticClass:"border h-32 overflow-hidden"},[r("img",{staticClass:"object-cover",attrs:{src:t.image}})]),t._v(" "),r("h3",{staticClass:"text-sm font-bold uppercase"},[r("a",{attrs:{href:"#"}},[t._v(t._s(t.blog.title))])]),t._v(" "),r("p",{staticClass:"text-xs text-gray-500"},[t._v(t._s(t.blog.date))]),t._v(" "),r("p",{staticClass:"text-justify text-xs"},[t._v(t._s(t.blog.description))]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-right text-xs"},[r("a",{attrs:{href:"#"}},[t._v("[Read More]")])])}],!1,null,"db4d0142",null);e.default=component.exports},277:function(t,e,r){"use strict";r.r(e);r(29),r(12);var l={name:"Sidebar",data:function(){return{images:["/img/blog-item-01.png","/img/g-02.JPG","/img/g-03.JPG","/img/g-04.JPG"]}},computed:{image:function(){var t=this;return this.images[Array.from({length:1},(function(){return Math.floor(Math.random()*t.images.length)}))]}}},o=r(18),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Box",{attrs:{title:"Latest"}},t._l(5,(function(e){return r("div",{staticClass:"grid grid-cols-12 p-2 mb-2"},[r("div",{staticClass:"col-span-4 h-24 w-full"},[r("img",{staticClass:"object-contain",attrs:{src:t.image,alt:""}})]),t._v(" "),r("div",{staticClass:"col-span-8 space-y-2 pl-2"},[r("h3",{staticClass:"text-xs"},[t._v("The 28th Meeting Board of Trustee")]),t._v(" "),r("p",{staticClass:"text-xs text-gray-500"},[t._v("(Board of Trustee Meeting)")]),t._v(" "),r("p",{staticClass:"text-xs text-gray-500"},[t._v("16/01/2020")])])])})),0),t._v(" "),t._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-4 border bg-gray-100 rounded p-2"},[e("iframe",{staticStyle:{border:"none",overflow:"hidden",width:"100%"},attrs:{src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fitckh&tabs&width=340&height=130&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId",width:"340",height:"130",scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"}})])}],!1,null,"1bd5a029",null);e.default=component.exports;installComponents(component,{Box:r(273).default})},291:function(t,e,r){"use strict";r.r(e);r(37),r(19),r(30),r(45),r(27),r(46);var l=r(14),o=r(49);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"Home",head:function(){return{title:"Home",titleTemplate:"%s | ITC",meta:[{hid:"twitter:card",name:"twitter:card",content:"វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា គឺជាគ្រឹះស្ថានឧត្តមសិក្សានៅកម្ពុជាដែលបណ្តុះបណ្តាលវិស្វករបច្ចេកទេស។"},{hid:"twitter:site",name:"twitter:site",content:"@itckh"},{hid:"twitter:creator",name:"twitter:creator",content:"@itckh"},{hid:"twitter:title",name:"twitter:title",content:"វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា គឺជាគ្រឹះស្ថានឧត្តមសិក្សានៅកម្ពុជាដែលបណ្តុះបណ្តាលវិស្វករបច្ចេកទេស។"},{hid:"twitter:description",name:"twitter:description",content:"វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជាបង្កើតឡើងនៅឆ្នាំ១៩៦៤ មានឈ្មោះថា វិទ្យាស្ថានបច្ចេកទេសជាន់ខ្ពស់មិត្តភាពកម្ពុជាសូវៀត (Institut Technique Supérieur de l’Amitié Khméro-Soviétique: ITSAKS) ។ វិទ្យាស្ថាននេះត្រូវបានផ្ដល់ជំនួយពីសហភាពសូវៀតរហូតដល់ឆ្នាំ ១៩៧៥ និងពី ១៩៨០ ដល់ ១៩៩១ ។ នៅឆ្នាំ ១៩៩១ សូវៀតបានបញ្ចប់ជំនួយទាំងស្រុងភ្លាមៗដល់វិទ្យាស្ថាន ។ នៅឆ្នាំ១៩៩៣ រដ្ឋាភិបាលកម្ពុជានិងរដ្ឋាភិបាលបារាំងបានចុះកិច្ចព្រមព្រៀងគ្នាដើម្បី អភិវឌ្ឍវិទ្យាស្ថានបន្ត ដោយប្តូរឈ្មោះមកជាវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា ជាភាសាបារាំង (Institut de Technologie du Cambodge: ITC) ។"},{hid:"twitter:image",name:"twitter:image",content:"/itc-website.png"},{hid:"description",name:"description",content:"វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជាបង្កើតឡើងនៅឆ្នាំ១៩៦៤ មានឈ្មោះថា វិទ្យាស្ថានបច្ចេកទេសជាន់ខ្ពស់មិត្តភាពកម្ពុជាសូវៀត (Institut Technique Supérieur de l’Amitié Khméro-Soviétique: ITSAKS) ។ វិទ្យាស្ថាននេះត្រូវបានផ្ដល់ជំនួយពីសហភាពសូវៀតរហូតដល់ឆ្នាំ ១៩៧៥ និងពី ១៩៨០ ដល់ ១៩៩១ ។ នៅឆ្នាំ ១៩៩១ សូវៀតបានបញ្ចប់ជំនួយទាំងស្រុងភ្លាមៗដល់វិទ្យាស្ថាន ។ នៅឆ្នាំ១៩៩៣ រដ្ឋាភិបាលកម្ពុជានិងរដ្ឋាភិបាលបារាំងបានចុះកិច្ចព្រមព្រៀងគ្នាដើម្បី អភិវឌ្ឍវិទ្យាស្ថានបន្ត ដោយប្តូរឈ្មោះមកជាវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា ជាភាសាបារាំង (Institut de Technologie du Cambodge: ITC) ។"},{hid:"og:image",property:"og:image",content:"/itc-website.png"},{hid:"og:site_name",name:"og:site_name",content:"វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា"},{hid:"og:title",name:"og:title",content:"វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា គឺជាគ្រឹះស្ថានឧត្តមសិក្សានៅកម្ពុជាដែលបណ្តុះបណ្តាលវិស្វករបច្ចេកទេស។"},{hid:"og:description",name:"og:description",content:"វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជាបង្កើតឡើងនៅឆ្នាំ១៩៦៤ មានឈ្មោះថា វិទ្យាស្ថានបច្ចេកទេសជាន់ខ្ពស់មិត្តភាពកម្ពុជាសូវៀត (Institut Technique Supérieur de l’Amitié Khméro-Soviétique: ITSAKS) ។ វិទ្យាស្ថាននេះត្រូវបានផ្ដល់ជំនួយពីសហភាពសូវៀតរហូតដល់ឆ្នាំ ១៩៧៥ និងពី ១៩៨០ ដល់ ១៩៩១ ។ នៅឆ្នាំ ១៩៩១ សូវៀតបានបញ្ចប់ជំនួយទាំងស្រុងភ្លាមៗដល់វិទ្យាស្ថាន ។ នៅឆ្នាំ១៩៩៣ រដ្ឋាភិបាលកម្ពុជានិងរដ្ឋាភិបាលបារាំងបានចុះកិច្ចព្រមព្រៀងគ្នាដើម្បី អភិវឌ្ឍវិទ្យាស្ថានបន្ត ដោយប្តូរឈ្មោះមកជាវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា ជាភាសាបារាំង (Institut de Technologie du Cambodge: ITC) ។"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)("ui",{blogs:"getBlogs",events:"getEvents"}))},d=r(18),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container shadow-lg m-auto mb-4"},[r("Sideshow"),t._v(" "),r("div",{staticClass:"grid grid-cols-12"},[r("div",{staticClass:"col-span-8 p-4"},[r("Box",{attrs:{title:"វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា"}},[r("div",{staticClass:"w-full p-2"},[r("div",{staticClass:"grid grid-cols-2"},[t._l(t.blogs,(function(t,e){return[r("BlogItem",{key:e,attrs:{blog:t}})]}))],2)])]),t._v(" "),r("Box",{attrs:{title:"ព័ត៌មាននិងព្រឹត្តិការណ៍"}},[r("template",{slot:"tools"},[r("a",{staticClass:"text-xs",attrs:{href:""}},[t._v("[View All]")])]),t._v(" "),r("div",{staticClass:"w-full p-2"},[r("div",{staticClass:"grid grid-cols-2"},[t._l(t.events,(function(t,e){return[r("BlogItem",{key:e,attrs:{blog:t}})]}))],2)])],2),t._v(" "),t._m(0)],1),t._v(" "),r("div",{staticClass:"col-span-4 p-4"},[r("div",{staticClass:"w-full"},[r("Sidebar")],1)])]),t._v(" "),r("div",{staticClass:"mt-4 p-4"},[r("div",{staticClass:"grid grid-cols-4 gap-2"},[r("Box",{attrs:{title:"ផ្នែកសិក្សា","bg-color":"#0a86ca"}},[r("template",{slot:"tools"},[r("a",{staticClass:"text-xs",attrs:{href:""}},[t._v("[View All]")])]),t._v(" "),r("BlogItem",{attrs:{blog:t.events[0]}})],2),t._v(" "),r("Box",{attrs:{title:"ការស្រាវជ្រាវ","bg-color":"#ff634c"}},[r("template",{slot:"tools"},[r("a",{staticClass:"text-xs",attrs:{href:""}},[t._v("[View All]")])]),t._v(" "),r("BlogItem",{attrs:{blog:t.events[0]}})],2),t._v(" "),r("Box",{attrs:{title:"ការសហការ","bg-color":"#4a4745"}},[r("BlogItem",{attrs:{blog:t.events[0]}})],1),t._v(" "),r("Box",{attrs:{title:"រូបភាពនៃសកម្មភាពផ្សេងៗ"}},[r("BlogItem",{attrs:{blog:t.events[0]}})],1)],1)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mb-2"},[r("img",{attrs:{src:"/img/g-01.png",alt:""}})]),t._v(" "),r("div",{staticClass:"grid grid-cols-3 gap-2"},[r("img",{staticClass:"object-contain",attrs:{src:"/img/g-02.JPG",alt:""}}),t._v(" "),r("img",{staticClass:"object-contain",attrs:{src:"/img/g-03.JPG",alt:""}}),t._v(" "),r("img",{staticClass:"object-contain",attrs:{src:"/img/g-04.JPG",alt:""}})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Sideshow:r(275).default,BlogItem:r(276).default,Box:r(273).default,Sidebar:r(277).default})}}]);