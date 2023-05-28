import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Earth = ({ isMobile }) => {
  const planet = useLoader(GLTFLoader, 'planet/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={3.75} groundColor="black" />
      <spotLight
      position={[-20,50,10]}
      angle={0}
      penumbra={1}
      intensity={4}
      castShadow
      shadow-mapSize={1024}
      />
      <pointLight intensity={1.7} />
      <primitive 
        object={planet.scene}
        scale={isMobile ? 3 : 3.5}
        position={isMobile ? [0,0,0] : [0, 0, 0]}
        rotation={[0.5, 0, 0]}
      />
    </mesh>
  )
}

const EarthCanvas = () => {
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
        <Earth isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default EarthCanvas