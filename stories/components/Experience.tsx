'use client'

import { CameraShake } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const cameraConfig = {
  maxYaw: 0.005,
  maxPitch: 0.5,
  maxRoll: 0.5,
  yawFrequency: 0.1,
  pitchFrequency: 0.1,
  rollFrequency: 0.1,
  intensity: 0.3,
  decayRate: 0.65,
}

const Experience = () => {
  return (
    <>
      <Canvas>
        <CameraShake {...cameraConfig} />
        <ambientLight intensity={0.2} />
        <mesh rotation={[0, 0, Math.PI / 2 + 0.5]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </>
  )
}

export default Experience
