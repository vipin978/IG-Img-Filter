import React from 'react';
import img from './badOne.jpeg'

const IsNSFW = (props) => {
  var src = props.imageUrl
  if (props.category === "drug"){
    src = img;
    console.log(props.imageUrl,"sisi");
  }
  return (
    <div style = {{display:"flex",justifyContent:"center",margin:'10px'}}>
      <img alt = '' src = {src} width = '450px' height = '450px'/>
    </div>
  )
}

export default IsNSFW
