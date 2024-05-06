'use client'
import { FC, ReactNode, Suspense } from 'react'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

interface IRenderModelProps {
  children: ReactNode
  position?: string
}

export const RenderModel: FC<IRenderModelProps> = ({ children, position }) => {
  return (
    <Canvas
      shadows={false}
      dpr={[1, 2]}
      style={{ width: '100vw', height: '100vh', position: 'relative', zIndex: -10, left: position }}
    >
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  )
}
