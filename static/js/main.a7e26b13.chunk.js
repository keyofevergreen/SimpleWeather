(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{52:function(e,t,c){},84:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(41),i=c.n(n),r=c(8),o=c(39),s=c(61),l=c(62),u=c(29),j=c.n(u),d=c(34),p=c(10),f=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.weatherapi.com/v1/current.json?key=bec0a55c5686475981d152146211810&q=".concat(t,"&aqi=no"));case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),b=f,h="SET_CITY",O="UPDATE_WEATHER",m="CHANGE_TEMP_SCALE",x=function(e){return{type:h,payload:e}},v=function(e){return{type:m,payload:e}},y={location:"",responseLocation:"",country:"",temp_c:"",temp_f:"",condition:"",wind:"",pressure:"",humidity:"",code:"",isDay:"",tempScale:"celsius"};var g=c(24),_="ADD_TO_FAVORITES",S="REMOVE_FROM_FAVORITES",w="GET_CITIES",C="UPDATE_TEMP",D=function(e){return{type:C,payload:e}},N={arrOfCities:[]};var F=function(e){return function(t){E.dispatch(function(e){return{type:_,payload:e}}(e))}},T=function(e){return function(t){E.dispatch(function(e){return{type:S,payload:e}}(e))}},k=Object(l.composeWithDevTools)(Object(o.applyMiddleware)(s.a)),I=Object(o.combineReducers)({cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(p.a)(Object(p.a)({},e),{},{arrOfCities:[].concat(Object(g.a)(e.arrOfCities),[{city:t.payload.city,temp_c:t.payload.temp_c,temp_f:t.payload.temp_f,lastUpdated:t.payload.lastUpdated}])});case S:return Object(p.a)(Object(p.a)({},e),{},{arrOfCities:e.arrOfCities.filter((function(e){return e.city!==t.payload}))});case w:return Object(p.a)(Object(p.a)({},e),{},{arrOfCities:t.payload});case C:return Object(p.a)(Object(p.a)({},e),{},{arrOfCities:e.arrOfCities.map((function(e){return e.city===t.payload.location.name.toLowerCase()?Object(p.a)(Object(p.a)({},e),{},{temp_c:t.payload.current.temp_c.toFixed(),temp_f:t.payload.current.temp_f.toFixed(),lastUpdated:Date.now()}):e}))});default:return e}},weatherData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(p.a)(Object(p.a)({},e),{},{location:t.payload.toLowerCase()});case O:return Object(p.a)(Object(p.a)({},e),{},{responseLocation:t.payload.location.name,country:t.payload.location.country,temp_c:t.payload.current.temp_c.toFixed(),temp_f:t.payload.current.temp_f.toFixed(),condition:t.payload.current.condition.text.toLowerCase(),wind:t.payload.current.wind_kph,pressure:t.payload.current.pressure_mb,humidity:t.payload.current.humidity,code:t.payload.current.condition.code,isDay:t.payload.current.is_day});case m:return Object(p.a)(Object(p.a)({},e),{},{tempScale:t.payload});default:return e}}}),E=Object(o.createStore)(I,k),L=c(12),W=c(64),M=c.n(W),A=(c(84),c(11));var B=function(e,t){var c=Object(a.useState)(e),n=Object(A.a)(c,2),i=n[0],r=n[1];return Object(a.useEffect)((function(){var c=setTimeout((function(){return r(e)}),t);return function(){return clearTimeout(c)}}),[t,e]),i},R=c(1),z=Object(r.b)((function(e){return{location:e.weatherData.location,favoriteCities:e.weatherData.favoriteCities}}),(function(e){return{onChange:function(t){e(x(t.target.value))}}}))((function(e){Object(a.useEffect)((function(){localStorage.getItem("location")&&""===e.location&&E.dispatch(x(localStorage.getItem("location")))}),[]),Object(a.useEffect)((function(){return function(){localStorage.setItem("location",e.location)}}),[]);var t=B(e.location.trim(),700),c=Object(a.useCallback)(function(e){return function(){var t=Object(d.a)(j.a.mark((function t(c){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b(e);case 3:a=t.sent,E.dispatch({type:O,payload:a}),localStorage.setItem("location",a.location.name),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t),[t]);return Object(a.useEffect)((function(){t&&c()}),[t,c]),Object(R.jsxs)("div",{className:"search",children:[Object(R.jsx)("h1",{children:"Right now in"}),Object(R.jsx)(M.a,{type:"text",minWidth:"70",inputStyle:{fontSize:35,fontWeight:600,display:"block"},value:e.location,onChange:function(t){return e.onChange(t)}})]})})),U=(c(52),Object(r.b)((function(e){return{code:e.weatherData.code,isDay:e.weatherData.isDay}}))((function(e){var t="day";e.isDay||(t="night");var c="".concat("/SimpleWeather","/assets/icons/").concat(t,"/").concat(e.code,".svg");return Object(R.jsx)("div",{className:"weather__icon",children:Object(R.jsx)("object",{data:c,className:"weather__icon",type:"image/svg+xml","aria-label":"icon of weather"})})}))),J=Object(r.b)((function(e){return{tempScale:e.weatherData.tempScale,temp_c:e.weatherData.temp_c,temp_f:e.weatherData.temp_f}}))((function(e){return"celsius"===e.tempScale?Object(R.jsx)("h1",{className:"celsius",children:e.temp_c}):Object(R.jsx)("h1",{className:"fahrenheit",children:e.temp_f})})),P=Object(r.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation,condition:e.weatherData.condition}}))((function(e){return Object(R.jsxs)("div",{className:"condition",children:["it's ",e.condition]})})),H=Object(r.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation,wind:e.weatherData.wind,pressure:e.weatherData.pressure,humidity:e.weatherData.humidity}}))((function(e){var t=(1e3*e.wind/3600).toFixed(1),c=(.750063755419211*e.pressure).toFixed();return Object(R.jsxs)("div",{children:[Object(R.jsx)(P,{}),Object(R.jsxs)("div",{className:"weather grid",children:[Object(R.jsx)(U,{}),Object(R.jsx)("div",{className:"weather__temp",children:Object(R.jsx)(J,{className:"weather__temp-scale"})}),Object(R.jsxs)("div",{className:"flex weather__properties",children:[Object(R.jsxs)("div",{className:"properties__value",children:[t,Object(R.jsx)("span",{children:"m/s"})]}),Object(R.jsxs)("div",{className:"properties__value",children:[c,Object(R.jsx)("span",{children:"mm Hg"})]}),Object(R.jsxs)("div",{className:"properties__value",children:[e.humidity,Object(R.jsx)("span",{children:"%"})]})]})]})]})})),V=c(111),q=c(112),G=c(114),Y=function(e){return Object(R.jsx)(G.a,Object(p.a)(Object(p.a)({},e),{},{icon:Object(R.jsx)(V.a,{}),checkedIcon:Object(R.jsx)(q.a,{}),size:"large",sx:{color:"white","&.Mui-checked":{color:"white"},"&.Mui-disabled":{color:"transparent"}}}))},K=Object(r.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation,temp_c:e.weatherData.temp_c,temp_f:e.weatherData.temp_f,cities:e.cities.arrOfCities}}),(function(e){return{addToFavorites:function(t){e(F(t))},removeFromFavorites:function(t){e(T(t))}}}))((function(e){var t=Object(a.useState)(e.cities.find((function(t){return t.city===e.location}))),c=Object(A.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)(!1),o=Object(A.a)(r,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){i(e.cities.find((function(t){return t.city===e.location})))}),[e.location,e.responseLocation]),Object(a.useEffect)((function(){e.location&&e.location===e.responseLocation.toLowerCase()?l(!1):l(!0)}),[e.location,e.responseLocation]),Object(a.useEffect)((function(){localStorage.setItem("cities",JSON.stringify(e.cities))}),[e.cities]),Object(R.jsx)(Y,{onClick:function(){n?(e.removeFromFavorites(e.location),i(!n)):(e.addToFavorites({city:e.location,temp_c:e.temp_c,temp_f:e.temp_f,lastUpdated:Date.now()}),i(!n))},disabled:s,checked:!!n})})),Q=c(117),X=c(68),Z=c.n(X),$=function(){return Object(R.jsx)(Q.a,{size:"large",sx:{color:"white"},children:Object(R.jsx)(Z.a,{fontSize:"large"})})},ee=c(23),te=Object(r.b)((function(e){return{location:e.weatherData.location,responseLocation:e.weatherData.responseLocation}}))((function(e){return e.responseLocation&&e.location===e.responseLocation.toLowerCase()?Object(R.jsx)("div",{children:Object(R.jsxs)("div",{className:"app",children:[Object(R.jsx)(K,{}),Object(R.jsx)(ee.b,{to:"/SimpleWeather/cities",className:"app__list-button",children:Object(R.jsx)($,{})}),Object(R.jsx)(z,{}),Object(R.jsx)(H,{})]})}):Object(R.jsx)("div",{children:Object(R.jsxs)("div",{className:"app",children:[Object(R.jsx)(K,{}),Object(R.jsx)(ee.b,{to:"/SimpleWeather/cities",className:"app__list-button",children:Object(R.jsx)($,{})}),Object(R.jsx)(z,{})]})})})),ce=c(17),ae=Object(ce.a)(),ne=(c(88),c(70)),ie=c.n(ne),re=function(e){return Object(R.jsx)(Q.a,Object(p.a)(Object(p.a)({size:"large"},e),{},{children:Object(R.jsx)(ie.a,{fontSize:"large"})}))},oe=function(){return Object(R.jsx)(ee.b,{to:"/SimpleWeather",className:"cities-page__back-btn",children:Object(R.jsx)(re,{sx:{color:"#2D81FF","&.MuiIconButton-root:hover":{backgroundColor:"rgba(45, 129, 255, 0.02)"}}})})},se=(c(89),Object(r.b)((function(e){return{cities:e.cities.arrOfCities,tempScale:e.weatherData.tempScale}}),(function(e){return{updateCityInStore:function(t){e(x(t))}}}))((function(e){var t=Object(L.g)();return e.cities.length>0?Object(R.jsxs)("div",{className:"flex cities-list",children:[Object(R.jsx)("div",{className:"blue-line"}),Object(R.jsx)("div",{className:"cities",children:e.cities.map((function(c){return Object(R.jsxs)("button",{onClick:function(){t.push("/SimpleWeather/cities/".concat(c.city)),e.updateCityInStore(c.city)},className:"cities__btn",children:[Object(R.jsx)("div",{children:c.city}),Object(R.jsxs)("div",{children:["celsius"===e.tempScale?c.temp_c:c.temp_f,"\xb0"]})]},c.city)}))})]}):Object(R.jsxs)("div",{className:"flex cities-list",children:[Object(R.jsx)("div",{className:"blue-line"}),Object(R.jsxs)("div",{className:"cities-empty",children:[Object(R.jsx)("p",{children:"Oops!"}),Object(R.jsx)("p",{children:"You haven't added any city yet!"})]}),Object(R.jsx)("div",{className:"blue-line"})]})}))),le=c(116),ue=c(118),je=(c(90),Object(r.b)((function(e){return{tempScale:e.weatherData.tempScale}}),(function(e){return{changeTempScale:function(t){e(v(t))}}}))((function(e){localStorage.getItem("tempScale")||localStorage.setItem("tempScale","celsius");var t=Object(a.useState)(localStorage.getItem("tempScale")),c=Object(A.a)(t,2),n=c[0],i=c[1];return Object(R.jsx)("div",{className:"TempScaleToggle",children:Object(R.jsxs)(le.a,{color:"secondary",value:n,exclusive:!0,fullWidth:!0,sx:{height:"20px"},onChange:function(){"celsius"===n?(i("fahrenheit"),e.changeTempScale("fahrenheit"),localStorage.setItem("tempScale","fahrenheit")):(i("celsius"),e.changeTempScale("celsius"),localStorage.setItem("tempScale","celsius"))},children:[Object(R.jsx)(ue.a,{value:"fahrenheit",sx:{"&.MuiToggleButton-root":{borderRadius:"20px",backgroundColor:"transparent",borderColor:"#F9FBFF",color:"#2d81ff",textTransform:"capitalize"},"&.Mui-selected":{backgroundColor:"#6BA6FF",borderColor:"#6BA6FF",color:"#ffffff"},"&.Mui-selected:hover":{backgroundColor:"#5096ff",color:"#ffffff"}},children:"Fahrenheit"}),Object(R.jsx)(ue.a,{value:"celsius",sx:{"&.MuiToggleButton-root":{borderRadius:"20px",backgroundColor:"transparent",borderColor:"#F9FBFF",color:"#2d81ff",textTransform:"capitalize"},"&.Mui-selected":{backgroundColor:"#6BA6FF",borderColor:"#6BA6FF",color:"#ffffff"},"&.Mui-selected:hover":{backgroundColor:"#5096ff",color:"#ffffff"}},children:"Celsius"})]})})}))),de=Object(r.b)((function(e){return{cities:e.cities.arrOfCities}}),(function(e){return{fetchCityTemp:function(t){e(function(e){return function(){var t=Object(d.a)(j.a.mark((function t(c){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b(e);case 3:a=t.sent,E.dispatch(D(a)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){return Object(R.jsxs)("div",{className:"cities-page",children:[Object(R.jsx)(oe,{}),Object(R.jsxs)("div",{className:"cities-page__list",children:[Object(R.jsx)("h1",{className:"cities-page-header",children:"Favorite cities"}),Object(R.jsx)(se,{})]}),Object(R.jsxs)("div",{className:"cities-page__settings",children:[Object(R.jsx)("h1",{className:"cities-page-header",children:"Settings"}),Object(R.jsx)(je,{})]})]})})),pe=Object(r.b)((function(e){return{location:e.weatherData.location}}))((function(e){var t=Object(L.h)(),c=Object(L.g)();return Object(a.useEffect)((function(){e.location!==t.city&&c.push("/SimpleWeather")}),[e.location]),Object(R.jsx)("div",{children:Object(R.jsxs)("div",{className:"app",children:[Object(R.jsx)(K,{}),Object(R.jsx)(ee.b,{to:"/SimpleWeather/cities",className:"app__list-button",children:Object(R.jsx)($,{})}),Object(R.jsx)(z,{}),Object(R.jsx)(H,{})]})})})),fe=function(){return Object(R.jsx)(L.c,{history:ae,children:Object(R.jsxs)(L.d,{children:[Object(R.jsx)(L.b,{exact:!0,path:"/SimpleWeather",children:Object(R.jsx)(te,{})}),Object(R.jsx)(L.b,{exact:!0,path:"/SimpleWeather/cities",children:Object(R.jsx)(de,{})}),Object(R.jsx)(L.b,{exact:!0,path:"/SimpleWeather/cities/:city",children:Object(R.jsx)(pe,{})}),Object(R.jsx)(L.a,{to:"/SimpleWeather"})]})})},be=(c(93),c(94),c(71)),he=c(16);if(localStorage.getItem("cities")){var Oe=localStorage.getItem("cities"),me=JSON.parse(Oe);E.dispatch({type:w,payload:me})}else localStorage.setItem("cities","[]");localStorage.getItem("tempScale")&&E.dispatch(v(localStorage.getItem("tempScale")));var xe=Object(be.a)({palette:{primary:{main:"#ffffff",darker:"#ffffff"},secondary:{main:"#2d81ff",darker:"#2d81ff"}}}),ve=document.getElementById("root");i.a.render(Object(R.jsx)(r.a,{store:E,children:Object(R.jsx)(he.c,{theme:xe,children:Object(R.jsx)(ee.a,{basename:"/SimpleWeather",children:Object(R.jsx)(fe,{})})})}),ve)}},[[95,1,2]]]);
//# sourceMappingURL=main.a7e26b13.chunk.js.map