import React from 'react';

class Register extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        name:"",
        email:"",
        password:""
      }
    }

    onNameChange = (event) => {
      this.setState({name:event.target.value})
    }

    onEmailChange = (event) => {
      this.setState({email:event.target.value})
    }

    onPasswordChange = (event) => {
      this.setState({password:event.target.value})
    }

    onSubmitRegister = () => {
      const {onRouteChange} = this.props
      fetch('https://frozen-reaches-78276.herokuapp.com/register',{
        method:'post',
        mode: 'no-cors',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          name:this.state.name,
          email:this.state.email,
          password:this.state.password
        })
      })
      .then(res => res.json())
      .then(user => {
      if(user.status === "success"){
        this.props.loadData(user);
        onRouteChange('home');
        }
      }
    )
  }


  render(){
    return (
      <main className="pa4 black-80">
        <form className="measure center">
        <div className = "br3 shadow-2 pa4">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <div style = {{display:"flex",justifyContent:"center"}}> <legend className="f2 fw6 ph0 mh0">Sign Up</legend> </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
              <input
              onChange={this.onNameChange}
              className="pa2 input-reset ba bg-transparent br3 hover-bg-black hover-white w-100"
              type="name"
              name="name"
              id="name"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input
              onChange={this.onEmailChange}
              className="pa2 input-reset ba bg-transparent br3 hover-bg-black hover-white w-100"
              type="email"
              name="email-address"
              id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input
              onChange={this.onPasswordChange}
              className="b pa2 input-reset ba br3 bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="password"
              id="password"/>
            </div>
          </fieldset>
          <div className="">
            <div style = {{display:"flex",justifyContent:"center"}}>
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              onClick = {this.onSubmitRegister}
              type="button"
              value="Sign Up"/>
             </div>
          </div>
        </div>
        </form>
      </main>
    )
  }
}

export default Register
