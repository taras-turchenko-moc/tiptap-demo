(function(){"use strict";var t={4870:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(144),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("VBtnToggle",{staticClass:"mb-5",attrs:{mandatory:""},model:{value:t.device,callback:function(e){t.device=e},expression:"device"}},[n("VBtn",{attrs:{value:"desktop",icon:""}},[n("VIcon",[t._v("mdi-monitor")])],1),n("VBtn",{attrs:{value:"tablet",icon:""}},[n("VIcon",[t._v("mdi-tablet-android")])],1),n("VBtn",{attrs:{value:"mobile",icon:""}},[n("VIcon",[t._v("mdi-cellphone")])],1)],1),n("TextEditor",{attrs:{device:t.device},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("pre",[t._v(t._s(t.content))])],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.editor?n("BubbleMenu",{attrs:{editor:t.editor,"tippy-options":{duration:100}}},[n("VToolbar",{attrs:{dense:"",rounded:""}},[n("VToolbarItems",[n("VMenu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[n("VBtn",t._g(t._b({attrs:{elevation:"0",plain:""}},"VBtn",r,!1),i),[t._v(" "+t._s(t.activePreset)+" ")])]}}],null,!1,3882534694)},[n("VList",{attrs:{dense:""}},[n("VListItemGroup",{attrs:{value:t.activePreset},on:{change:t.changePreset}},t._l(t.presets,(function(e){return n("VListItem",{key:e,attrs:{value:e}},[n("VListItemTitle",[t._v(t._s(e))])],1)})),1)],1)],1),n("VMenu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[n("VBtn",t._g(t._b({attrs:{elevation:"0",plain:""}},"VBtn",r,!1),i),[t._v(" "+t._s(t.activeFontWeight)+" ")])]}}],null,!1,3930795344)},[n("VList",{attrs:{dense:""}},[n("VListItemGroup",{attrs:{value:t.activeFontWeight},on:{change:t.changeFontWeight}},t._l(t.fontWeights,(function(e){return n("VListItem",{key:e,attrs:{value:e}},[n("VListItemTitle",[t._v(t._s(e))])],1)})),1)],1)],1),n("VMenu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[n("VBtn",t._g(t._b({attrs:{elevation:"0",plain:""}},"VBtn",r,!1),i),[t._v(" "+t._s(t.activeFontSize)+"px ")])]}}],null,!1,465348509)},[n("VList",{attrs:{dense:""}},[n("VListItemGroup",{attrs:{value:t.activeFontSize},on:{change:t.changeFontSize}},t._l(t.fontSizes,(function(e){return n("VListItem",{key:e,attrs:{value:e}},[n("VListItemTitle",[t._v(t._s(e))])],1)})),1)],1)],1),n("VMenu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[n("VBtn",t._g(t._b({attrs:{elevation:"0",plain:""}},"VBtn",r,!1),i),[t._v(" "+t._s(t.activeListType||"*")+" ")])]}}],null,!1,1989585875)},[n("VList",{attrs:{dense:""}},[n("VListItemGroup",{attrs:{value:t.activeListType},on:{change:t.changeListType}},t._l(t.listTypes,(function(e){return n("VListItem",{key:e,attrs:{value:e}},[n("VListItemTitle",[t._v(t._s(e))])],1)})),1)],1)],1),n("VBtn",{attrs:{"input-value":t.isItalic,plain:""},on:{click:t.toggleItalic}},[n("em",[t._v("i")])])],1)],1)],1):t._e(),n("EditorContent",{attrs:{editor:t.editor}})],1)},s=[],u=(n(8862),n(6699),n(4916),n(5306),n(2746)),c=n(8481),l=n(9457),f=n(4800),d=n(9068),v=n(7082),p=n(5961),h=n(3427),g=n(9802),m=n(1769),_=(n(8309),n(677)),b=n(5200);n(1539),n(9720),n(2222);function y(t){var e=Object.entries(t).reduce((function(t,e){var n=(0,b.Z)(e,2),i=n[0],r=n[1];if(!r)return t;var o=i.replace(/_/g,"-");return"".concat(t,"--").concat(o,": ").concat(r,"; ")}),"");return["span",{style:e,class:"zp-text-style"},0]}var V=_.vc.create({name:"font_weight",renderHTML:function(t){var e=t.HTMLAttributes;return y({font_weight:e.value})},addAttributes:function(){return{value:{default:null}}},addCommands:function(){var t=this;return{applyFontWeight:function(e){return function(n){var i=n.commands;i.setMark(t.name,{value:e})}}}}}),L=n(3796),T=_.vc.create({name:"font_size",addOptions:function(){return{deviceStorage:null}},addAttributes:function(){return{mobile:{default:null},tablet:{default:null},desktop:{default:null}}},addCommands:function(){var t=this;return{applyFontSize:function(e){return function(n){var i=n.commands,r=t.options.deviceStorage.value;i.setMark(t.name,(0,L.Z)({},r,e))}}}},renderHTML:function(t){var e=t.HTMLAttributes;return y({mobile_font_size:e.mobile?e.mobile+"px":null,tablet_font_size:e.tablet?e.tablet+"px":null,desktop_font_size:e.desktop?e.desktop+"px":null})}}),S=n(2751),Z=n(6133),I=(0,S.Z)((function t(e){(0,Z.Z)(this,t),this.value=e})),k={name:"TextEditor",components:{EditorContent:u.kg,BubbleMenu:u.NM},props:{value:{type:Object,default:""},device:{type:String,required:!0}},data:function(){return{editor:null,deviceStorage:new I(this.device),fontWeights:["300","400","500","600","700"],fontSizes:["12","14","16","18","20"],listTypes:["None","1.","*"],presets:["h1","h2","h3","h4","regular"]}},computed:{activeFontWeight:function(){return this.editor.getAttributes("font_weight").value||"400"},activeFontSize:function(){return this.editor.getAttributes("font_size")[this.device]||"14"},activeListType:function(){return this.editor.isActive("orderedList")?"1.":this.editor.isActive("bulletList")?"*":"none"},isItalic:function(){return this.editor.isActive("italic")},activePreset:function(){if(this.editor.isActive("heading")){var t=this.editor.getAttributes("heading"),e=t.level;return"h".concat(e)}return"regular"}},watch:{value:function(t){var e=JSON.stringify(this.editor.getJSON())===JSON.stringify(t);e||this.editor.commands.setContent(t,!1)},device:function(t){this.deviceStorage.value=t}},mounted:function(){var t=this;this.editor=new u.ML({content:this.value,onUpdate:function(){return t.$emit("input",t.editor.getJSON())},extensions:[c.Z,d.Z,l.Z,f.Z,V,v.ZP,p.ZP,h.Z,g.ZP,T.configure({deviceStorage:this.deviceStorage}),m.Z.configure({levels:[1,2,3,4]})]})},beforeDestroy:function(){this.editor.destroy()},methods:{changeFontWeight:function(t){this.editor.chain().focus().applyFontWeight(t).run()},changeFontSize:function(t){this.editor.chain().focus().applyFontSize(t).run()},changeListType:function(t){var e="none"===t?this.activeListType:t,n="*"===e?"toggleBulletList":"toggleOrderedList";return this.editor.chain().focus()[n]().run()},toggleItalic:function(){this.editor.chain().focus().toggleItalic().run()},changePreset:function(t){if(["h1","h2","h3","h4"].includes(t)){var e=parseInt(t.replace("h",""));this.editor.chain().focus().setHeading({level:e}).run()}else{var n=parseInt(this.activePreset.replace("h",""));this.editor.chain().focus().toggleHeading({level:n}).run()}}}},O=k,x=n(1001),B=n(3453),M=n.n(B),w=n(9047),z=n(6816),F=n(7620),A=n(7874),P=n(4418),j=n(1152),W=n(6656),C=n(7921),E=(0,x.Z)(O,a,s,!1,null,"212fe461",null),N=E.exports;M()(E,{VBtn:w.Z,VList:z.Z,VListItem:F.Z,VListItemGroup:A.Z,VListItemTitle:P.V9,VMenu:j.Z,VToolbar:W.Z,VToolbarItems:C.lj});var H={name:"App",components:{TextEditor:N},data:function(){return{device:"desktop",content:{type:"doc",content:[{type:"paragraph",content:[{type:"text",text:"Wow, this editor instance exports its content as JSON."}]}]}}}},G=H,J=n(7524),$=n(7477),q=n(6428),D=(0,x.Z)(G,r,o,!1,null,null,null),U=D.exports;M()(D,{VApp:J.Z,VBtn:w.Z,VBtnToggle:$.Z,VIcon:q.Z});var K=n(6800),Q=n(2466);i.Z.use(K.Z,{components:Q});var R=new K.Z({});i.Z.config.productionTip=!1,new i.Z({vuetify:R,render:function(t){return t(U)}}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,o){if(!i){var a=1/0;for(l=0;l<t.length;l++){i=t[l][0],r=t[l][1],o=t[l][2];for(var s=!0,u=0;u<i.length;u++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(s=!1,o<a&&(a=o));if(s){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,a=i[0],s=i[1],u=i[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(e&&e(i);c<a.length;c++)o=a[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},i=self["webpackChunktiptap"]=self["webpackChunktiptap"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4870)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.a6691dcd.js.map