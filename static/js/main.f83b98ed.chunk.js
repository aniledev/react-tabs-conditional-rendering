(this["webpackJsonpreact-conditional-rendering"]=this["webpackJsonpreact-conditional-rendering"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),o=n.n(i),a=n(3),c=n.n(a),s=(n(13),n(4)),u=n(5),d=n(7),l=n(6),p=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={currentTabIndex:0},e.handleClick=function(t){console.log("clicked!",{index:t}),e.setState({currentTabIndex:t})},e}return Object(u.a)(n,[{key:"renderButtons",value:function(){var e=this;return this.props.tabs.map((function(t,n){return Object(r.jsx)("button",{onClick:function(){return e.handleClick(n)},children:t.name},n)}))}},{key:"renderContent",value:function(){var e=this.state.currentTabIndex,t=this.props.tabs[e];return Object(r.jsx)("div",{className:"content",children:t.content})}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[this.renderButtons(),!!this.props.tabs.length&&this.renderContent()]})}}]),n}(o.a.Component);p.defaultProps={tabs:[]};var m=[{name:"First tab",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."},{name:"Second tab",content:"Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."},{name:"Third tab",content:"Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."}];var b=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h2",{children:"React Conditional Rendering"}),Object(r.jsx)(p,{tabs:m})]})};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f83b98ed.chunk.js.map