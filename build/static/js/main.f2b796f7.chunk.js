(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){},23:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),o=a.n(r),l=a(2),p=a(3),i=a(5),s=a(4),m=a(6),u=a(1);function h(){return c.a.createElement("div",{className:"headerwrap"},c.a.createElement("header",null,c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:"cnode\u56fe\u7247"}),c.a.createElement("input",{style:{marginLeft:"20px",backgroundColor:"grey",border:"none",borderRadius:"10px",width:"200px"},type:"text"}),c.a.createElement("div",{style:{float:"right",lineHeight:"50px"}},c.a.createElement(u.b,{to:"/home"},"\u9996\u9875"),c.a.createElement(u.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),c.a.createElement(u.b,{to:"/api"},"API"),c.a.createElement(u.b,{to:"/about"},"\u5173\u4e8e"),c.a.createElement(u.b,{to:"/login"},"\u767b\u9646"))))}var d=a(11),b=(a(19),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"sider-div"},c.a.createElement("ul",{style:{float:"left"},className:"sider-ul"},[1,2,3,4,5,6,7,8,9,10].map((function(t){return c.a.createElement("li",{key:t,style:{float:"left"},className:"sider-li"},c.a.createElement(u.b,{to:"/home/"+e.props.types+"/"+t},t))}))))}}]),t}(n.Component)),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={data:[],props:e},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.props.location.pathname.split("/")[2],a=this.props.match.params.page;console.log(this.props.match.params.types),fetch("https://cnodejs.org/api/v1/topics?tab="+t+"&page="+a).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page,c=this.state.props.location.pathname.split("/")[2];fetch("https://cnodejs.org/api/v1/topics?tab="+c+"&page="+n).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data})}))}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,this.state.data.map((function(t,a){return c.a.createElement("div",{style:{width:800,overflow:"left"},key:a},c.a.createElement("div",{className:"zhuti-div"},c.a.createElement("img",{src:t.author.avatar_url,alt:"",className:"zhuti-image1"}),c.a.createElement("p",{className:"zhuti-p zhuti-p0"},t.reply_count,"/"),c.a.createElement("p",{className:"zhuti-p zhuti-p1"},t.visit_count),c.a.createElement(u.a,null,c.a.createElement(u.b,{className:"zhuti-p zhuti-p2",dangerouslySetInnerHTML:{__html:t.title},to:"/".concat(e.state.props.location.pathname.split("/")[2],"/details/").concat(e.props.match.params.page,"/").concat(a)})),c.a.createElement("p",{className:"zhuti-p zhuti-p3"},"20\u5206\u949f\u524d"),c.a.createElement("img",{className:"zhuti-image2",src:t.author.avatar_url,alt:""})))})))}}]),t}(n.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/home/all/:page",component:E}),c.a.createElement(d.a,{from:"/*",to:"/home/all/1"})),c.a.createElement(b,{types:"all"})))}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/home/good/:page",component:E}),c.a.createElement(d.a,{from:"/*",to:"/home/good/1"})),c.a.createElement(b,{types:"good"})))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/home/share/:page",component:E}),c.a.createElement(d.a,{from:"/*",to:"/home/share/1"})),c.a.createElement(b,{types:"share"})))}}]),t}(n.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/home/ask/:page",component:E}),c.a.createElement(d.a,{from:"/*",to:"/home/ask/1"})),c.a.createElement(b,{types:"ask"})))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/home/job/:page",component:E}),c.a.createElement(d.a,{from:"/*",to:"/home/job/1"})),c.a.createElement(b,{types:"job"})))}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.match.url;return c.a.createElement("div",null,c.a.createElement("div",{className:"home-top"},c.a.createElement(u.c,{activeStyle:{background:"#80bd01",color:"#fff",borderRadius:"3px",padding:"3px 4px"},to:e+"/all"},"\u5168\u90e8"),c.a.createElement(u.c,{activeStyle:{background:"#80bd01",color:"#fff",borderRadius:"3px",padding:"3px 4px"},to:e+"/good"},"\u7cbe\u534e"),c.a.createElement(u.c,{activeStyle:{background:"#80bd01",color:"#fff",borderRadius:"3px",padding:"3px 4px"},to:e+"/share"},"\u5206\u4eab"),c.a.createElement(u.c,{activeStyle:{background:"#80bd01",color:"#fff",borderRadius:"3px",padding:"3px 4px"},to:e+"/ask"},"\u95ee\u7b54"),c.a.createElement(u.c,{activeStyle:{background:"#80bd01",color:"#fff",borderRadius:"3px",padding:"3px 4px"},to:e+"/job"},"\u62db\u8058")),c.a.createElement("div",{className:"home-list"},c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"".concat(e,"/all"),component:f}),c.a.createElement(d.b,{path:"".concat(e,"/good"),component:j}),c.a.createElement(d.b,{path:"".concat(e,"/share"),component:v}),c.a.createElement(d.b,{path:"".concat(e,"/ask"),component:g}),c.a.createElement(d.b,{path:"".concat(e,"/job"),component:O}),c.a.createElement(d.a,{from:"/*",to:"".concat(e,"/all")}))))}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"topp"},c.a.createElement("button",null,c.a.createElement("a",{href:"/home/all"},"\u5168\u90e8")),c.a.createElement("span",null,"/API")),"api")}}]),t}(n.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"topp"},c.a.createElement("button",null,c.a.createElement("a",{href:"/home/all"},"\u5168\u90e8")),c.a.createElement("span",null,"/\u65b0\u624b\u5165\u95e8")),"\u65b0\u624b\u5165\u95e8")}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"topp"},c.a.createElement("button",null,c.a.createElement("a",{href:"/home/all"},"\u5168\u90e8")),c.a.createElement("span",null,"/\u5173\u4e8e")),"about")}}]),t}(n.Component);function C(e){return c.a.createElement("div",{className:"login-div"},c.a.createElement("p",{className:"login-p1"},"\u7528\u6237\u540d\uff1a",c.a.createElement("input",{type:"text"})),c.a.createElement("p",{className:"login-p2"},"\u5bc6\u7801\uff1a",c.a.createElement("input",{type:"password"})),c.a.createElement("button",{onClick:function(){e.history.push("/")}},"\u767b\u9646"))}var z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={data:[],props:e},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.page,a=this.props.match.params.idx,n=this.state.props.location.pathname.split("/")[1];fetch("https://cnodejs.org/api/v1/topics?tab="+n+"&page="+t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data[a].content})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.page!==this.props.match.params.page){var n=this.props.match.params.idx,c=this.props.match.params.page,r=this.state.props.location.pathname.split("/")[2];console.log(c),fetch("https://cnodejs.org/api/v1/topics?tab="+r+"&page="+c).then((function(e){return e.json()})).then((function(e){console.log(e.data),a.setState({data:e.data[n].content})}))}}},{key:"render",value:function(){return c.a.createElement("div",{className:"my-div",dangerouslySetInnerHTML:{__html:this.state.data}})}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement(h,null),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"content"},c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/home",component:y}),c.a.createElement(d.b,{path:"/api",component:k}),c.a.createElement(d.b,{path:"/start",component:x}),c.a.createElement(d.b,{path:"/about",component:N}),c.a.createElement(d.b,{path:"/login",component:C}),c.a.createElement(d.b,{path:"/all/details/:page/:idx",component:z}),c.a.createElement(d.b,{path:"/ask/details/:page/:idx",component:z}),c.a.createElement(d.b,{path:"/good/details/:page/:idx",component:z}),c.a.createElement(d.b,{path:"/job/details/:page/:idx",component:z}),c.a.createElement(d.b,{path:"/share/details/:page/:idx",component:z}),c.a.createElement(d.a,{from:"/*",to:"/home"}))),c.a.createElement("div",{className:"sider"},c.a.createElement("p",null,"CNode\uff1aNode.js\u4e13\u4e1a\u4e2d\u6587\u793e\u533a"),c.a.createElement("p",null,"\u8fd9\u91cc\u662f\u6709\u70b9\u7b80\u964b\u7684\u4fa7\u8fb9\u680f( \xb4\u0414`)y")))))}}]),t}(n.Component);o.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f2b796f7.chunk.js.map