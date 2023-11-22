import {
  CameraControls,
  Environment,
  OrbitControls,
  PerspectiveCamera
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'
import { useRef } from 'react'
import './App.css'

const Sphere = () => {
  const ref = useRef()

  const isMobile = window.innerWidth < 768
  console.log(isMobile)

  useFrame((state, delta) => {
    ref.current.position.x = Math.sin(state.clock.getElapsedTime()) * 2
    ref.current.position.y = Math.cos(state.clock.getElapsedTime()) * 2
  })

  return (
    <>
      <mesh castShadow ref={ref}>
        <sphereGeometry attach='geometry' args={[1, 50, 50]} />
        <meshStandardMaterial color='#fff' />
      </mesh>
    </>
  )
}

const Plane = () => {
  return (
    <mesh position={[0, 0, -1]} receiveShadow>
      <planeGeometry attach={'geometry'} args={[17, 17]} />
      <meshStandardMaterial color='#87ceeb' />
    </mesh>
  )
}

function App () {
  const cameraControlRef = useRef()
  const DEG45 = Math.PI / 4
  return (
    <>
      <Canvas id='canvas' style={{ height: '100vh', width: '100vw' }} shadows>
        <PerspectiveCamera makeDefault position={[0, -10, 0]} />
        <Sphere />

        <Plane />

        {/* <directionalLight position={[-4, -1, 2]} castShadow /> */}
        <spotLight
          args={['#ffff', 10, 0, Math.PI / 4.5, 0.5, 0]}
          position={[-4, -1, 1]}
          castShadow
        />
        <ambientLight intensity={0.5} />
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <CameraControls
          ref={cameraControlRef}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Environment background>
          <mesh>
            <sphereGeometry args={[-5, -5, 0]} />
            <meshBasicMaterial color='#87ceeb' />
          </mesh>
        </Environment>
      </Canvas>
      <div style={{ position: 'absolute', top: '0' }}>
        <button
          type='button'
          onClick={() => {
            cameraControlRef.current?.rotate(DEG45, DEG45, true)
          }}
        >
          rotate theta 45deg
        </button>
        <button
          type='button'
          onClick={() => {
            cameraControlRef.current?.reset(true)
          }}
        >
          reset
        </button>
      </div>
    </>
  )
}

export default App
