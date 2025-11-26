'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function FloatingGeometry({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  // Create particle system
  const particles = useMemo(() => {
    const count = 2000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 20
      positions[i + 2] = (Math.random() - 0.5) * 20
    }

    return positions
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2 + mousePosition.y * 0.1
      meshRef.current.rotation.y = time * 0.3 + mousePosition.x * 0.1
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.3
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05
      particlesRef.current.rotation.x = time * 0.03

      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] = Math.sin(time * 0.3 + positions[i]) * 0.02 + positions[i]
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <>
      {/* Main distorted sphere */}
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#00D1FF"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#00D1FF"
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </Sphere>

      {/* Wireframe overlay */}
      <Sphere args={[1, 32, 32]} scale={2.52} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#00D1FF"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Particle system */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#00D1FF"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Ambient rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <torusGeometry args={[3.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00D1FF" transparent opacity={0.2} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, Math.PI / 4]} position={[0, 0, 0]}>
        <torusGeometry args={[4, 0.015, 16, 100]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.1} />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D1FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFFFFF" />
      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#00D1FF"
      />
    </>
  )
}

export default function Scene3D({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <FloatingGeometry mousePosition={mousePosition} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </Canvas>
  )
}
