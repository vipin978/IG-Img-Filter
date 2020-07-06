import React from 'react';

import './ImageLinkForm.css'

const ImageLinkForm = ({onChange,onSubmit}) => {
  return (
    <div>
      <div style = {{display:'flex',justifyContent:'center'}}><h1 className= 'f3'> {'Copy Paste the Image Link'} </h1></div>
      <div className= 'centre'>
        <div className= 'pa4 br3 shadow-5 backComb' style={{width:'700px',display:'flex'}}>
          <input className = 'w-70 pa2 f4' onChange = {onChange} type = 'tex'/>
          <button className = 'bord button w-30 grow f4 link ph3 pv2 dib white bg-purple' onClick = {onSubmit}> Detect </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
