import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Computers = ({ isMobile }) => {
  const computer = useLoader(GLTFLoader, 'desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor="black" />
      <spotLight
      position={[-20,50,10]}
      angle={0}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <pointLight intensity={1.7} />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0 : 0.75}
        position={isMobile ? [0,-3,-2.2] : [0, -3.25, -1.5]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

export default () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 200px)');
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    setIsMobile(mediaQuery.matches);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1,2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preservedDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}