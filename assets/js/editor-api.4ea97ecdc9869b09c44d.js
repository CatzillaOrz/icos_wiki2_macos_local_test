/*! Wiki.js - wiki.js.org - Licensed under AGPL */
(this.webpackJsonp=this.webpackJsonp||[]).push([["editor-api"],{"./client/components/editor/editor-api.vue":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"editor-api"},[s("div",{staticClass:"editor-api-main"},[s("v-list",{staticClass:"editor-api-sidebar radius-0",class:e.$vuetify.theme.dark?"grey darken-4":"primary",attrs:{nav:"",dark:""}},[s("v-list-item-group",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[s("v-list-item",{staticClass:"animated fadeInLeft",attrs:{value:"info"}},[s("v-list-item-icon",[s("v-icon",[e._v("mdi-book-information-variant")])],1),s("v-list-item-title",[e._v("Info")])],1),s("v-list-item",{staticClass:"mt-3 animated fadeInLeft wait-p2s",attrs:{value:"servers"}},[s("v-list-item-icon",[s("v-icon",[e._v("mdi-server")])],1),s("v-list-item-title",[e._v("Servers")])],1),s("v-list-item",{staticClass:"mt-3 animated fadeInLeft wait-p3s",attrs:{value:"endpoints"}},[s("v-list-item-icon",[s("v-icon",[e._v("mdi-code-braces")])],1),s("v-list-item-title",[e._v("Endpoints")])],1),s("v-list-item",{staticClass:"mt-3 animated fadeInLeft wait-p4s",attrs:{value:"models"}},[s("v-list-item-icon",[s("v-icon",[e._v("mdi-buffer")])],1),s("v-list-item-title",[e._v("Models")])],1),s("v-list-item",{staticClass:"mt-3 animated fadeInLeft wait-p5s",attrs:{value:"auth"}},[s("v-list-item-icon",[s("v-icon",[e._v("mdi-lock")])],1),s("v-list-item-title",[e._v("Authentication")])],1)],1)],1),s("div",{staticClass:"editor-api-editor"},["info"===e.tab?[s("v-container",{staticClass:"px-2 pt-1",attrs:{fluid:""}},[s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"pa-3"},[s("div",{staticClass:"subtitle-2"},[e._v("API General Information")]),s("div",{staticClass:"caption grey--text text--darken-1"},[e._v("Global metadata about the API")])])]),s("v-col",{attrs:{cols:"12",lg:"6"}},[s("v-card",{staticClass:"pt-2"},[s("v-card-text",[s("v-text-field",{attrs:{label:"Title",outlined:"",hint:"Required - Title of the API","persistent-hint":""},model:{value:e.info.title,callback:function(t){e.$set(e.info,"title",t)},expression:"info.title"}}),s("v-divider",{staticClass:"mt-2 mb-4"}),s("v-text-field",{attrs:{label:"Version",outlined:"",hint:"Required - Semantic versioning like 1.0.0 or an arbitrary string like 0.99-beta.","persistent-hint":""},model:{value:e.info.version,callback:function(t){e.$set(e.info,"version",t)},expression:"info.version"}}),s("v-divider",{staticClass:"mt-2 mb-4"}),s("v-textarea",{attrs:{label:"Description",outlined:"",hint:"Optional - Markdown formatting is supported.","persistent-hint":""},model:{value:e.info.description,callback:function(t){e.$set(e.info,"description",t)},expression:"info.description"}})],1)],1)],1),s("v-col",{attrs:{cols:"12",lg:"6"}},[s("v-card",{staticClass:"pt-2"},[s("v-card-text",[s("v-list",{attrs:{nav:"","two-line":""}},[s("v-list-item-group",{attrs:{mandatory:"",color:"primary"},model:{value:e.kind,callback:function(t){e.kind=t},expression:"kind"}},[s("v-list-item",{attrs:{value:"rest"}},[s("v-list-item-avatar",[s("img",{attrs:{src:"/svg/icon-transaction-list.svg",alt:"REST"}})]),s("v-list-item-content",[s("v-list-item-title",[e._v("REST API")]),s("v-list-item-subtitle",[e._v("Classic REST Endpoints")])],1),s("v-list-item-avatar",[s("v-icon",{attrs:{color:"rest"===e.kind?"primary":"grey lighten-3"}},[e._v("mdi-check-circle")])],1)],1),s("v-list-item",{attrs:{value:"graphql",disabled:""}},[s("v-list-item-avatar",[s("img",{attrs:{src:"/svg/icon-graphql.svg",alt:"GraphQL"}})]),s("v-list-item-content",[s("v-list-item-title",[e._v("GraphQL")]),s("v-list-item-subtitle",{staticClass:"grey--text text--lighten-1"},[e._v("Schema-based API")])],1),s("v-list-item-action",[s("v-chip",{attrs:{label:"",small:""}},[e._v("Coming soon")])],1)],1)],1)],1)],1)],1)],1)],1)],1)]:"servers"===e.tab?[s("v-container",{staticClass:"px-2 pt-1",attrs:{fluid:""}},[s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"pa-3"},[s("div",{staticClass:"d-flex align-center justify-space-between"},[s("div",[s("div",{staticClass:"subtitle-2"},[e._v("List of servers / load balancers where this API reside")]),s("div",{staticClass:"caption grey--text text--darken-1"},[e._v("Enter all environments, e.g. Integration, QA, Pre-production, Production, etc.")])]),s("v-btn",{attrs:{color:"primary",large:""},on:{click:e.addServer}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),s("span",[e._v("Add Server")])],1)],1)])]),e._l(e.servers,(function(t){return s("v-col",{key:t.id,attrs:{cols:"12",lg:"6"}},[s("v-card",{staticClass:"pt-1"},[s("v-card-text",[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"d-flex flex-column justify-space-between"},[s("v-menu",{attrs:{"offset-y":"","min-width":"200"},scopedSlots:e._u([{key:"activator",fn:function(i){var o=i.on;return[s("v-btn",e._g({staticStyle:{"min-width":"0"},attrs:{text:"","x-large":""}},o),[s("v-icon",{attrs:{large:"",color:e.iconColor(t.icon)}},[e._v(e._s(e.iconKey(t.icon)))])],1)]}}],null,!0)},[s("v-list",{attrs:{nav:"",dense:""}},[s("v-list-item-group",{attrs:{mandatory:""},model:{value:t.icon,callback:function(s){e.$set(t,"icon",s)},expression:"srv.icon"}},e._l(e.serverTypes,(function(t,i){return s("v-list-item",{key:i,attrs:{value:i}},[s("v-list-item-icon",[s("v-icon",{attrs:{large:"",color:t.color},domProps:{textContent:e._s(t.icon)}})],1),s("v-list-item-content",[s("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),1)],1)],1),s("v-btn",{staticClass:"mb-2",attrs:{depressed:"",small:""},on:{click:function(s){return e.removeServer(t.id)}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-close")]),s("span",[e._v("Delete")])],1)],1),s("v-divider",{staticClass:"ml-5",attrs:{vertical:""}}),s("div",{staticClass:"pl-5",staticStyle:{flex:"1 1 100%"}},[s("v-text-field",{attrs:{label:"Environment / Server Name",outlined:"",hint:"Required - Name of the environment (e.g. QA, Production)","persistent-hint":""},model:{value:t.name,callback:function(s){e.$set(t,"name",s)},expression:"srv.name"}}),s("v-text-field",{staticClass:"mt-4",attrs:{label:"URL",outlined:"",hint:"Required - URL of the environment (e.g. https://api.example.com/v1)","persistent-hint":""},model:{value:t.url,callback:function(s){e.$set(t,"url",s)},expression:"srv.url"}})],1)],1)])],1)],1)}))],2)],1)]:"endpoints"===e.tab?[s("v-container",{staticClass:"px-2 pt-1",attrs:{fluid:""}},[s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"pa-3"},[s("div",{staticClass:"d-flex align-center justify-space-between"},[s("div",[s("div",{staticClass:"subtitle-2"},[e._v("List of endpoints")]),s("div",{staticClass:"caption grey--text text--darken-1"},[e._v("Groups of REST endpoints (GET, POST, PUT, DELETE).")])]),s("v-btn",{attrs:{color:"primary",large:""},on:{click:e.addGroup}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),s("span",[e._v("Add Group")])],1)],1)])]),e._l(e.endpointGroups,(function(t){return s("v-col",{key:t.id,attrs:{cols:"12"}},[s("v-card",{attrs:{color:"grey darken-2"}},[s("v-card-text",[s("v-toolbar",{attrs:{color:"grey darken-2",flat:"",height:"86"}},[s("v-text-field",{staticClass:"mr-1",attrs:{flat:"",dark:"",label:"Group Name",solo:"",hint:"Group Name","persistent-hint":""},model:{value:t.name,callback:function(s){e.$set(t,"name",s)},expression:"grp.name"}}),s("v-text-field",{staticClass:"mx-1",attrs:{flat:"",dark:"",label:"Group Description",solo:"",hint:"Group Description","persistent-hint":""},model:{value:t.description,callback:function(s){e.$set(t,"description",s)},expression:"grp.description"}}),s("v-divider",{staticClass:"mx-3",attrs:{vertical:"",dark:""}}),s("v-btn",{staticClass:"mx-1 align-self-start",attrs:{color:"grey lighten-2",dark:"",text:"",height:"48"},on:{click:function(s){return e.addEndpoint(t)}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-trash-can")]),s("span",[e._v("Delete")])],1),s("v-divider",{staticClass:"mx-3",attrs:{vertical:"",dark:""}}),s("v-btn",{staticClass:"ml-1 align-self-start",attrs:{color:"pink",dark:"",depressed:"",height:"48"},on:{click:function(s){return e.addEndpoint(t)}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),s("span",[e._v("Add Endpoint")])],1)],1),s("v-container",{staticClass:"pa-0 mt-2",attrs:{fluid:""}},[s("v-row",{attrs:{dense:""}},e._l(t.endpoints,(function(i){return s("v-col",{key:i.id,attrs:{cols:"12"}},[s("v-card",{staticClass:"pt-1"},[s("v-card-text",[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"d-flex flex-column"},[s("v-menu",{attrs:{"offset-y":"","min-width":"140"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[s("v-btn",e._g({staticClass:"subtitle-1",staticStyle:{"min-width":"140px"},attrs:{depressed:"",large:"",dark:"",height:"48",color:e.methodColor(i.method)}},o),[s("strong",[e._v(e._s(i.method))])])]}}],null,!0)},[s("v-list",{attrs:{nav:"",dense:""}},[s("v-list-item-group",{attrs:{mandatory:""},model:{value:i.method,callback:function(t){e.$set(i,"method",t)},expression:"ept.method"}},e._l(e.endpointMethods,(function(t){return s("v-list-item",{key:t.key,attrs:{value:t.key}},[s("v-list-item-content",[s("v-chip",{staticClass:"text-center",attrs:{label:"",color:t.color,dark:""}},[e._v(e._s(t.key))])],1)],1)})),1)],1)],1),i.expanded?s("v-btn",{staticClass:"mt-2",attrs:{small:"",color:"pink",outlined:""},on:{click:function(e){i.expanded=!1}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-arrow-up-box")]),s("span",[e._v("Collapse")])],1):s("v-btn",{staticClass:"mt-2",attrs:{small:"",color:"pink",outlined:""},on:{click:function(e){i.expanded=!0}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-arrow-down-box")]),s("span",[e._v("Expand")])],1),i.expanded?[s("v-spacer"),s("v-btn",{staticClass:"my-2",attrs:{depressed:"",small:""},on:{click:function(s){return e.removeEndpoint(t,i.id)}}},[s("v-icon",{attrs:{left:""}},[e._v("mdi-close")]),s("span",[e._v("Delete")])],1)]:e._e()],2),s("v-divider",{staticClass:"ml-5",attrs:{vertical:""}}),s("div",{staticClass:"pl-5",staticStyle:{flex:"1 1 100%"}},[s("div",{staticClass:"d-flex"},[s("v-text-field",{staticClass:"mr-2",attrs:{label:"Path",outlined:"",hint:"Required - Path to the endpoint (e.g. /planets/{planetId})","persistent-hint":""},model:{value:i.path,callback:function(t){e.$set(i,"path",t)},expression:"ept.path"}}),s("v-text-field",{staticClass:"ml-2",attrs:{label:"Summary",outlined:"",hint:"Required - A short summary of the endpoint (a few words).","persistent-hint":""},model:{value:i.summary,callback:function(t){e.$set(i,"summary",t)},expression:"ept.summary"}})],1),i.expanded?[s("v-text-field",{staticClass:"mt-3",attrs:{label:"Description",outlined:""},model:{value:i.description,callback:function(t){e.$set(i,"description",t)},expression:"ept.description"}})]:e._e()],2)],1)])],1)],1)})),1)],1)],1)],1)],1)}))],2)],1)]:e._e()],2)],1),s("v-system-bar",{staticClass:"editor-api-sysbar",attrs:{dark:"",status:"",color:"grey darken-3"}},[s("div",{staticClass:"caption editor-api-sysbar-locale"},[e._v(e._s(e.locale.toUpperCase()))]),s("div",{staticClass:"caption px-3"},[e._v("/"+e._s(e.path))]),e.$vuetify.breakpoint.mdAndUp?[s("v-spacer"),s("div",{staticClass:"caption"},[e._v("API Docs")]),s("v-spacer"),s("div",{staticClass:"caption"},[e._v("OpenAPI 3.0")])]:e._e()],2)],1)};i._withStripped=!0;var o=s("./node_modules/lodash/reject.js"),a=s.n(o),n=s("./node_modules/lodash/find.js"),l=s.n(n),r=s("./node_modules/lodash/get.js"),d=s.n(r),c=s("./node_modules/uuid/dist/index.js"),v=s("./node_modules/vuex-pathify/dist/vuex-pathify.js"),m={data:()=>({tab:"endpoints",kind:"rest",kinds:[{text:"REST",value:"rest"},{text:"GraphQL",value:"graphql"}],info:{title:"",version:"1.0.0",description:""},servers:[{name:"Production",url:"https://api.example.com/v1",icon:"server",id:"123456"}],serverTypes:{aws:{color:"orange",icon:"mdi-aws",title:"AWS"},azure:{color:"blue darken-2",icon:"mdi-azure",title:"Azure"},digitalocean:{color:"blue",icon:"mdi-digital-ocean",title:"DigitalOcean"},docker:{color:"blue",icon:"mdi-docker",title:"Docker"},google:{color:"red",icon:"mdi-google",title:"Google"},kubernetes:{color:"blue darken-2",icon:"mdi-kubernetes",title:"Kubernetes"},linux:{color:"grey darken-3",icon:"mdi-linux",title:"Linux"},mac:{color:"grey darken-2",icon:"mdi-apple",title:"Mac"},server:{color:"grey",icon:"mdi-server",title:"Server"},windows:{color:"blue darken-2",icon:"mdi-windows",title:"Windows"}},endpointGroups:[{id:"345678",name:"",description:"",endpoints:[{method:"GET",path:"/pet",expanded:!1,id:"234567"}]}],endpointMethods:[{key:"GET",color:"blue"},{key:"POST",color:"green"},{key:"PUT",color:"orange"},{key:"PATCH",color:"cyan"},{key:"DELETE",color:"red"},{key:"HEAD",color:"deep-purple"},{key:"OPTIONS",color:"blue-grey"}]}),computed:{isMobile(){return this.$vuetify.breakpoint.smAndDown},locale:Object(v.get)("page/locale"),path:Object(v.get)("page/path"),mode:Object(v.get)("editor/mode"),activeModal:Object(v.sync)("editor/activeModal")},methods:{iconColor(e){return d()(this.serverTypes,"".concat(e,".color"),"white")},iconKey(e){return d()(this.serverTypes,"".concat(e,".icon"),"mdi-server")},methodColor(e){return d()(l()(this.endpointMethods,["key",e]),"color","grey")},addServer(){this.servers.push({id:Object(c.v4)(),name:"Production",url:"https://api.example.com/v1",icon:"server"})},removeServer(e){this.servers=a()(this.servers,["id",e])},addGroup(){this.endpointGroups.push({id:Object(c.v4)(),name:"",description:"",endpoints:[]})},addEndpoint(e){e.endpoints.push({id:Object(c.v4)(),method:"GET",path:"/pet",expanded:!1})},removeEndpoint(e,t){e.endpoints=a()(e.endpoints,["id",t])},toggleModal(e){this.activeModal=this.activeModal===e?"":e,this.helpShown=!1},closeAllModal(){this.activeModal="",this.helpShown=!1}},mounted(){this.$store.set("editor/editorKey","api"),"create"===this.mode&&this.$store.set("editor/content","<h1>Title</h1>\n\n<p>Some text here</p>")},beforeDestroy(){this.$root.$off("editorInsert")}},u=(s("./client/components/editor/editor-api.vue?vue&type=style&index=0&lang=scss&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),p=s("./node_modules/vuetify-loader/lib/runtime/installComponents.js"),f=s.n(p),b=s("./node_modules/vuetify/lib/components/VBtn/VBtn.js"),_=s("./node_modules/vuetify/lib/components/VCard/VCard.js"),y=s("./node_modules/vuetify/lib/components/VCard/index.js"),h=s("./node_modules/vuetify/lib/components/VChip/VChip.js"),x=s("./node_modules/vuetify/lib/components/VGrid/VCol.js"),g=s("./node_modules/vuetify/lib/components/VGrid/VContainer.js"),j=s("./node_modules/vuetify/lib/components/VDivider/VDivider.js"),k=s("./node_modules/vuetify/lib/components/VIcon/VIcon.js"),C=s("./node_modules/vuetify/lib/components/VList/VList.js"),V=s("./node_modules/vuetify/lib/components/VList/VListItem.js"),L=s("./node_modules/vuetify/lib/components/VList/VListItemAction.js"),w=s("./node_modules/vuetify/lib/components/VList/VListItemAvatar.js"),I=s("./node_modules/vuetify/lib/components/VList/index.js"),S=s("./node_modules/vuetify/lib/components/VList/VListItemGroup.js"),T=s("./node_modules/vuetify/lib/components/VList/VListItemIcon.js"),E=s("./node_modules/vuetify/lib/components/VMenu/VMenu.js"),G=s("./node_modules/vuetify/lib/components/VGrid/VRow.js"),P=s("./node_modules/vuetify/lib/components/VGrid/VSpacer.js"),A=s("./node_modules/vuetify/lib/components/VSystemBar/VSystemBar.js"),$=s("./node_modules/vuetify/lib/components/VTextField/VTextField.js"),D=s("./node_modules/vuetify/lib/components/VTextarea/VTextarea.js"),M=s("./node_modules/vuetify/lib/components/VToolbar/VToolbar.js"),O=Object(u.a)(m,i,[],!1,null,null,null);f()(O,{VBtn:b.a,VCard:_.a,VCardText:y.b,VChip:h.a,VCol:x.a,VContainer:g.a,VDivider:j.a,VIcon:k.a,VList:C.a,VListItem:V.a,VListItemAction:L.a,VListItemAvatar:w.a,VListItemContent:I.b,VListItemGroup:S.a,VListItemIcon:T.a,VListItemSubtitle:I.c,VListItemTitle:I.d,VMenu:E.a,VRow:G.a,VSpacer:P.a,VSystemBar:A.a,VTextField:$.a,VTextarea:D.a,VToolbar:M.a}),O.options.__file="client/components/editor/editor-api.vue";t.default=O.exports},"./client/components/editor/editor-api.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){"use strict";var i=s("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-api.vue?vue&type=style&index=0&lang=scss&");s.n(i).a},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-api.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){var i=s("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-api.vue?vue&type=style&index=0&lang=scss&");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};i(o,a);e.exports=o.locals||{}},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-api.vue?vue&type=style&index=0&lang=scss&":function(e,t,s){}}]);