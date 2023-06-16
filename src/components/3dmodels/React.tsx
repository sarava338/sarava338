import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh;
    circle1: THREE.Mesh;
    circle2: THREE.Mesh;
    circle3: THREE.Mesh;
  };
  materials: {};
};

const ReactModel = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/models/react.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        scale={0.138}
      />
      <mesh
        geometry={nodes.circle2.geometry}
        material={nodes.circle2.material}
        rotation={[2.264, -0.384, -0.614]}
      />
      <mesh
        geometry={nodes.circle1.geometry}
        material={nodes.circle1.material}
        rotation={[-0.783, -0.25, -0.59]}
      />
      <mesh
        geometry={nodes.circle3.geometry}
        material={nodes.circle3.material}
        rotation={[0.37, 0.105, 0]}
      />
    </group>
  );
};

useGLTF.preload("/models/react.glb");
export default ReactModel;
