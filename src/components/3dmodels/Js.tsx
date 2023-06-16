import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

const JsModel = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/models/js.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 3.141]}
      />
    </group>
  );
};

useGLTF.preload("/models/js.glb");
export default JsModel;
