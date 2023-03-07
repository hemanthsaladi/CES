import React from 'react';
import bg from './vid/cesvid.mp4';

export default function Mp() {
  return (
    <div className="bg">
        <div className='ovr'><h1 className='ovr1'>CES</h1>
        <h3>Welcome to civil engineering student society</h3></div>
        
    <video src={bg} autoPlay loop muted/>
    
    <div  className='content' position="absolute">
        
       
    </div>
    </div>
  )
}
