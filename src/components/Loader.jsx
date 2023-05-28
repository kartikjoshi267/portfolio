import React, { useEffect, useState } from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress();
  const [progressState, setProgressState] = useState(progress);

  useEffect(()=>{
    setProgressState(progress);
  }, [progress])

  return (
    <Html>
      <span className='canvas-load'></span>
      <p className='text-[14px] text-[#f1f1f1] font-bold mt-40'>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader