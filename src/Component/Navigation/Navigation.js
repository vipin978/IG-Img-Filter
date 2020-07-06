import React from 'react';

const Navigation = ({onRouteChange,type}) => {
  if (type === 'signin' || type === 'Register'){
    return (
    <nav style = {{marginLeft:'auto',width:'500px',display:'flex',justifyContent:'flex-end'}}>
      <p onClick = {() => onRouteChange('signin')} className = 'f3 link dim black underline pa3 pointer'>Signin</p>
      <p onClick = {() => onRouteChange('Register')} className = 'f3 link dim black underline pa3 pointer'>Register</p>
    </nav>
  )
  }
  else{
  return (
    <nav style = {{marginLeft:'auto',width:'500px',display:'flex',justifyContent:'flex-end'}}>
      <p onClick = {() => onRouteChange('signin')} className = 'f3 link dim black underline pa3 pointer'>Sign Out</p>
    </nav>
  )
}
}

export default Navigation
