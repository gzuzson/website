/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MeshJava(props) {
    const { nodes, materials } = useGLTF('/java.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Torus004.geometry}
                material={materials['Material.002']}
                position={[0.591, -0.334, -0.502]}
                rotation={[0.483, 0.687, -0.002]}
                scale={1.288}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane003.geometry}
                material={materials['Material.001']}
                position={[0.250, 1.579, -0.318]}
                rotation={[Math.PI / 2, 0, -0.629]}
                scale={0.34}
            />
        </group>
    )
}

useGLTF.preload('/java.glb')
