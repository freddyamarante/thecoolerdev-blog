'use client'

import * as THREE from 'three'
import { Float } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'

type ExperienceProps = {
  className?: React.ComponentProps<'div'>['className']
}

const geometry = new THREE.DodecahedronGeometry(1.5)
const material = new THREE.MeshPhongMaterial({ color: '#242423' })

const Experience = ({ className }: ExperienceProps) => {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={className}>
      <Canvas>
        <ambientLight intensity={0.38} color="#f5cb5c" />
        <pointLight position={[0, 0, 3]} intensity={3} color="#f5cb5c" />

        {screenWidth > 920 ? (
          <>
            <Float
              rotationIntensity={2}
              position={[screenWidth > 1300 ? 5.5 : 4.2, 2.8, 0]}
            >
              <mesh geometry={geometry} material={material} />
            </Float>

            <Float
              rotationIntensity={2}
              position={[screenWidth > 1300 ? -5.5 : -4.2, 2.8, 0]}
            >
              <mesh geometry={geometry} material={material} />
            </Float>

            <Float
              rotationIntensity={2}
              position={[screenWidth > 1300 ? 5.5 : 4.2, -3, 0]}
            >
              <mesh geometry={geometry} material={material} />
            </Float>

            <Float
              rotationIntensity={2}
              position={[screenWidth > 1300 ? -5.5 : -4.2, -3, 0]}
            >
              <mesh geometry={geometry} material={material} />
            </Float>
          </>
        ) : null}
      </Canvas>
    </div>
  )
}

export default Experience
