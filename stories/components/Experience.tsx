'use client'

import {
  CameraShake,
  Float,
  Torus,
  RoundedBox,
  Sphere,
  Cone,
} from '@react-three/drei'
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

        <Float rotationIntensity={2} position={[0, 0, 0]}>
          <RoundedBox
            args={[2, 2, 2]}
            radius={0.2}
            smoothness={4}
            creaseAngle={0.4}
          >
            <meshPhongMaterial color="#242423" />
          </RoundedBox>
        </Float>

        <Float rotationIntensity={2} position={[3, 0, 0]}>
          <Torus args={[1, 0.6, 16]}>
            <meshPhongMaterial color="#242423" />
          </Torus>
        </Float>

        <Float rotationIntensity={2} position={[-3, 0, 0]}>
          <Sphere args={[1.1]}>
            <meshPhongMaterial color="#242423" />
          </Sphere>
        </Float>

        <Float rotationIntensity={2} position={[0, 3, 0]}>
          <Cone args={[1, 1.5]}>
            <meshPhongMaterial color="#242423" />
          </Cone>
        </Float>
      </Canvas>
    </div>
  )
}

export default Experience
