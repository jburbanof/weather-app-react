(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{268:function(e,t,n){},481:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(30),i=n.n(a),o=(n(268),n(55)),s=n(37),u=n(21),j=n(226),l=n.n(j),d=n(227),b=function(){var e=Object(r.useRef)(null),t=Object(r.useState)(0),n=Object(u.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){return c||a(l()({THREE:d,el:e.current})),function(){c&&c.destroy()}}),[c]),e},h=n(8),O=function(e){var t=e.children,n=b();return Object(h.jsx)("div",{className:"full",ref:n,children:t})},m=n(518),f=n(482),x=n(522),y=n(0),p=n(48),v=function(){var e=Object(r.useMemo)((function(){return{size:"6em"}}),[]);return Object(h.jsx)(O,{children:Object(h.jsx)(m.a,{container:!0,direction:"column",justifyContent:"center",className:"full",children:Object(h.jsx)("div",{className:"highlight",children:Object(h.jsxs)(m.a,{item:!0,container:!0,xs:12,justifyContent:"center",alignItems:"center",children:[Object(h.jsx)(m.a,{item:!0,children:Object(h.jsx)(y.b.Provider,{value:e,children:Object(h.jsx)(p.b,{})})}),Object(h.jsxs)(m.a,{item:!0,container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(h.jsx)(f.a,{variant:"h4",color:"inherit",children:"Weather App"}),Object(h.jsx)(x.a,{color:"inherit","aria-label":"menu",component:o.b,to:"/main",children:"Start"})]})]})})})})},C=n(33),g=n(483),w=n(41),E=n(526),I=n(524),k=n(539),S=n(45),T=n.n(S),L=n(19),A=n(69),D=n(131),_=n.n(D),N=n(228),F=n.n(N),M=function(e,t){return"".concat(e,"-").concat(t)},W=function(e){return Number(F()(e).from("K").to("C").toFixed(0))},P=["clouds","drizzle","clear","rain","snow","thunderstorm"],z={clouds:p.a,clear:p.b,rain:p.c,snow:p.e,drizzle:p.d,thunderstorm:p.f},R=function(e){var t=e.state,n=z[t];return Object(h.jsx)(n,{})},H=function(e,t,n){var r=e.data,c=W(r.main.temp),a=r.main.humidity,i=r.wind.speed,o=r.weather[0].main.toLowerCase(),s=P.includes(o)?o:null,u=M(t,n),j={temperature:c,state:s,humidity:a,wind:i};return Object(L.a)({},u,j)},q="6eed5ecf1b61d636500feff49314d96a",J=function(e,t){return"http://api.openweathermap.org/data/2.5/weather?q=".concat(e,",").concat(t,"&appid=").concat(q)},K=function(e,t){return"http://api.openweathermap.org/data/2.5/forecast?q=".concat(e,",").concat(t,"&appid=").concat(q)},B=function(e,t,n){var c=Object(r.useState)(null),a=Object(u.a)(c,2),i=a[0],o=a[1];return Object(r.useEffect)((function(){var r=function(){var e=Object(A.a)(T.a.mark((function e(t,r){var c,a,i,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=J(t,r),e.prev=1,a=[M(t,r)],n({type:"SET_ALL_WEATHER",payload:Object(L.a)({},a,{})}),e.next=6,_.a.get(c);case 6:i=e.sent,s=H(i,t,r),n({type:"SET_ALL_WEATHER",payload:s}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response?o("Weather Server Error"):e.t0.request?o("Verify Your Connection"):o("Un-expected Error");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}();e.forEach((function(e){var n=e.city,c=e.countryCode;t[M(n,c)]||r(n,c)}))}),[e,n,t]),{error:i,setError:o}},Y=function(e){var t=e.city,n=e.countryCode;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(f.a,{display:"inline",variant:"h4",children:[t,"  ",n]})})},V=n(523),U=function(e){var t=e.temperature,n=e.state,c=Object(r.useMemo)((function(){return{size:"6em"}}),[]);return Object(h.jsxs)(m.a,{container:!0,item:!0,direction:"row",alignItems:"center",justifyContent:"center",spacing:2,children:[Object(h.jsx)(y.b.Provider,{value:c,children:n?Object(h.jsx)(R,{state:n}):Object(h.jsx)(V.a,{variant:"circle",height:80,width:80})}),t?Object(h.jsxs)(f.a,{display:"inline",variant:"h3",children:[t,"\xb0C"]}):Object(h.jsx)(V.a,{variant:"circle",height:80,width:80})]})},G=n(229),Q={allWeather:{},allChartData:{},allForecastItemList:{}},X=c.a.createContext(),Z=c.a.createContext(),$=function(e,t){switch(t.type){case"SET_ALL_WEATHER":var n=t.payload,r=Object(w.a)(Object(w.a)({},e.allWeather),n);return Object(w.a)(Object(w.a)({},e),{},{allWeather:r});case"SET_CHART_DATA":var c=t.payload,a=Object(w.a)(Object(w.a)({},e.allChartData),c);return Object(w.a)(Object(w.a)({},e),{},{allChartData:a});case"SET_FORECAST_ITEM_LIST":var i=t.payload,o=Object(w.a)(Object(w.a)({},e.allForecastItemList),i);return Object(w.a)(Object(w.a)({},e),{},{allForecastItemList:o});default:return e}},ee=function(e){var t=e.children,n=Object(r.useReducer)($,Q),c=Object(u.a)(n,2),a=c[0],i=c[1];return Object(h.jsx)(Z.Provider,{value:i,children:Object(h.jsx)(X.Provider,{value:a,children:t})})},te=function(){var e=Object(r.useContext)(Z);if(!e)throw Error("must set dispatch provider");return e},ne=function(){var e=Object(r.useContext)(X);if(!e)throw Error("must set state provider");return e},re=c.a.memo((function(e){var t=e.city,n=e.countryCode,r=e.weather,c=e.eventOnClickCity,a=e.eventOnClickDelete;return Object(h.jsxs)("div",{className:"cityItem",children:[Object(h.jsx)(I.a,{button:!0,onClick:function(){return c(t,n)},children:Object(h.jsxs)(m.a,{container:!0,justifyContent:"center",alignItems:"center",children:[Object(h.jsx)(m.a,{item:!0,md:6,xs:12,children:Object(h.jsx)(Y,{city:t,countryCode:n})}),Object(h.jsx)(m.a,{item:!0,md:3,xs:12,children:Object(h.jsx)(U,{temperature:r&&r.temperature,state:r&&r.state})})]})}),Object(h.jsx)(y.b.Provider,{value:{size:"2em"},children:Object(h.jsx)(G.a,{className:"delete",onClick:function(){return a(t)}})})]})})),ce=function(e){var t=e.cities,n=e.onClickCity,r=e.eventOnClickDelete,c=te(),a=ne().allWeather,i=B(t,a,c),o=i.error,s=i.setError;return Object(h.jsxs)("div",{children:[o&&Object(h.jsx)(k.a,{onClose:function(){return s(null)},severity:"error",children:o}),Object(h.jsx)(E.a,{children:t.map((function(e){return(t=n,function(e,n,r){var c=e.city,a=e.countryCode;return Object(h.jsx)(re,Object(w.a)(Object(w.a)({eventOnClickCity:t,eventOnClickDelete:r,weather:n},e),{},{city:c}),M(c,a))})(e,a[M(e.city,e.countryCode)],r,e.city);var t}))})]})},ae=c.a.memo(ce),ie=n(527),oe=n(528),se=n(525),ue=function(e){var t=e.children,n=Object(r.useMemo)((function(){return{size:"2em"}}),[]);return Object(h.jsxs)(m.a,{container:!0,justifyContent:"center",children:[Object(h.jsx)(ie.a,{position:"static",children:Object(h.jsxs)(oe.a,{variant:"dense",children:[Object(h.jsx)(se.a,{color:"inherit","aria-label":"manu",children:Object(h.jsx)(x.a,{component:o.b,to:"/main",color:"inherit",children:Object(h.jsx)(y.b.Provider,{value:n,children:Object(h.jsx)(p.b,{})})})}),Object(h.jsx)(f.a,{variant:"h6",color:"inherit",children:"Weather App"})]})}),Object(h.jsx)(m.a,{item:!0,xs:12,sm:11,md:10,lg:8,children:t})]})},je=n(537),le=n(529),de=n(138),be=de.a().shape({city:de.b().required(),countryCode:de.b().min(2).max(2).required()}),he=function(e){var t=e.callback,n=Object(r.useState)(""),c=Object(u.a)(n,2),a=c[0],i=c[1],o=Object(r.useState)(""),s=Object(u.a)(o,2),j=s[0],l=s[1],d=function(){var e=Object(A.a)(T.a.mark((function e(n){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={city:a,countryCode:j},e.next=4,be.isValid(r);case 4:e.sent?(t(a,j),l(""),i("")):alert("Search error, both fields are required and country code must have two characters.");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{className:"searchForm",children:[Object(h.jsx)(je.a,{type:"text",variant:"outlined",label:"City",color:"primary",className:"formItem",onChange:function(e){return i(e.target.value)},value:a,name:"city",required:!0}),Object(h.jsx)(je.a,{type:"text",variant:"outlined",label:"Country Code",color:"primary",className:"formItem",onChange:function(e){return l(e.target.value)},value:j,name:"city",required:!0}),Object(h.jsx)(le.a,{type:"submit",variant:"contained",color:"primary",className:"formItem",onClick:d,children:"Search"})]})},Oe=function(e){var t=e.actions,n=e.data,c=Object(s.f)(),a=Object(r.useState)([]),i=Object(u.a)(a,2),o=i[0],j=i[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("cityCountry");console.log(e),e?j(JSON.parse(e)):(j([{city:"Bogot\xe1",countryCode:"CO"}]),console.log("test",o))}),[]),Object(r.useEffect)((function(){localStorage.setItem("cityCountry",JSON.stringify(o))}),[o]),Object(h.jsxs)(ue,{children:[Object(h.jsx)(he,{callback:function(e,t){j([].concat(Object(C.a)(o),[{city:e,countryCode:t}]))}}),o.length>0&&Object(h.jsx)(g.a,{elevation:3,children:Object(h.jsx)(ae,{data:n,actions:t,cities:o,onClickCity:function(e,t){c.push("/city/".concat(t,"/").concat(e))},eventOnClickDelete:function(e){j(Object(C.a)(o).filter((function(t){return t.city!==e})))}})})]})},me=n(536),fe=function(e){var t=e.humidity,n=e.wind;return Object(h.jsxs)(m.a,{container:!0,item:!0,justifyContent:"center",alignItems:"center",direction:"column",children:[Object(h.jsxs)(f.a,{children:["Humidity:",t,"%"]}),Object(h.jsxs)(f.a,{children:["Wind:",n," km/h"]})]})},xe=n(530),ye=n(531),pe=n(114),ve=n(117),Ce=n(247),ge=n(248),we=n(535),Ee=n(250),Ie=function(e){var t=e.data,n=Object(r.useMemo)((function(){return{top:20,bottom:20,left:5,right:5}}),[]);return Object(h.jsx)(xe.a,{height:250,width:"95%",children:Object(h.jsxs)(ye.a,{margin:n,data:t,children:[Object(h.jsx)(pe.a,{}),Object(h.jsx)(ve.a,{}),Object(h.jsx)(Ce.a,{dataKey:"dayHour"}),Object(h.jsx)(ge.a,{}),Object(h.jsx)(we.a,{}),Object(h.jsx)(Ee.a,{type:"monotone",dataKey:"max",stroke:"#ff0000"}),Object(h.jsx)(Ee.a,{type:"monotone",dataKey:"min",stroke:"#0000ff"})]})})},ke=function(e){var t=e.weekDay,n=e.hour,c=e.state,a=e.temperature,i=Object(r.useMemo)((function(){return{size:"5em"}}),[]);return Object(h.jsxs)(m.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(h.jsx)(m.a,{item:!0,children:Object(h.jsx)(f.a,{children:t})}),Object(h.jsx)(m.a,{item:!0,children:Object(h.jsxs)(f.a,{children:[n,":00h"]})}),Object(h.jsx)(m.a,{item:!0,children:Object(h.jsx)(y.b.Provider,{value:i,children:Object(h.jsx)(R,{state:c})})}),Object(h.jsx)(m.a,{item:!0,children:Object(h.jsxs)(f.a,{children:[a,"\xb0C"]})})]})},Se=function(e){var t=e.forecastItemList;return Object(h.jsx)(m.a,{container:!0,justifyContent:"space-around",alignItems:"center",children:t.map((function(e){return function(e){var t=e.weekDay,n=e.hour,r=e.state,c=e.temperature;return Object(h.jsx)(m.a,{"data-testid":"forecast-item-container",item:!0,children:Object(h.jsx)(ke,{weekDay:t,hour:n,state:r,temperature:c})},"".concat(t," ").concat(n))}(e)}))})},Te=n(100),Le=n.n(Te),Ae=function(e){return[0,1,2,3,4,5].map((function(e){return Le()().add(e,"d")})).map((function(t){var n=e.list.filter((function(e){return Le.a.unix(e.dt).dayOfYear()===t.dayOfYear()})).map((function(e){return e.main.temp}));return{dayHour:t.format("dddd"),min:W(Math.min.apply(Math,Object(C.a)(n))),max:W(Math.max.apply(Math,Object(C.a)(n))),hasTemps:n.length>0}})).filter((function(e){return e.hasTemps}))},De=function(e){var t=[3,6,9,12,15,18];return e.list.filter((function(e,n){return t.includes(n)})).map((function(e){return{hour:Le.a.unix(e.dt).hour(),weekDay:Le.a.unix(e.dt).format("dddd"),state:e.weather[0].main.toLowerCase(),temperature:W(e.main.temp)}}))},_e=function(e,t,n){var c=Object(s.g)(),a=c.city,i=c.countryCode;return Object(r.useEffect)((function(){var r=function(){var t=Object(A.a)(T.a.mark((function t(){var n,r,c,o,s,u;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=K(a,i),r=M(a,i),t.prev=2,t.next=5,_.a.get(n);case 5:c=t.sent,o=c.data,s=Ae(o),e({type:"SET_CHART_DATA",payload:Object(L.a)({},r,s)}),u=De(o),e({type:"SET_FORECAST_ITEM_LIST",payload:Object(L.a)({},r,u)}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log("Error");case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(){return t.apply(this,arguments)}}(),c=M(a,i);t&&n&&!t[c]&&!n[c]&&r()}),[a,i,e,t,n]),{city:a,countryCode:i}},Ne=function(){var e=ne(),t=te(),n=e.allWeather,c=e.allChartData,a=e.allForecastItemList,i=_e(t,c,a),o=i.city,s=i.countryCode,u=Object(r.useMemo)((function(){return[{city:o,countryCode:s}]}),[o,s]);B(u,n,t);var j=M(o,s),l=n[j],d=c[j],b=a[j],O=l&&l.state,f=l&&l.temperature,x=l&&l.humidity,y=l&&l.wind;return Object(h.jsx)(ue,{children:Object(h.jsxs)(m.a,{container:!0,justifyContent:"space-around",direction:"column",spacing:2,children:[Object(h.jsx)(m.a,{item:!0,container:!0,xs:12,justifyContent:"center",alignItems:"flex-end",children:Object(h.jsx)(Y,{city:o,countryCode:s})}),Object(h.jsxs)(m.a,{item:!0,xs:12,children:[Object(h.jsx)(U,{state:O,temperature:f}),x&&y&&Object(h.jsx)(fe,{humidity:x,wind:y})]}),Object(h.jsx)(m.a,{children:!d&&!b&&Object(h.jsx)(me.a,{})}),Object(h.jsx)(m.a,{item:!0,children:d&&Object(h.jsx)(Ie,{data:d})}),Object(h.jsx)(m.a,{item:!0,children:b&&Object(h.jsx)(Se,{forecastItemList:b})})]})})},Fe=function(){return Object(h.jsx)(m.a,{container:!0,direction:"column",justifyContent:"center",className:"full",children:Object(h.jsx)("div",{className:"highlight",children:Object(h.jsxs)(m.a,{item:!0,container:!0,xs:12,justifyContent:"center",alignItems:"center",children:[Object(h.jsx)(m.a,{item:!0,children:Object(h.jsx)(y.b.Provider,{value:{size:"6em"},children:Object(h.jsx)(p.c,{})})}),Object(h.jsxs)(m.a,{item:!0,container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(h.jsx)(f.a,{variant:"h4",color:"inherit",children:"404|Page not found"}),Object(h.jsx)(x.a,{color:"inherit","aria-label":"menu",component:o.b,to:"/main",children:"Main"})]})]})})})},Me=function(){return Object(h.jsx)(ee,{children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/",children:Object(h.jsx)(v,{})}),Object(h.jsx)(s.a,{path:"/main",children:Object(h.jsx)(Oe,{})}),Object(h.jsx)(s.a,{path:"/city/:countryCode/:city",children:Object(h.jsx)(Ne,{})}),Object(h.jsx)(s.a,{children:Object(h.jsx)(Fe,{})})]})})})},We=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,540)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(Me,{}),document.getElementById("root")),We()}},[[481,1,2]]]);
//# sourceMappingURL=main.5ae199ed.chunk.js.map