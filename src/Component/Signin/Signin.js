import React from 'react';


class Signin extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      email:"",
      password:""
    }
  }

  onEmailChange = (event) => {
    this.setState({email:event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password:event.target.value})
  }

  onSubmitSignin = () => {
    const {onRouteChange} = this.props
    // onRouteChange('home')
    fetch('https://frozen-reaches-78276.herokuapp.com/signin',{
      method:'post',
      mode: 'no-cors',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    })
    .then(res => res.json())
    .then(data => {
    if(data.status === 'success'){
      this.props.loadData(data);
      onRouteChange('home');
      }
    }
  )
  .catch(err => console.log(err))
}

  render() {
    const {onRouteChange} = this.props
    return (
      <main className="pa4 black-80">
        <form className="measure center">
        <div className = "br3 shadow-2 pa4">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <div style = {{display:"flex",justifyContent:"center"}}> <legend className="f2 fw6 ph0 mh0">Sign In</legend> </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent br3 hover-bg-black hover-white w-100" onChange={this.onEmailChange} type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba br3 bg-transparent hover-bg-black hover-white w-100" onChange={this.onPasswordChange} type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <div style = {{display:"flex",justifyContent:"center"}}>
            <input
             onClick = {this.onSubmitSignin}
             className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
             type="button"
             value="Sign in"/>
            </div>
          </div>
            <div className="lh-copy mt3" style={{display:"flex",justifyContent:"center"}}>
            <p className="f6 link dim black db pointer" onClick = {() => onRouteChange('Register')}>Sign up</p>
          </div>
        </div>
        </form>
      </main>
    )
  }
}

export default Signin
