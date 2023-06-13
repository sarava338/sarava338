import { useGLTF } from "@react-three/drei";
import CanvasWrapper from "./utils/CanvasWrapper";

const Cube = () => {
  const cube = useGLTF("/models/cube.glb");

  return (
    <CanvasWrapper cameraPosition={{ position: [20, 3, 5], fov: 25 }}>
      <mesh>
        <hemisphereLight intensity={0.5} groundColor="black" />
        <pointLight intensity={1} />
        <primitive object={cube.scene} />
      </mesh>
    </CanvasWrapper>
  );
};

export default Cube;
