(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,a,t){e.exports=t.p+"static/media/logo.65d0543c.png"},53:function(e,a,t){e.exports=t(79)},58:function(e,a,t){},70:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(41),l=t.n(r),s=(t(58),t(11)),m=t(12),u=t(15),o=t(13),i=t(16),h=t(51),p=t(14),d=t(83),E=t(84),g=t(22),b=t(7),f=t.n(b),_=t(24),y=t.n(_),v=t(42),N=t.n(v),k=t(82);function j(e){var a=e.launch,t=a.flight_number,n=a.mission_name,r=a.launch_date_local,l=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:y()({"text-success":l,"text-danger":!l})},n)," "),c.a.createElement("p",null,"Date: ",c.a.createElement(N.a,{format:"YYYY-MM-DD HH:mm"},r))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(k.a,{to:"/launch/".concat(t),className:"btn btn-secondary btn-sm"},"Launch Details"))))}function O(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}function w(){var e=Object(g.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return w=function(){return e},e}var x=f()(w()),L=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("h2",{className:"my-3"},"Launches"),c.a.createElement(O,null),c.a.createElement(p.Query,{query:x},function(e){var a=e.loading,t=e.error,r=e.data;return a?c.a.createElement("h4",null,"Loading..."):(t&&console.log(t),c.a.createElement(n.Fragment,null,r.launches.map(function(e){return c.a.createElement(j,{key:e.flight_number,launch:e})})))}))}}]),a}(n.Component);function D(){var e=Object(g.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return D=function(){return e},e}var Y=f()(D()),q=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement(n.Fragment,null,c.a.createElement(p.Query,{query:Y,variables:{flight_number:e}},function(e){var a=e.loading,t=e.error,n=e.data;if(a)return c.a.createElement("h4",null,"Loading . . .");t&&console.log(t);var r=n.launch,l=r.mission_name,s=r.flight_number,m=r.launch_year,u=r.launch_success,o=r.rocket,i=o.rocket_id,h=o.rocket_name,p=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h2",null,l),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:y()({"text-success":u,"text-danger":!u})},u?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",i),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement("hr",null),c.a.createElement(k.a,{to:"/",className:"btn btn-secondary"},"Back"))}))}}]),a}(n.Component),F=(t(70),t(48)),B=t.n(F),I=new h.a({uri:"/graphql"}),Q=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(p.ApolloProvider,{client:I},c.a.createElement(d.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:B.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto",paddingBottom:"20px"}}),c.a.createElement(E.a,{exact:!0,path:"/",component:L}),c.a.createElement(E.a,{exact:!0,path:"/launch/:flight_number",component:q}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,2,1]]]);
//# sourceMappingURL=main.45c50a93.chunk.js.map