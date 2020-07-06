import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
import lg from './brain.svg'

const Logo = () => {
  return (
    <div className='ma4'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100,padding:"15px" }} >
        <div className="Tilt-inner"> <img src={lg} alt=""/> </div>
      </Tilt>
    </div>
  )
}

export default Logo
