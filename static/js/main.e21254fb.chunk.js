(this.webpackJsonpsmartbrain=this.webpackJsonpsmartbrain||[]).push([[0],{242:function(e,a,t){},243:function(e,a,t){},281:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(45),i=t.n(r),l=(t(93),t(16)),o=t(17),c=t(19),m=t(18),p=(t(94),t(84)),u=t.n(p),d=function(e){var a=e.onRouteChange,t=e.type;return"signin"===t||"Register"===t?s.a.createElement("nav",{style:{marginLeft:"auto",width:"500px",display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return a("signin")},className:"f3 link dim black underline pa3 pointer"},"Signin"),s.a.createElement("p",{onClick:function(){return a("Register")},className:"f3 link dim black underline pa3 pointer"},"Register")):s.a.createElement("nav",{style:{marginLeft:"auto",width:"500px",display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return a("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign Out"))},h=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignin=function(){var e=n.props.onRouteChange;fetch("https://frozen-reaches-78276.herokuapp.com/signin",{method:"post",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(a){"success"===a.status&&(n.props.loadData(a),e("home"))}))},n.state={email:"",password:""},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{className:"measure center"},s.a.createElement("div",{className:"br3 shadow-2 pa4"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}}," ",s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In")," "),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent br3 hover-bg-black hover-white w-100",onChange:this.onEmailChange,type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba br3 bg-transparent hover-bg-black hover-white w-100",onChange:this.onPasswordChange,type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("input",{onClick:this.onSubmitSignin,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"button",value:"Sign in"}))),s.a.createElement("div",{className:"lh-copy mt3",style:{display:"flex",justifyContent:"center"}},s.a.createElement("p",{className:"f6 link dim black db pointer",onClick:function(){return e("Register")}},"Sign up")))))}}]),t}(s.a.Component),g=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitRegister=function(){var e=n.props.onRouteChange;fetch("https://frozen-reaches-78276.herokuapp.com/register",{method:"post",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(a){"success"===a.status&&(n.props.loadData(a),e("home"))}))},n.state={name:"",email:"",password:""},n}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{className:"measure center"},s.a.createElement("div",{className:"br3 shadow-2 pa4"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}}," ",s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign Up")," "),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Name"),s.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent br3 hover-bg-black hover-white w-100",type:"name",name:"name",id:"name"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent br3 hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba br3 bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",onClick:this.onSubmitRegister,type:"button",value:"Sign Up"}))))))}}]),t}(s.a.Component),f=t(85),b=t.n(f),v=function(e){var a=e.imageUrl;return"drug"===e.category&&(a=b.a,console.log(e.imageUrl,"sisi")),s.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"10px"}},s.a.createElement("img",{alt:"",src:a,width:"450px",height:"450px"}))},E=t(86),y=t.n(E),w=(t(242),t(87)),C=t.n(w),N=function(){return s.a.createElement("div",{className:"ma4"},s.a.createElement(y.a,{className:"Tilt br2 shadow-2",options:{max:25},style:{height:100,width:100,padding:"15px"}},s.a.createElement("div",{className:"Tilt-inner"}," ",s.a.createElement("img",{src:C.a,alt:""})," ")))},k=(t(243),function(e){var a=e.onChange,t=e.onSubmit;return s.a.createElement("div",null,s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("h1",{className:"f3"}," ","Copy Paste the Image Link"," ")),s.a.createElement("div",{className:"centre"},s.a.createElement("div",{className:"pa4 br3 shadow-5 backComb",style:{width:"700px",display:"flex"}},s.a.createElement("input",{className:"w-70 pa2 f4",onChange:a,type:"tex"}),s.a.createElement("button",{className:"bord button w-30 grow f4 link ph3 pv2 dib white bg-purple",onClick:t}," Detect "))))}),j=function(e){return s.a.createElement("div",{className:"f3 white",style:{display:"flex",justifyContent:"center"}},"HEY "+e.name)},S=t(46),x=t.n(S),O=new x.a.App({apiKey:"c5c6a24d643a456dbede405a3f74f752"}),R={particles:{number:{value:200,density:{enable:!0,value_area:800}}}},D=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).setCategory=function(a){for(var t=a.outputs[0].data.concepts,n="",s=-1,r=0;r<t.length;r++)t[r].value>s&&(s=t[r].value,n=t[r].name);e.setState({category:n,imageUrl:e.state.input})},e.onRouteChange=function(a){e.setState({route:a,type:a})},e.onChange=function(a){e.setState({input:a.target.value})},e.onSubmit=function(){O.models.predict(x.a.MODERATION_MODEL,e.state.input).then((function(a){return e.setCategory(a)})).catch((function(e){return console.log(e)}))},e.loadData=function(a){e.setState({user:{name:a.name}})},e.state={input:"",imageUrl:"",category:"",route:"signin",type:"signin",user:{}},e}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.a,{params:R,className:"particles-js"}),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement(N,null),s.a.createElement(d,{onRouteChange:this.onRouteChange,type:this.state.type})),"home"===this.state.route?s.a.createElement("div",null,s.a.createElement(j,{name:this.state.user.name}),s.a.createElement(k,{onChange:this.onChange,onSubmit:this.onSubmit}),s.a.createElement(v,{imageUrl:this.state.imageUrl,category:this.state.category})):"signin"===this.state.route?s.a.createElement(h,{loadData:this.loadData,onRouteChange:this.onRouteChange}):s.a.createElement(g,{loadData:this.loadData,onRouteChange:this.onRouteChange}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(280);i.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,a,t){e.exports=t.p+"static/media/badOne.803e367d.jpeg"},87:function(e,a,t){e.exports=t.p+"static/media/brain.dca29619.svg"},88:function(e,a,t){e.exports=t(281)},93:function(e,a,t){},94:function(e,a,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.e21254fb.chunk.js.map