(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a,r,c,s,i,o,l,d,b=n(0),j=n.n(b),u=n(29),m=n.n(u),p=(n(67),n(68),n(6)),h=n(21),O=n(10),f=n(5),g=n(12),k=n(20),x=n(8),v="LOAD_TASKS",y="ADD_TASK",S="REMOVE_TASK",N="UPDATE_TASK",T="EDIT_TASK",D="SELECT_TASK",E="SORT_TASKS",w="REMOVE_SELECTED_TASKS",I="FILTER_TASKS",A="UPDATE_FILTERS",C=function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},_=function(e,t){var n=-1;return e.forEach((function(e,a){e.id===t.id&&(n=a)})),n},F=function(e,t){localStorage.setItem("".concat(e),JSON.stringify(t))},J=function(e,t){if(t.type===v)return Object(f.a)(Object(f.a)({},e),{},{tasks:t.payload,filtered_tasks:t.payload});if(t.type===y)return Object(f.a)(Object(f.a)({},e),{},{tasks:[].concat(Object(x.a)(e.tasks),[t.payload])});if(t.type===S){console.log("check");var n=e.tasks.filter((function(e){return e.id!==t.payload}));return console.log(typeof t.payload),Object(f.a)(Object(f.a)({},e),{},{tasks:n})}if(t.type===T){var a=_(e.tasks,t.payload);return e.tasks[a].isEditing=!0,Object(f.a)({},e)}if(t.type===N){console.log("update reducer");var r=_(e.tasks,t.payload),c=Object(x.a)(e.tasks);return c[r]=t.payload,Object(f.a)(Object(f.a)({},e),{},{tasks:c})}if(t.type===D){var s=e.selectedItems,i=e.tasks.map((function(e){return e.id===t.payload?(e.isSelected?(console.log("subtract"),s-=1):(console.log("add"),s+=1),Object(f.a)(Object(f.a)({},e),{},{isSelected:!e.isSelected})):e}));return Object(f.a)(Object(f.a)({},e),{},{tasks:i,selectedItems:s})}if(t.type===w){var o=e.tasks.filter((function(e){return!e.isSelected}));return console.log(o),Object(f.a)(Object(f.a)({},e),{},{tasks:o,selectedItems:0})}if(t.type===A){var l=t.payload,d=l.name,b=l.value;return console.log(d,b),Object(f.a)(Object(f.a)({},e),{},{filters:Object(f.a)(Object(f.a)({},e.filters),{},Object(k.a)({},d,b))})}if(t.type===I){var j=Object(x.a)(e.tasks),u=e.filters.text,m=j.filter((function(e){return e.title.toLowerCase().startsWith(u)}));return console.log("filter taks"),Object(f.a)(Object(f.a)({},e),{},{filtered_tasks:m})}if(t.type===E){var p=Object(x.a)(e.filtered_tasks);return"due-date"===e.sort&&(p=p.sort((function(e,t){return"object"===typeof e.dueDate&&null!==e.dueDate&&(e.dueDate=JSON.parse(JSON.stringify(e.dueDate))),"object"===typeof t.dueDate&&null!==t.dueDate&&(t.dueDate=JSON.parse(JSON.stringify(t.dueDate))),new Date(e.dueDate)-new Date(t.dueDate)}))),console.log("sorted taks",p),Object(f.a)(Object(f.a)({},e),{},{filtered_tasks:p})}throw new Error("No Matching ".concat(t.type," - action type"))},K=n(3),M=function(){var e=localStorage.getItem("tasks"),t=localStorage.getItem("selectedItems");return e?{tasks:JSON.parse(e),selectedItems:JSON.parse(t)}:{tasks:[],selectedItems:0}},L={tasks:M().tasks,selectedItems:M().selectedItems,filtered_tasks:[],filters:{text:""},sort:"due-date"},R=j.a.createContext(),P=function(e){var t=e.children,n=Object(b.useReducer)(J,L),a=Object(g.a)(n,2),r=a[0],c=a[1];Object(b.useEffect)((function(){c({type:v,payload:r.tasks})}),[r.tasks]),Object(b.useEffect)((function(){c({type:I}),c({type:E})}),[r.sort,r.filters,r.tasks]),Object(b.useEffect)((function(){F("tasks",r.tasks),F("selectedItems",r.selectedItems)}),[r.tasks,r.selectedItems]);return Object(K.jsx)(R.Provider,{value:Object(f.a)(Object(f.a)({},r),{},{addTask:function(e){c({type:y,payload:e})},removeTask:function(e){c({type:S,payload:e})},updateTask:function(e){console.log("update task",e),c({type:N,payload:e}),F("tasks",r.tasks)},editTask:function(e){c({type:T,payload:e})},selectTask:function(e){c({type:D,payload:e}),F("tasks",r.tasks),F("selectedItems",r.selectedItems)},removeSelectedTasks:function(){c({type:w})},updateFilters:function(e){console.log(e);var t=e.target.name,n=e.target.value;c({type:A,payload:{name:t,value:n}})}}),children:t})},z=function(){return Object(b.useContext)(R)},q=n(11),B=q.a.div(a||(a=Object(O.a)(["\n  .btn {\n    width: 100px;\n  }\n  .btn-remove-select {\n    background-color: var(--clr-red-dark);\n    margin-right: 1rem;\n    :hover {\n      background-color: var(--clr-red-light);\n    }\n  }\n  .btn-done {\n    background-color: var(--clr-dodger-dark);\n    :hover {\n      background-color: var(--clr-dodger-light);\n    }\n  }\n"]))),H=function(e){var t=z().removeSelectedTasks;return Object(K.jsx)(B,{children:Object(K.jsxs)("div",{className:"buld-action-container",children:[Object(K.jsx)("button",{className:"btn btn-remove-select",onClick:t,children:"remove"}),Object(K.jsx)("button",{className:"btn btn-done",children:"done"})]})})},U=q.a.div(r||(r=Object(O.a)(["\n  padding: 2rem;\n\n  .nav-links {\n    display: flex;\n    justify-content: center;\n  }\n  .link {\n    margin: 1rem;\n    a {\n      padding: 0.5rem;\n      font-weight: 500;\n      :hover {\n        border-bottom: 1px solid var(--clr-black);\n      }\n    }\n  }\n"]))),V=function(){return Object(K.jsx)(U,{className:"navbar",children:Object(K.jsxs)("ul",{className:"nav-links",children:[Object(K.jsx)("li",{className:"link",children:Object(K.jsx)(h.b,{to:"/",exact:"true",children:"Home"})}),Object(K.jsx)("li",{className:"link",children:Object(K.jsx)(h.b,{to:"/add",children:"Add Todo"})})]})})},W=q.a.div(c||(c=Object(O.a)(["\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n  .search-bar {\n    padding: 10px;\n    width: 80%;\n    border-radius: var(--radius);\n    font-size: 1rem;\n  }\n"]))),G=function(){var e=z(),t=e.filters,n=e.updateFilters;return Object(K.jsx)(W,{children:Object(K.jsx)("div",{className:"search-bar-container",children:Object(K.jsx)("input",{name:"text",type:"text",className:"search-bar",placeholder:"Search",value:t.text,onChange:n})})})},Q=n(57),X=n.n(Q),Y=(n(79),n(60)),Z={id:null,title:"",description:"",priority:"normal",dueDate:new Date,isSelected:!1},$=q.a.div(s||(s=Object(O.a)(["\n  .add-taks-form {\n    padding: 3rem;\n    .input-title {\n      padding: 10px;\n      width: 80%;\n      border-radius: var(--radius);\n      font-size: 1rem;\n    }\n    .field {\n      display: flex;\n      flex-direction: column;\n    }\n    .description {\n      textarea {\n        height: 125px;\n      }\n    }\n\n    .form-section {\n      width: 80%;\n      margin: 0 auto;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }\n    label {\n      margin-top: 0.5rem;\n      margin-bottom: 0.5rem;\n      text-transform: capitalize;\n      font-weight: 500;\n      text-align: left;\n    }\n    .other-infos {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 2rem;\n      input,\n      select {\n        width: 100%;\n        padding: 0.5rem;\n      }\n    }\n    .btn-add {\n      background: var(--clr-red-dark);\n      margin-top: 3rem;\n      width: 6rem;\n      :hover {\n        background: var(--clr-red-light);\n      }\n    }\n  }\n"]))),ee=function(e){var t=z(),n=t.addTask,a=t.updateTask,r=Object(Y.a)(),c=r.register,s=r.handleSubmit,i=r.formState.errors,o=Object(b.useState)(Z),l=Object(g.a)(o,2),d=l[0],j=l[1],u=e.isEditing;Object(b.useEffect)((function(){u&&j(e.task)}),[e.task,u]);var m=d.title,p=d.description,h=d.priority,O=d.dueDate;return Object(K.jsx)($,{children:Object(K.jsxs)("form",{className:"add-taks-form",onSubmit:s((function(t){u?(a(d),e.setIsEditing(!1)):(n(Object(f.a)(Object(f.a)({},d),{},{id:C()})),e.history.push("/"))})),children:[Object(K.jsx)("input",Object(f.a)(Object(f.a)({type:"text",placeholder:"Add new task",className:"input-title",name:"title",value:m},c("message",{required:"Required"})),{},{onChange:function(e){return j(Object(f.a)(Object(f.a)({},d),{},{title:e.target.value}))}})),i.message&&i.message.message,Object(K.jsxs)("div",{className:"description form-section field",children:[Object(K.jsx)("label",{htmlFor:"description",children:"description"}),Object(K.jsx)("textarea",{type:"text",placeholder:"",name:"description",value:p,onChange:function(e){return j(Object(f.a)(Object(f.a)({},d),{},{description:e.target.value}))}})]}),Object(K.jsxs)("div",{className:"other-infos form-section",children:[Object(K.jsxs)("div",{className:"due-date field",children:[Object(K.jsx)("label",{htmlFor:"date",children:"Due Date"}),Object(K.jsx)(X.a,{selected:Date.parse(O),onChange:function(e){return j(Object(f.a)(Object(f.a)({},d),{},{dueDate:e}))},dateFormat:"d MMMM yyyy",minDate:new Date})]}),Object(K.jsxs)("div",{className:"priority field",children:[Object(K.jsx)("label",{htmlFor:"priority",children:"priority"}),Object(K.jsxs)("select",{value:h,onChange:function(e){return j(Object(f.a)(Object(f.a)({},d),{},{priority:e.target.value}))},children:[Object(K.jsx)("option",{value:"low",children:"low"}),Object(K.jsx)("option",{value:"normal",children:"normal"}),Object(K.jsx)("option",{value:"high",children:"high"})]})]})]}),Object(K.jsx)("button",{type:"submit",className:"btn btn-add",children:"".concat(u?"update":"add")})]})})},te=q.a.div(i||(i=Object(O.a)(["\n  border: 1px solid var(--clr-black);\n  border-radius: var(--radius);\n  // padding: 0.8rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  .task-editing {\n    border-bottom: 1px solid var(--clr-black);\n  }\n  .task {\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem;\n    .left-task-item {\n      display: flex;\n      align-items: center;\n    }\n    .checkbox[type='checkbox'] {\n      display: inline-block;\n      margin-right: 1rem;\n      height: 16px;\n      width: 16px;\n    }\n    .task-title {\n      text-transform: capitalize;\n    }\n    .btn-detail {\n      margin-right: 1rem;\n    }\n    .btn-remove {\n      background-color: var(--clr-red-dark);\n      :hover {\n        background-color: var(--clr-red-light);\n      }\n    }\n    .btn-detail {\n      background-color: var(--clr-blue-dark);\n      :hover {\n        background-color: var(--clr-blue-light);\n      }\n    }\n  }\n"]))),ne=function(e){var t=z(),n=t.removeTask,a=t.selectTask,r=Object(b.useState)(!1),c=Object(g.a)(r,2),s=c[0],i=c[1],o=e.title,l=e.id,d=e.isSelected;e.dueDate;return Object(K.jsxs)(te,{className:"task-container",children:[Object(K.jsxs)("div",{className:"".concat(s?"task task-editing":"task"),children:[Object(K.jsxs)("div",{className:"left-task-item",children:[Object(K.jsx)("input",{type:"checkbox",name:"checkbox",className:"checkbox",checked:d,onChange:function(){return a(l,d)}}),Object(K.jsx)("span",{className:"task-title",children:o})]}),Object(K.jsxs)("div",{className:"buttons",children:[Object(K.jsx)("button",{onClick:function(){return i(!s)},className:"btn btn-detail",children:"detail"}),Object(K.jsx)("button",{onClick:function(){return n(l)},className:"btn btn-remove",children:"remove"})]})]}),s&&Object(K.jsx)(ee,{task:e,isEditing:s,setIsEditing:i})]})},ae=q.a.div(o||(o=Object(O.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]))),re=function(){var e=z().filtered_tasks;return console.log(e),Object(K.jsx)(ae,{children:e.map((function(e,t){return Object(K.jsx)(ne,Object(f.a)({},e),t)}))})},ce=(q.a.div(l||(l=Object(O.a)(["\n  .home-page {\n    padding: 3rem;\n  }\n"]))),function(){var e=z(),t=e.tasks,n=e.selectedItems;return!t||t.length<1?Object(K.jsxs)("div",{children:[Object(K.jsx)("h1",{children:"there is no tasks"}),Object(K.jsx)(h.b,{to:"/add",exact:"true",children:"fill it"})]}):Object(K.jsx)("wrapper",{children:Object(K.jsxs)("div",{className:"home-page section-center",children:[Object(K.jsx)(V,{}),Object(K.jsx)("h3",{children:"Home"}),Object(K.jsx)(G,{}),Object(K.jsx)(re,{}),n>0&&Object(K.jsx)(H,{})]})})}),se=(q.a.div(d||(d=Object(O.a)([""]))),function(e){return console.log(e.match,e.history),Object(K.jsxs)("div",{className:"add-task-container section-center",children:[Object(K.jsx)(V,{}),Object(K.jsx)("h3",{children:"Add"}),Object(K.jsx)(ee,{match:e.match,history:e.history})]})});var ie=function(){return Object(K.jsx)("div",{className:"App",children:Object(K.jsxs)(h.a,{children:[Object(K.jsx)(p.a,{path:"/",component:function(e){var t=e.match;return Object(K.jsx)(ce,{match:t})},exact:!0}),Object(K.jsx)(p.a,{path:"/add",component:function(e){var t=e.match,n=e.history;return Object(K.jsx)(se,{match:t,history:n})},exact:!0})]})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};m.a.render(Object(K.jsx)(j.a.StrictMode,{children:Object(K.jsx)(P,{children:Object(K.jsx)(ie,{})})}),document.getElementById("root")),oe()},67:function(e,t,n){},68:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.970d1cf5.chunk.js.map