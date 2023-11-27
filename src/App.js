import {
  CameraControls,
  Environment,
  Html,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Stars,
  useTexture
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Sky } from '@react-three/drei'
import * as THREE from 'three'

import Woman from './Woman'
import Peoples from './Peoples'
import grass from './assets/grass.jpg'
import sky from './assets/sky.jpg'

const Plane = () => {
  const grassTexture = useTexture(grass)
  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping
  grassTexture.repeat.set(20, 5)

  return (
    <mesh rotation={[0, 0, 0]} position={[0, 0, -1]} receiveShadow>
      <planeGeometry attach={'geometry'} args={[20, 5]} />
      <meshStandardMaterial color='#f5756b' map={grassTexture} />
    </mesh>
  )
}

const SkyBox = () => {
  const skyTexture = useTexture(sky)
  skyTexture.wrapS = skyTexture.wrapT = THREE.RepeatWrapping
  skyTexture.repeat.set(20, 5)

  return (
    <mesh>
      <boxGeometry attach={'geometry'} args={[100, 100, 100]} />
      <meshStandardMaterial color='white' map={skyTexture} />
    </mesh>
  )
}




function App () {


  return (
    <>
      <Canvas
        style={{ height: '100vh', width: '100vw' }}
        shadows
        camera={{ position: [0, -4, 0], fov: 50 }}
      >
        {/* <PerspectiveCamera makeDefault position={[0, -4, 2]} /> */}

        <ambientLight intensity={0.5} />
        <spotLight
          args={['#ffff', 10, 0, Math.PI / 4.5, 0.5, 0]}
          position={[-4, -1, 1]}
          castShadow
        />

        {/* Models are here */}
        <mesh position={[0, 0, -1]} castShadow>
          <Woman scale={0.5} />
          <Peoples />
        </mesh>

        <Plane />
        <SkyBox />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade={false}
        />

        <OrbitControls
          maxAzimuthAngle={Math.PI / 4}
          maxPolarAngle={Math.PI}
          minAzimuthAngle={-Math.PI / 4}
          minPolarAngle={Math.PI / 4}
          enableZoom={false}
        />

        <Environment frames={Infinity} resolution={256} background blur={1}>
          <mesh>
            <sphereGeometry args={[-5, -5, 0]} />
            <meshBasicMaterial color='black' />
          </mesh>
        </Environment>
      </Canvas>
    </>
  )
}

export default App
