(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{131:function(t,n,e){"use strict";e(18),e(45),e(33),n.a=function(t){var n,e,head=t.app.head,r=t.$config;head.titleTemplate=function(title){return title?"".concat(title," | ").concat(r.description):r.description},head.meta.push({hid:"description",name:"description",content:r.description}),head.meta.push({hid:"yandex-verification",name:"yandex-verification",content:r.yandexVerification}),head.noscript=null!==(n=head.noscript)&&void 0!==n?n:[],head.noscript.push({hid:"yandex-metrika-pixel",innerHTML:'\n<div>\n  <img\n    src="https://mc.yandex.ru/watch/68665174"\n    style="position:absolute; left:-9999px;"\n    alt=""\n  />\n</div>\n',body:!0}),head.__dangerouslyDisableSanitizersByTagID=null!==(e=head.__dangerouslyDisableSanitizersByTagID)&&void 0!==e?e:{},head.__dangerouslyDisableSanitizersByTagID["yandex-metrika-pixel"]=["innerHTML"]}},132:function(t,n,e){"use strict";var r=e(0),o=(e(33),function(t,n){return ym(t,"init",n),function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return ym.apply(void 0,[t].concat(e))}});n.a=function(t,n){var e,c,l,d,f,a,h=t.app.router;e=function(){h.onReady((function(){var t=o(68665174,{defer:!0,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0}),e=new MutationObserver((function(){e.disconnect()}));e.observe(document.querySelector("title"),{childList:!0}),h.afterEach((function(n,e){r.a.nextTick((function(){var r,o;t("hit",n.fullPath,{referer:e.fullPath,title:null!==(r=null===(o=n.matched[0].components.default.options.head)||void 0===o?void 0:o.title)&&void 0!==r?r:document.title})}))})),n("ym",t)}))},c=window,l=document,d="script",c.ym=c.ym||function(){(c.ym.a=c.ym.a||[]).push(arguments)},c.ym.l=1*new Date,f=l.createElement(d),a=l.getElementsByTagName(d)[0],f.async=1,f.src="https://mc.yandex.ru/metrika/tag.js",f.onload=e,a.parentNode.insertBefore(f,a)}},170:function(t,n,e){var content=e(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(63).default)("70c29d84",content,!0,{sourceMap:!1})},201:function(t,n,e){"use strict";var r=e(69),o=e(88),c=e.n(o),l=e(284),d=e(285),component=Object(r.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("v-app",[n("v-main",[n("nuxt")],1)],1)}),[],!1,null,null,null);n.a=component.exports;c()(component,{VApp:l.a,VMain:d.a})},205:function(t,n,e){e(206),t.exports=e(207)},232:function(t,n,e){"use strict";e(170)},233:function(t,n,e){(n=e(62)(!1)).push([t.i,"h1[data-v-2a6a8b4d]{font-size:20px}",""]),t.exports=n},50:function(t,n,e){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}},data:function(){return{pageNotFound:"404 Страница не найдена",otherError:"Произошла ошибка"}}},o=(e(232),e(69)),c=e(88),l=e.n(c),d=e(284),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[t._v("\n    На главную\n  ")])],1)}),[],!1,null,"2a6a8b4d",null);n.a=component.exports;l()(component,{VApp:d.a})}},[[205,6,2,7]]]);