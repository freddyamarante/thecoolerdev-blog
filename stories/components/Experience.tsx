'use client'

import { CameraShake, Float, RoundedBox } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMemo } from 'react'

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

interface ExperienceProps {
  className?: React.ComponentProps<'div'>['className']
}

const Experience = ({ className }: ExperienceProps) => {
  return (
    <div className={className}>
      <Canvas>
        <CameraShake {...cameraConfig} />
        <ambientLight intensity={0.38} color="#f5cb5c" />
        <directionalLight intensity={5} color="#f5cb5c" />
        <directionalLight
          position={[0, -5, 2]}
          intensity={0.5}
          color="#E8EDDF"
        />

        <Float rotationIntensity={10}>
          <RoundedBox
            args={[2, 2, 2]} // Width, height, depth. Default is [1, 1, 1]
            radius={0.2} // Radius of the rounded corners. Default is 0.05
            smoothness={4} // The number of curve segments. Default is 4
            creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
          >
            <meshPhongMaterial color="#242423" />
          </RoundedBox>
        </Float>
      </Canvas>
    </div>
  )
}

export default Experience
