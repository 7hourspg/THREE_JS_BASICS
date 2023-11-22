import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Woman from './Woman'
import Peoples from './Peoples'

const Plane = () => {
  return (
    <mesh rotation={[0, 0, 0]} position={[0, 0, -1]} receiveShadow>
      <planeGeometry attach={'geometry'} args={[20, 90]} />
      <meshStandardMaterial color='#88b719' />
    </mesh>
  )
}

function App () {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }} shadows>
      <PerspectiveCamera makeDefault position={[0, -4, 2]} />

      <ambientLight intensity={0.5} />

      <spotLight
        args={['#ffff', 10, 0, Math.PI / 4.5, 0.5, 0]}
        position={[-4, -1, 1]}
        castShadow
      />

      <mesh position={[0, 0, -1]} castShadow>
        {/* Models are here */}

        <Woman scale={0.5} />
        <Peoples />
      </mesh>
      <Plane />
      <OrbitControls />

      <Environment background>
        <mesh>
          <sphereGeometry args={[-5, -5, 0]} />
          <meshBasicMaterial color='#88b719' />
        </mesh>
      </Environment>
    </Canvas>
  )
}

export default App
