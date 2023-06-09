'use client'

import { getLandingPage, getPosts } from '@/sanity/sanity-utils'
import {
  Float,
  Torus,
  RoundedBox,
  Sphere,
  Dodecahedron,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'

interface ExperienceProps {
  className?: React.ComponentProps<'div'>['className']
}

const Experience = ({ className }: ExperienceProps) => {
  const posts = getPosts()
  const landingPage = getLandingPage()
  useEffect(() => {
    console.log(posts)
    console.log(landingPage)
  })
  return (
    <div className={className}>
      <Canvas>
        <ambientLight intensity={0.38} color="#f5cb5c" />
        <directionalLight intensity={5} color="#f5cb5c" />
        <directionalLight
          position={[0, -5, 2]}
          intensity={0.5}
          color="#E8EDDF"
        />

        <Float rotationIntensity={2} position={[6, 3, 0]}>
          <RoundedBox
            args={[2, 2, 2]}
            radius={0.2}
            smoothness={4}
            creaseAngle={0.4}
          >
            <meshPhongMaterial color="#242423" />
          </RoundedBox>
        </Float>

        <Float rotationIntensity={2} position={[-6, 3, 0]}>
          <Torus args={[1, 0.6, 16]}>
            <meshPhongMaterial color="#242423" />
          </Torus>
        </Float>

        <Float rotationIntensity={2} position={[6, -3, 0]}>
          <Sphere args={[1.1]}>
            <meshPhongMaterial color="#242423" />
          </Sphere>
        </Float>

        <Float rotationIntensity={2} position={[-6, -3, 0]}>
          <Dodecahedron args={[1.4]}>
            <meshPhongMaterial color="#242423" />
          </Dodecahedron>
        </Float>
      </Canvas>
    </div>
  )
}

export default Experience
