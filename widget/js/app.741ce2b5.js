(function(e){function t(t){for(var o,i,l=t[0],c=t[1],u=t[2],p=0,d=[];p<l.length;p++)i=l[p],r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/widget/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("04f5"),r=n.n(o);r.a},"04f5":function(e,t,n){},"23be":function(e,t,n){},"48cd":function(e,t,n){},5063:function(e,t,n){"use strict";var o=n("5e57"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("LeafletMap")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}],c={name:"HelloWorld",props:{msg:String}},u=c,s=(n("95f9"),n("2877")),p=Object(s["a"])(u,i,l,!1,null,"0b4e7338",null);p.options.__file="HelloWorld.vue";var d=p.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map-container",attrs:{id:"mapBoxMap"}})},m=[],h=(n("28a5"),n("7f7f"),n("e192")),v=n.n(h),g="http://localhost:8080",y="http://localhost:5757",_="weapp",b=y+"/"+_,k={localhost:g,service:{server:y,serviceUrl:b},minedata:{serviceUrl:"http://139.199.20.29/data",accessToken:"67f6bfed606941f9a63d26d0ad61de2f",solution:4784}},x=k,w=function(e){return"".concat(x.minedata.serviceUrl).concat(e,"/{z}/{x}/{y}?token=").concat(x.minedata.accessToken,"&solu=").concat(x.minedata.solution)},j=(w("/Landuse"),w("/Ptline"),w("/Buildingmore"),w("/Railway"),w("/Waterface"),w("/Villtown"),w("/Road"),w("/Worldannotation"),w("/Poi"),w("/Greenface"),w("/Subwaypolygon"),w("/Annotation"),w("/Adminbound"),w("/Waterline"),w("/Worldcountries"),w("/Ptexit"),w("/ResidentialPolygon"),w("/Worldwaterface"),w("/Ptstop"),w("/Adminflag"),w("/Zlevel"),"".concat(x.localhost,"/res/mapbox/sprite/sprite"),"".concat(x.localhost,"/res/mapbox/glyphs/{fontstack}/{range}"),{version:8,sprite:"".concat(x.localhost,"/res/mapbox/sprite/sprite"),glyphs:"".concat(x.localhost,"/res/mapbox/glyphs/{fontstack}/{range}.pbf"),sources:{"raster-tiles":{type:"raster",tiles:["http://rt0.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0","http://rt1.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0","http://rt2.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0","http://rt3.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0"],scheme:"tms",tileSize:256,minZoom:5,maxZoom:18}},layers:[{id:"simple-tiles",type:"raster",source:"raster-tiles"}]}),M=j,T=n("bc3a"),O=n.n(T),P=O.a.create({baseURL:"/api"}),z=function(e){return P.get(e).then(function(e){return e.data})},F=function(e,t){return P.post(e,t).then(function(e){return e.data})},L={get:z,post:F},I=n("324a"),S=n.n(I),Z=function(e){return S.a.parse(e)},C=function(e){return S.a.stringify(e)},E={wktToGeojson:Z,geoJsonToWkt:C};v.a.accessToken="pk.eyJ1IjoibWFkc2hhd24iLCJhIjoiY2lqY2ZwcW4zMDAwMXc2a3VybmsxdzU1OSJ9.UTV2YhX9rABrPQIEI2QKwg";var W={name:"MainMap",props:{},mounted:function(){this.createMap()},methods:{createMap:function(){var e=new v.a.Map({container:"mapBoxMap",style:M,minZoon:3,maxZoom:24,zoom:17,center:[108.94400235446722,34.300590391379714]});e.on("zoomend",function(t){console.log(e.getZoom())})},loadBuilding:function(e){return L.get("/indoor/building/".concat(e)).then(function(e){if(e&&e.data&&e.data.length>0){var t=e.data[0];return{type:"Feature",properties:{id:t.id,kind:t.kind,name:t.name,center:t.center_coordinate.split(",").map(function(e){return parseFloat(e)})},geometry:E.wktToGeojson(t.geometry)}}return null}).catch(function(e){return console.error(e),null})},loadPoiFace:function(e){return L.get("/indoor/building/floor/poiFace/".concat(e)).then(function(e){return e&&e.data&&e.data.length>0?e.data.map(function(e){return{type:"Feature",properties:{id:e.face_id,kind:e.kind},geometry:E.wktToGeojson(e.geometry)}}):null}).catch(function(e){return console.error(e),null})},loadLink:function(e){return L.get("/indoor/building/floor/link/".concat(e)).then(function(e){return e&&e.data&&e.data.length>0?e.data.map(function(e){return{type:"Feature",properties:{id:e.link_id,kind:e.kind,type:e.type,snodeId:e.snode_id,enodeId:e.enode_id},geometry:E.wktToGeojson(e.geometry)}}):null}).catch(function(e){return console.error(e),null})},loadPoi:function(e){return L.get("/indoor/building/floor/poi/".concat(e)).then(function(e){return e&&e.data&&e.data.length>0?e.data.map(function(e){var t=E.wktToGeojson(e.geometry);return{type:"Feature",properties:{id:e.id,kind:e.kind,name:e.name,faceId:e.face_id},geometry:t}}):null}).catch(function(e){return console.error(e),null})}}},G=W,J=(n("6afe"),Object(s["a"])(G,f,m,!1,null,"1664a3ae",null));J.options.__file="MapBoxMap.vue";var $=J.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map-container",attrs:{id:"leafletMap"}})},U=[],A=n("e11e"),N=n.n(A),V=(n("6cc5"),{name:"LeafletMap",props:{},mounted:function(){this.createMap()},methods:{createMap:function(){var e=N.a.map("leafletMap",{minZoom:5,maxZoom:24}).setView([34.300590391379714,108.94400235446722],15);N.a.tileLayer("http://{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0",{attribution:"test",minZoom:5,maxZoom:18,id:"mapbox.streets",subdomains:["rt0","rt1","rt2","rt3"],tms:!0}).addTo(e),this.loadBuilding(6101000094).then(function(t){t&&(N.a.geoJSON(t,{style:{color:"#999",fill:!0,fillColor:"#666",fillOpacity:.2}}).addTo(e),e.setView(t.properties.center,18))}),this.loadPoiFace(61010000941001).then(function(t){t&&N.a.geoJSON(t,{style:{color:"#999",fill:!0,fillColor:"#999",fillOpacity:.2}}).addTo(e)}),this.loadLink(61010000941001).then(function(t){t&&N.a.geoJSON(t,{style:{color:"#ddd"}}).addTo(e)}),this.loadPoi(61010000941001).then(function(t){t&&N.a.geoJSON(t,{style:{radius:2,color:"#999",fill:!0,fillColor:"#999",fillOpacity:.2},pointToLayer:function(e,t){var n=N.a.divIcon({html:e.properties.name,className:"div-icon"});return N.a.marker(t,{icon:n})}}).addTo(e)})},loadBuilding:function(e){return L.get("/indoor/building/".concat(e)).then(function(e){if(e&&e.data&&e.data.length>0){var t=e.data[0];return{type:"Feature",properties:{id:t.id,kind:t.kind,name:t.name,center:t.center_coordinate.split(",").map(function(e){return parseFloat(e)}).reverse()},geometry:E.wktToGeojson(t.geometry)}}return null}).catch(function(e){return console.error(e),null})},loadPoiFace:function(e){return L.get("/indoor/building/floor/poiFace/".concat(e)).then(function(e){return e&&e.data&&e.data.length>0?e.data.map(function(e){return{type:"Feature",properties:{id:e.face_id,kind:e.kind},geometry:E.wktToGeojson(e.geometry)}}):null}).catch(function(e){return console.error(e),null})},loadLink:function(e){return L.get("/indoor/building/floor/link/".concat(e)).then(function(e){return e&&e.data&&e.data.length>0?e.data.map(function(e){return{type:"Feature",properties:{id:e.link_id,kind:e.kind,type:e.type,snodeId:e.snode_id,enodeId:e.enode_id},geometry:E.wktToGeojson(e.geometry)}}):null}).catch(function(e){return console.error(e),null})},loadPoi:function(e){return L.get("/indoor/building/floor/poi/".concat(e)).then(function(e){return e&&e.data&&e.data.length>0?e.data.map(function(e){var t=E.wktToGeojson(e.geometry);return{type:"Feature",properties:{id:e.id,kind:e.kind,name:e.name,faceId:e.face_id},geometry:t}}):null}).catch(function(e){return console.error(e),null})}}}),R=V,H=(n("5063"),Object(s["a"])(R,B,U,!1,null,"eb23c0e6",null));H.options.__file="LeafletMap.vue";var Y=H.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map-container",attrs:{id:"mineMap"}})},Q=[];minemap.domainUrl="http://139.199.20.29",minemap.serviceUrl="http://139.199.20.29/service",minemap.spriteUrl="http://139.199.20.29/app/images/map/sprite",minemap.accessToken="6cbcf83014ca4d2abbe758e02c9e3dbe";var X={name:"MineMap",props:{},mounted:function(){this.createMap()},methods:{createMap:function(){minemap.solution=4791;new minemap.Map({container:"mineMap",style:"http://139.199.20.29/service/solu/style/id/4791",minZoon:3,maxZoom:24,zoom:16,center:[108.94400235446722,34.300590391379714]})}}},q=X,K=(n("ad63"),Object(s["a"])(q,D,Q,!1,null,"1482816d",null));K.options.__file="MineMap.vue";var ee=K.exports,te={name:"app",components:{HelloWorld:d,MapBoxMap:$,LeafletMap:Y,MineMap:ee}},ne=te,oe=(n("034f"),Object(s["a"])(ne,r,a,!1,null,null,null));oe.options.__file="App.vue";var re=oe.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(re)}}).$mount("#app")},"5e57":function(e,t,n){},"6afe":function(e,t,n){"use strict";var o=n("23be"),r=n.n(o);r.a},"95f9":function(e,t,n){"use strict";var o=n("a25f"),r=n.n(o);r.a},a25f:function(e,t,n){},ad63:function(e,t,n){"use strict";var o=n("48cd"),r=n.n(o);r.a}});
//# sourceMappingURL=app.741ce2b5.js.map