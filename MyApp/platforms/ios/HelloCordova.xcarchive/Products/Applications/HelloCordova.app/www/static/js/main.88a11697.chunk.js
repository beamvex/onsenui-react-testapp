(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/iscream-logo.d2b7eafc.png"},26:function(e,t,n){},45:function(e,t,n){e.exports=n(92)},50:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),c=n.n(o),i=(n(50),n(12)),s=n(13),l=n(16),u=n(14),p=n(17),d=n(5),m=(n(26),n(40)),g=n.n(m),h=n(18),f="GET_TRUCKS",b="TRUCKS_RECEIVED",v="GET_LOCATION",O="LOCATION_RECEIVED",E="OPEN_POPOVER",j="CLOSE_POPOVER",w="LOGIN",y="REGISTER",k="LOAD_STORE",x="UPDATE_EMAIL",C="UPDATE_LISTNER",R="ADD_TRUCK";function P(e){return{type:C,listener:e}}var S=function(e){return console.log(e),e};function I(e){return{openPopUp:function(t,n){return e(function(e,t){return{type:E,target:e,text:t}}(t,n))},closePopUp:function(){return e({type:j})}}}var A=function(e){e.text;return r.a.createElement(d.Icon,{size:{default:32,material:40},icon:{default:"md-gps-dot"}})},T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.Icon,{size:{default:32,material:40},icon:{default:"md-truck"},onClick:function(){console.log("clicked!"),e.props.openPopUp(e.btn,e.props.document.name)},ref:function(t){e.btn=t}})}}]),t}(r.a.Component),U=Object(h.b)(S,I)(T),z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log("map popover render",this.props.uiReducer.isOpen),r.a.createElement(d.Popover,{isOpen:this.props.uiReducer.isOpen,onCancel:function(){console.log("cancelled"),e.props.closePopUp()},getTarget:function(){return e.props.uiReducer.target},isCancelable:!0},r.a.createElement("div",{style:{textAlign:"center",opacity:.5}},r.a.createElement("p",null,this.props.uiReducer.text),r.a.createElement("p",null,r.a.createElement("small",null,"Click the background to remove the popover."))))}}]),t}(r.a.Component),N=Object(h.b)(S,I)(z),L=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"calc(100vh - 100px)",width:"100%",paddingTop:"45px"}},r.a.createElement(g.a,{bootstrapURLKeys:{key:"AIzaSyCI47PgInts5BBEQ8UypZYHqpf-zLeHiDY"},center:this.props.center,zoom:this.props.zoom,defaultCenter:this.props.defCenter,defaultZoom:this.props.defZoom},r.a.createElement(A,{lat:this.props.center.lat,lng:this.props.center.lng,text:"My Marker"}),this.props.trucks.map(function(e){return r.a.createElement(U,{key:e.id,lat:e.lat,lng:e.lng,document:e})})))}}]),t}(r.a.Component);L.defaultProps={defCenter:{lat:0,lng:51},defZoom:1};var B=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={center:{lat:51.4934,lng:.0098},zoom:1,isOpen:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("mappage",this.props),r.a.createElement("div",null,r.a.createElement(L,{center:this.props.locationReducer.center,zoom:this.props.locationReducer.zoom,trucks:this.props.truckReducer.trucks}),r.a.createElement(N,null))}}]),t}(r.a.Component),_=Object(h.b)(S)(B),D=n(24),G=n.n(D);var M=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){e.authReducer.email!==this.props.authReducer.email&&this.setState({email:this.props.authReducer.email})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"homepage-div"},r.a.createElement("div",null,r.a.createElement("img",{src:G.a,alt:"iscream.app",className:"home-logo-center"}),r.a.createElement(d.Card,null,r.a.createElement(d.Row,null,r.a.createElement(d.Col,null,r.a.createElement("p",null,"Sign in or Sign up"))),r.a.createElement(d.Row,null,r.a.createElement(d.Col,null,r.a.createElement(d.Input,{className:"width-max",value:this.state.email,float:!0,onChange:function(t){e.setState({email:t.target.value})},placeholder:"E-mail Address"}))),r.a.createElement(d.Row,null,r.a.createElement(d.Col,null,r.a.createElement(d.Input,{className:"width-max",value:this.state.password,float:!0,onChange:function(t){e.setState({password:t.target.value})},placeholder:"Password",type:"password"}))),r.a.createElement(d.Row,null,r.a.createElement(d.Col,{className:"p50pButton"},r.a.createElement(d.Button,{modifier:"large--cta",onClick:function(){e.props.signIn(e.state.email,e.state.password)}},"Sign In!")),r.a.createElement(d.Col,{className:"p50pButton"},r.a.createElement(d.Button,{modifier:"large--cta",onClick:function(){e.props.signUp(e.state.email,e.state.password)}},"Sign Up!"))))))}}]),t}(r.a.Component),J=Object(h.b)(function(e){return console.log("homepage",e),e},function(e){return{signIn:function(t,n){return e(function(e,t){return{type:w,email:e,password:t}}(t,n))},signUp:function(t,n){return e(function(e,t){return{type:y,email:e,password:t}}(t,n))},updateEmail:function(t){return e(function(e){return{type:x,email:e}}(t))}}})(M),H=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={index:0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.Page,null,r.a.createElement(d.Toolbar,{className:"gradient-back"},r.a.createElement("div",{className:"left"}),r.a.createElement("div",{className:"center"},r.a.createElement("img",{src:G.a,height:"40px",alt:"iscream.app"})),r.a.createElement("div",{className:"right"})),r.a.createElement(d.Tabbar,{onPreChange:function(t){var n=t.index;return e.setState({index:n})},onPostChange:function(){return console.log("postChange")},onReactive:function(){return console.log("postChange")},position:"bottom",index:this.state.index,renderTabs:function(e,t){return[{content:r.a.createElement(d.Page,{title:"Home",active:0===e,tabbar:t},r.a.createElement(J,null)),tab:r.a.createElement(d.Tab,{label:"Home",icon:"md-home"})},{content:r.a.createElement(d.Page,{title:"Maps",active:1===e,tabbar:t},r.a.createElement(_,null)),tab:r.a.createElement(d.Tab,{label:"Maps",icon:"md-map"})},{content:r.a.createElement(d.Page,{title:"Me",active:2===e,tabbar:t}),tab:r.a.createElement(d.Tab,{label:"Me",icon:"md-account"})},{content:r.a.createElement(d.Page,{title:"Settings",active:3===e,tabbar:t}),tab:r.a.createElement(d.Tab,{label:"Settings",icon:"md-settings"})}]}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=n(11),V={email:"",password:"",loggedin:!1};var W={center:{lat:51.4934,lng:.0098},zoom:1};var Z={text:"",target:null,isOpen:!1};var q={trucks:[],listner:void 0};var Y={};var F=Object(K.c)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;return t.type===w?Object.assign({},e,{email:t.email,password:t.password}):t.type===y?Object.assign({},e,{email:t.email,password:t.password}):t.type===x?Object.assign({},e,{email:t.email}):t.type===k?(console.log("load store",t),Object.assign({},e,{email:t.store?t.store.email:""})):e},locationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return t.type===O?(console.log(t),Object.assign({},e,{center:t.location.center,zoom:t.location.zoom})):e},uiReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type===E?(console.log(t),Object.assign({},e,{text:t.text,target:t.target,isOpen:!0})):t.type===j?(console.log(t),Object.assign({},e,{text:"",target:null,isOpen:!1})):e},truckReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;if(t.type===b)return console.log(t),Object.assign({},e,{trucks:t.trucks});if(t.type===C)return Object.assign({},e,{listner:t.listner});if(t.type===R){console.log(t);var n=e.trucks;return n.push(t.truck),Object.assign({},e,{trucks:n})}return e},localstoreReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,n=!1;if(t.type===w?(e=Object.assign({},e,{email:t.email,password:""}),n=!0):t.type===y&&(e=Object.assign({},e,{email:t.email,password:""}),n=!0),n){var a=JSON.stringify(e);console.log("local",a),localStorage.setItem("store",a)}return e}}),Q=n(43),$=n(6),X=n.n($),ee=n(7),te=n(9),ne=(n(38),X.a.mark(re)),ae=X.a.mark(oe);function re(){var e;return X.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ee.c)();case 2:e=t.sent,te.auth().setPersistence(te.auth.Auth.Persistence.LOCAL).then(function(){te.auth().createUserWithEmailAndPassword(e.authReducer.email,e.authReducer.password)}).catch(function(e){var t=e.code,n=e.message;console.log(t,n)});case 4:case"end":return t.stop()}},ne)}function oe(){var e;return X.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ee.c)();case 2:e=t.sent,te.auth().setPersistence(te.auth.Auth.Persistence.LOCAL).then(function(){te.auth().signInWithEmailAndPassword(e.authReducer.email,e.authReducer.password)}).catch(function(e){var t=e.code,n=e.message;console.log(t,n)});case 4:case"end":return t.stop()}},ae)}te.initializeApp({apiKey:"AIzaSyBpBwGqd8U8GA-HschlOvAUWJVjUFr1bJc",projectId:"test1-2b206"});te.auth().onAuthStateChanged(function(e){console.log("user event",e),null!==e?console.log("logged in",e.uid):console.log("not logged in")});var ce=X.a.mark(ie);function ie(){var e;return X.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(e,t){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){console.log("Latitude: "+t.coords.latitude+"<br>Longitude: "+t.coords.longitude),e({center:{lat:t.coords.latitude,lng:t.coords.longitude},zoom:17})},function(t){e({noGeo:!0,reason:t,center:{lat:51.4934,lng:.0098},zoom:17})}):e({noGeo:!0,center:{lat:51.4934,lng:.0098},zoom:17,reason:"no location object"})});case 2:return e=t.sent,t.next=5,Object(ee.b)({type:O,location:e});case 5:return t.next=7,Object(ee.b)({type:f});case 7:case"end":return t.stop()}},ce)}var se=n(44),le=X.a.mark(ue);function ue(){var e,t;return X.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ee.c)();case 2:return void 0!==(e=n.sent).truckReducer.listner&&e.truckReducer.listner(),t=void 0,n.next=7,t=te.firestore().collection("trucks").onSnapshot(pe);case 7:return n.next=9,Object(ee.b)(P(t));case 9:case"end":return n.stop()}},le)}function pe(e){ve.dispatch(function(e){return{type:b,trucks:e}}([])),e.forEach(function(e){console.log(e.id," => ",e.data());var t=Object(se.a)({id:e.id},e.data());ve.dispatch(function(e){return{type:R,truck:e}}(t))})}var de=X.a.mark(ge),me=X.a.mark(he);function ge(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.d)(f,ue);case 2:return e.next=4,Object(ee.d)(v,ie);case 4:return e.next=6,Object(ee.d)(y,re);case 6:return e.next=8,Object(ee.d)(w,oe);case 8:case"end":return e.stop()}},de)}function he(){return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)([ge()]);case 2:case"end":return e.stop()}},me)}var fe=Object(Q.a)(),be=Object(K.e)(F,Object(K.a)(fe));fe.run(he);var ve=be;n(80),n(81),n(82);c.a.render(r.a.createElement(h.a,{store:ve},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),ve.subscribe(function(){console.log(ve.getState())});var Oe={};try{Oe=JSON.parse(localStorage.getItem("store"))}catch(Ee){}ve.dispatch({type:k,store:Oe}),ve.dispatch({type:v})}},[[45,1,2]]]);
//# sourceMappingURL=main.88a11697.chunk.js.map