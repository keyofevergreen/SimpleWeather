(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{13:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),r=(c(13),c(3)),o=c.n(r),s=c(4),i=c(2),u=c(1),j=(c(6),c(17),c(0)),l=function(e){var t=e.code,c="day";e.isDay||(c="night");var n="/assets/icons/".concat(c,"/").concat(t,".svg");return Object(j.jsx)("div",{children:Object(j.jsx)("object",{data:"/weather-by-evergreen"+n,type:"image/svg+xml",className:"icon"})})},b=(c(19),function(e){var t=e.location,c=e.responseLocation,n=(e.country,e.temp),a=e.wind,r=e.pressure,o=e.humidity,s=e.code,i=e.isDay;return n&&t.toLowerCase()===c.toLowerCase()?n?Object(j.jsxs)("div",{className:"weather flex",children:[Object(j.jsxs)("div",{className:"weather__icon-temp flex",children:[Object(j.jsx)(l,{code:s,isDay:i}),Object(j.jsx)("div",{className:"temp",children:Object(j.jsx)("h1",{children:n.toFixed()})})]}),Object(j.jsxs)("div",{className:"flex properties",children:[Object(j.jsxs)("div",{className:"properties__value",children:[a,Object(j.jsx)("span",{children:"mph"})]}),Object(j.jsxs)("div",{className:"properties__value",children:[r,Object(j.jsx)("span",{children:"mm"})]}),Object(j.jsxs)("div",{className:"properties__value",children:[o,Object(j.jsx)("span",{children:"%"})]})]})]}):void 0:Object(j.jsx)("div",{})}),d=c(8),p=c.n(d),O=(c(23),function(e){var t=e.location,c=e.responseLocation,n=e.condition;return n&&t.toLowerCase()===c.toLowerCase()?n?Object(j.jsx)("div",{className:"condition",children:n}):void 0:Object(j.jsx)("span",{})}),h=(c(24),function(e){return Object(j.jsxs)("div",{className:"city-search",children:[Object(j.jsx)("h1",{children:"Right now in"}),Object(j.jsx)(p.a,{type:"text",minWidth:"70",inputStyle:{fontSize:35,fontWeight:600,display:"block"},value:e.value,onChange:function(t){return e.onChange(t)}}),Object(j.jsx)(O,{condition:e.condition,location:e.location,responseLocation:e.responseLocation})]})});var v=function(e,t){var c=Object(u.useState)(e),n=Object(i.a)(c,2),a=n[0],r=n[1];return Object(u.useEffect)((function(){var c=setTimeout((function(){return r(e)}),t);return function(){return clearTimeout(c)}}),[t,e]),a},f=function(){var e=Object(s.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.weatherapi.com/v1/current.json?key=7de576d75ec1409fbc9122745211208&q=".concat(t,"&aqi=no"));case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,console.log(n),e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(u.useState)(""),r=Object(i.a)(a,2),l=r[0],d=r[1],p=Object(u.useState)(""),O=Object(i.a)(p,2),m=O[0],x=O[1],y=Object(u.useState)(""),g=Object(i.a)(y,2),w=g[0],S=g[1],_=Object(u.useState)(""),L=Object(i.a)(_,2),N=L[0],C=L[1],k=Object(u.useState)(""),D=Object(i.a)(k,2),E=D[0],I=D[1],q=Object(u.useState)(""),J=Object(i.a)(q,2),T=J[0],W=J[1],z=Object(u.useState)(""),B=Object(i.a)(z,2),F=B[0],R=B[1],A=Object(u.useState)(""),G=Object(i.a)(A,2),H=G[0],K=G[1],M=Object(u.useState)(""),P=Object(i.a)(M,2),Q=P[0],U=P[1];Object(u.useEffect)((function(){if(localStorage.location&&""===c)return n(localStorage.getItem("location")),function(){c.onChange(localStorage.setItem("location",c))}}),[]);var V=v(c,700),X=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(V);case 3:t=e.sent,d(t.location.name),x(t.location.country),S(t.current.temp_c),C("it's ".concat(t.current.condition.text.toLowerCase())),I(t.current.wind_mph),W(t.current.pressure_mb),R(t.current.humidity),K(t.current.condition.code),U(t.current.is_day),localStorage.setItem("location",c),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),Y=Object(u.useCallback)(X,[V]);Object(u.useEffect)((function(){V&&Y()}),[V,Y]);return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(h,{value:c,onChange:function(e){n(e.target.value)},condition:N,location:V,responseLocation:l}),Object(j.jsx)(b,{location:V,responseLocation:l,country:m,temp:w,wind:E,pressure:T,humidity:F,code:H,isDay:Q})]})};a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.efecd032.chunk.js.map