(this.webpackJsonpsmartbrain=this.webpackJsonpsmartbrain||[]).push([[0],{242:function(e,t,a){},243:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(45),i=a.n(r),l=(a(93),a(16)),o=a(17),c=a(19),m=a(18),u=(a(94),a(84)),p=a.n(u),d=function(e){var t=e.onRouteChange,a=e.type;return"signin"===a||"Register"===a?s.a.createElement("nav",{style:{marginLeft:"auto",width:"500px",display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Signin"),s.a.createElement("p",{onClick:function(){return t("Register")},className:"f3 link dim black underline pa3 pointer"},"Register")):s.a.createElement("nav",{style:{marginLeft:"auto",width:"500px",display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign Out"))},h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitSignin=function(){var e=n.props.onRouteChange;fetch("https://frozen-reaches-78276.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(t){"success"===t.status&&(n.props.loadData(t),e("home"))})).catch((function(e){return console.log(e)}))},n.state={email:"",password:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{className:"measure center"},s.a.createElement("div",{className:"br3 shadow-2 pa4"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}}," ",s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign In")," "),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent br3 hover-bg-black hover-white w-100",onChange:this.onEmailChange,type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba br3 bg-transparent hover-bg-black hover-white w-100",onChange:this.onPasswordChange,type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("input",{onClick:this.onSubmitSignin,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"button",value:"Sign in"}))),s.a.createElement("div",{className:"lh-copy mt3",style:{display:"flex",justifyContent:"center"}},s.a.createElement("p",{className:"f6 link dim black db pointer",onClick:function(){return e("Register")}},"Sign up")))))}}]),a}(s.a.Component),g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitRegister=function(){var e=n.props.onRouteChange;fetch("https://frozen-reaches-78276.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(t){"success"===t.status&&(n.props.loadData(t),e("home"))}))},n.state={name:"",email:"",password:""},n}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{className:"measure center"},s.a.createElement("div",{className:"br3 shadow-2 pa4"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}}," ",s.a.createElement("legend",{className:"f2 fw6 ph0 mh0"},"Sign Up")," "),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Name"),s.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent br3 hover-bg-black hover-white w-100",type:"name",name:"name",id:"name"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent br3 hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba br3 bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",onClick:this.onSubmitRegister,type:"button",value:"Sign Up"}))))))}}]),a}(s.a.Component),f=a(85),b=a.n(f),v=function(e){var t=e.imageUrl;return"drug"===e.category&&(t=b.a,console.log(e.imageUrl,"sisi")),s.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"10px"}},s.a.createElement("img",{alt:"",src:t,width:"450px",height:"450px"}))},y=a(86),E=a.n(y),w=(a(242),a(87)),C=a.n(w),N=function(){return s.a.createElement("div",{className:"ma4"},s.a.createElement(E.a,{className:"Tilt br2 shadow-2",options:{max:25},style:{height:100,width:100,padding:"15px"}},s.a.createElement("div",{className:"Tilt-inner"}," ",s.a.createElement("img",{src:C.a,alt:""})," ")))},k=(a(243),function(e){var t=e.onChange,a=e.onSubmit;return s.a.createElement("div",null,s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("h1",{className:"f3"}," ","Copy Paste the Image Link"," ")),s.a.createElement("div",{className:"centre"},s.a.createElement("div",{className:"pa4 br3 shadow-5 backComb",style:{width:"700px",display:"flex"}},s.a.createElement("input",{className:"w-70 pa2 f4",onChange:t,type:"tex"}),s.a.createElement("button",{className:"bord button w-30 grow f4 link ph3 pv2 dib white bg-purple",onClick:a}," Detect "))))}),j=function(e){return s.a.createElement("div",{className:"f3 white",style:{display:"flex",justifyContent:"center"}},"HEY "+e.name)},S=a(46),x=a.n(S),O=new x.a.App({apiKey:"c5c6a24d643a456dbede405a3f74f752"}),R={particles:{number:{value:200,density:{enable:!0,value_area:800}}}},D=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).setCategory=function(t){for(var a=t.outputs[0].data.concepts,n="",s=-1,r=0;r<a.length;r++)a[r].value>s&&(s=a[r].value,n=a[r].name);e.setState({category:n,imageUrl:e.state.input})},e.onRouteChange=function(t){e.setState({route:t,type:t})},e.onChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(){O.models.predict(x.a.MODERATION_MODEL,e.state.input).then((function(t){return e.setCategory(t)})).catch((function(e){return console.log(e)}))},e.loadData=function(t){e.setState({user:{name:t.name}})},e.state={input:"",imageUrl:"",category:"",route:"signin",type:"signin",user:{}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){fetch("https://frozen-reaches-78276.herokuapp.com/").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(p.a,{params:R,className:"particles-js"}),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement(N,null),s.a.createElement(d,{onRouteChange:this.onRouteChange,type:this.state.type})),"home"===this.state.route?s.a.createElement("div",null,s.a.createElement(j,{name:this.state.user.name}),s.a.createElement(k,{onChange:this.onChange,onSubmit:this.onSubmit}),s.a.createElement(v,{imageUrl:this.state.imageUrl,category:this.state.category})):"signin"===this.state.route?s.a.createElement(h,{loadData:this.loadData,onRouteChange:this.onRouteChange}):s.a.createElement(g,{loadData:this.loadData,onRouteChange:this.onRouteChange}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(280);i.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,t,a){e.exports=a.p+"static/media/badOne.803e367d.jpeg"},87:function(e,t,a){e.exports=a.p+"static/media/brain.dca29619.svg"},88:function(e,t,a){e.exports=a(281)},93:function(e,t,a){},94:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.c5c60b44.chunk.js.map