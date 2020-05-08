(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(8),r=n.n(l),c=(n(15),n(16),n(1)),i=n(9),s=n(2),d=n(3),u=n(5),m=n(4),f=n(6),p=n.n(f),h=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={value:e.props.title,isClicked:!1},e.myRef=a.a.createRef(),e.handleClick=function(t){t.preventDefault(),e.setState((function(e){return{isClicked:!e.isClicked}}))},e.editTitle=function(t){var n=t.target;e.setState({value:n.value})},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.isClicked!==t.isClicked&&this.myRef.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.title,o=e.completed,l=e.onSelected,r=e.deleteTodo,c=e.saveChangesTodo,i=this.state.isClicked;return a.a.createElement("li",{className:p()({completed:o},{editing:i})},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",id:t,checked:o,onChange:l}),a.a.createElement("label",{htmlFor:t,onDoubleClick:this.handleClick},n),a.a.createElement("button",{type:"button",className:"destroy",onClick:r})),a.a.createElement("input",{type:"text",className:"edit",onBlur:this.handleClick,value:this.state.value,ref:this.myRef,onChange:this.editTitle,onKeyPress:c}))}}]),n}(a.a.Component);h.defaultProps={onSelected:null,deleteTodo:null,saveChangesTodo:function(){}};var v=h,T=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={isToggleOn:!0},e.handleClick=function(){e.setState((function(e){return{isToggleOn:!e.isToggleOn}})),e.props.onAllSelected(e.state.isToggleOn)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.todos,o=t.onTodoChecked,l=t.deleteTodo,r=t.saveChangesTodo;return a.a.createElement("section",{className:"main"},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:this.props.completedStatus,value:this.state.isToggleOn,onChange:this.handleClick}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement("ul",{className:"todo-list"},n.map((function(t){return a.a.createElement(v,Object.assign({},t,{key:t.id,onSelected:function(e){return o(t.id,e)},deleteTodo:function(){return l(t.id)},saveChangesTodo:function(n){return r(n,t.id,e.state.value)}}))}))))}}]),n}(a.a.Component);T.defaultProps={todos:[],deleteTodo:null,saveChangesTodo:function(){}};var C=T,b=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={title:"",id:"",completed:!1},e.handleTitle=function(t){var n=t.target;return e.setState({title:n.value.trim()})},e.handleSubmit=function(t){var n=e.state.title;t.preventDefault(),0!==n.length&&(e.props.onTodo(Object(c.a)(Object(c.a)({},e.state),{},{id:+new Date})),e.setState({title:""}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.title;return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:e,onChange:this.handleTitle})))}}]),n}(a.a.Component),g=[{href:"#/",text:"All"},{href:"#/active",text:"Active"},{href:"#/completed",text:"Completed"}],k=function(e){var t=e.noComlpetedTodo,n=e.onFilteredTodos,o=e.clearCompleted,l=e.visibleClearCompleted,r=e.filterType;return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},t," ","items left"),a.a.createElement("ul",{className:"filters"},g.map((function(e){return a.a.createElement("li",{key:e.text},a.a.createElement("a",{href:e.href,className:p()({selected:r==="".concat(e.text)}),onClick:function(e){return n(e.target.text)}},e.text))}))),l&&a.a.createElement("button",{type:"button",className:"clear-completed",onClick:o},"Clear completed"))},y=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],filterType:"All"},e.addTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(i.a)(e.todos),[t])}}))},e.saveChangesTodo=function(t,n,o){var a=t.target.value;"Enter"===t.key&&e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===n?Object(c.a)(Object(c.a)({},e),{},{title:a}):e}))}}))},e.onTodoChecked=function(t,n){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{completed:!e.completed}):e}))}}))},e.onAllSelected=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{completed:t})}))}}))},e.onFilteredTodos=function(t){e.setState({filterType:t})},e.getVisibleTodos=function(){var t=e.state,n=t.todos,o=t.filterType;return"Active"===o?n.filter((function(e){return!e.completed})):"Completed"===o?n.filter((function(e){return e.completed})):n},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.clearCompleted=function(){e.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},{todos:e.todos.filter((function(e){return!e.completed}))})}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.todos,n=e.filterType,o=0!==t.length&&t.every((function(e){return e.completed})),l=t.some((function(e){return e.completed})),r=t.filter((function(e){return!e.completed})).length,c=this.getVisibleTodos(n);return a.a.createElement("section",{className:"todoapp"},a.a.createElement(b,{onTodo:this.addTodo}),a.a.createElement(C,{todos:c,completedStatus:o,onFilteredTodos:this.onFilteredTodos,onAllSelected:this.onAllSelected,onTodoChecked:this.onTodoChecked,deleteTodo:this.deleteTodo,saveChangesTodo:this.saveChangesTodo}),a.a.createElement(k,{noComlpetedTodo:r,onFilteredTodos:this.onFilteredTodos,clearCompleted:this.clearCompleted,visibleClearCompleted:l,filterType:n}))}}]),n}(a.a.Component);r.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f42ca991.chunk.js.map