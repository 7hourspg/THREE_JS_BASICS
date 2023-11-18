import React from 'react'
import './App.css'

import { Canvas, useFrame } from '@react-three/fiber'

const Box = () => {
  const ref = React.useRef()

  useFrame((state, delta) => {
    // ref.current.rotation.x += delta
    // ref.current.rotation.y += delta
    // ref.current.rotation.z += Math.sin(state.clock.getElapsedTime())
    state.camera.position.z = 5
  })

  return (
    <>
      <group ref={ref}>
        <mesh position={[2, 2, 0]} ref={ref}>
          <boxGeometry attach='geometry' args={[1, 1, 1]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>

        <mesh position={[2, -2, 0]} ref={ref}>
          <boxGeometry attach='geometry' args={[1, 1, 1]} />
          <meshStandardMaterial color={'green'} />
        </mesh>

        <mesh position={[-2, 2, 0]} ref={ref}>
          <boxGeometry attach='geometry' args={[1, 1, 1]} />
          <meshStandardMaterial color={'yellow'} />
        </mesh>

        <mesh position={[-2, -2, 0]} ref={ref}>
          <boxGeometry attach='geometry' args={[1, 1, 1]} />
          <meshStandardMaterial color={'red'} />
        </mesh>
      </group>
    </>
  )
}

const Sphere = () => {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry attach='geometry' args={[1, 50, 50]} />
        <meshStandardMaterial color={'green'} />
      </mesh>
    </>
  )
}

const Donut = () => {
  const ref = React.useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.rotation.z += Math.sin(state.clock.getElapsedTime())
  })
  return (
    <>
      <mesh position={[0, 0, 0]} ref={ref}>
        <torusGeometry attach='geometry' args={[1, 0.5, 50, 50]} />
        <meshStandardMaterial color={'green'} wireframe={true} />
      </mesh>
    </>
  )
}

function App () {
  return (
    <div className='App_Container'>
      <h1 style={{ color: 'black' }}>React App</h1>
      <Canvas>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[1, 1, 1]} />
        {/* <Box /> */}
        {/* <Sphere /> */}
        <Donut />
      </Canvas>
    </div>
  )
}

export default App
