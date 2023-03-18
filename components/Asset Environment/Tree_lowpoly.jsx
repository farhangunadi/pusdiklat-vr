/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/pohon.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from "@react-three/cannon";

export function PohonLowPoly(props) {
  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    args: props.args,
    position: props.position,
    scale: props.scale,
    rotation: props.rotation,
    onCollide: (e) => {
      console.log(e);
    },
    ...props,
  }));
  const { nodes, materials } = useGLTF('./models/tree_lowpoly.glb')
  return (
    <group {...props} dispose={null} ref={ref} castShadow>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.003']} position={[0, 0.22, 0]} scale={[0.2, 0.22, 0.2]} />
      <mesh geometry={nodes.Icosphere.geometry} material={materials['Material.002']} position={[0, 1.39, 0]} scale={[0.49, 0.8, 0.49]} />
    </group>
  )
}

useGLTF.preload('./models/tree_lowpoly.glb')
