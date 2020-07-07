import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

import Navigation from './Component/Navigation/Navigation'
import Signin from './Component/Signin/Signin'
import Register from './Component/Register/Register'
import IsNSFW from './Component/IsNSFW/IsNSFW'
import Logo from './Component/Logo/Logo'
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm'
import Rank from './Component/Rank/Rank'
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey:'c5c6a24d643a456dbede405a3f74f752'
});

const particleOpt = {
particles: {
number:{
  value:200,
  density:{
    enable:true,
    value_area:800
  }
}
}
}
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      input : '',
      imageUrl:'',
      category:'',
      route:'signin',
      type:'signin',
      user:{}
    }
  }

  // componentDidMount() {
  //   fetch('https://frozen-reaches-78276.herokuapp.com/')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  setCategory = (response) => {
    var array = response.outputs[0].data.concepts
    var categroy = ''
    var maxs = -1;
    for(var i =0 ;i<array.length;i++){
      if (array[i].value > maxs){
        maxs = array[i].value
        categroy = array[i].name
      }
    }
    this.setState({category:categroy,imageUrl:this.state.input})

  }

  onRouteChange = (route) => {
    this.setState({route:route,type:route})
  }

  onChange = (event) => {
    this.setState({input:event.target.value});
  }

  onSubmit = () => {
    app.models.predict(Clarifai.MODERATION_MODEL, this.state.input).then((response) => this.setCategory(response))
    .catch(err => console.log(err));
  }

  loadData = (data) => {
    this.setState({user:{
      name:data.name
    }
    })
  }

  render() {
    return (
      <div>
        <Particles params={particleOpt} className='particles-js'/>
        <div style={{display:'flex'}}>
          <Logo/>
          <Navigation onRouteChange = {this.onRouteChange} type = {this.state.type} />
        </div>
        {
        this.state.route === 'home' ?
        <div>
          <Rank name = {this.state.user.name}/>
          <ImageLinkForm onChange = {this.onChange} onSubmit = {this.onSubmit}/>
          <IsNSFW imageUrl = {this.state.imageUrl} category={this.state.category}/>
        </div>
        :(this.state.route === 'signin' ? <Signin loadData = {this.loadData} onRouteChange = {this.onRouteChange}/> : <Register loadData = {this.loadData} onRouteChange = {this.onRouteChange}/>)

    }
    </div>
    )
  }
}


export default App;
