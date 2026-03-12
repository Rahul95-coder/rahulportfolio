import { useGLTF } from '@react-three/drei'

const Target = (props) => {
    const { nodes, materials } = useGLTF('/models/target.glb')

    return (
        <group {...props} dispose={null}>
            <group position={[0, 2.657, -0.133]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.WoodLegs}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.Target}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/target.glb')

export default Target