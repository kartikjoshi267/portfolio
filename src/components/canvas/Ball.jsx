import React, { /*Suspense*/ } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Decal, Float, Preload, useTexture } from '@react-three/drei'
// import CanvasLoader from '../Loader';

const Ball = ({ icon, index }) => {
  return (
    <>
      <div style={{ animationDelay: `${0.5*index}s` }} className='bg-white p-4 rounded-[50%] shadow-[0_0px_20px_10px_rgba(255,255,255,0.3)] animate-glowing'>
        <img draggable={false} src={icon} alt={icon} className='transform -scale-x-100' />
      </div>
    </>
  )
}

const BallCanvas = ({ icon,index }) => {
  return (
    <div>
      <Ball icon={icon} index={index} />
    </div>
  )
}

export default BallCanvas