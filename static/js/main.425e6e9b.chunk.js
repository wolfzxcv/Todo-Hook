(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(n,e,t){n.exports=t(32)},24:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(10),i=t.n(r),c=(t(24),t(1)),l=t(15),d=t(14),u=t(3),m=t(2);function s(){var n=Object(c.a)(["\n  font-family: Arial, sans-serif;\n  background-color: #5F9EA0;\n  border-bottom: 1px solid #FFE4C4; \n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n  color: #800000;\n  &:hover {\n    color: #D2691E;\n  }\n  \n  .list{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .todolist{\n    padding-right: 15px;  \n    text-decoration: ",";\n  }\n\n  input, .button{\n    width: 50px;\n    height: 50px;\n  }\n\n  .button{\n    color: #FFE4C4;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #483D8B;\n    border-radius: 10px;\n  }\n\n"]);return s=function(){return n},n}var p=Object(m.a)(function(n){var e=n.className,t=n.id,a=n.todos,r=n.completed,i=n.markCom,c=n.removeTodo;return o.a.createElement("div",{className:e,completed:r},o.a.createElement("div",{className:"list"},o.a.createElement("input",{type:"checkbox",checked:r,onChange:function(){return i(t)}}),o.a.createElement("div",{className:"todolist"},a),o.a.createElement("div",{className:"button",onClick:function(){return c(t)}},"X")))})(s(),function(n){return n.completed?"line-through":"none"});p.displayName="Todo";var f=p;function x(){var n=Object(c.a)(["\n  background-color: #5F9EA0;\nbutton{\n  border-radius: 10px;\n  width: 120px;\n  height: 50px;\n  font-size: 20px;\n  color: #FFE4C4;\n  background-color: #483D8B;\n}\n\n@media (min-width: 769px){\n  button{\n    margin: 0 10px;\n  }  \n}\n\n\n@media (max-width: 768px){\n  button{\n    margin: 0 3px;\n  }  \n}\n\n"]);return x=function(){return n},n}var g=Object(m.a)(function(n){var e=n.className,t=n.all,a=n.active,r=n.done;return o.a.createElement("div",{className:e},o.a.createElement("button",{onClick:t},"All"),o.a.createElement("button",{onClick:a},"Active"),o.a.createElement("button",{onClick:r},"Completed"))})(x());g.displayName="Filter";var b=g,h=t(13),v=t.n(h);function E(){var n=Object(c.a)(["\n  text-align: center;\n  font-size: 32px;\n  letter-spacing: 2px;\n\n  .title {\n    font-family: oblique, serif;\n    height: 150px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #ffe4c4;\n    background-color: #5f9ea0;\n    div {\n      display: flex;\n    }\n  }\n\n  .add-something {\n    height: 100px;\n    font-size: 20px;\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    padding-bottom: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #483d8b;\n    background-color: #5f9ea0;\n  }\n\n  .body {\n    color: #5f9ea0;\n    background-color: #ffe4c4;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .inputbox {\n    padding: 10px;\n    width: 300px;\n    height: 30px;\n    border-radius: 5px;\n    border: 2px solid gray;\n    background: rgba(4, 93, 93, 0.7);\n    color: white;\n    font-size: 24px;\n  }\n\n  @media (min-width: 769px) {\n    input {\n      margin: 50px 20px;\n    }\n\n    .add {\n      display: none;\n    }\n  }\n\n  @media (max-width: 768px) {\n    input {\n      margin: 50px 20px 20px 20px;\n    }\n\n    .add {\n      margin-top: 20px;\n      margin-bottom: 50px;\n      width: 330px;\n      height: 50px;\n      border-radius: 10px;\n      font-size: 20px;\n      color: #ffe4c4;\n      background-color: #8b4513;\n    }\n\n    .computer {\n      display: none;\n    }\n  }\n\n  @media (min-width: 900px) {\n    .title {\n      flex-direction: row;\n    }\n  }\n\n  @media (max-width: 899px) {\n    .title {\n      flex-direction: column;\n    }\n  }\n"]);return E=function(){return n},n}var y=Object(m.a)(function(n){var e=n.className,t=Object(a.useState)(""),r=Object(u.a)(t,2),i=r[0],c=r[1],m=Object(a.useState)([]),s=Object(u.a)(m,2),p=s[0],x=s[1],g=Object(a.useState)([]),h=Object(u.a)(g,2),E=h[0],y=h[1];Object(a.useEffect)(function(){x(JSON.parse(localStorage.getItem("localStorageTodos"))||[]),y(JSON.parse(localStorage.getItem("localStorageTodos"))||[])},[]);var w=function(n){x(n),y(n),localStorage.setItem("localStorageTodos",JSON.stringify(n))},k=function(n){var e=p.filter(function(e){return e.id!==n});w(e)},N=function(n){var e=p.map(function(e){return e.id===n?Object(l.a)({},e,{completed:!e.completed}):e});w(e)};return o.a.createElement("div",{className:e},o.a.createElement("div",{className:"title"},o.a.createElement("div",null,"The things that you forget,"),o.a.createElement("div",null,"are the things not that important...")),o.a.createElement("div",{className:"add-something"},o.a.createElement("div",null,"Add something"),o.a.createElement("div",{className:"computer"},", and press 'ENTER' to input")),o.a.createElement("div",{className:"body"},o.a.createElement("form",{onSubmit:function(n){if(n.preventDefault(),i.trim().length<3)return alert("please add more than 3 letters");var e={id:v.a.v4(),title:i,completed:!1},t=[].concat(Object(d.a)(p),[e]);c(""),w(t)}},o.a.createElement("input",{className:"inputbox",type:"text",placeholder:"What should I do later...",value:i,onChange:function(n){return c(n.target.value)}}),o.a.createElement("button",{className:"add"},"Add"))),o.a.createElement("div",null,E.map(function(n){return o.a.createElement(f,{key:n.id,id:n.id,todos:n.title,completed:n.completed,removeTodo:k,markCom:N})})),o.a.createElement(b,{all:function(){return y(p)},active:function(){return y(p.filter(function(n){return!1===n.completed}))},done:function(){return y(p.filter(function(n){return!0===n.completed}))}}))})(E());y.displayName="App";var w=y;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.425e6e9b.chunk.js.map