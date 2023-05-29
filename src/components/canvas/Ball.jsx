import React, { /*Suspense*/ } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Decal, Float, Preload, useTexture } from '@react-three/drei'
// import CanvasLoader from '../Loader';

const Ball = ({ icon }) => {
  return (
    <>
      <div className='bg-white p-4 rounded-[50%] shadow-[0_0px_20px_10px_rgba(255,255,255,0.3)]'>
        <img draggable={false} src={icon} alt={icon} className='transform -scale-x-100' />
      </div>
    </>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <div>
      <Ball icon={icon} />
    </div>
  )
}

export default BallCanvas