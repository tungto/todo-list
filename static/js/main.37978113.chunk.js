(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(23),r=a.n(n),i=(a(58),a(59),a(6)),o=a(15),l=a(5),d=a(22),j=a(28),u=a(27),b="LOAD_TASKS",O="ADD_TASK",p="REMOVE_TASK",h="UPDATE_TASK",f="EDIT_TASK",m="SELECT_TASK",x="SORT_TASKS",k="REMOVE_SELECTED_TASKS",y="FILTER_TASKS",v="UPDATE_FILTERS",g=function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},S=function(e,t){var a=-1;return e.forEach((function(e,c){e.id===t.id&&(a=c)})),a},T=function(e,t){localStorage.setItem("".concat(e),JSON.stringify(t))},D=function(e,t){if(t.type===b)return Object(l.a)(Object(l.a)({},e),{},{tasks:t.payload,filtered_tasks:t.payload});if(t.type===O)return Object(l.a)(Object(l.a)({},e),{},{tasks:[].concat(Object(u.a)(e.tasks),[t.payload])});if(t.type===p){console.log("check");var a=e.tasks.filter((function(e){return e.id!==t.payload}));return console.log(typeof t.payload),Object(l.a)(Object(l.a)({},e),{},{tasks:a})}if(t.type===f){var c=S(e.tasks,t.payload);return e.tasks[c].isEditing=!0,Object(l.a)({},e)}if(t.type===h){console.log("update reducer");var s=S(e.tasks,t.payload),n=Object(u.a)(e.tasks);return n[s]=t.payload,Object(l.a)(Object(l.a)({},e),{},{tasks:n})}if(t.type===m){var r=e.selectedItems,i=e.tasks.map((function(e){return e.id===t.payload?(e.isSelected?(console.log("subtract"),r-=1):(console.log("add"),r+=1),Object(l.a)(Object(l.a)({},e),{},{isSelected:!e.isSelected})):e}));return Object(l.a)(Object(l.a)({},e),{},{tasks:i,selectedItems:r})}if(t.type===k){var o=e.tasks.filter((function(e){return!e.isSelected}));return console.log(o),Object(l.a)(Object(l.a)({},e),{},{tasks:o,selectedItems:0})}if(t.type===v){var d=t.payload,g=d.name,T=d.value;return console.log(g,T),Object(l.a)(Object(l.a)({},e),{},{filters:Object(l.a)(Object(l.a)({},e.filters),{},Object(j.a)({},g,T))})}if(t.type===y){var D=Object(u.a)(e.tasks),N=e.filters.text,E=D.filter((function(e){return e.title.toLowerCase().startsWith(N)}));return console.log("filter taks"),Object(l.a)(Object(l.a)({},e),{},{filtered_tasks:E})}if(t.type===x){var I=Object(u.a)(e.filtered_tasks);return"due-date"===e.sort&&(I=I.sort((function(e,t){return"object"===typeof e.dueDate&&null!==e.dueDate&&(e.dueDate=JSON.parse(JSON.stringify(e.dueDate))),"object"===typeof t.dueDate&&null!==t.dueDate&&(t.dueDate=JSON.parse(JSON.stringify(t.dueDate))),new Date(e.dueDate)-new Date(t.dueDate)}))),console.log("sorted taks",I),Object(l.a)(Object(l.a)({},e),{},{filtered_tasks:I})}throw new Error("No Matching ".concat(t.type," - action type"))},N=a(4),E=function(){var e=localStorage.getItem("tasks"),t=localStorage.getItem("selectedItems");return e?{tasks:JSON.parse(e),selectedItems:JSON.parse(t)}:{tasks:[],selectedItems:0}},I={tasks:E().tasks,selectedItems:E().selectedItems,filtered_tasks:[],filters:{text:""},sort:"due-date"},A=s.a.createContext(),C=function(e){var t=e.children,a=Object(c.useReducer)(D,I),s=Object(d.a)(a,2),n=s[0],r=s[1];Object(c.useEffect)((function(){r({type:b,payload:n.tasks})}),[n.tasks]),Object(c.useEffect)((function(){r({type:y}),r({type:x})}),[n.sort,n.filters,n.tasks]),Object(c.useEffect)((function(){T("tasks",n.tasks),T("selectedItems",n.selectedItems)}),[n.tasks,n.selectedItems]);return Object(N.jsx)(A.Provider,{value:Object(l.a)(Object(l.a)({},n),{},{addTask:function(e){r({type:O,payload:e})},removeTask:function(e){r({type:p,payload:e})},updateTask:function(e){console.log("update task",e),r({type:h,payload:e}),T("tasks",n.tasks)},editTask:function(e){r({type:f,payload:e})},selectTask:function(e){r({type:m,payload:e}),T("tasks",n.tasks),T("selectedItems",n.selectedItems)},removeSelectedTasks:function(){r({type:k})},updateFilters:function(e){console.log(e);var t=e.target.name,a=e.target.value;r({type:v,payload:{name:t,value:a}})}}),children:t})},_=function(){return Object(c.useContext)(A)},F=function(e){var t=_().removeSelectedTasks;return Object(N.jsxs)("div",{className:"buld-action-container",children:[Object(N.jsx)("button",{onClick:t,children:"remove"}),Object(N.jsx)("button",{children:"done"})]})},w=function(){return Object(N.jsxs)("header",{children:[Object(N.jsxs)("nav",{children:[Object(N.jsx)(o.b,{to:"/",exact:"true",children:"Home"}),Object(N.jsx)(o.b,{to:"/add",children:"Add Todo"})]}),Object(N.jsx)("div",{className:"title",children:"Home page"})]})},J=function(){var e=_(),t=e.filters,a=e.updateFilters;return Object(N.jsx)("div",{className:"search-bar-container",children:Object(N.jsx)("input",{name:"text",type:"text",className:"search-bar",placeholder:"search",value:t.text,onChange:a})})},K=a(49),M=a.n(K),L=(a(68),{id:null,title:"",description:"",priority:"normal",dueDate:new Date,isSelected:!1}),R=function(e){var t=_(),a=t.addTask,s=t.updateTask,n=Object(c.useState)(L),r=Object(d.a)(n,2),i=r[0],o=r[1],j=e.isEditing;Object(c.useEffect)((function(){j&&o(e.task)}),[e.task,j]);var u=i.title,b=i.description,O=i.priority,p=i.dueDate;return Object(N.jsxs)("form",{className:"search-bar-container",onSubmit:function(t){t.preventDefault(),j?(s(i),e.setIsEditing(!1)):(a(Object(l.a)(Object(l.a)({},i),{},{id:g()})),e.history.goBack())},children:[Object(N.jsx)("input",{type:"text",placeholder:"Add new task",className:"input-title",value:u,onChange:function(e){return o(Object(l.a)(Object(l.a)({},i),{},{title:e.target.value}))}}),Object(N.jsxs)("div",{className:"description",children:[Object(N.jsx)("label",{htmlFor:"description",children:"description"}),Object(N.jsx)("input",{type:"text",placeholder:"",name:"description",value:b,onChange:function(e){return o(Object(l.a)(Object(l.a)({},i),{},{description:e.target.value}))}})]}),Object(N.jsxs)("div",{className:"other-infos",children:[Object(N.jsxs)("div",{className:"due-date",children:[Object(N.jsx)("label",{htmlFor:"date",children:"Due Date"}),Object(N.jsx)(M.a,{selected:Date.parse(p),onChange:function(e){return o(Object(l.a)(Object(l.a)({},i),{},{dueDate:e}))},dateFormat:"d MMMM yyyy"})]}),Object(N.jsxs)("div",{className:"priority",children:[Object(N.jsx)("label",{htmlFor:"priority",children:"priority"}),Object(N.jsxs)("select",{value:O,onChange:function(e){return o(Object(l.a)(Object(l.a)({},i),{},{priority:e.target.value}))},children:[Object(N.jsx)("option",{value:"low",children:"low"}),Object(N.jsx)("option",{value:"normal",children:"normal"}),Object(N.jsx)("option",{value:"high",children:"high"})]})]})]}),Object(N.jsx)("button",{type:"submit",children:"".concat(j?"update":"add")})]})},P=function(e){var t=_(),a=t.removeTask,s=t.selectTask,n=Object(c.useState)(!1),r=Object(d.a)(n,2),i=r[0],o=r[1],l=e.title,j=e.id,u=e.isSelected,b=e.dueDate;return Object(N.jsxs)("div",{className:"task-container",children:[Object(N.jsxs)("div",{className:"task",children:[Object(N.jsx)("input",{type:"checkbox",name:"checkbox",checked:u,onChange:function(){return s(j,u)}}),Object(N.jsx)("p",{className:"task-title",children:l}),Object(N.jsx)("p",{className:"task-title",children:b}),Object(N.jsxs)("div",{className:"buttons",children:[Object(N.jsx)("button",{onClick:function(){return o(!0)},children:"detail"}),Object(N.jsx)("button",{onClick:function(){return a(j)},children:"remove"})]})]}),i&&Object(N.jsx)(R,{task:e,isEditing:i,setIsEditing:o})]})},B=function(){var e=_().filtered_tasks;return console.log(e),Object(N.jsx)("div",{className:"search-bar-container",children:e.map((function(e,t){return Object(N.jsx)(P,Object(l.a)({},e),t)}))})},H=function(){var e=_(),t=e.tasks,a=e.selectedItems;return!t||t.length<1?Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{children:"there is no tasks"}),Object(N.jsx)(o.b,{to:"/add",exact:"true",children:"fill it"})]}):Object(N.jsxs)("div",{className:"search-bar-container",children:[Object(N.jsx)(w,{}),Object(N.jsx)("h1",{children:"Home"}),Object(N.jsx)(J,{}),Object(N.jsx)(B,{}),a>0&&Object(N.jsx)(F,{})]})},U=function(e){return console.log(e.match,e.history),Object(N.jsxs)("div",{className:"add-task-container",children:[Object(N.jsx)("h1",{children:"Add"}),Object(N.jsx)(R,{match:e.match,history:e.history})]})};var V=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(o.a,{children:[Object(N.jsx)(i.a,{path:"/",component:function(e){var t=e.match;return Object(N.jsx)(H,{match:t})},exact:!0}),Object(N.jsx)(i.a,{path:"/add",component:function(e){var t=e.match,a=e.history;return Object(N.jsx)(U,{match:t,history:a})},exact:!0})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,120)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(C,{children:Object(N.jsx)(V,{})})}),document.getElementById("root")),W()},58:function(e,t,a){},59:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.37978113.chunk.js.map